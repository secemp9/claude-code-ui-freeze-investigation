// Module: wv6
// Dependencies: is, qb7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wv6 = v(TgA => {
  var Yb7 = TgA && TgA.__awaiter || function (A, K, q, Y) {
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
  Object.defineProperty(TgA, "__esModule", {
    value: !0
  });
  var BW1 = __$.is(),
    RtY = __$.qb7();
  class zb7 extends BW1.NetworkCore {
    constructor(A, K) {
      super(A, K);
      let q = A === null || A === void 0 ? void 0 : A.networkConfig;
      this._initializeUrlConfig = new BW1.UrlConfiguration(BW1.Endpoint._initialize, q === null || q === void 0 ? void 0 : q.initializeUrl, q === null || q === void 0 ? void 0 : q.api, q === null || q === void 0 ? void 0 : q.initializeFallbackUrls);
    }
    fetchEvaluations(A, K, q, Y, z) {
      return Yb7(this, void 0, void 0, function* () {
        let w = K ? (0, BW1._typedJsonParse)(K, "has_updates", "InitializeResponse") : null,
          H = {
            user: Y,
            hash: "djb2",
            deltasResponseRequested: !1,
            full_checksum: null
          };
        if (w === null || w === void 0 ? void 0 : w.has_updates) H = Object.assign(Object.assign({}, H), {
          sinceTime: z ? w.time : 0,
          previousDerivedFields: "derived_fields" in w && z ? w.derived_fields : {},
          deltasResponseRequested: !0,
          full_checksum: w.full_checksum
        });
        return this._fetchEvaluations(A, w, H, q);
      });
    }
    _fetchEvaluations(A, K, q, Y) {
      var z, w;
      return Yb7(this, void 0, void 0, function* () {
        let H = yield this.post({
          sdkKey: A,
          urlConfig: this._initializeUrlConfig,
          data: q,
          retries: 2,
          isStatsigEncodable: !0,
          priority: Y
        });
        if ((H === null || H === void 0 ? void 0 : H.code) === 204) return '{"has_updates": false}';
        if ((H === null || H === void 0 ? void 0 : H.code) !== 200) return (z = H === null || H === void 0 ? void 0 : H.body) !== null && z !== void 0 ? z : null;
        if ((K === null || K === void 0 ? void 0 : K.has_updates) !== !0 || ((w = H.body) === null || w === void 0 ? void 0 : w.includes('"is_delta":true')) !== !0 || q.deltasResponseRequested !== !0) return H.body;
        let J = (0, RtY._resolveDeltasResponse)(K, H.body);
        if (typeof J === "string") return J;
        return this._fetchEvaluations(A, K, Object.assign(Object.assign(Object.assign({}, q), J), {
          deltasResponseRequested: !1
        }), Y);
      });
    }
  }
  TgA.default = zb7;
});

// Register to shared state
__$.wv6 = wv6;
