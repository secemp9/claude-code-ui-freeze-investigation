// Module: nl8
// Dependencies: l0, NV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nl8 = v(il8 => {
  Object.defineProperty(il8, "__esModule", {
    value: !0
  });
  il8.warning = void 0;
  il8.stsRegionDefaultResolver = vB5;
  var ll8 = __$.l0(),
    TB5 = __$.NV();
  function vB5(A = {}) {
    return (0, TB5.loadConfig)({
      ...ll8.NODE_REGION_CONFIG_OPTIONS,
      async default() {
        if (!il8.warning.silence) console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
        return "us-east-1";
      }
    }, {
      ...ll8.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...A
    });
  }
  il8.warning = {
    silence: !1
  };
});

// Register to shared state
__$.nl8 = nl8;
