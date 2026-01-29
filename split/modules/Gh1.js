// Module: Gh1
// Dependencies: yS1, Ug, TwA, fwA, NwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gh1 = v(z38 => {
  Object.defineProperty(z38, "__esModule", {
    value: !0
  });
  z38.elementAt = void 0;
  var Y38 = __$.yS1(),
    Gzq = __$.Ug(),
    Zzq = __$.TwA(),
    Wzq = __$.fwA(),
    Dzq = __$.NwA();
  function jzq(A, K) {
    if (A < 0) throw new Y38.ArgumentOutOfRangeError();
    var q = arguments.length >= 2;
    return function (Y) {
      return Y.pipe(Gzq.filter(function (z, w) {
        return w === A;
      }), Dzq.take(1), q ? Wzq.defaultIfEmpty(K) : Zzq.throwIfEmpty(function () {
        return new Y38.ArgumentOutOfRangeError();
      }));
    };
  }
  z38.elementAt = jzq;
});

// Register to shared state
__$.Gh1 = Gh1;
