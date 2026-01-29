// Module: mA6
// Dependencies: M64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mA6 = v(xf3 => {
  var Sf3 = __$.M64(),
    BA6 = CA("buffer"),
    hf3 = (A, K = 0, q = A.byteLength - K) => {
      if (!Sf3.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return BA6.Buffer.from(A, K, q);
    },
    bf3 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? BA6.Buffer.from(A, K) : BA6.Buffer.from(A);
    };
  xf3.fromArrayBuffer = hf3;
  xf3.fromString = bf3;
});

// Register to shared state
__$.mA6 = mA6;
