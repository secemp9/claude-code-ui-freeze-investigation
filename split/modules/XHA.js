// Module: XHA
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XHA = v(WM8 => {
  Object.defineProperty(WM8, "__esModule", {
    value: !0
  });
  var PvA = __$.H8();
  function xuq(A) {
    let K = PvA.timestampInSeconds(),
      q = {
        sid: PvA.uuid4(),
        init: !0,
        timestamp: K,
        started: K,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => Buq(q)
      };
    if (A) XB1(q, A);
    return q;
  }
  function XB1(A, K = {}) {
    if (K.user) {
      if (!A.ipAddress && K.user.ip_address) A.ipAddress = K.user.ip_address;
      if (!A.did && !K.did) A.did = K.user.id || K.user.email || K.user.username;
    }
    if (A.timestamp = K.timestamp || PvA.timestampInSeconds(), K.abnormal_mechanism) A.abnormal_mechanism = K.abnormal_mechanism;
    if (K.ignoreDuration) A.ignoreDuration = K.ignoreDuration;
    if (K.sid) A.sid = K.sid.length === 32 ? K.sid : PvA.uuid4();
    if (K.init !== void 0) A.init = K.init;
    if (!A.did && K.did) A.did = `${K.did}`;
    if (typeof K.started === "number") A.started = K.started;
    if (A.ignoreDuration) A.duration = void 0;else if (typeof K.duration === "number") A.duration = K.duration;else {
      let q = A.timestamp - A.started;
      A.duration = q >= 0 ? q : 0;
    }
    if (K.release) A.release = K.release;
    if (K.environment) A.environment = K.environment;
    if (!A.ipAddress && K.ipAddress) A.ipAddress = K.ipAddress;
    if (!A.userAgent && K.userAgent) A.userAgent = K.userAgent;
    if (typeof K.errors === "number") A.errors = K.errors;
    if (K.status) A.status = K.status;
  }
  function uuq(A, K) {
    let q = {};
    if (K) q = {
      status: K
    };else if (A.status === "ok") q = {
      status: "exited"
    };
    XB1(A, q);
  }
  function Buq(A) {
    return PvA.dropUndefinedKeys({
      sid: `${A.sid}`,
      init: A.init,
      started: new Date(A.started * 1000).toISOString(),
      timestamp: new Date(A.timestamp * 1000).toISOString(),
      status: A.status,
      errors: A.errors,
      did: typeof A.did === "number" || typeof A.did === "string" ? `${A.did}` : void 0,
      duration: A.duration,
      abnormal_mechanism: A.abnormal_mechanism,
      attrs: {
        release: A.release,
        environment: A.environment,
        ip_address: A.ipAddress,
        user_agent: A.userAgent
      }
    });
  }
  WM8.closeSession = uuq;
  WM8.makeSession = xuq;
  WM8.updateSession = XB1;
});

// Register to shared state
__$.XHA = XHA;
