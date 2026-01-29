// Module: eS4
// Dependencies: c96, eIA, ASA, A96, WY, AY6, KY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eS4 = v(PN9 => {
  var oS4 = __$.c96(),
    _N9 = __$.eIA(),
    wSA = __$.ASA(),
    GN9 = __$.A96(),
    ZN9 = __$.WY(),
    WN9 = __$.AY6(),
    aS4 = __$.KY6();
  function sS4(A) {
    let K = A.prettyErrors !== !1;
    return {
      lineCounter: A.lineCounter || K && new WN9.LineCounter() || null,
      prettyErrors: K
    };
  }
  function DN9(A, K = {}) {
    let {
        lineCounter: q,
        prettyErrors: Y
      } = sS4(K),
      z = new aS4.Parser(q?.addNewLine),
      w = new oS4.Composer(K),
      H = Array.from(w.compose(z.parse(A)));
    if (Y && q) for (let J of H) J.errors.forEach(wSA.prettifyError(A, q)), J.warnings.forEach(wSA.prettifyError(A, q));
    if (H.length > 0) return H;
    return Object.assign([], {
      empty: !0
    }, w.streamInfo());
  }
  function tS4(A, K = {}) {
    let {
        lineCounter: q,
        prettyErrors: Y
      } = sS4(K),
      z = new aS4.Parser(q?.addNewLine),
      w = new oS4.Composer(K),
      H = null;
    for (let J of w.compose(z.parse(A), !0, A.length)) if (!H) H = J;else if (H.options.logLevel !== "silent") {
      H.errors.push(new wSA.YAMLParseError(J.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
    if (Y && q) H.errors.forEach(wSA.prettifyError(A, q)), H.warnings.forEach(wSA.prettifyError(A, q));
    return H;
  }
  function jN9(A, K, q) {
    let Y = void 0;
    if (typeof K === "function") Y = K;else if (q === void 0 && K && typeof K === "object") q = K;
    let z = tS4(A, q);
    if (!z) return null;
    if (z.warnings.forEach(w => GN9.warn(z.options.logLevel, w)), z.errors.length > 0) if (z.options.logLevel !== "silent") throw z.errors[0];else z.errors = [];
    return z.toJS(Object.assign({
      reviver: Y
    }, q));
  }
  function MN9(A, K, q) {
    let Y = null;
    if (typeof K === "function" || Array.isArray(K)) Y = K;else if (q === void 0 && K) q = K;
    if (typeof q === "string") q = q.length;
    if (typeof q === "number") {
      let z = Math.round(q);
      q = z < 1 ? void 0 : z > 8 ? {
        indent: 8
      } : {
        indent: z
      };
    }
    if (A === void 0) {
      let {
        keepUndefined: z
      } = q ?? K ?? {};
      if (!z) return;
    }
    if (ZN9.isDocument(A) && !Y) return A.toString(q);
    return new _N9.Document(A, Y, q).toString(q);
  }
  PN9.parse = jN9;
  PN9.parseAllDocuments = DN9;
  PN9.parseDocument = tS4;
  PN9.stringify = MN9;
});

// Register to shared state
__$.eS4 = eS4;
