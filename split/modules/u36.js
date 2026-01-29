// Module: u36
// Dependencies: hIA, Ry4, mG9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var u36 = k(() => {
  __$.hIA = {
    fromJSON(A) {
      return {
        seconds: __$.Ry4(A.seconds) ? globalThis.Number(A.seconds) : 0,
        nanos: __$.Ry4(A.nanos) ? globalThis.Number(A.nanos) : 0
      };
    },
    toJSON(A) {
      let K = {};
      if (A.seconds !== void 0) K.seconds = Math.round(A.seconds);
      if (A.nanos !== void 0) K.nanos = Math.round(A.nanos);
      return K;
    },
    create(A) {
      return __$.hIA.fromPartial(A ?? {});
    },
    fromPartial(A) {
      let K = __$.mG9();
      return K.seconds = A.seconds ?? 0, K.nanos = A.nanos ?? 0, K;
    }
  };
});

// Register to shared state
__$.u36 = u36;
