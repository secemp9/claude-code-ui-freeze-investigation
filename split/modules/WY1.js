// Module: WY1
// Dependencies: z7, j$A, MT9, U, PT9, VT9, _h4, Gh4, ek, px

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WY1 = k(() => {
  __$.z7();
  __$.j$A();
  __$.MT9 = __$.U.object({
    type: __$.U.literal("command").describe("Bash command hook type"),
    command: __$.U.string().describe("Shell command to execute"),
    timeout: __$.U.number().positive().optional().describe("Timeout in seconds for this specific command"),
    statusMessage: __$.U.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: __$.U.boolean().optional().describe("If true, hook runs once and is removed after execution"),
    async: __$.U.boolean().optional().describe("If true, hook runs in background without blocking")
  }), __$.PT9 = __$.U.object({
    type: __$.U.literal("prompt").describe("LLM prompt hook type"),
    prompt: __$.U.string().describe("Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON."),
    timeout: __$.U.number().positive().optional().describe("Timeout in seconds for this specific prompt evaluation"),
    model: __$.U.string().optional().describe('Model to use for this prompt hook (e.g., "claude-sonnet-4-5-20250929"). If not specified, uses the default small fast model.'),
    statusMessage: __$.U.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: __$.U.boolean().optional().describe("If true, hook runs once and is removed after execution")
  }), __$.VT9 = __$.U.object({
    type: __$.U.literal("agent").describe("Agentic verifier hook type"),
    prompt: __$.U.string().transform(A => K => A).describe('Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.'),
    timeout: __$.U.number().positive().optional().describe("Timeout in seconds for agent execution (default 60)"),
    model: __$.U.string().optional().describe('Model to use for this agent hook (e.g., "claude-sonnet-4-5-20250929"). If not specified, uses Haiku.'),
    statusMessage: __$.U.string().optional().describe("Custom status message to display in spinner while hook runs"),
    once: __$.U.boolean().optional().describe("If true, hook runs once and is removed after execution")
  }), __$._h4 = __$.U.discriminatedUnion("type", [__$.MT9, __$.PT9, __$.VT9]), __$.Gh4 = __$.U.object({
    matcher: __$.U.string().optional().describe('String pattern to match (e.g. tool names like "Write")'),
    hooks: __$.U.array(__$._h4).describe("List of hooks to execute when the matcher matches")
  }), __$.ek = __$.U.partialRecord(__$.U.enum(__$.px), __$.U.array(__$.Gh4));
});

// Register to shared state
__$.WY1 = WY1;
