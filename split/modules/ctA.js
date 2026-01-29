// Module: ctA
// Dependencies: sq, H8, nvA, gm1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ctA = v(HE8 => {
  Object.defineProperty(HE8, "__esModule", {
    value: !0
  });
  var dtA = __$.sq(),
    Heq = __$.H8(),
    Jeq = __$.nvA(),
    qE8 = __$.gm1(),
    YE8 = "OnUncaughtException",
    Oeq = (A = {}) => {
      let K = {
        exitEvenIfOtherHandlersAreRegistered: !0,
        ...A
      };
      return {
        name: YE8,
        setupOnce() {},
        setup(q) {
          global.process.on("uncaughtException", wE8(q, K));
        }
      };
    },
    zE8 = dtA.defineIntegration(Oeq),
    Xeq = dtA.convertIntegrationFnToClass(YE8, zE8);
  function wE8(A, K) {
    let Y = !1,
      z = !1,
      w = !1,
      H,
      J = A.getOptions();
    return Object.assign(O => {
      let X = qE8.logAndExitProcess;
      if (K.onFatalError) X = K.onFatalError;else if (J.onFatalError) X = J.onFatalError;
      let _ = global.process.listeners("uncaughtException").reduce((Z, W) => {
          if (W.name === "domainUncaughtExceptionClear" || W.tag && W.tag === "sentry_tracingErrorCallback" || W._errorHandler) return Z;else return Z + 1;
        }, 0) === 0,
        G = K.exitEvenIfOtherHandlersAreRegistered || _;
      if (!Y) {
        if (H = O, Y = !0, dtA.getClient() === A) dtA.captureException(O, {
          originalException: O,
          captureContext: {
            level: "fatal"
          },
          mechanism: {
            handled: !1,
            type: "onuncaughtexception"
          }
        });
        if (!w && G) w = !0, X(O);
      } else if (G) {
        if (w) Jeq.DEBUG_BUILD && Heq.logger.warn("uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown"), qE8.logAndExitProcess(O);else if (!z) z = !0, setTimeout(() => {
          if (!w) w = !0, X(H, O);
        }, 2000);
      }
    }, {
      _errorHandler: !0
    });
  }
  HE8.OnUncaughtException = Xeq;
  HE8.makeErrorHandler = wE8;
  HE8.onUncaughtExceptionIntegration = zE8;
});

// Register to shared state
__$.ctA = ctA;
