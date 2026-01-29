// Module: W34
// Dependencies: MJ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W34 = v((N6w, Z34) => {
  var {
      kFree: iQ3,
      kConnected: nQ3,
      kPending: rQ3,
      kQueued: oQ3,
      kRunning: aQ3,
      kSize: sQ3
    } = __$.MJ(),
    B8A = Symbol("pool");
  class G34 {
    constructor(A) {
      this[B8A] = A;
    }
    get connected() {
      return this[B8A][nQ3];
    }
    get free() {
      return this[B8A][iQ3];
    }
    get pending() {
      return this[B8A][rQ3];
    }
    get queued() {
      return this[B8A][oQ3];
    }
    get running() {
      return this[B8A][aQ3];
    }
    get size() {
      return this[B8A][sQ3];
    }
  }
  Z34.exports = G34;
});

// Register to shared state
__$.W34 = W34;
