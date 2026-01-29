// Module: PZ
// Dependencies: xz, mN, JS1, mg, DoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PZ = v(oh => {
  var I88 = oh && oh.__extends || function () {
      var A = function (K, q) {
        return A = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (Y, z) {
          Y.__proto__ = z;
        } || function (Y, z) {
          for (var w in z) if (Object.prototype.hasOwnProperty.call(z, w)) Y[w] = z[w];
        }, A(K, q);
      };
      return function (K, q) {
        if (typeof q !== "function" && q !== null) throw TypeError("Class extends value " + String(q) + " is not a constructor or null");
        A(K, q);
        function Y() {
          this.constructor = K;
        }
        K.prototype = q === null ? Object.create(q) : (Y.prototype = q.prototype, new Y());
      };
    }(),
    F4q = oh && oh.__values || function (A) {
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
    };
  Object.defineProperty(oh, "__esModule", {
    value: !0
  });
  oh.AnonymousSubject = oh.Subject = void 0;
  var y88 = __$.xz(),
    XS1 = __$.mN(),
    Q4q = __$.JS1(),
    U4q = __$.mg(),
    OS1 = __$.DoA(),
    S88 = function (A) {
      I88(K, A);
      function K() {
        var q = A.call(this) || this;
        return q.closed = !1, q.currentObservers = null, q.observers = [], q.isStopped = !1, q.hasError = !1, q.thrownError = null, q;
      }
      return K.prototype.lift = function (q) {
        var Y = new $S1(this, this);
        return Y.operator = q, Y;
      }, K.prototype._throwIfClosed = function () {
        if (this.closed) throw new Q4q.ObjectUnsubscribedError();
      }, K.prototype.next = function (q) {
        var Y = this;
        OS1.errorContext(function () {
          var z, w;
          if (Y._throwIfClosed(), !Y.isStopped) {
            if (!Y.currentObservers) Y.currentObservers = Array.from(Y.observers);
            try {
              for (var H = F4q(Y.currentObservers), J = H.next(); !J.done; J = H.next()) {
                var O = J.value;
                O.next(q);
              }
            } catch (X) {
              z = {
                error: X
              };
            } finally {
              try {
                if (J && !J.done && (w = H.return)) w.call(H);
              } finally {
                if (z) throw z.error;
              }
            }
          }
        });
      }, K.prototype.error = function (q) {
        var Y = this;
        OS1.errorContext(function () {
          if (Y._throwIfClosed(), !Y.isStopped) {
            Y.hasError = Y.isStopped = !0, Y.thrownError = q;
            var z = Y.observers;
            while (z.length) z.shift().error(q);
          }
        });
      }, K.prototype.complete = function () {
        var q = this;
        OS1.errorContext(function () {
          if (q._throwIfClosed(), !q.isStopped) {
            q.isStopped = !0;
            var Y = q.observers;
            while (Y.length) Y.shift().complete();
          }
        });
      }, K.prototype.unsubscribe = function () {
        this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
      }, Object.defineProperty(K.prototype, "observed", {
        get: function () {
          var q;
          return ((q = this.observers) === null || q === void 0 ? void 0 : q.length) > 0;
        },
        enumerable: !1,
        configurable: !0
      }), K.prototype._trySubscribe = function (q) {
        return this._throwIfClosed(), A.prototype._trySubscribe.call(this, q);
      }, K.prototype._subscribe = function (q) {
        return this._throwIfClosed(), this._checkFinalizedStatuses(q), this._innerSubscribe(q);
      }, K.prototype._innerSubscribe = function (q) {
        var Y = this,
          z = this,
          w = z.hasError,
          H = z.isStopped,
          J = z.observers;
        if (w || H) return XS1.EMPTY_SUBSCRIPTION;
        return this.currentObservers = null, J.push(q), new XS1.Subscription(function () {
          Y.currentObservers = null, U4q.arrRemove(J, q);
        });
      }, K.prototype._checkFinalizedStatuses = function (q) {
        var Y = this,
          z = Y.hasError,
          w = Y.thrownError,
          H = Y.isStopped;
        if (z) q.error(w);else if (H) q.complete();
      }, K.prototype.asObservable = function () {
        var q = new y88.Observable();
        return q.source = this, q;
      }, K.create = function (q, Y) {
        return new $S1(q, Y);
      }, K;
    }(y88.Observable);
  oh.Subject = S88;
  var $S1 = function (A) {
    I88(K, A);
    function K(q, Y) {
      var z = A.call(this) || this;
      return z.destination = q, z.source = Y, z;
    }
    return K.prototype.next = function (q) {
      var Y, z;
      (z = (Y = this.destination) === null || Y === void 0 ? void 0 : Y.next) === null || z === void 0 || z.call(Y, q);
    }, K.prototype.error = function (q) {
      var Y, z;
      (z = (Y = this.destination) === null || Y === void 0 ? void 0 : Y.error) === null || z === void 0 || z.call(Y, q);
    }, K.prototype.complete = function () {
      var q, Y;
      (Y = (q = this.destination) === null || q === void 0 ? void 0 : q.complete) === null || Y === void 0 || Y.call(q);
    }, K.prototype._subscribe = function (q) {
      var Y, z;
      return (z = (Y = this.source) === null || Y === void 0 ? void 0 : Y.subscribe(q)) !== null && z !== void 0 ? z : XS1.EMPTY_SUBSCRIPTION;
    }, K;
  }(S88);
  oh.AnonymousSubject = $S1;
});

// Register to shared state
__$.PZ = PZ;
