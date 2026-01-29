// Module: N8A
// Dependencies: j14

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N8A = v((dAw, V14) => {
  var {
      defineProperty: a41,
      getOwnPropertyDescriptor: ZP3,
      getOwnPropertyNames: WP3
    } = Object,
    DP3 = Object.prototype.hasOwnProperty,
    M14 = (A, K) => a41(A, "name", {
      value: K,
      configurable: !0
    }),
    jP3 = (A, K) => {
      for (var q in K) a41(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    MP3 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of WP3(K)) if (!DP3.call(A, z) && z !== q) a41(A, z, {
          get: () => K[z],
          enumerable: !(Y = ZP3(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    PP3 = A => MP3(a41({}, "__esModule", {
      value: !0
    }), A),
    P14 = {};
  jP3(P14, {
    fromArrayBuffer: () => fP3,
    fromString: () => NP3
  });
  V14.exports = PP3(P14);
  var VP3 = __$.j14(),
    jA6 = CA("buffer"),
    fP3 = M14((A, K = 0, q = A.byteLength - K) => {
      if (!(0, VP3.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return jA6.Buffer.from(A, K, q);
    }, "fromArrayBuffer"),
    NP3 = M14((A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? jA6.Buffer.from(A, K) : jA6.Buffer.from(A);
    }, "fromString");
});

// Register to shared state
__$.N8A = N8A;
