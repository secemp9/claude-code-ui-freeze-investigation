// Module: vq8
// Dependencies: QS1, Ug, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vq8 = v(Nq8 => {
  Object.defineProperty(Nq8, "__esModule", {
    value: !0
  });
  Nq8.partition = void 0;
  var G9q = __$.QS1(),
    Vq8 = __$.Ug(),
    fq8 = __$.Y3();
  function Z9q(A, K, q) {
    return [Vq8.filter(K, q)(fq8.innerFrom(A)), Vq8.filter(G9q.not(K, q))(fq8.innerFrom(A))];
  }
  Nq8.partition = Z9q;
});

// Register to shared state
__$.vq8 = vq8;
