// Module: mh1
// Dependencies: foA, PTA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mh1 = v(J98 => {
  Object.defineProperty(J98, "__esModule", {
    value: !0
  });
  J98.publishLast = void 0;
  var HHq = __$.foA(),
    JHq = __$.PTA();
  function OHq() {
    return function (A) {
      var K = new HHq.AsyncSubject();
      return new JHq.ConnectableObservable(A, function () {
        return K;
      });
    };
  }
  J98.publishLast = OHq;
});

// Register to shared state
__$.mh1 = mh1;
