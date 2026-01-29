// Module: d8A
// Dependencies: MJ, j9, ZT, SZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d8A = v((t6w, G24) => {
  var {
      kConstruct: Yc3
    } = __$.MJ(),
    {
      kEnumerableProperty: b0A
    } = __$.j9(),
    {
      iteratorMixin: zc3,
      isValidHeaderName: gRA,
      isValidHeaderValue: J24
    } = __$.ZT(),
    {
      webidl: ZY
    } = __$.SZ(),
    i86 = CA("node:assert"),
    bK1 = CA("node:util"),
    oX = Symbol("headers map"),
    jT = Symbol("headers map sorted");
  function H24(A) {
    return A === 10 || A === 13 || A === 9 || A === 32;
  }
  function O24(A) {
    let K = 0,
      q = A.length;
    while (q > K && H24(A.charCodeAt(q - 1))) --q;
    while (q > K && H24(A.charCodeAt(K))) ++K;
    return K === 0 && q === A.length ? A : A.substring(K, q);
  }
  function X24(A, K) {
    if (Array.isArray(K)) for (let q = 0; q < K.length; ++q) {
      let Y = K[q];
      if (Y.length !== 2) throw ZY.errors.exception({
        header: "Headers constructor",
        message: `expected name/value pair to be length 2, found ${Y.length}.`
      });
      n86(A, Y[0], Y[1]);
    } else if (typeof K === "object" && K !== null) {
      let q = Object.keys(K);
      for (let Y = 0; Y < q.length; ++Y) n86(A, q[Y], K[q[Y]]);
    } else throw ZY.errors.conversionFailed({
      prefix: "Headers constructor",
      argument: "Argument 1",
      types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
    });
  }
  function n86(A, K, q) {
    if (q = O24(q), !gRA(K)) throw ZY.errors.invalidArgument({
      prefix: "Headers.append",
      value: K,
      type: "header name"
    });else if (!J24(q)) throw ZY.errors.invalidArgument({
      prefix: "Headers.append",
      value: q,
      type: "header value"
    });
    if (_24(A) === "immutable") throw TypeError("immutable");
    return r86(A).append(K, q, !1);
  }
  function $24(A, K) {
    return A[0] < K[0] ? -1 : 1;
  }
  class xK1 {
    cookies = null;
    constructor(A) {
      if (A instanceof xK1) this[oX] = new Map(A[oX]), this[jT] = A[jT], this.cookies = A.cookies === null ? null : [...A.cookies];else this[oX] = new Map(A), this[jT] = null;
    }
    contains(A, K) {
      return this[oX].has(K ? A : A.toLowerCase());
    }
    clear() {
      this[oX].clear(), this[jT] = null, this.cookies = null;
    }
    append(A, K, q) {
      this[jT] = null;
      let Y = q ? A : A.toLowerCase(),
        z = this[oX].get(Y);
      if (z) {
        let w = Y === "cookie" ? "; " : ", ";
        this[oX].set(Y, {
          name: z.name,
          value: `${z.value}${w}${K}`
        });
      } else this[oX].set(Y, {
        name: A,
        value: K
      });
      if (Y === "set-cookie") (this.cookies ??= []).push(K);
    }
    set(A, K, q) {
      this[jT] = null;
      let Y = q ? A : A.toLowerCase();
      if (Y === "set-cookie") this.cookies = [K];
      this[oX].set(Y, {
        name: A,
        value: K
      });
    }
    delete(A, K) {
      if (this[jT] = null, !K) A = A.toLowerCase();
      if (A === "set-cookie") this.cookies = null;
      this[oX].delete(A);
    }
    get(A, K) {
      return this[oX].get(K ? A : A.toLowerCase())?.value ?? null;
    }
    *[Symbol.iterator]() {
      for (let {
        0: A,
        1: {
          value: K
        }
      } of this[oX]) yield [A, K];
    }
    get entries() {
      let A = {};
      if (this[oX].size !== 0) for (let {
        name: K,
        value: q
      } of this[oX].values()) A[K] = q;
      return A;
    }
    rawValues() {
      return this[oX].values();
    }
    get entriesList() {
      let A = [];
      if (this[oX].size !== 0) for (let {
        0: K,
        1: {
          name: q,
          value: Y
        }
      } of this[oX]) if (K === "set-cookie") for (let z of this.cookies) A.push([q, z]);else A.push([q, Y]);
      return A;
    }
    toSortedArray() {
      let A = this[oX].size,
        K = Array(A);
      if (A <= 32) {
        if (A === 0) return K;
        let q = this[oX][Symbol.iterator](),
          Y = q.next().value;
        K[0] = [Y[0], Y[1].value], i86(Y[1].value !== null);
        for (let z = 1, w = 0, H = 0, J = 0, O = 0, X, $; z < A; ++z) {
          $ = q.next().value, X = K[z] = [$[0], $[1].value], i86(X[1] !== null), J = 0, H = z;
          while (J < H) if (O = J + (H - J >> 1), K[O][0] <= X[0]) J = O + 1;else H = O;
          if (z !== O) {
            w = z;
            while (w > J) K[w] = K[--w];
            K[J] = X;
          }
        }
        if (!q.next().done) throw TypeError("Unreachable");
        return K;
      } else {
        let q = 0;
        for (let {
          0: Y,
          1: {
            value: z
          }
        } of this[oX]) K[q++] = [Y, z], i86(z !== null);
        return K.sort($24);
      }
    }
  }
  class ED {
    #A;
    #K;
    constructor(A = void 0) {
      if (ZY.util.markAsUncloneable(this), A === Yc3) return;
      if (this.#K = new xK1(), this.#A = "none", A !== void 0) A = ZY.converters.HeadersInit(A, "Headers contructor", "init"), X24(this, A);
    }
    append(A, K) {
      ZY.brandCheck(this, ED), ZY.argumentLengthCheck(arguments, 2, "Headers.append");
      let q = "Headers.append";
      return A = ZY.converters.ByteString(A, q, "name"), K = ZY.converters.ByteString(K, q, "value"), n86(this, A, K);
    }
    delete(A) {
      ZY.brandCheck(this, ED), ZY.argumentLengthCheck(arguments, 1, "Headers.delete");
      let K = "Headers.delete";
      if (A = ZY.converters.ByteString(A, K, "name"), !gRA(A)) throw ZY.errors.invalidArgument({
        prefix: "Headers.delete",
        value: A,
        type: "header name"
      });
      if (this.#A === "immutable") throw TypeError("immutable");
      if (!this.#K.contains(A, !1)) return;
      this.#K.delete(A, !1);
    }
    get(A) {
      ZY.brandCheck(this, ED), ZY.argumentLengthCheck(arguments, 1, "Headers.get");
      let K = "Headers.get";
      if (A = ZY.converters.ByteString(A, K, "name"), !gRA(A)) throw ZY.errors.invalidArgument({
        prefix: K,
        value: A,
        type: "header name"
      });
      return this.#K.get(A, !1);
    }
    has(A) {
      ZY.brandCheck(this, ED), ZY.argumentLengthCheck(arguments, 1, "Headers.has");
      let K = "Headers.has";
      if (A = ZY.converters.ByteString(A, K, "name"), !gRA(A)) throw ZY.errors.invalidArgument({
        prefix: K,
        value: A,
        type: "header name"
      });
      return this.#K.contains(A, !1);
    }
    set(A, K) {
      ZY.brandCheck(this, ED), ZY.argumentLengthCheck(arguments, 2, "Headers.set");
      let q = "Headers.set";
      if (A = ZY.converters.ByteString(A, q, "name"), K = ZY.converters.ByteString(K, q, "value"), K = O24(K), !gRA(A)) throw ZY.errors.invalidArgument({
        prefix: q,
        value: A,
        type: "header name"
      });else if (!J24(K)) throw ZY.errors.invalidArgument({
        prefix: q,
        value: K,
        type: "header value"
      });
      if (this.#A === "immutable") throw TypeError("immutable");
      this.#K.set(A, K, !1);
    }
    getSetCookie() {
      ZY.brandCheck(this, ED);
      let A = this.#K.cookies;
      if (A) return [...A];
      return [];
    }
    get [jT]() {
      if (this.#K[jT]) return this.#K[jT];
      let A = [],
        K = this.#K.toSortedArray(),
        q = this.#K.cookies;
      if (q === null || q.length === 1) return this.#K[jT] = K;
      for (let Y = 0; Y < K.length; ++Y) {
        let {
          0: z,
          1: w
        } = K[Y];
        if (z === "set-cookie") for (let H = 0; H < q.length; ++H) A.push([z, q[H]]);else A.push([z, w]);
      }
      return this.#K[jT] = A;
    }
    [bK1.inspect.custom](A, K) {
      return K.depth ??= A, `Headers ${bK1.formatWithOptions(K, this.#K.entries)}`;
    }
    static getHeadersGuard(A) {
      return A.#A;
    }
    static setHeadersGuard(A, K) {
      A.#A = K;
    }
    static getHeadersList(A) {
      return A.#K;
    }
    static setHeadersList(A, K) {
      A.#K = K;
    }
  }
  var {
    getHeadersGuard: _24,
    setHeadersGuard: wc3,
    getHeadersList: r86,
    setHeadersList: Hc3
  } = ED;
  Reflect.deleteProperty(ED, "getHeadersGuard");
  Reflect.deleteProperty(ED, "setHeadersGuard");
  Reflect.deleteProperty(ED, "getHeadersList");
  Reflect.deleteProperty(ED, "setHeadersList");
  zc3("Headers", ED, jT, 0, 1);
  Object.defineProperties(ED.prototype, {
    append: b0A,
    delete: b0A,
    get: b0A,
    has: b0A,
    set: b0A,
    getSetCookie: b0A,
    [Symbol.toStringTag]: {
      value: "Headers",
      configurable: !0
    },
    [bK1.inspect.custom]: {
      enumerable: !1
    }
  });
  ZY.converters.HeadersInit = function (A, K, q) {
    if (ZY.util.Type(A) === "Object") {
      let Y = Reflect.get(A, Symbol.iterator);
      if (!bK1.types.isProxy(A) && Y === ED.prototype.entries) try {
        return r86(A).entriesList;
      } catch {}
      if (typeof Y === "function") return ZY.converters["sequence<sequence<ByteString>>"](A, K, q, Y.bind(A));
      return ZY.converters["record<ByteString, ByteString>"](A, K, q);
    }
    throw ZY.errors.conversionFailed({
      prefix: "Headers constructor",
      argument: "Argument 1",
      types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
    });
  };
  G24.exports = {
    fill: X24,
    compareHeaderName: $24,
    Headers: ED,
    HeadersList: xK1,
    getHeadersGuard: _24,
    setHeadersGuard: wc3,
    setHeadersList: Hc3,
    getHeadersList: r86
  };
});

// Register to shared state
__$.d8A = d8A;
