// Module: rX1
// Dependencies: m3, LZA, ru, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rX1 = v((D4H, E_7) => {
  var dM = __$.m3();
  __$.LZA();
  __$.ru();
  __$.bY();
  var INY = dM.pkcs5 = dM.pkcs5 || {},
    Zp;
  if (dM.util.isNodejs && !dM.options.usePureJavaScript) Zp = CA("crypto");
  E_7.exports = dM.pbkdf2 = INY.pbkdf2 = function (A, K, q, Y, z, w) {
    if (typeof z === "function") w = z, z = null;
    if (dM.util.isNodejs && !dM.options.usePureJavaScript && Zp.pbkdf2 && (z === null || typeof z !== "object") && (Zp.pbkdf2Sync.length > 4 || !z || z === "sha1")) {
      if (typeof z !== "string") z = "sha1";
      if (A = Buffer.from(A, "binary"), K = Buffer.from(K, "binary"), !w) {
        if (Zp.pbkdf2Sync.length === 4) return Zp.pbkdf2Sync(A, K, q, Y).toString("binary");
        return Zp.pbkdf2Sync(A, K, q, Y, z).toString("binary");
      }
      if (Zp.pbkdf2Sync.length === 4) return Zp.pbkdf2(A, K, q, Y, function (f, N) {
        if (f) return w(f);
        w(null, N.toString("binary"));
      });
      return Zp.pbkdf2(A, K, q, Y, z, function (f, N) {
        if (f) return w(f);
        w(null, N.toString("binary"));
      });
    }
    if (typeof z > "u" || z === null) z = "sha1";
    if (typeof z === "string") {
      if (!(z in dM.md.algorithms)) throw Error("Unknown hash algorithm: " + z);
      z = dM.md[z].create();
    }
    var H = z.digestLength;
    if (Y > 4294967295 * H) {
      var J = Error("Derived key is too long.");
      if (w) return w(J);
      throw J;
    }
    var O = Math.ceil(Y / H),
      X = Y - (O - 1) * H,
      $ = dM.hmac.create();
    $.start(z, A);
    var _ = "",
      G,
      Z,
      W;
    if (!w) {
      for (var D = 1; D <= O; ++D) {
        $.start(null, null), $.update(K), $.update(dM.util.int32ToBytes(D)), G = W = $.digest().getBytes();
        for (var j = 2; j <= q; ++j) $.start(null, null), $.update(W), Z = $.digest().getBytes(), G = dM.util.xorBytes(G, Z, H), W = Z;
        _ += D < O ? G : G.substr(0, X);
      }
      return _;
    }
    var D = 1,
      j;
    function M() {
      if (D > O) return w(null, _);
      $.start(null, null), $.update(K), $.update(dM.util.int32ToBytes(D)), G = W = $.digest().getBytes(), j = 2, P();
    }
    function P() {
      if (j <= q) return $.start(null, null), $.update(W), Z = $.digest().getBytes(), G = dM.util.xorBytes(G, Z, H), W = Z, ++j, dM.util.setImmediate(P);
      _ += D < O ? G : G.substr(0, X), ++D, M();
    }
    M();
  };
});

// Register to shared state
__$.rX1 = rX1;
