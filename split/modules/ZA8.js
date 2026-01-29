// Module: ZA8
// Dependencies: JA8, ly1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZA8 = v((TGz, GA8) => {
  var cAq = __$.JA8(),
    OA8 = __$.ly1(),
    $A8;
  try {
    $A8 = [].__proto__ === Array.prototype;
  } catch (A) {
    if (!A || typeof A !== "object" || !("code" in A) || A.code !== "ERR_PROTO_ACCESS") throw A;
  }
  var ay1 = !!$A8 && OA8 && OA8(Object.prototype, "__proto__"),
    _A8 = Object,
    XA8 = _A8.getPrototypeOf;
  GA8.exports = ay1 && typeof ay1.get === "function" ? cAq([ay1.get]) : typeof XA8 === "function" ? function (K) {
    return XA8(K == null ? K : _A8(K));
  } : !1;
});

// Register to shared state
__$.ZA8 = ZA8;
