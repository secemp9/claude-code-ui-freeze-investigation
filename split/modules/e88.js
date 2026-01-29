// Module: e88
// Dependencies: l88, o88

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e88 = v(a88 => {
  Object.defineProperty(a88, "__esModule", {
    value: !0
  });
  a88.asap = a88.asapScheduler = void 0;
  var N7q = __$.l88(),
    T7q = __$.o88();
  a88.asapScheduler = new T7q.AsapScheduler(N7q.AsapAction);
  a88.asap = a88.asapScheduler;
});

// Register to shared state
__$.e88 = e88;
