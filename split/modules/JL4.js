// Module: JL4
// Dependencies: RK, D36

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JL4 = v(wL4 => {
  Object.defineProperty(wL4, "__esModule", {
    value: !0
  });
  wL4.detectResources = void 0;
  var zL4 = __$.RK(),
    j36 = __$.D36(),
    f$9 = (A = {}) => {
      return (A.detectors || []).map(q => {
        try {
          let Y = (0, j36.resourceFromDetectedResource)(q.detect(A));
          return zL4.diag.debug(`${q.constructor.name} found resource.`, Y), Y;
        } catch (Y) {
          return zL4.diag.debug(`${q.constructor.name} failed: ${Y.message}`), (0, j36.emptyResource)();
        }
      }).reduce((q, Y) => q.merge(Y), (0, j36.emptyResource)());
    };
  wL4.detectResources = f$9;
});

// Register to shared state
__$.JL4 = JL4;
