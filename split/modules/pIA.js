// Module: pIA
// Dependencies: q$, ZI4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pIA = v(nW9 => {
  var gy = __$.q$(),
    hr = __$.ZI4(),
    x91 = (A, K) => ({
      indentAtStart: K ? A.indent.length : A.indentAtStart,
      lineWidth: A.options.lineWidth,
      minContentWidth: A.options.minContentWidth
    }),
    u91 = A => /^(%|---|\.\.\.)/m.test(A);
  function cW9(A, K, q) {
    if (!K || K < 0) return !1;
    let Y = K - q,
      z = A.length;
    if (z <= Y) return !1;
    for (let w = 0, H = 0; w < z; ++w) if (A[w] === `
`) {
      if (w - H > Y) return !0;
      if (H = w + 1, z - H <= Y) return !1;
    }
    return !0;
  }
  function UIA(A, K) {
    let q = JSON.stringify(A);
    if (K.options.doubleQuotedAsJSON) return q;
    let {
        implicitKey: Y
      } = K,
      z = K.options.doubleQuotedMinMultiLineLength,
      w = K.indent || (u91(A) ? "  " : ""),
      H = "",
      J = 0;
    for (let O = 0, X = q[O]; X; X = q[++O]) {
      if (X === " " && q[O + 1] === "\\" && q[O + 2] === "n") H += q.slice(J, O) + "\\ ", O += 1, J = O, X = "\\";
      if (X === "\\") switch (q[O + 1]) {
        case "u":
          {
            H += q.slice(J, O);
            let $ = q.substr(O + 2, 4);
            switch ($) {
              case "0000":
                H += "\\0";
                break;
              case "0007":
                H += "\\a";
                break;
              case "000b":
                H += "\\v";
                break;
              case "001b":
                H += "\\e";
                break;
              case "0085":
                H += "\\N";
                break;
              case "00a0":
                H += "\\_";
                break;
              case "2028":
                H += "\\L";
                break;
              case "2029":
                H += "\\P";
                break;
              default:
                if ($.substr(0, 2) === "00") H += "\\x" + $.substr(2);else H += q.substr(O, 6);
            }
            O += 5, J = O + 1;
          }
          break;
        case "n":
          if (Y || q[O + 2] === '"' || q.length < z) O += 1;else {
            H += q.slice(J, O) + `

`;
            while (q[O + 2] === "\\" && q[O + 3] === "n" && q[O + 4] !== '"') H += `
`, O += 2;
            if (H += w, q[O + 2] === " ") H += "\\";
            O += 1, J = O + 1;
          }
          break;
        default:
          O += 1;
      }
    }
    return H = J ? H + q.slice(J) : q, Y ? H : hr.foldFlowLines(H, w, hr.FOLD_QUOTED, x91(K, !1));
  }
  function t36(A, K) {
    if (K.options.singleQuote === !1 || K.implicitKey && A.includes(`
`) || /[ \t]\n|\n[ \t]/.test(A)) return UIA(A, K);
    let q = K.indent || (u91(A) ? "  " : ""),
      Y = "'" + A.replace(/'/g, "''").replace(/\n+/g, `$&
${q}`) + "'";
    return K.implicitKey ? Y : hr.foldFlowLines(Y, q, hr.FOLD_FLOW, x91(K, !1));
  }
  function O$A(A, K) {
    let {
        singleQuote: q
      } = K.options,
      Y;
    if (q === !1) Y = UIA;else {
      let z = A.includes('"'),
        w = A.includes("'");
      if (z && !w) Y = t36;else if (w && !z) Y = UIA;else Y = q ? t36 : UIA;
    }
    return Y(A, K);
  }
  var e36;
  try {
    e36 = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
  } catch {
    e36 = /\n+(?!\n|$)/g;
  }
  function b91({
    comment: A,
    type: K,
    value: q
  }, Y, z, w) {
    let {
      blockQuote: H,
      commentString: J,
      lineWidth: O
    } = Y.options;
    if (!H || /\n[\t ]+$/.test(q)) return O$A(q, Y);
    let X = Y.indent || (Y.forceBlockIndent || u91(q) ? "  " : ""),
      $ = H === "literal" ? !0 : H === "folded" || K === gy.Scalar.BLOCK_FOLDED ? !1 : K === gy.Scalar.BLOCK_LITERAL ? !0 : !cW9(q, O, X.length);
    if (!q) return $ ? `|
` : `>
`;
    let _, G;
    for (G = q.length; G > 0; --G) {
      let T = q[G - 1];
      if (T !== `
` && T !== "\t" && T !== " ") break;
    }
    let Z = q.substring(G),
      W = Z.indexOf(`
`);
    if (W === -1) _ = "-";else if (q === Z || W !== Z.length - 1) {
      if (_ = "+", w) w();
    } else _ = "";
    if (Z) {
      if (q = q.slice(0, -Z.length), Z[Z.length - 1] === `
`) Z = Z.slice(0, -1);
      Z = Z.replace(e36, `$&${X}`);
    }
    let D = !1,
      j,
      M = -1;
    for (j = 0; j < q.length; ++j) {
      let T = q[j];
      if (T === " ") D = !0;else if (T === `
`) M = j;else break;
    }
    let P = q.substring(0, M < j ? M + 1 : j);
    if (P) q = q.substring(P.length), P = P.replace(/\n+/g, `$&${X}`);
    let N = (D ? X ? "2" : "1" : "") + _;
    if (A) {
      if (N += " " + J(A.replace(/ ?[\r\n]+/g, " ")), z) z();
    }
    if (!$) {
      let T = q.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${X}`),
        C = !1,
        R = x91(Y, !0);
      if (H !== "folded" && K !== gy.Scalar.BLOCK_FOLDED) R.onOverflow = () => {
        C = !0;
      };
      let x = hr.foldFlowLines(`${P}${T}${Z}`, X, hr.FOLD_BLOCK, R);
      if (!C) return `>${N}
${X}${x}`;
    }
    return q = q.replace(/\n+/g, `$&${X}`), `|${N}
${X}${P}${q}${Z}`;
  }
  function lW9(A, K, q, Y) {
    let {
        type: z,
        value: w
      } = A,
      {
        actualString: H,
        implicitKey: J,
        indent: O,
        indentStep: X,
        inFlow: $
      } = K;
    if (J && w.includes(`
`) || $ && /[[\]{},]/.test(w)) return O$A(w, K);
    if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(w)) return J || $ || !w.includes(`
`) ? O$A(w, K) : b91(A, K, q, Y);
    if (!J && !$ && z !== gy.Scalar.PLAIN && w.includes(`
`)) return b91(A, K, q, Y);
    if (u91(w)) {
      if (O === "") return K.forceBlockIndent = !0, b91(A, K, q, Y);else if (J && O === X) return O$A(w, K);
    }
    let _ = w.replace(/\n+/g, `$&
${O}`);
    if (H) {
      let G = D => D.default && D.tag !== "tag:yaml.org,2002:str" && D.test?.test(_),
        {
          compat: Z,
          tags: W
        } = K.doc.schema;
      if (W.some(G) || Z?.some(G)) return O$A(w, K);
    }
    return J ? _ : hr.foldFlowLines(_, O, hr.FOLD_FLOW, x91(K, !1));
  }
  function iW9(A, K, q, Y) {
    let {
        implicitKey: z,
        inFlow: w
      } = K,
      H = typeof A.value === "string" ? A : Object.assign({}, A, {
        value: String(A.value)
      }),
      {
        type: J
      } = A;
    if (J !== gy.Scalar.QUOTE_DOUBLE) {
      if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(H.value)) J = gy.Scalar.QUOTE_DOUBLE;
    }
    let O = $ => {
        switch ($) {
          case gy.Scalar.BLOCK_FOLDED:
          case gy.Scalar.BLOCK_LITERAL:
            return z || w ? O$A(H.value, K) : b91(H, K, q, Y);
          case gy.Scalar.QUOTE_DOUBLE:
            return UIA(H.value, K);
          case gy.Scalar.QUOTE_SINGLE:
            return t36(H.value, K);
          case gy.Scalar.PLAIN:
            return lW9(H, K, q, Y);
          default:
            return null;
        }
      },
      X = O(J);
    if (X === null) {
      let {
          defaultKeyType: $,
          defaultStringType: _
        } = K.options,
        G = z && $ || _;
      if (X = O(G), X === null) throw Error(`Unsupported default string type ${G}`);
    }
    return X;
  }
  nW9.stringifyString = iW9;
});

// Register to shared state
__$.pIA = pIA;
