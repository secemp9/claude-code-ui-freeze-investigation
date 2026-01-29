// Module: mS4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mS4 = v(If9 => {
  var yf9 = A => "type" in A ? JY1(A) : HY1(A);
  function JY1(A) {
    switch (A.type) {
      case "block-scalar":
        {
          let K = "";
          for (let q of A.props) K += JY1(q);
          return K + A.source;
        }
      case "block-map":
      case "block-seq":
        {
          let K = "";
          for (let q of A.items) K += HY1(q);
          return K;
        }
      case "flow-collection":
        {
          let K = A.start.source;
          for (let q of A.items) K += HY1(q);
          for (let q of A.end) K += q.source;
          return K;
        }
      case "document":
        {
          let K = HY1(A);
          if (A.end) for (let q of A.end) K += q.source;
          return K;
        }
      default:
        {
          let K = A.source;
          if ("end" in A && A.end) for (let q of A.end) K += q.source;
          return K;
        }
    }
  }
  function HY1({
    start: A,
    key: K,
    sep: q,
    value: Y
  }) {
    let z = "";
    for (let w of A) z += w.source;
    if (K) z += JY1(K);
    if (q) for (let w of q) z += w.source;
    if (Y) z += JY1(Y);
    return z;
  }
  If9.stringify = yf9;
});

// Register to shared state
__$.mS4 = mS4;
