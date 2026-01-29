// Module: rjK
// Dependencies: cjK, njK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rjK = v(Mp2 => {
  var Dp2 = __$.cjK(),
    jp2 = __$.njK();
  Mp2.render = function (A, K, q) {
    if (K && K.small) return jp2.render(A, K, q);
    return Dp2.render(A, K, q);
  };
});

// Register to shared state
__$.rjK = rjK;
