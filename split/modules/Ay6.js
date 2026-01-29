// Module: Ay6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ay6 = v(y1K => {
  Object.defineProperty(y1K, "__esModule", {
    value: !0
  });
  y1K.isPlainObject = y1K.exists = y1K.isFunction = y1K.isNumber = y1K.isString = void 0;
  function dG2(A) {
    return typeof A === "string";
  }
  y1K.isString = dG2;
  function cG2(A) {
    return typeof A === "number";
  }
  y1K.isNumber = cG2;
  function lG2(A) {
    return typeof A === "function";
  }
  y1K.isFunction = lG2;
  function iG2(A) {
    return A !== void 0 && A !== null;
  }
  y1K.exists = iG2;
  function nG2(A) {
    return Object.prototype.toString.call(A).slice(8, -1).toLowerCase() === "object";
  }
  y1K.isPlainObject = nG2;
});

// Register to shared state
__$.Ay6 = Ay6;
