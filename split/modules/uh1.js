// Module: uh1
// Dependencies: PZ, kTA, ETA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uh1 = v(Y98 => {
  Object.defineProperty(Y98, "__esModule", {
    value: !0
  });
  Y98.publish = void 0;
  var ewq = __$.PZ(),
    AHq = __$.kTA(),
    KHq = __$.ETA();
  function qHq(A) {
    return A ? function (K) {
      return KHq.connect(A)(K);
    } : function (K) {
      return AHq.multicast(new ewq.Subject())(K);
    };
  }
  Y98.publish = qHq;
});

// Register to shared state
__$.uh1 = uh1;
