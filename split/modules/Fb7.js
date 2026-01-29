// Module: Fb7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fb7 = v(mb7 => {
  Object.defineProperty(mb7, "__esModule", {
    value: !0
  });
  mb7.Buckets = void 0;
  class Wv6 {
    backing;
    indexBase;
    indexStart;
    indexEnd;
    constructor(A = new Dv6(), K = 0, q = 0, Y = 0) {
      this.backing = A, this.indexBase = K, this.indexStart = q, this.indexEnd = Y;
    }
    get offset() {
      return this.indexStart;
    }
    get length() {
      if (this.backing.length === 0) return 0;
      if (this.indexEnd === this.indexStart && this.at(0) === 0) return 0;
      return this.indexEnd - this.indexStart + 1;
    }
    counts() {
      return Array.from({
        length: this.length
      }, (A, K) => this.at(K));
    }
    at(A) {
      let K = this.indexBase - this.indexStart;
      if (A < K) A += this.backing.length;
      return A -= K, this.backing.countAt(A);
    }
    incrementBucket(A, K) {
      this.backing.increment(A, K);
    }
    decrementBucket(A, K) {
      this.backing.decrement(A, K);
    }
    trim() {
      for (let A = 0; A < this.length; A++) if (this.at(A) !== 0) {
        this.indexStart += A;
        break;
      } else if (A === this.length - 1) {
        this.indexStart = this.indexEnd = this.indexBase = 0;
        return;
      }
      for (let A = this.length - 1; A >= 0; A--) if (this.at(A) !== 0) {
        this.indexEnd -= this.length - A - 1;
        break;
      }
      this._rotate();
    }
    downscale(A) {
      this._rotate();
      let K = 1 + this.indexEnd - this.indexStart,
        q = 1 << A,
        Y = 0,
        z = 0;
      for (let w = this.indexStart; w <= this.indexEnd;) {
        let H = w % q;
        if (H < 0) H += q;
        for (let J = H; J < q && Y < K; J++) this._relocateBucket(z, Y), Y++, w++;
        z++;
      }
      this.indexStart >>= A, this.indexEnd >>= A, this.indexBase = this.indexStart;
    }
    clone() {
      return new Wv6(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
    }
    _rotate() {
      let A = this.indexBase - this.indexStart;
      if (A === 0) return;else if (A > 0) this.backing.reverse(0, this.backing.length), this.backing.reverse(0, A), this.backing.reverse(A, this.backing.length);else this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + A);
      this.indexBase = this.indexStart;
    }
    _relocateBucket(A, K) {
      if (A === K) return;
      this.incrementBucket(A, this.backing.emptyBucket(K));
    }
  }
  mb7.Buckets = Wv6;
  class Dv6 {
    _counts;
    constructor(A = [0]) {
      this._counts = A;
    }
    get length() {
      return this._counts.length;
    }
    countAt(A) {
      return this._counts[A];
    }
    growTo(A, K, q) {
      let Y = Array(A).fill(0);
      Y.splice(q, this._counts.length - K, ...this._counts.slice(K)), Y.splice(0, K, ...this._counts.slice(0, K)), this._counts = Y;
    }
    reverse(A, K) {
      let q = Math.floor((A + K) / 2) - A;
      for (let Y = 0; Y < q; Y++) {
        let z = this._counts[A + Y];
        this._counts[A + Y] = this._counts[K - Y - 1], this._counts[K - Y - 1] = z;
      }
    }
    emptyBucket(A) {
      let K = this._counts[A];
      return this._counts[A] = 0, K;
    }
    increment(A, K) {
      this._counts[A] += K;
    }
    decrement(A, K) {
      if (this._counts[A] >= K) this._counts[A] -= K;else this._counts[A] = 0;
    }
    clone() {
      return new Dv6([...this._counts]);
    }
  }
});

// Register to shared state
__$.Fb7 = Fb7;
