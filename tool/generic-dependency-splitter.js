/**
 * GENERIC DEPENDENCY-AWARE AST SPLITTER
 *
 * Auto-detects bundler patterns through AST analysis:
 * - Module wrapper functions (most frequently called with function args)
 * - Runtime helpers (everything before first module usage)
 * - Lazy initializers (similar pattern)
 *
 * Then splits with full dependency tracking like the original.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';
import * as t from '@babel/types';

const traverse = _traverse.default || _traverse;
const generate = _generate.default || _generate;

const INPUT_FILE = process.argv[2] || './input/bundle.js';
const OUTPUT_DIR = process.argv[3] || './output/split';

// Standard JS globals to never rewrite
const JS_GLOBALS = new Set([
    'undefined', 'null', 'true', 'false', 'NaN', 'Infinity',
    'Object', 'Array', 'String', 'Number', 'Boolean', 'Symbol', 'BigInt',
    'Function', 'Promise', 'Map', 'Set', 'WeakMap', 'WeakSet',
    'Error', 'TypeError', 'RangeError', 'SyntaxError', 'ReferenceError',
    'JSON', 'Math', 'Date', 'RegExp', 'Proxy', 'Reflect',
    'console', 'process', 'Buffer', 'global', 'globalThis',
    'module', 'exports', 'require', '__dirname', '__filename',
    'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval',
    'setImmediate', 'clearImmediate', 'queueMicrotask',
    'arguments', 'this', 'eval', 'parseInt', 'parseFloat', 'isNaN', 'isFinite',
    'encodeURI', 'decodeURI', 'encodeURIComponent', 'decodeURIComponent',
    'Intl', 'Atomics', 'SharedArrayBuffer', 'ArrayBuffer', 'DataView',
    'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array',
    'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array',
    'WebAssembly', 'URL', 'URLSearchParams', 'TextEncoder', 'TextDecoder',
    'AbortController', 'AbortSignal', 'Event', 'EventTarget', 'fetch',
    'Request', 'Response', 'Headers', 'FormData', 'Blob', 'File',
    'ReadableStream', 'WritableStream', 'TransformStream',
    'crypto', 'performance', 'navigator', 'location', 'history',
    'window', 'document', 'self', 'top', 'parent', 'frames',
    'alert', 'confirm', 'prompt', 'print', 'open', 'close',
    'requestAnimationFrame', 'cancelAnimationFrame',
    'requestIdleCallback', 'cancelIdleCallback',
    'structuredClone', 'atob', 'btoa', 'escape', 'unescape'
]);

console.log('='.repeat(70));
console.log('GENERIC DEPENDENCY-AWARE AST SPLITTER');
console.log('='.repeat(70));

const code = readFileSync(INPUT_FILE, 'utf-8');
console.log(`[*] Parsing ${(code.length / 1024 / 1024).toFixed(2)} MB...`);

const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript', 'decorators-legacy'],
    errorRecovery: true
});

mkdirSync(OUTPUT_DIR, { recursive: true });
mkdirSync(`${OUTPUT_DIR}/modules`, { recursive: true });

// ============================================================================
// PHASE 0: Auto-detect bundler patterns via AST analysis
// ============================================================================

console.log('\n[PHASE 0] Detecting Bundler Patterns...\n');

/**
 * Detect module wrapper functions by counting usage patterns.
 * A module wrapper is typically called many times with a function argument.
 * Pattern: var X = wrapperName(function/arrow)
 */
function detectWrapperPatterns(ast) {
    // Count: identifier -> { asCallee: number, withFuncArg: number, definitions: number }
    const usageStats = new Map();

    // Track where each identifier is defined (statement index)
    const definitions = new Map(); // name -> { index, node }

    let stmtIndex = 0;
    for (const node of ast.program.body) {
        // Track definitions
        if (node.type === 'VariableDeclaration') {
            for (const decl of node.declarations) {
                if (t.isIdentifier(decl.id)) {
                    const name = decl.id.name;
                    if (!definitions.has(name)) {
                        definitions.set(name, { index: stmtIndex, node: decl });
                    }

                    // Check if this is a call with function arg (potential wrapper usage)
                    if (decl.init && t.isCallExpression(decl.init)) {
                        const callee = decl.init.callee;
                        if (t.isIdentifier(callee)) {
                            const calleeName = callee.name;
                            if (!usageStats.has(calleeName)) {
                                usageStats.set(calleeName, { asCallee: 0, withFuncArg: 0 });
                            }
                            const stats = usageStats.get(calleeName);
                            stats.asCallee++;

                            // Check if first argument is a function
                            const firstArg = decl.init.arguments[0];
                            if (t.isFunctionExpression(firstArg) || t.isArrowFunctionExpression(firstArg)) {
                                stats.withFuncArg++;
                            }
                        }
                    }
                }
            }
        }
        stmtIndex++;
    }

    // Find wrappers: called many times with function arguments
    const wrappers = [];
    for (const [name, stats] of usageStats) {
        // Threshold: at least 10 uses with function args to be considered a module wrapper
        if (stats.withFuncArg >= 10) {
            const def = definitions.get(name);
            wrappers.push({
                name,
                count: stats.withFuncArg,
                definedAt: def ? def.index : -1
            });
        }
    }

    // Sort by usage count (most used first)
    wrappers.sort((a, b) => b.count - a.count);

    return { wrappers, definitions, usageStats };
}

/**
 * Find the first statement that USES a wrapper (not defines it)
 */
function findFirstWrapperUsage(ast, wrapperNames, definitions) {
    const wrapperSet = new Set(wrapperNames);

    let stmtIndex = 0;
    for (const node of ast.program.body) {
        if (node.type === 'VariableDeclaration') {
            for (const decl of node.declarations) {
                if (decl.init && t.isCallExpression(decl.init)) {
                    const callee = decl.init.callee;
                    if (t.isIdentifier(callee) && wrapperSet.has(callee.name)) {
                        const firstArg = decl.init.arguments[0];
                        if (t.isFunctionExpression(firstArg) || t.isArrowFunctionExpression(firstArg)) {
                            // Make sure this isn't the wrapper's own definition
                            const declName = t.isIdentifier(decl.id) ? decl.id.name : null;
                            const wrapperDef = definitions.get(callee.name);

                            // If the callee was defined before this statement, this is a usage
                            if (wrapperDef && wrapperDef.index < stmtIndex) {
                                return stmtIndex;
                            }
                        }
                    }
                }
            }
        }
        stmtIndex++;
    }

    return -1;
}

/**
 * Extract all symbols defined before the first wrapper usage (these are runtime helpers)
 */
function extractRuntimeSymbols(ast, firstUsageIndex) {
    const runtimeSymbols = new Set();
    const runtimeStatements = [];

    for (let i = 0; i < firstUsageIndex && i < ast.program.body.length; i++) {
        const node = ast.program.body[i];
        runtimeStatements.push({ index: i, node });

        if (node.type === 'VariableDeclaration') {
            for (const decl of node.declarations) {
                if (t.isIdentifier(decl.id)) {
                    runtimeSymbols.add(decl.id.name);
                }
            }
        } else if (node.type === 'FunctionDeclaration' && node.id) {
            runtimeSymbols.add(node.id.name);
        } else if (node.type === 'ClassDeclaration' && node.id) {
            runtimeSymbols.add(node.id.name);
        } else if (node.type === 'ImportDeclaration') {
            for (const spec of node.specifiers) {
                if (spec.local) {
                    runtimeSymbols.add(spec.local.name);
                }
            }
        }
    }

    return { runtimeSymbols, runtimeStatements };
}

// Run detection
const { wrappers, definitions, usageStats } = detectWrapperPatterns(ast);

console.log('  Detected wrapper functions:');
if (wrappers.length === 0) {
    console.log('    (none found - will treat all as flat code)');
} else {
    for (const w of wrappers.slice(0, 5)) {
        console.log(`    ${w.name}: ${w.count} uses (defined at statement ${w.definedAt})`);
    }
    if (wrappers.length > 5) {
        console.log(`    ... and ${wrappers.length - 5} more`);
    }
}

const wrapperNames = wrappers.map(w => w.name);
const wrapperSet = new Set(wrapperNames);

const firstModuleIndex = findFirstWrapperUsage(ast, wrapperNames, definitions);
console.log(`\n  First module usage at statement: ${firstModuleIndex}`);

const { runtimeSymbols, runtimeStatements } = extractRuntimeSymbols(ast, firstModuleIndex > 0 ? firstModuleIndex : 0);
console.log(`  Runtime symbols detected: ${runtimeSymbols.size}`);
if (runtimeSymbols.size > 0 && runtimeSymbols.size <= 20) {
    console.log(`    ${Array.from(runtimeSymbols).join(', ')}`);
} else if (runtimeSymbols.size > 20) {
    console.log(`    ${Array.from(runtimeSymbols).slice(0, 20).join(', ')}...`);
}

// ============================================================================
// PHASE 1: Identifying All Symbols
// ============================================================================

console.log('\n[PHASE 1] Identifying All Symbols...\n');

const allSymbols = new Map(); // name -> { type, index, node, isModule, decl }
const importedNames = new Set();
let statementIndex = 0;

for (const node of ast.program.body) {
    if (node.type === 'ImportDeclaration') {
        for (const spec of node.specifiers) {
            if (t.isImportDefaultSpecifier(spec) || t.isImportSpecifier(spec) || t.isImportNamespaceSpecifier(spec)) {
                const localName = spec.local.name;
                importedNames.add(localName);
                allSymbols.set(localName, {
                    type: 'import',
                    index: statementIndex,
                    node: node,
                    specifier: spec,
                    isModule: false
                });
            }
        }
    } else if (node.type === 'VariableDeclaration') {
        for (const decl of node.declarations) {
            if (t.isIdentifier(decl.id)) {
                const name = decl.id.name;
                let isModule = false;

                // Check if it uses any detected wrapper with a function arg
                if (decl.init && t.isCallExpression(decl.init)) {
                    const callee = decl.init.callee;
                    if (t.isIdentifier(callee) && wrapperSet.has(callee.name)) {
                        const firstArg = decl.init.arguments[0];
                        if (t.isFunctionExpression(firstArg) || t.isArrowFunctionExpression(firstArg)) {
                            // Make sure this isn't the wrapper definition itself
                            if (name !== callee.name) {
                                isModule = true;
                            }
                        }
                    }
                }

                allSymbols.set(name, {
                    type: 'variable',
                    index: statementIndex,
                    node: node,
                    decl: decl,
                    isModule
                });
            }
        }
    } else if (node.type === 'FunctionDeclaration' && node.id) {
        allSymbols.set(node.id.name, {
            type: 'function',
            index: statementIndex,
            node: node,
            isModule: false
        });
    } else if (node.type === 'ClassDeclaration' && node.id) {
        allSymbols.set(node.id.name, {
            type: 'class',
            index: statementIndex,
            node: node,
            isModule: false
        });
    }
    statementIndex++;
}

const moduleCount = Array.from(allSymbols.values()).filter(s => s.isModule).length;
console.log(`  Total symbols: ${allSymbols.size}`);
console.log(`  Modules (wrapper-based): ${moduleCount}`);

// ============================================================================
// PHASE 2: Analyzing Dependencies via AST
// ============================================================================

console.log('\n[PHASE 2] Analyzing Dependencies via AST...\n');

const dependencies = new Map(); // moduleName -> Set of dependency names
const allSymbolNames = new Set(allSymbols.keys());

for (const [name, info] of allSymbols) {
    if (!info.isModule) continue;

    const deps = new Set();
    const decl = info.decl;

    if (decl.init && t.isCallExpression(decl.init) && decl.init.arguments.length > 0) {
        const moduleFunc = decl.init.arguments[0];

        if (t.isFunctionExpression(moduleFunc) || t.isArrowFunctionExpression(moduleFunc)) {
            const paramNames = new Set();
            for (const param of moduleFunc.params) {
                if (t.isIdentifier(param)) {
                    paramNames.add(param.name);
                }
            }

            const funcCode = generate(moduleFunc).code;
            try {
                const funcAst = parse(`(${funcCode})`, {
                    sourceType: 'module',
                    plugins: ['jsx', 'typescript'],
                    errorRecovery: true
                });

                traverse(funcAst, {
                    Identifier(path) {
                        const refName = path.node.name;

                        if (paramNames.has(refName)) return;

                        if (path.parent && t.isMemberExpression(path.parent) &&
                            path.parent.property === path.node && !path.parent.computed) {
                            return;
                        }

                        if (path.parent && t.isObjectProperty(path.parent) &&
                            path.parent.key === path.node && !path.parent.computed) {
                            return;
                        }

                        if (path.parent && t.isVariableDeclarator(path.parent) &&
                            path.parent.id === path.node) {
                            return;
                        }

                        if (path.parent && t.isFunctionDeclaration(path.parent) &&
                            path.parent.id === path.node) {
                            return;
                        }

                        if (JS_GLOBALS.has(refName)) return;
                        if (runtimeSymbols.has(refName)) return;

                        if (allSymbolNames.has(refName) && refName !== name) {
                            deps.add(refName);
                        }
                    }
                });
            } catch (e) {
                // Skip if parse fails
            }
        }
    }

    dependencies.set(name, deps);
}

let totalDeps = 0;
let maxDeps = 0;
let maxDepsModule = '';
for (const [name, deps] of dependencies) {
    totalDeps += deps.size;
    if (deps.size > maxDeps) {
        maxDeps = deps.size;
        maxDepsModule = name;
    }
}

console.log(`  Modules with dependencies: ${dependencies.size}`);
console.log(`  Total dependency edges: ${totalDeps}`);
if (maxDepsModule) {
    console.log(`  Max dependencies: ${maxDepsModule} (${maxDeps})`);
}

// ============================================================================
// PHASE 3: Computing Execution Order
// ============================================================================

console.log('\n[PHASE 3] Computing Execution Order...\n');

const executionOrder = [];
statementIndex = 0;

for (const node of ast.program.body) {
    executionOrder.push({
        index: statementIndex++,
        type: node.type,
        node: node
    });
}

console.log(`  Total statements in order: ${executionOrder.length}`);

// ============================================================================
// PHASE 4: Generating Runtime
// ============================================================================

console.log('\n[PHASE 4] Generating Runtime...\n');

const runtimeIndices = new Set(runtimeStatements.map(e => e.index));

// Generate state.js
let stateCode = '// Shared state - all modules register here\n';
stateCode += '// Using __$ to avoid conflicts with local variables\n';
stateCode += 'export const __$ = {};\n';
writeFileSync(`${OUTPUT_DIR}/state.js`, stateCode);

// Generate runtime.js
let runtimeCode = '// Runtime helpers - auto-detected, must be loaded first\n';
runtimeCode += 'import { __$ } from "./state.js";\n\n';

for (const entry of runtimeStatements) {
    const code = generate(entry.node).code;
    runtimeCode += code + '\n';
}

// Export and register detected runtime symbols
runtimeCode += '\n// Register runtime to shared state\n';
for (const name of runtimeSymbols) {
    // Only register if it's actually a valid identifier (not from imports with special chars)
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
        runtimeCode += `if (typeof ${name} !== 'undefined') __$.${name} = ${name};\n`;
    }
}

// Export the runtime symbols
const exportableSymbols = Array.from(runtimeSymbols).filter(name =>
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) && !importedNames.has(name)
);
if (exportableSymbols.length > 0) {
    runtimeCode += `\nexport { ${exportableSymbols.join(', ')} };\n`;
}

writeFileSync(`${OUTPUT_DIR}/runtime.js`, runtimeCode);
console.log(`  Written: runtime.js (${(runtimeCode.length / 1024).toFixed(1)} KB)`);

// ============================================================================
// PHASE 5: Generating Module Files
// ============================================================================

console.log('\n[PHASE 5] Generating Module Files...\n');

let moduleFilesWritten = 0;
const moduleFiles = new Map();

// Combined skip list: JS globals + detected runtime symbols + wrapper names
const skipInRewrite = new Set([...JS_GLOBALS, ...runtimeSymbols, ...wrapperNames, '__$']);

for (const [name, info] of allSymbols) {
    if (!info.isModule) continue;

    const deps = dependencies.get(name) || new Set();
    const filename = `${name}.js`;
    moduleFiles.set(name, filename);

    let moduleCode = `// Module: ${name}\n`;
    moduleCode += `// Dependencies: ${deps.size > 0 ? Array.from(deps).slice(0, 10).join(', ') : 'none'}\n`;
    if (deps.size > 10) moduleCode += `//   ... and ${deps.size - 10} more\n`;
    moduleCode += '\n';

    moduleCode += `import { __$ } from "../state.js";\n`;

    // Destructure runtime symbols we need
    const runtimeNeeded = Array.from(runtimeSymbols).filter(s => /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(s));
    if (runtimeNeeded.length > 0) {
        moduleCode += `const { ${runtimeNeeded.join(', ')} } = __$;\n\n`;
    }

    const decl = info.decl;
    let rewrittenCode;

    if (decl.init && t.isCallExpression(decl.init) && decl.init.arguments.length > 0) {
        const callback = decl.init.arguments[0];
        const callbackCode = generate(callback).code;

        try {
            const callbackAst = parse(`(${callbackCode})`, {
                sourceType: 'module',
                plugins: ['jsx', 'typescript'],
                errorRecovery: true
            });

            const paramNames = new Set();
            if (callback.params) {
                for (const param of callback.params) {
                    if (t.isIdentifier(param)) {
                        paramNames.add(param.name);
                    }
                }
            }

            traverse(callbackAst, {
                Identifier(path) {
                    const refName = path.node.name;

                    if (paramNames.has(refName)) return;

                    if (path.parent && t.isMemberExpression(path.parent) &&
                        path.parent.property === path.node && !path.parent.computed) {
                        return;
                    }

                    // Skip non-computed properties of OptionalMemberExpression (obj?.prop)
                    if (path.parent && t.isOptionalMemberExpression(path.parent) &&
                        path.parent.property === path.node && !path.parent.computed) {
                        return;
                    }

                    if (path.parent && t.isMemberExpression(path.parent) &&
                        path.parent.object === path.node &&
                        t.isIdentifier(path.parent.object) && path.parent.object.name === '__$') {
                        return;
                    }

                    if (path.parent && t.isObjectProperty(path.parent) &&
                        path.parent.key === path.node && !path.parent.computed) {
                        return;
                    }

                    if (path.parent && t.isVariableDeclarator(path.parent) &&
                        path.parent.id === path.node) {
                        return;
                    }

                    if (path.parent && (t.isFunctionDeclaration(path.parent) || t.isFunctionExpression(path.parent)) && path.parent.id === path.node) {
                        return;
                    }
                    if (path.parent && (t.isClassDeclaration(path.parent) || t.isClassExpression(path.parent)) && path.parent.id === path.node) {
                        return;
                    }

                    if (path.parent && (t.isClassMethod(path.parent) || t.isClassProperty(path.parent) || t.isClassPrivateMethod(path.parent) || t.isClassPrivateProperty(path.parent)) && path.parent.key === path.node && !path.parent.computed) {
                        return;
                    }

                    if (path.parent && t.isObjectMethod(path.parent) && path.parent.key === path.node && !path.parent.computed) {
                        return;
                    }

                    if (path.parent && t.isPrivateName(path.parent)) {
                        return;
                    }

                    // Check if this identifier is being ASSIGNED TO (left side of assignment)
                    const isAssignmentTarget = (
                        (t.isAssignmentExpression(path.parent) && path.parent.left === path.node) ||
                        (t.isUpdateExpression(path.parent) && path.parent.argument === path.node)
                    );

                    // Runtime symbols being assigned to MUST be rewritten to __$.symbol
                    if (runtimeSymbols.has(refName) && isAssignmentTarget) {
                        path.replaceWith(
                            t.memberExpression(
                                t.identifier('__$'),
                                t.identifier(refName)
                            )
                        );
                        return;
                    }

                    if (skipInRewrite.has(refName)) return;
                    if (refName === name) return;

                    if (allSymbolNames.has(refName)) {
                        path.replaceWith(
                            t.memberExpression(
                                t.identifier('__$'),
                                t.identifier(refName)
                            )
                        );
                    }
                }
            });

            const exprStmt = callbackAst.program.body[0];
            const rewrittenCallbackNode = exprStmt.expression;
            const rewrittenCallbackCode = generate(rewrittenCallbackNode).code;

            const wrapperName = decl.init.callee.name;
            rewrittenCode = `var ${name} = ${wrapperName}(${rewrittenCallbackCode});`;

        } catch (e) {
            console.log(`  [WARN] Rewrite failed for module ${name}: ${e.message}`);
            rewrittenCode = generate(info.node).code;
        }
    } else {
        rewrittenCode = generate(info.node).code;
    }

    moduleCode += rewrittenCode + '\n\n';

    moduleCode += `// Register to shared state\n`;
    if (info.node.type === 'VariableDeclaration') {
        for (const d of info.node.declarations) {
            // Only register variables that have an initializer
            // Variables without init (e.g., "var bD, wL, ED, Lo = Wr(...)")
            // are assigned inside callbacks and already use __$.varName there
            if (t.isIdentifier(d.id) && d.init) {
                moduleCode += `__$.${d.id.name} = ${d.id.name};\n`;
            }
        }
    } else {
        moduleCode += `__$.${name} = ${name};\n`;
    }

    writeFileSync(`${OUTPUT_DIR}/modules/${filename}`, moduleCode);
    moduleFilesWritten++;
}

console.log(`  Written: ${moduleFilesWritten} module files`);

// ============================================================================
// PHASE 6: Generating Non-Module Files
// ============================================================================

console.log('\n[PHASE 6] Generating Non-Module Files...\n');

const nonModuleStatements = {
    imports: [],
    functions: [],
    classes: [],
    variables: [],
    expressions: []
};

for (const entry of executionOrder) {
    if (runtimeIndices.has(entry.index)) continue;

    const node = entry.node;

    if (node.type === 'VariableDeclaration') {
        let isModule = false;
        for (const decl of node.declarations) {
            if (t.isIdentifier(decl.id) && allSymbols.get(decl.id.name)?.isModule) {
                isModule = true;
                break;
            }
        }
        if (isModule) continue;
    }

    switch (node.type) {
        case 'ImportDeclaration':
            nonModuleStatements.imports.push(entry);
            break;
        case 'FunctionDeclaration':
            nonModuleStatements.functions.push(entry);
            break;
        case 'ClassDeclaration':
            nonModuleStatements.classes.push(entry);
            break;
        case 'VariableDeclaration':
            nonModuleStatements.variables.push(entry);
            break;
        case 'ExpressionStatement':
            nonModuleStatements.expressions.push(entry);
            break;
        default:
            nonModuleStatements.variables.push(entry);
    }
}

// Generate reference files for non-modules
let importsCode = '// All imports (except those in runtime)\n\n';
for (const entry of nonModuleStatements.imports) {
    importsCode += generate(entry.node).code + '\n';
}
writeFileSync(`${OUTPUT_DIR}/imports.js`, importsCode);
console.log(`  imports.js: ${nonModuleStatements.imports.length} statements`);

let functionsCode = '// Function declarations\n';
functionsCode += 'import { __$ } from "./state.js";\n\n';
for (const entry of nonModuleStatements.functions) {
    const funcCode = generate(entry.node).code;
    functionsCode += funcCode + '\n';
    if (entry.node.id) {
        functionsCode += `__$.${entry.node.id.name} = ${entry.node.id.name};\n\n`;
    }
}
writeFileSync(`${OUTPUT_DIR}/functions.js`, functionsCode);
console.log(`  functions.js: ${nonModuleStatements.functions.length} statements`);

let classesCode = '// Class declarations\n';
classesCode += 'import { __$ } from "./state.js";\n\n';
for (const entry of nonModuleStatements.classes) {
    const classCode = generate(entry.node).code;
    classesCode += classCode + '\n';
    if (entry.node.id) {
        classesCode += `__$.${entry.node.id.name} = ${entry.node.id.name};\n\n`;
    }
}
writeFileSync(`${OUTPUT_DIR}/classes.js`, classesCode);
console.log(`  classes.js: ${nonModuleStatements.classes.length} statements`);

let variablesCode = '// Other variable declarations\n';
variablesCode += 'import { __$ } from "./state.js";\n\n';
for (const entry of nonModuleStatements.variables) {
    const varCode = generate(entry.node).code;
    variablesCode += varCode + '\n';
    if (entry.node.type === 'VariableDeclaration') {
        for (const decl of entry.node.declarations) {
            if (t.isIdentifier(decl.id)) {
                variablesCode += `__$.${decl.id.name} = ${decl.id.name};\n`;
            }
        }
    }
    variablesCode += '\n';
}
writeFileSync(`${OUTPUT_DIR}/variables.js`, variablesCode);
console.log(`  variables.js: ${nonModuleStatements.variables.length} statements`);

let entryCode = '// Entry point expressions\n';
entryCode += 'import { __$ } from "./state.js";\n\n';
for (const entry of nonModuleStatements.expressions) {
    entryCode += generate(entry.node).code + '\n';
}
writeFileSync(`${OUTPUT_DIR}/entry.js`, entryCode);
console.log(`  entry.js: ${nonModuleStatements.expressions.length} statements`);

// ============================================================================
// PHASE 7: Generating Ordered Index
// ============================================================================

console.log('\n[PHASE 7] Generating Ordered Index...\n');

let indexCode = '#!/usr/bin/env node\n';
indexCode += '// Main entry - loads all modules in execution order\n';
indexCode += '// Auto-generated by generic-dependency-splitter\n\n';

indexCode += 'import { __$ } from "./state.js";\n\n';

indexCode += '// 1. Runtime setup\n';
indexCode += 'await import("./runtime.js");\n';
if (exportableSymbols.length > 0) {
    indexCode += `const { ${exportableSymbols.slice(0, 20).join(', ')}${exportableSymbols.length > 20 ? ' /* ... */' : ''} } = __$;\n\n`;
}

const loaded = new Set();

indexCode += '// 2. All statements in original execution order\n\n';

// Helper to rewrite references
function rewriteToUseSharedState(nodeToRewrite, declaredNames = new Set()) {
    const code = generate(nodeToRewrite).code;
    try {
        const nodeAst = parse(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript'],
            errorRecovery: true
        });

        traverse(nodeAst, {
            Identifier(path) {
                const refName = path.node.name;

                if (declaredNames.has(refName)) return;

                if (path.parent && t.isMemberExpression(path.parent) &&
                    path.parent.property === path.node && !path.parent.computed) {
                    return;
                }

                if (path.parent && t.isMemberExpression(path.parent) &&
                    t.isIdentifier(path.parent.object) && path.parent.object.name === '__$') {
                    return;
                }

                if (path.parent && t.isObjectProperty(path.parent) &&
                    path.parent.key === path.node && !path.parent.computed) {
                    return;
                }

                if (path.parent && t.isVariableDeclarator(path.parent) &&
                    path.parent.id === path.node) {
                    return;
                }

                if (path.parent && (t.isFunctionDeclaration(path.parent) || t.isFunctionExpression(path.parent)) && path.parent.id === path.node) {
                    return;
                }
                if (path.parent && (t.isClassDeclaration(path.parent) || t.isClassExpression(path.parent)) && path.parent.id === path.node) {
                    return;
                }

                if (path.parent && (t.isClassMethod(path.parent) || t.isClassProperty(path.parent) || t.isClassPrivateMethod(path.parent) || t.isClassPrivateProperty(path.parent)) && path.parent.key === path.node && !path.parent.computed) {
                    return;
                }

                if (path.parent && t.isObjectMethod(path.parent) && path.parent.key === path.node && !path.parent.computed) {
                    return;
                }

                if (path.parent && t.isPrivateName(path.parent)) {
                    return;
                }

                if (path.parent && (t.isFunctionDeclaration(path.parent) || t.isFunctionExpression(path.parent) || t.isArrowFunctionExpression(path.parent)) &&
                    path.parent.params.includes(path.node)) {
                    return;
                }

                if (skipInRewrite.has(refName)) return;

                if (allSymbolNames.has(refName)) {
                    path.replaceWith(t.memberExpression(t.identifier('__$'), t.identifier(refName)));
                }
            }
        });

        const stmt = nodeAst.program.body[0];
        return generate(stmt).code;
    } catch (e) {
        return code;
    }
}

// Pre-register all FunctionDeclarations to handle hoisting
// In JS, function declarations are hoisted, so they can be called before their definition
// We need to register them to __$ first so references work correctly
indexCode += '// Pre-register hoisted function declarations\n';
for (const entry of executionOrder) {
    if (runtimeIndices.has(entry.index)) continue;
    const node = entry.node;
    if (node.type === 'FunctionDeclaration' && node.id) {
        // Rewrite references inside the function body to use __$
        const funcCode = rewriteToUseSharedState(node, new Set([node.id.name]));
        indexCode += funcCode + '\n';
        indexCode += `__$.${node.id.name} = ${node.id.name};\n`;
    }
}
indexCode += '\n';

// Track which functions we've already registered
const registeredFunctions = new Set();
for (const entry of executionOrder) {
    if (runtimeIndices.has(entry.index)) continue;
    if (entry.node.type === 'FunctionDeclaration' && entry.node.id) {
        registeredFunctions.add(entry.node.id.name);
    }
}

for (const entry of executionOrder) {
    if (runtimeIndices.has(entry.index)) continue;

    const node = entry.node;

    // Skip FunctionDeclarations - already handled above for hoisting
    if (node.type === 'FunctionDeclaration' && node.id && registeredFunctions.has(node.id.name)) {
        continue;
    }

    if (node.type === 'ImportDeclaration') {
        const importCode = generate(node).code;
        indexCode += importCode + '\n';

        for (const spec of node.specifiers) {
            if (t.isImportDefaultSpecifier(spec) || t.isImportSpecifier(spec) || t.isImportNamespaceSpecifier(spec)) {
                const localName = spec.local.name;
                indexCode += `__$.${localName} = ${localName};\n`;
            }
        }
        continue;
    }

    if (node.type === 'VariableDeclaration') {
        let isModule = false;
        let moduleNames = [];
        for (const decl of node.declarations) {
            if (t.isIdentifier(decl.id) && allSymbols.get(decl.id.name)?.isModule) {
                isModule = true;
                moduleNames.push(decl.id.name);
            }
        }
        if (isModule && moduleNames.length > 0) {
            const firstName = moduleNames[0];
            if (!loaded.has(firstName)) {
                indexCode += `await import("./modules/${firstName}.js");\n`;
                for (const name of moduleNames) {
                    indexCode += `var ${name} = __$.${name};\n`;
                    loaded.add(name);
                }
            }
            continue;
        }
    }

    if (node.type === 'FunctionDeclaration' && node.id) {
        const localNames = new Set();
        if (node.params) {
            for (const p of node.params) {
                if (t.isIdentifier(p)) localNames.add(p.name);
            }
        }
        const rewrittenCode = rewriteToUseSharedState(node, localNames);
        indexCode += rewrittenCode + '\n';
        indexCode += `__$.${node.id.name} = ${node.id.name};\n`;
        continue;
    }

    if (node.type === 'ClassDeclaration' && node.id) {
        const rewrittenCode = rewriteToUseSharedState(node, new Set());
        indexCode += rewrittenCode + '\n';
        indexCode += `__$.${node.id.name} = ${node.id.name};\n`;
        continue;
    }

    if (node.type === 'VariableDeclaration') {
        // Split multi-declarator statements into individual statements with immediate registration
        // This fixes issues where a later declarator's initializer calls a function that
        // uses a symbol defined earlier in the same statement via __$
        // Example: var PPe = class..., Hco = Rco(tx) where Rco uses __$.PPe

        // Collect all names that will be declared
        const declaredInThisStmt = new Set();
        for (const decl of node.declarations) {
            if (t.isIdentifier(decl.id)) {
                declaredInThisStmt.add(decl.id.name);
            }
        }

        // Track names that have been defined and registered so far
        const registeredSoFar = new Set();

        for (const decl of node.declarations) {
            // For this declarator, don't rewrite refs to names not yet registered
            // But DO rewrite refs to names that have already been registered
            const skipRewrite = new Set();
            for (const name of declaredInThisStmt) {
                if (!registeredSoFar.has(name)) {
                    skipRewrite.add(name);
                }
            }

            // Create a single-declarator statement for this one
            const singleDecl = t.variableDeclaration(node.kind, [decl]);
            const rewrittenCode = rewriteToUseSharedState(singleDecl, skipRewrite);
            indexCode += rewrittenCode + '\n';

            // Immediately register to __$ so later declarators can access it
            if (t.isIdentifier(decl.id)) {
                indexCode += `__$.${decl.id.name} = ${decl.id.name};\n`;
                registeredSoFar.add(decl.id.name);
            }
        }
        continue;
    }

    const stmtCode = rewriteToUseSharedState(node, new Set());
    indexCode += stmtCode + '\n';
}

writeFileSync(`${OUTPUT_DIR}/index.js`, indexCode);
console.log(`  Written: index.js (${(indexCode.length / 1024).toFixed(1)} KB)`);

// ============================================================================
// PHASE 8: Creating Flat Fallback
// ============================================================================

console.log('\n[PHASE 8] Creating Flat Fallback...\n');

let flatCode = '#!/usr/bin/env node\n';
flatCode += '// Flat version - all code in one file (for comparison)\n\n';

for (const node of ast.program.body) {
    flatCode += generate(node).code + '\n';
}

flatCode = flatCode.replace('#!/usr/bin/env node\n#!/usr/bin/env node', '#!/usr/bin/env node');

writeFileSync(`${OUTPUT_DIR}/flat.js`, flatCode);
console.log(`  Written: flat.js (${(flatCode.length / 1024 / 1024).toFixed(2)} MB)`);

// Write dependency graph
const depGraph = {};
for (const [name, deps] of dependencies) {
    depGraph[name] = Array.from(deps);
}
writeFileSync(`${OUTPUT_DIR}/dependencies.json`, JSON.stringify(depGraph, null, 2));

// Write detected patterns info
const patternsInfo = {
    detectedWrappers: wrappers.slice(0, 10),
    runtimeSymbols: Array.from(runtimeSymbols),
    firstModuleIndex,
    totalModules: moduleCount,
    totalSymbols: allSymbols.size,
    totalDependencyEdges: totalDeps
};
writeFileSync(`${OUTPUT_DIR}/patterns.json`, JSON.stringify(patternsInfo, null, 2));

// Write package.json for ES modules
writeFileSync(`${OUTPUT_DIR}/package.json`, JSON.stringify({ type: 'module' }, null, 2));

console.log('\n' + '='.repeat(70));
console.log('GENERIC DEPENDENCY-AWARE SPLIT COMPLETE');
console.log('='.repeat(70));
console.log(`\nOutput: ${OUTPUT_DIR}/`);
console.log(`\nDetected patterns saved to: ${OUTPUT_DIR}/patterns.json`);
console.log(`\nTest commands:`);
console.log(`  node ${OUTPUT_DIR}/flat.js --help     # Flat version (should work)`);
console.log(`  node ${OUTPUT_DIR}/index.js --help   # Split version`);
