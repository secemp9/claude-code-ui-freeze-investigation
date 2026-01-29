// Module: sb7
// Dependencies: Mv6, iW1, nW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sb7 = v(ob7 => {
  Object.defineProperty(ob7, "__esModule", {
    value: !0
  });
  ob7.ExponentMapping = void 0;
  var pDA = __$.Mv6(),
    UeY = __$.iW1(),
    nb7 = __$.nW1();
  class rb7 {
    _shift;
    constructor(A) {
      this._shift = -A;
    }
    mapToIndex(A) {
      if (A < pDA.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
      let K = pDA.getNormalBase2(A),
        q = this._rightShift(pDA.getSignificand(A) - 1, pDA.SIGNIFICAND_WIDTH);
      return K + q >> this._shift;
    }
    lowerBoundary(A) {
      let K = this._minNormalLowerBoundaryIndex();
      if (A < K) throw new nb7.MappingError(`underflow: ${A} is < minimum lower boundary: ${K}`);
      let q = this._maxNormalLowerBoundaryIndex();
      if (A > q) throw new nb7.MappingError(`overflow: ${A} is > maximum lower boundary: ${q}`);
      return UeY.ldexp(1, A << this._shift);
    }
    get scale() {
      if (this._shift === 0) return 0;
      return -this._shift;
    }
    _minNormalLowerBoundaryIndex() {
      let A = pDA.MIN_NORMAL_EXPONENT >> this._shift;
      if (this._shift < 2) A--;
      return A;
    }
    _maxNormalLowerBoundaryIndex() {
      return pDA.MAX_NORMAL_EXPONENT >> this._shift;
    }
    _rightShift(A, K) {
      return Math.floor(A * Math.pow(2, -K));
    }
  }
  ob7.ExponentMapping = rb7;
});

// Register to shared state
__$.sb7 = sb7;
