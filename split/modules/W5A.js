// Module: W5A
// Dependencies: cA, mA, OC7, H5A, Ms, YS, $A, Ls, yf, s
//   ... and 8 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W5A = k(() => {
  __$.cA();
  __$.mA();
  __$.OC7();
  __$.H5A();
  __$.Ms();
  __$.YS = o(__$.$A(), 1), __$.Ls = o(__$.$A(), 1), __$.yf = __$.Ls.memo(function (K) {
    let q = __$.s(18),
      {
        code: Y,
        filePath: z,
        width: w,
        dim: H
      } = K,
      J = H === void 0 ? !1 : H,
      O = __$.Ls.useRef(null),
      [X, $] = __$.Ls.useState(w || __$.jdY),
      [_] = __$.I4(),
      Z = __$.KP().syntaxHighlightingDisabled ?? !1,
      W;
    A: {
      if (Z) {
        W = null;
        break A;
      }
      let T;
      if (q[0] === Symbol.for("react.memo_cache_sentinel")) T = __$.ev7(), q[0] = T;else T = q[0];
      let C = T;
      if (!C) {
        W = null;
        break A;
      }
      let R;
      if (q[1] !== Y || q[2] !== z) R = new C(Y, z), q[1] = Y, q[2] = z, q[3] = R;else R = q[3];
      W = R;
    }
    let D = W,
      j,
      M;
    if (q[4] !== w) j = () => {
      if (!w && O.current) {
        let {
          width: T
        } = __$.Cq6(O.current);
        if (T > 0) $(T - 2);
      }
    }, M = [w], q[4] = w, q[5] = j, q[6] = M;else j = q[5], M = q[6];
    __$.Ls.useEffect(j, M);
    let P;
    A: {
      if (D === null) {
        P = null;
        break A;
      }
      let T;
      if (q[7] !== D || q[8] !== J || q[9] !== X || q[10] !== _) T = D.render(_, X, J), q[7] = D, q[8] = J, q[9] = X, q[10] = _, q[11] = T;else T = q[11];
      P = T;
    }
    let f = P,
      N;
    if (q[12] !== Y || q[13] !== J || q[14] !== z || q[15] !== f || q[16] !== Z) N = __$.YS.createElement(__$.S, {
      ref: O
    }, f ? __$.YS.createElement(__$.S, {
      flexDirection: "column"
    }, f.map(__$.MdY)) : __$.YS.createElement(__$.JC7, {
      code: Y,
      filePath: z,
      dim: J,
      skipColoring: Z
    })), q[12] = Y, q[13] = J, q[14] = z, q[15] = f, q[16] = Z, q[17] = N;else N = q[17];
    return N;
  });
});

// Register to shared state
__$.W5A = W5A;
