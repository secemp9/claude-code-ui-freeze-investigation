// Module: so1
// Dependencies: Kl8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var so1 = v(Iu5 => {
  var Lu5 = __$.Kl8(),
    ao1 = CA("buffer"),
    Ru5 = (A, K = 0, q = A.byteLength - K) => {
      if (!Lu5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return ao1.Buffer.from(A, K, q);
    },
    yu5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? ao1.Buffer.from(A, K) : ao1.Buffer.from(A);
    };
  Iu5.fromArrayBuffer = Ru5;
  Iu5.fromString = yu5;
});

// Register to shared state
__$.so1 = so1;
