// Module: w61
// Dependencies: Nu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w61 = v(X$5 => {
  var H$5 = __$.Nu8(),
    Rl1 = CA("buffer"),
    J$5 = (A, K = 0, q = A.byteLength - K) => {
      if (!H$5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Rl1.Buffer.from(A, K, q);
    },
    O$5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Rl1.Buffer.from(A, K) : Rl1.Buffer.from(A);
    };
  X$5.fromArrayBuffer = J$5;
  X$5.fromString = O$5;
});

// Register to shared state
__$.w61 = w61;
