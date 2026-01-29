// Module: gd4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gd4 = v((Gfw, md4) => {
  var {
      defineProperty: wz1,
      getOwnPropertyDescriptor: Np9,
      getOwnPropertyNames: Tp9
    } = Object,
    vp9 = Object.prototype.hasOwnProperty,
    Aw6 = (A, K) => wz1(A, "name", {
      value: K,
      configurable: !0
    }),
    Ep9 = (A, K) => {
      for (var q in K) wz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    kp9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Tp9(K)) if (!vp9.call(A, z) && z !== q) wz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = Np9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Cp9 = A => kp9(wz1({}, "__esModule", {
      value: !0
    }), A),
    ud4 = {};
  Ep9(ud4, {
    escapeUri: () => Bd4,
    escapeUriPath: () => Rp9
  });
  md4.exports = Cp9(ud4);
  var Bd4 = Aw6(A => encodeURIComponent(A).replace(/[!'()*]/g, Lp9), "escapeUri"),
    Lp9 = Aw6(A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
    Rp9 = Aw6(A => A.split("/").map(Bd4).join("/"), "escapeUriPath");
});

// Register to shared state
__$.gd4 = gd4;
