// Module: lv6
// Dependencies: sm7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lv6 = v((tm7, cv6) => {
  cv6.exports = B62;
  function B62(moduleName) {
    try {
      var mod = moduleName === "long" ? __$.sm7() : moduleName === "buffer" ? CA("buffer") : moduleName === "fs" ? CA("fs") : eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (A) {}
    return null;
  }
});

// Register to shared state
__$.lv6 = lv6;
