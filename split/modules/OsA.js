// Module: OsA
// Dependencies: JsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var OsA = v(zD8 => {
  Object.defineProperty(zD8, "__esModule", {
    value: !0
  });
  var AD8 = __$.JsA(),
    KD8 = 50,
    tW8 = /\(error: (.*)\)/,
    eW8 = /captureMessage|captureException/;
  function qD8(...A) {
    let K = A.sort((q, Y) => q[0] - Y[0]).map(q => q[1]);
    return (q, Y = 0) => {
      let z = [],
        w = q.split(`
`);
      for (let H = Y; H < w.length; H++) {
        let J = w[H];
        if (J.length > 1024) continue;
        let O = tW8.test(J) ? J.replace(tW8, "$1") : J;
        if (O.match(/\S*Error: /)) continue;
        for (let X of K) {
          let $ = X(O);
          if ($) {
            z.push($);
            break;
          }
        }
        if (z.length >= KD8) break;
      }
      return YD8(z);
    };
  }
  function bCq(A) {
    if (Array.isArray(A)) return qD8(...A);
    return A;
  }
  function YD8(A) {
    if (!A.length) return [];
    let K = Array.from(A);
    if (/sentryWrapped/.test(K[K.length - 1].function || "")) K.pop();
    if (K.reverse(), eW8.test(K[K.length - 1].function || "")) {
      if (K.pop(), eW8.test(K[K.length - 1].function || "")) K.pop();
    }
    return K.slice(0, KD8).map(q => ({
      ...q,
      filename: q.filename || K[K.length - 1].filename,
      function: q.function || "?"
    }));
  }
  var Gu1 = "<anonymous>";
  function xCq(A) {
    try {
      if (!A || typeof A !== "function") return Gu1;
      return A.name || Gu1;
    } catch (K) {
      return Gu1;
    }
  }
  function uCq(A) {
    return [90, AD8.node(A)];
  }
  zD8.filenameIsInApp = AD8.filenameIsInApp;
  zD8.createStackParser = qD8;
  zD8.getFunctionName = xCq;
  zD8.nodeStackLineParser = uCq;
  zD8.stackParserFromStackParserOptions = bCq;
  zD8.stripSentryFramesAndReverse = YD8;
});

// Register to shared state
__$.OsA = OsA;
