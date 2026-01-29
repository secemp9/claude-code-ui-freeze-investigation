// Module: MS4
// Dependencies: mr, KSA, x96

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MS4 = v(AV9 => {
  var aP9 = __$.mr(),
    sP9 = __$.KSA(),
    tP9 = __$.x96();
  function eP9({
    composeNode: A,
    composeEmptyNode: K
  }, q, Y, z, w) {
    let J = new (w?.nodeClass ?? aP9.YAMLSeq)(q.schema);
    if (q.atRoot) q.atRoot = !1;
    if (q.atKey) q.atKey = !1;
    let O = Y.offset,
      X = null;
    for (let {
      start: $,
      value: _
    } of Y.items) {
      let G = sP9.resolveProps($, {
        indicator: "seq-item-ind",
        next: _,
        offset: O,
        onError: z,
        parentIndent: Y.indent,
        startOnNewline: !0
      });
      if (!G.found) if (G.anchor || G.tag || _) {
        if (_ && _.type === "block-seq") z(G.end, "BAD_INDENT", "All sequence items must start at the same column");else z(O, "MISSING_CHAR", "Sequence item without - indicator");
      } else {
        if (X = G.end, G.comment) J.comment = G.comment;
        continue;
      }
      let Z = _ ? A(q, _, G, z) : K(q, G.end, $, null, G, z);
      if (q.schema.compat) tP9.flowIndentCheck(Y.indent, _, z);
      O = Z.range[2], J.items.push(Z);
    }
    return J.range = [Y.offset, O, X ?? O], J;
  }
  AV9.resolveBlockSeq = eP9;
});

// Register to shared state
__$.MS4 = MS4;
