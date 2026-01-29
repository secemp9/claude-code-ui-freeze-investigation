// Module: a67
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a67 = v(r67 => {
  Object.defineProperty(r67, "__esModule", {
    value: !0
  });
  r67.default = void 0;
  var t4Y = e4Y(CA("crypto"));
  function e4Y(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function A7Y(A) {
    if (Array.isArray(A)) A = Buffer.from(A);else if (typeof A === "string") A = Buffer.from(A, "utf8");
    return t4Y.default.createHash("sha1").update(A).digest();
  }
  var K7Y = A7Y;
  r67.default = K7Y;
});

// Register to shared state
__$.a67 = a67;
