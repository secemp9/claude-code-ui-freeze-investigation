// Module: H87
// Dependencies: ebA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var H87 = v(z87 => {
  Object.defineProperty(z87, "__esModule", {
    value: !0
  });
  z87.default = void 0;
  var J7Y = O7Y(__$.ebA());
  function O7Y(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function X7Y(A) {
    if (!(0, J7Y.default)(A)) throw TypeError("Invalid UUID");
    return parseInt(A.substr(14, 1), 16);
  }
  var $7Y = X7Y;
  z87.default = $7Y;
});

// Register to shared state
__$.H87 = H87;
