// Module: Yr7
// Dependencies: wt, wP, tp, Lw, K9, mf, LFA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yr7 = v(Kr7 => {
  Object.defineProperty(Kr7, "__esModule", {
    value: !0
  });
  Kr7.RoundRobinLoadBalancer = void 0;
  Kr7.setup = NJ2;
  var en7 = __$.wt(),
    PW = __$.wP(),
    yFA = __$.tp(),
    jJ2 = __$.Lw(),
    MJ2 = __$.K9(),
    sn7 = __$.mf(),
    PJ2 = __$.LFA(),
    VJ2 = "round_robin";
  function tn7(A) {
    jJ2.trace(MJ2.LogVerbosity.DEBUG, VJ2, A);
  }
  var mj1 = "round_robin";
  class gj1 {
    getLoadBalancerName() {
      return mj1;
    }
    constructor() {}
    toJsonObject() {
      return {
        [mj1]: {}
      };
    }
    static createFromJson(A) {
      return new gj1();
    }
  }
  class Ar7 {
    constructor(A, K = 0) {
      this.children = A, this.nextIndex = K;
    }
    pick(A) {
      let K = this.children[this.nextIndex].picker;
      return this.nextIndex = (this.nextIndex + 1) % this.children.length, K.pick(A);
    }
    peekNextEndpoint() {
      return this.children[this.nextIndex].endpoint;
    }
  }
  function fJ2(A, K) {
    return [...A.slice(K), ...A.slice(0, K)];
  }
  class iC6 {
    constructor(A) {
      this.channelControlHelper = A, this.children = [], this.currentState = PW.ConnectivityState.IDLE, this.currentReadyPicker = null, this.updatesPaused = !1, this.lastError = null, this.childChannelControlHelper = (0, en7.createChildChannelControlHelper)(A, {
        updateState: (K, q, Y) => {
          if (this.currentState === PW.ConnectivityState.READY && K !== PW.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
          if (Y) this.lastError = Y;
          this.calculateAndUpdateState();
        }
      });
    }
    countChildrenWithState(A) {
      return this.children.filter(K => K.getConnectivityState() === A).length;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused) return;
      if (this.countChildrenWithState(PW.ConnectivityState.READY) > 0) {
        let A = this.children.filter(q => q.getConnectivityState() === PW.ConnectivityState.READY),
          K = 0;
        if (this.currentReadyPicker !== null) {
          let q = this.currentReadyPicker.peekNextEndpoint();
          if (K = A.findIndex(Y => (0, sn7.endpointEqual)(Y.getEndpoint(), q)), K < 0) K = 0;
        }
        this.updateState(PW.ConnectivityState.READY, new Ar7(A.map(q => ({
          endpoint: q.getEndpoint(),
          picker: q.getPicker()
        })), K), null);
      } else if (this.countChildrenWithState(PW.ConnectivityState.CONNECTING) > 0) this.updateState(PW.ConnectivityState.CONNECTING, new yFA.QueuePicker(this), null);else if (this.countChildrenWithState(PW.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        let A = `round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(PW.ConnectivityState.TRANSIENT_FAILURE, new yFA.UnavailablePicker({
          details: A
        }), A);
      } else this.updateState(PW.ConnectivityState.IDLE, new yFA.QueuePicker(this), null);
      for (let A of this.children) if (A.getConnectivityState() === PW.ConnectivityState.IDLE) A.exitIdle();
    }
    updateState(A, K, q) {
      if (tn7(PW.ConnectivityState[this.currentState] + " -> " + PW.ConnectivityState[A]), A === PW.ConnectivityState.READY) this.currentReadyPicker = K;else this.currentReadyPicker = null;
      this.currentState = A, this.channelControlHelper.updateState(A, K, q);
    }
    resetSubchannelList() {
      for (let A of this.children) A.destroy();
      this.children = [];
    }
    updateAddressList(A, K, q, Y) {
      if (!(K instanceof gj1)) return !1;
      if (!A.ok) {
        if (this.children.length === 0) this.updateState(PW.ConnectivityState.TRANSIENT_FAILURE, new yFA.UnavailablePicker(A.error), A.error.details);
        return !0;
      }
      let z = Math.random() * A.value.length | 0,
        w = fJ2(A.value, z);
      if (this.resetSubchannelList(), w.length === 0) {
        let H = `No addresses resolved. Resolution note: ${Y}`;
        this.updateState(PW.ConnectivityState.TRANSIENT_FAILURE, new yFA.UnavailablePicker({
          details: H
        }), H);
      }
      tn7("Connect to endpoint list " + w.map(sn7.endpointToString)), this.updatesPaused = !0, this.children = w.map(H => new PJ2.LeafLoadBalancer(H, this.childChannelControlHelper, q, Y));
      for (let H of this.children) H.startConnecting();
      return this.updatesPaused = !1, this.calculateAndUpdateState(), !0;
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList();
    }
    getTypeName() {
      return mj1;
    }
  }
  Kr7.RoundRobinLoadBalancer = iC6;
  function NJ2() {
    (0, en7.registerLoadBalancerType)(mj1, iC6, gj1);
  }
});

// Register to shared state
__$.Yr7 = Yr7;
