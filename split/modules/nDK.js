// Module: nDK
// Dependencies: Re, hDK, xDK, BDK, gDK, fg6, Ce, FDK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nDK = v($Q2 => {
  var a2 = __$.Re(),
    pDK = __$.hDK(),
    dDK = __$.xDK(),
    cDK = __$.BDK(),
    lDK = __$.gDK(),
    LdA = __$.fg6(),
    Lv1 = __$.Ce(),
    HQ2 = __$.FDK();
  function QDK(A) {
    return unescape(encodeURIComponent(A)).length;
  }
  function RdA(A, K, q) {
    let Y = [],
      z;
    while ((z = A.exec(q)) !== null) Y.push({
      data: z[0],
      index: z.index,
      mode: K,
      length: z[0].length
    });
    return Y;
  }
  function iDK(A) {
    let K = RdA(LdA.NUMERIC, a2.NUMERIC, A),
      q = RdA(LdA.ALPHANUMERIC, a2.ALPHANUMERIC, A),
      Y,
      z;
    if (Lv1.isKanjiModeEnabled()) Y = RdA(LdA.BYTE, a2.BYTE, A), z = RdA(LdA.KANJI, a2.KANJI, A);else Y = RdA(LdA.BYTE_KANJI, a2.BYTE, A), z = [];
    return K.concat(q, Y, z).sort(function (H, J) {
      return H.index - J.index;
    }).map(function (H) {
      return {
        data: H.data,
        mode: H.mode,
        length: H.length
      };
    });
  }
  function Ig6(A, K) {
    switch (K) {
      case a2.NUMERIC:
        return pDK.getBitsLength(A);
      case a2.ALPHANUMERIC:
        return dDK.getBitsLength(A);
      case a2.KANJI:
        return lDK.getBitsLength(A);
      case a2.BYTE:
        return cDK.getBitsLength(A);
    }
  }
  function JQ2(A) {
    return A.reduce(function (K, q) {
      let Y = K.length - 1 >= 0 ? K[K.length - 1] : null;
      if (Y && Y.mode === q.mode) return K[K.length - 1].data += q.data, K;
      return K.push(q), K;
    }, []);
  }
  function OQ2(A) {
    let K = [];
    for (let q = 0; q < A.length; q++) {
      let Y = A[q];
      switch (Y.mode) {
        case a2.NUMERIC:
          K.push([Y, {
            data: Y.data,
            mode: a2.ALPHANUMERIC,
            length: Y.length
          }, {
            data: Y.data,
            mode: a2.BYTE,
            length: Y.length
          }]);
          break;
        case a2.ALPHANUMERIC:
          K.push([Y, {
            data: Y.data,
            mode: a2.BYTE,
            length: Y.length
          }]);
          break;
        case a2.KANJI:
          K.push([Y, {
            data: Y.data,
            mode: a2.BYTE,
            length: QDK(Y.data)
          }]);
          break;
        case a2.BYTE:
          K.push([{
            data: Y.data,
            mode: a2.BYTE,
            length: QDK(Y.data)
          }]);
      }
    }
    return K;
  }
  function XQ2(A, K) {
    let q = {},
      Y = {
        start: {}
      },
      z = ["start"];
    for (let w = 0; w < A.length; w++) {
      let H = A[w],
        J = [];
      for (let O = 0; O < H.length; O++) {
        let X = H[O],
          $ = "" + w + O;
        J.push($), q[$] = {
          node: X,
          lastCount: 0
        }, Y[$] = {};
        for (let _ = 0; _ < z.length; _++) {
          let G = z[_];
          if (q[G] && q[G].node.mode === X.mode) Y[G][$] = Ig6(q[G].lastCount + X.length, X.mode) - Ig6(q[G].lastCount, X.mode), q[G].lastCount += X.length;else {
            if (q[G]) q[G].lastCount = X.length;
            Y[G][$] = Ig6(X.length, X.mode) + 4 + a2.getCharCountIndicator(X.mode, K);
          }
        }
      }
      z = J;
    }
    for (let w = 0; w < z.length; w++) Y[z[w]].end = 0;
    return {
      map: Y,
      table: q
    };
  }
  function UDK(A, K) {
    let q,
      Y = a2.getBestModeForData(A);
    if (q = a2.from(K, Y), q !== a2.BYTE && q.bit < Y.bit) throw Error('"' + A + '" cannot be encoded with mode ' + a2.toString(q) + `.
 Suggested mode is: ` + a2.toString(Y));
    if (q === a2.KANJI && !Lv1.isKanjiModeEnabled()) q = a2.BYTE;
    switch (q) {
      case a2.NUMERIC:
        return new pDK(A);
      case a2.ALPHANUMERIC:
        return new dDK(A);
      case a2.KANJI:
        return new lDK(A);
      case a2.BYTE:
        return new cDK(A);
    }
  }
  $Q2.fromArray = function (K) {
    return K.reduce(function (q, Y) {
      if (typeof Y === "string") q.push(UDK(Y, null));else if (Y.data) q.push(UDK(Y.data, Y.mode));
      return q;
    }, []);
  };
  $Q2.fromString = function (K, q) {
    let Y = iDK(K, Lv1.isKanjiModeEnabled()),
      z = OQ2(Y),
      w = XQ2(z, q),
      H = HQ2.find_path(w.map, "start", "end"),
      J = [];
    for (let O = 1; O < H.length - 1; O++) J.push(w.table[H[O]].node);
    return $Q2.fromArray(JQ2(J));
  };
  $Q2.rawSplit = function (K) {
    return $Q2.fromArray(iDK(K, Lv1.isKanjiModeEnabled()));
  };
});

// Register to shared state
__$.nDK = nDK;
