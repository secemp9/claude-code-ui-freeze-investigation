// Module: SE
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SE = v(CW8 => {
  Object.defineProperty(CW8, "__esModule", {
    value: !0
  });
  var vW8 = Object.prototype.toString;
  function QEq(A) {
    switch (vW8.call(A)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return zsA(A, Error);
    }
  }
  function qHA(A, K) {
    return vW8.call(A) === `[object ${K}]`;
  }
  function UEq(A) {
    return qHA(A, "ErrorEvent");
  }
  function pEq(A) {
    return qHA(A, "DOMError");
  }
  function dEq(A) {
    return qHA(A, "DOMException");
  }
  function cEq(A) {
    return qHA(A, "String");
  }
  function EW8(A) {
    return typeof A === "object" && A !== null && "__sentry_template_string__" in A && "__sentry_template_values__" in A;
  }
  function lEq(A) {
    return A === null || EW8(A) || typeof A !== "object" && typeof A !== "function";
  }
  function kW8(A) {
    return qHA(A, "Object");
  }
  function iEq(A) {
    return typeof Event < "u" && zsA(A, Event);
  }
  function nEq(A) {
    return typeof Element < "u" && zsA(A, Element);
  }
  function rEq(A) {
    return qHA(A, "RegExp");
  }
  function oEq(A) {
    return Boolean(A && A.then && typeof A.then === "function");
  }
  function aEq(A) {
    return kW8(A) && "nativeEvent" in A && "preventDefault" in A && "stopPropagation" in A;
  }
  function sEq(A) {
    return typeof A === "number" && A !== A;
  }
  function zsA(A, K) {
    try {
      return A instanceof K;
    } catch (q) {
      return !1;
    }
  }
  function tEq(A) {
    return !!(typeof A === "object" && A !== null && (A.__isVue || A._isVue));
  }
  CW8.isDOMError = pEq;
  CW8.isDOMException = dEq;
  CW8.isElement = nEq;
  CW8.isError = QEq;
  CW8.isErrorEvent = UEq;
  CW8.isEvent = iEq;
  CW8.isInstanceOf = zsA;
  CW8.isNaN = sEq;
  CW8.isParameterizedString = EW8;
  CW8.isPlainObject = kW8;
  CW8.isPrimitive = lEq;
  CW8.isRegExp = rEq;
  CW8.isString = cEq;
  CW8.isSyntheticEvent = aEq;
  CW8.isThenable = oEq;
  CW8.isVueViewModel = tEq;
});

// Register to shared state
__$.SE = SE;
