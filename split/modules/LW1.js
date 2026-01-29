// Module: LW1
// Dependencies: jgA, Xj, rp, kW1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LW1 = v(ES7 => {
  Object.defineProperty(ES7, "__esModule", {
    value: !0
  });
  ES7.StableID = void 0;
  var paY = __$.jgA(),
    daY = __$.Xj(),
    TS7 = __$.rp(),
    caY = __$.kW1(),
    CW1 = {};
  ES7.StableID = {
    get: A => {
      if (CW1[A] == null) {
        let K = laY(A);
        if (K == null) K = (0, caY.getUUID)(), NS7(K, A);
        CW1[A] = K;
      }
      return CW1[A];
    },
    setOverride: (A, K) => {
      CW1[K] = A, NS7(A, K);
    }
  };
  function vS7(A) {
    return `statsig.stable_id.${(0, paY._getStorageKey)(A)}`;
  }
  function NS7(A, K) {
    let q = vS7(K);
    try {
      (0, TS7._setObjectInStorage)(q, A);
    } catch (Y) {
      daY.Log.warn("Failed to save StableID");
    }
  }
  function laY(A) {
    let K = vS7(A);
    return (0, TS7._getObjectFromStorage)(K);
  }
});

// Register to shared state
__$.LW1 = LW1;
