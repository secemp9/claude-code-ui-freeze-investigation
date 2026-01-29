# ast-deobf-tools

JavaScript/Node.js deobfuscation toolkit using AST (Abstract Syntax Tree) analysis. A collection of tools for parsing, splitting, analyzing, verifying, and reverse-engineering obfuscated JavaScript code.

## Quick Start - Splitting Bundled Code

**Start here:** `generic-dependency-splitter.js` is the primary tool for splitting minified/bundled JavaScript into separate modules while preserving full functionality.

### Installation

```bash
npm install @babel/parser @babel/traverse @babel/generator @babel/types
```

### Usage

```bash
node generic-dependency-splitter.js <input-bundle.js> <output-directory>
```

### Example: Splitting a bundled CLI

```bash
# Download an npm package without installing
npm pack @anthropic-ai/claude-code
tar -xzf anthropic-ai-claude-code-*.tgz

# Split the bundled CLI
node generic-dependency-splitter.js package/cli.js ./output/split

# Test both versions work identically
node ./output/split/flat.js --version    # Reassembled flat version
node ./output/split/index.js --version   # Split modular version
```

### What it does

1. **Auto-detects bundler patterns** - Analyzes AST to find module wrapper functions (e.g., `k()`, `v()`, `M()`, `w()`) by counting call frequency with function arguments
2. **Identifies runtime helpers** - Extracts the bundler's runtime code (require shims, exports helpers, lazy initializers)
3. **Maps dependencies** - Builds a complete dependency graph between all modules
4. **Preserves execution order** - Maintains exact initialization sequence for lazy-evaluated modules
5. **Generates split output**:
   - `runtime.js` - Bundler helpers
   - `modules/` - Individual module files (one per detected module)
   - `imports.js`, `functions.js`, `classes.js`, `variables.js` - Non-module code
   - `index.js` - Ordered loader that imports everything in correct sequence
   - `flat.js` - Reassembled single file (for verification)
   - `dependencies.json`, `patterns.json` - Analysis metadata

### Supported bundlers

Works with any bundler using lazy module wrapper patterns:
- **esbuild** - `k()` wrapper pattern
- **webpack** - `__webpack_require__` patterns
- **rollup** - Various module patterns
- **Custom bundlers** - Auto-detected via AST frequency analysis

---

## Tools

### Core Analysis

| Tool | Description |
|------|-------------|
| `analyzer.js` | Comprehensive AST analyzer that extracts functions, classes, variables, imports, exports, URLs, and API endpoints from large JavaScript files |
| `deep-analyzer.js` | Deep analysis extracting core modules, call graphs, string patterns, async/error handling, tools, and permissions |
| `ast-query.js` | Precision AST querying to find symbol definitions, references, patterns, dependencies, and code context without regex |
| `ast-features.js` | Counts and reports all modern JavaScript AST features preserved in split code (async, generators, destructuring, optional chaining, etc.) |
| `module-analyzer.js` | Analyzes module structure, relationships, and metadata to understand code organization |

### Splitting & Extraction

| Tool | Description |
|------|-------------|
| `ast-splitter.js` | Splits minified CLI code into separate formatted statements while preserving exact execution order and parse equivalence |
| `dependency-aware-splitter.js` | Splits CLI into proper ES modules tracking AST dependencies while preserving execution order and mutual references |
| `generic-dependency-splitter.js` | **Primary splitting tool** - Auto-detects bundler patterns via AST frequency analysis, extracts modules with full dependency tracking, preserves execution order. Works with esbuild, webpack, rollup, and custom bundlers. |
| `multi-file-splitter.js` | Splits large monolithic files into multiple smaller files while tracking cross-file dependencies |
| `module-extractor.js` | Extracts individual modules from bundled/minified code while preserving dependencies |
| `library-separator.js` | Separates third-party library code from application code based on dependency patterns |
| `claude-core-extractor.js` | Extracts Claude-specific code modules (tools, API, permissions, hooks, MCP) from minified CLI and generates categorized output |

### AST Comparison & Hashing

| Tool | Description |
|------|-------------|
| `compare-ast.js` | Normalized AST comparison that hashes code structure while normalizing variable names and literal values |
| `compare-ast-deep.js` | Deep semantic AST comparison using isomorphism classes to normalize minified code differences |
| `lazy-ast-hash.js` | Efficient incremental AST hashing for lazy evaluation and streaming architectures |
| `streaming-ast-hash.js` | Memory-efficient streaming AST hashing for large files using iterative depth-first traversal |
| `diff-nodes.js` | Compares AST node type counts between original and transformed files to identify structural differences |
| `trace-diff.js` | Traces differences in AST between two code versions to locate structural divergences |

### Verification

| Tool | Description |
|------|-------------|
| `deep-verify.js` | 20-test verification suite comparing split vs flat code: startup time, exit codes, AST structures, features, and integration |
| `static-deep-verify.js` | Static code verification without execution comparing AST structures between versions |
| `verify-split.js` | Verifies that split code maintains parse correctness and statement equivalence |

### Dependency & Module Graph

| Tool | Description |
|------|-------------|
| `get-deps.js` | Extracts and lists all dependencies from JavaScript files without executing them |
| `resolve-module-graph.js` | Resolves complete dependency graph including transitive dependencies and circularity detection |
| `execution-order-mapper.js` | Maps exact execution order of top-level statements, identifying lazy/eager modules and initialization sequences |
| `cluster-analysis.js` | Builds dependency graphs and computes connectivity metrics to identify module clusters and hubs |
| `cluster-cli.js` | Query tool for cluster analysis data with commands for stats, hubs, clusters, sinks, sources, and dependency searches |
| `classify-modules.js` | Classifies modules into npm packages vs app code using multi-rule detection and dependency-based classification |

### Renaming & Refactoring

| Tool | Description |
|------|-------------|
| `smart-renamer.js` | Intelligently renames minified variables based on usage patterns and scope analysis |
| `variable-renamer.js` | Renames variables to be more descriptive based on usage and scope analysis |

### npm Package Detection

| Tool | Description |
|------|-------------|
| `find-npm-version.js` | Bruteforces npm package versions using semantic token matching to identify exact source package for obfuscated modules |
| `replace-with-npm.js` | Replaces extracted modules with their original npm package versions |
| `analyze-packages.js` | Analyzes modules in a database to detect npm packages from their descriptions using regex pattern matching |
| `find-smallest-pkg.js` | Ranks installed npm packages by AST node count to identify smallest packages for analysis |

### Package & Directory Reconstruction

| Tool | Description |
|------|-------------|
| `build-package-structure.js` | Reconstructs directory structure mapping each module to npm packages based on description content analysis |
| `reconstruct-dirs.js` | Reconstructs original directory structure from module metadata and classifications |

### Parsing & Pipeline

| Tool | Description |
|------|-------------|
| `streaming-parser.js` | Streaming parser that processes large files incrementally without loading entire AST into memory |
| `pipeline.js` | Orchestrates multi-stage analysis pipeline: parsing, analysis, verification, and output generation |
| `block-context.js` | Analyzes BlockStatement parent contexts to trace extra block nodes created during code transformation |

### Database

| Tool | Description |
|------|-------------|
| `module-db.js` | Database operations for storing and querying module analysis results |

### Return Statement Analysis

Tools for analyzing, counting, and tracing return statement behavior during AST transformations:

| Tool | Description |
|------|-------------|
| `analyze_returns.mjs` | Analyzes return statements to detect ternary expressions and complex control flow patterns |
| `count_returns.mjs` | Counts logical return statements including ternary expressions and arrow function implicit returns |
| `real_count.mjs` | Counts actual return statements by measuring runtime behavior rather than static analysis |
| `match_returns.mjs` | Matches return statement patterns between original and transformed code to verify correctness |
| `check_skip.mjs` | Detects which return statements should be skipped based on whether they return undefined at function end |
| `check_const.mjs` | Checks if specific code patterns produce expected constant values during AST traversal |
| `check_obj.mjs` | Tests object expression patterns to verify proper AST node categorization and detection |
| `check_ternary.mjs` | Analyzes ternary expressions in return statements to identify assignments and complex branching |
| `find_skip.mjs` | Debugger to find which return statements should be skipped based on unit type and function context |
| `find_skipped.mjs` | Locates all undefined return statements that would be skipped at the end of functions |

### Tracing & Debugging

Tools for tracing execution paths and debugging AST transformation behavior:

| Tool | Description |
|------|-------------|
| `trace_all_returns.mjs` | Comprehensive tracer logging all return statements including context and behavior |
| `trace_return.mjs` | Complete return statement trace through AST with detailed logging |
| `trace_arrow.mjs` | Traces arrow function return behavior including implicit returns from expression bodies |
| `trace_cond.mjs` | Traces conditional return patterns (if/else, ternary) through execution |
| `trace_context.mjs` | Traces return statement context within functions to verify function boundaries |
| `trace_extraction.mjs` | Traces module extraction process to verify correct code path identification |
| `trace_full.mjs` | Full end-to-end trace of return handling through entire transformation pipeline |
| `trace_member.mjs` | Traces member expression patterns to verify property access handling |
| `trace_member2.mjs` | Debugger for member expression handling in second pass of analysis |
| `trace_negation.mjs` | Traces negation operators in conditional contexts and their effect on return counting |
| `trace_npm.mjs` | Traces npm module version detection and matching process |
| `trace_real.mjs` | Real runtime trace capturing actual execution behavior for validation |
| `trace_sig_emit.mjs` | Traces signature emission during AST semantic normalization |
| `trace_sigs.mjs` | Traces signature generation for isomorphic code pattern matching |
| `trace_skip.mjs` | Traces which return statements are skipped and why during analysis |
| `trace_unary_deep.mjs` | Deep tracer for unary operators in complex nested expressions |
| `instrument.mjs` | Instruments code with logging to trace return statements and understand control flow |
| `real_trace.mjs` | Runtime tracer that instruments code to capture actual execution path and return behavior |

### Tests

| Tool | Description |
|------|-------------|
| `test_arrow.mjs` | Tests arrow function handling to verify return statement counting accuracy |
| `test_exact.mjs` | Exact match tests verifying return count precision against expected values |
| `test_nested.mjs` | Tests nested ternary and conditional patterns in return statements |

### Debug Utilities

| Tool | Description |
|------|-------------|
| `debug_returns.mjs` | Traces return statement handling with detailed logging to validate return counting logic |
| `debug_returns2.mjs` | Debugger that traces return statement patterns to understand which are skipped vs emitted |
