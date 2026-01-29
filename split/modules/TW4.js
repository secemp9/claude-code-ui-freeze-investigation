// Module: TW4
// Dependencies: VIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TW4 = v(fW4 => {
  Object.defineProperty(fW4, "__esModule", {
    value: !0
  });
  fW4.NoopContextManager = void 0;
  var i49 = __$.VIA();
  class VW4 {
    active() {
      return i49.ROOT_CONTEXT;
    }
    with(A, K, q, ...Y) {
      return K.call(q, ...Y);
    }
    bind(A, K) {
      return K;
    }
    enable() {
      return this;
    }
    disable() {
      return this;
    }
  }
  fW4.NoopContextManager = VW4;
});

// Register to shared state
__$.TW4 = TW4;
