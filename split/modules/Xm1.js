// Module: Xm1
// Dependencies: sq, H8, wV, pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xm1 = v(_N8 => {
  Object.defineProperty(_N8, "__esModule", {
    value: !0
  });
  var ON8 = __$.sq(),
    XN8 = __$.H8(),
    $N8 = __$.wV(),
    Om1 = __$.pN();
  function piq() {
    if (Om1.WINDOW.document) Om1.WINDOW.document.addEventListener("visibilitychange", () => {
      let A = ON8.getActiveTransaction();
      if (Om1.WINDOW.document.hidden && A) {
        let {
          op: q,
          status: Y
        } = ON8.spanToJSON(A);
        if ($N8.DEBUG_BUILD && XN8.logger.log(`[Tracing] Transaction: cancelled -> since tab moved to the background, op: ${q}`), !Y) A.setStatus("cancelled");
        A.setTag("visibilitychange", "document.hidden"), A.end();
      }
    });else $N8.DEBUG_BUILD && XN8.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
  _N8.registerBackgroundTabDetection = piq;
});

// Register to shared state
__$.Xm1 = Xm1;
