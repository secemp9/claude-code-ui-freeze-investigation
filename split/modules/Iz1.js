// Module: Iz1
// Dependencies: Qw6, yz1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iz1 = v((gNw, zi4) => {
  var {
      isASCIIHex: tl4
    } = __$.Qw6(),
    {
      utf8Encode: el4
    } = __$.yz1();
  function HY(A) {
    return A.codePointAt(0);
  }
  function Ri9(A) {
    let K = A.toString(16).toUpperCase();
    if (K.length === 1) K = `0${K}`;
    return `%${K}`;
  }
  function Ai4(A) {
    let K = new Uint8Array(A.byteLength),
      q = 0;
    for (let Y = 0; Y < A.byteLength; ++Y) {
      let z = A[Y];
      if (z !== 37) K[q++] = z;else if (z === 37 && (!tl4(A[Y + 1]) || !tl4(A[Y + 2]))) K[q++] = z;else {
        let w = parseInt(String.fromCodePoint(A[Y + 1], A[Y + 2]), 16);
        K[q++] = w, Y += 2;
      }
    }
    return K.slice(0, q);
  }
  function yi9(A) {
    let K = el4(A);
    return Ai4(K);
  }
  function Uw6(A) {
    return A <= 31 || A > 126;
  }
  var Ii9 = new Set([HY(" "), HY('"'), HY("<"), HY(">"), HY("`")]);
  function Si9(A) {
    return Uw6(A) || Ii9.has(A);
  }
  var hi9 = new Set([HY(" "), HY('"'), HY("#"), HY("<"), HY(">")]);
  function pw6(A) {
    return Uw6(A) || hi9.has(A);
  }
  function bi9(A) {
    return pw6(A) || A === HY("'");
  }
  var xi9 = new Set([HY("?"), HY("`"), HY("{"), HY("}"), HY("^")]);
  function Ki4(A) {
    return pw6(A) || xi9.has(A);
  }
  var ui9 = new Set([HY("/"), HY(":"), HY(";"), HY("="), HY("@"), HY("["), HY("\\"), HY("]"), HY("|")]);
  function qi4(A) {
    return Ki4(A) || ui9.has(A);
  }
  var Bi9 = new Set([HY("$"), HY("%"), HY("&"), HY("+"), HY(",")]);
  function mi9(A) {
    return qi4(A) || Bi9.has(A);
  }
  var gi9 = new Set([HY("!"), HY("'"), HY("("), HY(")"), HY("~")]);
  function Fi9(A) {
    return mi9(A) || gi9.has(A);
  }
  function Yi4(A, K) {
    let q = el4(A),
      Y = "";
    for (let z of q) if (!K(z)) Y += String.fromCharCode(z);else Y += Ri9(z);
    return Y;
  }
  function Qi9(A, K) {
    return Yi4(String.fromCodePoint(A), K);
  }
  function Ui9(A, K, q = !1) {
    let Y = "";
    for (let z of A) if (q && z === " ") Y += "+";else Y += Yi4(z, K);
    return Y;
  }
  zi4.exports = {
    isC0ControlPercentEncode: Uw6,
    isFragmentPercentEncode: Si9,
    isQueryPercentEncode: pw6,
    isSpecialQueryPercentEncode: bi9,
    isPathPercentEncode: Ki4,
    isUserinfoPercentEncode: qi4,
    isURLEncodedPercentEncode: Fi9,
    percentDecodeString: yi9,
    percentDecodeBytes: Ai4,
    utf8PercentEncodeString: Ui9,
    utf8PercentEncodeCodePoint: Qi9
  };
});

// Register to shared state
__$.Iz1 = Iz1;
