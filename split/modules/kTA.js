// Module: kTA
// Dependencies: PTA, Hz, ETA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kTA = v(a38 => {
  Object.defineProperty(a38, "__esModule", {
    value: !0
  });
  a38.multicast = void 0;
  var Uwq = __$.PTA(),
    o38 = __$.Hz(),
    pwq = __$.ETA();
  function dwq(A, K) {
    var q = o38.isFunction(A) ? A : function () {
      return A;
    };
    if (o38.isFunction(K)) return pwq.connect(K, {
      connector: q
    });
    return function (Y) {
      return new Uwq.ConnectableObservable(Y, q);
    };
  }
  a38.multicast = dwq;
});

// Register to shared state
__$.kTA = kTA;
