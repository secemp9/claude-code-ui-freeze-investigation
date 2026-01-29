// Module: TL6
// Dependencies: RK, P9, aj1, sj1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TL6 = v(Ka7 => {
  Object.defineProperty(Ka7, "__esModule", {
    value: !0
  });
  Ka7.ParentBasedSampler = void 0;
  var tj1 = __$.RK(),
    KX2 = __$.P9(),
    eo7 = __$.aj1(),
    NL6 = __$.sj1();
  class Aa7 {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(A) {
      if (this._root = A.root, !this._root) (0, KX2.globalErrorHandler)(Error("ParentBasedSampler must have a root sampler configured")), this._root = new NL6.AlwaysOnSampler();
      this._remoteParentSampled = A.remoteParentSampled ?? new NL6.AlwaysOnSampler(), this._remoteParentNotSampled = A.remoteParentNotSampled ?? new eo7.AlwaysOffSampler(), this._localParentSampled = A.localParentSampled ?? new NL6.AlwaysOnSampler(), this._localParentNotSampled = A.localParentNotSampled ?? new eo7.AlwaysOffSampler();
    }
    shouldSample(A, K, q, Y, z, w) {
      let H = tj1.trace.getSpanContext(A);
      if (!H || !(0, tj1.isSpanContextValid)(H)) return this._root.shouldSample(A, K, q, Y, z, w);
      if (H.isRemote) {
        if (H.traceFlags & tj1.TraceFlags.SAMPLED) return this._remoteParentSampled.shouldSample(A, K, q, Y, z, w);
        return this._remoteParentNotSampled.shouldSample(A, K, q, Y, z, w);
      }
      if (H.traceFlags & tj1.TraceFlags.SAMPLED) return this._localParentSampled.shouldSample(A, K, q, Y, z, w);
      return this._localParentNotSampled.shouldSample(A, K, q, Y, z, w);
    }
    toString() {
      return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
  }
  Ka7.ParentBasedSampler = Aa7;
});

// Register to shared state
__$.TL6 = TL6;
