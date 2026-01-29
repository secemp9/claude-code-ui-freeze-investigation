// Module: Bh1
// Dependencies: _S1, PTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Bh1 = v(w98 => {
  Object.defineProperty(w98, "__esModule", {
    value: !0
  });
  w98.publishBehavior = void 0;
  var YHq = __$._S1(),
    zHq = __$.PTA();
  function wHq(A) {
    return function (K) {
      var q = new YHq.BehaviorSubject(A);
      return new zHq.ConnectableObservable(K, function () {
        return q;
      });
    };
  }
  w98.publishBehavior = wHq;
});

// Register to shared state
__$.Bh1 = Bh1;
