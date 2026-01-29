// Module: ES4
// Dependencies: WY, q$, Q96, p96

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ES4 = v(cV9 => {
  var Y7A = __$.WY(),
    vS4 = __$.q$(),
    FV9 = __$.Q96(),
    QV9 = __$.p96();
  function UV9(A, K, q, Y) {
    let {
        value: z,
        type: w,
        comment: H,
        range: J
      } = K.type === "block-scalar" ? FV9.resolveBlockScalar(A, K, Y) : QV9.resolveFlowScalar(K, A.options.strict, Y),
      O = q ? A.directives.tagName(q.source, _ => Y(q, "TAG_RESOLVE_FAILED", _)) : null,
      X;
    if (A.options.stringKeys && A.atKey) X = A.schema[Y7A.SCALAR];else if (O) X = pV9(A.schema, z, O, q, Y);else if (K.type === "scalar") X = dV9(A, z, K, Y);else X = A.schema[Y7A.SCALAR];
    let $;
    try {
      let _ = X.resolve(z, G => Y(q ?? K, "TAG_RESOLVE_FAILED", G), A.options);
      $ = Y7A.isScalar(_) ? _ : new vS4.Scalar(_);
    } catch (_) {
      let G = _ instanceof Error ? _.message : String(_);
      Y(q ?? K, "TAG_RESOLVE_FAILED", G), $ = new vS4.Scalar(z);
    }
    if ($.range = J, $.source = z, w) $.type = w;
    if (O) $.tag = O;
    if (X.format) $.format = X.format;
    if (H) $.comment = H;
    return $;
  }
  function pV9(A, K, q, Y, z) {
    if (q === "!") return A[Y7A.SCALAR];
    let w = [];
    for (let J of A.tags) if (!J.collection && J.tag === q) if (J.default && J.test) w.push(J);else return J;
    for (let J of w) if (J.test?.test(K)) return J;
    let H = A.knownTags[q];
    if (H && !H.collection) return A.tags.push(Object.assign({}, H, {
      default: !1,
      test: void 0
    })), H;
    return z(Y, "TAG_RESOLVE_FAILED", `Unresolved tag: ${q}`, q !== "tag:yaml.org,2002:str"), A[Y7A.SCALAR];
  }
  function dV9({
    atKey: A,
    directives: K,
    schema: q
  }, Y, z, w) {
    let H = q.tags.find(J => (J.default === !0 || A && J.default === "key") && J.test?.test(Y)) || q[Y7A.SCALAR];
    if (q.compat) {
      let J = q.compat.find(O => O.default && O.test?.test(Y)) ?? q[Y7A.SCALAR];
      if (H.tag !== J.tag) {
        let O = K.tagString(H.tag),
          X = K.tagString(J.tag),
          $ = `Value may be parsed as either ${O} or ${X}`;
        w(z, "TAG_RESOLVE_FAILED", $, !0);
      }
    }
    return H;
  }
  cV9.composeScalar = UV9;
});

// Register to shared state
__$.ES4 = ES4;
