// Module: jDK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jDK = v(XF2 => {
  XF2.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var a9A = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  XF2.isValid = function (K) {
    return K != null && K !== "" && !isNaN(K) && K >= 0 && K <= 7;
  };
  XF2.from = function (K) {
    return XF2.isValid(K) ? parseInt(K, 10) : void 0;
  };
  XF2.getPenaltyN1 = function (K) {
    let q = K.size,
      Y = 0,
      z = 0,
      w = 0,
      H = null,
      J = null;
    for (let O = 0; O < q; O++) {
      z = w = 0, H = J = null;
      for (let X = 0; X < q; X++) {
        let $ = K.get(O, X);
        if ($ === H) z++;else {
          if (z >= 5) Y += a9A.N1 + (z - 5);
          H = $, z = 1;
        }
        if ($ = K.get(X, O), $ === J) w++;else {
          if (w >= 5) Y += a9A.N1 + (w - 5);
          J = $, w = 1;
        }
      }
      if (z >= 5) Y += a9A.N1 + (z - 5);
      if (w >= 5) Y += a9A.N1 + (w - 5);
    }
    return Y;
  };
  XF2.getPenaltyN2 = function (K) {
    let q = K.size,
      Y = 0;
    for (let z = 0; z < q - 1; z++) for (let w = 0; w < q - 1; w++) {
      let H = K.get(z, w) + K.get(z, w + 1) + K.get(z + 1, w) + K.get(z + 1, w + 1);
      if (H === 4 || H === 0) Y++;
    }
    return Y * a9A.N2;
  };
  XF2.getPenaltyN3 = function (K) {
    let q = K.size,
      Y = 0,
      z = 0,
      w = 0;
    for (let H = 0; H < q; H++) {
      z = w = 0;
      for (let J = 0; J < q; J++) {
        if (z = z << 1 & 2047 | K.get(H, J), J >= 10 && (z === 1488 || z === 93)) Y++;
        if (w = w << 1 & 2047 | K.get(J, H), J >= 10 && (w === 1488 || w === 93)) Y++;
      }
    }
    return Y * a9A.N3;
  };
  XF2.getPenaltyN4 = function (K) {
    let q = 0,
      Y = K.data.length;
    for (let w = 0; w < Y; w++) q += K.data[w];
    return Math.abs(Math.ceil(q * 100 / Y / 5) - 10) * a9A.N4;
  };
  function OF2(A, K, q) {
    switch (A) {
      case XF2.Patterns.PATTERN000:
        return (K + q) % 2 === 0;
      case XF2.Patterns.PATTERN001:
        return K % 2 === 0;
      case XF2.Patterns.PATTERN010:
        return q % 3 === 0;
      case XF2.Patterns.PATTERN011:
        return (K + q) % 3 === 0;
      case XF2.Patterns.PATTERN100:
        return (Math.floor(K / 2) + Math.floor(q / 3)) % 2 === 0;
      case XF2.Patterns.PATTERN101:
        return K * q % 2 + K * q % 3 === 0;
      case XF2.Patterns.PATTERN110:
        return (K * q % 2 + K * q % 3) % 2 === 0;
      case XF2.Patterns.PATTERN111:
        return (K * q % 3 + (K + q) % 2) % 2 === 0;
      default:
        throw Error("bad maskPattern:" + A);
    }
  }
  XF2.applyMask = function (K, q) {
    let Y = q.size;
    for (let z = 0; z < Y; z++) for (let w = 0; w < Y; w++) {
      if (q.isReserved(w, z)) continue;
      q.xor(w, z, OF2(K, w, z));
    }
  };
  XF2.getBestMask = function (K, q) {
    let Y = Object.keys(XF2.Patterns).length,
      z = 0,
      w = 1 / 0;
    for (let H = 0; H < Y; H++) {
      q(H), XF2.applyMask(H, K);
      let J = XF2.getPenaltyN1(K) + XF2.getPenaltyN2(K) + XF2.getPenaltyN3(K) + XF2.getPenaltyN4(K);
      if (XF2.applyMask(H, K), J < w) w = J, z = H;
    }
    return z;
  };
});

// Register to shared state
__$.jDK = jDK;
