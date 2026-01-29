// Module: Ko7
// Dependencies: EB, xFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ko7 = v(er7 => {
  Object.defineProperty(er7, "__esModule", {
    value: !0
  });
  er7.createOtlpGrpcExportDelegate = void 0;
  var O02 = __$.EB(),
    X02 = __$.xFA();
  function $02(A, K, q, Y) {
    return (0, O02.createOtlpNetworkExportDelegate)(A, K, (0, X02.createOtlpGrpcExporterTransport)({
      address: A.url,
      compression: A.compression,
      credentials: A.credentials,
      metadata: A.metadata,
      userAgent: A.userAgent,
      grpcName: q,
      grpcPath: Y
    }));
  }
  er7.createOtlpGrpcExportDelegate = $02;
});

// Register to shared state
__$.Ko7 = Ko7;
