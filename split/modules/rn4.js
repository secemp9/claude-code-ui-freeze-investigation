// Module: rn4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rn4 = v(in4 => {
  Object.defineProperty(in4, "__esModule", {
    value: !0
  });
  in4.default = void 0;
  var Bo9 = mo9(CA("crypto"));
  function mo9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function go9(A) {
    if (Array.isArray(A)) A = Buffer.from(A);else if (typeof A === "string") A = Buffer.from(A, "utf8");
    return Bo9.default.createHash("sha1").update(A).digest();
  }
  var Fo9 = go9;
  in4.default = Fo9;
});

// Register to shared state
__$.rn4 = rn4;
