// Module: lu1
// Dependencies: YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lu1 = v(jj8 => {
  Object.defineProperty(jj8, "__esModule", {
    value: !0
  });
  var Gj8 = __$.YD(),
    Zj8 = 1000;
  function Wj8() {
    return Date.now() / Zj8;
  }
  function JIq() {
    let {
      performance: A
    } = Gj8.GLOBAL_OBJ;
    if (!A || !A.now) return Wj8;
    let K = Date.now() - A.now(),
      q = A.timeOrigin == null ? K : A.timeOrigin;
    return () => {
      return (q + A.now()) / Zj8;
    };
  }
  var Dj8 = JIq(),
    OIq = Dj8;
  jj8._browserPerformanceTimeOriginMode = void 0;
  var XIq = (() => {
    let {
      performance: A
    } = Gj8.GLOBAL_OBJ;
    if (!A || !A.now) {
      jj8._browserPerformanceTimeOriginMode = "none";
      return;
    }
    let K = 3600000,
      q = A.now(),
      Y = Date.now(),
      z = A.timeOrigin ? Math.abs(A.timeOrigin + q - Y) : K,
      w = z < K,
      H = A.timing && A.timing.navigationStart,
      O = typeof H === "number" ? Math.abs(H + q - Y) : K,
      X = O < K;
    if (w || X) if (z <= O) return jj8._browserPerformanceTimeOriginMode = "timeOrigin", A.timeOrigin;else return jj8._browserPerformanceTimeOriginMode = "navigationStart", H;
    return jj8._browserPerformanceTimeOriginMode = "dateNow", Y;
  })();
  jj8.browserPerformanceTimeOrigin = XIq;
  jj8.dateTimestampInSeconds = Wj8;
  jj8.timestampInSeconds = Dj8;
  jj8.timestampWithMs = OIq;
});

// Register to shared state
__$.lu1 = lu1;
