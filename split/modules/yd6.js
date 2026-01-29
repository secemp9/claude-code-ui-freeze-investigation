// Module: yd6
// Dependencies: AE1, _Y6, pr, TJ, i6, Z1, C1, l1, l6, KC1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yd6 = k(() => {
  __$.AE1();
  __$._Y6();
  __$.pr();
  __$.TJ();
  __$.i6();
  __$.Z1();
  __$.C1();
  __$.l1();
  __$.l6();
  __$.KC1 = {
    MAX_ATTEMPTS: 10,
    INITIAL_DELAY_MS: 3600000,
    BACKOFF_MULTIPLIER: 2,
    MAX_DELAY_MS: 604800000
  };
});

// Register to shared state
__$.yd6 = yd6;
