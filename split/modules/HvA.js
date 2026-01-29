// Module: HvA
// Dependencies: hE, zvA, YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HvA = v(XD8 => {
  Object.defineProperty(XD8, "__esModule", {
    value: !0
  });
  var YLq = __$.hE(),
    ju1 = __$.zvA(),
    zLq = __$.YD();
  function wLq() {
    let A = zLq.GLOBAL_OBJ,
      K = A.crypto || A.msCrypto,
      q = () => Math.random() * 16;
    try {
      if (K && K.randomUUID) return K.randomUUID().replace(/-/g, "");
      if (K && K.getRandomValues) q = () => {
        let Y = new Uint8Array(1);
        return K.getRandomValues(Y), Y[0];
      };
    } catch (Y) {}
    return ([1e7] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, Y => (Y ^ (q() & 15) >> Y / 4).toString(16));
  }
  function OD8(A) {
    return A.exception && A.exception.values ? A.exception.values[0] : void 0;
  }
  function HLq(A) {
    let {
      message: K,
      event_id: q
    } = A;
    if (K) return K;
    let Y = OD8(A);
    if (Y) {
      if (Y.type && Y.value) return `${Y.type}: ${Y.value}`;
      return Y.type || Y.value || q || "<unknown>";
    }
    return q || "<unknown>";
  }
  function JLq(A, K, q) {
    let Y = A.exception = A.exception || {},
      z = Y.values = Y.values || [],
      w = z[0] = z[0] || {};
    if (!w.value) w.value = K || "";
    if (!w.type) w.type = q || "Error";
  }
  function OLq(A, K) {
    let q = OD8(A);
    if (!q) return;
    let Y = {
        type: "generic",
        handled: !0
      },
      z = q.mechanism;
    if (q.mechanism = {
      ...Y,
      ...z,
      ...K
    }, K && "data" in K) {
      let w = {
        ...(z && z.data),
        ...K.data
      };
      q.mechanism.data = w;
    }
  }
  var XLq = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
  function $Lq(A) {
    let K = A.match(XLq) || [],
      q = parseInt(K[1], 10),
      Y = parseInt(K[2], 10),
      z = parseInt(K[3], 10);
    return {
      buildmetadata: K[5],
      major: isNaN(q) ? void 0 : q,
      minor: isNaN(Y) ? void 0 : Y,
      patch: isNaN(z) ? void 0 : z,
      prerelease: K[4]
    };
  }
  function _Lq(A, K, q = 5) {
    if (K.lineno === void 0) return;
    let Y = A.length,
      z = Math.max(Math.min(Y - 1, K.lineno - 1), 0);
    K.pre_context = A.slice(Math.max(0, z - q), z).map(w => ju1.snipLine(w, 0)), K.context_line = ju1.snipLine(A[Math.min(Y - 1, z)], K.colno || 0), K.post_context = A.slice(Math.min(z + 1, Y), z + 1 + q).map(w => ju1.snipLine(w, 0));
  }
  function GLq(A) {
    if (A && A.__sentry_captured__) return !0;
    try {
      YLq.addNonEnumerableProperty(A, "__sentry_captured__", !0);
    } catch (K) {}
    return !1;
  }
  function ZLq(A) {
    return Array.isArray(A) ? A : [A];
  }
  XD8.addContextToFrame = _Lq;
  XD8.addExceptionMechanism = OLq;
  XD8.addExceptionTypeValue = JLq;
  XD8.arrayify = ZLq;
  XD8.checkOrSetAlreadyCaught = GLq;
  XD8.getEventDescription = HLq;
  XD8.parseSemver = $Lq;
  XD8.uuid4 = wLq;
});

// Register to shared state
__$.HvA = HvA;
