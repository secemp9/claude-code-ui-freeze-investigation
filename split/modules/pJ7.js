// Module: pJ7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pJ7 = v((sjY, UJ7) => {
  var ajY = CA("path");
  sjY.checkPath = function (K) {
    if (process.platform === "win32") {
      if (/[<>:"|?*]/.test(K.replace(ajY.parse(K).root, ""))) {
        let Y = Error(`Path contains invalid characters: ${K}`);
        throw Y.code = "EINVAL", Y;
      }
    }
  };
});

// Register to shared state
__$.pJ7 = pJ7;
