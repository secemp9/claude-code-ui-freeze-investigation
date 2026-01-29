// Module: E11
// Dependencies: zh8, G11, wh8, Hh8, XI8, ykA, Cd1, t25, IF, N11
//   ... and 17 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E11 = k(() => {
  __$.zh8();
  __$.G11();
  __$.wh8();
  __$.Hh8();
  __$.XI8();
  __$.ykA();
  __$.Cd1();
  __$.t25 = __$.IF(__$.N11), __$.e25 = __$.IF(__$.Bi), __$.Az5 = __$.IF(__$.T11), __$.Kz5 = __$.IF(__$.v11), __$.qz5 = __$.IF(__$.oA1), __$.h6A = __$.yF;
  if (__$.N11 && __$.h6A(new __$.N11(new ArrayBuffer(1))) != __$._h8 || __$.Bi && __$.h6A(new __$.Bi()) != __$.Jh8 || __$.T11 && __$.h6A(__$.T11.resolve()) != __$.Oh8 || __$.v11 && __$.h6A(new __$.v11()) != __$.Xh8 || __$.oA1 && __$.h6A(new __$.oA1()) != __$.$h8) __$.h6A = function (A) {
    var K = __$.yF(A),
      q = K == __$.s25 ? A.constructor : void 0,
      Y = q ? __$.IF(q) : "";
    if (Y) switch (Y) {
      case __$.t25:
        return __$._h8;
      case __$.e25:
        return __$.Jh8;
      case __$.Az5:
        return __$.Oh8;
      case __$.Kz5:
        return __$.Xh8;
      case __$.qz5:
        return __$.$h8;
    }
    return K;
  };
  __$.VJA = __$.h6A;
});

// Register to shared state
__$.E11 = E11;
