// Module: g37
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g37 = v((wow, m37) => {
  var u37 = Symbol("kDone"),
    zG6 = Symbol("kRun");
  class B37 {
    constructor(A) {
      this[u37] = () => {
        this.pending--, this[zG6]();
      }, this.concurrency = A || 1 / 0, this.jobs = [], this.pending = 0;
    }
    add(A) {
      this.jobs.push(A), this[zG6]();
    }
    [zG6]() {
      if (this.pending === this.concurrency) return;
      if (this.jobs.length) {
        let A = this.jobs.shift();
        this.pending++, A(this[u37]);
      }
    }
  }
  m37.exports = B37;
});

// Register to shared state
__$.g37 = g37;
