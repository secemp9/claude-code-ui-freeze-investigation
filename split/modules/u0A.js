// Module: u0A
// Dependencies: j0A, d8A, R24, j9, ZT, HRA, kn, SZ, IV, MJ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var u0A = v((K8w, d24) => {
  var {
      extractBody: yc3,
      mixinBody: Ic3,
      cloneBody: Sc3,
      bodyUnusable: y24
    } = __$.j0A(),
    {
      Headers: g24,
      fill: hc3,
      HeadersList: UK1,
      setHeadersGuard: e86,
      getHeadersGuard: bc3,
      setHeadersList: F24,
      getHeadersList: I24
    } = __$.d8A(),
    {
      FinalizationRegistry: xc3
    } = __$.R24()(),
    FK1 = __$.j9(),
    S24 = CA("node:util"),
    {
      isValidHTTPToken: uc3,
      sameOrigin: h24,
      environmentSettingsObject: gK1
    } = __$.ZT(),
    {
      forbiddenMethodsSet: Bc3,
      corsSafeListedMethodsSet: mc3,
      referrerPolicy: gc3,
      requestRedirect: Fc3,
      requestMode: Qc3,
      requestCredentials: Uc3,
      requestCache: pc3,
      requestDuplex: dc3
    } = __$.HRA(),
    {
      kEnumerableProperty: aX,
      normalizedMethodRecordsBase: cc3,
      normalizedMethodRecords: lc3
    } = FK1,
    {
      kHeaders: PT,
      kSignal: QK1,
      kState: bH,
      kDispatcher: t86
    } = __$.kn(),
    {
      webidl: vq
    } = __$.SZ(),
    {
      URLSerializer: ic3
    } = __$.IV(),
    {
      kConstruct: pK1
    } = __$.MJ(),
    nc3 = CA("node:assert"),
    {
      getMaxListeners: b24,
      setMaxListeners: x24,
      getEventListeners: rc3,
      defaultMaxListeners: u24
    } = CA("node:events"),
    oc3 = Symbol("abortController"),
    Q24 = new xc3(({
      signal: A,
      abort: K
    }) => {
      A.removeEventListener("abort", K);
    }),
    dK1 = new WeakMap();
  function B24(A) {
    return K;
    function K() {
      let q = A.deref();
      if (q !== void 0) {
        Q24.unregister(K), this.removeEventListener("abort", K), q.abort(this.reason);
        let Y = dK1.get(q.signal);
        if (Y !== void 0) {
          if (Y.size !== 0) {
            for (let z of Y) {
              let w = z.deref();
              if (w !== void 0) w.abort(this.reason);
            }
            Y.clear();
          }
          dK1.delete(q.signal);
        }
      }
    }
  }
  var m24 = !1;
  class Ww {
    constructor(A, K = {}) {
      if (vq.util.markAsUncloneable(this), A === pK1) return;
      let q = "Request constructor";
      vq.argumentLengthCheck(arguments, 1, q), A = vq.converters.RequestInfo(A, q, "input"), K = vq.converters.RequestInit(K, q, "init");
      let Y = null,
        z = null,
        w = gK1.settingsObject.baseUrl,
        H = null;
      if (typeof A === "string") {
        this[t86] = K.dispatcher;
        let j;
        try {
          j = new URL(A, w);
        } catch (M) {
          throw TypeError("Failed to parse URL from " + A, {
            cause: M
          });
        }
        if (j.username || j.password) throw TypeError("Request cannot be constructed from a URL that includes credentials: " + A);
        Y = cK1({
          urlList: [j]
        }), z = "cors";
      } else this[t86] = K.dispatcher || A[t86], nc3(A instanceof Ww), Y = A[bH], H = A[QK1];
      let J = gK1.settingsObject.origin,
        O = "client";
      if (Y.window?.constructor?.name === "EnvironmentSettingsObject" && h24(Y.window, J)) O = Y.window;
      if (K.window != null) throw TypeError(`'window' option '${O}' must be null`);
      if ("window" in K) O = "no-window";
      Y = cK1({
        method: Y.method,
        headersList: Y.headersList,
        unsafeRequest: Y.unsafeRequest,
        client: gK1.settingsObject,
        window: O,
        priority: Y.priority,
        origin: Y.origin,
        referrer: Y.referrer,
        referrerPolicy: Y.referrerPolicy,
        mode: Y.mode,
        credentials: Y.credentials,
        cache: Y.cache,
        redirect: Y.redirect,
        integrity: Y.integrity,
        keepalive: Y.keepalive,
        reloadNavigation: Y.reloadNavigation,
        historyNavigation: Y.historyNavigation,
        urlList: [...Y.urlList]
      });
      let X = Object.keys(K).length !== 0;
      if (X) {
        if (Y.mode === "navigate") Y.mode = "same-origin";
        Y.reloadNavigation = !1, Y.historyNavigation = !1, Y.origin = "client", Y.referrer = "client", Y.referrerPolicy = "", Y.url = Y.urlList[Y.urlList.length - 1], Y.urlList = [Y.url];
      }
      if (K.referrer !== void 0) {
        let j = K.referrer;
        if (j === "") Y.referrer = "no-referrer";else {
          let M;
          try {
            M = new URL(j, w);
          } catch (P) {
            throw TypeError(`Referrer "${j}" is not a valid URL.`, {
              cause: P
            });
          }
          if (M.protocol === "about:" && M.hostname === "client" || J && !h24(M, gK1.settingsObject.baseUrl)) Y.referrer = "client";else Y.referrer = M;
        }
      }
      if (K.referrerPolicy !== void 0) Y.referrerPolicy = K.referrerPolicy;
      let $;
      if (K.mode !== void 0) $ = K.mode;else $ = z;
      if ($ === "navigate") throw vq.errors.exception({
        header: "Request constructor",
        message: "invalid request mode navigate."
      });
      if ($ != null) Y.mode = $;
      if (K.credentials !== void 0) Y.credentials = K.credentials;
      if (K.cache !== void 0) Y.cache = K.cache;
      if (Y.cache === "only-if-cached" && Y.mode !== "same-origin") throw TypeError("'only-if-cached' can be set only with 'same-origin' mode");
      if (K.redirect !== void 0) Y.redirect = K.redirect;
      if (K.integrity != null) Y.integrity = String(K.integrity);
      if (K.keepalive !== void 0) Y.keepalive = Boolean(K.keepalive);
      if (K.method !== void 0) {
        let j = K.method,
          M = lc3[j];
        if (M !== void 0) Y.method = M;else {
          if (!uc3(j)) throw TypeError(`'${j}' is not a valid HTTP method.`);
          let P = j.toUpperCase();
          if (Bc3.has(P)) throw TypeError(`'${j}' HTTP method is unsupported.`);
          j = cc3[P] ?? j, Y.method = j;
        }
        if (!m24 && Y.method === "patch") process.emitWarning("Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.", {
          code: "UNDICI-FETCH-patch"
        }), m24 = !0;
      }
      if (K.signal !== void 0) H = K.signal;
      this[bH] = Y;
      let _ = new AbortController();
      if (this[QK1] = _.signal, H != null) {
        if (!H || typeof H.aborted !== "boolean" || typeof H.addEventListener !== "function") throw TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
        if (H.aborted) _.abort(H.reason);else {
          this[oc3] = _;
          let j = new WeakRef(_),
            M = B24(j);
          try {
            if (typeof b24 === "function" && b24(H) === u24) x24(1500, H);else if (rc3(H, "abort").length >= u24) x24(1500, H);
          } catch {}
          FK1.addAbortListener(H, M), Q24.register(_, {
            signal: H,
            abort: M
          }, M);
        }
      }
      if (this[PT] = new g24(pK1), F24(this[PT], Y.headersList), e86(this[PT], "request"), $ === "no-cors") {
        if (!mc3.has(Y.method)) throw TypeError(`'${Y.method} is unsupported in no-cors mode.`);
        e86(this[PT], "request-no-cors");
      }
      if (X) {
        let j = I24(this[PT]),
          M = K.headers !== void 0 ? K.headers : new UK1(j);
        if (j.clear(), M instanceof UK1) {
          for (let {
            name: P,
            value: f
          } of M.rawValues()) j.append(P, f, !1);
          j.cookies = M.cookies;
        } else hc3(this[PT], M);
      }
      let G = A instanceof Ww ? A[bH].body : null;
      if ((K.body != null || G != null) && (Y.method === "GET" || Y.method === "HEAD")) throw TypeError("Request with GET/HEAD method cannot have body.");
      let Z = null;
      if (K.body != null) {
        let [j, M] = yc3(K.body, Y.keepalive);
        if (Z = j, M && !I24(this[PT]).contains("content-type", !0)) this[PT].append("content-type", M);
      }
      let W = Z ?? G;
      if (W != null && W.source == null) {
        if (Z != null && K.duplex == null) throw TypeError("RequestInit: duplex option is required when sending a body.");
        if (Y.mode !== "same-origin" && Y.mode !== "cors") throw TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
        Y.useCORSPreflightFlag = !0;
      }
      let D = W;
      if (Z == null && G != null) {
        if (y24(A)) throw TypeError("Cannot construct a Request with a Request object that has already been used.");
        let j = new TransformStream();
        G.stream.pipeThrough(j), D = {
          source: G.source,
          length: G.length,
          stream: j.readable
        };
      }
      this[bH].body = D;
    }
    get method() {
      return vq.brandCheck(this, Ww), this[bH].method;
    }
    get url() {
      return vq.brandCheck(this, Ww), ic3(this[bH].url);
    }
    get headers() {
      return vq.brandCheck(this, Ww), this[PT];
    }
    get destination() {
      return vq.brandCheck(this, Ww), this[bH].destination;
    }
    get referrer() {
      if (vq.brandCheck(this, Ww), this[bH].referrer === "no-referrer") return "";
      if (this[bH].referrer === "client") return "about:client";
      return this[bH].referrer.toString();
    }
    get referrerPolicy() {
      return vq.brandCheck(this, Ww), this[bH].referrerPolicy;
    }
    get mode() {
      return vq.brandCheck(this, Ww), this[bH].mode;
    }
    get credentials() {
      return this[bH].credentials;
    }
    get cache() {
      return vq.brandCheck(this, Ww), this[bH].cache;
    }
    get redirect() {
      return vq.brandCheck(this, Ww), this[bH].redirect;
    }
    get integrity() {
      return vq.brandCheck(this, Ww), this[bH].integrity;
    }
    get keepalive() {
      return vq.brandCheck(this, Ww), this[bH].keepalive;
    }
    get isReloadNavigation() {
      return vq.brandCheck(this, Ww), this[bH].reloadNavigation;
    }
    get isHistoryNavigation() {
      return vq.brandCheck(this, Ww), this[bH].historyNavigation;
    }
    get signal() {
      return vq.brandCheck(this, Ww), this[QK1];
    }
    get body() {
      return vq.brandCheck(this, Ww), this[bH].body ? this[bH].body.stream : null;
    }
    get bodyUsed() {
      return vq.brandCheck(this, Ww), !!this[bH].body && FK1.isDisturbed(this[bH].body.stream);
    }
    get duplex() {
      return vq.brandCheck(this, Ww), "half";
    }
    clone() {
      if (vq.brandCheck(this, Ww), y24(this)) throw TypeError("unusable");
      let A = U24(this[bH]),
        K = new AbortController();
      if (this.signal.aborted) K.abort(this.signal.reason);else {
        let q = dK1.get(this.signal);
        if (q === void 0) q = new Set(), dK1.set(this.signal, q);
        let Y = new WeakRef(K);
        q.add(Y), FK1.addAbortListener(K.signal, B24(Y));
      }
      return p24(A, K.signal, bc3(this[PT]));
    }
    [S24.inspect.custom](A, K) {
      if (K.depth === null) K.depth = 2;
      K.colors ??= !0;
      let q = {
        method: this.method,
        url: this.url,
        headers: this.headers,
        destination: this.destination,
        referrer: this.referrer,
        referrerPolicy: this.referrerPolicy,
        mode: this.mode,
        credentials: this.credentials,
        cache: this.cache,
        redirect: this.redirect,
        integrity: this.integrity,
        keepalive: this.keepalive,
        isReloadNavigation: this.isReloadNavigation,
        isHistoryNavigation: this.isHistoryNavigation,
        signal: this.signal
      };
      return `Request ${S24.formatWithOptions(K, q)}`;
    }
  }
  Ic3(Ww);
  function cK1(A) {
    return {
      method: A.method ?? "GET",
      localURLsOnly: A.localURLsOnly ?? !1,
      unsafeRequest: A.unsafeRequest ?? !1,
      body: A.body ?? null,
      client: A.client ?? null,
      reservedClient: A.reservedClient ?? null,
      replacesClientId: A.replacesClientId ?? "",
      window: A.window ?? "client",
      keepalive: A.keepalive ?? !1,
      serviceWorkers: A.serviceWorkers ?? "all",
      initiator: A.initiator ?? "",
      destination: A.destination ?? "",
      priority: A.priority ?? null,
      origin: A.origin ?? "client",
      policyContainer: A.policyContainer ?? "client",
      referrer: A.referrer ?? "client",
      referrerPolicy: A.referrerPolicy ?? "",
      mode: A.mode ?? "no-cors",
      useCORSPreflightFlag: A.useCORSPreflightFlag ?? !1,
      credentials: A.credentials ?? "same-origin",
      useCredentials: A.useCredentials ?? !1,
      cache: A.cache ?? "default",
      redirect: A.redirect ?? "follow",
      integrity: A.integrity ?? "",
      cryptoGraphicsNonceMetadata: A.cryptoGraphicsNonceMetadata ?? "",
      parserMetadata: A.parserMetadata ?? "",
      reloadNavigation: A.reloadNavigation ?? !1,
      historyNavigation: A.historyNavigation ?? !1,
      userActivation: A.userActivation ?? !1,
      taintedOrigin: A.taintedOrigin ?? !1,
      redirectCount: A.redirectCount ?? 0,
      responseTainting: A.responseTainting ?? "basic",
      preventNoCacheCacheControlHeaderModification: A.preventNoCacheCacheControlHeaderModification ?? !1,
      done: A.done ?? !1,
      timingAllowFailed: A.timingAllowFailed ?? !1,
      urlList: A.urlList,
      url: A.urlList[0],
      headersList: A.headersList ? new UK1(A.headersList) : new UK1()
    };
  }
  function U24(A) {
    let K = cK1({
      ...A,
      body: null
    });
    if (A.body != null) K.body = Sc3(K, A.body);
    return K;
  }
  function p24(A, K, q) {
    let Y = new Ww(pK1);
    return Y[bH] = A, Y[QK1] = K, Y[PT] = new g24(pK1), F24(Y[PT], A.headersList), e86(Y[PT], q), Y;
  }
  Object.defineProperties(Ww.prototype, {
    method: aX,
    url: aX,
    headers: aX,
    redirect: aX,
    clone: aX,
    signal: aX,
    duplex: aX,
    destination: aX,
    body: aX,
    bodyUsed: aX,
    isHistoryNavigation: aX,
    isReloadNavigation: aX,
    keepalive: aX,
    integrity: aX,
    cache: aX,
    credentials: aX,
    attribute: aX,
    referrerPolicy: aX,
    referrer: aX,
    mode: aX,
    [Symbol.toStringTag]: {
      value: "Request",
      configurable: !0
    }
  });
  vq.converters.Request = vq.interfaceConverter(Ww);
  vq.converters.RequestInfo = function (A, K, q) {
    if (typeof A === "string") return vq.converters.USVString(A, K, q);
    if (A instanceof Ww) return vq.converters.Request(A, K, q);
    return vq.converters.USVString(A, K, q);
  };
  vq.converters.AbortSignal = vq.interfaceConverter(AbortSignal);
  vq.converters.RequestInit = vq.dictionaryConverter([{
    key: "method",
    converter: vq.converters.ByteString
  }, {
    key: "headers",
    converter: vq.converters.HeadersInit
  }, {
    key: "body",
    converter: vq.nullableConverter(vq.converters.BodyInit)
  }, {
    key: "referrer",
    converter: vq.converters.USVString
  }, {
    key: "referrerPolicy",
    converter: vq.converters.DOMString,
    allowedValues: gc3
  }, {
    key: "mode",
    converter: vq.converters.DOMString,
    allowedValues: Qc3
  }, {
    key: "credentials",
    converter: vq.converters.DOMString,
    allowedValues: Uc3
  }, {
    key: "cache",
    converter: vq.converters.DOMString,
    allowedValues: pc3
  }, {
    key: "redirect",
    converter: vq.converters.DOMString,
    allowedValues: Fc3
  }, {
    key: "integrity",
    converter: vq.converters.DOMString
  }, {
    key: "keepalive",
    converter: vq.converters.boolean
  }, {
    key: "signal",
    converter: vq.nullableConverter(A => vq.converters.AbortSignal(A, "RequestInit", "signal", {
      strict: !1
    }))
  }, {
    key: "window",
    converter: vq.converters.any
  }, {
    key: "duplex",
    converter: vq.converters.DOMString,
    allowedValues: dc3
  }, {
    key: "dispatcher",
    converter: vq.converters.any
  }]);
  d24.exports = {
    Request: Ww,
    makeRequest: cK1,
    fromInnerRequest: p24,
    cloneRequest: U24
  };
});

// Register to shared state
__$.u0A = u0A;
