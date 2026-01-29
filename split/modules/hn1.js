// Module: hn1
// Dependencies: vQ8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hn1 = v(KT5 => {
  var tN5 = __$.vQ8(),
    Sn1 = CA("buffer"),
    eN5 = (A, K = 0, q = A.byteLength - K) => {
      if (!tN5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Sn1.Buffer.from(A, K, q);
    },
    AT5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Sn1.Buffer.from(A, K) : Sn1.Buffer.from(A);
    };
  KT5.fromArrayBuffer = eN5;
  KT5.fromString = AT5;
});

// Register to shared state
__$.hn1 = hn1;
