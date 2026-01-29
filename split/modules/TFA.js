// Module: TFA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TFA = v(Wi7 => {
  Object.defineProperty(Wi7, "__esModule", {
    value: !0
  });
  Wi7.BaseSubchannelWrapper = void 0;
  class Zi7 {
    constructor(A) {
      this.child = A, this.healthy = !0, this.healthListeners = new Set(), this.refcount = 0, this.dataWatchers = new Set(), A.addHealthStateWatcher(K => {
        if (this.healthy) this.updateHealthListeners();
      });
    }
    updateHealthListeners() {
      for (let A of this.healthListeners) A(this.isHealthy());
    }
    getConnectivityState() {
      return this.child.getConnectivityState();
    }
    addConnectivityStateListener(A) {
      this.child.addConnectivityStateListener(A);
    }
    removeConnectivityStateListener(A) {
      this.child.removeConnectivityStateListener(A);
    }
    startConnecting() {
      this.child.startConnecting();
    }
    getAddress() {
      return this.child.getAddress();
    }
    throttleKeepalive(A) {
      this.child.throttleKeepalive(A);
    }
    ref() {
      this.child.ref(), this.refcount += 1;
    }
    unref() {
      if (this.child.unref(), this.refcount -= 1, this.refcount === 0) this.destroy();
    }
    destroy() {
      for (let A of this.dataWatchers) A.destroy();
    }
    getChannelzRef() {
      return this.child.getChannelzRef();
    }
    isHealthy() {
      return this.healthy && this.child.isHealthy();
    }
    addHealthStateWatcher(A) {
      this.healthListeners.add(A);
    }
    removeHealthStateWatcher(A) {
      this.healthListeners.delete(A);
    }
    addDataWatcher(A) {
      A.setSubchannel(this.getRealSubchannel()), this.dataWatchers.add(A);
    }
    setHealthy(A) {
      if (A !== this.healthy) {
        if (this.healthy = A, this.child.isHealthy()) this.updateHealthListeners();
      }
    }
    getRealSubchannel() {
      return this.child.getRealSubchannel();
    }
    realSubchannelEquals(A) {
      return this.getRealSubchannel() === A.getRealSubchannel();
    }
    getCallCredentials() {
      return this.child.getCallCredentials();
    }
    getChannel() {
      return this.child.getChannel();
    }
  }
  Wi7.BaseSubchannelWrapper = Zi7;
});

// Register to shared state
__$.TFA = TFA;
