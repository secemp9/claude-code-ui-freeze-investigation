// Module: bn4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bn4 = v(Sn4 => {
  Object.defineProperty(Sn4, "__esModule", {
    value: !0
  });
  Sn4.default = void 0;
  var No9 = To9(CA("crypto"));
  function To9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  function vo9(A) {
    if (Array.isArray(A)) A = Buffer.from(A);else if (typeof A === "string") A = Buffer.from(A, "utf8");
    return No9.default.createHash("md5").update(A).digest();
  }
  var Eo9 = vo9;
  Sn4.default = Eo9;
});

// Register to shared state
__$.bn4 = bn4;
