// Module: bW1
// Dependencies: jgA, Xj, rp, kW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bW1 = v(Dh7 => {
  Object.defineProperty(Dh7, "__esModule", {
    value: !0
  });
  Dh7.StatsigSession = Dh7.SessionID = void 0;
  var TsY = __$.jgA(),
    vsY = __$.Xj(),
    $h7 = __$.rp(),
    _h7 = __$.kW1(),
    Gh7 = 1800000,
    Zh7 = 14400000,
    hW1 = {};
  Dh7.SessionID = {
    get: A => {
      return Dh7.StatsigSession.get(A).data.sessionID;
    }
  };
  Dh7.StatsigSession = {
    get: A => {
      if (hW1[A] == null) hW1[A] = EsY(A);
      let K = hW1[A];
      return CsY(K);
    },
    overrideInitialSessionID: (A, K) => {
      hW1[K] = ksY(A, K);
    }
  };
  function EsY(A) {
    let K = IsY(A),
      q = Date.now();
    if (!K) K = {
      sessionID: (0, _h7.getUUID)(),
      startTime: q,
      lastUpdate: q
    };
    return {
      data: K,
      sdkKey: A
    };
  }
  function ksY(A, K) {
    let q = Date.now();
    return {
      data: {
        sessionID: A,
        startTime: q,
        lastUpdate: q
      },
      sdkKey: K
    };
  }
  function CsY(A) {
    let K = Date.now(),
      q = A.data;
    if (LsY(q) || RsY(q)) q.sessionID = (0, _h7.getUUID)(), q.startTime = K;
    q.lastUpdate = K, ysY(q, A.sdkKey), clearTimeout(A.idleTimeoutID), clearTimeout(A.ageTimeoutID);
    let Y = K - q.startTime,
      z = A.sdkKey;
    return A.idleTimeoutID = Xh7(z, Gh7), A.ageTimeoutID = Xh7(z, Zh7 - Y), A;
  }
  function Xh7(A, K) {
    return setTimeout(() => {
      let q = __STATSIG__ === null || __STATSIG__ === void 0 ? void 0 : __STATSIG__.instance(A);
      if (q) q.$emt({
        name: "session_expired"
      });
    }, K);
  }
  function LsY({
    lastUpdate: A
  }) {
    return Date.now() - A > Gh7;
  }
  function RsY({
    startTime: A
  }) {
    return Date.now() - A > Zh7;
  }
  function Wh7(A) {
    return `statsig.session_id.${(0, TsY._getStorageKey)(A)}`;
  }
  function ysY(A, K) {
    let q = Wh7(K);
    try {
      (0, $h7._setObjectInStorage)(q, A);
    } catch (Y) {
      vsY.Log.warn("Failed to save SessionID");
    }
  }
  function IsY(A) {
    let K = Wh7(A);
    return (0, $h7._getObjectFromStorage)(K);
  }
});

// Register to shared state
__$.bW1 = bW1;
