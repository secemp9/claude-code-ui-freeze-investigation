// Module: XH6
// Dependencies: pi4, ok

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XH6 = v((ny, ei4) => {
  Object.defineProperty(ny, "__esModule", {
    value: !0
  });
  function __A(A) {
    return A && typeof A === "object" && "default" in A ? A.default : A;
  }
  var iy = __A(CA("stream")),
    ii4 = __A(CA("http")),
    gz1 = __A(CA("url")),
    ni4 = __A(__$.pi4()),
    Nr9 = __A(CA("https")),
    S7A = __A(CA("zlib")),
    Tr9 = iy.Readable,
    XU = Symbol("buffer"),
    AH6 = Symbol("type");
  class X_A {
    constructor() {
      this[AH6] = "";
      let A = arguments[0],
        K = arguments[1],
        q = [],
        Y = 0;
      if (A) {
        let w = A,
          H = Number(w.length);
        for (let J = 0; J < H; J++) {
          let O = w[J],
            X;
          if (O instanceof Buffer) X = O;else if (ArrayBuffer.isView(O)) X = Buffer.from(O.buffer, O.byteOffset, O.byteLength);else if (O instanceof ArrayBuffer) X = Buffer.from(O);else if (O instanceof X_A) X = O[XU];else X = Buffer.from(typeof O === "string" ? O : String(O));
          Y += X.length, q.push(X);
        }
      }
      this[XU] = Buffer.concat(q);
      let z = K && K.type !== void 0 && String(K.type).toLowerCase();
      if (z && !/[^\u0020-\u007E]/.test(z)) this[AH6] = z;
    }
    get size() {
      return this[XU].length;
    }
    get type() {
      return this[AH6];
    }
    text() {
      return Promise.resolve(this[XU].toString());
    }
    arrayBuffer() {
      let A = this[XU],
        K = A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
      return Promise.resolve(K);
    }
    stream() {
      let A = new Tr9();
      return A._read = function () {}, A.push(this[XU]), A.push(null), A;
    }
    toString() {
      return "[object Blob]";
    }
    slice() {
      let A = this.size,
        K = arguments[0],
        q = arguments[1],
        Y,
        z;
      if (K === void 0) Y = 0;else if (K < 0) Y = Math.max(A + K, 0);else Y = Math.min(K, A);
      if (q === void 0) z = A;else if (q < 0) z = Math.max(A + q, 0);else z = Math.min(q, A);
      let w = Math.max(z - Y, 0),
        J = this[XU].slice(Y, Y + w),
        O = new X_A([], {
          type: arguments[2]
        });
      return O[XU] = J, O;
    }
  }
  Object.defineProperties(X_A.prototype, {
    size: {
      enumerable: !0
    },
    type: {
      enumerable: !0
    },
    slice: {
      enumerable: !0
    }
  });
  Object.defineProperty(X_A.prototype, Symbol.toStringTag, {
    value: "Blob",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  function pZ(A, K, q) {
    if (Error.call(this, A), this.message = A, this.type = K, q) this.code = this.errno = q.code;
    Error.captureStackTrace(this, this.constructor);
  }
  pZ.prototype = Object.create(Error.prototype);
  pZ.prototype.constructor = pZ;
  pZ.prototype.name = "FetchError";
  var zH6;
  try {
    zH6 = (() => {
      throw new Error("Cannot require module " + "encoding");
    })().convert;
  } catch (A) {}
  var _U = Symbol("Body internals"),
    di4 = iy.PassThrough;
  function MG(A) {
    var K = this,
      q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      Y = q.size;
    let z = Y === void 0 ? 0 : Y;
    var w = q.timeout;
    let H = w === void 0 ? 0 : w;
    if (A == null) A = null;else if (ri4(A)) A = Buffer.from(A.toString());else if (zhA(A)) ;else if (Buffer.isBuffer(A)) ;else if (Object.prototype.toString.call(A) === "[object ArrayBuffer]") A = Buffer.from(A);else if (ArrayBuffer.isView(A)) A = Buffer.from(A.buffer, A.byteOffset, A.byteLength);else if (A instanceof iy) ;else A = Buffer.from(String(A));
    if (this[_U] = {
      body: A,
      disturbed: !1,
      error: null
    }, this.size = z, this.timeout = H, A instanceof iy) A.on("error", function (J) {
      let O = J.name === "AbortError" ? J : new pZ(`Invalid response body while trying to fetch ${K.url}: ${J.message}`, "system", J);
      K[_U].error = O;
    });
  }
  MG.prototype = {
    get body() {
      return this[_U].body;
    },
    get bodyUsed() {
      return this[_U].disturbed;
    },
    arrayBuffer() {
      return J_A.call(this).then(function (A) {
        return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
      });
    },
    blob() {
      let A = this.headers && this.headers.get("content-type") || "";
      return J_A.call(this).then(function (K) {
        return Object.assign(new X_A([], {
          type: A.toLowerCase()
        }), {
          [XU]: K
        });
      });
    },
    json() {
      var A = this;
      return J_A.call(this).then(function (K) {
        try {
          return JSON.parse(K.toString());
        } catch (q) {
          return MG.Promise.reject(new pZ(`invalid json response body at ${A.url} reason: ${q.message}`, "invalid-json"));
        }
      });
    },
    text() {
      return J_A.call(this).then(function (A) {
        return A.toString();
      });
    },
    buffer() {
      return J_A.call(this);
    },
    textConverted() {
      var A = this;
      return J_A.call(this).then(function (K) {
        return vr9(K, A.headers);
      });
    }
  };
  Object.defineProperties(MG.prototype, {
    body: {
      enumerable: !0
    },
    bodyUsed: {
      enumerable: !0
    },
    arrayBuffer: {
      enumerable: !0
    },
    blob: {
      enumerable: !0
    },
    json: {
      enumerable: !0
    },
    text: {
      enumerable: !0
    }
  });
  MG.mixIn = function (A) {
    for (let K of Object.getOwnPropertyNames(MG.prototype)) if (!(K in A)) {
      let q = Object.getOwnPropertyDescriptor(MG.prototype, K);
      Object.defineProperty(A, K, q);
    }
  };
  function J_A() {
    var A = this;
    if (this[_U].disturbed) return MG.Promise.reject(TypeError(`body used already for: ${this.url}`));
    if (this[_U].disturbed = !0, this[_U].error) return MG.Promise.reject(this[_U].error);
    let K = this.body;
    if (K === null) return MG.Promise.resolve(Buffer.alloc(0));
    if (zhA(K)) K = K.stream();
    if (Buffer.isBuffer(K)) return MG.Promise.resolve(K);
    if (!(K instanceof iy)) return MG.Promise.resolve(Buffer.alloc(0));
    let q = [],
      Y = 0,
      z = !1;
    return new MG.Promise(function (w, H) {
      let J;
      if (A.timeout) J = setTimeout(function () {
        z = !0, H(new pZ(`Response timeout while trying to fetch ${A.url} (over ${A.timeout}ms)`, "body-timeout"));
      }, A.timeout);
      K.on("error", function (O) {
        if (O.name === "AbortError") z = !0, H(O);else H(new pZ(`Invalid response body while trying to fetch ${A.url}: ${O.message}`, "system", O));
      }), K.on("data", function (O) {
        if (z || O === null) return;
        if (A.size && Y + O.length > A.size) {
          z = !0, H(new pZ(`content size at ${A.url} over limit: ${A.size}`, "max-size"));
          return;
        }
        Y += O.length, q.push(O);
      }), K.on("end", function () {
        if (z) return;
        clearTimeout(J);
        try {
          w(Buffer.concat(q, Y));
        } catch (O) {
          H(new pZ(`Could not create Buffer from response body for ${A.url}: ${O.message}`, "system", O));
        }
      });
    });
  }
  function vr9(A, K) {
    if (typeof zH6 !== "function") throw Error("The package `encoding` must be installed to use the textConverted() function");
    let q = K.get("content-type"),
      Y = "utf-8",
      z,
      w;
    if (q) z = /charset=([^;]*)/i.exec(q);
    if (w = A.slice(0, 1024).toString(), !z && w) z = /<meta.+?charset=(['"])(.+?)\1/i.exec(w);
    if (!z && w) {
      if (z = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(w), !z) {
        if (z = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(w), z) z.pop();
      }
      if (z) z = /charset=(.*)/i.exec(z.pop());
    }
    if (!z && w) z = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(w);
    if (z) {
      if (Y = z.pop(), Y === "gb2312" || Y === "gbk") Y = "gb18030";
    }
    return zH6(A, "UTF-8", Y).toString();
  }
  function ri4(A) {
    if (typeof A !== "object" || typeof A.append !== "function" || typeof A.delete !== "function" || typeof A.get !== "function" || typeof A.getAll !== "function" || typeof A.has !== "function" || typeof A.set !== "function") return !1;
    return A.constructor.name === "URLSearchParams" || Object.prototype.toString.call(A) === "[object URLSearchParams]" || typeof A.sort === "function";
  }
  function zhA(A) {
    return typeof A === "object" && typeof A.arrayBuffer === "function" && typeof A.type === "string" && typeof A.stream === "function" && typeof A.constructor === "function" && typeof A.constructor.name === "string" && /^(Blob|File)$/.test(A.constructor.name) && /^(Blob|File)$/.test(A[Symbol.toStringTag]);
  }
  function oi4(A) {
    let K,
      q,
      Y = A.body;
    if (A.bodyUsed) throw Error("cannot clone body after it is used");
    if (Y instanceof iy && typeof Y.getBoundary !== "function") K = new di4(), q = new di4(), Y.pipe(K), Y.pipe(q), A[_U].body = K, Y = q;
    return Y;
  }
  function ai4(A) {
    if (A === null) return null;else if (typeof A === "string") return "text/plain;charset=UTF-8";else if (ri4(A)) return "application/x-www-form-urlencoded;charset=UTF-8";else if (zhA(A)) return A.type || null;else if (Buffer.isBuffer(A)) return null;else if (Object.prototype.toString.call(A) === "[object ArrayBuffer]") return null;else if (ArrayBuffer.isView(A)) return null;else if (typeof A.getBoundary === "function") return `multipart/form-data;boundary=${A.getBoundary()}`;else if (A instanceof iy) return null;else return "text/plain;charset=UTF-8";
  }
  function si4(A) {
    let K = A.body;
    if (K === null) return 0;else if (zhA(K)) return K.size;else if (Buffer.isBuffer(K)) return K.length;else if (K && typeof K.getLengthSync === "function") {
      if (K._lengthRetrievers && K._lengthRetrievers.length == 0 || K.hasKnownLength && K.hasKnownLength()) return K.getLengthSync();
      return null;
    } else return null;
  }
  function Er9(A, K) {
    let q = K.body;
    if (q === null) A.end();else if (zhA(q)) q.stream().pipe(A);else if (Buffer.isBuffer(q)) A.write(q), A.end();else q.pipe(A);
  }
  MG.Promise = global.Promise;
  var ti4 = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
    wH6 = /[^\t\x20-\x7e\x80-\xff]/;
  function qhA(A) {
    if (A = `${A}`, ti4.test(A) || A === "") throw TypeError(`${A} is not a legal HTTP header name`);
  }
  function ci4(A) {
    if (A = `${A}`, wH6.test(A)) throw TypeError(`${A} is not a legal HTTP header value`);
  }
  function O_A(A, K) {
    K = K.toLowerCase();
    for (let q in A) if (q.toLowerCase() === K) return q;
    return;
  }
  var qX = Symbol("map");
  class OC {
    constructor() {
      let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      if (this[qX] = Object.create(null), A instanceof OC) {
        let K = A.raw(),
          q = Object.keys(K);
        for (let Y of q) for (let z of K[Y]) this.append(Y, z);
        return;
      }
      if (A == null) ;else if (typeof A === "object") {
        let K = A[Symbol.iterator];
        if (K != null) {
          if (typeof K !== "function") throw TypeError("Header pairs must be iterable");
          let q = [];
          for (let Y of A) {
            if (typeof Y !== "object" || typeof Y[Symbol.iterator] !== "function") throw TypeError("Each header pair must be iterable");
            q.push(Array.from(Y));
          }
          for (let Y of q) {
            if (Y.length !== 2) throw TypeError("Each header pair must be a name/value tuple");
            this.append(Y[0], Y[1]);
          }
        } else for (let q of Object.keys(A)) {
          let Y = A[q];
          this.append(q, Y);
        }
      } else throw TypeError("Provided initializer must be an object");
    }
    get(A) {
      A = `${A}`, qhA(A);
      let K = O_A(this[qX], A);
      if (K === void 0) return null;
      return this[qX][K].join(", ");
    }
    forEach(A) {
      let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
        q = HH6(this),
        Y = 0;
      while (Y < q.length) {
        var z = q[Y];
        let w = z[0],
          H = z[1];
        A.call(K, H, w, this), q = HH6(this), Y++;
      }
    }
    set(A, K) {
      A = `${A}`, K = `${K}`, qhA(A), ci4(K);
      let q = O_A(this[qX], A);
      this[qX][q !== void 0 ? q : A] = [K];
    }
    append(A, K) {
      A = `${A}`, K = `${K}`, qhA(A), ci4(K);
      let q = O_A(this[qX], A);
      if (q !== void 0) this[qX][q].push(K);else this[qX][A] = [K];
    }
    has(A) {
      return A = `${A}`, qhA(A), O_A(this[qX], A) !== void 0;
    }
    delete(A) {
      A = `${A}`, qhA(A);
      let K = O_A(this[qX], A);
      if (K !== void 0) delete this[qX][K];
    }
    raw() {
      return this[qX];
    }
    keys() {
      return KH6(this, "key");
    }
    values() {
      return KH6(this, "value");
    }
    [Symbol.iterator]() {
      return KH6(this, "key+value");
    }
  }
  OC.prototype.entries = OC.prototype[Symbol.iterator];
  Object.defineProperty(OC.prototype, Symbol.toStringTag, {
    value: "Headers",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperties(OC.prototype, {
    get: {
      enumerable: !0
    },
    forEach: {
      enumerable: !0
    },
    set: {
      enumerable: !0
    },
    append: {
      enumerable: !0
    },
    has: {
      enumerable: !0
    },
    delete: {
      enumerable: !0
    },
    keys: {
      enumerable: !0
    },
    values: {
      enumerable: !0
    },
    entries: {
      enumerable: !0
    }
  });
  function HH6(A) {
    let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
    return Object.keys(A[qX]).sort().map(K === "key" ? function (Y) {
      return Y.toLowerCase();
    } : K === "value" ? function (Y) {
      return A[qX][Y].join(", ");
    } : function (Y) {
      return [Y.toLowerCase(), A[qX][Y].join(", ")];
    });
  }
  var JH6 = Symbol("internal");
  function KH6(A, K) {
    let q = Object.create(OH6);
    return q[JH6] = {
      target: A,
      kind: K,
      index: 0
    }, q;
  }
  var OH6 = Object.setPrototypeOf({
    next() {
      if (!this || Object.getPrototypeOf(this) !== OH6) throw TypeError("Value of `this` is not a HeadersIterator");
      var A = this[JH6];
      let {
          target: K,
          kind: q,
          index: Y
        } = A,
        z = HH6(K, q),
        w = z.length;
      if (Y >= w) return {
        value: void 0,
        done: !0
      };
      return this[JH6].index = Y + 1, {
        value: z[Y],
        done: !1
      };
    }
  }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
  Object.defineProperty(OH6, Symbol.toStringTag, {
    value: "HeadersIterator",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  function kr9(A) {
    let K = Object.assign({
        __proto__: null
      }, A[qX]),
      q = O_A(A[qX], "Host");
    if (q !== void 0) K[q] = K[q][0];
    return K;
  }
  function Cr9(A) {
    let K = new OC();
    for (let q of Object.keys(A)) {
      if (ti4.test(q)) continue;
      if (Array.isArray(A[q])) for (let Y of A[q]) {
        if (wH6.test(Y)) continue;
        if (K[qX][q] === void 0) K[qX][q] = [Y];else K[qX][q].push(Y);
      } else if (!wH6.test(A[q])) K[qX][q] = [A[q]];
    }
    return K;
  }
  var Ho = Symbol("Response internals"),
    Lr9 = ii4.STATUS_CODES;
  class JC {
    constructor() {
      let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
        K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      MG.call(this, A, K);
      let q = K.status || 200,
        Y = new OC(K.headers);
      if (A != null && !Y.has("Content-Type")) {
        let z = ai4(A);
        if (z) Y.append("Content-Type", z);
      }
      this[Ho] = {
        url: K.url,
        status: q,
        statusText: K.statusText || Lr9[q],
        headers: Y,
        counter: K.counter
      };
    }
    get url() {
      return this[Ho].url || "";
    }
    get status() {
      return this[Ho].status;
    }
    get ok() {
      return this[Ho].status >= 200 && this[Ho].status < 300;
    }
    get redirected() {
      return this[Ho].counter > 0;
    }
    get statusText() {
      return this[Ho].statusText;
    }
    get headers() {
      return this[Ho].headers;
    }
    clone() {
      return new JC(oi4(this), {
        url: this.url,
        status: this.status,
        statusText: this.statusText,
        headers: this.headers,
        ok: this.ok,
        redirected: this.redirected
      });
    }
  }
  MG.mixIn(JC.prototype);
  Object.defineProperties(JC.prototype, {
    url: {
      enumerable: !0
    },
    status: {
      enumerable: !0
    },
    ok: {
      enumerable: !0
    },
    redirected: {
      enumerable: !0
    },
    statusText: {
      enumerable: !0
    },
    headers: {
      enumerable: !0
    },
    clone: {
      enumerable: !0
    }
  });
  Object.defineProperty(JC.prototype, Symbol.toStringTag, {
    value: "Response",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  var $U = Symbol("Request internals"),
    Rr9 = gz1.URL || ni4.URL,
    yr9 = gz1.parse,
    Ir9 = gz1.format;
  function qH6(A) {
    if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(A)) A = new Rr9(A).toString();
    return yr9(A);
  }
  var Sr9 = "destroy" in iy.Readable.prototype;
  function mz1(A) {
    return typeof A === "object" && typeof A[$U] === "object";
  }
  function hr9(A) {
    let K = A && typeof A === "object" && Object.getPrototypeOf(A);
    return !!(K && K.constructor.name === "AbortSignal");
  }
  class Oo {
    constructor(A) {
      let K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        q;
      if (!mz1(A)) {
        if (A && A.href) q = qH6(A.href);else q = qH6(`${A}`);
        A = {};
      } else q = qH6(A.url);
      let Y = K.method || A.method || "GET";
      if (Y = Y.toUpperCase(), (K.body != null || mz1(A) && A.body !== null) && (Y === "GET" || Y === "HEAD")) throw TypeError("Request with GET/HEAD method cannot have body");
      let z = K.body != null ? K.body : mz1(A) && A.body !== null ? oi4(A) : null;
      MG.call(this, z, {
        timeout: K.timeout || A.timeout || 0,
        size: K.size || A.size || 0
      });
      let w = new OC(K.headers || A.headers || {});
      if (z != null && !w.has("Content-Type")) {
        let J = ai4(z);
        if (J) w.append("Content-Type", J);
      }
      let H = mz1(A) ? A.signal : null;
      if ("signal" in K) H = K.signal;
      if (H != null && !hr9(H)) throw TypeError("Expected signal to be an instanceof AbortSignal");
      this[$U] = {
        method: Y,
        redirect: K.redirect || A.redirect || "follow",
        headers: w,
        parsedURL: q,
        signal: H
      }, this.follow = K.follow !== void 0 ? K.follow : A.follow !== void 0 ? A.follow : 20, this.compress = K.compress !== void 0 ? K.compress : A.compress !== void 0 ? A.compress : !0, this.counter = K.counter || A.counter || 0, this.agent = K.agent || A.agent;
    }
    get method() {
      return this[$U].method;
    }
    get url() {
      return Ir9(this[$U].parsedURL);
    }
    get headers() {
      return this[$U].headers;
    }
    get redirect() {
      return this[$U].redirect;
    }
    get signal() {
      return this[$U].signal;
    }
    clone() {
      return new Oo(this);
    }
  }
  MG.mixIn(Oo.prototype);
  Object.defineProperty(Oo.prototype, Symbol.toStringTag, {
    value: "Request",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperties(Oo.prototype, {
    method: {
      enumerable: !0
    },
    url: {
      enumerable: !0
    },
    headers: {
      enumerable: !0
    },
    redirect: {
      enumerable: !0
    },
    clone: {
      enumerable: !0
    },
    signal: {
      enumerable: !0
    }
  });
  function br9(A) {
    let K = A[$U].parsedURL,
      q = new OC(A[$U].headers);
    if (!q.has("Accept")) q.set("Accept", "*/*");
    if (!K.protocol || !K.hostname) throw TypeError("Only absolute URLs are supported");
    if (!/^https?:$/.test(K.protocol)) throw TypeError("Only HTTP(S) protocols are supported");
    if (A.signal && A.body instanceof iy.Readable && !Sr9) throw Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
    let Y = null;
    if (A.body == null && /^(POST|PUT)$/i.test(A.method)) Y = "0";
    if (A.body != null) {
      let w = si4(A);
      if (typeof w === "number") Y = String(w);
    }
    if (Y) q.set("Content-Length", Y);
    if (!q.has("User-Agent")) q.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
    if (A.compress && !q.has("Accept-Encoding")) q.set("Accept-Encoding", "gzip,deflate");
    let z = A.agent;
    if (typeof z === "function") z = z(K);
    return Object.assign({}, K, {
      method: A.method,
      headers: kr9(q),
      agent: z
    });
  }
  function $_A(A) {
    Error.call(this, A), this.type = "aborted", this.message = A, Error.captureStackTrace(this, this.constructor);
  }
  $_A.prototype = Object.create(Error.prototype);
  $_A.prototype.constructor = $_A;
  $_A.prototype.name = "AbortError";
  var YhA = gz1.URL || ni4.URL,
    li4 = iy.PassThrough,
    xr9 = function (K, q) {
      let Y = new YhA(q).hostname,
        z = new YhA(K).hostname;
      return Y === z || Y[Y.length - z.length - 1] === "." && Y.endsWith(z);
    },
    ur9 = function (K, q) {
      let Y = new YhA(q).protocol,
        z = new YhA(K).protocol;
      return Y === z;
    };
  function Jo(A, K) {
    if (!Jo.Promise) throw Error("native promise missing, set fetch.Promise to your favorite alternative");
    return MG.Promise = Jo.Promise, new Jo.Promise(function (q, Y) {
      let z = new Oo(A, K),
        w = br9(z),
        H = (w.protocol === "https:" ? Nr9 : ii4).request,
        J = z.signal,
        O = null,
        X = function () {
          let D = new $_A("The user aborted a request.");
          if (Y(D), z.body && z.body instanceof iy.Readable) YH6(z.body, D);
          if (!O || !O.body) return;
          O.body.emit("error", D);
        };
      if (J && J.aborted) {
        X();
        return;
      }
      let $ = function () {
          X(), Z();
        },
        _ = H(w),
        G;
      if (J) J.addEventListener("abort", $);
      function Z() {
        if (_.abort(), J) J.removeEventListener("abort", $);
        clearTimeout(G);
      }
      if (z.timeout) _.once("socket", function (W) {
        G = setTimeout(function () {
          Y(new pZ(`network timeout at: ${z.url}`, "request-timeout")), Z();
        }, z.timeout);
      });
      if (_.on("error", function (W) {
        if (Y(new pZ(`request to ${z.url} failed, reason: ${W.message}`, "system", W)), O && O.body) YH6(O.body, W);
        Z();
      }), Br9(_, function (W) {
        if (J && J.aborted) return;
        if (O && O.body) YH6(O.body, W);
      }), parseInt(process.version.substring(1)) < 14) _.on("socket", function (W) {
        W.addListener("close", function (D) {
          let j = W.listenerCount("data") > 0;
          if (O && j && !D && !(J && J.aborted)) {
            let M = Error("Premature close");
            M.code = "ERR_STREAM_PREMATURE_CLOSE", O.body.emit("error", M);
          }
        });
      });
      _.on("response", function (W) {
        clearTimeout(G);
        let D = Cr9(W.headers);
        if (Jo.isRedirect(W.statusCode)) {
          let N = D.get("Location"),
            T = null;
          try {
            T = N === null ? null : new YhA(N, z.url).toString();
          } catch (C) {
            if (z.redirect !== "manual") {
              Y(new pZ(`uri requested responds with an invalid redirect URL: ${N}`, "invalid-redirect")), Z();
              return;
            }
          }
          switch (z.redirect) {
            case "error":
              Y(new pZ(`uri requested responds with a redirect, redirect mode is set to error: ${z.url}`, "no-redirect")), Z();
              return;
            case "manual":
              if (T !== null) try {
                D.set("Location", T);
              } catch (R) {
                Y(R);
              }
              break;
            case "follow":
              if (T === null) break;
              if (z.counter >= z.follow) {
                Y(new pZ(`maximum redirect reached at: ${z.url}`, "max-redirect")), Z();
                return;
              }
              let C = {
                headers: new OC(z.headers),
                follow: z.follow,
                counter: z.counter + 1,
                agent: z.agent,
                compress: z.compress,
                method: z.method,
                body: z.body,
                signal: z.signal,
                timeout: z.timeout,
                size: z.size
              };
              if (!xr9(z.url, T) || !ur9(z.url, T)) for (let R of ["authorization", "www-authenticate", "cookie", "cookie2"]) C.headers.delete(R);
              if (W.statusCode !== 303 && z.body && si4(z) === null) {
                Y(new pZ("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), Z();
                return;
              }
              if (W.statusCode === 303 || (W.statusCode === 301 || W.statusCode === 302) && z.method === "POST") C.method = "GET", C.body = void 0, C.headers.delete("content-length");
              q(Jo(new Oo(T, C))), Z();
              return;
          }
        }
        W.once("end", function () {
          if (J) J.removeEventListener("abort", $);
        });
        let j = W.pipe(new li4()),
          M = {
            url: z.url,
            status: W.statusCode,
            statusText: W.statusMessage,
            headers: D,
            size: z.size,
            timeout: z.timeout,
            counter: z.counter
          },
          P = D.get("Content-Encoding");
        if (!z.compress || z.method === "HEAD" || P === null || W.statusCode === 204 || W.statusCode === 304) {
          O = new JC(j, M), q(O);
          return;
        }
        let f = {
          flush: S7A.Z_SYNC_FLUSH,
          finishFlush: S7A.Z_SYNC_FLUSH
        };
        if (P == "gzip" || P == "x-gzip") {
          j = j.pipe(S7A.createGunzip(f)), O = new JC(j, M), q(O);
          return;
        }
        if (P == "deflate" || P == "x-deflate") {
          let N = W.pipe(new li4());
          N.once("data", function (T) {
            if ((T[0] & 15) === 8) j = j.pipe(S7A.createInflate());else j = j.pipe(S7A.createInflateRaw());
            O = new JC(j, M), q(O);
          }), N.on("end", function () {
            if (!O) O = new JC(j, M), q(O);
          });
          return;
        }
        if (P == "br" && typeof S7A.createBrotliDecompress === "function") {
          j = j.pipe(S7A.createBrotliDecompress()), O = new JC(j, M), q(O);
          return;
        }
        O = new JC(j, M), q(O);
      }), Er9(_, z);
    });
  }
  function Br9(A, K) {
    let q;
    A.on("socket", function (Y) {
      q = Y;
    }), A.on("response", function (Y) {
      let z = Y.headers;
      if (z["transfer-encoding"] === "chunked" && !z["content-length"]) Y.once("close", function (w) {
        if (q && q.listenerCount("data") > 0 && !w) {
          let J = Error("Premature close");
          J.code = "ERR_STREAM_PREMATURE_CLOSE", K(J);
        }
      });
    });
  }
  function YH6(A, K) {
    if (A.destroy) A.destroy(K);else A.emit("error", K), A.end();
  }
  Jo.isRedirect = function (A) {
    return A === 301 || A === 302 || A === 303 || A === 307 || A === 308;
  };
  Jo.Promise = global.Promise;
  ei4.exports = ny = Jo;
  Object.defineProperty(ny, "__esModule", {
    value: !0
  });
  ny.default = ny;
  ny.Headers = OC;
  ny.Request = Oo;
  ny.Response = JC;
  ny.FetchError = pZ;
  ny.AbortError = $_A;
});

// Register to shared state
__$.XH6 = XH6;
