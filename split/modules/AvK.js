// Module: AvK
// Dependencies: Gc, ZcA, CE1, Fr2, sTK, oTK, pK, aTK, dr2, or2
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AvK = k(() => {
  __$.Gc = Array(128).fill(void 0);
  __$.Gc.push(void 0, null, !0, !1);
  __$.ZcA = __$.Gc.length;
  __$.CE1 = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
    encode: () => {
      throw Error("TextEncoder not available");
    }
  }, __$.Fr2 = typeof __$.CE1.encodeInto === "function" ? function (A, K) {
    return __$.CE1.encodeInto(A, K);
  } : function (A, K) {
    let q = __$.CE1.encode(A);
    return K.set(q), {
      read: A.length,
      written: q.length
    };
  };
  __$.sTK = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  }) : {
    decode: () => {
      throw Error("TextDecoder not available");
    }
  };
  if (typeof TextDecoder < "u") __$.sTK.decode();
  __$.oTK = typeof FinalizationRegistry > "u" ? {
    register: () => {},
    unregister: () => {}
  } : new FinalizationRegistry(A => __$.pK.__wbg_bbox_free(A >>> 0)), __$.aTK = typeof FinalizationRegistry > "u" ? {
    register: () => {},
    unregister: () => {}
  } : new FinalizationRegistry(A => __$.pK.__wbg_renderedimage_free(A >>> 0)), __$.dr2 = typeof FinalizationRegistry > "u" ? {
    register: () => {},
    unregister: () => {}
  } : new FinalizationRegistry(A => __$.pK.__wbg_resvg_free(A >>> 0));
  __$.or2 = __$.tTK, __$.eTK = class extends __$.cr2 {
    constructor(A, K) {
      if (!__$.QQ6) throw Error("Wasm has not been initialized. Call `initWasm()` function.");
      let q = K?.font;
      if (!!q && __$.ar2(q)) {
        let Y = {
          ...K,
          font: {
            ...q,
            fontBuffers: void 0
          }
        };
        super(A, JSON.stringify(Y), q.fontBuffers);
      } else super(A, JSON.stringify(K));
    }
  };
});

// Register to shared state
__$.AvK = AvK;
