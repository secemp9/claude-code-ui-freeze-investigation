// Module: jS4
// Dependencies: xr, Br, KSA, wY1, x96, u96

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jS4 = v(rP9 => {
  var GS4 = __$.xr(),
    cP9 = __$.Br(),
    ZS4 = __$.KSA(),
    lP9 = __$.wY1(),
    WS4 = __$.x96(),
    iP9 = __$.u96(),
    DS4 = "All mapping items must start at the same column";
  function nP9({
    composeNode: A,
    composeEmptyNode: K
  }, q, Y, z, w) {
    let J = new (w?.nodeClass ?? cP9.YAMLMap)(q.schema);
    if (q.atRoot) q.atRoot = !1;
    let O = Y.offset,
      X = null;
    for (let $ of Y.items) {
      let {
          start: _,
          key: G,
          sep: Z,
          value: W
        } = $,
        D = ZS4.resolveProps(_, {
          indicator: "explicit-key-ind",
          next: G ?? Z?.[0],
          offset: O,
          onError: z,
          parentIndent: Y.indent,
          startOnNewline: !0
        }),
        j = !D.found;
      if (j) {
        if (G) {
          if (G.type === "block-seq") z(O, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");else if ("indent" in G && G.indent !== Y.indent) z(O, "BAD_INDENT", DS4);
        }
        if (!D.anchor && !D.tag && !Z) {
          if (X = D.end, D.comment) if (J.comment) J.comment += `
` + D.comment;else J.comment = D.comment;
          continue;
        }
        if (D.newlineAfterProp || lP9.containsNewline(G)) z(G ?? _[_.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
      } else if (D.found?.indent !== Y.indent) z(O, "BAD_INDENT", DS4);
      q.atKey = !0;
      let M = D.end,
        P = G ? A(q, G, D, z) : K(q, M, _, null, D, z);
      if (q.schema.compat) WS4.flowIndentCheck(Y.indent, G, z);
      if (q.atKey = !1, iP9.mapIncludes(q, J.items, P)) z(M, "DUPLICATE_KEY", "Map keys must be unique");
      let f = ZS4.resolveProps(Z ?? [], {
        indicator: "map-value-ind",
        next: W,
        offset: P.range[2],
        onError: z,
        parentIndent: Y.indent,
        startOnNewline: !G || G.type === "block-scalar"
      });
      if (O = f.end, f.found) {
        if (j) {
          if (W?.type === "block-map" && !f.hasNewline) z(O, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
          if (q.options.strict && D.start < f.found.offset - 1024) z(P.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
        }
        let N = W ? A(q, W, f, z) : K(q, O, Z, null, f, z);
        if (q.schema.compat) WS4.flowIndentCheck(Y.indent, W, z);
        O = N.range[2];
        let T = new GS4.Pair(P, N);
        if (q.options.keepSourceTokens) T.srcToken = $;
        J.items.push(T);
      } else {
        if (j) z(P.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
        if (f.comment) if (P.comment) P.comment += `
` + f.comment;else P.comment = f.comment;
        let N = new GS4.Pair(P);
        if (q.options.keepSourceTokens) N.srcToken = $;
        J.items.push(N);
      }
    }
    if (X && X < O) z(X, "IMPOSSIBLE", "Map comment with trailing content");
    return J.range = [Y.offset, O, X ?? O], J;
  }
  rP9.resolveBlockMap = nP9;
});

// Register to shared state
__$.jS4 = jS4;
