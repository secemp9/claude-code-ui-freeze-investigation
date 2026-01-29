// Module: ZH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZH6 = v(Gn4 => {
  Object.defineProperty(Gn4, "__esModule", {
    value: !0
  });
  Gn4.default = nr9;
  var lr9 = ir9(CA("crypto"));
  function ir9(A) {
    return A && A.__esModule ? A : {
      default: A
    };
  }
  var Qz1 = new Uint8Array(256),
    Fz1 = Qz1.length;
  function nr9() {
    if (Fz1 > Qz1.length - 16) lr9.default.randomFillSync(Qz1), Fz1 = 0;
    return Qz1.slice(Fz1, Fz1 += 16);
  }
});

// Register to shared state
__$.ZH6 = ZH6;
