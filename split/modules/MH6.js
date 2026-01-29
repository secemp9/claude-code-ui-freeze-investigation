// Module: MH6
// Dependencies: whA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MH6 = v(kn4 => {
  Object.defineProperty(kn4, "__esModule", {
    value: !0
  });
  kn4.default = void 0;
  var $o9 = _o9(__$.whA());
  function _o9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function Go9(A) {
    if (!(0, $o9.default)(A)) throw TypeError("Invalid UUID");
    let K,
      q = new Uint8Array(16);
    return q[0] = (K = parseInt(A.slice(0, 8), 16)) >>> 24, q[1] = K >>> 16 & 255, q[2] = K >>> 8 & 255, q[3] = K & 255, q[4] = (K = parseInt(A.slice(9, 13), 16)) >>> 8, q[5] = K & 255, q[6] = (K = parseInt(A.slice(14, 18), 16)) >>> 8, q[7] = K & 255, q[8] = (K = parseInt(A.slice(19, 23), 16)) >>> 8, q[9] = K & 255, q[10] = (K = parseInt(A.slice(24, 36), 16)) / 1099511627776 & 255, q[11] = K / 4294967296 & 255, q[12] = K >>> 24 & 255, q[13] = K >>> 16 & 255, q[14] = K >>> 8 & 255, q[15] = K & 255, q;
  }
  var Zo9 = Go9;
  kn4.default = Zo9;
});

// Register to shared state
__$.MH6 = MH6;
