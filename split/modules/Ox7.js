// Module: Ox7
// Dependencies: sb7, Yx7, nW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ox7 = v(Hx7 => {
  Object.defineProperty(Hx7, "__esModule", {
    value: !0
  });
  Hx7.getMapping = void 0;
  var peY = __$.sb7(),
    deY = __$.Yx7(),
    ceY = __$.nW1(),
    zx7 = -10,
    wx7 = 20,
    leY = Array.from({
      length: 31
    }, (A, K) => {
      if (K > 10) return new deY.LogarithmMapping(K - 10);
      return new peY.ExponentMapping(K - 10);
    });
  function ieY(A) {
    if (A > wx7 || A < zx7) throw new ceY.MappingError(`expected scale >= ${zx7} && <= ${wx7}, got: ${A}`);
    return leY[A + 10];
  }
  Hx7.getMapping = ieY;
});

// Register to shared state
__$.Ox7 = Ox7;
