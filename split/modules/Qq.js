// Module: Qq
// Dependencies: weA, Kg1, YEA, wEA, qg1, zg1, wg1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qq = k(() => {
  __$.weA = Error.captureStackTrace ? Error.captureStackTrace : (...A) => {};
  __$.Kg1 = __$.YEA(() => {
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
    try {
      return new Function(""), !0;
    } catch (A) {
      return !1;
    }
  });
  __$.wEA = new Set(["string", "number", "symbol"]), __$.qg1 = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
  __$.zg1 = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  }, __$.wg1 = {
    int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
    uint64: [BigInt(0), BigInt("18446744073709551615")]
  };
});

// Register to shared state
__$.Qq = Qq;
