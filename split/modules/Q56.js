// Module: Q56
// Dependencies: o31

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q56 = v(Vj4 => {
  Object.defineProperty(Vj4, "__esModule", {
    value: !0
  });
  Vj4.NOOP_LOGGER_PROVIDER = Vj4.NoopLoggerProvider = void 0;
  var TK9 = __$.o31();
  class F56 {
    getLogger(A, K, q) {
      return new TK9.NoopLogger();
    }
  }
  Vj4.NoopLoggerProvider = F56;
  Vj4.NOOP_LOGGER_PROVIDER = new F56();
});

// Register to shared state
__$.Q56 = Q56;
