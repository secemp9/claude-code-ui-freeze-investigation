// Module: gm1
// Dependencies: sq, H8, nvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gm1 = v(KE8 => {
  Object.defineProperty(KE8, "__esModule", {
    value: !0
  });
  var qeq = __$.sq(),
    ptA = __$.H8(),
    mm1 = __$.nvA(),
    Yeq = 2000;
  function zeq(A) {
    ptA.consoleSandbox(() => {
      console.error(A);
    });
    let K = qeq.getClient();
    if (K === void 0) mm1.DEBUG_BUILD && ptA.logger.warn("No NodeClient was defined, we are exiting the process now."), global.process.exit(1);
    let q = K.getOptions(),
      Y = q && q.shutdownTimeout && q.shutdownTimeout > 0 && q.shutdownTimeout || Yeq;
    K.close(Y).then(z => {
      if (!z) mm1.DEBUG_BUILD && ptA.logger.warn("We reached the timeout for emptying the request buffer, still exiting now!");
      global.process.exit(1);
    }, z => {
      mm1.DEBUG_BUILD && ptA.logger.error(z);
    });
  }
  KE8.logAndExitProcess = zeq;
});

// Register to shared state
__$.gm1 = gm1;
