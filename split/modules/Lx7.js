// Module: Lx7
// Dependencies: hb7, Bb7, Wx7, Px7, Tx7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lx7 = v(ZS => {
  Object.defineProperty(ZS, "__esModule", {
    value: !0
  });
  ZS.SumAggregator = ZS.SumAccumulation = ZS.LastValueAggregator = ZS.LastValueAccumulation = ZS.ExponentialHistogramAggregator = ZS.ExponentialHistogramAccumulation = ZS.HistogramAggregator = ZS.HistogramAccumulation = ZS.DropAggregator = void 0;
  var wA2 = __$.hb7();
  Object.defineProperty(ZS, "DropAggregator", {
    enumerable: !0,
    get: function () {
      return wA2.DropAggregator;
    }
  });
  var vx7 = __$.Bb7();
  Object.defineProperty(ZS, "HistogramAccumulation", {
    enumerable: !0,
    get: function () {
      return vx7.HistogramAccumulation;
    }
  });
  Object.defineProperty(ZS, "HistogramAggregator", {
    enumerable: !0,
    get: function () {
      return vx7.HistogramAggregator;
    }
  });
  var Ex7 = __$.Wx7();
  Object.defineProperty(ZS, "ExponentialHistogramAccumulation", {
    enumerable: !0,
    get: function () {
      return Ex7.ExponentialHistogramAccumulation;
    }
  });
  Object.defineProperty(ZS, "ExponentialHistogramAggregator", {
    enumerable: !0,
    get: function () {
      return Ex7.ExponentialHistogramAggregator;
    }
  });
  var kx7 = __$.Px7();
  Object.defineProperty(ZS, "LastValueAccumulation", {
    enumerable: !0,
    get: function () {
      return kx7.LastValueAccumulation;
    }
  });
  Object.defineProperty(ZS, "LastValueAggregator", {
    enumerable: !0,
    get: function () {
      return kx7.LastValueAggregator;
    }
  });
  var Cx7 = __$.Tx7();
  Object.defineProperty(ZS, "SumAccumulation", {
    enumerable: !0,
    get: function () {
      return Cx7.SumAccumulation;
    }
  });
  Object.defineProperty(ZS, "SumAggregator", {
    enumerable: !0,
    get: function () {
      return Cx7.SumAggregator;
    }
  });
});

// Register to shared state
__$.Lx7 = Lx7;
