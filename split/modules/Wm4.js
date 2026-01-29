// Module: Wm4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Wm4 = v((pPw, Zm4) => {
  var {
      defineProperty: _21,
      getOwnPropertyDescriptor: Sy9,
      getOwnPropertyNames: hy9
    } = Object,
    by9 = Object.prototype.hasOwnProperty,
    P26 = (A, K) => _21(A, "name", {
      value: K,
      configurable: !0
    }),
    xy9 = (A, K) => {
      for (var q in K) _21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    uy9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of hy9(K)) if (!by9.call(A, z) && z !== q) _21(A, z, {
          get: () => K[z],
          enumerable: !(Y = Sy9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    By9 = A => uy9(_21({}, "__esModule", {
      value: !0
    }), A),
    _m4 = {};
  xy9(_m4, {
    escapeUri: () => Gm4,
    escapeUriPath: () => gy9
  });
  Zm4.exports = By9(_m4);
  var Gm4 = P26(A => encodeURIComponent(A).replace(/[!'()*]/g, my9), "escapeUri"),
    my9 = P26(A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
    gy9 = P26(A => A.split("/").map(Gm4).join("/"), "escapeUriPath");
});

// Register to shared state
__$.Wm4 = Wm4;
