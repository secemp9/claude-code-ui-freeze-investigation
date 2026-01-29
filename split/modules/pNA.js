// Module: pNA
// Dependencies: ls6, e6, NrA, fy1, vl, frA, TrA, BA, is6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pNA = k(() => {
  __$.ls6();
  __$.e6();
  __$.NrA = __$.fy1("claude-cli");
  __$.vl = {
    baseLogs: () => __$.frA(__$.NrA.cache, __$.TrA(__$.BA().cwd())),
    errors: () => __$.frA(__$.NrA.cache, __$.TrA(__$.BA().cwd()), "errors"),
    messages: () => __$.frA(__$.NrA.cache, __$.TrA(__$.BA().cwd()), "messages"),
    mcpLogs: A => __$.frA(__$.NrA.cache, __$.TrA(__$.BA().cwd()), `mcp-logs-${__$.is6(A)}`)
  };
});

// Register to shared state
__$.pNA = pNA;
