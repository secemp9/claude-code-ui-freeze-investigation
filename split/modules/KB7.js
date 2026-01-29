// Module: KB7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KB7 = v(eu7 => {
  Object.defineProperty(eu7, "__esModule", {
    value: !0
  });
  eu7.MultiMetricStorage = void 0;
  class tu7 {
    _backingStorages;
    constructor(A) {
      this._backingStorages = A;
    }
    record(A, K, q, Y) {
      this._backingStorages.forEach(z => {
        z.record(A, K, q, Y);
      });
    }
  }
  eu7.MultiMetricStorage = tu7;
});

// Register to shared state
__$.KB7 = KB7;
