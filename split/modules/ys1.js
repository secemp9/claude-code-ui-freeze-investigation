// Module: ys1
// Dependencies: ra8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ys1 = v(Fn5 => {
  var Bn5 = __$.ra8(),
    Rs1 = CA("buffer"),
    mn5 = (A, K = 0, q = A.byteLength - K) => {
      if (!Bn5.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return Rs1.Buffer.from(A, K, q);
    },
    gn5 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? Rs1.Buffer.from(A, K) : Rs1.Buffer.from(A);
    };
  Fn5.fromArrayBuffer = mn5;
  Fn5.fromString = gn5;
});

// Register to shared state
__$.ys1 = ys1;
