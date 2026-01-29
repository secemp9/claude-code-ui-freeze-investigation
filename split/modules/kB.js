// Module: kB
// Dependencies: pv6, Um7, dm7, am7, lv6, Ag7, qg7, zg7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kB = v(nv6 => {
  var yK = nv6;
  yK.asPromise = __$.pv6();
  yK.base64 = __$.Um7();
  yK.EventEmitter = __$.dm7();
  yK.float = __$.am7();
  yK.inquire = __$.lv6();
  yK.utf8 = __$.Ag7();
  yK.pool = __$.qg7();
  yK.LongBits = __$.zg7();
  yK.isNode = Boolean(typeof global < "u" && global && global.process && global.process.versions && global.process.versions.node);
  yK.global = yK.isNode && global || typeof window < "u" && window || typeof self < "u" && self || nv6;
  yK.emptyArray = Object.freeze ? Object.freeze([]) : [];
  yK.emptyObject = Object.freeze ? Object.freeze({}) : {};
  yK.isInteger = Number.isInteger || function (K) {
    return typeof K === "number" && isFinite(K) && Math.floor(K) === K;
  };
  yK.isString = function (K) {
    return typeof K === "string" || K instanceof String;
  };
  yK.isObject = function (K) {
    return K && typeof K === "object";
  };
  yK.isset = yK.isSet = function (K, q) {
    var Y = K[q];
    if (Y != null && K.hasOwnProperty(q)) return typeof Y !== "object" || (Array.isArray(Y) ? Y.length : Object.keys(Y).length) > 0;
    return !1;
  };
  yK.Buffer = function () {
    try {
      var A = yK.inquire("buffer").Buffer;
      return A.prototype.utf8Write ? A : null;
    } catch (K) {
      return null;
    }
  }();
  yK._Buffer_from = null;
  yK._Buffer_allocUnsafe = null;
  yK.newBuffer = function (K) {
    return typeof K === "number" ? yK.Buffer ? yK._Buffer_allocUnsafe(K) : new yK.Array(K) : yK.Buffer ? yK._Buffer_from(K) : typeof Uint8Array > "u" ? K : new Uint8Array(K);
  };
  yK.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
  yK.Long = yK.global.dcodeIO && yK.global.dcodeIO.Long || yK.global.Long || yK.inquire("long");
  yK.key2Re = /^true|false|0|1$/;
  yK.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  yK.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  yK.longToHash = function (K) {
    return K ? yK.LongBits.from(K).toHash() : yK.LongBits.zeroHash;
  };
  yK.longFromHash = function (K, q) {
    var Y = yK.LongBits.fromHash(K);
    if (yK.Long) return yK.Long.fromBits(Y.lo, Y.hi, q);
    return Y.toNumber(Boolean(q));
  };
  function wg7(A, K, q) {
    for (var Y = Object.keys(K), z = 0; z < Y.length; ++z) if (A[Y[z]] === void 0 || !q) A[Y[z]] = K[Y[z]];
    return A;
  }
  yK.merge = wg7;
  yK.lcFirst = function (K) {
    return K.charAt(0).toLowerCase() + K.substring(1);
  };
  function Hg7(A) {
    function K(q, Y) {
      if (!(this instanceof K)) return new K(q, Y);
      if (Object.defineProperty(this, "message", {
        get: function () {
          return q;
        }
      }), Error.captureStackTrace) Error.captureStackTrace(this, K);else Object.defineProperty(this, "stack", {
        value: Error().stack || ""
      });
      if (Y) wg7(this, Y);
    }
    return K.prototype = Object.create(Error.prototype, {
      constructor: {
        value: K,
        writable: !0,
        enumerable: !1,
        configurable: !0
      },
      name: {
        get: function () {
          return A;
        },
        set: void 0,
        enumerable: !1,
        configurable: !0
      },
      toString: {
        value: function () {
          return this.name + ": " + this.message;
        },
        writable: !0,
        enumerable: !1,
        configurable: !0
      }
    }), K;
  }
  yK.newError = Hg7;
  yK.ProtocolError = Hg7("ProtocolError");
  yK.oneOfGetter = function (K) {
    var q = {};
    for (var Y = 0; Y < K.length; ++Y) q[K[Y]] = 1;
    return function () {
      for (var z = Object.keys(this), w = z.length - 1; w > -1; --w) if (q[z[w]] === 1 && this[z[w]] !== void 0 && this[z[w]] !== null) return z[w];
    };
  };
  yK.oneOfSetter = function (K) {
    return function (q) {
      for (var Y = 0; Y < K.length; ++Y) if (K[Y] !== q) delete this[K[Y]];
    };
  };
  yK.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: !0
  };
  yK._configure = function () {
    var A = yK.Buffer;
    if (!A) {
      yK._Buffer_from = yK._Buffer_allocUnsafe = null;
      return;
    }
    yK._Buffer_from = A.from !== Uint8Array.from && A.from || function (q, Y) {
      return new A(q, Y);
    }, yK._Buffer_allocUnsafe = A.allocUnsafe || function (q) {
      return new A(q);
    };
  };
});

// Register to shared state
__$.kB = kB;
