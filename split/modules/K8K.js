// Module: K8K
// Dependencies: Vy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K8K = v(e6K => {
  Object.defineProperty(e6K, "__esModule", {
    value: !0
  });
  e6K.ContextBatch = void 0;
  var zW2 = __$.Vy6(),
    a6K = 32,
    s6K = 480;
  class t6K {
    constructor(A) {
      this.id = (0, zW2.uuid)(), this.items = [], this.sizeInBytes = 0, this.maxEventCount = Math.max(1, A);
    }
    tryAdd(A) {
      if (this.length === this.maxEventCount) return {
        success: !1,
        message: `Event limit of ${this.maxEventCount} has been exceeded.`
      };
      let K = this.calculateSize(A.context);
      if (K > a6K * 1024) return {
        success: !1,
        message: `Event exceeds maximum event size of ${a6K} KB`
      };
      if (this.sizeInBytes + K > s6K * 1024) return {
        success: !1,
        message: `Event has caused batch size to exceed ${s6K} KB`
      };
      return this.items.push(A), this.sizeInBytes += K, {
        success: !0
      };
    }
    get length() {
      return this.items.length;
    }
    calculateSize(A) {
      return encodeURI(JSON.stringify(A.event)).split(/%..|i/).length;
    }
    getEvents() {
      return this.items.map(({
        context: K
      }) => K.event);
    }
    getContexts() {
      return this.items.map(A => A.context);
    }
    resolveEvents() {
      this.items.forEach(({
        resolver: A,
        context: K
      }) => A(K));
    }
  }
  e6K.ContextBatch = t6K;
});

// Register to shared state
__$.K8K = K8K;
