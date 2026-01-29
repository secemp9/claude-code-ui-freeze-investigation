// Module: _N6
// Dependencies: kZ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _N6 = v(dC7 => {
  Object.defineProperty(dC7, "__esModule", {
    value: !0
  });
  dC7.addInspectMethod = dC7.format = void 0;
  var UC7 = CA("util"),
    wcY = __$.kZ1(),
    pC7 = UC7.inspect.custom || Symbol.for("nodejs.util.inspect.custom");
  dC7.format = UC7.format;
  function HcY(A) {
    A[pC7] = JcY;
  }
  dC7.addInspectMethod = HcY;
  function JcY() {
    let A = {},
      K = this;
    for (let q of wcY.getDeepKeys(K)) {
      let Y = K[q];
      A[q] = Y;
    }
    return delete A[pC7], A;
  }
});

// Register to shared state
__$._N6 = _N6;
