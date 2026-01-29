// Module: K$1
// Dependencies: m3, uC, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K$1 = v((y4H, _G7) => {
  var RqA = __$.m3();
  __$.uC();
  __$.bY();
  var mvY = _G7.exports = RqA.pss = RqA.pss || {};
  mvY.create = function (A) {
    if (arguments.length === 3) A = {
      md: arguments[0],
      mgf: arguments[1],
      saltLength: arguments[2]
    };
    var {
        md: K,
        mgf: q
      } = A,
      Y = K.digestLength,
      z = A.salt || null;
    if (typeof z === "string") z = RqA.util.createBuffer(z);
    var w;
    if ("saltLength" in A) w = A.saltLength;else if (z !== null) w = z.length();else throw Error("Salt length not specified or specific salt not given.");
    if (z !== null && z.length() !== w) throw Error("Given salt length does not match length of given salt.");
    var H = A.prng || RqA.random,
      J = {};
    return J.encode = function (O, X) {
      var $,
        _ = X - 1,
        G = Math.ceil(_ / 8),
        Z = O.digest().getBytes();
      if (G < Y + w + 2) throw Error("Message is too long to encrypt.");
      var W;
      if (z === null) W = H.getBytesSync(w);else W = z.bytes();
      var D = new RqA.util.ByteBuffer();
      D.fillWithByte(0, 8), D.putBytes(Z), D.putBytes(W), K.start(), K.update(D.getBytes());
      var j = K.digest().getBytes(),
        M = new RqA.util.ByteBuffer();
      M.fillWithByte(0, G - w - Y - 2), M.putByte(1), M.putBytes(W);
      var P = M.getBytes(),
        f = G - Y - 1,
        N = q.generate(j, f),
        T = "";
      for ($ = 0; $ < f; $++) T += String.fromCharCode(P.charCodeAt($) ^ N.charCodeAt($));
      var C = 65280 >> 8 * G - _ & 255;
      return T = String.fromCharCode(T.charCodeAt(0) & ~C) + T.substr(1), T + j + String.fromCharCode(188);
    }, J.verify = function (O, X, $) {
      var _,
        G = $ - 1,
        Z = Math.ceil(G / 8);
      if (X = X.substr(-Z), Z < Y + w + 2) throw Error("Inconsistent parameters to PSS signature verification.");
      if (X.charCodeAt(Z - 1) !== 188) throw Error("Encoded message does not end in 0xBC.");
      var W = Z - Y - 1,
        D = X.substr(0, W),
        j = X.substr(W, Y),
        M = 65280 >> 8 * Z - G & 255;
      if ((D.charCodeAt(0) & M) !== 0) throw Error("Bits beyond keysize not zero as expected.");
      var P = q.generate(j, W),
        f = "";
      for (_ = 0; _ < W; _++) f += String.fromCharCode(D.charCodeAt(_) ^ P.charCodeAt(_));
      f = String.fromCharCode(f.charCodeAt(0) & ~M) + f.substr(1);
      var N = Z - Y - w - 2;
      for (_ = 0; _ < N; _++) if (f.charCodeAt(_) !== 0) throw Error("Leftmost octets not zero as expected");
      if (f.charCodeAt(N) !== 1) throw Error("Inconsistent PSS signature, 0x01 marker not found");
      var T = f.substr(-w),
        C = new RqA.util.ByteBuffer();
      C.fillWithByte(0, 8), C.putBytes(O), C.putBytes(T), K.start(), K.update(C.getBytes());
      var R = K.digest().getBytes();
      return j === R;
    }, J;
  };
});

// Register to shared state
__$.K$1 = K$1;
