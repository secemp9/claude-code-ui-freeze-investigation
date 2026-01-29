// Module: IS4
// Dependencies: eIA, RS4, W$A, KSA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IS4 = v(Xf9 => {
  var wf9 = __$.eIA(),
    yS4 = __$.RS4(),
    Hf9 = __$.W$A(),
    Jf9 = __$.KSA();
  function Of9(A, K, {
    offset: q,
    start: Y,
    value: z,
    end: w
  }, H) {
    let J = Object.assign({
        _directives: K
      }, A),
      O = new wf9.Document(void 0, J),
      X = {
        atKey: !1,
        atRoot: !0,
        directives: O.directives,
        options: O.options,
        schema: O.schema
      },
      $ = Jf9.resolveProps(Y, {
        indicator: "doc-start",
        next: z ?? w?.[0],
        offset: q,
        onError: H,
        parentIndent: 0,
        startOnNewline: !0
      });
    if ($.found) {
      if (O.directives.docStart = !0, z && (z.type === "block-map" || z.type === "block-seq") && !$.hasNewline) H($.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
    }
    O.contents = z ? yS4.composeNode(X, z, $, H) : yS4.composeEmptyNode(X, $.end, Y, null, $, H);
    let _ = O.contents.range[2],
      G = Hf9.resolveEnd(w, _, !1, H);
    if (G.comment) O.comment = G.comment;
    return O.range = [q, _, G.offset], O;
  }
  Xf9.composeDoc = Of9;
});

// Register to shared state
__$.IS4 = IS4;
