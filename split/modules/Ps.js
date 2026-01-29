// Module: Ps
// Dependencies: cA, mA, lv7, H5A, Ms, eI, $A, KE7, Cf, s
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ps = k(() => {
  __$.cA();
  __$.mA();
  __$.lv7();
  __$.H5A();
  __$.Ms();
  __$.eI = o(__$.$A(), 1), __$.KE7 = o(__$.$A(), 1), __$.Cf = __$.KE7.memo(function (K) {
    let q = __$.s(16),
      {
        patch: Y,
        dim: z,
        filePath: w,
        firstLine: H,
        fileContent: J,
        width: O,
        skipHighlighting: X
      } = K,
      $ = X === void 0 ? !1 : X,
      [_] = __$.I4(),
      Z = __$.KP().syntaxHighlightingDisabled ?? !1,
      W;
    A: {
      if ($ || Z) {
        W = null;
        break A;
      }
      let f;
      if (q[0] === Symbol.for("react.memo_cache_sentinel")) f = __$.tv7(), q[0] = f;else f = q[0];
      let N = f;
      if (!N) {
        W = null;
        break A;
      }
      let T = J ?? null,
        C;
      if (q[1] !== w || q[2] !== H || q[3] !== Y || q[4] !== T) C = new N(Y, H, w, T), q[1] = w, q[2] = H, q[3] = Y, q[4] = T, q[5] = C;else C = q[5];
      W = C;
    }
    let D = W,
      j;
    A: {
      if (D === null) {
        j = null;
        break A;
      }
      let f = Math.max(1, Math.floor(O)),
        N;
      if (q[6] !== D || q[7] !== z || q[8] !== f || q[9] !== _) N = D.render(_, f, z), q[6] = D, q[7] = z, q[8] = f, q[9] = _, q[10] = N;else N = q[10];
      j = N;
    }
    let M = j,
      P;
    if (q[11] !== z || q[12] !== M || q[13] !== Y || q[14] !== O) P = __$.eI.createElement(__$.S, null, M ? __$.eI.createElement(__$.S, {
      flexDirection: "column"
    }, M.map(__$.GgY)) : __$.eI.createElement(__$.cv7, {
      patch: Y,
      dim: z,
      width: O
    })), q[11] = z, q[12] = M, q[13] = Y, q[14] = O, q[15] = P;else P = q[15];
    return P;
  });
});

// Register to shared state
__$.Ps = Ps;
