// Module: H16
// Dependencies: Y84

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H16 = v(Yv3 => {
  var Av3 = __$.Y84(),
    w16 = CA("buffer"),
    Kv3 = (A, K = 0, q = A.byteLength - K) => {
      if (!Av3.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return w16.Buffer.from(A, K, q);
    },
    qv3 = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? w16.Buffer.from(A, K) : w16.Buffer.from(A);
    };
  Yv3.fromArrayBuffer = Kv3;
  Yv3.fromString = qv3;
});

// Register to shared state
__$.H16 = H16;
