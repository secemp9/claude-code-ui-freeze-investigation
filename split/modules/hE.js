// Module: hE
// Dependencies: wu1, Xb, SE, xR, zvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hE = v(oW8 => {
  Object.defineProperty(oW8, "__esModule", {
    value: !0
  });
  var _Cq = __$.wu1(),
    GCq = __$.Xb(),
    zHA = __$.SE(),
    ZCq = __$.xR(),
    dW8 = __$.zvA();
  function WCq(A, K, q) {
    if (!(K in A)) return;
    let Y = A[K],
      z = q(Y);
    if (typeof z === "function") nW8(z, Y);
    A[K] = z;
  }
  function iW8(A, K, q) {
    try {
      Object.defineProperty(A, K, {
        value: q,
        writable: !0,
        configurable: !0
      });
    } catch (Y) {
      GCq.DEBUG_BUILD && ZCq.logger.log(`Failed to add non-enumerable property "${K}" to object`, A);
    }
  }
  function nW8(A, K) {
    try {
      let q = K.prototype || {};
      A.prototype = K.prototype = q, iW8(A, "__sentry_original__", K);
    } catch (q) {}
  }
  function DCq(A) {
    return A.__sentry_original__;
  }
  function jCq(A) {
    return Object.keys(A).map(K => `${encodeURIComponent(K)}=${encodeURIComponent(A[K])}`).join("&");
  }
  function rW8(A) {
    if (zHA.isError(A)) return {
      message: A.message,
      name: A.name,
      stack: A.stack,
      ...lW8(A)
    };else if (zHA.isEvent(A)) {
      let K = {
        type: A.type,
        target: cW8(A.target),
        currentTarget: cW8(A.currentTarget),
        ...lW8(A)
      };
      if (typeof CustomEvent < "u" && zHA.isInstanceOf(A, CustomEvent)) K.detail = A.detail;
      return K;
    } else return A;
  }
  function cW8(A) {
    try {
      return zHA.isElement(A) ? _Cq.htmlTreeAsString(A) : Object.prototype.toString.call(A);
    } catch (K) {
      return "<unknown>";
    }
  }
  function lW8(A) {
    if (typeof A === "object" && A !== null) {
      let K = {};
      for (let q in A) if (Object.prototype.hasOwnProperty.call(A, q)) K[q] = A[q];
      return K;
    } else return {};
  }
  function MCq(A, K = 40) {
    let q = Object.keys(rW8(A));
    if (q.sort(), !q.length) return "[object has no keys]";
    if (q[0].length >= K) return dW8.truncate(q[0], K);
    for (let Y = q.length; Y > 0; Y--) {
      let z = q.slice(0, Y).join(", ");
      if (z.length > K) continue;
      if (Y === q.length) return z;
      return dW8.truncate(z, K);
    }
    return "";
  }
  function PCq(A) {
    return _u1(A, new Map());
  }
  function _u1(A, K) {
    if (VCq(A)) {
      let q = K.get(A);
      if (q !== void 0) return q;
      let Y = {};
      K.set(A, Y);
      for (let z of Object.keys(A)) if (typeof A[z] < "u") Y[z] = _u1(A[z], K);
      return Y;
    }
    if (Array.isArray(A)) {
      let q = K.get(A);
      if (q !== void 0) return q;
      let Y = [];
      return K.set(A, Y), A.forEach(z => {
        Y.push(_u1(z, K));
      }), Y;
    }
    return A;
  }
  function VCq(A) {
    if (!zHA.isPlainObject(A)) return !1;
    try {
      let K = Object.getPrototypeOf(A).constructor.name;
      return !K || K === "Object";
    } catch (K) {
      return !0;
    }
  }
  function fCq(A) {
    let K;
    switch (!0) {
      case A === void 0 || A === null:
        K = new String(A);
        break;
      case typeof A === "symbol" || typeof A === "bigint":
        K = Object(A);
        break;
      case zHA.isPrimitive(A):
        K = new A.constructor(A);
        break;
      default:
        K = A;
        break;
    }
    return K;
  }
  oW8.addNonEnumerableProperty = iW8;
  oW8.convertToPlainObject = rW8;
  oW8.dropUndefinedKeys = PCq;
  oW8.extractExceptionKeysForMessage = MCq;
  oW8.fill = WCq;
  oW8.getOriginalFunction = DCq;
  oW8.markFunctionWrapped = nW8;
  oW8.objectify = fCq;
  oW8.urlEncode = jCq;
});

// Register to shared state
__$.hE = hE;
