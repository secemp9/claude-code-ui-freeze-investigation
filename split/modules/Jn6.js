// Module: Jn6
// Dependencies: wn6, XrK, $rK, _rK, zn6, Hn6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jn6 = k(() => {
  __$.wn6();
  __$.XrK = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, __$.$rK = /\\(\\)?/g, __$._rK = __$.zn6(function (A) {
    var K = [];
    if (A.charCodeAt(0) === 46) K.push("");
    return A.replace(__$.XrK, function (q, Y, z, w) {
      K.push(z ? w.replace(__$.$rK, "$1") : Y || q);
    }), K;
  }), __$.Hn6 = __$._rK;
});

// Register to shared state
__$.Jn6 = Jn6;
