// Module: HT7
// Dependencies: IG1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HT7 = v(zT7 => {
  Object.defineProperty(zT7, "__esModule", {
    value: !0
  });
  zT7.SharedArrayReceiverStrategy = zT7.SharedArraySenderStrategy = void 0;
  var RBY = __$.IG1(),
    CmA;
  (function (A) {
    A.Continue = 0, A.Cancelled = 1;
  })(CmA || (CmA = {}));
  class AT7 {
    constructor() {
      this.buffers = new Map();
    }
    enableCancellation(A) {
      if (A.id === null) return;
      let K = new SharedArrayBuffer(4),
        q = new Int32Array(K, 0, 1);
      q[0] = CmA.Continue, this.buffers.set(A.id, K), A.$cancellationData = K;
    }
    async sendCancellation(A, K) {
      let q = this.buffers.get(K);
      if (q === void 0) return;
      let Y = new Int32Array(q, 0, 1);
      Atomics.store(Y, 0, CmA.Cancelled);
    }
    cleanup(A) {
      this.buffers.delete(A);
    }
    dispose() {
      this.buffers.clear();
    }
  }
  zT7.SharedArraySenderStrategy = AT7;
  class KT7 {
    constructor(A) {
      this.data = new Int32Array(A, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === CmA.Cancelled;
    }
    get onCancellationRequested() {
      throw Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
    }
  }
  class qT7 {
    constructor(A) {
      this.token = new KT7(A);
    }
    cancel() {}
    dispose() {}
  }
  class YT7 {
    constructor() {
      this.kind = "request";
    }
    createCancellationTokenSource(A) {
      let K = A.$cancellationData;
      if (K === void 0) return new RBY.CancellationTokenSource();
      return new qT7(K);
    }
  }
  zT7.SharedArrayReceiverStrategy = YT7;
});

// Register to shared state
__$.HT7 = HT7;
