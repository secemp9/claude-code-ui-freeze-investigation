// Module: oy
// Dependencies: Vr4, GH6, VH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oy = v(fM => {
  var Va9 = fM && fM.__createBinding || (Object.create ? function (A, K, q, Y) {
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
    fa9 = fM && fM.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) Va9(K, A, q);
    };
  Object.defineProperty(fM, "__esModule", {
    value: !0
  });
  fM.instance = fM.Gaxios = fM.GaxiosError = void 0;
  fM.request = Ta9;
  var fr4 = __$.Vr4();
  Object.defineProperty(fM, "Gaxios", {
    enumerable: !0,
    get: function () {
      return fr4.Gaxios;
    }
  });
  var Na9 = __$.GH6();
  Object.defineProperty(fM, "GaxiosError", {
    enumerable: !0,
    get: function () {
      return Na9.GaxiosError;
    }
  });
  fa9(__$.VH6(), fM);
  fM.instance = new fr4.Gaxios();
  async function Ta9(A) {
    return fM.instance.request(A);
  }
});

// Register to shared state
__$.oy = oy;
