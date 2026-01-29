// Module: jQ7
// Dependencies: gv6, OQ7, mv6, ZQ7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jQ7 = v(WQ7 => {
  Object.defineProperty(WQ7, "__esModule", {
    value: !0
  });
  WQ7.createOtlpHttpExportDelegate = void 0;
  var Q42 = __$.gv6(),
    U42 = __$.OQ7(),
    p42 = __$.mv6(),
    d42 = __$.ZQ7();
  function c42(A, K) {
    return (0, Q42.createOtlpExportDelegate)({
      transport: (0, d42.createRetryingTransport)({
        transport: (0, U42.createHttpExporterTransport)(A)
      }),
      serializer: K,
      promiseHandler: (0, p42.createBoundedQueueExportPromiseHandler)(A)
    }, {
      timeout: A.timeoutMillis
    });
  }
  WQ7.createOtlpHttpExportDelegate = c42;
});

// Register to shared state
__$.jQ7 = jQ7;
