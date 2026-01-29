// Module: V7A
// Dependencies: q6, e6, Z1, C1, _u4, CK, K7, NL9, TL9, vx
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V7A = k(() => {
  __$.q6();
  __$.e6();
  __$.Z1();
  __$.C1();
  __$._u4();
  __$.CK();
  __$.K7();
  __$.NL9 = ["github.com:anthropics/claude-cli-internal", "github.com/anthropics/claude-cli-internal", "github.com:anthropics/anthropic", "github.com/anthropics/anthropic", "github.com:anthropics/apps", "github.com/anthropics/apps", "github.com:anthropics/terraform-config", "github.com/anthropics/terraform-config", "github.com:anthropics/hex-export", "github.com/anthropics/hex-export", "github.com:anthropics/feedback-v2", "github.com/anthropics/feedback-v2"], __$.TL9 = __$.vx(async () => {
    if (__$.vSA !== null) return __$.vSA;
    let A = __$.V8(),
      K = await __$.A7("git", ["remote", "get-url", "origin"], {
        cwd: A,
        timeout: 5000
      });
    if (K.code !== 0) return __$.vSA = !1, !1;
    let q = K.stdout.trim();
    return __$.vSA = __$.NL9.some(Y => q.includes(Y)), __$.vSA;
  });
});

// Register to shared state
__$.V7A = V7A;
