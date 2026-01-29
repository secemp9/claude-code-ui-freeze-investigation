// Module: _h1
// Dependencies: moA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _h1 = v(e58 => {
  Object.defineProperty(e58, "__esModule", {
    value: !0
  });
  e58.distinctUntilKeyChanged = void 0;
  var wzq = __$.moA();
  function Hzq(A, K) {
    return wzq.distinctUntilChanged(function (q, Y) {
      return K ? K(q[A], Y[A]) : q[A] === Y[A];
    });
  }
  e58.distinctUntilKeyChanged = Hzq;
});

// Register to shared state
__$._h1 = _h1;
