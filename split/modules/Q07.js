// Module: Q07
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q07 = v((wVY, F07) => {
  var zVY = CA("path");
  wVY.checkPath = function (K) {
    if (process.platform === "win32") {
      if (/[<>:"|?*]/.test(K.replace(zVY.parse(K).root, ""))) {
        let Y = Error(`Path contains invalid characters: ${K}`);
        throw Y.code = "EINVAL", Y;
      }
    }
  };
});

// Register to shared state
__$.Q07 = Q07;
