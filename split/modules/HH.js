// Module: HH
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HH = v(djY => {
  djY.fromCallback = function (A) {
    return Object.defineProperty(function (...K) {
      if (typeof K[K.length - 1] === "function") A.apply(this, K);else return new Promise((q, Y) => {
        K.push((z, w) => z != null ? Y(z) : q(w)), A.apply(this, K);
      });
    }, "name", {
      value: A.name
    });
  };
  djY.fromPromise = function (A) {
    return Object.defineProperty(function (...K) {
      let q = K[K.length - 1];
      if (typeof q !== "function") return A.apply(this, K);else K.pop(), A.apply(this, K).then(Y => q(null, Y), q);
    }, "name", {
      value: A.name
    });
  };
});

// Register to shared state
__$.HH = HH;
