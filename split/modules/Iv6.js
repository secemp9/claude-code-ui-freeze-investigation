// Module: Iv6
// Dependencies: cW1, bgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iv6 = v(uu7 => {
  Object.defineProperty(uu7, "__esModule", {
    value: !0
  });
  uu7.TemporalMetricProcessor = void 0;
  var nA2 = __$.cW1(),
    rA2 = __$.bgA();
  class xgA {
    _aggregator;
    _unreportedAccumulations = new Map();
    _reportHistory = new Map();
    constructor(A, K) {
      this._aggregator = A, K.forEach(q => {
        this._unreportedAccumulations.set(q, []);
      });
    }
    buildMetrics(A, K, q, Y) {
      this._stashAccumulations(q);
      let z = this._getMergedUnreportedAccumulations(A),
        w = z,
        H;
      if (this._reportHistory.has(A)) {
        let O = this._reportHistory.get(A),
          X = O.collectionTime;
        if (H = O.aggregationTemporality, H === nA2.AggregationTemporality.CUMULATIVE) w = xgA.merge(O.accumulations, z, this._aggregator);else w = xgA.calibrateStartTime(O.accumulations, z, X);
      } else H = A.selectAggregationTemporality(K.type);
      this._reportHistory.set(A, {
        accumulations: w,
        collectionTime: Y,
        aggregationTemporality: H
      });
      let J = oA2(w);
      if (J.length === 0) return;
      return this._aggregator.toMetricData(K, H, J, Y);
    }
    _stashAccumulations(A) {
      let K = this._unreportedAccumulations.keys();
      for (let q of K) {
        let Y = this._unreportedAccumulations.get(q);
        if (Y === void 0) Y = [], this._unreportedAccumulations.set(q, Y);
        Y.push(A);
      }
    }
    _getMergedUnreportedAccumulations(A) {
      let K = new rA2.AttributeHashMap(),
        q = this._unreportedAccumulations.get(A);
      if (this._unreportedAccumulations.set(A, []), q === void 0) return K;
      for (let Y of q) K = xgA.merge(K, Y, this._aggregator);
      return K;
    }
    static merge(A, K, q) {
      let Y = A,
        z = K.entries(),
        w = z.next();
      while (w.done !== !0) {
        let [H, J, O] = w.value;
        if (A.has(H, O)) {
          let X = A.get(H, O),
            $ = q.merge(X, J);
          Y.set(H, $, O);
        } else Y.set(H, J, O);
        w = z.next();
      }
      return Y;
    }
    static calibrateStartTime(A, K, q) {
      for (let [Y, z] of A.keys()) K.get(Y, z)?.setStartTime(q);
      return K;
    }
  }
  uu7.TemporalMetricProcessor = xgA;
  function oA2(A) {
    return Array.from(A.entries());
  }
});

// Register to shared state
__$.Iv6 = Iv6;
