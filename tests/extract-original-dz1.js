#!/usr/bin/env node
/**
 * Extract the original dZ1 module from the bundled cli.js
 * for comparison with the patched version.
 *
 * This uses the same AST techniques as the original splitting.
 */

const fs = require('fs');
const path = require('path');

const CLI_PATH = '/home/nourdine/claude_testbed/package/cli.js';
const OUTPUT_PATH = '/home/nourdine/claude_testbed/original-dZ1-extracted.js';

console.log('Reading original bundle...');
const content = fs.readFileSync(CLI_PATH, 'utf8');

// Find the dZ1 module in the bundle
// The bundle uses a pattern like: dZ1:()=>{ ... module code ... }
// or dZ1:(e,t,r)=>{ ... }

// Look for the Task tool module - it contains unique strings we can search for
const searchPatterns = [
  'subagent',
  'Task tool',
  'spawns',
  'background',
];

console.log('Searching for dZ1 module boundaries...');

// Find all module definitions in the esbuild bundle format
// Pattern: identifier:(parameters)=>{...}
const modulePattern = /([a-zA-Z0-9_$]+):\s*\([^)]*\)\s*=>\s*\{/g;
let match;
const modules = [];

while ((match = modulePattern.exec(content)) !== null) {
  modules.push({
    name: match[1],
    start: match.index,
    headerEnd: match.index + match[0].length
  });
}

console.log(`Found ${modules.length} potential module definitions`);

// Find dZ1 specifically
const dZ1Module = modules.find(m => m.name === 'dZ1');

if (!dZ1Module) {
  // Try alternative search - look for the content patterns
  console.log('dZ1 not found by name, searching by content...');

  // Search for unique strings that identify the Task tool
  const taskToolPatterns = [
    /subagent_type/,
    /max_turns/,
    /run_in_background/,
    /Task tool/i
  ];

  for (const pattern of taskToolPatterns) {
    const match = content.match(pattern);
    if (match) {
      console.log(`Found pattern "${pattern}" at position ${match.index}`);
    }
  }
}

if (dZ1Module) {
  console.log(`Found dZ1 module at position ${dZ1Module.start}`);

  // Now find the end of this module by counting braces
  let braceCount = 1;
  let pos = dZ1Module.headerEnd;
  let moduleEnd = pos;

  while (braceCount > 0 && pos < content.length) {
    const char = content[pos];
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;
    pos++;
    if (braceCount === 0) moduleEnd = pos;
  }

  const moduleCode = content.slice(dZ1Module.start, moduleEnd);
  console.log(`Extracted ${moduleCode.length} characters`);

  // Format it slightly for readability
  const formatted = moduleCode
    .replace(/;/g, ';\n')
    .replace(/\{/g, '{\n')
    .replace(/\}/g, '\n}');

  fs.writeFileSync(OUTPUT_PATH, moduleCode);
  console.log(`Written to ${OUTPUT_PATH}`);

  // Also extract key snippets for comparison
  console.log('\n=== KEY CODE SECTIONS ===\n');

  // Look for the main loop pattern
  const loopMatch = moduleCode.match(/while\s*\(\s*!0\s*\)\s*\{[\s\S]{0,2000}/);
  if (loopMatch) {
    console.log('Main processing loop (first 500 chars):');
    console.log(loopMatch[0].slice(0, 500));
    console.log('...\n');
  }

  // Look for setImmediate usage
  const setImmediateMatches = moduleCode.match(/setImmediate/g);
  console.log(`setImmediate occurrences: ${setImmediateMatches ? setImmediateMatches.length : 0}`);

  // Look for setTimeout usage
  const setTimeoutMatches = moduleCode.match(/setTimeout/g);
  console.log(`setTimeout occurrences: ${setTimeoutMatches ? setTimeoutMatches.length : 0}`);

  // Look for continue statements
  const continueMatches = moduleCode.match(/continue\s*;/g);
  console.log(`continue statements: ${continueMatches ? continueMatches.length : 0}`);

  // Check for yield patterns
  const yieldMatches = moduleCode.match(/await\s+new\s+Promise/g);
  console.log(`await new Promise patterns: ${yieldMatches ? yieldMatches.length : 0}`);

} else {
  console.log('Could not locate dZ1 module by name.');
  console.log('Attempting content-based extraction...');

  // Find content between recognizable markers
  const startMarker = content.indexOf('subagent_type');
  if (startMarker !== -1) {
    // Work backwards to find module start
    let searchPos = startMarker;
    while (searchPos > 0 && content.slice(searchPos - 20, searchPos).indexOf(':') === -1) {
      searchPos--;
    }

    console.log(`Found subagent_type at ${startMarker}, searching backwards...`);

    // Extract a window around this code
    const windowStart = Math.max(0, startMarker - 5000);
    const windowEnd = Math.min(content.length, startMarker + 20000);
    const window = content.slice(windowStart, windowEnd);

    fs.writeFileSync(OUTPUT_PATH, window);
    console.log(`Extracted ${window.length} chars around Task tool code to ${OUTPUT_PATH}`);
  }
}

// Additional analysis - find ALL yield-related code in the entire bundle
console.log('\n=== BUNDLE-WIDE YIELD ANALYSIS ===\n');

const bundleSetImmediate = (content.match(/setImmediate/g) || []).length;
const bundleSetTimeout = (content.match(/setTimeout/g) || []).length;
const bundleAwaitPromise = (content.match(/await\s+new\s+Promise/g) || []).length;

console.log(`Total setImmediate calls in bundle: ${bundleSetImmediate}`);
console.log(`Total setTimeout calls in bundle: ${bundleSetTimeout}`);
console.log(`Total await new Promise patterns: ${bundleAwaitPromise}`);
