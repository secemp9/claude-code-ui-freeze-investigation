// Module: ow6
// Dependencies: yz1, Iz1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ow6 = v((FNw, ki4) => {
  var {
      utf8Encode: En9,
      utf8DecodeWithoutBOM: Vi4
    } = __$.yz1(),
    {
      percentDecodeBytes: fi4,
      utf8PercentEncodeString: Ni4,
      isURLEncodedPercentEncode: Ti4
    } = __$.Iz1();
  function vi4(A) {
    return A.codePointAt(0);
  }
  function kn9(A) {
    let K = Rn9(A, vi4("&")),
      q = [];
    for (let Y of K) {
      if (Y.length === 0) continue;
      let z,
        w,
        H = Y.indexOf(vi4("="));
      if (H >= 0) z = Y.slice(0, H), w = Y.slice(H + 1);else z = Y, w = new Uint8Array(0);
      z = Ei4(z, 43, 32), w = Ei4(w, 43, 32);
      let J = Vi4(fi4(z)),
        O = Vi4(fi4(w));
      q.push([J, O]);
    }
    return q;
  }
  function Cn9(A) {
    return kn9(En9(A));
  }
  function Ln9(A) {
    let K = "";
    for (let [q, Y] of A.entries()) {
      let z = Ni4(Y[0], Ti4, !0),
        w = Ni4(Y[1], Ti4, !0);
      if (q !== 0) K += "&";
      K += `${z}=${w}`;
    }
    return K;
  }
  function Rn9(A, K) {
    let q = [],
      Y = 0,
      z = A.indexOf(K);
    while (z >= 0) q.push(A.slice(Y, z)), Y = z + 1, z = A.indexOf(K, Y);
    if (Y !== A.length) q.push(A.slice(Y));
    return q;
  }
  function Ei4(A, K, q) {
    let Y = A.indexOf(K);
    while (Y >= 0) A[Y] = q, Y = A.indexOf(K, Y + 1);
    return A;
  }
  ki4.exports = {
    parseUrlencodedString: Cn9,
    serializeUrlencoded: Ln9
  };
});

// Register to shared state
__$.ow6 = ow6;
