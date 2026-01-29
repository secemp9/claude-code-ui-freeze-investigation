// Module: Rm4
// Dependencies: Tm4, km4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rm4 = v((rPw, Z21) => {
  var {
      defineProperty: Cm4,
      getOwnPropertyDescriptor: JI9,
      getOwnPropertyNames: OI9
    } = Object,
    XI9 = Object.prototype.hasOwnProperty,
    T26 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of OI9(K)) if (!XI9.call(A, z) && z !== q) Cm4(A, z, {
          get: () => K[z],
          enumerable: !(Y = JI9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Lm4 = (A, K, q) => (T26(A, K, "default"), q && T26(q, K, "default")),
    $I9 = A => T26(Cm4({}, "__esModule", {
      value: !0
    }), A),
    v26 = {};
  Z21.exports = $I9(v26);
  Lm4(v26, __$.Tm4(), Z21.exports);
  Lm4(v26, __$.km4(), Z21.exports);
});

// Register to shared state
__$.Rm4 = Rm4;
