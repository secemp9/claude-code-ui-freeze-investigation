// Module: mN
// Dependencies: Hz, rI1, mg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mN = v(sP => {
  var S68 = sP && sP.__values || function (A) {
      var K = typeof Symbol === "function" && Symbol.iterator,
        q = K && A[K],
        Y = 0;
      if (q) return q.call(A);
      if (A && typeof A.length === "number") return {
        next: function () {
          if (A && Y >= A.length) A = void 0;
          return {
            value: A && A[Y++],
            done: !A
          };
        }
      };
      throw TypeError(K ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    h68 = sP && sP.__read || function (A, K) {
      var q = typeof Symbol === "function" && A[Symbol.iterator];
      if (!q) return A;
      var Y = q.call(A),
        z,
        w = [],
        H;
      try {
        while ((K === void 0 || K-- > 0) && !(z = Y.next()).done) w.push(z.value);
      } catch (J) {
        H = {
          error: J
        };
      } finally {
        try {
          if (z && !z.done && (q = Y.return)) q.call(Y);
        } finally {
          if (H) throw H.error;
        }
      }
      return w;
    },
    b68 = sP && sP.__spreadArray || function (A, K) {
      for (var q = 0, Y = K.length, z = A.length; q < Y; q++, z++) A[z] = K[q];
      return A;
    };
  Object.defineProperty(sP, "__esModule", {
    value: !0
  });
  sP.isSubscription = sP.EMPTY_SUBSCRIPTION = sP.Subscription = void 0;
  var DTA = __$.Hz(),
    oI1 = __$.rI1(),
    x68 = __$.mg(),
    aI1 = function () {
      function A(K) {
        this.initialTeardown = K, this.closed = !1, this._parentage = null, this._finalizers = null;
      }
      return A.prototype.unsubscribe = function () {
        var K, q, Y, z, w;
        if (!this.closed) {
          this.closed = !0;
          var H = this._parentage;
          if (H) if (this._parentage = null, Array.isArray(H)) try {
            for (var J = S68(H), O = J.next(); !O.done; O = J.next()) {
              var X = O.value;
              X.remove(this);
            }
          } catch (D) {
            K = {
              error: D
            };
          } finally {
            try {
              if (O && !O.done && (q = J.return)) q.call(J);
            } finally {
              if (K) throw K.error;
            }
          } else H.remove(this);
          var $ = this.initialTeardown;
          if (DTA.isFunction($)) try {
            $();
          } catch (D) {
            w = D instanceof oI1.UnsubscriptionError ? D.errors : [D];
          }
          var _ = this._finalizers;
          if (_) {
            this._finalizers = null;
            try {
              for (var G = S68(_), Z = G.next(); !Z.done; Z = G.next()) {
                var W = Z.value;
                try {
                  u68(W);
                } catch (D) {
                  if (w = w !== null && w !== void 0 ? w : [], D instanceof oI1.UnsubscriptionError) w = b68(b68([], h68(w)), h68(D.errors));else w.push(D);
                }
              }
            } catch (D) {
              Y = {
                error: D
              };
            } finally {
              try {
                if (Z && !Z.done && (z = G.return)) z.call(G);
              } finally {
                if (Y) throw Y.error;
              }
            }
          }
          if (w) throw new oI1.UnsubscriptionError(w);
        }
      }, A.prototype.add = function (K) {
        var q;
        if (K && K !== this) if (this.closed) u68(K);else {
          if (K instanceof A) {
            if (K.closed || K._hasParent(this)) return;
            K._addParent(this);
          }
          (this._finalizers = (q = this._finalizers) !== null && q !== void 0 ? q : []).push(K);
        }
      }, A.prototype._hasParent = function (K) {
        var q = this._parentage;
        return q === K || Array.isArray(q) && q.includes(K);
      }, A.prototype._addParent = function (K) {
        var q = this._parentage;
        this._parentage = Array.isArray(q) ? (q.push(K), q) : q ? [q, K] : K;
      }, A.prototype._removeParent = function (K) {
        var q = this._parentage;
        if (q === K) this._parentage = null;else if (Array.isArray(q)) x68.arrRemove(q, K);
      }, A.prototype.remove = function (K) {
        var q = this._finalizers;
        if (q && x68.arrRemove(q, K), K instanceof A) K._removeParent(this);
      }, A.EMPTY = function () {
        var K = new A();
        return K.closed = !0, K;
      }(), A;
    }();
  sP.Subscription = aI1;
  sP.EMPTY_SUBSCRIPTION = aI1.EMPTY;
  function Q8q(A) {
    return A instanceof aI1 || A && "closed" in A && DTA.isFunction(A.remove) && DTA.isFunction(A.add) && DTA.isFunction(A.unsubscribe);
  }
  sP.isSubscription = Q8q;
  function u68(A) {
    if (DTA.isFunction(A)) A();else A.unsubscribe();
  }
});

// Register to shared state
__$.mN = mN;
