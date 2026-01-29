// Module: MR4
// Dependencies: RK, ZR4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MR4 = v(DR4 => {
  Object.defineProperty(DR4, "__esModule", {
    value: !0
  });
  DR4.Logger = void 0;
  var c_9 = __$.RK(),
    l_9 = __$.ZR4();
  class WR4 {
    instrumentationScope;
    _sharedState;
    constructor(A, K) {
      this.instrumentationScope = A, this._sharedState = K;
    }
    emit(A) {
      let K = A.context || c_9.context.active(),
        q = new l_9.LogRecordImpl(this._sharedState, this.instrumentationScope, {
          context: K,
          ...A
        });
      this._sharedState.activeProcessor.onEmit(q, K), q._makeReadonly();
    }
  }
  DR4.Logger = WR4;
});

// Register to shared state
__$.MR4 = MR4;
