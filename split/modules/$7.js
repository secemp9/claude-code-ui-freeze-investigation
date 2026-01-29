// Module: $7
// Dependencies: Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $7 = v(G88 => {
  Object.defineProperty(G88, "__esModule", {
    value: !0
  });
  G88.operate = G88.hasLift = void 0;
  var P4q = __$.Hz();
  function _88(A) {
    return P4q.isFunction(A === null || A === void 0 ? void 0 : A.lift);
  }
  G88.hasLift = _88;
  function V4q(A) {
    return function (K) {
      if (_88(K)) return K.lift(function (q) {
        try {
          return A(q, this);
        } catch (Y) {
          this.error(Y);
        }
      });
      throw TypeError("Unable to lift unknown Observable type");
    };
  }
  G88.operate = V4q;
});

// Register to shared state
__$.$7 = $7;
