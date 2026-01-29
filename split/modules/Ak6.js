// Module: Ak6
// Dependencies: qjA, fC6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ak6 = v(ki7 => {
  Object.defineProperty(ki7, "__esModule", {
    value: !0
  });
  ki7.ChannelImplementation = void 0;
  var Tw2 = __$.qjA(),
    vw2 = __$.fC6();
  class Ei7 {
    constructor(A, K, q) {
      if (typeof A !== "string") throw TypeError("Channel target must be a string");
      if (!(K instanceof Tw2.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
      if (q) {
        if (typeof q !== "object") throw TypeError("Channel options must be an object");
      }
      this.internalChannel = new vw2.InternalChannel(A, K, q);
    }
    close() {
      this.internalChannel.close();
    }
    getTarget() {
      return this.internalChannel.getTarget();
    }
    getConnectivityState(A) {
      return this.internalChannel.getConnectivityState(A);
    }
    watchConnectivityState(A, K, q) {
      this.internalChannel.watchConnectivityState(A, K, q);
    }
    getChannelzRef() {
      return this.internalChannel.getChannelzRef();
    }
    createCall(A, K, q, Y, z) {
      if (typeof A !== "string") throw TypeError("Channel#createCall: method must be a string");
      if (!(typeof K === "number" || K instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
      return this.internalChannel.createCall(A, K, q, Y, z);
    }
  }
  ki7.ChannelImplementation = Ei7;
});

// Register to shared state
__$.Ak6 = Ak6;
