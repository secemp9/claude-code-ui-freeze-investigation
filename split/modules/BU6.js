// Module: BU6
// Dependencies: MkK, jkK, SXO, hXO, bXO, xXO, uXO, BXO, mXO, cE1
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BU6 = k(() => {
  __$.MkK = o(__$.jkK(), 1), {
    program: __$.SXO,
    createCommand: __$.hXO,
    createArgument: __$.bXO,
    createOption: __$.xXO,
    CommanderError: __$.uXO,
    InvalidArgumentError: __$.BXO,
    InvalidOptionArgumentError: __$.mXO,
    Command: __$.cE1,
    Argument: __$.gXO,
    Option: __$.G3,
    Help: __$.FXO
  } = __$.MkK.default;
});

// Register to shared state
__$.BU6 = BU6;
