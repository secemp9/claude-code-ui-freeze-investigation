// Module: BgA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BgA = v(Dm7 => {
  Object.defineProperty(Dm7, "__esModule", {
    value: !0
  });
  Dm7.getSharedConfigurationDefaults = Dm7.mergeOtlpSharedConfigurationWithDefaults = Dm7.wrapStaticHeadersInFunction = Dm7.validateTimeoutMillis = void 0;
  function Wm7(A) {
    if (Number.isFinite(A) && A > 0) return A;
    throw Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${A}')`);
  }
  Dm7.validateTimeoutMillis = Wm7;
  function Y62(A) {
    if (A == null) return;
    return async () => A;
  }
  Dm7.wrapStaticHeadersInFunction = Y62;
  function z62(A, K, q) {
    return {
      timeoutMillis: Wm7(A.timeoutMillis ?? K.timeoutMillis ?? q.timeoutMillis),
      concurrencyLimit: A.concurrencyLimit ?? K.concurrencyLimit ?? q.concurrencyLimit,
      compression: A.compression ?? K.compression ?? q.compression
    };
  }
  Dm7.mergeOtlpSharedConfigurationWithDefaults = z62;
  function w62() {
    return {
      timeoutMillis: 1e4,
      concurrencyLimit: 30,
      compression: "none"
    };
  }
  Dm7.getSharedConfigurationDefaults = w62;
});

// Register to shared state
__$.BgA = BgA;
