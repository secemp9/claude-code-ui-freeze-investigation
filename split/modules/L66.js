// Module: L66
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var L66 = v((H6w, Bq4) => {
  var C66 = Symbol.for("undici.globalOrigin.1");
  function _m3() {
    return globalThis[C66];
  }
  function Gm3(A) {
    if (A === void 0) {
      Object.defineProperty(globalThis, C66, {
        value: void 0,
        writable: !0,
        enumerable: !1,
        configurable: !1
      });
      return;
    }
    let K = new URL(A);
    if (K.protocol !== "http:" && K.protocol !== "https:") throw TypeError(`Only http & https urls are allowed, received ${K.protocol}`);
    Object.defineProperty(globalThis, C66, {
      value: K,
      writable: !0,
      enumerable: !1,
      configurable: !1
    });
  }
  Bq4.exports = {
    getGlobalOrigin: _m3,
    setGlobalOrigin: Gm3
  };
});

// Register to shared state
__$.L66 = L66;
