// Module: C57
// Dependencies: k57, G7, wzY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C57 = k(() => {
  __$.k57 = {
    agentType: "Bash",
    whenToUse: "Command execution specialist for running bash commands. Use this for git operations, command execution, and other terminal tasks.",
    tools: [__$.G7],
    source: "built-in",
    baseDir: "built-in",
    model: "inherit",
    getSystemPrompt: () => __$.wzY
  };
});

// Register to shared state
__$.C57 = C57;
