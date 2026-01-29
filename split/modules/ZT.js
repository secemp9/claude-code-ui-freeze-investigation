// Module: ZT
// Dependencies: HRA, L66, IV, j9, SZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZT = v((X6w, J54) => {
  var {
      Transform: Rm3
    } = CA("node:stream"),
    lq4 = CA("node:zlib"),
    {
      redirectStatusSet: ym3,
      referrerPolicySet: Im3,
      badPortsSet: Sm3
    } = __$.HRA(),
    {
      getGlobalOrigin: iq4
    } = __$.L66(),
    {
      collectASequenceOfCodePoints: S8A,
      collectAnHTTPQuotedString: hm3,
      removeChars: bm3,
      parseMIMEType: xm3
    } = __$.IV(),
    {
      performance: um3
    } = CA("node:perf_hooks"),
    {
      isBlobLike: Bm3,
      ReadableStreamFrom: mm3,
      isValidHTTPToken: nq4,
      normalizedMethodRecordsBase: gm3
    } = __$.j9(),
    h8A = CA("node:assert"),
    {
      isUint8Array: Fm3
    } = CA("node:util/types"),
    {
      webidl: ORA
    } = __$.SZ(),
    rq4 = [],
    o71;
  try {
    o71 = CA("node:crypto");
    let A = ["sha256", "sha384", "sha512"];
    rq4 = o71.getHashes().filter(K => A.includes(K));
  } catch {}
  function oq4(A) {
    let K = A.urlList,
      q = K.length;
    return q === 0 ? null : K[q - 1].toString();
  }
  function Qm3(A, K) {
    if (!ym3.has(A.status)) return null;
    let q = A.headersList.get("location", !0);
    if (q !== null && sq4(q)) {
      if (!aq4(q)) q = Um3(q);
      q = new URL(q, oq4(A));
    }
    if (q && !q.hash) q.hash = K;
    return q;
  }
  function aq4(A) {
    for (let K = 0; K < A.length; ++K) {
      let q = A.charCodeAt(K);
      if (q > 126 || q < 32) return !1;
    }
    return !0;
  }
  function Um3(A) {
    return Buffer.from(A, "binary").toString("utf8");
  }
  function $RA(A) {
    return A.urlList[A.urlList.length - 1];
  }
  function pm3(A) {
    let K = $RA(A);
    if (q54(K) && Sm3.has(K.port)) return "blocked";
    return "allowed";
  }
  function dm3(A) {
    return A instanceof Error || A?.constructor?.name === "Error" || A?.constructor?.name === "DOMException";
  }
  function cm3(A) {
    for (let K = 0; K < A.length; ++K) {
      let q = A.charCodeAt(K);
      if (!(q === 9 || q >= 32 && q <= 126 || q >= 128 && q <= 255)) return !1;
    }
    return !0;
  }
  var lm3 = nq4;
  function sq4(A) {
    return (A[0] === "\t" || A[0] === " " || A[A.length - 1] === "\t" || A[A.length - 1] === " " || A.includes(`
`) || A.includes("\r") || A.includes("\x00")) === !1;
  }
  function im3(A, K) {
    let {
        headersList: q
      } = K,
      Y = (q.get("referrer-policy", !0) ?? "").split(","),
      z = "";
    if (Y.length > 0) for (let w = Y.length; w !== 0; w--) {
      let H = Y[w - 1].trim();
      if (Im3.has(H)) {
        z = H;
        break;
      }
    }
    if (z !== "") A.referrerPolicy = z;
  }
  function nm3() {
    return "allowed";
  }
  function rm3() {
    return "success";
  }
  function om3() {
    return "success";
  }
  function am3(A) {
    let K = null;
    K = A.mode, A.headersList.set("sec-fetch-mode", K, !0);
  }
  function sm3(A) {
    let K = A.origin;
    if (K === "client" || K === void 0) return;
    if (A.responseTainting === "cors" || A.mode === "websocket") A.headersList.append("origin", K, !0);else if (A.method !== "GET" && A.method !== "HEAD") {
      switch (A.referrerPolicy) {
        case "no-referrer":
          K = null;
          break;
        case "no-referrer-when-downgrade":
        case "strict-origin":
        case "strict-origin-when-cross-origin":
          if (A.origin && S66(A.origin) && !S66($RA(A))) K = null;
          break;
        case "same-origin":
          if (!a71(A, $RA(A))) K = null;
          break;
        default:
      }
      A.headersList.append("origin", K, !0);
    }
  }
  function _0A(A, K) {
    return A;
  }
  function tm3(A, K, q) {
    if (!A?.startTime || A.startTime < K) return {
      domainLookupStartTime: K,
      domainLookupEndTime: K,
      connectionStartTime: K,
      connectionEndTime: K,
      secureConnectionStartTime: K,
      ALPNNegotiatedProtocol: A?.ALPNNegotiatedProtocol
    };
    return {
      domainLookupStartTime: _0A(A.domainLookupStartTime, q),
      domainLookupEndTime: _0A(A.domainLookupEndTime, q),
      connectionStartTime: _0A(A.connectionStartTime, q),
      connectionEndTime: _0A(A.connectionEndTime, q),
      secureConnectionStartTime: _0A(A.secureConnectionStartTime, q),
      ALPNNegotiatedProtocol: A.ALPNNegotiatedProtocol
    };
  }
  function em3(A) {
    return _0A(um3.now(), A);
  }
  function Ag3(A) {
    return {
      startTime: A.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: A.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    };
  }
  function tq4() {
    return {
      referrerPolicy: "strict-origin-when-cross-origin"
    };
  }
  function Kg3(A) {
    return {
      referrerPolicy: A.referrerPolicy
    };
  }
  function qg3(A) {
    let K = A.referrerPolicy;
    h8A(K);
    let q = null;
    if (A.referrer === "client") {
      let J = iq4();
      if (!J || J.origin === "null") return "no-referrer";
      q = new URL(J);
    } else if (A.referrer instanceof URL) q = A.referrer;
    let Y = I66(q),
      z = I66(q, !0);
    if (Y.toString().length > 4096) Y = z;
    let w = a71(A, Y),
      H = XRA(Y) && !XRA(A.url);
    switch (K) {
      case "origin":
        return z != null ? z : I66(q, !0);
      case "unsafe-url":
        return Y;
      case "same-origin":
        return w ? z : "no-referrer";
      case "origin-when-cross-origin":
        return w ? Y : z;
      case "strict-origin-when-cross-origin":
        {
          let J = $RA(A);
          if (a71(Y, J)) return Y;
          if (XRA(Y) && !XRA(J)) return "no-referrer";
          return z;
        }
      case "strict-origin":
      case "no-referrer-when-downgrade":
      default:
        return H ? "no-referrer" : z;
    }
  }
  function I66(A, K) {
    if (h8A(A instanceof URL), A = new URL(A), A.protocol === "file:" || A.protocol === "about:" || A.protocol === "blank:") return "no-referrer";
    if (A.username = "", A.password = "", A.hash = "", K) A.pathname = "", A.search = "";
    return A;
  }
  function XRA(A) {
    if (!(A instanceof URL)) return !1;
    if (A.href === "about:blank" || A.href === "about:srcdoc") return !0;
    if (A.protocol === "data:") return !0;
    if (A.protocol === "file:") return !0;
    return K(A.origin);
    function K(q) {
      if (q == null || q === "null") return !1;
      let Y = new URL(q);
      if (Y.protocol === "https:" || Y.protocol === "wss:") return !0;
      if (/^127(?:\.[0-9]+){0,2}\.[0-9]+$|^\[(?:0*:)*?:?0*1\]$/.test(Y.hostname) || Y.hostname === "localhost" || Y.hostname.includes("localhost.") || Y.hostname.endsWith(".localhost")) return !0;
      return !1;
    }
  }
  function Yg3(A, K) {
    if (o71 === void 0) return !0;
    let q = eq4(K);
    if (q === "no metadata") return !0;
    if (q.length === 0) return !0;
    let Y = wg3(q),
      z = Hg3(q, Y);
    for (let w of z) {
      let {
          algo: H,
          hash: J
        } = w,
        O = o71.createHash(H).update(A).digest("base64");
      if (O[O.length - 1] === "=") if (O[O.length - 2] === "=") O = O.slice(0, -2);else O = O.slice(0, -1);
      if (Jg3(O, J)) return !0;
    }
    return !1;
  }
  var zg3 = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i;
  function eq4(A) {
    let K = [],
      q = !0;
    for (let Y of A.split(" ")) {
      q = !1;
      let z = zg3.exec(Y);
      if (z === null || z.groups === void 0 || z.groups.algo === void 0) continue;
      let w = z.groups.algo.toLowerCase();
      if (rq4.includes(w)) K.push(z.groups);
    }
    if (q === !0) return "no metadata";
    return K;
  }
  function wg3(A) {
    let K = A[0].algo;
    if (K[3] === "5") return K;
    for (let q = 1; q < A.length; ++q) {
      let Y = A[q];
      if (Y.algo[3] === "5") {
        K = "sha512";
        break;
      } else if (K[3] === "3") continue;else if (Y.algo[3] === "3") K = "sha384";
    }
    return K;
  }
  function Hg3(A, K) {
    if (A.length === 1) return A;
    let q = 0;
    for (let Y = 0; Y < A.length; ++Y) if (A[Y].algo === K) A[q++] = A[Y];
    return A.length = q, A;
  }
  function Jg3(A, K) {
    if (A.length !== K.length) return !1;
    for (let q = 0; q < A.length; ++q) if (A[q] !== K[q]) {
      if (A[q] === "+" && K[q] === "-" || A[q] === "/" && K[q] === "_") continue;
      return !1;
    }
    return !0;
  }
  function Og3(A) {}
  function a71(A, K) {
    if (A.origin === K.origin && A.origin === "null") return !0;
    if (A.protocol === K.protocol && A.hostname === K.hostname && A.port === K.port) return !0;
    return !1;
  }
  function Xg3() {
    let A, K;
    return {
      promise: new Promise((Y, z) => {
        A = Y, K = z;
      }),
      resolve: A,
      reject: K
    };
  }
  function $g3(A) {
    return A.controller.state === "aborted";
  }
  function _g3(A) {
    return A.controller.state === "aborted" || A.controller.state === "terminated";
  }
  function Gg3(A) {
    return gm3[A.toLowerCase()] ?? A;
  }
  function Zg3(A) {
    let K = JSON.stringify(A);
    if (K === void 0) throw TypeError("Value is not JSON serializable");
    return h8A(typeof K === "string"), K;
  }
  var Wg3 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function A54(A, K, q = 0, Y = 1) {
    class z {
      #A;
      #K;
      #q;
      constructor(w, H) {
        this.#A = w, this.#K = H, this.#q = 0;
      }
      next() {
        if (typeof this !== "object" || this === null || !(#A in this)) throw TypeError(`'next' called on an object that does not implement interface ${A} Iterator.`);
        let w = this.#q,
          H = this.#A[K],
          J = H.length;
        if (w >= J) return {
          value: void 0,
          done: !0
        };
        let {
          [q]: O,
          [Y]: X
        } = H[w];
        this.#q = w + 1;
        let $;
        switch (this.#K) {
          case "key":
            $ = O;
            break;
          case "value":
            $ = X;
            break;
          case "key+value":
            $ = [O, X];
            break;
        }
        return {
          value: $,
          done: !1
        };
      }
    }
    return delete z.prototype.constructor, Object.setPrototypeOf(z.prototype, Wg3), Object.defineProperties(z.prototype, {
      [Symbol.toStringTag]: {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: `${A} Iterator`
      },
      next: {
        writable: !0,
        enumerable: !0,
        configurable: !0
      }
    }), function (w, H) {
      return new z(w, H);
    };
  }
  function Dg3(A, K, q, Y = 0, z = 1) {
    let w = A54(A, q, Y, z),
      H = {
        keys: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function () {
            return ORA.brandCheck(this, K), w(this, "key");
          }
        },
        values: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function () {
            return ORA.brandCheck(this, K), w(this, "value");
          }
        },
        entries: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function () {
            return ORA.brandCheck(this, K), w(this, "key+value");
          }
        },
        forEach: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function (O, X = globalThis) {
            if (ORA.brandCheck(this, K), ORA.argumentLengthCheck(arguments, 1, `${A}.forEach`), typeof O !== "function") throw TypeError(`Failed to execute 'forEach' on '${A}': parameter 1 is not of type 'Function'.`);
            for (let {
              0: $,
              1: _
            } of w(this, "key+value")) O.call(X, _, $, this);
          }
        }
      };
    return Object.defineProperties(K.prototype, {
      ...H,
      [Symbol.iterator]: {
        writable: !0,
        enumerable: !1,
        configurable: !0,
        value: H.entries.value
      }
    });
  }
  async function jg3(A, K, q) {
    let Y = K,
      z = q,
      w;
    try {
      w = A.stream.getReader();
    } catch (H) {
      z(H);
      return;
    }
    try {
      Y(await K54(w));
    } catch (H) {
      z(H);
    }
  }
  function Mg3(A) {
    return A instanceof ReadableStream || A[Symbol.toStringTag] === "ReadableStream" && typeof A.tee === "function";
  }
  function Pg3(A) {
    try {
      A.close(), A.byobRequest?.respond(0);
    } catch (K) {
      if (!K.message.includes("Controller is already closed") && !K.message.includes("ReadableStream is already closed")) throw K;
    }
  }
  var Vg3 = /[^\x00-\xFF]/;
  function r71(A) {
    return h8A(!Vg3.test(A)), A;
  }
  async function K54(A) {
    let K = [],
      q = 0;
    while (!0) {
      let {
        done: Y,
        value: z
      } = await A.read();
      if (Y) return Buffer.concat(K, q);
      if (!Fm3(z)) throw TypeError("Received non-Uint8Array chunk");
      K.push(z), q += z.length;
    }
  }
  function fg3(A) {
    h8A("protocol" in A);
    let K = A.protocol;
    return K === "about:" || K === "blob:" || K === "data:";
  }
  function S66(A) {
    return typeof A === "string" && A[5] === ":" && A[0] === "h" && A[1] === "t" && A[2] === "t" && A[3] === "p" && A[4] === "s" || A.protocol === "https:";
  }
  function q54(A) {
    h8A("protocol" in A);
    let K = A.protocol;
    return K === "http:" || K === "https:";
  }
  function Ng3(A, K) {
    let q = A;
    if (!q.startsWith("bytes")) return "failure";
    let Y = {
      position: 5
    };
    if (K) S8A(O => O === "\t" || O === " ", q, Y);
    if (q.charCodeAt(Y.position) !== 61) return "failure";
    if (Y.position++, K) S8A(O => O === "\t" || O === " ", q, Y);
    let z = S8A(O => {
        let X = O.charCodeAt(0);
        return X >= 48 && X <= 57;
      }, q, Y),
      w = z.length ? Number(z) : null;
    if (K) S8A(O => O === "\t" || O === " ", q, Y);
    if (q.charCodeAt(Y.position) !== 45) return "failure";
    if (Y.position++, K) S8A(O => O === "\t" || O === " ", q, Y);
    let H = S8A(O => {
        let X = O.charCodeAt(0);
        return X >= 48 && X <= 57;
      }, q, Y),
      J = H.length ? Number(H) : null;
    if (Y.position < q.length) return "failure";
    if (J === null && w === null) return "failure";
    if (w > J) return "failure";
    return {
      rangeStartValue: w,
      rangeEndValue: J
    };
  }
  function Tg3(A, K, q) {
    let Y = "bytes ";
    return Y += r71(`${A}`), Y += "-", Y += r71(`${K}`), Y += "/", Y += r71(`${q}`), Y;
  }
  class Y54 extends Rm3 {
    #A;
    constructor(A) {
      super();
      this.#A = A;
    }
    _transform(A, K, q) {
      if (!this._inflateStream) {
        if (A.length === 0) {
          q();
          return;
        }
        this._inflateStream = (A[0] & 15) === 8 ? lq4.createInflate(this.#A) : lq4.createInflateRaw(this.#A), this._inflateStream.on("data", this.push.bind(this)), this._inflateStream.on("end", () => this.push(null)), this._inflateStream.on("error", Y => this.destroy(Y));
      }
      this._inflateStream.write(A, K, q);
    }
    _final(A) {
      if (this._inflateStream) this._inflateStream.end(), this._inflateStream = null;
      A();
    }
  }
  function vg3(A) {
    return new Y54(A);
  }
  function Eg3(A) {
    let K = null,
      q = null,
      Y = null,
      z = z54("content-type", A);
    if (z === null) return "failure";
    for (let w of z) {
      let H = xm3(w);
      if (H === "failure" || H.essence === "*/*") continue;
      if (Y = H, Y.essence !== q) {
        if (K = null, Y.parameters.has("charset")) K = Y.parameters.get("charset");
        q = Y.essence;
      } else if (!Y.parameters.has("charset") && K !== null) Y.parameters.set("charset", K);
    }
    if (Y == null) return "failure";
    return Y;
  }
  function kg3(A) {
    let K = A,
      q = {
        position: 0
      },
      Y = [],
      z = "";
    while (q.position < K.length) {
      if (z += S8A(w => w !== '"' && w !== ",", K, q), q.position < K.length) if (K.charCodeAt(q.position) === 34) {
        if (z += hm3(K, q), q.position < K.length) continue;
      } else h8A(K.charCodeAt(q.position) === 44), q.position++;
      z = bm3(z, !0, !0, w => w === 9 || w === 32), Y.push(z), z = "";
    }
    return Y;
  }
  function z54(A, K) {
    let q = K.get(A, !0);
    if (q === null) return null;
    return kg3(q);
  }
  var Cg3 = new TextDecoder();
  function Lg3(A) {
    if (A.length === 0) return "";
    if (A[0] === 239 && A[1] === 187 && A[2] === 191) A = A.subarray(3);
    return Cg3.decode(A);
  }
  class w54 {
    get baseUrl() {
      return iq4();
    }
    get origin() {
      return this.baseUrl?.origin;
    }
    policyContainer = tq4();
  }
  class H54 {
    settingsObject = new w54();
  }
  var Rg3 = new H54();
  J54.exports = {
    isAborted: $g3,
    isCancelled: _g3,
    isValidEncodedURL: aq4,
    createDeferredPromise: Xg3,
    ReadableStreamFrom: mm3,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: Og3,
    clampAndCoarsenConnectionTimingInfo: tm3,
    coarsenedSharedCurrentTime: em3,
    determineRequestsReferrer: qg3,
    makePolicyContainer: tq4,
    clonePolicyContainer: Kg3,
    appendFetchMetadata: am3,
    appendRequestOriginHeader: sm3,
    TAOCheck: om3,
    corsCheck: rm3,
    crossOriginResourcePolicyCheck: nm3,
    createOpaqueTimingInfo: Ag3,
    setRequestReferrerPolicyOnRedirect: im3,
    isValidHTTPToken: nq4,
    requestBadPort: pm3,
    requestCurrentURL: $RA,
    responseURL: oq4,
    responseLocationURL: Qm3,
    isBlobLike: Bm3,
    isURLPotentiallyTrustworthy: XRA,
    isValidReasonPhrase: cm3,
    sameOrigin: a71,
    normalizeMethod: Gg3,
    serializeJavascriptValueToJSONString: Zg3,
    iteratorMixin: Dg3,
    createIterator: A54,
    isValidHeaderName: lm3,
    isValidHeaderValue: sq4,
    isErrorLike: dm3,
    fullyReadBody: jg3,
    bytesMatch: Yg3,
    isReadableStreamLike: Mg3,
    readableStreamClose: Pg3,
    isomorphicEncode: r71,
    urlIsLocal: fg3,
    urlHasHttpsScheme: S66,
    urlIsHttpHttpsScheme: q54,
    readAllBytes: K54,
    simpleRangeHeaderValue: Ng3,
    buildContentRange: Tg3,
    parseMetadata: eq4,
    createInflate: vg3,
    extractMimeType: Eg3,
    getDecodeSplit: z54,
    utf8DecodeBytes: Lg3,
    environmentSettingsObject: Rg3
  };
});

// Register to shared state
__$.ZT = ZT;
