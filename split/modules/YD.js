// Module: YD
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YD = v(bW8 => {
  Object.defineProperty(bW8, "__esModule", {
    value: !0
  });
  function HsA(A) {
    return A && A.Math == Math ? A : void 0;
  }
  var zu1 = typeof globalThis == "object" && HsA(globalThis) || typeof window == "object" && HsA(window) || typeof self == "object" && HsA(self) || typeof global == "object" && HsA(global) || function () {
    return this;
  }() || {};
  function Rkq() {
    return zu1;
  }
  function ykq(A, K, q) {
    let Y = q || zu1,
      z = Y.__SENTRY__ = Y.__SENTRY__ || {};
    return z[A] || (z[A] = K());
  }
  bW8.GLOBAL_OBJ = zu1;
  bW8.getGlobalObject = Rkq;
  bW8.getGlobalSingleton = ykq;
});

// Register to shared state
__$.YD = YD;
