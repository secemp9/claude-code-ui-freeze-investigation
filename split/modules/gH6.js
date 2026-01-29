// Module: gH6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gH6 = v(So4 => {
  Object.defineProperty(So4, "__esModule", {
    value: !0
  });
  So4.LoginTicket = void 0;
  class Io4 {
    constructor(A, K) {
      this.envelope = A, this.payload = K;
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    getUserId() {
      let A = this.getPayload();
      if (A && A.sub) return A.sub;
      return null;
    }
    getAttributes() {
      return {
        envelope: this.getEnvelope(),
        payload: this.getPayload()
      };
    }
  }
  So4.LoginTicket = Io4;
});

// Register to shared state
__$.gH6 = gH6;
