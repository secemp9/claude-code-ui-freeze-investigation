// Module: B64
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B64 = v(TN3 => {
  var NN3 = A => Object.assign(A, {
    eventStreamMarshaller: A.eventStreamSerdeProvider(A)
  });
  TN3.resolveEventStreamSerdeConfig = NN3;
});

// Register to shared state
__$.B64 = B64;
