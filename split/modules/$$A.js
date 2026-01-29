// Module: $$A
// Dependencies: WY, mr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $$A = v(Kj9 => {
  var eD9 = __$.WY(),
    LI4 = __$.mr(),
    Aj9 = {
      collection: "seq",
      default: !0,
      nodeClass: LI4.YAMLSeq,
      tag: "tag:yaml.org,2002:seq",
      resolve(A, K) {
        if (!eD9.isSeq(A)) K("Expected a sequence for this tag");
        return A;
      },
      createNode: (A, K, q) => LI4.YAMLSeq.from(A, K, q)
    };
  Kj9.seq = Aj9;
});

// Register to shared state
__$.$$A = $$A;
