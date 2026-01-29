// Module: z86
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z86 = v((f6w, _34) => {
  class Y86 {
    constructor() {
      this.bottom = 0, this.top = 0, this.list = Array(2048), this.next = null;
    }
    isEmpty() {
      return this.top === this.bottom;
    }
    isFull() {
      return (this.top + 1 & 2047) === this.bottom;
    }
    push(A) {
      this.list[this.top] = A, this.top = this.top + 1 & 2047;
    }
    shift() {
      let A = this.list[this.bottom];
      if (A === void 0) return null;
      return this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & 2047, A;
    }
  }
  _34.exports = class {
    constructor() {
      this.head = this.tail = new Y86();
    }
    isEmpty() {
      return this.head.isEmpty();
    }
    push(K) {
      if (this.head.isFull()) this.head = this.head.next = new Y86();
      this.head.push(K);
    }
    shift() {
      let K = this.tail,
        q = K.shift();
      if (K.isEmpty() && K.next !== null) this.tail = K.next;
      return q;
    }
  };
});

// Register to shared state
__$.z86 = z86;
