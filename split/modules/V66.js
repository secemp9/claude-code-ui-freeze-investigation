// Module: V66
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V66 = v((e1w, eK4) => {
  var O0A = 0,
    G66 = 1000,
    Z66 = (G66 >> 1) - 1,
    _Q,
    W66 = Symbol("kFastTimer"),
    GQ = [],
    D66 = -2,
    j66 = -1,
    sK4 = 0,
    aK4 = 1;
  function M66() {
    O0A += Z66;
    let A = 0,
      K = GQ.length;
    while (A < K) {
      let q = GQ[A];
      if (q._state === sK4) q._idleStart = O0A - Z66, q._state = aK4;else if (q._state === aK4 && O0A >= q._idleStart + q._idleTimeout) q._state = j66, q._idleStart = -1, q._onTimeout(q._timerArg);
      if (q._state === j66) {
        if (q._state = D66, --K !== 0) GQ[A] = GQ[K];
      } else ++A;
    }
    if (GQ.length = K, GQ.length !== 0) tK4();
  }
  function tK4() {
    if (_Q) _Q.refresh();else if (clearTimeout(_Q), _Q = setTimeout(M66, Z66), _Q.unref) _Q.unref();
  }
  class P66 {
    [W66] = !0;
    _state = D66;
    _idleTimeout = -1;
    _idleStart = -1;
    _onTimeout;
    _timerArg;
    constructor(A, K, q) {
      this._onTimeout = A, this._idleTimeout = K, this._timerArg = q, this.refresh();
    }
    refresh() {
      if (this._state === D66) GQ.push(this);
      if (!_Q || GQ.length === 1) tK4();
      this._state = sK4;
    }
    clear() {
      this._state = j66, this._idleStart = -1;
    }
  }
  eK4.exports = {
    setTimeout(A, K, q) {
      return K <= G66 ? setTimeout(A, K, q) : new P66(A, K, q);
    },
    clearTimeout(A) {
      if (A[W66]) A.clear();else clearTimeout(A);
    },
    setFastTimeout(A, K, q) {
      return new P66(A, K, q);
    },
    clearFastTimeout(A) {
      A.clear();
    },
    now() {
      return O0A;
    },
    tick(A = 0) {
      O0A += A - G66 + 1, M66(), M66();
    },
    reset() {
      O0A = 0, GQ.length = 0, clearTimeout(_Q), _Q = null;
    },
    kFastTimer: W66
  };
});

// Register to shared state
__$.V66 = V66;
