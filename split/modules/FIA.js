// Module: FIA
// Dependencies: gIA, WY, q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FIA = v(EW9 => {
  var fW9 = __$.gIA(),
    e4A = __$.WY(),
    XI4 = __$.q$(),
    NW9 = "tag:yaml.org,2002:";
  function TW9(A, K, q) {
    if (K) {
      let Y = q.filter(w => w.tag === K),
        z = Y.find(w => !w.format) ?? Y[0];
      if (!z) throw Error(`Tag ${K} not found`);
      return z;
    }
    return q.find(Y => Y.identify?.(A) && !Y.format);
  }
  function vW9(A, K, q) {
    if (e4A.isDocument(A)) A = A.contents;
    if (e4A.isNode(A)) return A;
    if (e4A.isPair(A)) {
      let _ = q.schema[e4A.MAP].createNode?.(q.schema, null, q);
      return _.items.push(A), _;
    }
    if (A instanceof String || A instanceof Number || A instanceof Boolean || typeof BigInt < "u" && A instanceof BigInt) A = A.valueOf();
    let {
        aliasDuplicateObjects: Y,
        onAnchor: z,
        onTagObj: w,
        schema: H,
        sourceObjects: J
      } = q,
      O = void 0;
    if (Y && A && typeof A === "object") if (O = J.get(A), O) return O.anchor ?? (O.anchor = z(A)), new fW9.Alias(O.anchor);else O = {
      anchor: null,
      node: null
    }, J.set(A, O);
    if (K?.startsWith("!!")) K = NW9 + K.slice(2);
    let X = TW9(A, K, H.tags);
    if (!X) {
      if (A && typeof A.toJSON === "function") A = A.toJSON();
      if (!A || typeof A !== "object") {
        let _ = new XI4.Scalar(A);
        if (O) O.node = _;
        return _;
      }
      X = A instanceof Map ? H[e4A.MAP] : Symbol.iterator in Object(A) ? H[e4A.SEQ] : H[e4A.MAP];
    }
    if (w) w(X), delete q.onTagObj;
    let $ = X?.createNode ? X.createNode(q.schema, A, q) : typeof X?.nodeClass?.from === "function" ? X.nodeClass.from(q.schema, A, q) : new XI4.Scalar(A);
    if (K) $.tag = K;else if (!X.default) $.tag = X.tag;
    if (O) O.node = $;
    return $;
  }
  EW9.createNode = vW9;
});

// Register to shared state
__$.FIA = FIA;
