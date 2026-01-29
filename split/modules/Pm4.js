// Module: Pm4
// Dependencies: Wm4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pm4 = v((dPw, Mm4) => {
  var {
      defineProperty: G21,
      getOwnPropertyDescriptor: Fy9,
      getOwnPropertyNames: Qy9
    } = Object,
    Uy9 = Object.prototype.hasOwnProperty,
    py9 = (A, K) => G21(A, "name", {
      value: K,
      configurable: !0
    }),
    dy9 = (A, K) => {
      for (var q in K) G21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    cy9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Qy9(K)) if (!Uy9.call(A, z) && z !== q) G21(A, z, {
          get: () => K[z],
          enumerable: !(Y = Fy9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    ly9 = A => cy9(G21({}, "__esModule", {
      value: !0
    }), A),
    Dm4 = {};
  dy9(Dm4, {
    buildQueryString: () => jm4
  });
  Mm4.exports = ly9(Dm4);
  var V26 = __$.Wm4();
  function jm4(A) {
    let K = [];
    for (let q of Object.keys(A).sort()) {
      let Y = A[q];
      if (q = (0, V26.escapeUri)(q), Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; z++) K.push(`${q}=${(0, V26.escapeUri)(Y[z])}`);else {
        let z = q;
        if (Y || typeof Y === "string") z += `=${(0, V26.escapeUri)(Y)}`;
        K.push(z);
      }
    }
    return K.join("&");
  }
  py9(jm4, "buildQueryString");
});

// Register to shared state
__$.Pm4 = Pm4;
