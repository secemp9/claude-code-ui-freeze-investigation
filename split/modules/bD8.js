// Module: bD8
// Dependencies: Xb, xR, Du1, fu1, ku1, Ru1, Su1, bu1, xu1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bD8 = v(hD8 => {
  Object.defineProperty(hD8, "__esModule", {
    value: !0
  });
  var NRq = __$.Xb(),
    TRq = __$.xR(),
    CD8 = __$.Du1(),
    LD8 = __$.fu1(),
    RD8 = __$.ku1(),
    yD8 = __$.Ru1(),
    ID8 = __$.Su1(),
    SD8 = __$.bu1(),
    uu1 = __$.xu1();
  function vRq(A, K) {
    switch (A) {
      case "console":
        return CD8.addConsoleInstrumentationHandler(K);
      case "dom":
        return LD8.addClickKeypressInstrumentationHandler(K);
      case "xhr":
        return uu1.addXhrInstrumentationHandler(K);
      case "fetch":
        return RD8.addFetchInstrumentationHandler(K);
      case "history":
        return SD8.addHistoryInstrumentationHandler(K);
      case "error":
        return yD8.addGlobalErrorInstrumentationHandler(K);
      case "unhandledrejection":
        return ID8.addGlobalUnhandledRejectionInstrumentationHandler(K);
      default:
        NRq.DEBUG_BUILD && TRq.logger.warn("unknown instrumentation type:", A);
    }
  }
  hD8.addConsoleInstrumentationHandler = CD8.addConsoleInstrumentationHandler;
  hD8.addClickKeypressInstrumentationHandler = LD8.addClickKeypressInstrumentationHandler;
  hD8.addFetchInstrumentationHandler = RD8.addFetchInstrumentationHandler;
  hD8.addGlobalErrorInstrumentationHandler = yD8.addGlobalErrorInstrumentationHandler;
  hD8.addGlobalUnhandledRejectionInstrumentationHandler = ID8.addGlobalUnhandledRejectionInstrumentationHandler;
  hD8.addHistoryInstrumentationHandler = SD8.addHistoryInstrumentationHandler;
  hD8.SENTRY_XHR_DATA_KEY = uu1.SENTRY_XHR_DATA_KEY;
  hD8.addXhrInstrumentationHandler = uu1.addXhrInstrumentationHandler;
  hD8.addInstrumentationHandler = vRq;
});

// Register to shared state
__$.bD8 = bD8;
