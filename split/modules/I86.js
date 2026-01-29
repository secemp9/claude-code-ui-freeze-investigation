// Module: I86
// Dependencies: _2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I86 = v((g6w, zY4) => {
  var {
    UndiciError: sp3
  } = __$._2();
  class y86 extends sp3 {
    constructor(A) {
      super(A);
      Error.captureStackTrace(this, y86), this.name = "MockNotMatchedError", this.message = A || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
  }
  zY4.exports = {
    MockNotMatchedError: y86
  };
});

// Register to shared state
__$.I86 = I86;
