// Module: ol7
// Dependencies: oU7, Nl7, mf, zP, il7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ol7 = v(nl7 => {
  Object.defineProperty(nl7, "__esModule", {
    value: !0
  });
  nl7.SubchannelPool = void 0;
  nl7.getSubchannelPool = pz2;
  var uz2 = __$.oU7(),
    Bz2 = __$.Nl7(),
    mz2 = __$.mf(),
    gz2 = __$.zP(),
    Fz2 = __$.il7(),
    Qz2 = 1e4;
  class fj1 {
    constructor() {
      this.pool = Object.create(null), this.cleanupTimer = null;
    }
    unrefUnusedSubchannels() {
      let A = !0;
      for (let K in this.pool) {
        let Y = this.pool[K].filter(z => !z.subchannel.unrefIfOneRef());
        if (Y.length > 0) A = !1;
        this.pool[K] = Y;
      }
      if (A && this.cleanupTimer !== null) clearInterval(this.cleanupTimer), this.cleanupTimer = null;
    }
    ensureCleanupTask() {
      var A, K;
      if (this.cleanupTimer === null) this.cleanupTimer = setInterval(() => {
        this.unrefUnusedSubchannels();
      }, Qz2), (K = (A = this.cleanupTimer).unref) === null || K === void 0 || K.call(A);
    }
    getOrCreateSubchannel(A, K, q, Y) {
      this.ensureCleanupTask();
      let z = (0, gz2.uriToString)(A);
      if (z in this.pool) {
        let H = this.pool[z];
        for (let J of H) if ((0, mz2.subchannelAddressEqual)(K, J.subchannelAddress) && (0, uz2.channelOptionsEqual)(q, J.channelArguments) && Y._equals(J.channelCredentials)) return J.subchannel;
      }
      let w = new Bz2.Subchannel(A, K, q, Y, new Fz2.Http2SubchannelConnector(A));
      if (!(z in this.pool)) this.pool[z] = [];
      return this.pool[z].push({
        subchannelAddress: K,
        channelArguments: q,
        channelCredentials: Y,
        subchannel: w
      }), w.ref(), w;
    }
  }
  nl7.SubchannelPool = fj1;
  var Uz2 = new fj1();
  function pz2(A) {
    if (A) return Uz2;else return new fj1();
  }
});

// Register to shared state
__$.ol7 = ol7;
