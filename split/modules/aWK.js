// Module: aWK
// Dependencies: cA, GWK, Kg6, Te, A4, Gg6, TdA, $A, Nv1, cg2
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aWK = k(() => {
  __$.cA();
  __$.GWK();
  __$.Kg6();
  __$.Te();
  __$.A4();
  __$.Gg6();
  __$.TdA = o(__$.$A(), 1), __$.Nv1 = o(__$.$A(), 1);
  __$.cg2 = {
    type: "local-jsx",
    name: "mcp",
    description: "Manage MCP servers",
    isEnabled: () => !0,
    isHidden: !1,
    argumentHint: "[enable|disable [server-name]]",
    async call(A, K, q) {
      if (q) {
        let Y = q.trim().split(/\s+/);
        if (Y[0] === "no-redirect") return __$.TdA.default.createElement(__$.Jv1, {
          onComplete: A
        });
        if (Y[0] === "reconnect" && Y[1]) return __$.TdA.default.createElement(__$.Ag6, {
          serverName: Y.slice(1).join(" "),
          onComplete: A
        });
        if (Y[0] === "enable" || Y[0] === "disable") return __$.TdA.default.createElement(__$.Ug2, {
          action: Y[0],
          target: Y.length > 1 ? Y.slice(1).join(" ") : "all",
          onComplete: A
        });
      }
      return __$.TdA.default.createElement(__$.Jv1, {
        onComplete: A
      });
    },
    userFacingName() {
      return "mcp";
    }
  }, __$.oWK = __$.cg2;
});

// Register to shared state
__$.aWK = aWK;
