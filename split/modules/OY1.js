// Module: OY1
// Dependencies: BS4, mS4, QS4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var OY1 = v(Uf9 => {
  var n96 = __$.BS4(),
    uf9 = __$.mS4(),
    Bf9 = __$.QS4(),
    r96 = "\uFEFF",
    o96 = "\x02",
    a96 = "\x18",
    s96 = "\x1F",
    mf9 = A => !!A && "items" in A,
    gf9 = A => !!A && (A.type === "scalar" || A.type === "single-quoted-scalar" || A.type === "double-quoted-scalar" || A.type === "block-scalar");
  function Ff9(A) {
    switch (A) {
      case r96:
        return "<BOM>";
      case o96:
        return "<DOC>";
      case a96:
        return "<FLOW_END>";
      case s96:
        return "<SCALAR>";
      default:
        return JSON.stringify(A);
    }
  }
  function Qf9(A) {
    switch (A) {
      case r96:
        return "byte-order-mark";
      case o96:
        return "doc-mode";
      case a96:
        return "flow-error-end";
      case s96:
        return "scalar";
      case "---":
        return "doc-start";
      case "...":
        return "doc-end";
      case "":
      case `
`:
      case `\r
`:
        return "newline";
      case "-":
        return "seq-item-ind";
      case "?":
        return "explicit-key-ind";
      case ":":
        return "map-value-ind";
      case "{":
        return "flow-map-start";
      case "}":
        return "flow-map-end";
      case "[":
        return "flow-seq-start";
      case "]":
        return "flow-seq-end";
      case ",":
        return "comma";
    }
    switch (A[0]) {
      case " ":
      case "\t":
        return "space";
      case "#":
        return "comment";
      case "%":
        return "directive-line";
      case "*":
        return "alias";
      case "&":
        return "anchor";
      case "!":
        return "tag";
      case "'":
        return "single-quoted-scalar";
      case '"':
        return "double-quoted-scalar";
      case "|":
      case ">":
        return "block-scalar-header";
    }
    return null;
  }
  Uf9.createScalarToken = n96.createScalarToken;
  Uf9.resolveAsScalar = n96.resolveAsScalar;
  Uf9.setScalarValue = n96.setScalarValue;
  Uf9.stringify = uf9.stringify;
  Uf9.visit = Bf9.visit;
  Uf9.BOM = r96;
  Uf9.DOCUMENT = o96;
  Uf9.FLOW_END = a96;
  Uf9.SCALAR = s96;
  Uf9.isCollection = mf9;
  Uf9.isScalar = gf9;
  Uf9.prettyToken = Ff9;
  Uf9.tokenType = Qf9;
});

// Register to shared state
__$.OY1 = OY1;
