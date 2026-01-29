// Module: JV6
// Dependencies: AV7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JV6 = v(HSY => {
  var YSY = __$.AV7(),
    HV6 = CA("buffer"),
    zSY = (A, K = 0, q = A.byteLength - K) => {
      if (!YSY.isArrayBuffer(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
      return HV6.Buffer.from(A, K, q);
    },
    wSY = (A, K) => {
      if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
      return K ? HV6.Buffer.from(A, K) : HV6.Buffer.from(A);
    };
  HSY.fromArrayBuffer = zSY;
  HSY.fromString = wSY;
});

// Register to shared state
__$.JV6 = JV6;
