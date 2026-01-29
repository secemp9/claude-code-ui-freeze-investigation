// Module: YR4
// Dependencies: yIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YR4 = v(KR4 => {
  Object.defineProperty(KR4, "__esModule", {
    value: !0
  });
  KR4.serviceInstanceIdDetector = void 0;
  var y_9 = __$.yIA(),
    I_9 = CA("crypto");
  class AR4 {
    detect(A) {
      return {
        attributes: {
          [y_9.ATTR_SERVICE_INSTANCE_ID]: (0, I_9.randomUUID)()
        }
      };
    }
  }
  KR4.serviceInstanceIdDetector = new AR4();
});

// Register to shared state
__$.YR4 = YR4;
