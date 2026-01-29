// Module: fS4
// Dependencies: WY, xr, Br, mr, W$A, KSA, wY1, u96

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fS4 = v(GV9 => {
  var wV9 = __$.WY(),
    HV9 = __$.xr(),
    PS4 = __$.Br(),
    JV9 = __$.mr(),
    OV9 = __$.W$A(),
    VS4 = __$.KSA(),
    XV9 = __$.wY1(),
    $V9 = __$.u96(),
    B96 = "Block collections are not allowed within flow collections",
    m96 = A => A && (A.type === "block-map" || A.type === "block-seq");
  function _V9({
    composeNode: A,
    composeEmptyNode: K
  }, q, Y, z, w) {
    let H = Y.start.source === "{",
      J = H ? "flow map" : "flow sequence",
      X = new (w?.nodeClass ?? (H ? PS4.YAMLMap : JV9.YAMLSeq))(q.schema);
    X.flow = !0;
    let $ = q.atRoot;
    if ($) q.atRoot = !1;
    if (q.atKey) q.atKey = !1;
    let _ = Y.offset + Y.start.source.length;
    for (let j = 0; j < Y.items.length; ++j) {
      let M = Y.items[j],
        {
          start: P,
          key: f,
          sep: N,
          value: T
        } = M,
        C = VS4.resolveProps(P, {
          flow: J,
          indicator: "explicit-key-ind",
          next: f ?? N?.[0],
          offset: _,
          onError: z,
          parentIndent: Y.indent,
          startOnNewline: !1
        });
      if (!C.found) {
        if (!C.anchor && !C.tag && !N && !T) {
          if (j === 0 && C.comma) z(C.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${J}`);else if (j < Y.items.length - 1) z(C.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${J}`);
          if (C.comment) if (X.comment) X.comment += `
` + C.comment;else X.comment = C.comment;
          _ = C.end;
          continue;
        }
        if (!H && q.options.strict && XV9.containsNewline(f)) z(f, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
      }
      if (j === 0) {
        if (C.comma) z(C.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${J}`);
      } else {
        if (!C.comma) z(C.start, "MISSING_CHAR", `Missing , between ${J} items`);
        if (C.comment) {
          let R = "";
          A: for (let x of P) switch (x.type) {
            case "comma":
            case "space":
              break;
            case "comment":
              R = x.source.substring(1);
              break A;
            default:
              break A;
          }
          if (R) {
            let x = X.items[X.items.length - 1];
            if (wV9.isPair(x)) x = x.value ?? x.key;
            if (x.comment) x.comment += `
` + R;else x.comment = R;
            C.comment = C.comment.substring(R.length + 1);
          }
        }
      }
      if (!H && !N && !C.found) {
        let R = T ? A(q, T, C, z) : K(q, C.end, N, null, C, z);
        if (X.items.push(R), _ = R.range[2], m96(T)) z(R.range, "BLOCK_IN_FLOW", B96);
      } else {
        q.atKey = !0;
        let R = C.end,
          x = f ? A(q, f, C, z) : K(q, R, P, null, C, z);
        if (m96(f)) z(x.range, "BLOCK_IN_FLOW", B96);
        q.atKey = !1;
        let y = VS4.resolveProps(N ?? [], {
          flow: J,
          indicator: "map-value-ind",
          next: T,
          offset: x.range[2],
          onError: z,
          parentIndent: Y.indent,
          startOnNewline: !1
        });
        if (y.found) {
          if (!H && !C.found && q.options.strict) {
            if (N) for (let F of N) {
              if (F === y.found) break;
              if (F.type === "newline") {
                z(F, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
            if (C.start < y.found.offset - 1024) z(y.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
          }
        } else if (T) if ("source" in T && T.source && T.source[0] === ":") z(T, "MISSING_CHAR", `Missing space after : in ${J}`);else z(y.start, "MISSING_CHAR", `Missing , or : between ${J} items`);
        let B = T ? A(q, T, y, z) : y.found ? K(q, y.end, N, null, y, z) : null;
        if (B) {
          if (m96(T)) z(B.range, "BLOCK_IN_FLOW", B96);
        } else if (y.comment) if (x.comment) x.comment += `
` + y.comment;else x.comment = y.comment;
        let b = new HV9.Pair(x, B);
        if (q.options.keepSourceTokens) b.srcToken = M;
        if (H) {
          let F = X;
          if ($V9.mapIncludes(q, F.items, x)) z(R, "DUPLICATE_KEY", "Map keys must be unique");
          F.items.push(b);
        } else {
          let F = new PS4.YAMLMap(q.schema);
          F.flow = !0, F.items.push(b);
          let Q = (B ?? x).range;
          F.range = [x.range[0], Q[1], Q[2]], X.items.push(F);
        }
        _ = B ? B.range[2] : y.end;
      }
    }
    let G = H ? "}" : "]",
      [Z, ...W] = Y.end,
      D = _;
    if (Z && Z.source === G) D = Z.offset + Z.source.length;else {
      let j = J[0].toUpperCase() + J.substring(1),
        M = $ ? `${j} must end with a ${G}` : `${j} in block collection must be sufficiently indented and end with a ${G}`;
      if (z(_, $ ? "MISSING_CHAR" : "BAD_INDENT", M), Z && Z.source.length !== 1) W.unshift(Z);
    }
    if (W.length > 0) {
      let j = OV9.resolveEnd(W, D, q.options.strict, z);
      if (j.comment) if (X.comment) X.comment += `
` + j.comment;else X.comment = j.comment;
      X.range = [Y.offset, D, j.offset];
    } else X.range = [Y.offset, D, D];
    return X;
  }
  GV9.resolveFlowCollection = _V9;
});

// Register to shared state
__$.fS4 = fS4;
