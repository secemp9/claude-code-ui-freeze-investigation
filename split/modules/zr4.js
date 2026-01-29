// Module: zr4
// Dependencies: whA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zr4 = v(qr4 => {
  Object.defineProperty(qr4, "__esModule", {
    value: !0
  });
  qr4.default = void 0;
  var lo9 = io9(__$.whA());
  function io9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function no9(A) {
    if (!(0, lo9.default)(A)) throw TypeError("Invalid UUID");
    return parseInt(A.slice(14, 15), 16);
  }
  var ro9 = no9;
  qr4.default = ro9;
});

// Register to shared state
__$.zr4 = zr4;
