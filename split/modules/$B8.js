// Module: $B8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $B8 = v(XB8 => {
  Object.defineProperty(XB8, "__esModule", {
    value: !0
  });
  XB8.headStream = H_5;
  async function H_5(A, K) {
    let q = 0,
      Y = [],
      z = A.getReader(),
      w = !1;
    while (!w) {
      let {
        done: O,
        value: X
      } = await z.read();
      if (X) Y.push(X), q += X?.byteLength ?? 0;
      if (q >= K) break;
      w = O;
    }
    z.releaseLock();
    let H = new Uint8Array(Math.min(K, q)),
      J = 0;
    for (let O of Y) {
      if (O.byteLength > H.byteLength - J) {
        H.set(O.subarray(0, H.byteLength - J), J);
        break;
      } else H.set(O, J);
      J += O.length;
    }
    return H;
  }
});

// Register to shared state
__$.$B8 = $B8;
