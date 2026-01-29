// Module: _n4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _n4 = v($n4 => {
  Object.defineProperty($n4, "__esModule", {
    value: !0
  });
  $n4.getRetryConfig = Ur9;
  async function Ur9(A) {
    let K = Xn4(A);
    if (!A || !A.config || !K && !A.config.retry) return {
      shouldRetry: !1
    };
    K = K || {}, K.currentRetryAttempt = K.currentRetryAttempt || 0, K.retry = K.retry === void 0 || K.retry === null ? 3 : K.retry, K.httpMethodsToRetry = K.httpMethodsToRetry || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"], K.noResponseRetries = K.noResponseRetries === void 0 || K.noResponseRetries === null ? 2 : K.noResponseRetries, K.retryDelayMultiplier = K.retryDelayMultiplier ? K.retryDelayMultiplier : 2, K.timeOfFirstRequest = K.timeOfFirstRequest ? K.timeOfFirstRequest : Date.now(), K.totalTimeout = K.totalTimeout ? K.totalTimeout : Number.MAX_SAFE_INTEGER, K.maxRetryDelay = K.maxRetryDelay ? K.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    let q = [[100, 199], [408, 408], [429, 429], [500, 599]];
    if (K.statusCodesToRetry = K.statusCodesToRetry || q, A.config.retryConfig = K, !(await (K.shouldRetry || pr9)(A))) return {
      shouldRetry: !1,
      config: A.config
    };
    let z = dr9(K);
    A.config.retryConfig.currentRetryAttempt += 1;
    let w = K.retryBackoff ? K.retryBackoff(A, z) : new Promise(H => {
      setTimeout(H, z);
    });
    if (K.onRetryAttempt) K.onRetryAttempt(A);
    return await w, {
      shouldRetry: !0,
      config: A.config
    };
  }
  function pr9(A) {
    var K;
    let q = Xn4(A);
    if (A.name === "AbortError" || ((K = A.error) === null || K === void 0 ? void 0 : K.name) === "AbortError") return !1;
    if (!q || q.retry === 0) return !1;
    if (!A.response && (q.currentRetryAttempt || 0) >= q.noResponseRetries) return !1;
    if (!A.config.method || q.httpMethodsToRetry.indexOf(A.config.method.toUpperCase()) < 0) return !1;
    if (A.response && A.response.status) {
      let Y = !1;
      for (let [z, w] of q.statusCodesToRetry) {
        let H = A.response.status;
        if (H >= z && H <= w) {
          Y = !0;
          break;
        }
      }
      if (!Y) return !1;
    }
    if (q.currentRetryAttempt = q.currentRetryAttempt || 0, q.currentRetryAttempt >= q.retry) return !1;
    return !0;
  }
  function Xn4(A) {
    if (A && A.config && A.config.retryConfig) return A.config.retryConfig;
    return;
  }
  function dr9(A) {
    var K;
    let Y = (A.currentRetryAttempt ? 0 : (K = A.retryDelay) !== null && K !== void 0 ? K : 100) + (Math.pow(A.retryDelayMultiplier, A.currentRetryAttempt) - 1) / 2 * 1000,
      z = A.totalTimeout - (Date.now() - A.timeOfFirstRequest);
    return Math.min(Y, z, A.maxRetryDelay);
  }
});

// Register to shared state
__$._n4 = _n4;
