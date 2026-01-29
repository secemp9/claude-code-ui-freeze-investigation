// Module: LD6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LD6 = v(b$7 => {
  Object.defineProperty(b$7, "__esModule", {
    value: !0
  });
  b$7.childDepType = b$7.depTypeGreater = b$7.DepType = void 0;
  var N5;
  (function (A) {
    A[A.PROD = 0] = "PROD", A[A.DEV = 1] = "DEV", A[A.OPTIONAL = 2] = "OPTIONAL", A[A.DEV_OPTIONAL = 3] = "DEV_OPTIONAL", A[A.ROOT = 4] = "ROOT";
  })(N5 = b$7.DepType || (b$7.DepType = {}));
  var efY = (A, K) => {
    switch (K) {
      case N5.DEV:
        switch (A) {
          case N5.OPTIONAL:
          case N5.PROD:
          case N5.ROOT:
            return !0;
          case N5.DEV:
          case N5.DEV_OPTIONAL:
          default:
            return !1;
        }
      case N5.DEV_OPTIONAL:
        switch (A) {
          case N5.OPTIONAL:
          case N5.PROD:
          case N5.ROOT:
          case N5.DEV:
            return !0;
          case N5.DEV_OPTIONAL:
          default:
            return !1;
        }
      case N5.OPTIONAL:
        switch (A) {
          case N5.PROD:
          case N5.ROOT:
            return !0;
          case N5.OPTIONAL:
          case N5.DEV:
          case N5.DEV_OPTIONAL:
          default:
            return !1;
        }
      case N5.PROD:
        switch (A) {
          case N5.ROOT:
            return !0;
          case N5.PROD:
          case N5.OPTIONAL:
          case N5.DEV:
          case N5.DEV_OPTIONAL:
          default:
            return !1;
        }
      case N5.ROOT:
        switch (A) {
          case N5.ROOT:
          case N5.PROD:
          case N5.OPTIONAL:
          case N5.DEV:
          case N5.DEV_OPTIONAL:
          default:
            return !1;
        }
      default:
        return !1;
    }
  };
  b$7.depTypeGreater = efY;
  var ANY = (A, K) => {
    if (K === N5.ROOT) throw Error("Something went wrong, a child dependency can't be marked as the ROOT");
    switch (A) {
      case N5.ROOT:
        return K;
      case N5.PROD:
        if (K === N5.OPTIONAL) return N5.OPTIONAL;
        return N5.PROD;
      case N5.OPTIONAL:
        return N5.OPTIONAL;
      case N5.DEV_OPTIONAL:
        return N5.DEV_OPTIONAL;
      case N5.DEV:
        if (K === N5.OPTIONAL) return N5.DEV_OPTIONAL;
        return N5.DEV;
    }
  };
  b$7.childDepType = ANY;
});

// Register to shared state
__$.LD6 = LD6;
