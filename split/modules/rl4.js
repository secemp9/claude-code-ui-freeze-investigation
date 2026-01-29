// Module: rl4
// Dependencies: gl4, Ql4, Ul4, dl4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rl4 = v((uNw, nl4) => {
  var gw6 = __$.gl4(),
    HC = __$.Ql4(),
    cl4 = __$.Ul4(),
    {
      STATUS_MAPPING: zo
    } = __$.dl4();
  function mw6(A) {
    return /[^\x00-\x7F]/u.test(A);
  }
  function ll4(A) {
    let K = 0,
      q = cl4.length - 1;
    while (K <= q) {
      let Y = Math.floor((K + q) / 2),
        z = cl4[Y],
        w = Array.isArray(z[0]) ? z[0][0] : z[0],
        H = Array.isArray(z[0]) ? z[0][1] : z[0];
      if (w <= A && H >= A) return z.slice(1);else if (w > A) q = Y - 1;else K = Y + 1;
    }
    return null;
  }
  function Mi9(A, {
    transitionalProcessing: K
  }) {
    let q = "";
    for (let Y of A) {
      let [z, w] = ll4(Y.codePointAt(0));
      switch (z) {
        case zo.disallowed:
          q += Y;
          break;
        case zo.ignored:
          break;
        case zo.mapped:
          if (K && Y === "ẞ") q += "ss";else q += w;
          break;
        case zo.deviation:
          if (K) q += w;else q += Y;
          break;
        case zo.valid:
          q += Y;
          break;
      }
    }
    return q;
  }
  function Pi9(A, {
    checkHyphens: K,
    checkBidi: q,
    checkJoiners: Y,
    transitionalProcessing: z,
    useSTD3ASCIIRules: w,
    isBidi: H
  }) {
    if (A.length === 0) return !0;
    if (A.normalize("NFC") !== A) return !1;
    let J = Array.from(A);
    if (K) {
      if (J[2] === "-" && J[3] === "-" || A.startsWith("-") || A.endsWith("-")) return !1;
    }
    if (!K) {
      if (A.startsWith("xn--")) return !1;
    }
    if (A.includes(".")) return !1;
    if (HC.combiningMarks.test(J[0])) return !1;
    for (let O of J) {
      let X = O.codePointAt(0),
        [$] = ll4(X);
      if (z) {
        if ($ !== zo.valid) return !1;
      } else if ($ !== zo.valid && $ !== zo.deviation) return !1;
      if (w && X <= 127) {
        if (!/^(?:[a-z]|[0-9]|-)$/u.test(O)) return !1;
      }
    }
    if (Y) {
      let O = 0;
      for (let [X, $] of J.entries()) if ($ === "‌" || $ === "‍") {
        if (X > 0) {
          if (HC.combiningClassVirama.test(J[X - 1])) continue;
          if ($ === "‌") {
            let _ = J.indexOf("‌", X + 1),
              G = _ < 0 ? J.slice(O) : J.slice(O, _);
            if (HC.validZWNJ.test(G.join(""))) {
              O = X + 1;
              continue;
            }
          }
        }
        return !1;
      }
    }
    if (q && H) {
      let O;
      if (HC.bidiS1LTR.test(J[0])) O = !1;else if (HC.bidiS1RTL.test(J[0])) O = !0;else return !1;
      if (O) {
        if (!HC.bidiS2.test(A) || !HC.bidiS3.test(A) || HC.bidiS4EN.test(A) && HC.bidiS4AN.test(A)) return !1;
      } else if (!HC.bidiS5.test(A) || !HC.bidiS6.test(A)) return !1;
    }
    return !0;
  }
  function Vi9(A) {
    let K = A.map(q => {
      if (q.startsWith("xn--")) try {
        return gw6.decode(q.substring(4));
      } catch {
        return "";
      }
      return q;
    }).join(".");
    return HC.bidiDomain.test(K);
  }
  function il4(A, K) {
    let q = Mi9(A, K);
    q = q.normalize("NFC");
    let Y = q.split("."),
      z = Vi9(Y),
      w = !1;
    for (let [H, J] of Y.entries()) {
      let O = J,
        X = K.transitionalProcessing;
      if (O.startsWith("xn--")) {
        if (mw6(O)) {
          w = !0;
          continue;
        }
        try {
          O = gw6.decode(O.substring(4));
        } catch {
          if (!K.ignoreInvalidPunycode) {
            w = !0;
            continue;
          }
        }
        if (Y[H] = O, O === "" || !mw6(O)) w = !0;
        X = !1;
      }
      if (w) continue;
      if (!Pi9(O, {
        ...K,
        transitionalProcessing: X,
        isBidi: z
      })) w = !0;
    }
    return {
      string: Y.join("."),
      error: w
    };
  }
  function fi9(A, {
    checkHyphens: K = !1,
    checkBidi: q = !1,
    checkJoiners: Y = !1,
    useSTD3ASCIIRules: z = !1,
    verifyDNSLength: w = !1,
    transitionalProcessing: H = !1,
    ignoreInvalidPunycode: J = !1
  } = {}) {
    let O = il4(A, {
        checkHyphens: K,
        checkBidi: q,
        checkJoiners: Y,
        useSTD3ASCIIRules: z,
        transitionalProcessing: H,
        ignoreInvalidPunycode: J
      }),
      X = O.string.split(".");
    if (X = X.map($ => {
      if (mw6($)) try {
        return `xn--${gw6.encode($)}`;
      } catch {
        O.error = !0;
      }
      return $;
    }), w) {
      let $ = X.join(".").length;
      if ($ > 253 || $ === 0) O.error = !0;
      for (let _ = 0; _ < X.length; ++_) if (X[_].length > 63 || X[_].length === 0) {
        O.error = !0;
        break;
      }
    }
    if (O.error) return null;
    return X.join(".");
  }
  function Ni9(A, {
    checkHyphens: K = !1,
    checkBidi: q = !1,
    checkJoiners: Y = !1,
    useSTD3ASCIIRules: z = !1,
    transitionalProcessing: w = !1,
    ignoreInvalidPunycode: H = !1
  } = {}) {
    let J = il4(A, {
      checkHyphens: K,
      checkBidi: q,
      checkJoiners: Y,
      useSTD3ASCIIRules: z,
      transitionalProcessing: w,
      ignoreInvalidPunycode: H
    });
    return {
      domain: J.string,
      error: J.error
    };
  }
  nl4.exports = {
    toASCII: fi9,
    toUnicode: Ni9
  };
});

// Register to shared state
__$.rl4 = rl4;
