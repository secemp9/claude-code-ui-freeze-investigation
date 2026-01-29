// Module: SK1
// Dependencies: _2, E0A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SK1 = v((i6w, iY4) => {
  var dY4 = Symbol.for("undici.globalDispatcher.1"),
    {
      InvalidArgumentError: cd3
    } = __$._2(),
    ld3 = __$.E0A();
  if (lY4() === void 0) cY4(new ld3());
  function cY4(A) {
    if (!A || typeof A.dispatch !== "function") throw new cd3("Argument agent must implement Agent");
    Object.defineProperty(globalThis, dY4, {
      value: A,
      writable: !0,
      enumerable: !1,
      configurable: !1
    });
  }
  function lY4() {
    return globalThis[dY4];
  }
  iY4.exports = {
    setGlobalDispatcher: cY4,
    getGlobalDispatcher: lY4
  };
});

// Register to shared state
__$.SK1 = SK1;
