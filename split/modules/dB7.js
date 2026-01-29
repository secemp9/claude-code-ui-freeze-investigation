// Module: dB7
// Dependencies: YD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dB7 = v(UB7 => {
  Object.defineProperty(UB7, "__esModule", {
    value: !0
  });
  UB7.InstrumentSelector = void 0;
  var FB7 = __$.YD1();
  class QB7 {
    _nameFilter;
    _type;
    _unitFilter;
    constructor(A) {
      this._nameFilter = new FB7.PatternPredicate(A?.name ?? "*"), this._type = A?.type, this._unitFilter = new FB7.ExactPredicate(A?.unit);
    }
    getType() {
      return this._type;
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getUnitFilter() {
      return this._unitFilter;
    }
  }
  UB7.InstrumentSelector = QB7;
});

// Register to shared state
__$.dB7 = dB7;
