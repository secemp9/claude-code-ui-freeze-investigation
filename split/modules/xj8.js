// Module: xj8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xj8 = v(bj8 => {
  Object.defineProperty(bj8, "__esModule", {
    value: !0
  });
  var Ij8 = 60000;
  function Sj8(A, K = Date.now()) {
    let q = parseInt(`${A}`, 10);
    if (!isNaN(q)) return q * 1000;
    let Y = Date.parse(`${A}`);
    if (!isNaN(Y)) return Y - K;
    return Ij8;
  }
  function hj8(A, K) {
    return A[K] || A.all || 0;
  }
  function OSq(A, K, q = Date.now()) {
    return hj8(A, K) > q;
  }
  function XSq(A, {
    statusCode: K,
    headers: q
  }, Y = Date.now()) {
    let z = {
        ...A
      },
      w = q && q["x-sentry-rate-limits"],
      H = q && q["retry-after"];
    if (w) for (let J of w.trim().split(",")) {
      let [O, X,,, $] = J.split(":", 5),
        _ = parseInt(O, 10),
        G = (!isNaN(_) ? _ : 60) * 1000;
      if (!X) z.all = Y + G;else for (let Z of X.split(";")) if (Z === "metric_bucket") {
        if (!$ || $.split(";").includes("custom")) z[Z] = Y + G;
      } else z[Z] = Y + G;
    } else if (H) z.all = Y + Sj8(H, Y);else if (K === 429) z.all = Y + 60000;
    return z;
  }
  bj8.DEFAULT_RETRY_AFTER = Ij8;
  bj8.disabledUntil = hj8;
  bj8.isRateLimited = OSq;
  bj8.parseRetryAfterHeader = Sj8;
  bj8.updateRateLimits = XSq;
});

// Register to shared state
__$.xj8 = xj8;
