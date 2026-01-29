// Module: Yx7
// Dependencies: Mv6, iW1, nW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yx7 = v(Kx7 => {
  Object.defineProperty(Kx7, "__esModule", {
    value: !0
  });
  Kx7.LogarithmMapping = void 0;
  var dDA = __$.Mv6(),
    tb7 = __$.iW1(),
    eb7 = __$.nW1();
  class Ax7 {
    _scale;
    _scaleFactor;
    _inverseFactor;
    constructor(A) {
      this._scale = A, this._scaleFactor = tb7.ldexp(Math.LOG2E, A), this._inverseFactor = tb7.ldexp(Math.LN2, -A);
    }
    mapToIndex(A) {
      if (A <= dDA.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
      if (dDA.getSignificand(A) === 0) return (dDA.getNormalBase2(A) << this._scale) - 1;
      let K = Math.floor(Math.log(A) * this._scaleFactor),
        q = this._maxNormalLowerBoundaryIndex();
      if (K >= q) return q;
      return K;
    }
    lowerBoundary(A) {
      let K = this._maxNormalLowerBoundaryIndex();
      if (A >= K) {
        if (A === K) return 2 * Math.exp((A - (1 << this._scale)) / this._scaleFactor);
        throw new eb7.MappingError(`overflow: ${A} is > maximum lower boundary: ${K}`);
      }
      let q = this._minNormalLowerBoundaryIndex();
      if (A <= q) {
        if (A === q) return dDA.MIN_VALUE;else if (A === q - 1) return Math.exp((A + (1 << this._scale)) / this._scaleFactor) / 2;
        throw new eb7.MappingError(`overflow: ${A} is < minimum lower boundary: ${q}`);
      }
      return Math.exp(A * this._inverseFactor);
    }
    get scale() {
      return this._scale;
    }
    _minNormalLowerBoundaryIndex() {
      return dDA.MIN_NORMAL_EXPONENT << this._scale;
    }
    _maxNormalLowerBoundaryIndex() {
      return (dDA.MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
    }
  }
  Kx7.LogarithmMapping = Ax7;
});

// Register to shared state
__$.Yx7 = Yx7;
