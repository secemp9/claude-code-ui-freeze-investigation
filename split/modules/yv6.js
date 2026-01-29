// Module: yv6
// Dependencies: GS, bgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yv6 = v(bu7 => {
  Object.defineProperty(bu7, "__esModule", {
    value: !0
  });
  bu7.DeltaMetricProcessor = void 0;
  var iA2 = __$.GS(),
    Rv6 = __$.bgA();
  class hu7 {
    _aggregator;
    _activeCollectionStorage = new Rv6.AttributeHashMap();
    _cumulativeMemoStorage = new Rv6.AttributeHashMap();
    _cardinalityLimit;
    _overflowAttributes = {
      "otel.metric.overflow": !0
    };
    _overflowHashCode;
    constructor(A, K) {
      this._aggregator = A, this._cardinalityLimit = (K ?? 2000) - 1, this._overflowHashCode = (0, iA2.hashAttributes)(this._overflowAttributes);
    }
    record(A, K, q, Y) {
      let z = this._activeCollectionStorage.get(K);
      if (!z) {
        if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
          this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(Y))?.record(A);
          return;
        }
        z = this._aggregator.createAccumulation(Y), this._activeCollectionStorage.set(K, z);
      }
      z?.record(A);
    }
    batchCumulate(A, K) {
      Array.from(A.entries()).forEach(([q, Y, z]) => {
        let w = this._aggregator.createAccumulation(K);
        w?.record(Y);
        let H = w;
        if (this._cumulativeMemoStorage.has(q, z)) {
          let J = this._cumulativeMemoStorage.get(q, z);
          H = this._aggregator.diff(J, w);
        } else if (this._cumulativeMemoStorage.size >= this._cardinalityLimit) {
          if (q = this._overflowAttributes, z = this._overflowHashCode, this._cumulativeMemoStorage.has(q, z)) {
            let J = this._cumulativeMemoStorage.get(q, z);
            H = this._aggregator.diff(J, w);
          }
        }
        if (this._activeCollectionStorage.has(q, z)) {
          let J = this._activeCollectionStorage.get(q, z);
          H = this._aggregator.merge(J, H);
        }
        this._cumulativeMemoStorage.set(q, w, z), this._activeCollectionStorage.set(q, H, z);
      });
    }
    collect() {
      let A = this._activeCollectionStorage;
      return this._activeCollectionStorage = new Rv6.AttributeHashMap(), A;
    }
  }
  bu7.DeltaMetricProcessor = hu7;
});

// Register to shared state
__$.yv6 = yv6;
