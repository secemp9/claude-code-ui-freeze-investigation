// Module: gB1
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gB1 = v(FP8 => {
  Object.defineProperty(FP8, "__esModule", {
    value: !0
  });
  var mB1 = __$.H8();
  function aQq(A, K, q, Y, z) {
    let w = {
      sent_at: new Date().toISOString()
    };
    if (q && q.sdk) w.sdk = {
      name: q.sdk.name,
      version: q.sdk.version
    };
    if (!!Y && !!z) w.dsn = mB1.dsnToString(z);
    if (K) w.trace = mB1.dropUndefinedKeys(K);
    let H = sQq(A);
    return mB1.createEnvelope(w, [H]);
  }
  function sQq(A) {
    return [{
      type: "check_in"
    }, A];
  }
  FP8.createCheckInEnvelope = aQq;
});

// Register to shared state
__$.gB1 = gB1;
