// Module: Y96
// Dependencies: A96, g91, dIA, WY, Sr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y96 = v(TD9 => {
  var PD9 = __$.A96(),
    fI4 = __$.g91(),
    VD9 = __$.dIA(),
    NI4 = __$.WY(),
    q96 = __$.Sr();
  function fD9(A, K, {
    key: q,
    value: Y
  }) {
    if (NI4.isNode(q) && q.addToJSMap) q.addToJSMap(A, K, Y);else if (fI4.isMergeKey(A, q)) fI4.addMergeToJSMap(A, K, Y);else {
      let z = q96.toJS(q, "", A);
      if (K instanceof Map) K.set(z, q96.toJS(Y, z, A));else if (K instanceof Set) K.add(z);else {
        let w = ND9(q, z, A),
          H = q96.toJS(Y, w, A);
        if (w in K) Object.defineProperty(K, w, {
          value: H,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });else K[w] = H;
      }
    }
    return K;
  }
  function ND9(A, K, q) {
    if (K === null) return "";
    if (typeof K !== "object") return String(K);
    if (NI4.isNode(A) && q?.doc) {
      let Y = VD9.createStringifyContext(q.doc, {});
      Y.anchors = new Set();
      for (let w of q.anchors.keys()) Y.anchors.add(w.anchor);
      Y.inFlow = !0, Y.inStringifyKey = !0;
      let z = A.toString(Y);
      if (!q.mapKeyWarned) {
        let w = JSON.stringify(z);
        if (w.length > 40) w = w.substring(0, 36) + '..."';
        PD9.warn(q.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${w}. Set mapAsMap: true to use object keys.`), q.mapKeyWarned = !0;
      }
      return z;
    }
    return JSON.stringify(K);
  }
  TD9.addPairToJSMap = fD9;
});

// Register to shared state
__$.Y96 = Y96;
