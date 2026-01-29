// Module: bu1
// Dependencies: hE, Xb, xR, YD, hu1, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bu1 = v(vD8 => {
  Object.defineProperty(vD8, "__esModule", {
    value: !0
  });
  var TD8 = __$.hE();
  __$.Xb();
  __$.xR();
  var XRq = __$.YD(),
    $Rq = __$.hu1(),
    jsA = __$.ag(),
    OvA = XRq.GLOBAL_OBJ,
    DsA;
  function _Rq(A) {
    jsA.addHandler("history", A), jsA.maybeInstrument("history", GRq);
  }
  function GRq() {
    if (!$Rq.supportsHistory()) return;
    let A = OvA.onpopstate;
    OvA.onpopstate = function (...q) {
      let Y = OvA.location.href,
        z = DsA;
      DsA = Y;
      let w = {
        from: z,
        to: Y
      };
      if (jsA.triggerHandlers("history", w), A) try {
        return A.apply(this, q);
      } catch (H) {}
    };
    function K(q) {
      return function (...Y) {
        let z = Y.length > 2 ? Y[2] : void 0;
        if (z) {
          let w = DsA,
            H = String(z);
          DsA = H;
          let J = {
            from: w,
            to: H
          };
          jsA.triggerHandlers("history", J);
        }
        return q.apply(this, Y);
      };
    }
    TD8.fill(OvA.history, "pushState", K), TD8.fill(OvA.history, "replaceState", K);
  }
  vD8.addHistoryInstrumentationHandler = _Rq;
});

// Register to shared state
__$.bu1 = bu1;
