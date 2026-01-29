// Module: ak8
// Dependencies: sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ak8 = v(ok8 => {
  Object.defineProperty(ok8, "__esModule", {
    value: !0
  });
  var I65 = __$.sq(),
    rk8 = "Transaction",
    S65 = () => {
      return {
        name: rk8,
        setupOnce() {},
        processEvent(A) {
          let K = b65(A);
          for (let q = K.length - 1; q >= 0; q--) {
            let Y = K[q];
            if (Y.in_app === !0) {
              A.transaction = x65(Y);
              break;
            }
          }
          return A;
        }
      };
    },
    h65 = I65.convertIntegrationFnToClass(rk8, S65);
  function b65(A) {
    let K = A.exception && A.exception.values && A.exception.values[0];
    return K && K.stacktrace && K.stacktrace.frames || [];
  }
  function x65(A) {
    return A.module || A.function ? `${A.module || "?"}/${A.function || "?"}` : "<unknown>";
  }
  ok8.Transaction = h65;
});

// Register to shared state
__$.ak8 = ak8;
