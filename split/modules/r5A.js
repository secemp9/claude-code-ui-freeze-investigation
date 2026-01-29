// Module: r5A
// Dependencies: UG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r5A = v(Np7 => {
  Object.defineProperty(Np7, "__esModule", {
    value: !0
  });
  Np7.InterceptingListenerImpl = void 0;
  Np7.statusOrFromValue = N52;
  Np7.statusOrFromError = T52;
  Np7.isInterceptingListener = v52;
  var f52 = __$.UG();
  function N52(A) {
    return {
      ok: !0,
      value: A
    };
  }
  function T52(A) {
    var K;
    return {
      ok: !1,
      error: Object.assign(Object.assign({}, A), {
        metadata: (K = A.metadata) !== null && K !== void 0 ? K : new f52.Metadata()
      })
    };
  }
  function v52(A) {
    return A.onReceiveMetadata !== void 0 && A.onReceiveMetadata.length === 1;
  }
  class fp7 {
    constructor(A, K) {
      this.listener = A, this.nextListener = K, this.processingMetadata = !1, this.hasPendingMessage = !1, this.processingMessage = !1, this.pendingStatus = null;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = !1;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextListener.onReceiveStatus(this.pendingStatus);
    }
    onReceiveMetadata(A) {
      this.processingMetadata = !0, this.listener.onReceiveMetadata(A, K => {
        this.processingMetadata = !1, this.nextListener.onReceiveMetadata(K), this.processPendingMessage(), this.processPendingStatus();
      });
    }
    onReceiveMessage(A) {
      this.processingMessage = !0, this.listener.onReceiveMessage(A, K => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = K, this.hasPendingMessage = !0;else this.nextListener.onReceiveMessage(K), this.processPendingStatus();
      });
    }
    onReceiveStatus(A) {
      this.listener.onReceiveStatus(A, K => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = K;else this.nextListener.onReceiveStatus(K);
      });
    }
  }
  Np7.InterceptingListenerImpl = fp7;
});

// Register to shared state
__$.r5A = r5A;
