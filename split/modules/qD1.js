// Module: qD1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qD1 = v(TB7 => {
  Object.defineProperty(TB7, "__esModule", {
    value: !0
  });
  TB7.createDenyListAttributesProcessor = TB7.createAllowListAttributesProcessor = TB7.createMultiAttributesProcessor = TB7.createNoopAttributesProcessor = void 0;
  class PB7 {
    process(A, K) {
      return A;
    }
  }
  class VB7 {
    _processors;
    constructor(A) {
      this._processors = A;
    }
    process(A, K) {
      let q = A;
      for (let Y of this._processors) q = Y.process(q, K);
      return q;
    }
  }
  class fB7 {
    _allowedAttributeNames;
    constructor(A) {
      this._allowedAttributeNames = A;
    }
    process(A, K) {
      let q = {};
      return Object.keys(A).filter(Y => this._allowedAttributeNames.includes(Y)).forEach(Y => q[Y] = A[Y]), q;
    }
  }
  class NB7 {
    _deniedAttributeNames;
    constructor(A) {
      this._deniedAttributeNames = A;
    }
    process(A, K) {
      let q = {};
      return Object.keys(A).filter(Y => !this._deniedAttributeNames.includes(Y)).forEach(Y => q[Y] = A[Y]), q;
    }
  }
  function W12() {
    return P12;
  }
  TB7.createNoopAttributesProcessor = W12;
  function D12(A) {
    return new VB7(A);
  }
  TB7.createMultiAttributesProcessor = D12;
  function j12(A) {
    return new fB7(A);
  }
  TB7.createAllowListAttributesProcessor = j12;
  function M12(A) {
    return new NB7(A);
  }
  TB7.createDenyListAttributesProcessor = M12;
  var P12 = new PB7();
});

// Register to shared state
__$.qD1 = qD1;
