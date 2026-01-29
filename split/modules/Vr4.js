// Module: Vr4
// Dependencies: bw6, XH6, Kn4, GH6, _n4, wr4, VH6, KRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vr4 = v(BD => {
  var za9 = BD && BD.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    wa9 = BD && BD.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    Ha9 = BD && BD.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) za9(K, A, q);
      }
      return wa9(K, A), K;
    },
    b7A = BD && BD.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    Ja9 = BD && BD.__classPrivateFieldSet || function (A, K, q, Y, z) {
      if (Y === "m") throw TypeError("Private method is not writable");
      if (Y === "a" && !z) throw TypeError("Private accessor was defined without a setter");
      if (typeof K === "function" ? A !== K || !z : !K.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return Y === "a" ? z.call(A, q) : z ? z.value = q : K.set(A, q), q;
    },
    dz1 = BD && BD.__importDefault || function (A) {
      return A && A.__esModule ? A : {
        default: A
      };
    },
    G_A,
    h7A,
    Xr4,
    Dr4,
    jr4,
    Mr4,
    Uz1,
    $r4;
  Object.defineProperty(BD, "__esModule", {
    value: !0
  });
  BD.Gaxios = void 0;
  var Oa9 = dz1(__$.bw6()),
    Xa9 = CA("https"),
    $a9 = dz1(__$.XH6()),
    _a9 = dz1(CA("querystring")),
    Ga9 = dz1(__$.Kn4()),
    _r4 = CA("url"),
    pz1 = __$.GH6(),
    Za9 = __$._n4(),
    Gr4 = CA("stream"),
    Wa9 = __$.wr4(),
    Zr4 = __$.VH6(),
    Da9 = Ma9() ? window.fetch : $a9.default;
  function ja9() {
    return typeof window < "u" && !!window;
  }
  function Ma9() {
    return ja9() && !!window.fetch;
  }
  function Pa9() {
    return typeof Buffer < "u";
  }
  function Wr4(A, K) {
    return !!Pr4(A, K);
  }
  function Pr4(A, K) {
    K = K.toLowerCase();
    for (let q of Object.keys((A === null || A === void 0 ? void 0 : A.headers) || {})) if (K === q.toLowerCase()) return A.headers[q];
    return;
  }
  class fH6 {
    constructor(A) {
      G_A.add(this), this.agentCache = new Map(), this.defaults = A || {}, this.interceptors = {
        request: new Zr4.GaxiosInterceptorManager(),
        response: new Zr4.GaxiosInterceptorManager()
      };
    }
    async request(A = {}) {
      return A = await b7A(this, G_A, "m", Mr4).call(this, A), A = await b7A(this, G_A, "m", Dr4).call(this, A), b7A(this, G_A, "m", jr4).call(this, this._request(A));
    }
    async _defaultAdapter(A) {
      let q = await (A.fetchImplementation || Da9)(A.url, A),
        Y = await this.getResponseData(A, q);
      return this.translateResponse(A, q, Y);
    }
    async _request(A = {}) {
      var K;
      try {
        let q;
        if (A.adapter) q = await A.adapter(A, this._defaultAdapter.bind(this));else q = await this._defaultAdapter(A);
        if (!A.validateStatus(q.status)) {
          if (A.responseType === "stream") {
            let Y = "";
            await new Promise(z => {
              (q === null || q === void 0 ? void 0 : q.data).on("data", w => {
                Y += w;
              }), (q === null || q === void 0 ? void 0 : q.data).on("end", z);
            }), q.data = Y;
          }
          throw new pz1.GaxiosError(`Request failed with status code ${q.status}`, A, q);
        }
        return q;
      } catch (q) {
        let Y = q instanceof pz1.GaxiosError ? q : new pz1.GaxiosError(q.message, A, void 0, q),
          {
            shouldRetry: z,
            config: w
          } = await (0, Za9.getRetryConfig)(Y);
        if (z && w) return Y.config.retryConfig.currentRetryAttempt = w.retryConfig.currentRetryAttempt, A.retryConfig = (K = Y.config) === null || K === void 0 ? void 0 : K.retryConfig, this._request(A);
        throw Y;
      }
    }
    async getResponseData(A, K) {
      switch (A.responseType) {
        case "stream":
          return K.body;
        case "json":
          {
            let q = await K.text();
            try {
              q = JSON.parse(q);
            } catch (Y) {}
            return q;
          }
        case "arraybuffer":
          return K.arrayBuffer();
        case "blob":
          return K.blob();
        case "text":
          return K.text();
        default:
          return this.getResponseDataFromContentType(K);
      }
    }
    validateStatus(A) {
      return A >= 200 && A < 300;
    }
    paramsSerializer(A) {
      return _a9.default.stringify(A);
    }
    translateResponse(A, K, q) {
      let Y = {};
      return K.headers.forEach((z, w) => {
        Y[w] = z;
      }), {
        config: A,
        data: q,
        headers: Y,
        status: K.status,
        statusText: K.statusText,
        request: {
          responseURL: K.url
        }
      };
    }
    async getResponseDataFromContentType(A) {
      let K = A.headers.get("Content-Type");
      if (K === null) return A.text();
      if (K = K.toLowerCase(), K.includes("application/json")) {
        let q = await A.text();
        try {
          q = JSON.parse(q);
        } catch (Y) {}
        return q;
      } else if (K.match(/^text\//)) return A.text();else return A.blob();
    }
    async *getMultipartRequest(A, K) {
      let q = `--${K}--`;
      for (let Y of A) {
        let z = Y.headers["Content-Type"] || "application/octet-stream";
        if (yield `--${K}\r
Content-Type: ${z}\r
\r
`, typeof Y.content === "string") yield Y.content;else yield* Y.content;
        yield `\r
`;
      }
      yield q;
    }
  }
  BD.Gaxios = fH6;
  h7A = fH6, G_A = new WeakSet(), Xr4 = function (K, q = []) {
    var Y, z;
    let w = new _r4.URL(K),
      H = [...q],
      J = ((z = (Y = process.env.NO_PROXY) !== null && Y !== void 0 ? Y : process.env.no_proxy) === null || z === void 0 ? void 0 : z.split(",")) || [];
    for (let O of J) H.push(O.trim());
    for (let O of H) if (O instanceof RegExp) {
      if (O.test(w.toString())) return !1;
    } else if (O instanceof _r4.URL) {
      if (O.origin === w.origin) return !1;
    } else if (O.startsWith("*.") || O.startsWith(".")) {
      let X = O.replace(/^\*\./, ".");
      if (w.hostname.endsWith(X)) return !1;
    } else if (O === w.origin || O === w.hostname || O === w.href) return !1;
    return !0;
  }, Dr4 = async function (K) {
    let q = Promise.resolve(K);
    for (let Y of this.interceptors.request.values()) if (Y) q = q.then(Y.resolved, Y.rejected);
    return q;
  }, jr4 = async function (K) {
    let q = Promise.resolve(K);
    for (let Y of this.interceptors.response.values()) if (Y) q = q.then(Y.resolved, Y.rejected);
    return q;
  }, Mr4 = async function (K) {
    var q, Y, z, w;
    let H = (0, Oa9.default)(!0, {}, this.defaults, K);
    if (!H.url) throw Error("URL is required.");
    let J = H.baseUrl || H.baseURL;
    if (J) H.url = J.toString() + H.url;
    if (H.paramsSerializer = H.paramsSerializer || this.paramsSerializer, H.params && Object.keys(H.params).length > 0) {
      let $ = H.paramsSerializer(H.params);
      if ($.startsWith("?")) $ = $.slice(1);
      let _ = H.url.toString().includes("?") ? "&" : "?";
      H.url = H.url + _ + $;
    }
    if (typeof K.maxContentLength === "number") H.size = K.maxContentLength;
    if (typeof K.maxRedirects === "number") H.follow = K.maxRedirects;
    if (H.headers = H.headers || {}, H.multipart === void 0 && H.data) {
      let $ = typeof FormData > "u" ? !1 : (H === null || H === void 0 ? void 0 : H.data) instanceof FormData;
      if (Ga9.default.readable(H.data)) H.body = H.data;else if (Pa9() && Buffer.isBuffer(H.data)) {
        if (H.body = H.data, !Wr4(H, "Content-Type")) H.headers["Content-Type"] = "application/json";
      } else if (typeof H.data === "object") {
        if (!$) if (Pr4(H, "content-type") === "application/x-www-form-urlencoded") H.body = H.paramsSerializer(H.data);else {
          if (!Wr4(H, "Content-Type")) H.headers["Content-Type"] = "application/json";
          H.body = JSON.stringify(H.data);
        }
      } else H.body = H.data;
    } else if (H.multipart && H.multipart.length > 0) {
      let $ = (0, Wa9.v4)();
      H.headers["Content-Type"] = `multipart/related; boundary=${$}`;
      let _ = new Gr4.PassThrough();
      H.body = _, (0, Gr4.pipeline)(this.getMultipartRequest(H.multipart, $), _, () => {});
    }
    if (H.validateStatus = H.validateStatus || this.validateStatus, H.responseType = H.responseType || "unknown", !H.headers.Accept && H.responseType === "json") H.headers.Accept = "application/json";
    H.method = H.method || "GET";
    let O = H.proxy || ((q = process === null || process === void 0 ? void 0 : process.env) === null || q === void 0 ? void 0 : q.HTTPS_PROXY) || ((Y = process === null || process === void 0 ? void 0 : process.env) === null || Y === void 0 ? void 0 : Y.https_proxy) || ((z = process === null || process === void 0 ? void 0 : process.env) === null || z === void 0 ? void 0 : z.HTTP_PROXY) || ((w = process === null || process === void 0 ? void 0 : process.env) === null || w === void 0 ? void 0 : w.http_proxy),
      X = b7A(this, G_A, "m", Xr4).call(this, H.url, H.noProxy);
    if (H.agent) ;else if (O && X) {
      let $ = await b7A(h7A, h7A, "m", $r4).call(h7A);
      if (this.agentCache.has(O)) H.agent = this.agentCache.get(O);else H.agent = new $(O, {
        cert: H.cert,
        key: H.key
      }), this.agentCache.set(O, H.agent);
    } else if (H.cert && H.key) if (this.agentCache.has(H.key)) H.agent = this.agentCache.get(H.key);else H.agent = new Xa9.Agent({
      cert: H.cert,
      key: H.key
    }), this.agentCache.set(H.key, H.agent);
    if (typeof H.errorRedactor !== "function" && H.errorRedactor !== !1) H.errorRedactor = pz1.defaultErrorRedactor;
    return H;
  }, $r4 = async function () {
    return Ja9(this, h7A, b7A(this, h7A, "f", Uz1) || (await Promise.resolve().then(() => Ha9(__$.KRA()))).HttpsProxyAgent, "f", Uz1), b7A(this, h7A, "f", Uz1);
  };
  Uz1 = {
    value: void 0
  };
});

// Register to shared state
__$.Vr4 = Vr4;
