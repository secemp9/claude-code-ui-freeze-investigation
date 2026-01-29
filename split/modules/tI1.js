// Module: tI1
// Dependencies: nzA, sI1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tI1 = v(Q68 => {
  Object.defineProperty(Q68, "__esModule", {
    value: !0
  });
  Q68.reportUnhandledError = void 0;
  var U8q = __$.nzA(),
    p8q = __$.sI1();
  function d8q(A) {
    p8q.timeoutProvider.setTimeout(function () {
      var K = U8q.config.onUnhandledError;
      if (K) K(A);else throw A;
    });
  }
  Q68.reportUnhandledError = d8q;
});

// Register to shared state
__$.tI1 = tI1;
