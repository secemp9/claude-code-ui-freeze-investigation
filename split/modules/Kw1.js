// Module: Kw1
// Dependencies: Wu, Do4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kw1 = v((bTw, No4) => {
  var tz1 = __$.Wu().Buffer,
    Mo4 = __$.Do4(),
    ez1 = 128,
    Po4 = 0,
    Is9 = 32,
    Ss9 = 16,
    hs9 = 2,
    Vo4 = Ss9 | Is9 | Po4 << 6,
    Aw1 = hs9 | Po4 << 6;
  function bs9(A) {
    return A.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function fo4(A) {
    if (tz1.isBuffer(A)) return A;else if (typeof A === "string") return tz1.from(A, "base64");
    throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function xs9(A, K) {
    A = fo4(A);
    var q = Mo4(K),
      Y = q + 1,
      z = A.length,
      w = 0;
    if (A[w++] !== Vo4) throw Error('Could not find expected "seq"');
    var H = A[w++];
    if (H === (ez1 | 1)) H = A[w++];
    if (z - w < H) throw Error('"seq" specified length of "' + H + '", only "' + (z - w) + '" remaining');
    if (A[w++] !== Aw1) throw Error('Could not find expected "int" for "r"');
    var J = A[w++];
    if (z - w - 2 < J) throw Error('"r" specified length of "' + J + '", only "' + (z - w - 2) + '" available');
    if (Y < J) throw Error('"r" specified length of "' + J + '", max of "' + Y + '" is acceptable');
    var O = w;
    if (w += J, A[w++] !== Aw1) throw Error('Could not find expected "int" for "s"');
    var X = A[w++];
    if (z - w !== X) throw Error('"s" specified length of "' + X + '", expected "' + (z - w) + '"');
    if (Y < X) throw Error('"s" specified length of "' + X + '", max of "' + Y + '" is acceptable');
    var $ = w;
    if (w += X, w !== z) throw Error('Expected to consume entire buffer, but "' + (z - w) + '" bytes remain');
    var _ = q - J,
      G = q - X,
      Z = tz1.allocUnsafe(_ + J + G + X);
    for (w = 0; w < _; ++w) Z[w] = 0;
    A.copy(Z, w, O + Math.max(-_, 0), O + J), w = q;
    for (var W = w; w < W + G; ++w) Z[w] = 0;
    return A.copy(Z, w, $ + Math.max(-G, 0), $ + X), Z = Z.toString("base64"), Z = bs9(Z), Z;
  }
  function jo4(A, K, q) {
    var Y = 0;
    while (K + Y < q && A[K + Y] === 0) ++Y;
    var z = A[K + Y] >= ez1;
    if (z) --Y;
    return Y;
  }
  function us9(A, K) {
    A = fo4(A);
    var q = Mo4(K),
      Y = A.length;
    if (Y !== q * 2) throw TypeError('"' + K + '" signatures must be "' + q * 2 + '" bytes, saw "' + Y + '"');
    var z = jo4(A, 0, q),
      w = jo4(A, q, A.length),
      H = q - z,
      J = q - w,
      O = 2 + H + 1 + 1 + J,
      X = O < ez1,
      $ = tz1.allocUnsafe((X ? 2 : 3) + O),
      _ = 0;
    if ($[_++] = Vo4, X) $[_++] = O;else $[_++] = ez1 | 1, $[_++] = O & 255;
    if ($[_++] = Aw1, $[_++] = H, z < 0) $[_++] = 0, _ += A.copy($, _, 0, q);else _ += A.copy($, _, z, q);
    if ($[_++] = Aw1, $[_++] = J, w < 0) $[_++] = 0, A.copy($, _, q);else A.copy($, _, q + w);
    return $;
  }
  No4.exports = {
    derToJose: xs9,
    joseToDer: us9
  };
});

// Register to shared state
__$.Kw1 = Kw1;
