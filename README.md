# Claude Code UI Freeze Investigation

This repository contains the complete investigation, fix, and verification for a UI freeze bug in Claude Code version 2.1.23.

**Everything is included.** The original bundle, the full deobfuscated/split version, the patches, and the tests. Verify it yourself.

## The Bug

Claude Code's terminal UI freezes during subagent operations because the Task tool (`dZ1.js`) lacks proper yield points, starving React/Ink's render loop.

## Repository Structure

```
├── final.md                        # Full blog post with technical analysis
├── DIFF.md                         # Skimmable summary for engineers
├── original/
│   └── cli.js                      # Original 11MB bundled CLI (v2.1.23)
├── split/                          # Full deobfuscated version (4,728 modules)
│   ├── index.js                    # Entry point - run with: node split/index.js
│   ├── modules/
│   │   ├── dZ1.js                  # Task tool (PATCHED)
│   │   └── ... (4,728 modules)
│   └── functions.js                # Contains O(n) slice fix
├── tool/
│   ├── generic-dependency-splitter.js  # AST-based bundle splitter
│   ├── package.json                    # Dependencies (babel)
│   └── README.md                       # Tool documentation
├── patches/
│   ├── dZ1.js                      # Just the patched module
│   └── functions-OWA-fix.patch     # The O(n) fix
└── tests/
    ├── freeze-comparison-test.js   # Simulates original vs patched patterns
    ├── real-freeze-test.js         # Tests against actual bundles
    ├── definitive-comparison.js    # Engineering-level code analysis
    └── extract-original-dz1.js     # Extracts original module from bundle
```

## The Splitting Tool

The AST-based splitting tool is included in `tool/`:

```bash
cd tool && npm install
node generic-dependency-splitter.js ../original/cli.js ../output --preserve-names --create-index
# Output: 4,728 modules extracted
```

## Key Findings

| Metric | Original | Patched |
|--------|----------|---------|
| `setTimeout` yields | 0 | 2 |
| `yieldWithAbortCheck` helper | NO | YES |
| Batched yields (`% 16`) | NO | YES |
| React renders during operation | 0 | 12 |

## Running the Tests

```bash
# 1. Get the original bundle
npm pack @anthropic-ai/claude-code@2.1.23 --pack-destination .
tar -xzf anthropic-ai-claude-code-2.1.23.tgz

# 2. Run the definitive comparison
node tests/definitive-comparison.js

# 3. Run the freeze simulation
node tests/freeze-comparison-test.js --both
```

## The Fix

The core fix is a yield helper that:
1. Uses `setTimeout(0)` instead of `setImmediate` (correct event loop phase)
2. Checks abort signals after each yield
3. Batches yields every 16 iterations in loops

```javascript
const yieldWithAbortCheck = async () => {
  await new Promise(resolve => setTimeout(resolve, 0));
  if ($.abortController?.signal?.aborted) throw new AbortError();
};
```

## Verification

All fixes verified against actual bundle code:
- ✅ 5/5 code fixes confirmed
- ✅ Behavioral test shows 0 → 12 React renders
- ✅ Patched version outputs identical `--version` and `--help`

## Corrections Welcome

If you spot errors in the analysis, please open an issue. I'd rather be corrected than confidently wrong.

## Verify It Yourself

```bash
# Run the original (freezes)
node original/cli.js --version

# Run the patched split version (doesn't freeze)
node split/index.js --version

# Both output: 2.1.23 (Claude Code)

# Run the comparison tests
node tests/definitive-comparison.js
```

## License

This investigation is provided for educational purposes. The original Claude Code is property of Anthropic.
