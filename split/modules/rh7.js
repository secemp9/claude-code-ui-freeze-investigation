// Module: rh7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rh7 = v(ih7 => {
  Object.defineProperty(ih7, "__esModule", {
    value: !0
  });
  ih7.UPDATE_DETAIL_ERROR_MESSAGES = ih7.createUpdateDetails = void 0;
  var jtY = (A, K, q, Y, z, w) => {
    return {
      duration: q,
      source: K,
      success: A,
      error: Y,
      sourceUrl: z,
      warnings: w
    };
  };
  ih7.createUpdateDetails = jtY;
  ih7.UPDATE_DETAIL_ERROR_MESSAGES = {
    NO_NETWORK_DATA: "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error."
  };
});

// Register to shared state
__$.rh7 = rh7;
