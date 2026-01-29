// Module: sE6
// Dependencies: UG, r5A, K9, ND1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sE6 = v(Sp7 => {
  Object.defineProperty(Sp7, "__esModule", {
    value: !0
  });
  Sp7.InterceptingCall = Sp7.RequesterBuilder = Sp7.ListenerBuilder = Sp7.InterceptorConfigurationError = void 0;
  Sp7.getInterceptingCall = I52;
  var L52 = __$.UG(),
    vp7 = __$.r5A(),
    Ep7 = __$.K9(),
    kp7 = __$.ND1();
  class sgA extends Error {
    constructor(A) {
      super(A);
      this.name = "InterceptorConfigurationError", Error.captureStackTrace(this, sgA);
    }
  }
  Sp7.InterceptorConfigurationError = sgA;
  class Cp7 {
    constructor() {
      this.metadata = void 0, this.message = void 0, this.status = void 0;
    }
    withOnReceiveMetadata(A) {
      return this.metadata = A, this;
    }
    withOnReceiveMessage(A) {
      return this.message = A, this;
    }
    withOnReceiveStatus(A) {
      return this.status = A, this;
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveStatus: this.status
      };
    }
  }
  Sp7.ListenerBuilder = Cp7;
  class Lp7 {
    constructor() {
      this.start = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0;
    }
    withStart(A) {
      return this.start = A, this;
    }
    withSendMessage(A) {
      return this.message = A, this;
    }
    withHalfClose(A) {
      return this.halfClose = A, this;
    }
    withCancel(A) {
      return this.cancel = A, this;
    }
    build() {
      return {
        start: this.start,
        sendMessage: this.message,
        halfClose: this.halfClose,
        cancel: this.cancel
      };
    }
  }
  Sp7.RequesterBuilder = Lp7;
  var oE6 = {
      onReceiveMetadata: (A, K) => {
        K(A);
      },
      onReceiveMessage: (A, K) => {
        K(A);
      },
      onReceiveStatus: (A, K) => {
        K(A);
      }
    },
    agA = {
      start: (A, K, q) => {
        q(A, K);
      },
      sendMessage: (A, K) => {
        K(A);
      },
      halfClose: A => {
        A();
      },
      cancel: A => {
        A();
      }
    };
  class Rp7 {
    constructor(A, K) {
      var q, Y, z, w;
      if (this.nextCall = A, this.processingMetadata = !1, this.pendingMessageContext = null, this.processingMessage = !1, this.pendingHalfClose = !1, K) this.requester = {
        start: (q = K.start) !== null && q !== void 0 ? q : agA.start,
        sendMessage: (Y = K.sendMessage) !== null && Y !== void 0 ? Y : agA.sendMessage,
        halfClose: (z = K.halfClose) !== null && z !== void 0 ? z : agA.halfClose,
        cancel: (w = K.cancel) !== null && w !== void 0 ? w : agA.cancel
      };else this.requester = agA;
    }
    cancelWithStatus(A, K) {
      this.requester.cancel(() => {
        this.nextCall.cancelWithStatus(A, K);
      });
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    processPendingMessage() {
      if (this.pendingMessageContext) this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage), this.pendingMessageContext = null, this.pendingMessage = null;
    }
    processPendingHalfClose() {
      if (this.pendingHalfClose) this.nextCall.halfClose();
    }
    start(A, K) {
      var q, Y, z, w, H, J;
      let O = {
        onReceiveMetadata: (Y = (q = K === null || K === void 0 ? void 0 : K.onReceiveMetadata) === null || q === void 0 ? void 0 : q.bind(K)) !== null && Y !== void 0 ? Y : X => {},
        onReceiveMessage: (w = (z = K === null || K === void 0 ? void 0 : K.onReceiveMessage) === null || z === void 0 ? void 0 : z.bind(K)) !== null && w !== void 0 ? w : X => {},
        onReceiveStatus: (J = (H = K === null || K === void 0 ? void 0 : K.onReceiveStatus) === null || H === void 0 ? void 0 : H.bind(K)) !== null && J !== void 0 ? J : X => {}
      };
      this.processingMetadata = !0, this.requester.start(A, O, (X, $) => {
        var _, G, Z;
        this.processingMetadata = !1;
        let W;
        if ((0, vp7.isInterceptingListener)($)) W = $;else {
          let D = {
            onReceiveMetadata: (_ = $.onReceiveMetadata) !== null && _ !== void 0 ? _ : oE6.onReceiveMetadata,
            onReceiveMessage: (G = $.onReceiveMessage) !== null && G !== void 0 ? G : oE6.onReceiveMessage,
            onReceiveStatus: (Z = $.onReceiveStatus) !== null && Z !== void 0 ? Z : oE6.onReceiveStatus
          };
          W = new vp7.InterceptingListenerImpl(D, O);
        }
        this.nextCall.start(X, W), this.processPendingMessage(), this.processPendingHalfClose();
      });
    }
    sendMessageWithContext(A, K) {
      this.processingMessage = !0, this.requester.sendMessage(K, q => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessageContext = A, this.pendingMessage = K;else this.nextCall.sendMessageWithContext(A, q), this.processPendingHalfClose();
      });
    }
    sendMessage(A) {
      this.sendMessageWithContext({}, A);
    }
    startRead() {
      this.nextCall.startRead();
    }
    halfClose() {
      this.requester.halfClose(() => {
        if (this.processingMetadata || this.processingMessage) this.pendingHalfClose = !0;else this.nextCall.halfClose();
      });
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
  }
  Sp7.InterceptingCall = Rp7;
  function R52(A, K, q) {
    var Y, z;
    let w = (Y = q.deadline) !== null && Y !== void 0 ? Y : 1 / 0,
      H = q.host,
      J = (z = q.parent) !== null && z !== void 0 ? z : null,
      O = q.propagate_flags,
      X = q.credentials,
      $ = A.createCall(K, w, H, J, O);
    if (X) $.setCredentials(X);
    return $;
  }
  class aE6 {
    constructor(A, K) {
      this.call = A, this.methodDefinition = K;
    }
    cancelWithStatus(A, K) {
      this.call.cancelWithStatus(A, K);
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMessageWithContext(A, K) {
      let q;
      try {
        q = this.methodDefinition.requestSerialize(K);
      } catch (Y) {
        this.call.cancelWithStatus(Ep7.Status.INTERNAL, `Request message serialization failure: ${(0, kp7.getErrorMessage)(Y)}`);
        return;
      }
      this.call.sendMessageWithContext(A, q);
    }
    sendMessage(A) {
      this.sendMessageWithContext({}, A);
    }
    start(A, K) {
      let q = null;
      this.call.start(A, {
        onReceiveMetadata: Y => {
          var z;
          (z = K === null || K === void 0 ? void 0 : K.onReceiveMetadata) === null || z === void 0 || z.call(K, Y);
        },
        onReceiveMessage: Y => {
          var z;
          let w;
          try {
            w = this.methodDefinition.responseDeserialize(Y);
          } catch (H) {
            q = {
              code: Ep7.Status.INTERNAL,
              details: `Response message parsing error: ${(0, kp7.getErrorMessage)(H)}`,
              metadata: new L52.Metadata()
            }, this.call.cancelWithStatus(q.code, q.details);
            return;
          }
          (z = K === null || K === void 0 ? void 0 : K.onReceiveMessage) === null || z === void 0 || z.call(K, w);
        },
        onReceiveStatus: Y => {
          var z, w;
          if (q) (z = K === null || K === void 0 ? void 0 : K.onReceiveStatus) === null || z === void 0 || z.call(K, q);else (w = K === null || K === void 0 ? void 0 : K.onReceiveStatus) === null || w === void 0 || w.call(K, Y);
        }
      });
    }
    startRead() {
      this.call.startRead();
    }
    halfClose() {
      this.call.halfClose();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
  }
  class yp7 extends aE6 {
    constructor(A, K) {
      super(A, K);
    }
    start(A, K) {
      var q, Y;
      let z = !1,
        w = {
          onReceiveMetadata: (Y = (q = K === null || K === void 0 ? void 0 : K.onReceiveMetadata) === null || q === void 0 ? void 0 : q.bind(K)) !== null && Y !== void 0 ? Y : H => {},
          onReceiveMessage: H => {
            var J;
            z = !0, (J = K === null || K === void 0 ? void 0 : K.onReceiveMessage) === null || J === void 0 || J.call(K, H);
          },
          onReceiveStatus: H => {
            var J, O;
            if (!z) (J = K === null || K === void 0 ? void 0 : K.onReceiveMessage) === null || J === void 0 || J.call(K, null);
            (O = K === null || K === void 0 ? void 0 : K.onReceiveStatus) === null || O === void 0 || O.call(K, H);
          }
        };
      super.start(A, w), this.call.startRead();
    }
  }
  class Ip7 extends aE6 {}
  function y52(A, K, q) {
    let Y = R52(A, q.path, K);
    if (q.responseStream) return new Ip7(Y, q);else return new yp7(Y, q);
  }
  function I52(A, K, q, Y) {
    if (A.clientInterceptors.length > 0 && A.clientInterceptorProviders.length > 0) throw new sgA("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
    if (A.callInterceptors.length > 0 && A.callInterceptorProviders.length > 0) throw new sgA("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
    let z = [];
    if (A.callInterceptors.length > 0 || A.callInterceptorProviders.length > 0) z = [].concat(A.callInterceptors, A.callInterceptorProviders.map(J => J(K))).filter(J => J);else z = [].concat(A.clientInterceptors, A.clientInterceptorProviders.map(J => J(K))).filter(J => J);
    let w = Object.assign({}, q, {
      method_definition: K
    });
    return z.reduceRight((J, O) => {
      return X => O(X, J);
    }, J => y52(Y, J, K))(w);
  }
});

// Register to shared state
__$.sE6 = sE6;
