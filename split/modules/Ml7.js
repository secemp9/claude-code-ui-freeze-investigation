// Module: Ml7
// Dependencies: Gj1, Gt, KC6, wP, K9, DFA, MjA, Wj1, UG, jS
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ml7 = v(Dl7 => {
  Object.defineProperty(Dl7, "__esModule", {
    value: !0
  });
  Dl7.SingleSubchannelChannel = void 0;
  var S22 = __$.Gj1(),
    jFA = __$.Gt(),
    h22 = __$.KC6(),
    b22 = __$.wP(),
    MFA = __$.K9(),
    x22 = __$.DFA(),
    u22 = __$.MjA(),
    B22 = __$.Wj1(),
    zC6 = __$.UG(),
    m22 = __$.jS(),
    Dj1 = __$.zP();
  class Zl7 {
    constructor(A, K, q, Y, z) {
      var w, H;
      this.subchannel = A, this.method = K, this.options = Y, this.callNumber = z, this.childCall = null, this.pendingMessage = null, this.readPending = !1, this.halfClosePending = !1, this.pendingStatus = null, this.readFilterPending = !1, this.writeFilterPending = !1;
      let J = this.method.split("/"),
        O = "";
      if (J.length >= 2) O = J[1];
      let X = (H = (w = (0, Dj1.splitHostPort)(this.options.host)) === null || w === void 0 ? void 0 : w.host) !== null && H !== void 0 ? H : "localhost";
      this.serviceUrl = `https://${X}/${O}`;
      let $ = (0, u22.getRelativeTimeout)(Y.deadline);
      if ($ !== 1 / 0) if ($ <= 0) this.cancelWithStatus(MFA.Status.DEADLINE_EXCEEDED, "Deadline exceeded");else setTimeout(() => {
        this.cancelWithStatus(MFA.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
      }, $);
      this.filterStack = q.createFilter();
    }
    cancelWithStatus(A, K) {
      if (this.childCall) this.childCall.cancelWithStatus(A, K);else this.pendingStatus = {
        code: A,
        details: K,
        metadata: new zC6.Metadata()
      };
    }
    getPeer() {
      var A, K;
      return (K = (A = this.childCall) === null || A === void 0 ? void 0 : A.getPeer()) !== null && K !== void 0 ? K : this.subchannel.getAddress();
    }
    async start(A, K) {
      if (this.pendingStatus) {
        K.onReceiveStatus(this.pendingStatus);
        return;
      }
      if (this.subchannel.getConnectivityState() !== b22.ConnectivityState.READY) {
        K.onReceiveStatus({
          code: MFA.Status.UNAVAILABLE,
          details: "Subchannel not ready",
          metadata: new zC6.Metadata()
        });
        return;
      }
      let q = await this.filterStack.sendMetadata(Promise.resolve(A)),
        Y;
      try {
        Y = await this.subchannel.getCallCredentials().generateMetadata({
          method_name: this.method,
          service_url: this.serviceUrl
        });
      } catch (w) {
        let H = w,
          {
            code: J,
            details: O
          } = (0, x22.restrictControlPlaneStatusCode)(typeof H.code === "number" ? H.code : MFA.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${H.message}`);
        K.onReceiveStatus({
          code: J,
          details: O,
          metadata: new zC6.Metadata()
        });
        return;
      }
      Y.merge(q);
      let z = {
        onReceiveMetadata: async w => {
          K.onReceiveMetadata(await this.filterStack.receiveMetadata(w));
        },
        onReceiveMessage: async w => {
          this.readFilterPending = !0;
          let H = await this.filterStack.receiveMessage(w);
          if (this.readFilterPending = !1, K.onReceiveMessage(H), this.pendingStatus) K.onReceiveStatus(this.pendingStatus);
        },
        onReceiveStatus: async w => {
          let H = await this.filterStack.receiveTrailers(w);
          if (this.readFilterPending) this.pendingStatus = H;else K.onReceiveStatus(H);
        }
      };
      if (this.childCall = this.subchannel.createCall(Y, this.options.host, this.method, z), this.readPending) this.childCall.startRead();
      if (this.pendingMessage) this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
      if (this.halfClosePending && !this.writeFilterPending) this.childCall.halfClose();
    }
    async sendMessageWithContext(A, K) {
      this.writeFilterPending = !0;
      let q = await this.filterStack.sendMessage(Promise.resolve({
        message: K,
        flags: A.flags
      }));
      if (this.writeFilterPending = !1, this.childCall) {
        if (this.childCall.sendMessageWithContext(A, q.message), this.halfClosePending) this.childCall.halfClose();
      } else this.pendingMessage = {
        context: A,
        message: q.message
      };
    }
    startRead() {
      if (this.childCall) this.childCall.startRead();else this.readPending = !0;
    }
    halfClose() {
      if (this.childCall && !this.writeFilterPending) this.childCall.halfClose();else this.halfClosePending = !0;
    }
    getCallNumber() {
      return this.callNumber;
    }
    setCredentials(A) {
      throw Error("Method not implemented.");
    }
    getAuthContext() {
      if (this.childCall) return this.childCall.getAuthContext();else return null;
    }
  }
  class Wl7 {
    constructor(A, K, q) {
      if (this.subchannel = A, this.target = K, this.channelzEnabled = !1, this.channelzTrace = new jFA.ChannelzTrace(), this.callTracker = new jFA.ChannelzCallTracker(), this.childrenTracker = new jFA.ChannelzChildrenTracker(), this.channelzEnabled = q["grpc.enable_channelz"] !== 0, this.channelzRef = (0, jFA.registerChannelzChannel)((0, Dj1.uriToString)(K), () => ({
        target: `${(0, Dj1.uriToString)(K)} (${A.getAddress()})`,
        state: this.subchannel.getConnectivityState(),
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists()
      }), this.channelzEnabled), this.channelzEnabled) this.childrenTracker.refChild(A.getChannelzRef());
      this.filterStackFactory = new B22.FilterStackFactory([new h22.CompressionFilterFactory(this, q)]);
    }
    close() {
      if (this.channelzEnabled) this.childrenTracker.unrefChild(this.subchannel.getChannelzRef());
      (0, jFA.unregisterChannelzRef)(this.channelzRef);
    }
    getTarget() {
      return (0, Dj1.uriToString)(this.target);
    }
    getConnectivityState(A) {
      throw Error("Method not implemented.");
    }
    watchConnectivityState(A, K, q) {
      throw Error("Method not implemented.");
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(A, K) {
      let q = {
        deadline: K,
        host: (0, m22.getDefaultAuthority)(this.target),
        flags: MFA.Propagate.DEFAULTS,
        parentCall: null
      };
      return new Zl7(this.subchannel, A, this.filterStackFactory, q, (0, S22.getNextCallNumber)());
    }
  }
  Dl7.SingleSubchannelChannel = Wl7;
});

// Register to shared state
__$.Ml7 = Ml7;
