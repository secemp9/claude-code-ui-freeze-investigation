// Module: wpA
// Dependencies: p7, s0, Z1, q6, ci, Qd, z6, SY, h, BC2
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wpA = k(() => {
  __$.p7();
  __$.s0();
  __$.Z1();
  __$.q6();
  __$.ci();
  __$.Qd = __$.z6(async () => {
    let {
        enabled: A
      } = await __$.SY(),
      K = {
        PreToolUse: [],
        PostToolUse: [],
        PostToolUseFailure: [],
        Notification: [],
        UserPromptSubmit: [],
        SessionStart: [],
        SessionEnd: [],
        Stop: [],
        SubagentStart: [],
        SubagentStop: [],
        PreCompact: [],
        PermissionRequest: [],
        Setup: []
      };
    for (let Y of A) {
      if (!Y.hooksConfig) continue;
      __$.h(`Loading hooks from plugin: ${Y.name}`);
      let z = __$.BC2(Y);
      for (let w of Object.keys(z)) K[w].push(...z[w]);
    }
    __$.ZzA(K);
    let q = Object.values(K).reduce((Y, z) => Y + z.reduce((w, H) => w + H.hooks.length, 0), 0);
    __$.h(`Registered ${q} hooks from ${A.length} plugins`);
  });
});

// Register to shared state
__$.wpA = wpA;
