// Module: $k8
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $k8 = v(Xk8 => {
  Object.defineProperty(Xk8, "__esModule", {
    value: !0
  });
  var Hk8 = __$.sq(),
    i15 = __$.H8(),
    Jk8 = "Debug",
    n15 = (A = {}) => {
      let K = {
        debugger: !1,
        stringify: !1,
        ...A
      };
      return {
        name: Jk8,
        setupOnce() {},
        setup(q) {
          if (!q.on) return;
          q.on("beforeSendEvent", (Y, z) => {
            if (K.debugger) debugger;
            i15.consoleSandbox(() => {
              if (K.stringify) {
                if (console.log(JSON.stringify(Y, null, 2)), z && Object.keys(z).length) console.log(JSON.stringify(z, null, 2));
              } else if (console.log(Y), z && Object.keys(z).length) console.log(z);
            });
          });
        }
      };
    },
    Ok8 = Hk8.defineIntegration(n15),
    r15 = Hk8.convertIntegrationFnToClass(Jk8, Ok8);
  Xk8.Debug = r15;
  Xk8.debugIntegration = Ok8;
});

// Register to shared state
__$.$k8 = $k8;
