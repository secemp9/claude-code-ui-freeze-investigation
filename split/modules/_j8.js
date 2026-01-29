// Module: _j8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _j8 = v($j8 => {
  Object.defineProperty($j8, "__esModule", {
    value: !0
  });
  var Oj8 = ["fatal", "error", "warning", "log", "info", "debug"];
  function YIq(A) {
    return Xj8(A);
  }
  function Xj8(A) {
    return A === "warn" ? "warning" : Oj8.includes(A) ? A : "log";
  }
  $j8.severityFromString = YIq;
  $j8.severityLevelFromString = Xj8;
  $j8.validSeverityLevels = Oj8;
});

// Register to shared state
__$._j8 = _j8;
