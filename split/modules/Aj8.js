// Module: Aj8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Aj8 = v(eD8 => {
  Object.defineProperty(eD8, "__esModule", {
    value: !0
  });
  function Ryq(A) {
    let K = {},
      q = 0;
    while (q < A.length) {
      let Y = A.indexOf("=", q);
      if (Y === -1) break;
      let z = A.indexOf(";", q);
      if (z === -1) z = A.length;else if (z < Y) {
        q = A.lastIndexOf(";", Y - 1) + 1;
        continue;
      }
      let w = A.slice(q, Y).trim();
      if (K[w] === void 0) {
        let H = A.slice(Y + 1, z).trim();
        if (H.charCodeAt(0) === 34) H = H.slice(1, -1);
        try {
          K[w] = H.indexOf("%") !== -1 ? decodeURIComponent(H) : H;
        } catch (J) {
          K[w] = H;
        }
      }
      q = z + 1;
    }
    return K;
  }
  eD8.parseCookie = Ryq;
});

// Register to shared state
__$.Aj8 = Aj8;
