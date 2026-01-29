// Module: Sm7
// Dependencies: mv6, gv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sm7 = v(ym7 => {
  Object.defineProperty(ym7, "__esModule", {
    value: !0
  });
  ym7.createOtlpNetworkExportDelegate = void 0;
  var M62 = __$.mv6(),
    P62 = __$.gv6();
  function V62(A, K, q) {
    return (0, P62.createOtlpExportDelegate)({
      transport: q,
      serializer: K,
      promiseHandler: (0, M62.createBoundedQueueExportPromiseHandler)(A)
    }, {
      timeout: A.timeoutMillis
    });
  }
  ym7.createOtlpNetworkExportDelegate = V62;
});

// Register to shared state
__$.Sm7 = Sm7;
