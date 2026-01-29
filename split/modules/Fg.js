// Module: Fg
// Dependencies: LS1, Y3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fg = v(f78 => {
  Object.defineProperty(f78, "__esModule", {
    value: !0
  });
  f78.from = void 0;
  var Pqq = __$.LS1(),
    Vqq = __$.Y3();
  function fqq(A, K) {
    return K ? Pqq.scheduled(A, K) : Vqq.innerFrom(A);
  }
  f78.from = fqq;
});

// Register to shared state
__$.Fg = Fg;
