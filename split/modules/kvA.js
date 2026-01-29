// Module: kvA
// Dependencies: H8, FX, FsA, ZHA, csA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kvA = v(YP8 => {
  Object.defineProperty(YP8, "__esModule", {
    value: !0
  });
  var Ugq = __$.H8();
  __$.FX();
  __$.FsA();
  __$.ZHA();
  var pgq = __$.csA(),
    EvA;
  function qP8(A) {
    return EvA ? EvA.get(A) : void 0;
  }
  function dgq(A) {
    let K = qP8(A);
    if (!K) return;
    let q = {};
    for (let [, [Y, z]] of K) {
      if (!q[Y]) q[Y] = [];
      q[Y].push(Ugq.dropUndefinedKeys(z));
    }
    return q;
  }
  function cgq(A, K, q, Y, z, w) {
    let H = pgq.getActiveSpan();
    if (H) {
      let J = qP8(H) || new Map(),
        O = `${A}:${K}@${Y}`,
        X = J.get(w);
      if (X) {
        let [, $] = X;
        J.set(w, [O, {
          min: Math.min($.min, q),
          max: Math.max($.max, q),
          count: $.count += 1,
          sum: $.sum += q,
          tags: $.tags
        }]);
      } else J.set(w, [O, {
        min: q,
        max: q,
        count: 1,
        sum: q,
        tags: z
      }]);
      if (!EvA) EvA = new WeakMap();
      EvA.set(H, J);
    }
  }
  YP8.getMetricSummaryJsonForSpan = dgq;
  YP8.updateMetricSummaryOnActiveSpan = cgq;
});

// Register to shared state
__$.kvA = kvA;
