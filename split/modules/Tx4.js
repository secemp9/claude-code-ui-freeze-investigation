// Module: Tx4
// Dependencies: bY6, Px4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tx4 = v((Fjw, Nx4) => {
  var VSA = __$.bY6(),
    fSA = __$.Px4(),
    Vx4 = Object.hasOwnProperty,
    fx4 = Object.create(null);
  for (PSA in VSA) if (Vx4.call(VSA, PSA)) fx4[VSA[PSA]] = PSA;
  var PSA,
    ST = Nx4.exports = {
      to: {},
      get: {}
    };
  ST.get = function (A) {
    var K = A.substring(0, 3).toLowerCase(),
      q,
      Y;
    switch (K) {
      case "hsl":
        q = ST.get.hsl(A), Y = "hsl";
        break;
      case "hwb":
        q = ST.get.hwb(A), Y = "hwb";
        break;
      default:
        q = ST.get.rgb(A), Y = "rgb";
        break;
    }
    if (!q) return null;
    return {
      model: Y,
      value: q
    };
  };
  ST.get.rgb = function (A) {
    if (!A) return null;
    var K = /^#([a-f0-9]{3,4})$/i,
      q = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
      Y = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
      z = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
      w = /^(\w+)$/,
      H = [0, 0, 0, 1],
      J,
      O,
      X;
    if (J = A.match(q)) {
      X = J[2], J = J[1];
      for (O = 0; O < 3; O++) {
        var $ = O * 2;
        H[O] = parseInt(J.slice($, $ + 2), 16);
      }
      if (X) H[3] = parseInt(X, 16) / 255;
    } else if (J = A.match(K)) {
      J = J[1], X = J[3];
      for (O = 0; O < 3; O++) H[O] = parseInt(J[O] + J[O], 16);
      if (X) H[3] = parseInt(X + X, 16) / 255;
    } else if (J = A.match(Y)) {
      for (O = 0; O < 3; O++) H[O] = parseInt(J[O + 1], 0);
      if (J[4]) if (J[5]) H[3] = parseFloat(J[4]) * 0.01;else H[3] = parseFloat(J[4]);
    } else if (J = A.match(z)) {
      for (O = 0; O < 3; O++) H[O] = Math.round(parseFloat(J[O + 1]) * 2.55);
      if (J[4]) if (J[5]) H[3] = parseFloat(J[4]) * 0.01;else H[3] = parseFloat(J[4]);
    } else if (J = A.match(w)) {
      if (J[1] === "transparent") return [0, 0, 0, 0];
      if (!Vx4.call(VSA, J[1])) return null;
      return H = VSA[J[1]], H[3] = 1, H;
    } else return null;
    for (O = 0; O < 3; O++) H[O] = nr(H[O], 0, 255);
    return H[3] = nr(H[3], 0, 1), H;
  };
  ST.get.hsl = function (A) {
    if (!A) return null;
    var K = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
      q = A.match(K);
    if (q) {
      var Y = parseFloat(q[4]),
        z = (parseFloat(q[1]) % 360 + 360) % 360,
        w = nr(parseFloat(q[2]), 0, 100),
        H = nr(parseFloat(q[3]), 0, 100),
        J = nr(isNaN(Y) ? 1 : Y, 0, 1);
      return [z, w, H, J];
    }
    return null;
  };
  ST.get.hwb = function (A) {
    if (!A) return null;
    var K = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
      q = A.match(K);
    if (q) {
      var Y = parseFloat(q[4]),
        z = (parseFloat(q[1]) % 360 + 360) % 360,
        w = nr(parseFloat(q[2]), 0, 100),
        H = nr(parseFloat(q[3]), 0, 100),
        J = nr(isNaN(Y) ? 1 : Y, 0, 1);
      return [z, w, H, J];
    }
    return null;
  };
  ST.to.hex = function () {
    var A = fSA(arguments);
    return "#" + xY1(A[0]) + xY1(A[1]) + xY1(A[2]) + (A[3] < 1 ? xY1(Math.round(A[3] * 255)) : "");
  };
  ST.to.rgb = function () {
    var A = fSA(arguments);
    return A.length < 4 || A[3] === 1 ? "rgb(" + Math.round(A[0]) + ", " + Math.round(A[1]) + ", " + Math.round(A[2]) + ")" : "rgba(" + Math.round(A[0]) + ", " + Math.round(A[1]) + ", " + Math.round(A[2]) + ", " + A[3] + ")";
  };
  ST.to.rgb.percent = function () {
    var A = fSA(arguments),
      K = Math.round(A[0] / 255 * 100),
      q = Math.round(A[1] / 255 * 100),
      Y = Math.round(A[2] / 255 * 100);
    return A.length < 4 || A[3] === 1 ? "rgb(" + K + "%, " + q + "%, " + Y + "%)" : "rgba(" + K + "%, " + q + "%, " + Y + "%, " + A[3] + ")";
  };
  ST.to.hsl = function () {
    var A = fSA(arguments);
    return A.length < 4 || A[3] === 1 ? "hsl(" + A[0] + ", " + A[1] + "%, " + A[2] + "%)" : "hsla(" + A[0] + ", " + A[1] + "%, " + A[2] + "%, " + A[3] + ")";
  };
  ST.to.hwb = function () {
    var A = fSA(arguments),
      K = "";
    if (A.length >= 4 && A[3] !== 1) K = ", " + A[3];
    return "hwb(" + A[0] + ", " + A[1] + "%, " + A[2] + "%" + K + ")";
  };
  ST.to.keyword = function (A) {
    return fx4[A.slice(0, 3)];
  };
  function nr(A, K, q) {
    return Math.min(Math.max(K, A), q);
  }
  function xY1(A) {
    var K = Math.round(A).toString(16).toUpperCase();
    return K.length < 2 ? "0" + K : K;
  }
});

// Register to shared state
__$.Tx4 = Tx4;
