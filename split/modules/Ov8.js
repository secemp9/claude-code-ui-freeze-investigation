// Module: Ov8
// Dependencies: H8, sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ov8 = v(Jv8 => {
  var {
    _optionalChain: Vsq
  } = __$.H8();
  Object.defineProperty(Jv8, "__esModule", {
    value: !0
  });
  var Rm1 = __$.sq(),
    fsq = CA("async_hooks"),
    StA;
  function Nsq() {
    if (!StA) StA = new fsq.AsyncLocalStorage();
    function A() {
      return StA.getStore();
    }
    function K(Y) {
      let z = {};
      return Rm1.ensureHubOnCarrier(z, Y), Rm1.getHubFromCarrier(z);
    }
    function q(Y, z) {
      let w = A();
      if (w && Vsq([z, "optionalAccess", J => J.reuseExisting])) return Y();
      let H = K(w);
      return StA.run(H, () => {
        return Y();
      });
    }
    Rm1.setAsyncContextStrategy({
      getCurrentHub: A,
      runWithAsyncContext: q
    });
  }
  Jv8.setHooksAsyncContextStrategy = Nsq;
});

// Register to shared state
__$.Ov8 = Ov8;
