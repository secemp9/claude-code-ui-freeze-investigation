// Module: I5A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I5A = v(sI7 => {
  Object.defineProperty(sI7, "__esModule", {
    value: !0
  });
  sI7._getCurrentPageUrlSafe = sI7._addDocumentEventListenerSafe = sI7._addWindowEventListenerSafe = sI7._isServerEnv = sI7._getDocumentSafe = sI7._getWindowSafe = void 0;
  var AaY = () => {
    return typeof window < "u" ? window : null;
  };
  sI7._getWindowSafe = AaY;
  var KaY = () => {
    var A;
    let K = sI7._getWindowSafe();
    return (A = K === null || K === void 0 ? void 0 : K.document) !== null && A !== void 0 ? A : null;
  };
  sI7._getDocumentSafe = KaY;
  var qaY = () => {
    if (sI7._getDocumentSafe() !== null) return !1;
    let A = typeof process < "u" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime === "string" || A;
  };
  sI7._isServerEnv = qaY;
  var YaY = (A, K) => {
    let q = sI7._getWindowSafe();
    if (typeof (q === null || q === void 0 ? void 0 : q.addEventListener) === "function") q.addEventListener(A, K);
  };
  sI7._addWindowEventListenerSafe = YaY;
  var zaY = (A, K) => {
    let q = sI7._getDocumentSafe();
    if (typeof (q === null || q === void 0 ? void 0 : q.addEventListener) === "function") q.addEventListener(A, K);
  };
  sI7._addDocumentEventListenerSafe = zaY;
  var waY = () => {
    var A;
    try {
      return (A = sI7._getWindowSafe()) === null || A === void 0 ? void 0 : A.location.href.split(/[?#]/)[0];
    } catch (K) {
      return;
    }
  };
  sI7._getCurrentPageUrlSafe = waY;
});

// Register to shared state
__$.I5A = I5A;
