// Module: QRA
// Dependencies: d8A, j0A, j9, ZT, HRA, kn, SZ, _RA, IV, MJ
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QRA = v((e6w, T24) => {
  var {
      Headers: P24,
      HeadersList: Z24,
      fill: Jc3,
      getHeadersGuard: Oc3,
      setHeadersGuard: V24,
      setHeadersList: f24
    } = __$.d8A(),
    {
      extractBody: W24,
      cloneBody: Xc3,
      mixinBody: $c3,
      hasFinalizationRegistry: _c3,
      streamRegistry: Gc3,
      bodyUnusable: Zc3
    } = __$.j0A(),
    o86 = __$.j9(),
    D24 = CA("node:util"),
    {
      kEnumerableProperty: MT
    } = o86,
    {
      isValidReasonPhrase: Wc3,
      isCancelled: Dc3,
      isAborted: jc3,
      isBlobLike: Mc3,
      serializeJavascriptValueToJSONString: Pc3,
      isErrorLike: Vc3,
      isomorphicEncode: fc3,
      environmentSettingsObject: Nc3
    } = __$.ZT(),
    {
      redirectStatusSet: Tc3,
      nullBodyStatus: vc3
    } = __$.HRA(),
    {
      kState: rO,
      kHeaders: PQ
    } = __$.kn(),
    {
      webidl: N3
    } = __$.SZ(),
    {
      FormData: Ec3
    } = __$._RA(),
    {
      URLSerializer: j24
    } = __$.IV(),
    {
      kConstruct: BK1
    } = __$.MJ(),
    a86 = CA("node:assert"),
    {
      types: kc3
    } = CA("node:util"),
    Cc3 = new TextEncoder("utf-8");
  class kD {
    static error() {
      return FRA(mK1(), "immutable");
    }
    static json(A, K = {}) {
      if (N3.argumentLengthCheck(arguments, 1, "Response.json"), K !== null) K = N3.converters.ResponseInit(K);
      let q = Cc3.encode(Pc3(A)),
        Y = W24(q),
        z = FRA(x0A({}), "response");
      return M24(z, K, {
        body: Y[0],
        type: "application/json"
      }), z;
    }
    static redirect(A, K = 302) {
      N3.argumentLengthCheck(arguments, 1, "Response.redirect"), A = N3.converters.USVString(A), K = N3.converters["unsigned short"](K);
      let q;
      try {
        q = new URL(A, Nc3.settingsObject.baseUrl);
      } catch (w) {
        throw TypeError(`Failed to parse URL from ${A}`, {
          cause: w
        });
      }
      if (!Tc3.has(K)) throw RangeError(`Invalid status code ${K}`);
      let Y = FRA(x0A({}), "immutable");
      Y[rO].status = K;
      let z = fc3(j24(q));
      return Y[rO].headersList.append("location", z, !0), Y;
    }
    constructor(A = null, K = {}) {
      if (N3.util.markAsUncloneable(this), A === BK1) return;
      if (A !== null) A = N3.converters.BodyInit(A);
      K = N3.converters.ResponseInit(K), this[rO] = x0A({}), this[PQ] = new P24(BK1), V24(this[PQ], "response"), f24(this[PQ], this[rO].headersList);
      let q = null;
      if (A != null) {
        let [Y, z] = W24(A);
        q = {
          body: Y,
          type: z
        };
      }
      M24(this, K, q);
    }
    get type() {
      return N3.brandCheck(this, kD), this[rO].type;
    }
    get url() {
      N3.brandCheck(this, kD);
      let A = this[rO].urlList,
        K = A[A.length - 1] ?? null;
      if (K === null) return "";
      return j24(K, !0);
    }
    get redirected() {
      return N3.brandCheck(this, kD), this[rO].urlList.length > 1;
    }
    get status() {
      return N3.brandCheck(this, kD), this[rO].status;
    }
    get ok() {
      return N3.brandCheck(this, kD), this[rO].status >= 200 && this[rO].status <= 299;
    }
    get statusText() {
      return N3.brandCheck(this, kD), this[rO].statusText;
    }
    get headers() {
      return N3.brandCheck(this, kD), this[PQ];
    }
    get body() {
      return N3.brandCheck(this, kD), this[rO].body ? this[rO].body.stream : null;
    }
    get bodyUsed() {
      return N3.brandCheck(this, kD), !!this[rO].body && o86.isDisturbed(this[rO].body.stream);
    }
    clone() {
      if (N3.brandCheck(this, kD), Zc3(this)) throw N3.errors.exception({
        header: "Response.clone",
        message: "Body has already been consumed."
      });
      let A = s86(this[rO]);
      return FRA(A, Oc3(this[PQ]));
    }
    [D24.inspect.custom](A, K) {
      if (K.depth === null) K.depth = 2;
      K.colors ??= !0;
      let q = {
        status: this.status,
        statusText: this.statusText,
        headers: this.headers,
        body: this.body,
        bodyUsed: this.bodyUsed,
        ok: this.ok,
        redirected: this.redirected,
        type: this.type,
        url: this.url
      };
      return `Response ${D24.formatWithOptions(K, q)}`;
    }
  }
  $c3(kD);
  Object.defineProperties(kD.prototype, {
    type: MT,
    url: MT,
    status: MT,
    ok: MT,
    redirected: MT,
    statusText: MT,
    headers: MT,
    clone: MT,
    body: MT,
    bodyUsed: MT,
    [Symbol.toStringTag]: {
      value: "Response",
      configurable: !0
    }
  });
  Object.defineProperties(kD, {
    json: MT,
    redirect: MT,
    error: MT
  });
  function s86(A) {
    if (A.internalResponse) return N24(s86(A.internalResponse), A.type);
    let K = x0A({
      ...A,
      body: null
    });
    if (A.body != null) K.body = Xc3(K, A.body);
    return K;
  }
  function x0A(A) {
    return {
      aborted: !1,
      rangeRequested: !1,
      timingAllowPassed: !1,
      requestIncludesCredentials: !1,
      type: "default",
      status: 200,
      timingInfo: null,
      cacheState: "",
      statusText: "",
      ...A,
      headersList: A?.headersList ? new Z24(A?.headersList) : new Z24(),
      urlList: A?.urlList ? [...A.urlList] : []
    };
  }
  function mK1(A) {
    let K = Vc3(A);
    return x0A({
      type: "error",
      status: 0,
      error: K ? A : Error(A ? String(A) : A),
      aborted: A && A.name === "AbortError"
    });
  }
  function Lc3(A) {
    return A.type === "error" && A.status === 0;
  }
  function uK1(A, K) {
    return K = {
      internalResponse: A,
      ...K
    }, new Proxy(A, {
      get(q, Y) {
        return Y in K ? K[Y] : q[Y];
      },
      set(q, Y, z) {
        return a86(!(Y in K)), q[Y] = z, !0;
      }
    });
  }
  function N24(A, K) {
    if (K === "basic") return uK1(A, {
      type: "basic",
      headersList: A.headersList
    });else if (K === "cors") return uK1(A, {
      type: "cors",
      headersList: A.headersList
    });else if (K === "opaque") return uK1(A, {
      type: "opaque",
      urlList: Object.freeze([]),
      status: 0,
      statusText: "",
      body: null
    });else if (K === "opaqueredirect") return uK1(A, {
      type: "opaqueredirect",
      status: 0,
      statusText: "",
      headersList: [],
      body: null
    });else a86(!1);
  }
  function Rc3(A, K = null) {
    return a86(Dc3(A)), jc3(A) ? mK1(Object.assign(new DOMException("The operation was aborted.", "AbortError"), {
      cause: K
    })) : mK1(Object.assign(new DOMException("Request was cancelled."), {
      cause: K
    }));
  }
  function M24(A, K, q) {
    if (K.status !== null && (K.status < 200 || K.status > 599)) throw RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in K && K.statusText != null) {
      if (!Wc3(String(K.statusText))) throw TypeError("Invalid statusText");
    }
    if ("status" in K && K.status != null) A[rO].status = K.status;
    if ("statusText" in K && K.statusText != null) A[rO].statusText = K.statusText;
    if ("headers" in K && K.headers != null) Jc3(A[PQ], K.headers);
    if (q) {
      if (vc3.includes(A.status)) throw N3.errors.exception({
        header: "Response constructor",
        message: `Invalid response status code ${A.status}`
      });
      if (A[rO].body = q.body, q.type != null && !A[rO].headersList.contains("content-type", !0)) A[rO].headersList.append("content-type", q.type, !0);
    }
  }
  function FRA(A, K) {
    let q = new kD(BK1);
    if (q[rO] = A, q[PQ] = new P24(BK1), f24(q[PQ], A.headersList), V24(q[PQ], K), _c3 && A.body?.stream) Gc3.register(q, new WeakRef(A.body.stream));
    return q;
  }
  N3.converters.ReadableStream = N3.interfaceConverter(ReadableStream);
  N3.converters.FormData = N3.interfaceConverter(Ec3);
  N3.converters.URLSearchParams = N3.interfaceConverter(URLSearchParams);
  N3.converters.XMLHttpRequestBodyInit = function (A, K, q) {
    if (typeof A === "string") return N3.converters.USVString(A, K, q);
    if (Mc3(A)) return N3.converters.Blob(A, K, q, {
      strict: !1
    });
    if (ArrayBuffer.isView(A) || kc3.isArrayBuffer(A)) return N3.converters.BufferSource(A, K, q);
    if (o86.isFormDataLike(A)) return N3.converters.FormData(A, K, q, {
      strict: !1
    });
    if (A instanceof URLSearchParams) return N3.converters.URLSearchParams(A, K, q);
    return N3.converters.DOMString(A, K, q);
  };
  N3.converters.BodyInit = function (A, K, q) {
    if (A instanceof ReadableStream) return N3.converters.ReadableStream(A, K, q);
    if (A?.[Symbol.asyncIterator]) return A;
    return N3.converters.XMLHttpRequestBodyInit(A, K, q);
  };
  N3.converters.ResponseInit = N3.dictionaryConverter([{
    key: "status",
    converter: N3.converters["unsigned short"],
    defaultValue: () => 200
  }, {
    key: "statusText",
    converter: N3.converters.ByteString,
    defaultValue: () => ""
  }, {
    key: "headers",
    converter: N3.converters.HeadersInit
  }]);
  T24.exports = {
    isNetworkError: Lc3,
    makeNetworkError: mK1,
    makeResponse: x0A,
    makeAppropriateNetworkError: Rc3,
    filterResponse: N24,
    Response: kD,
    cloneResponse: s86,
    fromInnerResponse: FRA
  };
});

// Register to shared state
__$.QRA = QRA;
