// Module: xg4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xg4 = v((zVw, bg4) => {
  var {
      defineProperty: C21,
      getOwnPropertyDescriptor: US9,
      getOwnPropertyNames: pS9
    } = Object,
    dS9 = Object.prototype.hasOwnProperty,
    h26 = (A, K) => C21(A, "name", {
      value: K,
      configurable: !0
    }),
    cS9 = (A, K) => {
      for (var q in K) C21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    lS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of pS9(K)) if (!dS9.call(A, z) && z !== q) C21(A, z, {
          get: () => K[z],
          enumerable: !(Y = US9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    iS9 = A => lS9(C21({}, "__esModule", {
      value: !0
    }), A),
    Sg4 = {};
  cS9(Sg4, {
    escapeUri: () => hg4,
    escapeUriPath: () => rS9
  });
  bg4.exports = iS9(Sg4);
  var hg4 = h26(A => encodeURIComponent(A).replace(/[!'()*]/g, nS9), "escapeUri"),
    nS9 = h26(A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
    rS9 = h26(A => A.split("/").map(hg4).join("/"), "escapeUriPath");
});

// Register to shared state
__$.xg4 = xg4;
