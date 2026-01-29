// Module: bD1
// Dependencies: wt, wP

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bD1 = v(FU7 => {
  Object.defineProperty(FU7, "__esModule", {
    value: !0
  });
  FU7.ChildLoadBalancerHandler = void 0;
  var xq2 = __$.wt(),
    uq2 = __$.wP(),
    Bq2 = "child_load_balancer_helper";
  class gU7 {
    constructor(A) {
      this.channelControlHelper = A, this.currentChild = null, this.pendingChild = null, this.latestConfig = null, this.ChildPolicyHelper = class {
        constructor(K) {
          this.parent = K, this.child = null;
        }
        createSubchannel(K, q) {
          return this.parent.channelControlHelper.createSubchannel(K, q);
        }
        updateState(K, q, Y) {
          var z;
          if (this.calledByPendingChild()) {
            if (K === uq2.ConnectivityState.CONNECTING) return;
            (z = this.parent.currentChild) === null || z === void 0 || z.destroy(), this.parent.currentChild = this.parent.pendingChild, this.parent.pendingChild = null;
          } else if (!this.calledByCurrentChild()) return;
          this.parent.channelControlHelper.updateState(K, q, Y);
        }
        requestReresolution() {
          var K;
          let q = (K = this.parent.pendingChild) !== null && K !== void 0 ? K : this.parent.currentChild;
          if (this.child === q) this.parent.channelControlHelper.requestReresolution();
        }
        setChild(K) {
          this.child = K;
        }
        addChannelzChild(K) {
          this.parent.channelControlHelper.addChannelzChild(K);
        }
        removeChannelzChild(K) {
          this.parent.channelControlHelper.removeChannelzChild(K);
        }
        calledByPendingChild() {
          return this.child === this.parent.pendingChild;
        }
        calledByCurrentChild() {
          return this.child === this.parent.currentChild;
        }
      };
    }
    configUpdateRequiresNewPolicyInstance(A, K) {
      return A.getLoadBalancerName() !== K.getLoadBalancerName();
    }
    updateAddressList(A, K, q, Y) {
      let z;
      if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, K)) {
        let w = new this.ChildPolicyHelper(this),
          H = (0, xq2.createLoadBalancer)(K, w);
        if (w.setChild(H), this.currentChild === null) this.currentChild = H, z = this.currentChild;else {
          if (this.pendingChild) this.pendingChild.destroy();
          this.pendingChild = H, z = this.pendingChild;
        }
      } else if (this.pendingChild === null) z = this.currentChild;else z = this.pendingChild;
      return this.latestConfig = K, z.updateAddressList(A, K, q, Y);
    }
    exitIdle() {
      if (this.currentChild) {
        if (this.currentChild.exitIdle(), this.pendingChild) this.pendingChild.exitIdle();
      }
    }
    resetBackoff() {
      if (this.currentChild) {
        if (this.currentChild.resetBackoff(), this.pendingChild) this.pendingChild.resetBackoff();
      }
    }
    destroy() {
      if (this.currentChild) this.currentChild.destroy(), this.currentChild = null;
      if (this.pendingChild) this.pendingChild.destroy(), this.pendingChild = null;
    }
    getTypeName() {
      return Bq2;
    }
  }
  FU7.ChildLoadBalancerHandler = gU7;
});

// Register to shared state
__$.bD1 = bD1;
