// Module: rT6
// Dependencies: Xj, SW1, NgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rT6 = v(op => {
  var AsY = op && op.__awaiter || function (A, K, q, Y) {
    function z(w) {
      return w instanceof q ? w : new q(function (H) {
        H(w);
      });
    }
    return new (q || (q = Promise))(function (w, H) {
      function J($) {
        try {
          X(Y.next($));
        } catch (_) {
          H(_);
        }
      }
      function O($) {
        try {
          X(Y.throw($));
        } catch (_) {
          H(_);
        }
      }
      function X($) {
        $.done ? w($.value) : z($.value).then(J, O);
      }
      X((Y = Y.apply(A, K || [])).next());
    });
  };
  Object.defineProperty(op, "__esModule", {
    value: !0
  });
  op.ErrorBoundary = op.EXCEPTION_ENDPOINT = void 0;
  var KsY = __$.Xj(),
    qsY = __$.SW1(),
    YsY = __$.NgA();
  op.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
  var pS7 = "[Statsig] UnknownError";
  class dS7 {
    constructor(A, K, q, Y) {
      this._sdkKey = A, this._options = K, this._emitter = q, this._lastSeenError = Y, this._seen = new Set();
    }
    wrap(A) {
      try {
        let K = A;
        wsY(K).forEach(q => {
          let Y = K[q];
          if ("$EB" in Y) return;
          K[q] = (...z) => {
            return this._capture(q, () => Y.apply(A, z));
          }, K[q].$EB = !0;
        });
      } catch (K) {
        this._onError("eb:wrap", K);
      }
    }
    logError(A, K) {
      this._onError(A, K);
    }
    getLastSeenErrorAndReset() {
      let A = this._lastSeenError;
      return this._lastSeenError = void 0, A !== null && A !== void 0 ? A : null;
    }
    attachErrorIfNoneExists(A) {
      if (this._lastSeenError) return;
      this._lastSeenError = US7(A);
    }
    _capture(A, K) {
      try {
        let q = K();
        if (q && q instanceof Promise) return q.catch(Y => this._onError(A, Y));
        return q;
      } catch (q) {
        return this._onError(A, q), null;
      }
    }
    _onError(A, K) {
      try {
        KsY.Log.warn(`Caught error in ${A}`, {
          error: K
        }), (() => AsY(this, void 0, void 0, function* () {
          var Y, z, w, H, J, O, X;
          let $ = K ? K : Error(pS7),
            _ = $ instanceof Error,
            G = _ ? $.name : "No Name",
            Z = US7($);
          if (this._lastSeenError = Z, this._seen.has(G)) return;
          if (this._seen.add(G), (z = (Y = this._options) === null || Y === void 0 ? void 0 : Y.networkConfig) === null || z === void 0 ? void 0 : z.preventAllNetworkTraffic) {
            (w = this._emitter) === null || w === void 0 || w.call(this, {
              name: "error",
              error: K,
              tag: A
            });
            return;
          }
          let W = qsY.SDKType._get(this._sdkKey),
            D = YsY.StatsigMetadataProvider.get(),
            j = _ ? $.stack : zsY($),
            M = JSON.stringify(Object.assign({
              tag: A,
              exception: G,
              info: j
            }, Object.assign(Object.assign({}, D), {
              sdkType: W
            })));
          yield ((O = (J = (H = this._options) === null || H === void 0 ? void 0 : H.networkConfig) === null || J === void 0 ? void 0 : J.networkOverrideFunc) !== null && O !== void 0 ? O : fetch)(op.EXCEPTION_ENDPOINT, {
            method: "POST",
            headers: {
              "STATSIG-API-KEY": this._sdkKey,
              "STATSIG-SDK-TYPE": String(W),
              "STATSIG-SDK-VERSION": String(D.sdkVersion),
              "Content-Type": "application/json"
            },
            body: M
          }), (X = this._emitter) === null || X === void 0 || X.call(this, {
            name: "error",
            error: K,
            tag: A
          });
        }))().then(() => {}).catch(() => {});
      } catch (q) {}
    }
  }
  op.ErrorBoundary = dS7;
  function US7(A) {
    if (A instanceof Error) return A;else if (typeof A === "string") return Error(A);else return Error("An unknown error occurred.");
  }
  function zsY(A) {
    try {
      return JSON.stringify(A);
    } catch (K) {
      return pS7;
    }
  }
  function wsY(A) {
    let K = new Set(),
      q = Object.getPrototypeOf(A);
    while (q && q !== Object.prototype) Object.getOwnPropertyNames(q).filter(Y => typeof (q === null || q === void 0 ? void 0 : q[Y]) === "function").forEach(Y => K.add(Y)), q = Object.getPrototypeOf(q);
    return Array.from(K);
  }
});

// Register to shared state
__$.rT6 = rT6;
