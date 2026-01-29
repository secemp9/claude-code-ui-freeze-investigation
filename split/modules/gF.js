// Module: gF
// Dependencies: Hu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gF = v(Hl1 => {
  var wl1 = __$.Hu8(),
    p05 = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: !0,
      priority: "low"
    },
    d05 = A => ({
      applyToStack: K => {
        K.add(wl1.recursionDetectionMiddleware(), p05);
      }
    });
  Hl1.getRecursionDetectionPlugin = d05;
  Object.keys(wl1).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(Hl1, A)) Object.defineProperty(Hl1, A, {
      enumerable: !0,
      get: function () {
        return wl1[A];
      }
    });
  });
});

// Register to shared state
__$.gF = gF;
