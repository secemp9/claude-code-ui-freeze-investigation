// Module: Dc4
// Dependencies: sz6, Sd4, xd4, Oc4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dc4 = v((jfw, Xz1) => {
  var {
      defineProperty: Jz1,
      getOwnPropertyDescriptor: Hd9,
      getOwnPropertyNames: Jd9
    } = Object,
    Od9 = Object.prototype.hasOwnProperty,
    Ow6 = (A, K) => Jz1(A, "name", {
      value: K,
      configurable: !0
    }),
    Xd9 = (A, K) => {
      for (var q in K) Jz1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    Hw6 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of Jd9(K)) if (!Od9.call(A, z) && z !== q) Jz1(A, z, {
          get: () => K[z],
          enumerable: !(Y = Hd9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    Xc4 = (A, K, q) => (Hw6(A, K, "default"), q && Hw6(q, K, "default")),
    $d9 = A => Hw6(Jz1({}, "__esModule", {
      value: !0
    }), A),
    Oz1 = {};
  Xd9(Oz1, {
    Uint8ArrayBlobAdapter: () => Jw6
  });
  Xz1.exports = $d9(Oz1);
  var $c4 = __$.sz6(),
    _c4 = __$.Sd4();
  function Gc4(A, K = "utf-8") {
    if (K === "base64") return (0, $c4.toBase64)(A);
    return (0, _c4.toUtf8)(A);
  }
  Ow6(Gc4, "transformToString");
  function Zc4(A, K) {
    if (K === "base64") return Jw6.mutate((0, $c4.fromBase64)(A));
    return Jw6.mutate((0, _c4.fromUtf8)(A));
  }
  Ow6(Zc4, "transformFromString");
  var Wc4 = class A extends Uint8Array {
    static fromString(K, q = "utf-8") {
      switch (typeof K) {
        case "string":
          return Zc4(K, q);
        default:
          throw Error(`Unsupported conversion from ${typeof K} to Uint8ArrayBlobAdapter.`);
      }
    }
    static mutate(K) {
      return Object.setPrototypeOf(K, A.prototype), K;
    }
    transformToString(K = "utf-8") {
      return Gc4(this, K);
    }
  };
  Ow6(Wc4, "Uint8ArrayBlobAdapter");
  var Jw6 = Wc4;
  Xc4(Oz1, __$.xd4(), Xz1.exports);
  Xc4(Oz1, __$.Oc4(), Xz1.exports);
});

// Register to shared state
__$.Dc4 = Dc4;
