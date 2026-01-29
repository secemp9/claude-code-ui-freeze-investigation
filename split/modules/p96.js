// Module: p96
// Dependencies: q$, W$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var p96 = v(mV9 => {
  var U96 = __$.q$(),
    yV9 = __$.W$A();
  function IV9(A, K, q) {
    let {
        offset: Y,
        type: z,
        source: w,
        end: H
      } = A,
      J,
      O,
      X = (G, Z, W) => q(Y + G, Z, W);
    switch (z) {
      case "scalar":
        J = U96.Scalar.PLAIN, O = SV9(w, X);
        break;
      case "single-quoted-scalar":
        J = U96.Scalar.QUOTE_SINGLE, O = hV9(w, X);
        break;
      case "double-quoted-scalar":
        J = U96.Scalar.QUOTE_DOUBLE, O = bV9(w, X);
        break;
      default:
        return q(A, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${z}`), {
          value: "",
          type: null,
          comment: "",
          range: [Y, Y + w.length, Y + w.length]
        };
    }
    let $ = Y + w.length,
      _ = yV9.resolveEnd(H, $, K, q);
    return {
      value: O,
      type: J,
      comment: _.comment,
      range: [Y, $, _.offset]
    };
  }
  function SV9(A, K) {
    let q = "";
    switch (A[0]) {
      case "\t":
        q = "a tab character";
        break;
      case ",":
        q = "flow indicator character ,";
        break;
      case "%":
        q = "directive indicator character %";
        break;
      case "|":
      case ">":
        {
          q = `block scalar indicator ${A[0]}`;
          break;
        }
      case "@":
      case "`":
        {
          q = `reserved character ${A[0]}`;
          break;
        }
    }
    if (q) K(0, "BAD_SCALAR_START", `Plain value cannot start with ${q}`);
    return TS4(A);
  }
  function hV9(A, K) {
    if (A[A.length - 1] !== "'" || A.length === 1) K(A.length, "MISSING_CHAR", "Missing closing 'quote");
    return TS4(A.slice(1, -1)).replace(/''/g, "'");
  }
  function TS4(A) {
    let K, q;
    try {
      K = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), q = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
    } catch {
      K = /(.*?)[ \t]*\r?\n/sy, q = /[ \t]*(.*?)[ \t]*\r?\n/sy;
    }
    let Y = K.exec(A);
    if (!Y) return A;
    let z = Y[1],
      w = " ",
      H = K.lastIndex;
    q.lastIndex = H;
    while (Y = q.exec(A)) {
      if (Y[1] === "") {
        if (w === `
`) z += w;else w = `
`;
      } else z += w + Y[1], w = " ";
      H = q.lastIndex;
    }
    let J = /[ \t]*(.*)/sy;
    return J.lastIndex = H, Y = J.exec(A), z + w + (Y?.[1] ?? "");
  }
  function bV9(A, K) {
    let q = "";
    for (let Y = 1; Y < A.length - 1; ++Y) {
      let z = A[Y];
      if (z === "\r" && A[Y + 1] === `
`) continue;
      if (z === `
`) {
        let {
          fold: w,
          offset: H
        } = xV9(A, Y);
        q += w, Y = H;
      } else if (z === "\\") {
        let w = A[++Y],
          H = uV9[w];
        if (H) q += H;else if (w === `
`) {
          w = A[Y + 1];
          while (w === " " || w === "\t") w = A[++Y + 1];
        } else if (w === "\r" && A[Y + 1] === `
`) {
          w = A[++Y + 1];
          while (w === " " || w === "\t") w = A[++Y + 1];
        } else if (w === "x" || w === "u" || w === "U") {
          let J = {
            x: 2,
            u: 4,
            U: 8
          }[w];
          q += BV9(A, Y + 1, J, K), Y += J;
        } else {
          let J = A.substr(Y - 1, 2);
          K(Y - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${J}`), q += J;
        }
      } else if (z === " " || z === "\t") {
        let w = Y,
          H = A[Y + 1];
        while (H === " " || H === "\t") H = A[++Y + 1];
        if (H !== `
` && !(H === "\r" && A[Y + 2] === `
`)) q += Y > w ? A.slice(w, Y + 1) : z;
      } else q += z;
    }
    if (A[A.length - 1] !== '"' || A.length === 1) K(A.length, "MISSING_CHAR", 'Missing closing "quote');
    return q;
  }
  function xV9(A, K) {
    let q = "",
      Y = A[K + 1];
    while (Y === " " || Y === "\t" || Y === `
` || Y === "\r") {
      if (Y === "\r" && A[K + 2] !== `
`) break;
      if (Y === `
`) q += `
`;
      K += 1, Y = A[K + 1];
    }
    if (!q) q = " ";
    return {
      fold: q,
      offset: K
    };
  }
  var uV9 = {
    "0": "\x00",
    a: "\x07",
    b: "\b",
    e: "\x1B",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "\t",
    v: "\v",
    N: "",
    _: " ",
    L: "\u2028",
    P: "\u2029",
    " ": " ",
    '"': '"',
    "/": "/",
    "\\": "\\",
    "\t": "\t"
  };
  function BV9(A, K, q, Y) {
    let z = A.substr(K, q),
      H = z.length === q && /^[0-9a-fA-F]+$/.test(z) ? parseInt(z, 16) : NaN;
    if (isNaN(H)) {
      let J = A.substr(K - 2, q + 2);
      return Y(K - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${J}`), J;
    }
    return String.fromCodePoint(H);
  }
  mV9.resolveFlowScalar = IV9;
});

// Register to shared state
__$.p96 = p96;
