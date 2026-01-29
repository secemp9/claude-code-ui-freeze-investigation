// Module: WY
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WY = v(VZ9 => {
  var i36 = Symbol.for("yaml.alias"),
    ny4 = Symbol.for("yaml.document"),
    k91 = Symbol.for("yaml.map"),
    ry4 = Symbol.for("yaml.pair"),
    n36 = Symbol.for("yaml.scalar"),
    C91 = Symbol.for("yaml.seq"),
    lQ = Symbol.for("yaml.node.type"),
    GZ9 = A => !!A && typeof A === "object" && A[lQ] === i36,
    ZZ9 = A => !!A && typeof A === "object" && A[lQ] === ny4,
    WZ9 = A => !!A && typeof A === "object" && A[lQ] === k91,
    DZ9 = A => !!A && typeof A === "object" && A[lQ] === ry4,
    oy4 = A => !!A && typeof A === "object" && A[lQ] === n36,
    jZ9 = A => !!A && typeof A === "object" && A[lQ] === C91;
  function ay4(A) {
    if (A && typeof A === "object") switch (A[lQ]) {
      case k91:
      case C91:
        return !0;
    }
    return !1;
  }
  function MZ9(A) {
    if (A && typeof A === "object") switch (A[lQ]) {
      case i36:
      case k91:
      case n36:
      case C91:
        return !0;
    }
    return !1;
  }
  var PZ9 = A => (oy4(A) || ay4(A)) && !!A.anchor;
  VZ9.ALIAS = i36;
  VZ9.DOC = ny4;
  VZ9.MAP = k91;
  VZ9.NODE_TYPE = lQ;
  VZ9.PAIR = ry4;
  VZ9.SCALAR = n36;
  VZ9.SEQ = C91;
  VZ9.hasAnchor = PZ9;
  VZ9.isAlias = GZ9;
  VZ9.isCollection = ay4;
  VZ9.isDocument = ZZ9;
  VZ9.isMap = WZ9;
  VZ9.isNode = MZ9;
  VZ9.isPair = DZ9;
  VZ9.isScalar = oy4;
  VZ9.isSeq = jZ9;
});

// Register to shared state
__$.WY = WY;
