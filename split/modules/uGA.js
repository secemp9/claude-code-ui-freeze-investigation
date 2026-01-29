// Module: uGA
// Dependencies: eU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uGA = v((Jow, NO1) => {
  var {
      isUtf8: c37
    } = CA("buffer"),
    {
      hasBlob: WwY
    } = __$.eU(),
    DwY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
  function jwY(A) {
    return A >= 1000 && A <= 1014 && A !== 1004 && A !== 1005 && A !== 1006 || A >= 3000 && A <= 4999;
  }
  function wG6(A) {
    let K = A.length,
      q = 0;
    while (q < K) if ((A[q] & 128) === 0) q++;else if ((A[q] & 224) === 192) {
      if (q + 1 === K || (A[q + 1] & 192) !== 128 || (A[q] & 254) === 192) return !1;
      q += 2;
    } else if ((A[q] & 240) === 224) {
      if (q + 2 >= K || (A[q + 1] & 192) !== 128 || (A[q + 2] & 192) !== 128 || A[q] === 224 && (A[q + 1] & 224) === 128 || A[q] === 237 && (A[q + 1] & 224) === 160) return !1;
      q += 3;
    } else if ((A[q] & 248) === 240) {
      if (q + 3 >= K || (A[q + 1] & 192) !== 128 || (A[q + 2] & 192) !== 128 || (A[q + 3] & 192) !== 128 || A[q] === 240 && (A[q + 1] & 240) === 128 || A[q] === 244 && A[q + 1] > 143 || A[q] > 244) return !1;
      q += 4;
    } else return !1;
    return !0;
  }
  function MwY(A) {
    return WwY && typeof A === "object" && typeof A.arrayBuffer === "function" && typeof A.type === "string" && typeof A.stream === "function" && (A[Symbol.toStringTag] === "Blob" || A[Symbol.toStringTag] === "File");
  }
  NO1.exports = {
    isBlob: MwY,
    isValidStatusCode: jwY,
    isValidUTF8: wG6,
    tokenChars: DwY
  };
  if (c37) NO1.exports.isValidUTF8 = function (A) {
    return A.length < 24 ? wG6(A) : c37(A);
  };else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
    let A = (() => {
      throw new Error("Cannot require module " + "utf-8-validate");
    })();
    NO1.exports.isValidUTF8 = function (K) {
      return K.length < 32 ? wG6(K) : A(K);
    };
  } catch (A) {}
});

// Register to shared state
__$.uGA = uGA;
