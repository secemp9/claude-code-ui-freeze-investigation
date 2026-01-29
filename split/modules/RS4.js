// Module: RS4
// Dependencies: gIA, WY, NS4, ES4, W$A, kS4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RS4 = v(qf9 => {
  var oV9 = __$.gIA(),
    aV9 = __$.WY(),
    sV9 = __$.NS4(),
    CS4 = __$.ES4(),
    tV9 = __$.W$A(),
    eV9 = __$.kS4(),
    Af9 = {
      composeNode: LS4,
      composeEmptyNode: d96
    };
  function LS4(A, K, q, Y) {
    let z = A.atKey,
      {
        spaceBefore: w,
        comment: H,
        anchor: J,
        tag: O
      } = q,
      X,
      $ = !0;
    switch (K.type) {
      case "alias":
        if (X = Kf9(A, K, Y), J || O) Y(K, "ALIAS_PROPS", "An alias node must not specify any properties");
        break;
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "block-scalar":
        if (X = CS4.composeScalar(A, K, O, Y), J) X.anchor = J.source.substring(1);
        break;
      case "block-map":
      case "block-seq":
      case "flow-collection":
        if (X = sV9.composeCollection(Af9, A, K, q, Y), J) X.anchor = J.source.substring(1);
        break;
      default:
        {
          let _ = K.type === "error" ? K.message : `Unsupported token (type: ${K.type})`;
          Y(K, "UNEXPECTED_TOKEN", _), X = d96(A, K.offset, void 0, null, q, Y), $ = !1;
        }
    }
    if (J && X.anchor === "") Y(J, "BAD_ALIAS", "Anchor cannot be an empty string");
    if (z && A.options.stringKeys && (!aV9.isScalar(X) || typeof X.value !== "string" || X.tag && X.tag !== "tag:yaml.org,2002:str")) Y(O ?? K, "NON_STRING_KEY", "With stringKeys, all keys must be strings");
    if (w) X.spaceBefore = !0;
    if (H) if (K.type === "scalar" && K.source === "") X.comment = H;else X.commentBefore = H;
    if (A.options.keepSourceTokens && $) X.srcToken = K;
    return X;
  }
  function d96(A, K, q, Y, {
    spaceBefore: z,
    comment: w,
    anchor: H,
    tag: J,
    end: O
  }, X) {
    let $ = {
        type: "scalar",
        offset: eV9.emptyScalarPosition(K, q, Y),
        indent: -1,
        source: ""
      },
      _ = CS4.composeScalar(A, $, J, X);
    if (H) {
      if (_.anchor = H.source.substring(1), _.anchor === "") X(H, "BAD_ALIAS", "Anchor cannot be an empty string");
    }
    if (z) _.spaceBefore = !0;
    if (w) _.comment = w, _.range[2] = O;
    return _;
  }
  function Kf9({
    options: A
  }, {
    offset: K,
    source: q,
    end: Y
  }, z) {
    let w = new oV9.Alias(q.substring(1));
    if (w.source === "") z(K, "BAD_ALIAS", "Alias cannot be an empty string");
    if (w.source.endsWith(":")) z(K + q.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
    let H = K + q.length,
      J = tV9.resolveEnd(Y, H, A.strict, z);
    if (w.range = [K, H, J.offset], J.comment) w.comment = J.comment;
    return w;
  }
  qf9.composeEmptyNode = d96;
  qf9.composeNode = LS4;
});

// Register to shared state
__$.RS4 = RS4;
