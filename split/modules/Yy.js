// Module: Yy
// Dependencies: l0, nl8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yy = v(zn => {
  var zLA = __$.l0(),
    rl8 = __$.nl8(),
    kB5 = A => {
      return {
        setRegion(K) {
          A.region = K;
        },
        region() {
          return A.region;
        }
      };
    },
    CB5 = A => {
      return {
        region: A.region()
      };
    };
  Object.defineProperty(zn, "NODE_REGION_CONFIG_FILE_OPTIONS", {
    enumerable: !0,
    get: function () {
      return zLA.NODE_REGION_CONFIG_FILE_OPTIONS;
    }
  });
  Object.defineProperty(zn, "NODE_REGION_CONFIG_OPTIONS", {
    enumerable: !0,
    get: function () {
      return zLA.NODE_REGION_CONFIG_OPTIONS;
    }
  });
  Object.defineProperty(zn, "REGION_ENV_NAME", {
    enumerable: !0,
    get: function () {
      return zLA.REGION_ENV_NAME;
    }
  });
  Object.defineProperty(zn, "REGION_INI_NAME", {
    enumerable: !0,
    get: function () {
      return zLA.REGION_INI_NAME;
    }
  });
  Object.defineProperty(zn, "resolveRegionConfig", {
    enumerable: !0,
    get: function () {
      return zLA.resolveRegionConfig;
    }
  });
  zn.getAwsRegionExtensionConfiguration = kB5;
  zn.resolveAwsRegionExtensionConfiguration = CB5;
  Object.keys(rl8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(zn, A)) Object.defineProperty(zn, A, {
      enumerable: !0,
      get: function () {
        return rl8[A];
      }
    });
  });
});

// Register to shared state
__$.Yy = Yy;
