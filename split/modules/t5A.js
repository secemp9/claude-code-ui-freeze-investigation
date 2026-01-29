// Module: t5A
// Dependencies: pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var t5A = v(md7 => {
  var zFA = md7,
    $92 = __$.pG(),
    _92 = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
  function wFA(A, K) {
    var q = 0,
      Y = {};
    K |= 0;
    while (q < A.length) Y[_92[q + K]] = A[q++];
    return Y;
  }
  zFA.basic = wFA([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
  zFA.defaults = wFA([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", $92.emptyArray, null]);
  zFA.long = wFA([0, 0, 0, 1, 1], 7);
  zFA.mapKey = wFA([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
  zFA.packed = wFA([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
});

// Register to shared state
__$.t5A = t5A;
