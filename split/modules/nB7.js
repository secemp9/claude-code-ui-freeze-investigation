// Module: nB7
// Dependencies: YD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nB7 = v(lB7 => {
  Object.defineProperty(lB7, "__esModule", {
    value: !0
  });
  lB7.MeterSelector = void 0;
  var bv6 = __$.YD1();
  class cB7 {
    _nameFilter;
    _versionFilter;
    _schemaUrlFilter;
    constructor(A) {
      this._nameFilter = new bv6.ExactPredicate(A?.name), this._versionFilter = new bv6.ExactPredicate(A?.version), this._schemaUrlFilter = new bv6.ExactPredicate(A?.schemaUrl);
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getVersionFilter() {
      return this._versionFilter;
    }
    getSchemaUrlFilter() {
      return this._schemaUrlFilter;
    }
  }
  lB7.MeterSelector = cB7;
});

// Register to shared state
__$.nB7 = nB7;
