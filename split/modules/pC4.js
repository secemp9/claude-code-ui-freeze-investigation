// Module: pC4
// Dependencies: RK, TIA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pC4 = v(QC4 => {
  Object.defineProperty(QC4, "__esModule", {
    value: !0
  });
  QC4._export = void 0;
  var FC4 = __$.RK(),
    dX9 = __$.TIA();
  function cX9(A, K) {
    return new Promise(q => {
      FC4.context.with((0, dX9.suppressTracing)(FC4.context.active()), () => {
        A.export(K, Y => {
          q(Y);
        });
      });
    });
  }
  QC4._export = cX9;
});

// Register to shared state
__$.pC4 = pC4;
