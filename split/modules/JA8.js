// Module: JA8
// Dependencies: aNA, grA, UrA, wA8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JA8 = v((NGz, HA8) => {
  var QAq = __$.aNA(),
    UAq = __$.grA(),
    pAq = __$.UrA(),
    dAq = __$.wA8();
  HA8.exports = function (K) {
    if (K.length < 1 || typeof K[0] !== "function") throw new UAq("a function is required");
    return dAq(QAq, pAq, K);
  };
});

// Register to shared state
__$.JA8 = JA8;
