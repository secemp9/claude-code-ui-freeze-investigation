// Module: aUK
// Dependencies: cA, mA, aO, g4, A4, Ud, dB, Uw, $A, kc6
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aUK = k(() => {
  __$.cA();
  __$.mA();
  __$.aO();
  __$.g4();
  __$.A4();
  __$.Ud();
  __$.dB();
  __$.Uw = o(__$.$A(), 1), __$.kc6 = o(__$.$A(), 1), __$.Ec6 = ["◐", "◓", "◑", "◒"], __$.rUK = [{
    key: "validating",
    label: "Validating session"
  }, {
    key: "fetching_logs",
    label: "Fetching session logs"
  }, {
    key: "fetching_branch",
    label: "Getting branch info"
  }, {
    key: "checking_out",
    label: "Checking out branch"
  }];
});

// Register to shared state
__$.aUK = aUK;
