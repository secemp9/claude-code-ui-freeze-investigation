// Module: A$6
// Dependencies: Wu, Kw1, iH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var A$6 = v((Omw, v87) => {
  var _GA = __$.Wu().Buffer,
    VC = CA("crypto"),
    j87 = __$.Kw1(),
    D87 = CA("util"),
    E7Y = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
    HxA = "secret must be a string or buffer",
    $GA = "key must be a string or a buffer",
    k7Y = "key must be a string, a buffer or an object",
    tX6 = typeof VC.createPublicKey === "function";
  if (tX6) $GA += " or a KeyObject", HxA += "or a KeyObject";
  function M87(A) {
    if (_GA.isBuffer(A)) return;
    if (typeof A === "string") return;
    if (!tX6) throw XI($GA);
    if (typeof A !== "object") throw XI($GA);
    if (typeof A.type !== "string") throw XI($GA);
    if (typeof A.asymmetricKeyType !== "string") throw XI($GA);
    if (typeof A.export !== "function") throw XI($GA);
  }
  function P87(A) {
    if (_GA.isBuffer(A)) return;
    if (typeof A === "string") return;
    if (typeof A === "object") return;
    throw XI(k7Y);
  }
  function C7Y(A) {
    if (_GA.isBuffer(A)) return;
    if (typeof A === "string") return A;
    if (!tX6) throw XI(HxA);
    if (typeof A !== "object") throw XI(HxA);
    if (A.type !== "secret") throw XI(HxA);
    if (typeof A.export !== "function") throw XI(HxA);
  }
  function eX6(A) {
    return A.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function V87(A) {
    A = A.toString();
    var K = 4 - A.length % 4;
    if (K !== 4) for (var q = 0; q < K; ++q) A += "=";
    return A.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function XI(A) {
    var K = [].slice.call(arguments, 1),
      q = D87.format.bind(D87, A).apply(null, K);
    return TypeError(q);
  }
  function L7Y(A) {
    return _GA.isBuffer(A) || typeof A === "string";
  }
  function JxA(A) {
    if (!L7Y(A)) A = JSON.stringify(A);
    return A;
  }
  function f87(A) {
    return function (q, Y) {
      C7Y(Y), q = JxA(q);
      var z = VC.createHmac("sha" + A, Y),
        w = (z.update(q), z.digest("base64"));
      return eX6(w);
    };
  }
  var sX6,
    R7Y = "timingSafeEqual" in VC ? function (K, q) {
      if (K.byteLength !== q.byteLength) return !1;
      return VC.timingSafeEqual(K, q);
    } : function (K, q) {
      if (!sX6) sX6 = __$.iH6();
      return sX6(K, q);
    };
  function y7Y(A) {
    return function (q, Y, z) {
      var w = f87(A)(q, z);
      return R7Y(_GA.from(Y), _GA.from(w));
    };
  }
  function N87(A) {
    return function (q, Y) {
      P87(Y), q = JxA(q);
      var z = VC.createSign("RSA-SHA" + A),
        w = (z.update(q), z.sign(Y, "base64"));
      return eX6(w);
    };
  }
  function T87(A) {
    return function (q, Y, z) {
      M87(z), q = JxA(q), Y = V87(Y);
      var w = VC.createVerify("RSA-SHA" + A);
      return w.update(q), w.verify(z, Y, "base64");
    };
  }
  function I7Y(A) {
    return function (q, Y) {
      P87(Y), q = JxA(q);
      var z = VC.createSign("RSA-SHA" + A),
        w = (z.update(q), z.sign({
          key: Y,
          padding: VC.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: VC.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
      return eX6(w);
    };
  }
  function S7Y(A) {
    return function (q, Y, z) {
      M87(z), q = JxA(q), Y = V87(Y);
      var w = VC.createVerify("RSA-SHA" + A);
      return w.update(q), w.verify({
        key: z,
        padding: VC.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: VC.constants.RSA_PSS_SALTLEN_DIGEST
      }, Y, "base64");
    };
  }
  function h7Y(A) {
    var K = N87(A);
    return function () {
      var Y = K.apply(null, arguments);
      return Y = j87.derToJose(Y, "ES" + A), Y;
    };
  }
  function b7Y(A) {
    var K = T87(A);
    return function (Y, z, w) {
      z = j87.joseToDer(z, "ES" + A).toString("base64");
      var H = K(Y, z, w);
      return H;
    };
  }
  function x7Y() {
    return function () {
      return "";
    };
  }
  function u7Y() {
    return function (K, q) {
      return q === "";
    };
  }
  v87.exports = function (K) {
    var q = {
        hs: f87,
        rs: N87,
        ps: I7Y,
        es: h7Y,
        none: x7Y
      },
      Y = {
        hs: y7Y,
        rs: T87,
        ps: S7Y,
        es: b7Y,
        none: u7Y
      },
      z = K.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
    if (!z) throw XI(E7Y, K);
    var w = (z[1] || z[3]).toLowerCase(),
      H = z[2];
    return {
      sign: q[w](H),
      verify: Y[w](H)
    };
  };
});

// Register to shared state
__$.A$6 = A$6;
