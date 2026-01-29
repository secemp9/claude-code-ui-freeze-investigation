# Claude Code UI Freeze Investigation

This repository contains the complete investigation, fix, and verification for a UI freeze bug in Claude Code version 2.1.23.

## The Bug

Claude Code's terminal UI freezes during subagent operations because the Task tool (`dZ1.js`) lacks proper yield points, starving React/Ink's render loop.

## Repository Structure

```
├── final.md                    # Full blog post with technical analysis
├── patches/
│   ├── dZ1.js                  # Patched Task tool module with yield fixes
│   └── functions-OWA-fix.patch # O(n) slice fix for OWA function
└── tests/
    ├── freeze-comparison-test.js   # Simulates original vs patched patterns
    ├── real-freeze-test.js         # Tests against actual bundles
    ├── definitive-comparison.js    # Engineering-level code analysis
    └── extract-original-dz1.js     # Extracts original module from bundle
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

## About the Splitting Tool

The AST-based splitting tool (`ast-deobf-tools`) used to extract modules from the bundle is not included here to keep this repo focused on the bug report. If you're interested in the methodology, it's described in `final.md`. The tool itself is available separately on request.

Note: The full split/deobfuscated codebase is intentionally not included - Anthropic engineers have access to the actual source code and don't need a reversed copy.

## License

This investigation is provided for educational purposes. The original Claude Code is property of Anthropic.
