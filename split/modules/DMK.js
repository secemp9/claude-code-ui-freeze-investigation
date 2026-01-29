// Module: DMK
// Dependencies: e9A, Yd2, XF6, $F6, t9A, ZMK, _MK, WMK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DMK = k(() => {
  __$.e9A();
  __$.Yd2 = {
    description: "View release notes",
    isEnabled: () => !0,
    isHidden: !1,
    name: "release-notes",
    userFacingName() {
      return "release-notes";
    },
    type: "local",
    supportsNonInteractive: !0,
    async call() {
      let A = [];
      try {
        let q = new Promise((Y, z) => {
          setTimeout(() => z(Error("Timeout")), 500);
        });
        await Promise.race([__$.XF6(), q]), A = __$.$F6(__$.t9A());
      } catch {}
      if (A.length > 0) return {
        type: "text",
        value: __$.ZMK(A)
      };
      let K = __$.$F6();
      if (K.length > 0) return {
        type: "text",
        value: __$.ZMK(K)
      };
      return {
        type: "text",
        value: `See the full changelog at: ${__$._MK}`
      };
    }
  }, __$.WMK = __$.Yd2;
});

// Register to shared state
__$.DMK = DMK;
