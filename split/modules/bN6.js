// Module: bN6
// Dependencies: HDA, zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bN6 = v((zDH, tL7) => {
  var sL7 = __$.HDA(),
    PiY = __$.zj(),
    ViY = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function fiY(A) {
    if (A === null) return !1;
    if (!ViY.test(A) || A[A.length - 1] === "_") return !1;
    return !0;
  }
  function NiY(A) {
    var K, q;
    if (K = A.replace(/_/g, "").toLowerCase(), q = K[0] === "-" ? -1 : 1, "+-".indexOf(K[0]) >= 0) K = K.slice(1);
    if (K === ".inf") return q === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;else if (K === ".nan") return NaN;
    return q * parseFloat(K, 10);
  }
  var TiY = /^[-+]?[0-9]+e/;
  function viY(A, K) {
    var q;
    if (isNaN(A)) switch (K) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    } else if (Number.POSITIVE_INFINITY === A) switch (K) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    } else if (Number.NEGATIVE_INFINITY === A) switch (K) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    } else if (sL7.isNegativeZero(A)) return "-0.0";
    return q = A.toString(10), TiY.test(q) ? q.replace("e", ".e") : q;
  }
  function EiY(A) {
    return Object.prototype.toString.call(A) === "[object Number]" && (A % 1 !== 0 || sL7.isNegativeZero(A));
  }
  tL7.exports = new PiY("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: fiY,
    construct: NiY,
    predicate: EiY,
    represent: viY,
    defaultStyle: "lowercase"
  });
});

// Register to shared state
__$.bN6 = bN6;
