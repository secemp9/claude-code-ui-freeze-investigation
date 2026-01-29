// Module: bkK
// Dependencies: akA, Ye2, tq, hkK, bcA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bkK = k(() => {
  __$.akA();
  __$.Ye2 = __$.tq.object({
    entries: __$.tq.record(__$.tq.string(), __$.tq.string())
  }), __$.hkK = __$.tq.object({
    userId: __$.tq.string(),
    version: __$.tq.number(),
    lastModified: __$.tq.string(),
    checksum: __$.tq.string(),
    content: __$.Ye2
  }), __$.bcA = {
    USER_SETTINGS: "~/.claude/settings.json",
    USER_MEMORY: "~/.claude/CLAUDE.md",
    projectSettings: A => `projects/${A}/.claude/settings.local.json`,
    projectMemory: A => `projects/${A}/CLAUDE.local.md`
  };
});

// Register to shared state
__$.bkK = bkK;
