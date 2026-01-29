// Module: Ch7
// Dependencies: y5A, GW1, Xj, MgA, wh7, tT6, SW1, I5A, bW1, LW1
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ch7 = v(xDA => {
  var bDA = xDA && xDA.__awaiter || function (A, K, q, Y) {
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
  Object.defineProperty(xDA, "__esModule", {
    value: !0
  });
  xDA.NetworkCore = void 0;
  __$.y5A();
  var Ph7 = __$.y5A(),
    Kv6 = __$.GW1(),
    h5A = __$.Xj(),
    _S = __$.MgA(),
    hsY = __$.wh7(),
    bsY = __$.tT6(),
    Nh7 = __$.SW1(),
    xsY = __$.I5A(),
    Th7 = __$.bW1(),
    usY = __$.LW1(),
    BsY = __$.Av6(),
    vh7 = __$.NgA(),
    msY = __$.vW1(),
    gsY = 1e4,
    FsY = 500,
    QsY = 30000,
    UsY = 1000,
    Eh7 = 50,
    psY = Eh7 / UsY,
    dsY = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class kh7 {
    constructor(A, K) {
      if (this._emitter = K, this._errorBoundary = null, this._timeout = gsY, this._netConfig = {}, this._options = {}, this._leakyBucket = {}, this._lastUsedInitUrl = null, A) this._options = A;
      if (this._options.networkConfig) this._netConfig = this._options.networkConfig;
      if (this._netConfig.networkTimeoutMs) this._timeout = this._netConfig.networkTimeoutMs;
      this._fallbackResolver = new hsY.NetworkFallbackResolver(this._options);
    }
    setErrorBoundary(A) {
      this._errorBoundary = A, this._errorBoundary.wrap(this), this._errorBoundary.wrap(this._fallbackResolver), this._fallbackResolver.setErrorBoundary(A);
    }
    isBeaconSupported() {
      return typeof navigator < "u" && typeof navigator.sendBeacon === "function";
    }
    getLastUsedInitUrlAndReset() {
      let A = this._lastUsedInitUrl;
      return this._lastUsedInitUrl = null, A;
    }
    beacon(A) {
      return bDA(this, void 0, void 0, function* () {
        if (!Vh7(A)) return !1;
        let K = this._getInternalRequestArgs("POST", A);
        yield this._tryToCompressBody(K);
        let q = yield this._getPopulatedURL(K),
          Y = navigator;
        return Y.sendBeacon.bind(Y)(q, K.body);
      });
    }
    post(A) {
      return bDA(this, void 0, void 0, function* () {
        let K = this._getInternalRequestArgs("POST", A);
        return this._tryEncodeBody(K), yield this._tryToCompressBody(K), this._sendRequest(K);
      });
    }
    get(A) {
      let K = this._getInternalRequestArgs("GET", A);
      return this._sendRequest(K);
    }
    _sendRequest(A) {
      var K, q, Y, z;
      return bDA(this, void 0, void 0, function* () {
        if (!Vh7(A)) return null;
        if (this._netConfig.preventAllNetworkTraffic) return null;
        let {
            method: w,
            body: H,
            retries: J,
            attempt: O
          } = A,
          X = A.urlConfig.endpoint;
        if (this._isRateLimited(X)) return h5A.Log.warn(`Request to ${X} was blocked because you are making requests too frequently.`), null;
        let $ = O !== null && O !== void 0 ? O : 1,
          _ = typeof AbortController < "u" ? new AbortController() : null,
          G = setTimeout(() => {
            _ === null || _ === void 0 || _.abort(`Timeout of ${this._timeout}ms expired.`);
          }, this._timeout),
          Z = yield this._getPopulatedURL(A),
          W = null,
          D = (0, msY._isUnloading)();
        try {
          let j = {
            method: w,
            body: H,
            headers: Object.assign({}, A.headers),
            signal: _ === null || _ === void 0 ? void 0 : _.signal,
            priority: A.priority,
            keepalive: D
          };
          nsY(A, $);
          let M = this._leakyBucket[X];
          if (M) M.lastRequestTime = Date.now(), this._leakyBucket[X] = M;
          if (W = yield ((K = this._netConfig.networkOverrideFunc) !== null && K !== void 0 ? K : fetch)(Z, j), clearTimeout(G), !W.ok) {
            let N = yield W.text().catch(() => "No Text"),
              T = Error(`NetworkError: ${Z} ${N}`);
            throw T.name = "NetworkError", T;
          }
          let f = yield W.text();
          return fh7(A, W, $, f), this._fallbackResolver.tryBumpExpiryTime(A.sdkKey, A.urlConfig), {
            body: f,
            code: W.status
          };
        } catch (j) {
          let M = lsY(_, j),
            P = isY(_);
          if (fh7(A, W, $, "", j), yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(A.sdkKey, A.urlConfig, M, P)) A.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(A.sdkKey, A.urlConfig);
          if (!J || $ > J || !dsY.has((q = W === null || W === void 0 ? void 0 : W.status) !== null && q !== void 0 ? q : 500)) {
            (Y = this._emitter) === null || Y === void 0 || Y.call(this, {
              name: "error",
              error: j,
              tag: BsY.ErrorTag.NetworkError,
              requestArgs: A
            });
            let N = `A networking error occurred during ${w} request to ${Z}.`;
            return h5A.Log.error(N, M, j), (z = this._errorBoundary) === null || z === void 0 || z.attachErrorIfNoneExists(N), null;
          }
          return yield rsY($), this._sendRequest(Object.assign(Object.assign({}, A), {
            retries: J,
            attempt: $ + 1
          }));
        }
      });
    }
    _isRateLimited(A) {
      var K;
      let q = Date.now(),
        Y = (K = this._leakyBucket[A]) !== null && K !== void 0 ? K : {
          count: 0,
          lastRequestTime: q
        },
        z = q - Y.lastRequestTime,
        w = Math.floor(z * psY);
      if (Y.count = Math.max(0, Y.count - w), Y.count >= Eh7) return !0;
      return Y.count += 1, Y.lastRequestTime = q, this._leakyBucket[A] = Y, !1;
    }
    _getPopulatedURL(A) {
      var K;
      return bDA(this, void 0, void 0, function* () {
        let q = (K = A.fallbackUrl) !== null && K !== void 0 ? K : A.urlConfig.getUrl();
        if (A.urlConfig.endpoint === _S.Endpoint._initialize || A.urlConfig.endpoint === _S.Endpoint._download_config_specs) this._lastUsedInitUrl = q;
        let Y = Object.assign({
            [_S.NetworkParam.SdkKey]: A.sdkKey,
            [_S.NetworkParam.SdkType]: Nh7.SDKType._get(A.sdkKey),
            [_S.NetworkParam.SdkVersion]: vh7.SDK_VERSION,
            [_S.NetworkParam.Time]: String(Date.now()),
            [_S.NetworkParam.SessionID]: Th7.SessionID.get(A.sdkKey)
          }, A.params),
          z = Object.keys(Y).map(w => {
            return `${encodeURIComponent(w)}=${encodeURIComponent(Y[w])}`;
          }).join("&");
        return `${q}${z ? `?${z}` : ""}`;
      });
    }
    _tryEncodeBody(A) {
      var K;
      let q = (0, xsY._getWindowSafe)(),
        Y = A.body;
      if (!A.isStatsigEncodable || this._options.disableStatsigEncoding || typeof Y !== "string" || (0, Ph7._getStatsigGlobalFlag)("no-encode") != null || !(q === null || q === void 0 ? void 0 : q.btoa)) return;
      try {
        A.body = q.btoa(Y).split("").reverse().join(""), A.params = Object.assign(Object.assign({}, (K = A.params) !== null && K !== void 0 ? K : {}), {
          [_S.NetworkParam.StatsigEncoded]: "1"
        });
      } catch (z) {
        h5A.Log.warn(`Request encoding failed for ${A.urlConfig.getUrl()}`, z);
      }
    }
    _tryToCompressBody(A) {
      var K;
      return bDA(this, void 0, void 0, function* () {
        let q = A.body;
        if (!A.isCompressable || this._options.disableCompression || typeof q !== "string" || bsY.SDKFlags.get(A.sdkKey, "enable_log_event_compression") !== !0 || (0, Ph7._getStatsigGlobalFlag)("no-compress") != null || typeof CompressionStream > "u" || typeof TextEncoder > "u") return;
        try {
          let Y = new TextEncoder().encode(q),
            z = new CompressionStream("gzip"),
            w = z.writable.getWriter();
          w.write(Y).catch(h5A.Log.error), w.close().catch(h5A.Log.error);
          let H = z.readable.getReader(),
            J = [],
            O;
          while (!(O = yield H.read()).done) J.push(O.value);
          let X = J.reduce((G, Z) => G + Z.length, 0),
            $ = new Uint8Array(X),
            _ = 0;
          for (let G of J) $.set(G, _), _ += G.length;
          A.body = $, A.params = Object.assign(Object.assign({}, (K = A.params) !== null && K !== void 0 ? K : {}), {
            [_S.NetworkParam.IsGzipped]: "1"
          });
        } catch (Y) {
          h5A.Log.warn(`Request compression failed for ${A.urlConfig.getUrl()}`, Y);
        }
      });
    }
    _getInternalRequestArgs(A, K) {
      let q = this._fallbackResolver.getActiveFallbackUrl(K.sdkKey, K.urlConfig),
        Y = Object.assign(Object.assign({}, K), {
          method: A,
          fallbackUrl: q
        });
      if ("data" in K) csY(Y, K.data);
      return Y;
    }
  }
  xDA.NetworkCore = kh7;
  var Vh7 = A => {
      if (!A.sdkKey) return h5A.Log.warn("Unable to make request without an SDK key"), !1;
      return !0;
    },
    csY = (A, K) => {
      let {
          sdkKey: q,
          fallbackUrl: Y
        } = A,
        z = usY.StableID.get(q),
        w = Th7.SessionID.get(q),
        H = Nh7.SDKType._get(q);
      A.body = JSON.stringify(Object.assign(Object.assign({}, K), {
        statsigMetadata: Object.assign(Object.assign({}, vh7.StatsigMetadataProvider.get()), {
          stableID: z,
          sessionID: w,
          sdkType: H,
          fallbackUrl: Y
        })
      }));
    };
  function lsY(A, K) {
    if ((A === null || A === void 0 ? void 0 : A.signal.aborted) && typeof A.signal.reason === "string") return A.signal.reason;
    if (typeof K === "string") return K;
    if (K instanceof Error) return `${K.name}: ${K.message}`;
    return "Unknown Error";
  }
  function isY(A) {
    return (A === null || A === void 0 ? void 0 : A.signal.aborted) && typeof A.signal.reason === "string" && A.signal.reason.includes("Timeout") || !1;
  }
  function nsY(A, K) {
    if (A.urlConfig.endpoint !== _S.Endpoint._initialize) return;
    Kv6.Diagnostics._markInitNetworkReqStart(A.sdkKey, {
      attempt: K
    });
  }
  function fh7(A, K, q, Y, z) {
    if (A.urlConfig.endpoint !== _S.Endpoint._initialize) return;
    Kv6.Diagnostics._markInitNetworkReqEnd(A.sdkKey, Kv6.Diagnostics._getDiagnosticsData(K, q, Y, z));
  }
  function rsY(A) {
    return bDA(this, void 0, void 0, function* () {
      yield new Promise(K => setTimeout(K, Math.min(FsY * (A * A), QsY)));
    });
  }
});

// Register to shared state
__$.Ch7 = Ch7;
