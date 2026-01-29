// Module: lX6
// Dependencies: ebA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lX6 = v(I67 => {
  Object.defineProperty(I67, "__esModule", {
    value: !0
  });
  I67.default = void 0;
  var I4Y = S4Y(__$.ebA());
  function S4Y(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function h4Y(A) {
    if (!(0, I4Y.default)(A)) throw TypeError("Invalid UUID");
    let K,
      q = new Uint8Array(16);
    return q[0] = (K = parseInt(A.slice(0, 8), 16)) >>> 24, q[1] = K >>> 16 & 255, q[2] = K >>> 8 & 255, q[3] = K & 255, q[4] = (K = parseInt(A.slice(9, 13), 16)) >>> 8, q[5] = K & 255, q[6] = (K = parseInt(A.slice(14, 18), 16)) >>> 8, q[7] = K & 255, q[8] = (K = parseInt(A.slice(19, 23), 16)) >>> 8, q[9] = K & 255, q[10] = (K = parseInt(A.slice(24, 36), 16)) / 1099511627776 & 255, q[11] = K / 4294967296 & 255, q[12] = K >>> 24 & 255, q[13] = K >>> 16 & 255, q[14] = K >>> 8 & 255, q[15] = K & 255, q;
  }
  var b4Y = h4Y;
  I67.default = b4Y;
});

// Register to shared state
__$.lX6 = lX6;
