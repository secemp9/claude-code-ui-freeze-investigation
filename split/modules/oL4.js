// Module: oL4
// Dependencies: yIA, M36

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oL4 = v(nL4 => {
  Object.defineProperty(nL4, "__esModule", {
    value: !0
  });
  nL4.osDetector = void 0;
  var cL4 = __$.yIA(),
    lL4 = CA("os"),
    C_9 = __$.M36();
  class iL4 {
    detect(A) {
      return {
        attributes: {
          [cL4.ATTR_OS_TYPE]: (0, C_9.normalizeType)((0, lL4.platform)()),
          [cL4.ATTR_OS_VERSION]: (0, lL4.release)()
        }
      };
    }
  }
  nL4.osDetector = new iL4();
});

// Register to shared state
__$.oL4 = oL4;
