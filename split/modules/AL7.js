// Module: AL7
// Dependencies: _N6, oC7, kZ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AL7 = v(tC7 => {
  Object.defineProperty(tC7, "__esModule", {
    value: !0
  });
  tC7.extendError = void 0;
  var aC7 = __$._N6(),
    CZ1 = __$.oC7(),
    sC7 = __$.kZ1(),
    PcY = ["name", "message", "stack"];
  function VcY(A, K, q) {
    let Y = A;
    if (fcY(Y, K), K && typeof K === "object") NcY(Y, K);
    if (Y.toJSON = sC7.toJSON, aC7.addInspectMethod) aC7.addInspectMethod(Y);
    if (q && typeof q === "object") Object.assign(Y, q);
    return Y;
  }
  tC7.extendError = VcY;
  function fcY(A, K) {
    let q = Object.getOwnPropertyDescriptor(A, "stack");
    if (CZ1.isLazyStack(q)) CZ1.lazyJoinStacks(q, A, K);else if (CZ1.isWritableStack(q)) A.stack = CZ1.joinStacks(A, K);
  }
  function NcY(A, K) {
    let q = sC7.getDeepKeys(K, PcY),
      Y = A,
      z = K;
    for (let w of q) if (Y[w] === void 0) try {
      Y[w] = z[w];
    } catch (H) {}
  }
});

// Register to shared state
__$.AL7 = AL7;
