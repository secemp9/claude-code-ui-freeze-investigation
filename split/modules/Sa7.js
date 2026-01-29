// Module: Sa7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sa7 = v(ya7 => {
  Object.defineProperty(ya7, "__esModule", {
    value: !0
  });
  ya7.RandomIdGenerator = void 0;
  var XX2 = 8,
    La7 = 16;
  class Ra7 {
    generateTraceId = Ca7(La7);
    generateSpanId = Ca7(XX2);
  }
  ya7.RandomIdGenerator = Ra7;
  var qM1 = Buffer.allocUnsafe(La7);
  function Ca7(A) {
    return function () {
      for (let q = 0; q < A / 4; q++) qM1.writeUInt32BE(Math.random() * 4294967296 >>> 0, q * 4);
      for (let q = 0; q < A; q++) if (qM1[q] > 0) break;else if (q === A - 1) qM1[A - 1] = 1;
      return qM1.toString("hex", 0, A);
    };
  }
});

// Register to shared state
__$.Sa7 = Sa7;
