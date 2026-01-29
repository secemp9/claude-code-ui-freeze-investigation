// Module: ox
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ox = v((Jjw, Bh4) => {
  var uh4 = function (A) {
      return typeof A < "u" && A !== null;
    },
    Jv9 = function (A) {
      return typeof A === "object";
    },
    Ov9 = function (A) {
      return Object.prototype.toString.call(A) === "[object Object]";
    },
    Xv9 = function (A) {
      return typeof A === "function";
    },
    $v9 = function (A) {
      return typeof A === "boolean";
    },
    _v9 = function (A) {
      return A instanceof Buffer;
    },
    Gv9 = function (A) {
      if (uh4(A)) switch (A.constructor) {
        case Uint8Array:
        case Uint8ClampedArray:
        case Int8Array:
        case Uint16Array:
        case Int16Array:
        case Uint32Array:
        case Int32Array:
        case Float32Array:
        case Float64Array:
          return !0;
      }
      return !1;
    },
    Zv9 = function (A) {
      return A instanceof ArrayBuffer;
    },
    Wv9 = function (A) {
      return typeof A === "string" && A.length > 0;
    },
    Dv9 = function (A) {
      return typeof A === "number" && !Number.isNaN(A);
    },
    jv9 = function (A) {
      return Number.isInteger(A);
    },
    Mv9 = function (A, K, q) {
      return A >= K && A <= q;
    },
    Pv9 = function (A, K) {
      return K.includes(A);
    },
    Vv9 = function (A, K, q) {
      return Error(`Expected ${K} for ${A} but received ${q} of type ${typeof q}`);
    },
    fv9 = function (A, K) {
      return K.message = A.message, K;
    };
  Bh4.exports = {
    defined: uh4,
    object: Jv9,
    plainObject: Ov9,
    fn: Xv9,
    bool: $v9,
    buffer: _v9,
    typedArray: Gv9,
    arrayBuffer: Zv9,
    string: Wv9,
    number: Dv9,
    integer: jv9,
    inRange: Mv9,
    inArray: Pv9,
    invalidParameterError: Vv9,
    nativeError: fv9
  };
});

// Register to shared state
__$.ox = ox;
