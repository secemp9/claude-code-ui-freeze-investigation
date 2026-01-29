// Module: j9
// Dependencies: MJ, _2, u71, NK4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j9 = v((r1w, mK4) => {
  var qRA = CA("node:assert"),
    {
      kDestroyed: vK4,
      kBodyUsed: q0A,
      kListeners: z66,
      kBody: TK4
    } = __$.MJ(),
    {
      IncomingMessage: vu3
    } = CA("node:http"),
    m71 = CA("node:stream"),
    Eu3 = CA("node:net"),
    {
      Blob: ku3
    } = CA("node:buffer"),
    Cu3 = CA("node:util"),
    {
      stringify: Lu3
    } = CA("node:querystring"),
    {
      EventEmitter: Ru3
    } = CA("node:events"),
    {
      InvalidArgumentError: zG
    } = __$._2(),
    {
      headerNameLowerCasedRecord: yu3
    } = __$.u71(),
    {
      tree: EK4
    } = __$.NK4(),
    [Iu3, Su3] = process.versions.node.split(".").map(A => Number(A));
  class w66 {
    constructor(A) {
      this[TK4] = A, this[q0A] = !1;
    }
    async *[Symbol.asyncIterator]() {
      qRA(!this[q0A], "disturbed"), this[q0A] = !0, yield* this[TK4];
    }
  }
  function hu3(A) {
    if (g71(A)) {
      if (yK4(A) === 0) A.on("data", function () {
        qRA(!1);
      });
      if (typeof A.readableDidRead !== "boolean") A[q0A] = !1, Ru3.prototype.on.call(A, "data", function () {
        this[q0A] = !0;
      });
      return A;
    } else if (A && typeof A.pipeTo === "function") return new w66(A);else if (A && typeof A !== "string" && !ArrayBuffer.isView(A) && RK4(A)) return new w66(A);else return A;
  }
  function bu3() {}
  function g71(A) {
    return A && typeof A === "object" && typeof A.pipe === "function" && typeof A.on === "function";
  }
  function kK4(A) {
    if (A === null) return !1;else if (A instanceof ku3) return !0;else if (typeof A !== "object") return !1;else {
      let K = A[Symbol.toStringTag];
      return (K === "Blob" || K === "File") && ("stream" in A && typeof A.stream === "function" || "arrayBuffer" in A && typeof A.arrayBuffer === "function");
    }
  }
  function xu3(A, K) {
    if (A.includes("?") || A.includes("#")) throw Error('Query params cannot be passed when url already contains "?" or "#".');
    let q = Lu3(K);
    if (q) A += "?" + q;
    return A;
  }
  function CK4(A) {
    let K = parseInt(A, 10);
    return K === Number(A) && K >= 0 && K <= 65535;
  }
  function B71(A) {
    return A != null && A[0] === "h" && A[1] === "t" && A[2] === "t" && A[3] === "p" && (A[4] === ":" || A[4] === "s" && A[5] === ":");
  }
  function LK4(A) {
    if (typeof A === "string") {
      if (A = new URL(A), !B71(A.origin || A.protocol)) throw new zG("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      return A;
    }
    if (!A || typeof A !== "object") throw new zG("Invalid URL: The URL argument must be a non-null object.");
    if (!(A instanceof URL)) {
      if (A.port != null && A.port !== "" && CK4(A.port) === !1) throw new zG("Invalid URL: port must be a valid integer or a string representation of an integer.");
      if (A.path != null && typeof A.path !== "string") throw new zG("Invalid URL path: the path must be a string or null/undefined.");
      if (A.pathname != null && typeof A.pathname !== "string") throw new zG("Invalid URL pathname: the pathname must be a string or null/undefined.");
      if (A.hostname != null && typeof A.hostname !== "string") throw new zG("Invalid URL hostname: the hostname must be a string or null/undefined.");
      if (A.origin != null && typeof A.origin !== "string") throw new zG("Invalid URL origin: the origin must be a string or null/undefined.");
      if (!B71(A.origin || A.protocol)) throw new zG("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      let K = A.port != null ? A.port : A.protocol === "https:" ? 443 : 80,
        q = A.origin != null ? A.origin : `${A.protocol || ""}//${A.hostname || ""}:${K}`,
        Y = A.path != null ? A.path : `${A.pathname || ""}${A.search || ""}`;
      if (q[q.length - 1] === "/") q = q.slice(0, q.length - 1);
      if (Y && Y[0] !== "/") Y = `/${Y}`;
      return new URL(`${q}${Y}`);
    }
    if (!B71(A.origin || A.protocol)) throw new zG("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    return A;
  }
  function uu3(A) {
    if (A = LK4(A), A.pathname !== "/" || A.search || A.hash) throw new zG("invalid url");
    return A;
  }
  function Bu3(A) {
    if (A[0] === "[") {
      let q = A.indexOf("]");
      return qRA(q !== -1), A.substring(1, q);
    }
    let K = A.indexOf(":");
    if (K === -1) return A;
    return A.substring(0, K);
  }
  function mu3(A) {
    if (!A) return null;
    qRA(typeof A === "string");
    let K = Bu3(A);
    if (Eu3.isIP(K)) return "";
    return K;
  }
  function gu3(A) {
    return JSON.parse(JSON.stringify(A));
  }
  function Fu3(A) {
    return A != null && typeof A[Symbol.asyncIterator] === "function";
  }
  function RK4(A) {
    return A != null && (typeof A[Symbol.iterator] === "function" || typeof A[Symbol.asyncIterator] === "function");
  }
  function yK4(A) {
    if (A == null) return 0;else if (g71(A)) {
      let K = A._readableState;
      return K && K.objectMode === !1 && K.ended === !0 && Number.isFinite(K.length) ? K.length : null;
    } else if (kK4(A)) return A.size != null ? A.size : null;else if (hK4(A)) return A.byteLength;
    return null;
  }
  function IK4(A) {
    return A && !!(A.destroyed || A[vK4] || m71.isDestroyed?.(A));
  }
  function Qu3(A, K) {
    if (A == null || !g71(A) || IK4(A)) return;
    if (typeof A.destroy === "function") {
      if (Object.getPrototypeOf(A).constructor === vu3) A.socket = null;
      A.destroy(K);
    } else if (K) queueMicrotask(() => {
      A.emit("error", K);
    });
    if (A.destroyed !== !0) A[vK4] = !0;
  }
  var Uu3 = /timeout=(\d+)/;
  function pu3(A) {
    let K = A.toString().match(Uu3);
    return K ? parseInt(K[1], 10) * 1000 : null;
  }
  function SK4(A) {
    return typeof A === "string" ? yu3[A] ?? A.toLowerCase() : EK4.lookup(A) ?? A.toString("latin1").toLowerCase();
  }
  function du3(A) {
    return EK4.lookup(A) ?? A.toString("latin1").toLowerCase();
  }
  function cu3(A, K) {
    if (K === void 0) K = {};
    for (let q = 0; q < A.length; q += 2) {
      let Y = SK4(A[q]),
        z = K[Y];
      if (z) {
        if (typeof z === "string") z = [z], K[Y] = z;
        z.push(A[q + 1].toString("utf8"));
      } else {
        let w = A[q + 1];
        if (typeof w === "string") K[Y] = w;else K[Y] = Array.isArray(w) ? w.map(H => H.toString("utf8")) : w.toString("utf8");
      }
    }
    if ("content-length" in K && "content-disposition" in K) K["content-disposition"] = Buffer.from(K["content-disposition"]).toString("latin1");
    return K;
  }
  function lu3(A) {
    let K = A.length,
      q = Array(K),
      Y = !1,
      z = -1,
      w,
      H,
      J = 0;
    for (let O = 0; O < A.length; O += 2) {
      if (w = A[O], H = A[O + 1], typeof w !== "string" && (w = w.toString()), typeof H !== "string" && (H = H.toString("utf8")), J = w.length, J === 14 && w[7] === "-" && (w === "content-length" || w.toLowerCase() === "content-length")) Y = !0;else if (J === 19 && w[7] === "-" && (w === "content-disposition" || w.toLowerCase() === "content-disposition")) z = O + 1;
      q[O] = w, q[O + 1] = H;
    }
    if (Y && z !== -1) q[z] = Buffer.from(q[z]).toString("latin1");
    return q;
  }
  function hK4(A) {
    return A instanceof Uint8Array || Buffer.isBuffer(A);
  }
  function iu3(A, K, q) {
    if (!A || typeof A !== "object") throw new zG("handler must be an object");
    if (typeof A.onConnect !== "function") throw new zG("invalid onConnect method");
    if (typeof A.onError !== "function") throw new zG("invalid onError method");
    if (typeof A.onBodySent !== "function" && A.onBodySent !== void 0) throw new zG("invalid onBodySent method");
    if (q || K === "CONNECT") {
      if (typeof A.onUpgrade !== "function") throw new zG("invalid onUpgrade method");
    } else {
      if (typeof A.onHeaders !== "function") throw new zG("invalid onHeaders method");
      if (typeof A.onData !== "function") throw new zG("invalid onData method");
      if (typeof A.onComplete !== "function") throw new zG("invalid onComplete method");
    }
  }
  function nu3(A) {
    return !!(A && (m71.isDisturbed(A) || A[q0A]));
  }
  function ru3(A) {
    return !!(A && m71.isErrored(A));
  }
  function ou3(A) {
    return !!(A && m71.isReadable(A));
  }
  function au3(A) {
    return {
      localAddress: A.localAddress,
      localPort: A.localPort,
      remoteAddress: A.remoteAddress,
      remotePort: A.remotePort,
      remoteFamily: A.remoteFamily,
      timeout: A.timeout,
      bytesWritten: A.bytesWritten,
      bytesRead: A.bytesRead
    };
  }
  function su3(A) {
    let K;
    return new ReadableStream({
      async start() {
        K = A[Symbol.asyncIterator]();
      },
      async pull(q) {
        let {
          done: Y,
          value: z
        } = await K.next();
        if (Y) queueMicrotask(() => {
          q.close(), q.byobRequest?.respond(0);
        });else {
          let w = Buffer.isBuffer(z) ? z : Buffer.from(z);
          if (w.byteLength) q.enqueue(new Uint8Array(w));
        }
        return q.desiredSize > 0;
      },
      async cancel(q) {
        await K.return();
      },
      type: "bytes"
    });
  }
  function tu3(A) {
    return A && typeof A === "object" && typeof A.append === "function" && typeof A.delete === "function" && typeof A.get === "function" && typeof A.getAll === "function" && typeof A.has === "function" && typeof A.set === "function" && A[Symbol.toStringTag] === "FormData";
  }
  function eu3(A, K) {
    if ("addEventListener" in A) return A.addEventListener("abort", K, {
      once: !0
    }), () => A.removeEventListener("abort", K);
    return A.addListener("abort", K), () => A.removeListener("abort", K);
  }
  var AB3 = typeof String.prototype.toWellFormed === "function",
    KB3 = typeof String.prototype.isWellFormed === "function";
  function bK4(A) {
    return AB3 ? `${A}`.toWellFormed() : Cu3.toUSVString(A);
  }
  function qB3(A) {
    return KB3 ? `${A}`.isWellFormed() : bK4(A) === `${A}`;
  }
  function xK4(A) {
    switch (A) {
      case 34:
      case 40:
      case 41:
      case 44:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 123:
      case 125:
        return !1;
      default:
        return A >= 33 && A <= 126;
    }
  }
  function YB3(A) {
    if (A.length === 0) return !1;
    for (let K = 0; K < A.length; ++K) if (!xK4(A.charCodeAt(K))) return !1;
    return !0;
  }
  var zB3 = /[^\t\x20-\x7e\x80-\xff]/;
  function wB3(A) {
    return !zB3.test(A);
  }
  function HB3(A) {
    if (A == null || A === "") return {
      start: 0,
      end: null,
      size: null
    };
    let K = A ? A.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
    return K ? {
      start: parseInt(K[1]),
      end: K[2] ? parseInt(K[2]) : null,
      size: K[3] ? parseInt(K[3]) : null
    } : null;
  }
  function JB3(A, K, q) {
    return (A[z66] ??= []).push([K, q]), A.on(K, q), A;
  }
  function OB3(A) {
    for (let [K, q] of A[z66] ?? []) A.removeListener(K, q);
    A[z66] = null;
  }
  function XB3(A, K, q) {
    try {
      K.onError(q), qRA(K.aborted);
    } catch (Y) {
      A.emit("error", Y);
    }
  }
  var uK4 = Object.create(null);
  uK4.enumerable = !0;
  var H66 = {
      delete: "DELETE",
      DELETE: "DELETE",
      get: "GET",
      GET: "GET",
      head: "HEAD",
      HEAD: "HEAD",
      options: "OPTIONS",
      OPTIONS: "OPTIONS",
      post: "POST",
      POST: "POST",
      put: "PUT",
      PUT: "PUT"
    },
    BK4 = {
      ...H66,
      patch: "patch",
      PATCH: "PATCH"
    };
  Object.setPrototypeOf(H66, null);
  Object.setPrototypeOf(BK4, null);
  mK4.exports = {
    kEnumerableProperty: uK4,
    nop: bu3,
    isDisturbed: nu3,
    isErrored: ru3,
    isReadable: ou3,
    toUSVString: bK4,
    isUSVString: qB3,
    isBlobLike: kK4,
    parseOrigin: uu3,
    parseURL: LK4,
    getServerName: mu3,
    isStream: g71,
    isIterable: RK4,
    isAsyncIterable: Fu3,
    isDestroyed: IK4,
    headerNameToString: SK4,
    bufferToLowerCasedHeaderName: du3,
    addListener: JB3,
    removeAllListeners: OB3,
    errorRequest: XB3,
    parseRawHeaders: lu3,
    parseHeaders: cu3,
    parseKeepAliveTimeout: pu3,
    destroy: Qu3,
    bodyLength: yK4,
    deepClone: gu3,
    ReadableStreamFrom: su3,
    isBuffer: hK4,
    validateHandler: iu3,
    getSocketInfo: au3,
    isFormDataLike: tu3,
    buildURL: xu3,
    addAbortListener: eu3,
    isValidHTTPToken: YB3,
    isValidHeaderValue: wB3,
    isTokenCharCode: xK4,
    parseRangeHeader: HB3,
    normalizedMethodRecordsBase: H66,
    normalizedMethodRecords: BK4,
    isValidPort: CK4,
    isHttpOrHttpsPrefixed: B71,
    nodeMajor: Iu3,
    nodeMinor: Su3,
    safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"],
    wrapRequestBody: hu3
  };
});

// Register to shared state
__$.j9 = j9;
