// Module: Hv8
// Dependencies: H8, sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hv8 = v(wv8 => {
  var {
    _optionalChain: Zsq
  } = __$.H8();
  Object.defineProperty(wv8, "__esModule", {
    value: !0
  });
  var Yv8 = CA("domain"),
    w6A = __$.sq();
  function zv8() {
    return Yv8.active;
  }
  function Wsq() {
    let A = zv8();
    if (!A) return;
    return w6A.ensureHubOnCarrier(A), w6A.getHubFromCarrier(A);
  }
  function Dsq(A) {
    let K = {};
    return w6A.ensureHubOnCarrier(K, A), w6A.getHubFromCarrier(K);
  }
  function jsq(A, K) {
    let q = zv8();
    if (q && Zsq([K, "optionalAccess", H => H.reuseExisting])) return A();
    let Y = Yv8.create(),
      z = q ? w6A.getHubFromCarrier(q) : void 0,
      w = Dsq(z);
    return w6A.setHubOnCarrier(Y, w), Y.bind(() => {
      return A();
    })();
  }
  function Msq() {
    w6A.setAsyncContextStrategy({
      getCurrentHub: Wsq,
      runWithAsyncContext: jsq
    });
  }
  wv8.setDomainAsyncContextStrategy = Msq;
});

// Register to shared state
__$.Hv8 = Hv8;
