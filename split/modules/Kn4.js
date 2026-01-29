// Module: Kn4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kn4 = v((nNw, An4) => {
  var _u = A => A !== null && typeof A === "object" && typeof A.pipe === "function";
  _u.writable = A => _u(A) && A.writable !== !1 && typeof A._write === "function" && typeof A._writableState === "object";
  _u.readable = A => _u(A) && A.readable !== !1 && typeof A._read === "function" && typeof A._readableState === "object";
  _u.duplex = A => _u.writable(A) && _u.readable(A);
  _u.transform = A => _u.duplex(A) && typeof A._transform === "function";
  An4.exports = _u;
});

// Register to shared state
__$.Kn4 = Kn4;
