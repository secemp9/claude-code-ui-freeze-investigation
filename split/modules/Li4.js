// Module: Li4
// Dependencies: Cz1, Rz1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Li4 = v(yn9 => {
  var Ci4 = __$.Cz1(),
    xz1 = __$.Rz1();
  yn9.convert = (A, K, {
    context: q = "The provided value"
  } = {}) => {
    if (typeof K !== "function") throw new A.TypeError(q + " is not a function");
    function Y(...z) {
      let w = xz1.tryWrapperForImpl(this),
        H;
      for (let J = 0; J < z.length; J++) z[J] = xz1.tryWrapperForImpl(z[J]);
      return H = Reflect.apply(K, w, z), H = Ci4.any(H, {
        context: q,
        globals: A
      }), H;
    }
    return Y.construct = (...z) => {
      for (let H = 0; H < z.length; H++) z[H] = xz1.tryWrapperForImpl(z[H]);
      let w = Reflect.construct(K, z);
      return w = Ci4.any(w, {
        context: q,
        globals: A
      }), w;
    }, Y[xz1.wrapperSymbol] = K, Y.objectReference = K, Y;
  };
});

// Register to shared state
__$.Li4 = Li4;
