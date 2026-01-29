// Module: Ag7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ag7 = v(em7 => {
  var iv6 = em7;
  iv6.length = function (K) {
    var q = 0,
      Y = 0;
    for (var z = 0; z < K.length; ++z) if (Y = K.charCodeAt(z), Y < 128) q += 1;else if (Y < 2048) q += 2;else if ((Y & 64512) === 55296 && (K.charCodeAt(z + 1) & 64512) === 56320) ++z, q += 4;else q += 3;
    return q;
  };
  iv6.read = function (K, q, Y) {
    var z = Y - q;
    if (z < 1) return "";
    var w = null,
      H = [],
      J = 0,
      O;
    while (q < Y) {
      if (O = K[q++], O < 128) H[J++] = O;else if (O > 191 && O < 224) H[J++] = (O & 31) << 6 | K[q++] & 63;else if (O > 239 && O < 365) O = ((O & 7) << 18 | (K[q++] & 63) << 12 | (K[q++] & 63) << 6 | K[q++] & 63) - 65536, H[J++] = 55296 + (O >> 10), H[J++] = 56320 + (O & 1023);else H[J++] = (O & 15) << 12 | (K[q++] & 63) << 6 | K[q++] & 63;
      if (J > 8191) (w || (w = [])).push(String.fromCharCode.apply(String, H)), J = 0;
    }
    if (w) {
      if (J) w.push(String.fromCharCode.apply(String, H.slice(0, J)));
      return w.join("");
    }
    return String.fromCharCode.apply(String, H.slice(0, J));
  };
  iv6.write = function (K, q, Y) {
    var z = Y,
      w,
      H;
    for (var J = 0; J < K.length; ++J) if (w = K.charCodeAt(J), w < 128) q[Y++] = w;else if (w < 2048) q[Y++] = w >> 6 | 192, q[Y++] = w & 63 | 128;else if ((w & 64512) === 55296 && ((H = K.charCodeAt(J + 1)) & 64512) === 56320) w = 65536 + ((w & 1023) << 10) + (H & 1023), ++J, q[Y++] = w >> 18 | 240, q[Y++] = w >> 12 & 63 | 128, q[Y++] = w >> 6 & 63 | 128, q[Y++] = w & 63 | 128;else q[Y++] = w >> 12 | 224, q[Y++] = w >> 6 & 63 | 128, q[Y++] = w & 63 | 128;
    return Y - z;
  };
});

// Register to shared state
__$.Ag7 = Ag7;
