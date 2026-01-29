// Module: SF6
// Dependencies: xG, g2, ov1, GVA, l7, o7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SF6 = k(() => {
  __$.xG();
  __$.g2();
  __$.ov1 = __$.GVA({
    name: "review",
    description: "Review a pull request",
    progressMessage: "reviewing pull request",
    pluginName: "code-review",
    pluginCommand: "code-review",
    async getPromptWhileMarketplaceIsPrivate(A) {
      return __$.l7("review"), [{
        type: "text",
        text: `
      You are an expert code reviewer. Follow these steps:

      1. If no PR number is provided in the args, use ${__$.o7.name}("gh pr list") to show open PRs
      2. If a PR number is provided, use ${__$.o7.name}("gh pr view <number>") to get PR details
      3. Use ${__$.o7.name}("gh pr diff <number>") to get the diff
      4. Analyze the changes and provide a thorough code review that includes:
         - Overview of what the PR does
         - Analysis of code quality and style
         - Specific suggestions for improvements
         - Any potential issues or risks

      Keep your review concise but thorough. Focus on:
      - Code correctness
      - Following project conventions
      - Performance implications
      - Test coverage
      - Security considerations

      Format your review with clear sections and bullet points.

      PR number: ${A}
    `
      }];
    }
  });
});

// Register to shared state
__$.SF6 = SF6;
