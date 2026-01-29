// Module: JB7
// Dependencies: RK, bgA, AD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JB7 = v(wB7 => {
  Object.defineProperty(wB7, "__esModule", {
    value: !0
  });
  wB7.BatchObservableResultImpl = wB7.ObservableResultImpl = void 0;
  var rDA = __$.RK(),
    qB7 = __$.bgA(),
    O12 = __$.AD1();
  class YB7 {
    _instrumentName;
    _valueType;
    _buffer = new qB7.AttributeHashMap();
    constructor(A, K) {
      this._instrumentName = A, this._valueType = K;
    }
    observe(A, K = {}) {
      if (typeof A !== "number") {
        rDA.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${A}`);
        return;
      }
      if (this._valueType === rDA.ValueType.INT && !Number.isInteger(A)) {
        if (rDA.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`), A = Math.trunc(A), !Number.isInteger(A)) return;
      }
      this._buffer.set(K, A);
    }
  }
  wB7.ObservableResultImpl = YB7;
  class zB7 {
    _buffer = new Map();
    observe(A, K, q = {}) {
      if (!(0, O12.isObservableInstrument)(A)) return;
      let Y = this._buffer.get(A);
      if (Y == null) Y = new qB7.AttributeHashMap(), this._buffer.set(A, Y);
      if (typeof K !== "number") {
        rDA.diag.warn(`non-number value provided to metric ${A._descriptor.name}: ${K}`);
        return;
      }
      if (A._descriptor.valueType === rDA.ValueType.INT && !Number.isInteger(K)) {
        if (rDA.diag.warn(`INT value type cannot accept a floating-point value for ${A._descriptor.name}, ignoring the fractional digits.`), K = Math.trunc(K), !Number.isInteger(K)) return;
      }
      Y.set(q, K);
    }
  }
  wB7.BatchObservableResultImpl = zB7;
});

// Register to shared state
__$.JB7 = JB7;
