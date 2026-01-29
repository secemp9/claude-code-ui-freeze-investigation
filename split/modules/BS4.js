// Module: BS4
// Dependencies: Q96, p96, ASA, pIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BS4 = v(kf9 => {
  var Pf9 = __$.Q96(),
    Vf9 = __$.p96(),
    ff9 = __$.ASA(),
    xS4 = __$.pIA();
  function Nf9(A, K = !0, q) {
    if (A) {
      let Y = (z, w, H) => {
        let J = typeof z === "number" ? z : Array.isArray(z) ? z[0] : z.offset;
        if (q) q(J, w, H);else throw new ff9.YAMLParseError([J, J + 1], w, H);
      };
      switch (A.type) {
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return Vf9.resolveFlowScalar(A, K, Y);
        case "block-scalar":
          return Pf9.resolveBlockScalar({
            options: {
              strict: K
            }
          }, A, Y);
      }
    }
    return null;
  }
  function Tf9(A, K) {
    let {
        implicitKey: q = !1,
        indent: Y,
        inFlow: z = !1,
        offset: w = -1,
        type: H = "PLAIN"
      } = K,
      J = xS4.stringifyString({
        type: H,
        value: A
      }, {
        implicitKey: q,
        indent: Y > 0 ? " ".repeat(Y) : "",
        inFlow: z,
        options: {
          blockQuote: !0,
          lineWidth: -1
        }
      }),
      O = K.end ?? [{
        type: "newline",
        offset: -1,
        indent: Y,
        source: `
`
      }];
    switch (J[0]) {
      case "|":
      case ">":
        {
          let X = J.indexOf(`
`),
            $ = J.substring(0, X),
            _ = J.substring(X + 1) + `
`,
            G = [{
              type: "block-scalar-header",
              offset: w,
              indent: Y,
              source: $
            }];
          if (!uS4(G, O)) G.push({
            type: "newline",
            offset: -1,
            indent: Y,
            source: `
`
          });
          return {
            type: "block-scalar",
            offset: w,
            indent: Y,
            props: G,
            source: _
          };
        }
      case '"':
        return {
          type: "double-quoted-scalar",
          offset: w,
          indent: Y,
          source: J,
          end: O
        };
      case "'":
        return {
          type: "single-quoted-scalar",
          offset: w,
          indent: Y,
          source: J,
          end: O
        };
      default:
        return {
          type: "scalar",
          offset: w,
          indent: Y,
          source: J,
          end: O
        };
    }
  }
  function vf9(A, K, q = {}) {
    let {
        afterKey: Y = !1,
        implicitKey: z = !1,
        inFlow: w = !1,
        type: H
      } = q,
      J = "indent" in A ? A.indent : null;
    if (Y && typeof J === "number") J += 2;
    if (!H) switch (A.type) {
      case "single-quoted-scalar":
        H = "QUOTE_SINGLE";
        break;
      case "double-quoted-scalar":
        H = "QUOTE_DOUBLE";
        break;
      case "block-scalar":
        {
          let X = A.props[0];
          if (X.type !== "block-scalar-header") throw Error("Invalid block scalar header");
          H = X.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
          break;
        }
      default:
        H = "PLAIN";
    }
    let O = xS4.stringifyString({
      type: H,
      value: K
    }, {
      implicitKey: z || J === null,
      indent: J !== null && J > 0 ? " ".repeat(J) : "",
      inFlow: w,
      options: {
        blockQuote: !0,
        lineWidth: -1
      }
    });
    switch (O[0]) {
      case "|":
      case ">":
        Ef9(A, O);
        break;
      case '"':
        l96(A, O, "double-quoted-scalar");
        break;
      case "'":
        l96(A, O, "single-quoted-scalar");
        break;
      default:
        l96(A, O, "scalar");
    }
  }
  function Ef9(A, K) {
    let q = K.indexOf(`
`),
      Y = K.substring(0, q),
      z = K.substring(q + 1) + `
`;
    if (A.type === "block-scalar") {
      let w = A.props[0];
      if (w.type !== "block-scalar-header") throw Error("Invalid block scalar header");
      w.source = Y, A.source = z;
    } else {
      let {
          offset: w
        } = A,
        H = "indent" in A ? A.indent : -1,
        J = [{
          type: "block-scalar-header",
          offset: w,
          indent: H,
          source: Y
        }];
      if (!uS4(J, "end" in A ? A.end : void 0)) J.push({
        type: "newline",
        offset: -1,
        indent: H,
        source: `
`
      });
      for (let O of Object.keys(A)) if (O !== "type" && O !== "offset") delete A[O];
      Object.assign(A, {
        type: "block-scalar",
        indent: H,
        props: J,
        source: z
      });
    }
  }
  function uS4(A, K) {
    if (K) for (let q of K) switch (q.type) {
      case "space":
      case "comment":
        A.push(q);
        break;
      case "newline":
        return A.push(q), !0;
    }
    return !1;
  }
  function l96(A, K, q) {
    switch (A.type) {
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        A.type = q, A.source = K;
        break;
      case "block-scalar":
        {
          let Y = A.props.slice(1),
            z = K.length;
          if (A.props[0].type === "block-scalar-header") z -= A.props[0].source.length;
          for (let w of Y) w.offset += z;
          delete A.props, Object.assign(A, {
            type: q,
            source: K,
            end: Y
          });
          break;
        }
      case "block-map":
      case "block-seq":
        {
          let z = {
            type: "newline",
            offset: A.offset + K.length,
            indent: A.indent,
            source: `
`
          };
          delete A.items, Object.assign(A, {
            type: q,
            source: K,
            end: [z]
          });
          break;
        }
      default:
        {
          let Y = "indent" in A ? A.indent : -1,
            z = "end" in A && Array.isArray(A.end) ? A.end.filter(w => w.type === "space" || w.type === "comment" || w.type === "newline") : [];
          for (let w of Object.keys(A)) if (w !== "type" && w !== "offset") delete A[w];
          Object.assign(A, {
            type: q,
            indent: Y,
            source: K,
            end: z
          });
        }
    }
  }
  kf9.createScalarToken = Tf9;
  kf9.resolveAsScalar = Nf9;
  kf9.setScalarValue = vf9;
});

// Register to shared state
__$.BS4 = BS4;
