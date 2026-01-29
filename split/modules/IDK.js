// Module: IDK
// Dependencies: Ce

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IDK = v(eF2 => {
  var Lg6 = __$.Ce(),
    yDK = Lg6.getBCHDigit(1335);
  eF2.getEncodedBits = function (K, q) {
    let Y = K.bit << 3 | q,
      z = Y << 10;
    while (Lg6.getBCHDigit(z) - yDK >= 0) z ^= 1335 << Lg6.getBCHDigit(z) - yDK;
    return (Y << 10 | z) ^ 21522;
  };
});

// Register to shared state
__$.IDK = IDK;
