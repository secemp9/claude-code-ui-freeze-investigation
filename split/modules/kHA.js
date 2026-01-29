// Module: kHA
// Dependencies: pN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kHA = v(NN8 => {
  Object.defineProperty(NN8, "__esModule", {
    value: !0
  });
  var fN8 = __$.pN(),
    Jnq = (A, K) => {
      let q = Y => {
        if (Y.type === "pagehide" || fN8.WINDOW.document.visibilityState === "hidden") {
          if (A(Y), K) removeEventListener("visibilitychange", q, !0), removeEventListener("pagehide", q, !0);
        }
      };
      if (fN8.WINDOW.document) addEventListener("visibilitychange", q, !0), addEventListener("pagehide", q, !0);
    };
  NN8.onHidden = Jnq;
});

// Register to shared state
__$.kHA = kHA;
