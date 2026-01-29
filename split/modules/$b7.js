// Module: $b7
// Dependencies: is, wv6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $b7 = v(BDA => {
  var utY = BDA && BDA.__awaiter || function (A, K, q, Y) {
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
  Object.defineProperty(BDA, "__esModule", {
    value: !0
  });
  BDA.StatsigEvaluationsDataAdapter = void 0;
  var x5A = __$.is(),
    BtY = __$.wv6();
  class Xb7 extends x5A.DataAdapterCore {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations");
      this._network = null, this._options = null;
    }
    attach(A, K) {
      super.attach(A, K), this._network = new BtY.default(K !== null && K !== void 0 ? K : {});
    }
    getDataAsync(A, K, q) {
      return this._getDataAsyncImpl(A, (0, x5A._normalizeUser)(K, this._options), q);
    }
    prefetchData(A, K) {
      return this._prefetchDataImpl(A, K);
    }
    setData(A) {
      let K = (0, x5A._typedJsonParse)(A, "has_updates", "data");
      if (K && "user" in K) super.setData(A, K.user);else x5A.Log.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.");
    }
    setDataLegacy(A, K) {
      super.setData(A, K);
    }
    _fetchFromNetwork(A, K, q, Y) {
      var z;
      return utY(this, void 0, void 0, function* () {
        let w = yield (z = this._network) === null || z === void 0 ? void 0 : z.fetchEvaluations(this._getSdkKey(), A, q === null || q === void 0 ? void 0 : q.priority, K, Y);
        return w !== null && w !== void 0 ? w : null;
      });
    }
    _getCacheKey(A) {
      var K;
      let q = (0, x5A._getStorageKey)(this._getSdkKey(), A, (K = this._options) === null || K === void 0 ? void 0 : K.customUserCacheKeyFunc);
      return `${x5A.DataAdapterCachePrefix}.${this._cacheSuffix}.${q}`;
    }
    _isCachedResultValidFor204(A, K) {
      return A.fullUserHash != null && A.fullUserHash === (0, x5A._getFullUserHash)(K);
    }
  }
  BDA.StatsigEvaluationsDataAdapter = Xb7;
});

// Register to shared state
__$.$b7 = $b7;
