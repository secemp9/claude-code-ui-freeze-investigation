// Module: y67
// Dependencies: UX6, AxA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var y67 = v(L67 => {
  Object.defineProperty(L67, "__esModule", {
    value: !0
  });
  L67.default = void 0;
  var C4Y = C67(__$.UX6()),
    L4Y = C67(__$.AxA());
  function C67(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  var k67,
    pX6,
    dX6 = 0,
    cX6 = 0;
  function R4Y(A, K, q) {
    let Y = K && q || 0,
      z = K || Array(16);
    A = A || {};
    let w = A.node || k67,
      H = A.clockseq !== void 0 ? A.clockseq : pX6;
    if (w == null || H == null) {
      let G = A.random || (A.rng || C4Y.default)();
      if (w == null) w = k67 = [G[0] | 1, G[1], G[2], G[3], G[4], G[5]];
      if (H == null) H = pX6 = (G[6] << 8 | G[7]) & 16383;
    }
    let J = A.msecs !== void 0 ? A.msecs : Date.now(),
      O = A.nsecs !== void 0 ? A.nsecs : cX6 + 1,
      X = J - dX6 + (O - cX6) / 1e4;
    if (X < 0 && A.clockseq === void 0) H = H + 1 & 16383;
    if ((X < 0 || J > dX6) && A.nsecs === void 0) O = 0;
    if (O >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    dX6 = J, cX6 = O, pX6 = H, J += 12219292800000;
    let $ = ((J & 268435455) * 1e4 + O) % 4294967296;
    z[Y++] = $ >>> 24 & 255, z[Y++] = $ >>> 16 & 255, z[Y++] = $ >>> 8 & 255, z[Y++] = $ & 255;
    let _ = J / 4294967296 * 1e4 & 268435455;
    z[Y++] = _ >>> 8 & 255, z[Y++] = _ & 255, z[Y++] = _ >>> 24 & 15 | 16, z[Y++] = _ >>> 16 & 255, z[Y++] = H >>> 8 | 128, z[Y++] = H & 255;
    for (let G = 0; G < 6; ++G) z[Y + G] = w[G];
    return K || (0, L4Y.default)(z);
  }
  var y4Y = R4Y;
  L67.default = y4Y;
});

// Register to shared state
__$.y67 = y67;
