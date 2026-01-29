// Module: KSA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KSA = v(bP9 => {
  function hP9(A, {
    flow: K,
    indicator: q,
    next: Y,
    offset: z,
    onError: w,
    parentIndent: H,
    startOnNewline: J
  }) {
    let O = !1,
      X = J,
      $ = J,
      _ = "",
      G = "",
      Z = !1,
      W = !1,
      D = null,
      j = null,
      M = null,
      P = null,
      f = null,
      N = null,
      T = null;
    for (let x of A) {
      if (W) {
        if (x.type !== "space" && x.type !== "newline" && x.type !== "comma") w(x.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
        W = !1;
      }
      if (D) {
        if (X && x.type !== "comment" && x.type !== "newline") w(D, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
        D = null;
      }
      switch (x.type) {
        case "space":
          if (!K && (q !== "doc-start" || Y?.type !== "flow-collection") && x.source.includes("\t")) D = x;
          $ = !0;
          break;
        case "comment":
          {
            if (!$) w(x, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
            let y = x.source.substring(1) || " ";
            if (!_) _ = y;else _ += G + y;
            G = "", X = !1;
            break;
          }
        case "newline":
          if (X) {
            if (_) _ += x.source;else if (!N || q !== "seq-item-ind") O = !0;
          } else G += x.source;
          if (X = !0, Z = !0, j || M) P = x;
          $ = !0;
          break;
        case "anchor":
          if (j) w(x, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
          if (x.source.endsWith(":")) w(x.offset + x.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0);
          j = x, T ?? (T = x.offset), X = !1, $ = !1, W = !0;
          break;
        case "tag":
          {
            if (M) w(x, "MULTIPLE_TAGS", "A node can have at most one tag");
            M = x, T ?? (T = x.offset), X = !1, $ = !1, W = !0;
            break;
          }
        case q:
          if (j || M) w(x, "BAD_PROP_ORDER", `Anchors and tags must be after the ${x.source} indicator`);
          if (N) w(x, "UNEXPECTED_TOKEN", `Unexpected ${x.source} in ${K ?? "collection"}`);
          N = x, X = q === "seq-item-ind" || q === "explicit-key-ind", $ = !1;
          break;
        case "comma":
          if (K) {
            if (f) w(x, "UNEXPECTED_TOKEN", `Unexpected , in ${K}`);
            f = x, X = !1, $ = !1;
            break;
          }
        default:
          w(x, "UNEXPECTED_TOKEN", `Unexpected ${x.type} token`), X = !1, $ = !1;
      }
    }
    let C = A[A.length - 1],
      R = C ? C.offset + C.source.length : z;
    if (W && Y && Y.type !== "space" && Y.type !== "newline" && Y.type !== "comma" && (Y.type !== "scalar" || Y.source !== "")) w(Y.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
    if (D && (X && D.indent <= H || Y?.type === "block-map" || Y?.type === "block-seq")) w(D, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
    return {
      comma: f,
      found: N,
      spaceBefore: O,
      comment: _,
      hasNewline: Z,
      anchor: j,
      tag: M,
      newlineAfterProp: P,
      end: R,
      start: T ?? R
    };
  }
  bP9.resolveProps = hP9;
});

// Register to shared state
__$.KSA = KSA;
