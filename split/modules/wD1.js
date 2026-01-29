// Module: wD1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wD1 = v(Gm7 => {
  Object.defineProperty(Gm7, "__esModule", {
    value: !0
  });
  Gm7.OTLPExporterError = void 0;
  class _m7 extends Error {
    code;
    name = "OTLPExporterError";
    data;
    constructor(A, K, q) {
      super(A);
      this.data = q, this.code = K;
    }
  }
  Gm7.OTLPExporterError = _m7;
});

// Register to shared state
__$.wD1 = wD1;
