// Module: ZB7
// Dependencies: RK, AD1, JB7, GS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZB7 = v(_B7 => {
  Object.defineProperty(_B7, "__esModule", {
    value: !0
  });
  _B7.ObservableRegistry = void 0;
  var $12 = __$.RK(),
    OB7 = __$.AD1(),
    XB7 = __$.JB7(),
    ugA = __$.GS();
  class $B7 {
    _callbacks = [];
    _batchCallbacks = [];
    addCallback(A, K) {
      if (this._findCallback(A, K) >= 0) return;
      this._callbacks.push({
        callback: A,
        instrument: K
      });
    }
    removeCallback(A, K) {
      let q = this._findCallback(A, K);
      if (q < 0) return;
      this._callbacks.splice(q, 1);
    }
    addBatchCallback(A, K) {
      let q = new Set(K.filter(OB7.isObservableInstrument));
      if (q.size === 0) {
        $12.diag.error("BatchObservableCallback is not associated with valid instruments", K);
        return;
      }
      if (this._findBatchCallback(A, q) >= 0) return;
      this._batchCallbacks.push({
        callback: A,
        instruments: q
      });
    }
    removeBatchCallback(A, K) {
      let q = new Set(K.filter(OB7.isObservableInstrument)),
        Y = this._findBatchCallback(A, q);
      if (Y < 0) return;
      this._batchCallbacks.splice(Y, 1);
    }
    async observe(A, K) {
      let q = this._observeCallbacks(A, K),
        Y = this._observeBatchCallbacks(A, K);
      return (await (0, ugA.PromiseAllSettled)([...q, ...Y])).filter(ugA.isPromiseAllSettledRejectionResult).map(H => H.reason);
    }
    _observeCallbacks(A, K) {
      return this._callbacks.map(async ({
        callback: q,
        instrument: Y
      }) => {
        let z = new XB7.ObservableResultImpl(Y._descriptor.name, Y._descriptor.valueType),
          w = Promise.resolve(q(z));
        if (K != null) w = (0, ugA.callWithTimeout)(w, K);
        await w, Y._metricStorages.forEach(H => {
          H.record(z._buffer, A);
        });
      });
    }
    _observeBatchCallbacks(A, K) {
      return this._batchCallbacks.map(async ({
        callback: q,
        instruments: Y
      }) => {
        let z = new XB7.BatchObservableResultImpl(),
          w = Promise.resolve(q(z));
        if (K != null) w = (0, ugA.callWithTimeout)(w, K);
        await w, Y.forEach(H => {
          let J = z._buffer.get(H);
          if (J == null) return;
          H._metricStorages.forEach(O => {
            O.record(J, A);
          });
        });
      });
    }
    _findCallback(A, K) {
      return this._callbacks.findIndex(q => {
        return q.callback === A && q.instrument === K;
      });
    }
    _findBatchCallback(A, K) {
      return this._batchCallbacks.findIndex(q => {
        return q.callback === A && (0, ugA.setEquals)(q.instruments, K);
      });
    }
  }
  _B7.ObservableRegistry = $B7;
});

// Register to shared state
__$.ZB7 = ZB7;
