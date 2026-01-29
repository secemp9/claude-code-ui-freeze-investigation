// Module: vB4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vB4 = v(NB4 => {
  Object.defineProperty(NB4, "__esModule", {
    value: !0
  });
  NB4.toUtf8 = NB4.fromUtf8 = void 0;
  var FR9 = A => {
    let K = [];
    for (let q = 0, Y = A.length; q < Y; q++) {
      let z = A.charCodeAt(q);
      if (z < 128) K.push(z);else if (z < 2048) K.push(z >> 6 | 192, z & 63 | 128);else if (q + 1 < A.length && (z & 64512) === 55296 && (A.charCodeAt(q + 1) & 64512) === 56320) {
        let w = 65536 + ((z & 1023) << 10) + (A.charCodeAt(++q) & 1023);
        K.push(w >> 18 | 240, w >> 12 & 63 | 128, w >> 6 & 63 | 128, w & 63 | 128);
      } else K.push(z >> 12 | 224, z >> 6 & 63 | 128, z & 63 | 128);
    }
    return Uint8Array.from(K);
  };
  NB4.fromUtf8 = FR9;
  var QR9 = A => {
    let K = "";
    for (let q = 0, Y = A.length; q < Y; q++) {
      let z = A[q];
      if (z < 128) K += String.fromCharCode(z);else if (192 <= z && z < 224) {
        let w = A[++q];
        K += String.fromCharCode((z & 31) << 6 | w & 63);
      } else if (240 <= z && z < 365) {
        let H = "%" + [z, A[++q], A[++q], A[++q]].map(J => J.toString(16)).join("%");
        K += decodeURIComponent(H);
      } else K += String.fromCharCode((z & 15) << 12 | (A[++q] & 63) << 6 | A[++q] & 63);
    }
    return K;
  };
  NB4.toUtf8 = QR9;
});

// Register to shared state
__$.vB4 = vB4;
