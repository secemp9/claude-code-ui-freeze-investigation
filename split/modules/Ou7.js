// Module: Ou7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ou7 = v(Hu7 => {
  Object.defineProperty(Hu7, "__esModule", {
    value: !0
  });
  Hu7.ViewRegistry = void 0;
  class wu7 {
    _registeredViews = [];
    addView(A) {
      this._registeredViews.push(A);
    }
    findViews(A, K) {
      return this._registeredViews.filter(Y => {
        return this._matchInstrument(Y.instrumentSelector, A) && this._matchMeter(Y.meterSelector, K);
      });
    }
    _matchInstrument(A, K) {
      return (A.getType() === void 0 || K.type === A.getType()) && A.getNameFilter().match(K.name) && A.getUnitFilter().match(K.unit);
    }
    _matchMeter(A, K) {
      return A.getNameFilter().match(K.name) && (K.version === void 0 || A.getVersionFilter().match(K.version)) && (K.schemaUrl === void 0 || A.getSchemaUrlFilter().match(K.schemaUrl));
    }
  }
  Hu7.ViewRegistry = wu7;
});

// Register to shared state
__$.Ou7 = Ou7;
