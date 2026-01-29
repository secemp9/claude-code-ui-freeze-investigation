// Module: g8K
// Dependencies: It

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g8K = v(B8K => {
  Object.defineProperty(B8K, "__esModule", {
    value: !0
  });
  B8K.NodeEventQueue = void 0;
  var b8K = __$.It();
  class x8K extends b8K.PriorityQueue {
    constructor() {
      super(1, []);
    }
    getAttempts(A) {
      return A.attempts ?? 0;
    }
    updateAttempts(A) {
      return A.attempts = this.getAttempts(A) + 1, this.getAttempts(A);
    }
  }
  class u8K extends b8K.CoreEventQueue {
    constructor() {
      super(new x8K());
    }
  }
  B8K.NodeEventQueue = u8K;
});

// Register to shared state
__$.g8K = g8K;
