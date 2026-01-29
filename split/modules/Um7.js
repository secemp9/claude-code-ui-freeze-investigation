// Module: Um7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Um7 = v(Qm7 => {
  var JD1 = Qm7;
  JD1.length = function (K) {
    var q = K.length;
    if (!q) return 0;
    var Y = 0;
    while (--q % 4 > 1 && K.charAt(q) === "=") ++Y;
    return Math.ceil(K.length * 3) / 4 - Y;
  };
  var oDA = Array(64),
    Fm7 = Array(123);
  for (OL = 0; OL < 64;) Fm7[oDA[OL] = OL < 26 ? OL + 65 : OL < 52 ? OL + 71 : OL < 62 ? OL - 4 : OL - 59 | 43] = OL++;
  var OL;
  JD1.encode = function (K, q, Y) {
    var z = null,
      w = [],
      H = 0,
      J = 0,
      O;
    while (q < Y) {
      var X = K[q++];
      switch (J) {
        case 0:
          w[H++] = oDA[X >> 2], O = (X & 3) << 4, J = 1;
          break;
        case 1:
          w[H++] = oDA[O | X >> 4], O = (X & 15) << 2, J = 2;
          break;
        case 2:
          w[H++] = oDA[O | X >> 6], w[H++] = oDA[X & 63], J = 0;
          break;
      }
      if (H > 8191) (z || (z = [])).push(String.fromCharCode.apply(String, w)), H = 0;
    }
    if (J) {
      if (w[H++] = oDA[O], w[H++] = 61, J === 1) w[H++] = 61;
    }
    if (z) {
      if (H) z.push(String.fromCharCode.apply(String, w.slice(0, H)));
      return z.join("");
    }
    return String.fromCharCode.apply(String, w.slice(0, H));
  };
  var gm7 = "invalid encoding";
  JD1.decode = function (K, q, Y) {
    var z = Y,
      w = 0,
      H;
    for (var J = 0; J < K.length;) {
      var O = K.charCodeAt(J++);
      if (O === 61 && w > 1) break;
      if ((O = Fm7[O]) === void 0) throw Error(gm7);
      switch (w) {
        case 0:
          H = O, w = 1;
          break;
        case 1:
          q[Y++] = H << 2 | (O & 48) >> 4, H = O, w = 2;
          break;
        case 2:
          q[Y++] = (H & 15) << 4 | (O & 60) >> 2, H = O, w = 3;
          break;
        case 3:
          q[Y++] = (H & 3) << 6 | O, w = 0;
          break;
      }
    }
    if (w === 1) throw Error(gm7);
    return Y - z;
  };
  JD1.test = function (K) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(K);
  };
});

// Register to shared state
__$.Um7 = Um7;
