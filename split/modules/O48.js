// Module: O48
// Dependencies: Y48, z48

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var O48 = v(w48 => {
  Object.defineProperty(w48, "__esModule", {
    value: !0
  });
  w48.queue = w48.queueScheduler = void 0;
  var S7q = __$.Y48(),
    h7q = __$.z48();
  w48.queueScheduler = new h7q.QueueScheduler(S7q.QueueAction);
  w48.queue = w48.queueScheduler;
});

// Register to shared state
__$.O48 = O48;
