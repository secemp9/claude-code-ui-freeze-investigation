// Module: mg6
// Dependencies: Ce, Tv1, wDK, JDK, XDK, $DK, jDK, jg6, TDK, RDK
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mg6 = v(RQ2 => {
  var yv1 = __$.Ce(),
    hg6 = __$.Tv1(),
    ZQ2 = __$.wDK(),
    WQ2 = __$.JDK(),
    DQ2 = __$.XDK(),
    jQ2 = __$.$DK(),
    ug6 = __$.jDK(),
    Bg6 = __$.jg6(),
    MQ2 = __$.TDK(),
    Rv1 = __$.RDK(),
    PQ2 = __$.IDK(),
    VQ2 = __$.Re(),
    bg6 = __$.nDK();
  function fQ2(A, K) {
    let q = A.size,
      Y = jQ2.getPositions(K);
    for (let z = 0; z < Y.length; z++) {
      let w = Y[z][0],
        H = Y[z][1];
      for (let J = -1; J <= 7; J++) {
        if (w + J <= -1 || q <= w + J) continue;
        for (let O = -1; O <= 7; O++) {
          if (H + O <= -1 || q <= H + O) continue;
          if (J >= 0 && J <= 6 && (O === 0 || O === 6) || O >= 0 && O <= 6 && (J === 0 || J === 6) || J >= 2 && J <= 4 && O >= 2 && O <= 4) A.set(w + J, H + O, !0, !0);else A.set(w + J, H + O, !1, !0);
        }
      }
    }
  }
  function NQ2(A) {
    let K = A.size;
    for (let q = 8; q < K - 8; q++) {
      let Y = q % 2 === 0;
      A.set(q, 6, Y, !0), A.set(6, q, Y, !0);
    }
  }
  function TQ2(A, K) {
    let q = DQ2.getPositions(K);
    for (let Y = 0; Y < q.length; Y++) {
      let z = q[Y][0],
        w = q[Y][1];
      for (let H = -2; H <= 2; H++) for (let J = -2; J <= 2; J++) if (H === -2 || H === 2 || J === -2 || J === 2 || H === 0 && J === 0) A.set(z + H, w + J, !0, !0);else A.set(z + H, w + J, !1, !0);
    }
  }
  function vQ2(A, K) {
    let q = A.size,
      Y = Rv1.getEncodedBits(K),
      z,
      w,
      H;
    for (let J = 0; J < 18; J++) z = Math.floor(J / 3), w = J % 3 + q - 8 - 3, H = (Y >> J & 1) === 1, A.set(z, w, H, !0), A.set(w, z, H, !0);
  }
  function xg6(A, K, q) {
    let Y = A.size,
      z = PQ2.getEncodedBits(K, q),
      w,
      H;
    for (w = 0; w < 15; w++) {
      if (H = (z >> w & 1) === 1, w < 6) A.set(w, 8, H, !0);else if (w < 8) A.set(w + 1, 8, H, !0);else A.set(Y - 15 + w, 8, H, !0);
      if (w < 8) A.set(8, Y - w - 1, H, !0);else if (w < 9) A.set(8, 15 - w - 1 + 1, H, !0);else A.set(8, 15 - w - 1, H, !0);
    }
    A.set(Y - 8, 8, 1, !0);
  }
  function EQ2(A, K) {
    let q = A.size,
      Y = -1,
      z = q - 1,
      w = 7,
      H = 0;
    for (let J = q - 1; J > 0; J -= 2) {
      if (J === 6) J--;
      while (!0) {
        for (let O = 0; O < 2; O++) if (!A.isReserved(z, J - O)) {
          let X = !1;
          if (H < K.length) X = (K[H] >>> w & 1) === 1;
          if (A.set(z, J - O, X), w--, w === -1) H++, w = 7;
        }
        if (z += Y, z < 0 || q <= z) {
          z -= Y, Y = -Y;
          break;
        }
      }
    }
  }
  function kQ2(A, K, q) {
    let Y = new ZQ2();
    q.forEach(function (O) {
      Y.put(O.mode.bit, 4), Y.put(O.getLength(), VQ2.getCharCountIndicator(O.mode, A)), O.write(Y);
    });
    let z = yv1.getSymbolTotalCodewords(A),
      w = Bg6.getTotalCodewordsCount(A, K),
      H = (z - w) * 8;
    if (Y.getLengthInBits() + 4 <= H) Y.put(0, 4);
    while (Y.getLengthInBits() % 8 !== 0) Y.putBit(0);
    let J = (H - Y.getLengthInBits()) / 8;
    for (let O = 0; O < J; O++) Y.put(O % 2 ? 17 : 236, 8);
    return CQ2(Y, A, K);
  }
  function CQ2(A, K, q) {
    let Y = yv1.getSymbolTotalCodewords(K),
      z = Bg6.getTotalCodewordsCount(K, q),
      w = Y - z,
      H = Bg6.getBlocksCount(K, q),
      J = Y % H,
      O = H - J,
      X = Math.floor(Y / H),
      $ = Math.floor(w / H),
      _ = $ + 1,
      G = X - $,
      Z = new MQ2(G),
      W = 0,
      D = Array(H),
      j = Array(H),
      M = 0,
      P = new Uint8Array(A.buffer);
    for (let R = 0; R < H; R++) {
      let x = R < O ? $ : _;
      D[R] = P.slice(W, W + x), j[R] = Z.encode(D[R]), W += x, M = Math.max(M, x);
    }
    let f = new Uint8Array(Y),
      N = 0,
      T,
      C;
    for (T = 0; T < M; T++) for (C = 0; C < H; C++) if (T < D[C].length) f[N++] = D[C][T];
    for (T = 0; T < G; T++) for (C = 0; C < H; C++) f[N++] = j[C][T];
    return f;
  }
  function LQ2(A, K, q, Y) {
    let z;
    if (Array.isArray(A)) z = bg6.fromArray(A);else if (typeof A === "string") {
      let X = K;
      if (!X) {
        let $ = bg6.rawSplit(A);
        X = Rv1.getBestVersionForData($, q);
      }
      z = bg6.fromString(A, X || 40);
    } else throw Error("Invalid data");
    let w = Rv1.getBestVersionForData(z, q);
    if (!w) throw Error("The amount of data is too big to be stored in a QR Code");
    if (!K) K = w;else if (K < w) throw Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + w + `.
`);
    let H = kQ2(K, q, z),
      J = yv1.getSymbolSize(K),
      O = new WQ2(J);
    if (fQ2(O, K), NQ2(O), TQ2(O, K), xg6(O, q, 0), K >= 7) vQ2(O, K);
    if (EQ2(O, H), isNaN(Y)) Y = ug6.getBestMask(O, xg6.bind(null, O, q));
    return ug6.applyMask(Y, O), xg6(O, q, Y), {
      modules: O,
      version: K,
      errorCorrectionLevel: q,
      maskPattern: Y,
      segments: z
    };
  }
  RQ2.create = function (K, q) {
    if (typeof K > "u" || K === "") throw Error("No input text");
    let Y = hg6.M,
      z,
      w;
    if (typeof q < "u") {
      if (Y = hg6.from(q.errorCorrectionLevel, hg6.M), z = Rv1.from(q.version), w = ug6.from(q.maskPattern), q.toSJISFunc) yv1.setToSJISFunction(q.toSJISFunc);
    }
    return LQ2(K, z, Y, w);
  };
});

// Register to shared state
__$.mg6 = mg6;
