// Module: u96
// Dependencies: WY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var u96 = v(pP9 => {
  var _S4 = __$.WY();
  function UP9(A, K, q) {
    let {
      uniqueKeys: Y
    } = A.options;
    if (Y === !1) return !1;
    let z = typeof Y === "function" ? Y : (w, H) => w === H || _S4.isScalar(w) && _S4.isScalar(H) && w.value === H.value;
    return K.some(w => z(w.key, q));
  }
  pP9.mapIncludes = UP9;
});

// Register to shared state
__$.u96 = u96;
