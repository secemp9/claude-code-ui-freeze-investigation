// Module: xu1
// Dependencies: SE, hE, YD, ag

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xu1 = v(kD8 => {
  Object.defineProperty(kD8, "__esModule", {
    value: !0
  });
  var PsA = __$.SE(),
    MsA = __$.hE(),
    WRq = __$.YD(),
    VsA = __$.ag(),
    DRq = WRq.GLOBAL_OBJ,
    XvA = "__sentry_xhr_v3__";
  function jRq(A) {
    VsA.addHandler("xhr", A), VsA.maybeInstrument("xhr", ED8);
  }
  function ED8() {
    if (!DRq.XMLHttpRequest) return;
    let A = XMLHttpRequest.prototype;
    MsA.fill(A, "open", function (K) {
      return function (...q) {
        let Y = Date.now(),
          z = PsA.isString(q[0]) ? q[0].toUpperCase() : void 0,
          w = MRq(q[1]);
        if (!z || !w) return K.apply(this, q);
        if (this[XvA] = {
          method: z,
          url: w,
          request_headers: {}
        }, z === "POST" && w.match(/sentry_key/)) this.__sentry_own_request__ = !0;
        let H = () => {
          let J = this[XvA];
          if (!J) return;
          if (this.readyState === 4) {
            try {
              J.status_code = this.status;
            } catch (X) {}
            let O = {
              args: [z, w],
              endTimestamp: Date.now(),
              startTimestamp: Y,
              xhr: this
            };
            VsA.triggerHandlers("xhr", O);
          }
        };
        if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") MsA.fill(this, "onreadystatechange", function (J) {
          return function (...O) {
            return H(), J.apply(this, O);
          };
        });else this.addEventListener("readystatechange", H);
        return MsA.fill(this, "setRequestHeader", function (J) {
          return function (...O) {
            let [X, $] = O,
              _ = this[XvA];
            if (_ && PsA.isString(X) && PsA.isString($)) _.request_headers[X.toLowerCase()] = $;
            return J.apply(this, O);
          };
        }), K.apply(this, q);
      };
    }), MsA.fill(A, "send", function (K) {
      return function (...q) {
        let Y = this[XvA];
        if (!Y) return K.apply(this, q);
        if (q[0] !== void 0) Y.body = q[0];
        let z = {
          args: [Y.method, Y.url],
          startTimestamp: Date.now(),
          xhr: this
        };
        return VsA.triggerHandlers("xhr", z), K.apply(this, q);
      };
    });
  }
  function MRq(A) {
    if (PsA.isString(A)) return A;
    try {
      return A.toString();
    } catch (K) {}
    return;
  }
  kD8.SENTRY_XHR_DATA_KEY = XvA;
  kD8.addXhrInstrumentationHandler = jRq;
  kD8.instrumentXHR = ED8;
});

// Register to shared state
__$.xu1 = xu1;
