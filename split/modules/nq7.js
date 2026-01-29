// Module: nq7
// Dependencies: iq7, lq7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nq7 = k(() => {
  __$.iq7 = {
    execFile(A, K, q) {
      return new Promise((Y, z) => {
        __$.lq7.execFile(A, K, q, (w, H, J) => {
          if (Buffer.isBuffer(H)) H = H.toString("utf8");
          if (Buffer.isBuffer(J)) J = J.toString("utf8");
          if (J || w) z(J ? Error(J) : w);else Y(H);
        });
      });
    }
  };
});

// Register to shared state
__$.nq7 = nq7;
