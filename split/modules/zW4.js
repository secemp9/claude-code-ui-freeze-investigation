// Module: zW4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zW4 = v(qW4 => {
  Object.defineProperty(qW4, "__esModule", {
    value: !0
  });
  qW4.DiagConsoleLogger = void 0;
  var rq6 = [{
    n: "error",
    c: "error"
  }, {
    n: "warn",
    c: "warn"
  }, {
    n: "info",
    c: "info"
  }, {
    n: "debug",
    c: "debug"
  }, {
    n: "verbose",
    c: "trace"
  }];
  class KW4 {
    constructor() {
      function A(K) {
        return function (...q) {
          if (console) {
            let Y = console[K];
            if (typeof Y !== "function") Y = console.log;
            if (typeof Y === "function") return Y.apply(console, q);
          }
        };
      }
      for (let K = 0; K < rq6.length; K++) this[rq6[K].n] = A(rq6[K].c);
    }
  }
  qW4.DiagConsoleLogger = KW4;
});

// Register to shared state
__$.zW4 = zW4;
