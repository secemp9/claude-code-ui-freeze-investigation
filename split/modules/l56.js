// Module: l56
// Dependencies: jj4, o31, U56, Fj4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l56 = v(aXA => {
  Object.defineProperty(aXA, "__esModule", {
    value: !0
  });
  aXA.logs = aXA.ProxyLoggerProvider = aXA.NoopLogger = aXA.NOOP_LOGGER = aXA.SeverityNumber = void 0;
  var mK9 = __$.jj4();
  Object.defineProperty(aXA, "SeverityNumber", {
    enumerable: !0,
    get: function () {
      return mK9.SeverityNumber;
    }
  });
  var Qj4 = __$.o31();
  Object.defineProperty(aXA, "NOOP_LOGGER", {
    enumerable: !0,
    get: function () {
      return Qj4.NOOP_LOGGER;
    }
  });
  Object.defineProperty(aXA, "NoopLogger", {
    enumerable: !0,
    get: function () {
      return Qj4.NoopLogger;
    }
  });
  var gK9 = __$.U56();
  Object.defineProperty(aXA, "ProxyLoggerProvider", {
    enumerable: !0,
    get: function () {
      return gK9.ProxyLoggerProvider;
    }
  });
  var FK9 = __$.Fj4();
  aXA.logs = FK9.LogsAPI.getInstance();
});

// Register to shared state
__$.l56 = l56;
