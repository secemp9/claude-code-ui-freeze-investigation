// Module: LFA
// Dependencies: wt, wP, tp, mf, Lw, K9, r5A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LFA = v(In7 => {
  Object.defineProperty(In7, "__esModule", {
    value: !0
  });
  In7.LeafLoadBalancer = In7.PickFirstLoadBalancer = In7.PickFirstLoadBalancingConfig = void 0;
  In7.shuffled = Ln7;
  In7.setup = FH2;
  var mC6 = __$.wt(),
    ZX = __$.wP(),
    Mt = __$.tp(),
    vn7 = __$.mf(),
    hH2 = __$.Lw(),
    bH2 = __$.K9(),
    En7 = __$.mf(),
    kn7 = CA("net"),
    xH2 = __$.r5A(),
    uH2 = "pick_first";
  function kFA(A) {
    hH2.trace(bH2.LogVerbosity.DEBUG, uH2, A);
  }
  var CFA = "pick_first",
    BH2 = 250;
  class LjA {
    constructor(A) {
      this.shuffleAddressList = A;
    }
    getLoadBalancerName() {
      return CFA;
    }
    toJsonObject() {
      return {
        [CFA]: {
          shuffleAddressList: this.shuffleAddressList
        }
      };
    }
    getShuffleAddressList() {
      return this.shuffleAddressList;
    }
    static createFromJson(A) {
      if ("shuffleAddressList" in A && typeof A.shuffleAddressList !== "boolean") throw Error("pick_first config field shuffleAddressList must be a boolean if provided");
      return new LjA(A.shuffleAddressList === !0);
    }
  }
  In7.PickFirstLoadBalancingConfig = LjA;
  class Cn7 {
    constructor(A) {
      this.subchannel = A;
    }
    pick(A) {
      return {
        pickResultType: Mt.PickResultType.COMPLETE,
        subchannel: this.subchannel,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  function Ln7(A) {
    let K = A.slice();
    for (let q = K.length - 1; q > 1; q--) {
      let Y = Math.floor(Math.random() * (q + 1)),
        z = K[q];
      K[q] = K[Y], K[Y] = z;
    }
    return K;
  }
  function mH2(A) {
    if (A.length === 0) return [];
    let K = [],
      q = [],
      Y = [],
      z = (0, En7.isTcpSubchannelAddress)(A[0]) && (0, kn7.isIPv6)(A[0].host);
    for (let J of A) if ((0, En7.isTcpSubchannelAddress)(J) && (0, kn7.isIPv6)(J.host)) q.push(J);else Y.push(J);
    let w = z ? q : Y,
      H = z ? Y : q;
    for (let J = 0; J < Math.max(w.length, H.length); J++) {
      if (J < w.length) K.push(w[J]);
      if (J < H.length) K.push(H[J]);
    }
    return K;
  }
  var Rn7 = "grpc-node.internal.pick-first.report_health_status";
  class bj1 {
    constructor(A) {
      this.channelControlHelper = A, this.children = [], this.currentState = ZX.ConnectivityState.IDLE, this.currentSubchannelIndex = 0, this.currentPick = null, this.subchannelStateListener = (K, q, Y, z, w) => {
        this.onSubchannelStateUpdate(K, q, Y, w);
      }, this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState(), this.stickyTransientFailureMode = !1, this.reportHealthStatus = !1, this.lastError = null, this.latestAddressList = null, this.latestOptions = {}, this.latestResolutionNote = "", this.connectionDelayTimeout = setTimeout(() => {}, 0), clearTimeout(this.connectionDelayTimeout);
    }
    allChildrenHaveReportedTF() {
      return this.children.every(A => A.hasReportedTransientFailure);
    }
    resetChildrenReportedTF() {
      this.children.every(A => A.hasReportedTransientFailure = !1);
    }
    calculateAndReportNewState() {
      var A;
      if (this.currentPick) {
        if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
          let K = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
          this.updateState(ZX.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
            details: K
          }), K);
        } else this.updateState(ZX.ConnectivityState.READY, new Cn7(this.currentPick), null);
      } else if (((A = this.latestAddressList) === null || A === void 0 ? void 0 : A.length) === 0) {
        let K = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(ZX.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
          details: K
        }), K);
      } else if (this.children.length === 0) this.updateState(ZX.ConnectivityState.IDLE, new Mt.QueuePicker(this), null);else if (this.stickyTransientFailureMode) {
        let K = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(ZX.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
          details: K
        }), K);
      } else this.updateState(ZX.ConnectivityState.CONNECTING, new Mt.QueuePicker(this), null);
    }
    requestReresolution() {
      this.channelControlHelper.requestReresolution();
    }
    maybeEnterStickyTransientFailureMode() {
      if (!this.allChildrenHaveReportedTF()) return;
      if (this.requestReresolution(), this.resetChildrenReportedTF(), this.stickyTransientFailureMode) {
        this.calculateAndReportNewState();
        return;
      }
      this.stickyTransientFailureMode = !0;
      for (let {
        subchannel: A
      } of this.children) A.startConnecting();
      this.calculateAndReportNewState();
    }
    removeCurrentPick() {
      if (this.currentPick !== null) this.currentPick.removeConnectivityStateListener(this.subchannelStateListener), this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef()), this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick.unref(), this.currentPick = null;
    }
    onSubchannelStateUpdate(A, K, q, Y) {
      var z;
      if ((z = this.currentPick) === null || z === void 0 ? void 0 : z.realSubchannelEquals(A)) {
        if (q !== ZX.ConnectivityState.READY) this.removeCurrentPick(), this.calculateAndReportNewState();
        return;
      }
      for (let [w, H] of this.children.entries()) if (A.realSubchannelEquals(H.subchannel)) {
        if (q === ZX.ConnectivityState.READY) this.pickSubchannel(H.subchannel);
        if (q === ZX.ConnectivityState.TRANSIENT_FAILURE) {
          if (H.hasReportedTransientFailure = !0, Y) this.lastError = Y;
          if (this.maybeEnterStickyTransientFailureMode(), w === this.currentSubchannelIndex) this.startNextSubchannelConnecting(w + 1);
        }
        H.subchannel.startConnecting();
        return;
      }
    }
    startNextSubchannelConnecting(A) {
      clearTimeout(this.connectionDelayTimeout);
      for (let [K, q] of this.children.entries()) if (K >= A) {
        let Y = q.subchannel.getConnectivityState();
        if (Y === ZX.ConnectivityState.IDLE || Y === ZX.ConnectivityState.CONNECTING) {
          this.startConnecting(K);
          return;
        }
      }
      this.maybeEnterStickyTransientFailureMode();
    }
    startConnecting(A) {
      var K, q;
      if (clearTimeout(this.connectionDelayTimeout), this.currentSubchannelIndex = A, this.children[A].subchannel.getConnectivityState() === ZX.ConnectivityState.IDLE) kFA("Start connecting to subchannel with address " + this.children[A].subchannel.getAddress()), process.nextTick(() => {
        var Y;
        (Y = this.children[A]) === null || Y === void 0 || Y.subchannel.startConnecting();
      });
      this.connectionDelayTimeout = setTimeout(() => {
        this.startNextSubchannelConnecting(A + 1);
      }, BH2), (q = (K = this.connectionDelayTimeout).unref) === null || q === void 0 || q.call(K);
    }
    pickSubchannel(A) {
      kFA("Pick subchannel with address " + A.getAddress()), this.stickyTransientFailureMode = !1, A.ref(), this.channelControlHelper.addChannelzChild(A.getChannelzRef()), this.removeCurrentPick(), this.resetSubchannelList(), A.addConnectivityStateListener(this.subchannelStateListener), A.addHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick = A, clearTimeout(this.connectionDelayTimeout), this.calculateAndReportNewState();
    }
    updateState(A, K, q) {
      kFA(ZX.ConnectivityState[this.currentState] + " -> " + ZX.ConnectivityState[A]), this.currentState = A, this.channelControlHelper.updateState(A, K, q);
    }
    resetSubchannelList() {
      for (let A of this.children) A.subchannel.removeConnectivityStateListener(this.subchannelStateListener), A.subchannel.unref(), this.channelControlHelper.removeChannelzChild(A.subchannel.getChannelzRef());
      this.currentSubchannelIndex = 0, this.children = [];
    }
    connectToAddressList(A, K) {
      kFA("connectToAddressList([" + A.map(Y => (0, vn7.subchannelAddressToString)(Y)) + "])");
      let q = A.map(Y => ({
        subchannel: this.channelControlHelper.createSubchannel(Y, K),
        hasReportedTransientFailure: !1
      }));
      for (let {
        subchannel: Y
      } of q) if (Y.getConnectivityState() === ZX.ConnectivityState.READY) {
        this.pickSubchannel(Y);
        return;
      }
      for (let {
        subchannel: Y
      } of q) Y.ref(), this.channelControlHelper.addChannelzChild(Y.getChannelzRef());
      this.resetSubchannelList(), this.children = q;
      for (let {
        subchannel: Y
      } of this.children) Y.addConnectivityStateListener(this.subchannelStateListener);
      for (let Y of this.children) if (Y.subchannel.getConnectivityState() === ZX.ConnectivityState.TRANSIENT_FAILURE) Y.hasReportedTransientFailure = !0;
      this.startNextSubchannelConnecting(0), this.calculateAndReportNewState();
    }
    updateAddressList(A, K, q, Y) {
      if (!(K instanceof LjA)) return !1;
      if (!A.ok) {
        if (this.children.length === 0 && this.currentPick === null) this.channelControlHelper.updateState(ZX.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker(A.error), A.error.details);
        return !0;
      }
      let z = A.value;
      if (this.reportHealthStatus = q[Rn7], K.getShuffleAddressList()) z = Ln7(z);
      let w = [].concat(...z.map(J => J.addresses));
      kFA("updateAddressList([" + w.map(J => (0, vn7.subchannelAddressToString)(J)) + "])");
      let H = mH2(w);
      if (this.latestAddressList = H, this.latestOptions = q, this.connectToAddressList(H, q), this.latestResolutionNote = Y, w.length > 0) return !0;else return this.lastError = "No addresses resolved", !1;
    }
    exitIdle() {
      if (this.currentState === ZX.ConnectivityState.IDLE && this.latestAddressList) this.connectToAddressList(this.latestAddressList, this.latestOptions);
    }
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList(), this.removeCurrentPick();
    }
    getTypeName() {
      return CFA;
    }
  }
  In7.PickFirstLoadBalancer = bj1;
  var gH2 = new LjA(!1);
  class yn7 {
    constructor(A, K, q, Y) {
      this.endpoint = A, this.options = q, this.resolutionNote = Y, this.latestState = ZX.ConnectivityState.IDLE;
      let z = (0, mC6.createChildChannelControlHelper)(K, {
        updateState: (w, H, J) => {
          this.latestState = w, this.latestPicker = H, K.updateState(w, H, J);
        }
      });
      this.pickFirstBalancer = new bj1(z), this.latestPicker = new Mt.QueuePicker(this.pickFirstBalancer);
    }
    startConnecting() {
      this.pickFirstBalancer.updateAddressList((0, xH2.statusOrFromValue)([this.endpoint]), gH2, Object.assign(Object.assign({}, this.options), {
        [Rn7]: !0
      }), this.resolutionNote);
    }
    updateEndpoint(A, K) {
      if (this.options = K, this.endpoint = A, this.latestState !== ZX.ConnectivityState.IDLE) this.startConnecting();
    }
    getConnectivityState() {
      return this.latestState;
    }
    getPicker() {
      return this.latestPicker;
    }
    getEndpoint() {
      return this.endpoint;
    }
    exitIdle() {
      this.pickFirstBalancer.exitIdle();
    }
    destroy() {
      this.pickFirstBalancer.destroy();
    }
  }
  In7.LeafLoadBalancer = yn7;
  function FH2() {
    (0, mC6.registerLoadBalancerType)(CFA, bj1, LjA), (0, mC6.registerDefaultLoadBalancerType)(CFA);
  }
});

// Register to shared state
__$.LFA = LFA;
