// Module: b4A
// Dependencies: EZ4, cq6, SZ4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b4A = v(hZ4 => {
  Object.defineProperty(hZ4, "__esModule", {
    value: !0
  });
  hZ4.unregisterGlobal = hZ4.getGlobal = hZ4.registerGlobal = void 0;
  var $49 = __$.EZ4(),
    iXA = __$.cq6(),
    _49 = __$.SZ4(),
    G49 = iXA.VERSION.split(".")[0],
    jIA = Symbol.for(`opentelemetry.js.api.${G49}`),
    MIA = $49._globalThis;
  function Z49(A, K, q, Y = !1) {
    var z;
    let w = MIA[jIA] = (z = MIA[jIA]) !== null && z !== void 0 ? z : {
      version: iXA.VERSION
    };
    if (!Y && w[A]) {
      let H = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${A}`);
      return q.error(H.stack || H.message), !1;
    }
    if (w.version !== iXA.VERSION) {
      let H = Error(`@opentelemetry/api: Registration of version v${w.version} for ${A} does not match previously registered API v${iXA.VERSION}`);
      return q.error(H.stack || H.message), !1;
    }
    return w[A] = K, q.debug(`@opentelemetry/api: Registered a global for ${A} v${iXA.VERSION}.`), !0;
  }
  hZ4.registerGlobal = Z49;
  function W49(A) {
    var K, q;
    let Y = (K = MIA[jIA]) === null || K === void 0 ? void 0 : K.version;
    if (!Y || !(0, _49.isCompatible)(Y)) return;
    return (q = MIA[jIA]) === null || q === void 0 ? void 0 : q[A];
  }
  hZ4.getGlobal = W49;
  function D49(A, K) {
    K.debug(`@opentelemetry/api: Unregistering a global for ${A} v${iXA.VERSION}.`);
    let q = MIA[jIA];
    if (q) delete q[A];
  }
  hZ4.unregisterGlobal = D49;
});

// Register to shared state
__$.b4A = b4A;
