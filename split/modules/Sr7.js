// Module: Sr7
// Dependencies: bFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sr7 = v(yr7 => {
  Object.defineProperty(yr7, "__esModule", {
    value: !0
  });
  yr7.createServiceClientConstructor = void 0;
  var LO2 = __$.bFA();
  function RO2(A, K) {
    let q = {
      export: {
        path: A,
        requestStream: !1,
        responseStream: !1,
        requestSerialize: Y => {
          return Y;
        },
        requestDeserialize: Y => {
          return Y;
        },
        responseSerialize: Y => {
          return Y;
        },
        responseDeserialize: Y => {
          return Y;
        }
      }
    };
    return LO2.makeGenericClientConstructor(q, K);
  }
  yr7.createServiceClientConstructor = RO2;
});

// Register to shared state
__$.Sr7 = Sr7;
