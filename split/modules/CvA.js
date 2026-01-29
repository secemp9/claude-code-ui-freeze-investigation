// Module: CvA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CvA = v(zP8 => {
  Object.defineProperty(zP8, "__esModule", {
    value: !0
  });
  var ngq = "sentry.source",
    rgq = "sentry.sample_rate",
    ogq = "sentry.op",
    agq = "sentry.origin",
    sgq = "profile_id";
  zP8.SEMANTIC_ATTRIBUTE_PROFILE_ID = sgq;
  zP8.SEMANTIC_ATTRIBUTE_SENTRY_OP = ogq;
  zP8.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = agq;
  zP8.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = rgq;
  zP8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = ngq;
});

// Register to shared state
__$.CvA = CvA;
