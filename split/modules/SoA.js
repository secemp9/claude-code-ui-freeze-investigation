// Module: SoA
// Dependencies: C1A, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SoA = v(Y58 => {
  Object.defineProperty(Y58, "__esModule", {
    value: !0
  });
  Y58.toArray = void 0;
  var NYq = __$.C1A(),
    TYq = __$.$7(),
    vYq = function (A, K) {
      return A.push(K), A;
    };
  function EYq() {
    return TYq.operate(function (A, K) {
      NYq.reduce(vYq, [])(A).subscribe(K);
    });
  }
  Y58.toArray = EYq;
});

// Register to shared state
__$.SoA = SoA;
