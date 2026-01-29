// Module: Q96
// Dependencies: q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q96 = v(LV9 => {
  var F96 = __$.q$();
  function EV9(A, K, q) {
    let Y = K.offset,
      z = kV9(K, A.options.strict, q);
    if (!z) return {
      value: "",
      type: null,
      comment: "",
      range: [Y, Y, Y]
    };
    let w = z.mode === ">" ? F96.Scalar.BLOCK_FOLDED : F96.Scalar.BLOCK_LITERAL,
      H = K.source ? CV9(K.source) : [],
      J = H.length;
    for (let D = H.length - 1; D >= 0; --D) {
      let j = H[D][1];
      if (j === "" || j === "\r") J = D;else break;
    }
    if (J === 0) {
      let D = z.chomp === "+" && H.length > 0 ? `
`.repeat(Math.max(1, H.length - 1)) : "",
        j = Y + z.length;
      if (K.source) j += K.source.length;
      return {
        value: D,
        type: w,
        comment: z.comment,
        range: [Y, j, j]
      };
    }
    let O = K.indent + z.indent,
      X = K.offset + z.length,
      $ = 0;
    for (let D = 0; D < J; ++D) {
      let [j, M] = H[D];
      if (M === "" || M === "\r") {
        if (z.indent === 0 && j.length > O) O = j.length;
      } else {
        if (j.length < O) q(X + j.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator");
        if (z.indent === 0) O = j.length;
        if ($ = D, O === 0 && !A.atRoot) q(X, "BAD_INDENT", "Block scalar values in collections must be indented");
        break;
      }
      X += j.length + M.length + 1;
    }
    for (let D = H.length - 1; D >= J; --D) if (H[D][0].length > O) J = D + 1;
    let _ = "",
      G = "",
      Z = !1;
    for (let D = 0; D < $; ++D) _ += H[D][0].slice(O) + `
`;
    for (let D = $; D < J; ++D) {
      let [j, M] = H[D];
      X += j.length + M.length + 1;
      let P = M[M.length - 1] === "\r";
      if (P) M = M.slice(0, -1);
      if (M && j.length < O) {
        let N = `Block scalar lines must not be less indented than their ${z.indent ? "explicit indentation indicator" : "first line"}`;
        q(X - M.length - (P ? 2 : 1), "BAD_INDENT", N), j = "";
      }
      if (w === F96.Scalar.BLOCK_LITERAL) _ += G + j.slice(O) + M, G = `
`;else if (j.length > O || M[0] === "\t") {
        if (G === " ") G = `
`;else if (!Z && G === `
`) G = `

`;
        _ += G + j.slice(O) + M, G = `
`, Z = !0;
      } else if (M === "") {
        if (G === `
`) _ += `
`;else G = `
`;
      } else _ += G + M, G = " ", Z = !1;
    }
    switch (z.chomp) {
      case "-":
        break;
      case "+":
        for (let D = J; D < H.length; ++D) _ += `
` + H[D][0].slice(O);
        if (_[_.length - 1] !== `
`) _ += `
`;
        break;
      default:
        _ += `
`;
    }
    let W = Y + z.length + K.source.length;
    return {
      value: _,
      type: w,
      comment: z.comment,
      range: [Y, W, W]
    };
  }
  function kV9({
    offset: A,
    props: K
  }, q, Y) {
    if (K[0].type !== "block-scalar-header") return Y(K[0], "IMPOSSIBLE", "Block scalar header not found"), null;
    let {
        source: z
      } = K[0],
      w = z[0],
      H = 0,
      J = "",
      O = -1;
    for (let G = 1; G < z.length; ++G) {
      let Z = z[G];
      if (!J && (Z === "-" || Z === "+")) J = Z;else {
        let W = Number(Z);
        if (!H && W) H = W;else if (O === -1) O = A + G;
      }
    }
    if (O !== -1) Y(O, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${z}`);
    let X = !1,
      $ = "",
      _ = z.length;
    for (let G = 1; G < K.length; ++G) {
      let Z = K[G];
      switch (Z.type) {
        case "space":
          X = !0;
        case "newline":
          _ += Z.source.length;
          break;
        case "comment":
          if (q && !X) Y(Z, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          _ += Z.source.length, $ = Z.source.substring(1);
          break;
        case "error":
          Y(Z, "UNEXPECTED_TOKEN", Z.message), _ += Z.source.length;
          break;
        default:
          {
            let W = `Unexpected token in block scalar header: ${Z.type}`;
            Y(Z, "UNEXPECTED_TOKEN", W);
            let D = Z.source;
            if (D && typeof D === "string") _ += D.length;
          }
      }
    }
    return {
      mode: w,
      indent: H,
      chomp: J,
      comment: $,
      length: _
    };
  }
  function CV9(A) {
    let K = A.split(/\n( *)/),
      q = K[0],
      Y = q.match(/^( *)/),
      w = [Y?.[1] ? [Y[1], q.slice(Y[1].length)] : ["", q]];
    for (let H = 1; H < K.length; H += 2) w.push([K[H], K[H + 1]]);
    return w;
  }
  LV9.resolveBlockScalar = EV9;
});

// Register to shared state
__$.Q96 = Q96;
