// Module: wh7
// Dependencies: tS7, CDA, Xj, rp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wh7 = v(ls => {
  var eS7 = ls && ls.__awaiter || function (A, K, q, Y) {
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
  Object.defineProperty(ls, "__esModule", {
    value: !0
  });
  ls._isDomainFailure = ls.NetworkFallbackResolver = void 0;
  var MsY = __$.tS7(),
    PsY = __$.CDA(),
    VsY = __$.Xj(),
    sT6 = __$.rp(),
    Ah7 = 604800000,
    fsY = 14400000;
  class qh7 {
    constructor(A) {
      var K;
      this._fallbackInfo = null, this._errorBoundary = null, this._dnsQueryCooldowns = {}, this._networkOverrideFunc = (K = A.networkConfig) === null || K === void 0 ? void 0 : K.networkOverrideFunc;
    }
    setErrorBoundary(A) {
      this._errorBoundary = A;
    }
    tryBumpExpiryTime(A, K) {
      var q;
      let Y = (q = this._fallbackInfo) === null || q === void 0 ? void 0 : q[K.endpoint];
      if (!Y) return;
      Y.expiryTime = Date.now() + Ah7, aT6(A, Object.assign(Object.assign({}, this._fallbackInfo), {
        [K.endpoint]: Y
      }));
    }
    getActiveFallbackUrl(A, K) {
      var q, Y;
      let z = this._fallbackInfo;
      if (z == null) z = (q = NsY(A)) !== null && q !== void 0 ? q : {}, this._fallbackInfo = z;
      let w = z[K.endpoint];
      if (!w || Date.now() > ((Y = w.expiryTime) !== null && Y !== void 0 ? Y : 0)) return delete z[K.endpoint], this._fallbackInfo = z, aT6(A, this._fallbackInfo), null;
      if (w.url) return w.url;
      return null;
    }
    getFallbackFromProvided(A) {
      let K = Kh7(A);
      if (K) return A.replace(K, "");
      return null;
    }
    tryFetchUpdatedFallbackInfo(A, K, q, Y) {
      var z, w;
      return eS7(this, void 0, void 0, function* () {
        try {
          if (!Yh7(q, Y)) return !1;
          let J = K.customUrl == null && K.fallbackUrls == null ? yield this._tryFetchFallbackUrlsFromNetwork(K) : K.fallbackUrls,
            O = this._pickNewFallbackUrl((z = this._fallbackInfo) === null || z === void 0 ? void 0 : z[K.endpoint], J);
          if (!O) return !1;
          return this._updateFallbackInfoWithNewUrl(A, K.endpoint, O), !0;
        } catch (H) {
          return (w = this._errorBoundary) === null || w === void 0 || w.logError("tryFetchUpdatedFallbackInfo", H), !1;
        }
      });
    }
    _updateFallbackInfoWithNewUrl(A, K, q) {
      var Y, z, w;
      let H = {
          url: q,
          expiryTime: Date.now() + Ah7,
          previous: []
        },
        J = (Y = this._fallbackInfo) === null || Y === void 0 ? void 0 : Y[K];
      if (J) H.previous.push(...J.previous);
      if (H.previous.length > 10) H.previous = [];
      let O = (w = (z = this._fallbackInfo) === null || z === void 0 ? void 0 : z[K]) === null || w === void 0 ? void 0 : w.url;
      if (O != null) H.previous.push(O);
      this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), {
        [K]: H
      }), aT6(A, this._fallbackInfo);
    }
    _tryFetchFallbackUrlsFromNetwork(A) {
      var K;
      return eS7(this, void 0, void 0, function* () {
        let q = this._dnsQueryCooldowns[A.endpoint];
        if (q && Date.now() < q) return null;
        this._dnsQueryCooldowns[A.endpoint] = Date.now() + fsY;
        let Y = [],
          z = yield (0, MsY._fetchTxtRecords)((K = this._networkOverrideFunc) !== null && K !== void 0 ? K : fetch),
          w = Kh7(A.defaultUrl);
        for (let H of z) {
          if (!H.startsWith(A.endpointDnsKey + "=")) continue;
          let J = H.split("=");
          if (J.length > 1) {
            let O = J[1];
            if (O.endsWith("/")) O = O.slice(0, -1);
            Y.push(`https://${O}${w}`);
          }
        }
        return Y;
      });
    }
    _pickNewFallbackUrl(A, K) {
      var q;
      if (K == null) return null;
      let Y = new Set((q = A === null || A === void 0 ? void 0 : A.previous) !== null && q !== void 0 ? q : []),
        z = A === null || A === void 0 ? void 0 : A.url,
        w = null;
      for (let H of K) {
        let J = H.endsWith("/") ? H.slice(0, -1) : H;
        if (!Y.has(H) && J !== z) {
          w = J;
          break;
        }
      }
      return w;
    }
  }
  ls.NetworkFallbackResolver = qh7;
  function Yh7(A, K) {
    var q;
    let Y = (q = A === null || A === void 0 ? void 0 : A.toLowerCase()) !== null && q !== void 0 ? q : "";
    return K || Y.includes("uncaught exception") || Y.includes("failed to fetch") || Y.includes("networkerror when attempting to fetch resource");
  }
  ls._isDomainFailure = Yh7;
  function zh7(A) {
    return `statsig.network_fallback.${(0, PsY._DJB2)(A)}`;
  }
  function aT6(A, K) {
    let q = zh7(A);
    if (!K || Object.keys(K).length === 0) {
      sT6.Storage.removeItem(q);
      return;
    }
    sT6.Storage.setItem(q, JSON.stringify(K));
  }
  function NsY(A) {
    let K = zh7(A),
      q = sT6.Storage.getItem(K);
    if (!q) return null;
    try {
      return JSON.parse(q);
    } catch (Y) {
      return VsY.Log.error("Failed to parse FallbackInfo"), null;
    }
  }
  function Kh7(A) {
    try {
      return new URL(A).pathname;
    } catch (K) {
      return null;
    }
  }
});

// Register to shared state
__$.wh7 = wh7;
