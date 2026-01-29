// Module: hs
// Dependencies: XL7, ZN6, _L7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hs = v((zS, zDA) => {
  var IcY = zS && zS.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      Object.defineProperty(A, Y, {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      });
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    ScY = zS && zS.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !K.hasOwnProperty(q)) IcY(K, A, q);
    };
  Object.defineProperty(zS, "__esModule", {
    value: !0
  });
  zS.ono = void 0;
  var GL7 = __$.XL7();
  Object.defineProperty(zS, "ono", {
    enumerable: !0,
    get: function () {
      return GL7.ono;
    }
  });
  var hcY = __$.ZN6();
  Object.defineProperty(zS, "Ono", {
    enumerable: !0,
    get: function () {
      return hcY.Ono;
    }
  });
  ScY(__$._L7(), zS);
  zS.default = GL7.ono;
  if (typeof zDA === "object" && typeof zDA.exports === "object") zDA.exports = Object.assign(zDA.exports.default, zDA.exports);
});

// Register to shared state
__$.hs = hs;
