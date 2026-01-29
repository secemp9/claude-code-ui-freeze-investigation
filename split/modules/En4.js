// Module: En4
// Dependencies: ZH6, HhA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var En4 = v(Tn4 => {
  Object.defineProperty(Tn4, "__esModule", {
    value: !0
  });
  Tn4.default = void 0;
  var wo9 = Jo9(__$.ZH6()),
    Ho9 = __$.HhA();
  function Jo9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  var Nn4,
    WH6,
    DH6 = 0,
    jH6 = 0;
  function Oo9(A, K, q) {
    let Y = K && q || 0,
      z = K || Array(16);
    A = A || {};
    let w = A.node || Nn4,
      H = A.clockseq !== void 0 ? A.clockseq : WH6;
    if (w == null || H == null) {
      let G = A.random || (A.rng || wo9.default)();
      if (w == null) w = Nn4 = [G[0] | 1, G[1], G[2], G[3], G[4], G[5]];
      if (H == null) H = WH6 = (G[6] << 8 | G[7]) & 16383;
    }
    let J = A.msecs !== void 0 ? A.msecs : Date.now(),
      O = A.nsecs !== void 0 ? A.nsecs : jH6 + 1,
      X = J - DH6 + (O - jH6) / 1e4;
    if (X < 0 && A.clockseq === void 0) H = H + 1 & 16383;
    if ((X < 0 || J > DH6) && A.nsecs === void 0) O = 0;
    if (O >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
    DH6 = J, jH6 = O, WH6 = H, J += 12219292800000;
    let $ = ((J & 268435455) * 1e4 + O) % 4294967296;
    z[Y++] = $ >>> 24 & 255, z[Y++] = $ >>> 16 & 255, z[Y++] = $ >>> 8 & 255, z[Y++] = $ & 255;
    let _ = J / 4294967296 * 1e4 & 268435455;
    z[Y++] = _ >>> 8 & 255, z[Y++] = _ & 255, z[Y++] = _ >>> 24 & 15 | 16, z[Y++] = _ >>> 16 & 255, z[Y++] = H >>> 8 | 128, z[Y++] = H & 255;
    for (let G = 0; G < 6; ++G) z[Y + G] = w[G];
    return K || (0, Ho9.unsafeStringify)(z);
  }
  var Xo9 = Oo9;
  Tn4.default = Xo9;
});

// Register to shared state
__$.En4 = En4;
