// Module: Z68
// Dependencies: uN, ZoA, G68, T1A, a4, GTA, u8q

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z68 = k(() => {
  __$.uN();
  __$.ZoA = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((A, K) => {
    __$.ZoA[A] = function (Y) {
      return typeof Y === A || "a" + (K < 1 ? "n " : " ") + A;
    };
  });
  __$.G68 = {};
  __$.ZoA.transitional = function (K, q, Y) {
    function z(w, H) {
      return "[Axios v" + __$.T1A + "] Transitional option '" + w + "'" + H + (Y ? ". " + Y : "");
    }
    return (w, H, J) => {
      if (K === !1) throw new __$.a4(z(H, " has been removed" + (q ? " in " + q : "")), __$.a4.ERR_DEPRECATED);
      if (q && !__$.G68[H]) __$.G68[H] = !0, console.warn(z(H, " has been deprecated since v" + q + " and will be removed in the near future"));
      return K ? K(w, H, J) : !0;
    };
  };
  __$.ZoA.spelling = function (K) {
    return (q, Y) => {
      return console.warn(`${Y} is likely a misspelling of ${K}`), !0;
    };
  };
  __$.GTA = {
    assertOptions: __$.u8q,
    validators: __$.ZoA
  };
});

// Register to shared state
__$.Z68 = Z68;
