// Module: Xj
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xj = v(xI7 => {
  Object.defineProperty(xI7, "__esModule", {
    value: !0
  });
  xI7.Log = xI7.LogLevel = void 0;
  var hoY = " DEBUG ",
    boY = "  INFO ",
    xoY = "  WARN ",
    uoY = " ERROR ";
  function XW1(A) {
    return A.unshift("[Statsig]"), A;
  }
  xI7.LogLevel = {
    None: 0,
    Error: 1,
    Warn: 2,
    Info: 3,
    Debug: 4
  };
  class R5A {
    static info(...A) {
      if (R5A.level >= xI7.LogLevel.Info) console.info(boY, ...XW1(A));
    }
    static debug(...A) {
      if (R5A.level >= xI7.LogLevel.Debug) console.debug(hoY, ...XW1(A));
    }
    static warn(...A) {
      if (R5A.level >= xI7.LogLevel.Warn) console.warn(xoY, ...XW1(A));
    }
    static error(...A) {
      if (R5A.level >= xI7.LogLevel.Error) console.error(uoY, ...XW1(A));
    }
  }
  xI7.Log = R5A;
  R5A.level = xI7.LogLevel.Warn;
});

// Register to shared state
__$.Xj = Xj;
