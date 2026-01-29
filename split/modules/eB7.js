// Module: eB7
// Dependencies: YD1, qD1, dB7, nB7, SgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eB7 = v(sB7 => {
  Object.defineProperty(sB7, "__esModule", {
    value: !0
  });
  sB7.View = void 0;
  var g12 = __$.YD1(),
    rB7 = __$.qD1(),
    F12 = __$.dB7(),
    Q12 = __$.nB7(),
    oB7 = __$.SgA();
  function U12(A) {
    return A.instrumentName == null && A.instrumentType == null && A.instrumentUnit == null && A.meterName == null && A.meterVersion == null && A.meterSchemaUrl == null;
  }
  function p12(A) {
    if (U12(A)) throw Error("Cannot create view with no selector arguments supplied");
    if (A.name != null && (A?.instrumentName == null || g12.PatternPredicate.hasWildcard(A.instrumentName))) throw Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
  }
  class aB7 {
    name;
    description;
    aggregation;
    attributesProcessor;
    instrumentSelector;
    meterSelector;
    aggregationCardinalityLimit;
    constructor(A) {
      if (p12(A), A.attributesProcessors != null) this.attributesProcessor = (0, rB7.createMultiAttributesProcessor)(A.attributesProcessors);else this.attributesProcessor = (0, rB7.createNoopAttributesProcessor)();
      this.name = A.name, this.description = A.description, this.aggregation = (0, oB7.toAggregation)(A.aggregation ?? {
        type: oB7.AggregationType.DEFAULT
      }), this.instrumentSelector = new F12.InstrumentSelector({
        name: A.instrumentName,
        type: A.instrumentType,
        unit: A.instrumentUnit
      }), this.meterSelector = new Q12.MeterSelector({
        name: A.meterName,
        version: A.meterVersion,
        schemaUrl: A.meterSchemaUrl
      }), this.aggregationCardinalityLimit = A.aggregationCardinalityLimit;
    }
  }
  sB7.View = aB7;
});

// Register to shared state
__$.eB7 = eB7;
