// Module: g91
// Dependencies: WY, q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g91 = v(WD9 => {
  var lIA = __$.WY(),
    PI4 = __$.q$(),
    B91 = "<<",
    m91 = {
      identify: A => A === B91 || typeof A === "symbol" && A.description === B91,
      default: "key",
      tag: "tag:yaml.org,2002:merge",
      test: /^<<$/,
      resolve: () => Object.assign(new PI4.Scalar(Symbol(B91)), {
        addToJSMap: VI4
      }),
      stringify: () => B91
    },
    ZD9 = (A, K) => (m91.identify(K) || lIA.isScalar(K) && (!K.type || K.type === PI4.Scalar.PLAIN) && m91.identify(K.value)) && A?.doc.schema.tags.some(q => q.tag === m91.tag && q.default);
  function VI4(A, K, q) {
    if (q = A && lIA.isAlias(q) ? q.resolve(A.doc) : q, lIA.isSeq(q)) for (let Y of q.items) K96(A, K, Y);else if (Array.isArray(q)) for (let Y of q) K96(A, K, Y);else K96(A, K, q);
  }
  function K96(A, K, q) {
    let Y = A && lIA.isAlias(q) ? q.resolve(A.doc) : q;
    if (!lIA.isMap(Y)) throw Error("Merge sources must be maps or map aliases");
    let z = Y.toJSON(null, A, Map);
    for (let [w, H] of z) if (K instanceof Map) {
      if (!K.has(w)) K.set(w, H);
    } else if (K instanceof Set) K.add(w);else if (!Object.prototype.hasOwnProperty.call(K, w)) Object.defineProperty(K, w, {
      value: H,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
    return K;
  }
  WD9.addMergeToJSMap = VI4;
  WD9.isMergeKey = ZD9;
  WD9.merge = m91;
});

// Register to shared state
__$.g91 = g91;
