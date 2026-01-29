// Module: HO1
// Dependencies: l1, s11, Au, IGA, qU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HO1 = k(() => {
  __$.l1();
  __$.s11();
  __$.Au();
  __$.IGA = class IGA extends Error {
    constructor(A, K) {
      let q,
        Y = A[0];
      if (A.length === 1 && Y) q = `Image base64 size (${__$.qU(Y.size)}) exceeds API limit (${__$.qU(K)}). Please resize the image before sending.`;else q = `${A.length} images exceed the API limit (${__$.qU(K)}): ` + A.map(z => `Image ${z.index}: ${__$.qU(z.size)}`).join(", ") + ". Please resize these images before sending.";
      super(q);
      this.name = "ImageSizeError";
    }
  };
});

// Register to shared state
__$.HO1 = HO1;
