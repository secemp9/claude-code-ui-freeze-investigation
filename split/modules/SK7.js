// Module: SK7
// Dependencies: Y$6, r77, yK7, OxA, z$6, w$6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SK7 = v((Ngw, IK7) => {
  IK7.exports = {
    decode: __$.Y$6(),
    verify: __$.r77(),
    sign: __$.yK7(),
    JsonWebTokenError: __$.OxA(),
    NotBeforeError: __$.z$6(),
    TokenExpiredError: __$.w$6()
  };
});

// Register to shared state
__$.SK7 = SK7;
