// Module: CL6
// Dependencies: RK, P9, aj1, sj1, TL6, vL6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CL6 = v(_a7 => {
  Object.defineProperty(_a7, "__esModule", {
    value: !0
  });
  _a7.buildSamplerFromEnv = _a7.loadDefaultConfig = void 0;
  var kL6 = __$.RK(),
    UB = __$.P9(),
    Ja7 = __$.aj1(),
    EL6 = __$.sj1(),
    ej1 = __$.TL6(),
    Oa7 = __$.vL6(),
    pB;
  (function (A) {
    A.AlwaysOff = "always_off", A.AlwaysOn = "always_on", A.ParentBasedAlwaysOff = "parentbased_always_off", A.ParentBasedAlwaysOn = "parentbased_always_on", A.ParentBasedTraceIdRatio = "parentbased_traceidratio", A.TraceIdRatio = "traceidratio";
  })(pB || (pB = {}));
  var AM1 = 1;
  function YX2() {
    return {
      sampler: $a7(),
      forceFlushTimeoutMillis: 30000,
      generalLimits: {
        attributeValueLengthLimit: (0, UB.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, UB.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128
      },
      spanLimits: {
        attributeValueLengthLimit: (0, UB.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
        attributeCountLimit: (0, UB.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
        linkCountLimit: (0, UB.getNumberFromEnv)("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
        eventCountLimit: (0, UB.getNumberFromEnv)("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
        attributePerEventCountLimit: (0, UB.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
        attributePerLinkCountLimit: (0, UB.getNumberFromEnv)("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128
      }
    };
  }
  _a7.loadDefaultConfig = YX2;
  function $a7() {
    let A = (0, UB.getStringFromEnv)("OTEL_TRACES_SAMPLER") ?? pB.ParentBasedAlwaysOn;
    switch (A) {
      case pB.AlwaysOn:
        return new EL6.AlwaysOnSampler();
      case pB.AlwaysOff:
        return new Ja7.AlwaysOffSampler();
      case pB.ParentBasedAlwaysOn:
        return new ej1.ParentBasedSampler({
          root: new EL6.AlwaysOnSampler()
        });
      case pB.ParentBasedAlwaysOff:
        return new ej1.ParentBasedSampler({
          root: new Ja7.AlwaysOffSampler()
        });
      case pB.TraceIdRatio:
        return new Oa7.TraceIdRatioBasedSampler(Xa7());
      case pB.ParentBasedTraceIdRatio:
        return new ej1.ParentBasedSampler({
          root: new Oa7.TraceIdRatioBasedSampler(Xa7())
        });
      default:
        return kL6.diag.error(`OTEL_TRACES_SAMPLER value "${A}" invalid, defaulting to "${pB.ParentBasedAlwaysOn}".`), new ej1.ParentBasedSampler({
          root: new EL6.AlwaysOnSampler()
        });
    }
  }
  _a7.buildSamplerFromEnv = $a7;
  function Xa7() {
    let A = (0, UB.getNumberFromEnv)("OTEL_TRACES_SAMPLER_ARG");
    if (A == null) return kL6.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${AM1}.`), AM1;
    if (A < 0 || A > 1) return kL6.diag.error(`OTEL_TRACES_SAMPLER_ARG=${A} was given, but it is out of range ([0..1]), defaulting to ${AM1}.`), AM1;
    return A;
  }
});

// Register to shared state
__$.CL6 = CL6;
