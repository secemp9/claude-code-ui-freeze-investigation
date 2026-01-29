// Module: uS7
// Dependencies: Xj, LW1, lT6, rp, iT6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uS7 = v(cs => {
  var nT6 = cs && cs.__awaiter || function (A, K, q, Y) {
    function z(w) {
      return w instanceof q ? w : new q(function (H) {
        H(w);
      });
    }
    return new (q || (q = Promise))(function (w, H) {
      function J($) {
        try {
          X(Y.next($));
        } catch (_) {
          H(_);
        }
      }
      function O($) {
        try {
          X(Y.throw($));
        } catch (_) {
          H(_);
        }
      }
      function X($) {
        $.done ? w($.value) : z($.value).then(J, O);
      }
      X((Y = Y.apply(A, K || [])).next());
    });
  };
  Object.defineProperty(cs, "__esModule", {
    value: !0
  });
  cs._makeDataAdapterResult = cs.DataAdapterCore = void 0;
  var RW1 = __$.Xj(),
    eaY = __$.LW1(),
    yW1 = __$.lT6(),
    ds = __$.rp(),
    IS7 = __$.iT6(),
    SS7 = 10;
  class hS7 {
    constructor(A, K) {
      this._adapterName = A, this._cacheSuffix = K, this._options = null, this._sdkKey = null, this._lastModifiedStoreKey = `statsig.last_modified_time.${K}`, this._inMemoryCache = new bS7();
    }
    attach(A, K) {
      this._sdkKey = A, this._options = K;
    }
    getDataSync(A) {
      let K = A && (0, yW1._normalizeUser)(A, this._options),
        q = this._getCacheKey(K),
        Y = this._inMemoryCache.get(q, K);
      if (Y) return Y;
      let z = this._loadFromCache(q);
      if (z) return this._inMemoryCache.add(q, z), this._inMemoryCache.get(q, K);
      return null;
    }
    setData(A, K) {
      let q = K && (0, yW1._normalizeUser)(K, this._options),
        Y = this._getCacheKey(q);
      this._inMemoryCache.add(Y, IW1("Bootstrap", A, null, q));
    }
    _getDataAsyncImpl(A, K, q) {
      return nT6(this, void 0, void 0, function* () {
        if (!ds.Storage.isReady()) yield ds.Storage.isReadyResolver();
        let Y = A !== null && A !== void 0 ? A : this.getDataSync(K),
          z = [this._fetchAndPrepFromNetwork(Y, K, q)];
        if (q === null || q === void 0 ? void 0 : q.timeoutMs) z.push(new Promise(w => setTimeout(w, q.timeoutMs)).then(() => {
          return RW1.Log.debug("Fetching latest value timed out"), null;
        }));
        return yield Promise.race(z);
      });
    }
    _prefetchDataImpl(A, K) {
      return nT6(this, void 0, void 0, function* () {
        let q = A && (0, yW1._normalizeUser)(A, this._options),
          Y = this._getCacheKey(q),
          z = yield this._getDataAsyncImpl(null, q, K);
        if (z) this._inMemoryCache.add(Y, Object.assign(Object.assign({}, z), {
          source: "Prefetch"
        }));
      });
    }
    _fetchAndPrepFromNetwork(A, K, q) {
      var Y;
      return nT6(this, void 0, void 0, function* () {
        let z = (Y = A === null || A === void 0 ? void 0 : A.data) !== null && Y !== void 0 ? Y : null,
          w = A != null && this._isCachedResultValidFor204(A, K),
          H = yield this._fetchFromNetwork(z, K, q, w);
        if (!H) return RW1.Log.debug("No response returned for latest value"), null;
        let J = (0, IS7._typedJsonParse)(H, "has_updates", "Response"),
          O = this._getSdkKey(),
          X = eaY.StableID.get(O),
          $ = null;
        if ((J === null || J === void 0 ? void 0 : J.has_updates) === !0) $ = IW1("Network", H, X, K);else if (z && (J === null || J === void 0 ? void 0 : J.has_updates) === !1) $ = IW1("NetworkNotModified", z, X, K);else return null;
        let _ = this._getCacheKey(K);
        return this._inMemoryCache.add(_, $), this._writeToCache(_, $), $;
      });
    }
    _getSdkKey() {
      if (this._sdkKey != null) return this._sdkKey;
      return RW1.Log.error(`${this._adapterName} is not attached to a Client`), "";
    }
    _loadFromCache(A) {
      var K;
      let q = (K = ds.Storage.getItem) === null || K === void 0 ? void 0 : K.call(ds.Storage, A);
      if (q == null) return null;
      let Y = (0, IS7._typedJsonParse)(q, "source", "Cached Result");
      return Y ? Object.assign(Object.assign({}, Y), {
        source: "Cache"
      }) : null;
    }
    _writeToCache(A, K) {
      ds.Storage.setItem(A, JSON.stringify(K)), this._runLocalStorageCacheEviction(A);
    }
    _runLocalStorageCacheEviction(A) {
      var K;
      let q = (K = (0, ds._getObjectFromStorage)(this._lastModifiedStoreKey)) !== null && K !== void 0 ? K : {};
      q[A] = Date.now();
      let Y = xS7(q, SS7);
      if (Y) delete q[Y], ds.Storage.removeItem(Y);
      (0, ds._setObjectInStorage)(this._lastModifiedStoreKey, q);
    }
  }
  cs.DataAdapterCore = hS7;
  function IW1(A, K, q, Y) {
    return {
      source: A,
      data: K,
      receivedAt: Date.now(),
      stableID: q,
      fullUserHash: (0, yW1._getFullUserHash)(Y)
    };
  }
  cs._makeDataAdapterResult = IW1;
  class bS7 {
    constructor() {
      this._data = {};
    }
    get(A, K) {
      var q;
      let Y = this._data[A],
        z = Y === null || Y === void 0 ? void 0 : Y.stableID,
        w = (q = K === null || K === void 0 ? void 0 : K.customIDs) === null || q === void 0 ? void 0 : q.stableID;
      if (w && z && w !== z) return RW1.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null;
      return Y;
    }
    add(A, K) {
      let q = xS7(this._data, SS7 - 1);
      if (q) delete this._data[q];
      this._data[A] = K;
    }
    merge(A) {
      this._data = Object.assign(Object.assign({}, this._data), A);
    }
  }
  function xS7(A, K) {
    let q = Object.keys(A);
    if (q.length <= K) return null;
    return q.reduce((Y, z) => {
      let w = A[Y],
        H = A[z];
      if (typeof w === "object" && typeof H === "object") return H.receivedAt < w.receivedAt ? z : Y;
      return H < w ? z : Y;
    });
  }
});

// Register to shared state
__$.uS7 = uS7;
