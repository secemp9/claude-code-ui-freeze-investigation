// Module: _s7
// Dependencies: ia7, RL6, aa7, Ks7, ws7, Xs7, aj1, sj1, TL6, vL6
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _s7 = v(Qf => {
  Object.defineProperty(Qf, "__esModule", {
    value: !0
  });
  Qf.SamplingDecision = Qf.TraceIdRatioBasedSampler = Qf.ParentBasedSampler = Qf.AlwaysOnSampler = Qf.AlwaysOffSampler = Qf.NoopSpanProcessor = Qf.SimpleSpanProcessor = Qf.InMemorySpanExporter = Qf.ConsoleSpanExporter = Qf.RandomIdGenerator = Qf.BatchSpanProcessor = Qf.BasicTracerProvider = void 0;
  var kX2 = __$.ia7();
  Object.defineProperty(Qf, "BasicTracerProvider", {
    enumerable: !0,
    get: function () {
      return kX2.BasicTracerProvider;
    }
  });
  var $s7 = __$.RL6();
  Object.defineProperty(Qf, "BatchSpanProcessor", {
    enumerable: !0,
    get: function () {
      return $s7.BatchSpanProcessor;
    }
  });
  Object.defineProperty(Qf, "RandomIdGenerator", {
    enumerable: !0,
    get: function () {
      return $s7.RandomIdGenerator;
    }
  });
  var CX2 = __$.aa7();
  Object.defineProperty(Qf, "ConsoleSpanExporter", {
    enumerable: !0,
    get: function () {
      return CX2.ConsoleSpanExporter;
    }
  });
  var LX2 = __$.Ks7();
  Object.defineProperty(Qf, "InMemorySpanExporter", {
    enumerable: !0,
    get: function () {
      return LX2.InMemorySpanExporter;
    }
  });
  var RX2 = __$.ws7();
  Object.defineProperty(Qf, "SimpleSpanProcessor", {
    enumerable: !0,
    get: function () {
      return RX2.SimpleSpanProcessor;
    }
  });
  var yX2 = __$.Xs7();
  Object.defineProperty(Qf, "NoopSpanProcessor", {
    enumerable: !0,
    get: function () {
      return yX2.NoopSpanProcessor;
    }
  });
  var IX2 = __$.aj1();
  Object.defineProperty(Qf, "AlwaysOffSampler", {
    enumerable: !0,
    get: function () {
      return IX2.AlwaysOffSampler;
    }
  });
  var SX2 = __$.sj1();
  Object.defineProperty(Qf, "AlwaysOnSampler", {
    enumerable: !0,
    get: function () {
      return SX2.AlwaysOnSampler;
    }
  });
  var hX2 = __$.TL6();
  Object.defineProperty(Qf, "ParentBasedSampler", {
    enumerable: !0,
    get: function () {
      return hX2.ParentBasedSampler;
    }
  });
  var bX2 = __$.vL6();
  Object.defineProperty(Qf, "TraceIdRatioBasedSampler", {
    enumerable: !0,
    get: function () {
      return bX2.TraceIdRatioBasedSampler;
    }
  });
  var xX2 = __$.gFA();
  Object.defineProperty(Qf, "SamplingDecision", {
    enumerable: !0,
    get: function () {
      return xX2.SamplingDecision;
    }
  });
});

// Register to shared state
__$._s7 = _s7;
