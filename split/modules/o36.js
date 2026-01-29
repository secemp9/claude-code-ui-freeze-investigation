// Module: o36
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var o36 = v(tZ9 => {
  function mIA(A, K, q, Y) {
    if (Y && typeof Y === "object") if (Array.isArray(Y)) for (let z = 0, w = Y.length; z < w; ++z) {
      let H = Y[z],
        J = mIA(A, Y, String(z), H);
      if (J === void 0) delete Y[z];else if (J !== H) Y[z] = J;
    } else if (Y instanceof Map) for (let z of Array.from(Y.keys())) {
      let w = Y.get(z),
        H = mIA(A, Y, z, w);
      if (H === void 0) Y.delete(z);else if (H !== w) Y.set(z, H);
    } else if (Y instanceof Set) for (let z of Array.from(Y)) {
      let w = mIA(A, Y, z, z);
      if (w === void 0) Y.delete(z);else if (w !== z) Y.delete(z), Y.add(w);
    } else for (let [z, w] of Object.entries(Y)) {
      let H = mIA(A, Y, z, w);
      if (H === void 0) delete Y[z];else if (H !== w) Y[z] = H;
    }
    return A.call(K, q, Y);
  }
  tZ9.applyReviver = mIA;
});

// Register to shared state
__$.o36 = o36;
