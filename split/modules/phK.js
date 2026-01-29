// Module: phK
// Dependencies: cA, mA, OZ, $A, AC1, p7z, d7z

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var phK = k(() => {
  __$.cA();
  __$.mA();
  __$.OZ = o(__$.$A(), 1), __$.AC1 = o(__$.$A(), 1), __$.p7z = ["0", "1", "2", "3"], __$.d7z = {
    "0": "dismissed",
    "1": "bad",
    "2": "fine",
    "3": "good"
  };
});

// Register to shared state
__$.phK = phK;
