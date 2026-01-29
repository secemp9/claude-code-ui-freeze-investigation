// Module: Dr7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dr7 = v(Zr7 => {
  Object.defineProperty(Zr7, "__esModule", {
    value: !0
  });
  Zr7.PriorityQueue = void 0;
  var yjA = 0,
    eC6 = A => Math.floor(A / 2),
    Qj1 = A => A * 2 + 1,
    SFA = A => A * 2 + 2;
  class Gr7 {
    constructor(A = (K, q) => K > q) {
      this.comparator = A, this.heap = [];
    }
    size() {
      return this.heap.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    peek() {
      return this.heap[yjA];
    }
    push(...A) {
      return A.forEach(K => {
        this.heap.push(K), this.siftUp();
      }), this.size();
    }
    pop() {
      let A = this.peek(),
        K = this.size() - 1;
      if (K > yjA) this.swap(yjA, K);
      return this.heap.pop(), this.siftDown(), A;
    }
    replace(A) {
      let K = this.peek();
      return this.heap[yjA] = A, this.siftDown(), K;
    }
    greater(A, K) {
      return this.comparator(this.heap[A], this.heap[K]);
    }
    swap(A, K) {
      [this.heap[A], this.heap[K]] = [this.heap[K], this.heap[A]];
    }
    siftUp() {
      let A = this.size() - 1;
      while (A > yjA && this.greater(A, eC6(A))) this.swap(A, eC6(A)), A = eC6(A);
    }
    siftDown() {
      let A = yjA;
      while (Qj1(A) < this.size() && this.greater(Qj1(A), A) || SFA(A) < this.size() && this.greater(SFA(A), A)) {
        let K = SFA(A) < this.size() && this.greater(SFA(A), Qj1(A)) ? SFA(A) : Qj1(A);
        this.swap(A, K), A = K;
      }
    }
  }
  Zr7.PriorityQueue = Gr7;
});

// Register to shared state
__$.Dr7 = Dr7;
