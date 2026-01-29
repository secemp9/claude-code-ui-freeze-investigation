// Module: pd4
// Dependencies: gd4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pd4 = v((Zfw, Ud4) => {
  var {
      defineProperty: Hz1,
      getOwnPropertyDescriptor: yp9,
      getOwnPropertyNames: Ip9
    } = Object,
    Sp9 = Object.prototype.hasOwnProperty,
    hp9 = (A, K) => Hz1(A, "name", {
      value: K,
      configurable: !0
    }),
    bp9 = (A, K) => {
      for (var q in K) Hz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    xp9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Ip9(K)) if (!Sp9.call(A, z) && z !== q) Hz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = yp9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    up9 = A => xp9(Hz1({}, "__esModule", {
      value: !0
    }), A),
    Fd4 = {};
  bp9(Fd4, {
    buildQueryString: () => Qd4
  });
  Ud4.exports = up9(Fd4);
  var Kw6 = __$.gd4();
  function Qd4(A) {
    let K = [];
    for (let q of Object.keys(A).sort()) {
      let Y = A[q];
      if (q = (0, Kw6.escapeUri)(q), Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; z++) K.push(`${q}=${(0, Kw6.escapeUri)(Y[z])}`);else {
        let z = q;
        if (Y || typeof Y === "string") z += `=${(0, Kw6.escapeUri)(Y)}`;
        K.push(z);
      }
    }
    return K.join("&");
  }
  hp9(Qd4, "buildQueryString");
});

// Register to shared state
__$.pd4 = pd4;
