// Module: gB6
// Dependencies: cA, mA, uK, Iv, $A, mB6, Lh2, s, f8, Ch2
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gB6 = k(() => {
  __$.cA();
  __$.mA();
  __$.uK();
  __$.Iv = o(__$.$A(), 1), __$.mB6 = o(__$.$A(), 1);
  __$.Lh2 = __$.mB6.memo(function (K) {
    let q = __$.s(23),
      {
        item: Y,
        maxColumnWidth: z,
        isSelected: w
      } = K,
      H = __$.f8().columns;
    if (__$.Ch2(Y.id)) {
      let C;
      if (q[0] !== Y.id) C = __$.kh2(Y.id), q[0] = Y.id, q[1] = C;else C = q[1];
      let R = C,
        x = w ? "suggestion" : void 0,
        y = !w,
        B = Y.id.startsWith("file-"),
        b = Y.id.startsWith("mcp-resource-"),
        F = Y.description ? 3 : 0,
        Q;
      if (B) {
        let c = Y.description ? Math.min(20, Y.description.length) : 0,
          YA = H - 2 - 4 - F - c,
          e;
        if (q[2] !== Y.displayText || q[3] !== YA) e = __$.CH4(Y.displayText, YA), q[2] = Y.displayText, q[3] = YA, q[4] = e;else e = q[4];
        Q = e;
      } else if (b) Q = Y.displayText.length > 30 ? Y.displayText.substring(0, 29) + "…" : Y.displayText;else Q = Y.displayText;
      let u = H - 2 - Q.length - F - 4,
        d;
      if (Y.description) {
        let c = Math.max(0, u),
          YA = Y.description.length > c ? Y.description.substring(0, c - 1) + "…" : Y.description;
        d = `${R} ${Q} – ${YA}`;
      } else d = `${R} ${Q}`;
      let r;
      if (q[5] !== y || q[6] !== d || q[7] !== x) r = __$.Iv.createElement(__$.V, {
        color: x,
        dimColor: y,
        wrap: "truncate"
      }, d), q[5] = y, q[6] = d, q[7] = x, q[8] = r;else r = q[8];
      return r;
    }
    let O = Math.floor(H * 0.4),
      X = Math.min(z ?? Y.displayText.length + 5, O),
      $ = Y.color || (w ? "suggestion" : void 0),
      _ = !w,
      G = Y.displayText;
    if (G.length > X - 2) G = G.slice(0, X - 3) + "…";
    let Z;
    if (q[9] !== X || q[10] !== G) Z = G.padEnd(X), q[9] = X, q[10] = G, q[11] = Z;else Z = q[11];
    let W = Z,
      D = Math.max(0, H - X - 4),
      j = Y.description ? Y.description.length > D ? Y.description.slice(0, Math.max(0, D - 1)) + "…" : Y.description : "",
      M;
    if (q[12] !== W || q[13] !== _ || q[14] !== $) M = __$.Iv.createElement(__$.V, {
      color: $,
      dimColor: _
    }, W), q[12] = W, q[13] = _, q[14] = $, q[15] = M;else M = q[15];
    let P = w ? "suggestion" : void 0,
      f = !w,
      N;
    if (q[16] !== P || q[17] !== f || q[18] !== j) N = __$.Iv.createElement(__$.V, {
      color: P,
      dimColor: f
    }, j), q[16] = P, q[17] = f, q[18] = j, q[19] = N;else N = q[19];
    let T;
    if (q[20] !== M || q[21] !== N) T = __$.Iv.createElement(__$.V, null, M, N), q[20] = M, q[21] = N, q[22] = T;else T = q[22];
    return T;
  });
  __$.UDJ = __$.mB6.memo(__$.FpA);
});

// Register to shared state
__$.gB6 = gB6;
