// Module: Ir4
// Dependencies: kr4, Lr4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ir4 = v((VTw, iz1) => {
  var Rr4 = __$.kr4().stringify,
    yr4 = __$.Lr4();
  iz1.exports = function (A) {
    return {
      parse: yr4(A),
      stringify: Rr4
    };
  };
  iz1.exports.parse = yr4();
  iz1.exports.stringify = Rr4;
});

// Register to shared state
__$.Ir4 = Ir4;
