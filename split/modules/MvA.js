// Module: MvA
// Dependencies: H8, FX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MvA = v(ZM8 => {
  Object.defineProperty(ZM8, "__esModule", {
    value: !0
  });
  var ysA = __$.H8(),
    yuq = __$.FX();
  function GM8() {
    return ysA.getGlobalSingleton("globalEventProcessors", () => []);
  }
  function Iuq(A) {
    GM8().push(A);
  }
  function OB1(A, K, q, Y = 0) {
    return new ysA.SyncPromise((z, w) => {
      let H = A[Y];
      if (K === null || typeof H !== "function") z(K);else {
        let J = H({
          ...K
        }, q);
        if (yuq.DEBUG_BUILD && H.id && J === null && ysA.logger.log(`Event processor "${H.id}" dropped event`), ysA.isThenable(J)) J.then(O => OB1(A, O, q, Y + 1).then(z)).then(null, w);else OB1(A, J, q, Y + 1).then(z).then(null, w);
      }
    });
  }
  ZM8.addGlobalEventProcessor = Iuq;
  ZM8.getGlobalEventProcessors = GM8;
  ZM8.notifyEventProcessors = OB1;
});

// Register to shared state
__$.MvA = MvA;
