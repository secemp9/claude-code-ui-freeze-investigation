// Module: g3K
// Dependencies: RW

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g3K = v((mtH, m3K) => {
  m3K.exports = B3K;
  var hN2 = __$.RW();
  function B3K(A, K) {
    this.root = A, this.filter = K, this.lastModTime = A.lastModTime, this.done = !1, this.cache = [], this.traverse();
  }
  B3K.prototype = Object.create(Object.prototype, {
    length: {
      get: function () {
        if (this.checkcache(), !this.done) this.traverse();
        return this.cache.length;
      }
    },
    item: {
      value: function (A) {
        if (this.checkcache(), !this.done && A >= this.cache.length) this.traverse();
        return this.cache[A];
      }
    },
    checkcache: {
      value: function () {
        if (this.lastModTime !== this.root.lastModTime) {
          for (var A = this.cache.length - 1; A >= 0; A--) this[A] = void 0;
          this.cache.length = 0, this.done = !1, this.lastModTime = this.root.lastModTime;
        }
      }
    },
    traverse: {
      value: function (A) {
        if (A !== void 0) A++;
        var K;
        while ((K = this.next()) !== null) if (this[this.cache.length] = K, this.cache.push(K), A && this.cache.length === A) return;
        this.done = !0;
      }
    },
    next: {
      value: function () {
        var A = this.cache.length === 0 ? this.root : this.cache[this.cache.length - 1],
          K;
        if (A.nodeType === hN2.DOCUMENT_NODE) K = A.documentElement;else K = A.nextElement(this.root);
        while (K) {
          if (this.filter(K)) return K;
          K = K.nextElement(this.root);
        }
        return null;
      }
    }
  });
});

// Register to shared state
__$.g3K = g3K;
