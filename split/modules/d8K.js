// Module: d8K
// Dependencies: XH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d8K = v(aB => {
  var xW2 = aB && aB.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    uW2 = aB && aB.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    BW2 = aB && aB.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) xW2(K, A, q);
      }
      return uW2(K, A), K;
    };
  Object.defineProperty(aB, "__esModule", {
    value: !0
  });
  aB.fetch = void 0;
  var mW2 = async (...A) => {
    if (globalThis.fetch) return globalThis.fetch(...A);else if (typeof EdgeRuntime !== "string") return (await Promise.resolve().then(() => BW2(__$.XH6()))).default(...A);else throw Error("Invariant: an edge runtime that does not support fetch should not exist");
  };
  aB.fetch = mW2;
});

// Register to shared state
__$.d8K = d8K;
