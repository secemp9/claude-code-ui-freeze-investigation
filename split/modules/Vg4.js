// Module: Vg4
// Dependencies: R26

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vg4 = v((KVw, Pg4) => {
  var {
      defineProperty: v21,
      getOwnPropertyDescriptor: PS9,
      getOwnPropertyNames: VS9
    } = Object,
    fS9 = Object.prototype.hasOwnProperty,
    jg4 = (A, K) => v21(A, "name", {
      value: K,
      configurable: !0
    }),
    NS9 = (A, K) => {
      for (var q in K) v21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    TS9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of VS9(K)) if (!fS9.call(A, z) && z !== q) v21(A, z, {
          get: () => K[z],
          enumerable: !(Y = PS9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    vS9 = A => TS9(v21({}, "__esModule", {
      value: !0
    }), A),
    Mg4 = {};
  NS9(Mg4, {
    fromArrayBuffer: () => kS9,
    fromString: () => CS9
  });
  Pg4.exports = vS9(Mg4);
  var ES9 = __$.R26(),
    y26 = CA("buffer"),
    kS9 = jg4((A, K = 0, q = A.byteLength - K) => {
      if (!(0, ES9.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return y26.Buffer.from(A, K, q);
    }, "fromArrayBuffer"),
    CS9 = jg4((A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? y26.Buffer.from(A, K) : y26.Buffer.from(A);
    }, "fromString");
});

// Register to shared state
__$.Vg4 = Vg4;
