// Module: Du1
// Dependencies: xR, hE, YD, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Du1 = v(JD8 => {
  Object.defineProperty(JD8, "__esModule", {
    value: !0
  });
  var Zu1 = __$.xR(),
    eCq = __$.hE(),
    XsA = __$.YD(),
    Wu1 = __$.ag();
  function ALq(A) {
    Wu1.addHandler("console", A), Wu1.maybeInstrument("console", KLq);
  }
  function KLq() {
    if (!("console" in XsA.GLOBAL_OBJ)) return;
    Zu1.CONSOLE_LEVELS.forEach(function (A) {
      if (!(A in XsA.GLOBAL_OBJ.console)) return;
      eCq.fill(XsA.GLOBAL_OBJ.console, A, function (K) {
        return Zu1.originalConsoleMethods[A] = K, function (...q) {
          let Y = {
            args: q,
            level: A
          };
          Wu1.triggerHandlers("console", Y);
          let z = Zu1.originalConsoleMethods[A];
          z && z.apply(XsA.GLOBAL_OBJ.console, q);
        };
      });
    });
  }
  JD8.addConsoleInstrumentationHandler = ALq;
});

// Register to shared state
__$.Du1 = Du1;
