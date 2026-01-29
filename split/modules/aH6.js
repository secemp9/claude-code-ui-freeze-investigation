// Module: aH6
// Dependencies: Wu, Kw1, iH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aH6 = v((dTw, qa4) => {
  var P_A = __$.Wu().Buffer,
    GC = CA("crypto"),
    oo4 = __$.Kw1(),
    ro4 = CA("util"),
    $t9 = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
    jhA = "secret must be a string or buffer",
    M_A = "key must be a string or a buffer",
    _t9 = "key must be a string, a buffer or an object",
    rH6 = typeof GC.createPublicKey === "function";
  if (rH6) M_A += " or a KeyObject", jhA += "or a KeyObject";
  function ao4(A) {
    if (P_A.isBuffer(A)) return;
    if (typeof A === "string") return;
    if (!rH6) throw ty(M_A);
    if (typeof A !== "object") throw ty(M_A);
    if (typeof A.type !== "string") throw ty(M_A);
    if (typeof A.asymmetricKeyType !== "string") throw ty(M_A);
    if (typeof A.export !== "function") throw ty(M_A);
  }
  function so4(A) {
    if (P_A.isBuffer(A)) return;
    if (typeof A === "string") return;
    if (typeof A === "object") return;
    throw ty(_t9);
  }
  function Gt9(A) {
    if (P_A.isBuffer(A)) return;
    if (typeof A === "string") return A;
    if (!rH6) throw ty(jhA);
    if (typeof A !== "object") throw ty(jhA);
    if (A.type !== "secret") throw ty(jhA);
    if (typeof A.export !== "function") throw ty(jhA);
  }
  function oH6(A) {
    return A.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function to4(A) {
    A = A.toString();
    var K = 4 - A.length % 4;
    if (K !== 4) for (var q = 0; q < K; ++q) A += "=";
    return A.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function ty(A) {
    var K = [].slice.call(arguments, 1),
      q = ro4.format.bind(ro4, A).apply(null, K);
    return TypeError(q);
  }
  function Zt9(A) {
    return P_A.isBuffer(A) || typeof A === "string";
  }
  function MhA(A) {
    if (!Zt9(A)) A = JSON.stringify(A);
    return A;
  }
  function eo4(A) {
    return function (q, Y) {
      Gt9(Y), q = MhA(q);
      var z = GC.createHmac("sha" + A, Y),
        w = (z.update(q), z.digest("base64"));
      return oH6(w);
    };
  }
  var nH6,
    Wt9 = "timingSafeEqual" in GC ? function (K, q) {
      if (K.byteLength !== q.byteLength) return !1;
      return GC.timingSafeEqual(K, q);
    } : function (K, q) {
      if (!nH6) nH6 = __$.iH6();
      return nH6(K, q);
    };
  function Dt9(A) {
    return function (q, Y, z) {
      var w = eo4(A)(q, z);
      return Wt9(P_A.from(Y), P_A.from(w));
    };
  }
  function Aa4(A) {
    return function (q, Y) {
      so4(Y), q = MhA(q);
      var z = GC.createSign("RSA-SHA" + A),
        w = (z.update(q), z.sign(Y, "base64"));
      return oH6(w);
    };
  }
  function Ka4(A) {
    return function (q, Y, z) {
      ao4(z), q = MhA(q), Y = to4(Y);
      var w = GC.createVerify("RSA-SHA" + A);
      return w.update(q), w.verify(z, Y, "base64");
    };
  }
  function jt9(A) {
    return function (q, Y) {
      so4(Y), q = MhA(q);
      var z = GC.createSign("RSA-SHA" + A),
        w = (z.update(q), z.sign({
          key: Y,
          padding: GC.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: GC.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
      return oH6(w);
    };
  }
  function Mt9(A) {
    return function (q, Y, z) {
      ao4(z), q = MhA(q), Y = to4(Y);
      var w = GC.createVerify("RSA-SHA" + A);
      return w.update(q), w.verify({
        key: z,
        padding: GC.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: GC.constants.RSA_PSS_SALTLEN_DIGEST
      }, Y, "base64");
    };
  }
  function Pt9(A) {
    var K = Aa4(A);
    return function () {
      var Y = K.apply(null, arguments);
      return Y = oo4.derToJose(Y, "ES" + A), Y;
    };
  }
  function Vt9(A) {
    var K = Ka4(A);
    return function (Y, z, w) {
      z = oo4.joseToDer(z, "ES" + A).toString("base64");
      var H = K(Y, z, w);
      return H;
    };
  }
  function ft9() {
    return function () {
      return "";
    };
  }
  function Nt9() {
    return function (K, q) {
      return q === "";
    };
  }
  qa4.exports = function (K) {
    var q = {
        hs: eo4,
        rs: Aa4,
        ps: jt9,
        es: Pt9,
        none: ft9
      },
      Y = {
        hs: Dt9,
        rs: Ka4,
        ps: Mt9,
        es: Vt9,
        none: Nt9
      },
      z = K.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!z) throw ty($t9, K);
    var w = (z[1] || z[3]).toLowerCase(),
      H = z[2];
    return {
      sign: q[w](H),
      verify: Y[w](H)
    };
  };
});

// Register to shared state
__$.aH6 = aH6;
