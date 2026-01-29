// Module: F67
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var F67 = v(m67 => {
  Object.defineProperty(m67, "__esModule", {
    value: !0
  });
  m67.default = void 0;
  var Q4Y = U4Y(CA("crypto"));
  function U4Y(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function p4Y(A) {
    if (Array.isArray(A)) A = Buffer.from(A);else if (typeof A === "string") A = Buffer.from(A, "utf8");
    return Q4Y.default.createHash("md5").update(A).digest();
  }
  var d4Y = p4Y;
  m67.default = d4Y;
});

// Register to shared state
__$.F67 = F67;
