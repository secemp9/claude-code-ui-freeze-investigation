// Module: fu1
// Dependencies: HvA, hE, YD, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fu1 = v(ZD8 => {
  Object.defineProperty(ZD8, "__esModule", {
    value: !0
  });
  var TLq = __$.HvA(),
    $sA = __$.hE(),
    vLq = __$.YD(),
    Mu1 = __$.ag(),
    HHA = vLq.GLOBAL_OBJ,
    ELq = 1000,
    $D8,
    Pu1,
    Vu1;
  function kLq(A) {
    Mu1.addHandler("dom", A), Mu1.maybeInstrument("dom", GD8);
  }
  function GD8() {
    if (!HHA.document) return;
    let A = Mu1.triggerHandlers.bind(null, "dom"),
      K = _D8(A, !0);
    HHA.document.addEventListener("click", K, !1), HHA.document.addEventListener("keypress", K, !1), ["EventTarget", "Node"].forEach(q => {
      let Y = HHA[q] && HHA[q].prototype;
      if (!Y || !Y.hasOwnProperty || !Y.hasOwnProperty("addEventListener")) return;
      $sA.fill(Y, "addEventListener", function (z) {
        return function (w, H, J) {
          if (w === "click" || w == "keypress") try {
            let O = this,
              X = O.__sentry_instrumentation_handlers__ = O.__sentry_instrumentation_handlers__ || {},
              $ = X[w] = X[w] || {
                refCount: 0
              };
            if (!$.handler) {
              let _ = _D8(A);
              $.handler = _, z.call(this, w, _, J);
            }
            $.refCount++;
          } catch (O) {}
          return z.call(this, w, H, J);
        };
      }), $sA.fill(Y, "removeEventListener", function (z) {
        return function (w, H, J) {
          if (w === "click" || w == "keypress") try {
            let O = this,
              X = O.__sentry_instrumentation_handlers__ || {},
              $ = X[w];
            if ($) {
              if ($.refCount--, $.refCount <= 0) z.call(this, w, $.handler, J), $.handler = void 0, delete X[w];
              if (Object.keys(X).length === 0) delete O.__sentry_instrumentation_handlers__;
            }
          } catch (O) {}
          return z.call(this, w, H, J);
        };
      });
    });
  }
  function CLq(A) {
    if (A.type !== Pu1) return !1;
    try {
      if (!A.target || A.target._sentryId !== Vu1) return !1;
    } catch (K) {}
    return !0;
  }
  function LLq(A, K) {
    if (A !== "keypress") return !1;
    if (!K || !K.tagName) return !0;
    if (K.tagName === "INPUT" || K.tagName === "TEXTAREA" || K.isContentEditable) return !1;
    return !0;
  }
  function _D8(A, K = !1) {
    return q => {
      if (!q || q._sentryCaptured) return;
      let Y = RLq(q);
      if (LLq(q.type, Y)) return;
      if ($sA.addNonEnumerableProperty(q, "_sentryCaptured", !0), Y && !Y._sentryId) $sA.addNonEnumerableProperty(Y, "_sentryId", TLq.uuid4());
      let z = q.type === "keypress" ? "input" : q.type;
      if (!CLq(q)) A({
        event: q,
        name: z,
        global: K
      }), Pu1 = q.type, Vu1 = Y ? Y._sentryId : void 0;
      clearTimeout($D8), $D8 = HHA.setTimeout(() => {
        Vu1 = void 0, Pu1 = void 0;
      }, ELq);
    };
  }
  function RLq(A) {
    try {
      return A.target;
    } catch (K) {
      return null;
    }
  }
  ZD8.addClickKeypressInstrumentationHandler = kLq;
  ZD8.instrumentDOM = GD8;
});

// Register to shared state
__$.fu1 = fu1;
