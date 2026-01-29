// Module: sp
// Dependencies: MD1, jQ7, NE6, hQ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sp = v(sDA => {
  Object.defineProperty(sDA, "__esModule", {
    value: !0
  });
  sDA.convertLegacyHttpOptions = sDA.getSharedConfigurationFromEnvironment = sDA.createOtlpHttpExportDelegate = sDA.httpAgentFactoryFromOptions = void 0;
  var j72 = __$.MD1();
  Object.defineProperty(sDA, "httpAgentFactoryFromOptions", {
    enumerable: !0,
    get: function () {
      return j72.httpAgentFactoryFromOptions;
    }
  });
  var M72 = __$.jQ7();
  Object.defineProperty(sDA, "createOtlpHttpExportDelegate", {
    enumerable: !0,
    get: function () {
      return M72.createOtlpHttpExportDelegate;
    }
  });
  var P72 = __$.NE6();
  Object.defineProperty(sDA, "getSharedConfigurationFromEnvironment", {
    enumerable: !0,
    get: function () {
      return P72.getSharedConfigurationFromEnvironment;
    }
  });
  var V72 = __$.hQ7();
  Object.defineProperty(sDA, "convertLegacyHttpOptions", {
    enumerable: !0,
    get: function () {
      return V72.convertLegacyHttpOptions;
    }
  });
});

// Register to shared state
__$.sp = sp;
