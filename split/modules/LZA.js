// Module: LZA
// Dependencies: m3, ru, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LZA = v((_4H, D_7) => {
  var Gp = __$.m3();
  __$.ru();
  __$.bY();
  var PNY = D_7.exports = Gp.hmac = Gp.hmac || {};
  PNY.create = function () {
    var A = null,
      K = null,
      q = null,
      Y = null,
      z = {};
    return z.start = function (w, H) {
      if (w !== null) if (typeof w === "string") {
        if (w = w.toLowerCase(), w in Gp.md.algorithms) K = Gp.md.algorithms[w].create();else throw Error('Unknown hash algorithm "' + w + '"');
      } else K = w;
      if (H === null) H = A;else {
        if (typeof H === "string") H = Gp.util.createBuffer(H);else if (Gp.util.isArray(H)) {
          var J = H;
          H = Gp.util.createBuffer();
          for (var O = 0; O < J.length; ++O) H.putByte(J[O]);
        }
        var X = H.length();
        if (X > K.blockLength) K.start(), K.update(H.bytes()), H = K.digest();
        q = Gp.util.createBuffer(), Y = Gp.util.createBuffer(), X = H.length();
        for (var O = 0; O < X; ++O) {
          var J = H.at(O);
          q.putByte(54 ^ J), Y.putByte(92 ^ J);
        }
        if (X < K.blockLength) {
          var J = K.blockLength - X;
          for (var O = 0; O < J; ++O) q.putByte(54), Y.putByte(92);
        }
        A = H, q = q.bytes(), Y = Y.bytes();
      }
      K.start(), K.update(q);
    }, z.update = function (w) {
      K.update(w);
    }, z.getMac = function () {
      var w = K.digest().bytes();
      return K.start(), K.update(Y), K.update(w), K.digest();
    }, z.digest = z.getMac, z;
  };
});

// Register to shared state
__$.LZA = LZA;
