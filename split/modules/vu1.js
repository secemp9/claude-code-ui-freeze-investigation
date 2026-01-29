// Module: vu1
// Dependencies: Xb, xR, YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vu1 = v(WD8 => {
  Object.defineProperty(WD8, "__esModule", {
    value: !0
  });
  var SLq = __$.Xb(),
    hLq = __$.xR(),
    bLq = __$.YD(),
    _sA = bLq.getGlobalObject();
  function xLq() {
    try {
      return new ErrorEvent(""), !0;
    } catch (A) {
      return !1;
    }
  }
  function uLq() {
    try {
      return new DOMError(""), !0;
    } catch (A) {
      return !1;
    }
  }
  function BLq() {
    try {
      return new DOMException(""), !0;
    } catch (A) {
      return !1;
    }
  }
  function Tu1() {
    if (!("fetch" in _sA)) return !1;
    try {
      return new Request("http://www.example.com"), !0;
    } catch (A) {
      return !1;
    }
  }
  function Nu1(A) {
    return A && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(A.toString());
  }
  function mLq() {
    if (typeof EdgeRuntime === "string") return !0;
    if (!Tu1()) return !1;
    if (Nu1(_sA.fetch)) return !0;
    let A = !1,
      K = _sA.document;
    if (K && typeof K.createElement === "function") try {
      let q = K.createElement("iframe");
      if (q.hidden = !0, K.head.appendChild(q), q.contentWindow && q.contentWindow.fetch) A = Nu1(q.contentWindow.fetch);
      K.head.removeChild(q);
    } catch (q) {
      SLq.DEBUG_BUILD && hLq.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", q);
    }
    return A;
  }
  function gLq() {
    return "ReportingObserver" in _sA;
  }
  function FLq() {
    if (!Tu1()) return !1;
    try {
      return new Request("_", {
        referrerPolicy: "origin"
      }), !0;
    } catch (A) {
      return !1;
    }
  }
  WD8.isNativeFetch = Nu1;
  WD8.supportsDOMError = uLq;
  WD8.supportsDOMException = BLq;
  WD8.supportsErrorEvent = xLq;
  WD8.supportsFetch = Tu1;
  WD8.supportsNativeFetch = mLq;
  WD8.supportsReferrerPolicy = FLq;
  WD8.supportsReportingObserver = gLq;
});

// Register to shared state
__$.vu1 = vu1;
