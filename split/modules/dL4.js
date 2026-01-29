// Module: dL4
// Dependencies: yIA, BL4, M36

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dL4 = v(UL4 => {
  Object.defineProperty(UL4, "__esModule", {
    value: !0
  });
  UL4.hostDetector = void 0;
  var P36 = __$.yIA(),
    FL4 = CA("os"),
    E_9 = __$.BL4(),
    k_9 = __$.M36();
  class QL4 {
    detect(A) {
      return {
        attributes: {
          [P36.ATTR_HOST_NAME]: (0, FL4.hostname)(),
          [P36.ATTR_HOST_ARCH]: (0, k_9.normalizeArch)((0, FL4.arch)()),
          [P36.ATTR_HOST_ID]: (0, E_9.getMachineId)()
        }
      };
    }
  }
  UL4.hostDetector = new QL4();
});

// Register to shared state
__$.dL4 = dL4;
