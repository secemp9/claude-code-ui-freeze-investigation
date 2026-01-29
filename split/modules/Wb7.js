// Module: Wb7
// Dependencies: Gb7, is

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wb7 = v(TB => {
  var QtY = TB && TB.__createBinding || (Object.create ? function (A, K, q, Y) {
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
    UtY = TB && TB.__exportStar || function (A, K) {
      for (var q in A) if (q !== "default" && !Object.prototype.hasOwnProperty.call(K, q)) QtY(K, A, q);
    };
  Object.defineProperty(TB, "__esModule", {
    value: !0
  });
  TB.StatsigClient = void 0;
  var Zb7 = __$.Gb7();
  TB.StatsigClient = Zb7.default;
  UtY(__$.is(), TB);
  __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
    StatsigClient: Zb7.default
  });
  TB.default = __STATSIG__;
});

// Register to shared state
__$.Wb7 = Wb7;
