// Module: yj8
// Dependencies: au1, lu1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yj8 = v(Rj8 => {
  Object.defineProperty(Rj8, "__esModule", {
    value: !0
  });
  var zSq = __$.au1(),
    wSq = __$.lu1();
  function HSq(A, K, q) {
    let Y = [{
      type: "client_report"
    }, {
      timestamp: q || wSq.dateTimestampInSeconds(),
      discarded_events: A
    }];
    return zSq.createEnvelope(K ? {
      dsn: K
    } : {}, [Y]);
  }
  Rj8.createClientReportEnvelope = HSq;
});

// Register to shared state
__$.yj8 = yj8;
