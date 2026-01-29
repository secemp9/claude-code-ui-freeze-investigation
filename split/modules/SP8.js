// Module: SP8
// Dependencies: H8, RvA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SP8 = v(IP8 => {
  Object.defineProperty(IP8, "__esModule", {
    value: !0
  });
  var yP8 = __$.H8(),
    uQq = __$.RvA();
  function BQq(A, K, q, Y) {
    let z = {
      sent_at: new Date().toISOString()
    };
    if (q && q.sdk) z.sdk = {
      name: q.sdk.name,
      version: q.sdk.version
    };
    if (!!Y && K) z.dsn = yP8.dsnToString(K);
    let w = mQq(A);
    return yP8.createEnvelope(z, [w]);
  }
  function mQq(A) {
    let K = uQq.serializeMetricBuckets(A);
    return [{
      type: "statsd",
      length: K.length
    }, K];
  }
  IP8.createMetricEnvelope = BQq;
});

// Register to shared state
__$.SP8 = SP8;
