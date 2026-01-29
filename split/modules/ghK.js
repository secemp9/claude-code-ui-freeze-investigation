// Module: ghK
// Dependencies: uhK, l1, BQ, i6, K7, l6, A4, $8, Cd6, DN
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ghK = k(() => {
  __$.uhK();
  __$.l1();
  __$.BQ();
  __$.i6();
  __$.K7();
  __$.l6();
  __$.A4();
  __$.$8();
  __$.Cd6();
  __$.DN = o(__$.$A(), 1), __$.b7z = {
    minTimeBeforeFeedbackMs: 600000,
    minTimeBetweenGlobalFeedbackMs: 1e8,
    minUserTurnsBeforeFeedback: 5,
    minUserTurnsBetweenFeedback: 10,
    hideThanksAfterMs: 3000,
    onForModels: ["*"],
    probability: 0.005
  };
});

// Register to shared state
__$.ghK = ghK;
