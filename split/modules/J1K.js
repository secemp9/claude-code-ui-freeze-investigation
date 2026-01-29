// Module: J1K
// Dependencies: SH6, z1K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var J1K = v(IG2 => {
  var w1K = __$.SH6(),
    CG2 = __$.z1K();
  IG2.build = yG2;
  function LG2(A) {
    function K(q) {
      return q < 10 ? "0" + q : q;
    }
    return A.getUTCFullYear() + "-" + K(A.getUTCMonth() + 1) + "-" + K(A.getUTCDate()) + "T" + K(A.getUTCHours()) + ":" + K(A.getUTCMinutes()) + ":" + K(A.getUTCSeconds()) + "Z";
  }
  var RG2 = Object.prototype.toString;
  function H1K(A) {
    var K = RG2.call(A).match(/\[object (.*)\]/);
    return K ? K[1] : K;
  }
  function yG2(A, K) {
    var q = {
        version: "1.0",
        encoding: "UTF-8"
      },
      Y = {
        pubid: "-//Apple//DTD PLIST 1.0//EN",
        sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
      },
      z = CG2.create("plist");
    if (z.dec(q.version, q.encoding, q.standalone), z.dtd(Y.pubid, Y.sysid), z.att("version", "1.0"), nR6(A, z), !K) K = {};
    return K.pretty = K.pretty !== !1, z.end(K);
  }
  function nR6(A, K) {
    var q,
      Y,
      z,
      w = H1K(A);
    if (w == "Undefined") return;else if (Array.isArray(A)) {
      K = K.ele("array");
      for (Y = 0; Y < A.length; Y++) nR6(A[Y], K);
    } else if (Buffer.isBuffer(A)) K.ele("data").raw(A.toString("base64"));else if (w == "Object") {
      K = K.ele("dict");
      for (z in A) if (A.hasOwnProperty(z)) K.ele("key").txt(z), nR6(A[z], K);
    } else if (w == "Number") q = A % 1 === 0 ? "integer" : "real", K.ele(q).txt(A.toString());else if (w == "BigInt") K.ele("integer").txt(A);else if (w == "Date") K.ele("date").txt(LG2(new Date(A)));else if (w == "Boolean") K.ele(A ? "true" : "false");else if (w == "String") K.ele("string").txt(A);else if (w == "ArrayBuffer") K.ele("data").raw(w1K.fromByteArray(A));else if (A && A.buffer && H1K(A.buffer) == "ArrayBuffer") K.ele("data").raw(w1K.fromByteArray(new Uint8Array(A.buffer), K));else if (w === "Null") K.ele("null").txt("");
  }
});

// Register to shared state
__$.J1K = J1K;
