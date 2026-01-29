// Module: sz6
// Dependencies: _d4, Vd4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sz6 = v((Ofw, qz1) => {
  var {
      defineProperty: fd4,
      getOwnPropertyDescriptor: Kp9,
      getOwnPropertyNames: qp9
    } = Object,
    Yp9 = Object.prototype.hasOwnProperty,
    oz6 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of qp9(K)) if (!Yp9.call(A, z) && z !== q) fd4(A, z, {
          get: () => K[z],
          enumerable: !(Y = Kp9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Nd4 = (A, K, q) => (oz6(A, K, "default"), q && oz6(q, K, "default")),
    zp9 = A => oz6(fd4({}, "__esModule", {
      value: !0
    }), A),
    az6 = {};
  qz1.exports = zp9(az6);
  Nd4(az6, __$._d4(), qz1.exports);
  Nd4(az6, __$.Vd4(), qz1.exports);
});

// Register to shared state
__$.sz6 = sz6;
