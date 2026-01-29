// Module: rzA
// Dependencies: Hz, mN, nzA, tI1, jZ, i68, sI1, DoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rzA = v(IR => {
  var t68 = IR && IR.__extends || function () {
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
  }();
  Object.defineProperty(IR, "__esModule", {
    value: !0
  });
  IR.EMPTY_OBSERVER = IR.SafeSubscriber = IR.Subscriber = void 0;
  var e8q = __$.Hz(),
    a68 = __$.mN(),
    qS1 = __$.nzA(),
    A4q = __$.tI1(),
    s68 = __$.jZ(),
    eI1 = __$.i68(),
    K4q = __$.sI1(),
    q4q = __$.DoA(),
    e68 = function (A) {
      t68(K, A);
      function K(q) {
        var Y = A.call(this) || this;
        if (Y.isStopped = !1, q) {
          if (Y.destination = q, a68.isSubscription(q)) q.add(Y);
        } else Y.destination = IR.EMPTY_OBSERVER;
        return Y;
      }
      return K.create = function (q, Y, z) {
        return new A88(q, Y, z);
      }, K.prototype.next = function (q) {
        if (this.isStopped) KS1(eI1.nextNotification(q), this);else this._next(q);
      }, K.prototype.error = function (q) {
        if (this.isStopped) KS1(eI1.errorNotification(q), this);else this.isStopped = !0, this._error(q);
      }, K.prototype.complete = function () {
        if (this.isStopped) KS1(eI1.COMPLETE_NOTIFICATION, this);else this.isStopped = !0, this._complete();
      }, K.prototype.unsubscribe = function () {
        if (!this.closed) this.isStopped = !0, A.prototype.unsubscribe.call(this), this.destination = null;
      }, K.prototype._next = function (q) {
        this.destination.next(q);
      }, K.prototype._error = function (q) {
        try {
          this.destination.error(q);
        } finally {
          this.unsubscribe();
        }
      }, K.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }, K;
    }(a68.Subscription);
  IR.Subscriber = e68;
  var Y4q = Function.prototype.bind;
  function AS1(A, K) {
    return Y4q.call(A, K);
  }
  var z4q = function () {
      function A(K) {
        this.partialObserver = K;
      }
      return A.prototype.next = function (K) {
        var q = this.partialObserver;
        if (q.next) try {
          q.next(K);
        } catch (Y) {
          joA(Y);
        }
      }, A.prototype.error = function (K) {
        var q = this.partialObserver;
        if (q.error) try {
          q.error(K);
        } catch (Y) {
          joA(Y);
        } else joA(K);
      }, A.prototype.complete = function () {
        var K = this.partialObserver;
        if (K.complete) try {
          K.complete();
        } catch (q) {
          joA(q);
        }
      }, A;
    }(),
    A88 = function (A) {
      t68(K, A);
      function K(q, Y, z) {
        var w = A.call(this) || this,
          H;
        if (e8q.isFunction(q) || !q) H = {
          next: q !== null && q !== void 0 ? q : void 0,
          error: Y !== null && Y !== void 0 ? Y : void 0,
          complete: z !== null && z !== void 0 ? z : void 0
        };else {
          var J;
          if (w && qS1.config.useDeprecatedNextContext) J = Object.create(q), J.unsubscribe = function () {
            return w.unsubscribe();
          }, H = {
            next: q.next && AS1(q.next, J),
            error: q.error && AS1(q.error, J),
            complete: q.complete && AS1(q.complete, J)
          };else H = q;
        }
        return w.destination = new z4q(H), w;
      }
      return K;
    }(e68);
  IR.SafeSubscriber = A88;
  function joA(A) {
    if (qS1.config.useDeprecatedSynchronousErrorHandling) q4q.captureError(A);else A4q.reportUnhandledError(A);
  }
  function w4q(A) {
    throw A;
  }
  function KS1(A, K) {
    var q = qS1.config.onStoppedNotification;
    q && K4q.timeoutProvider.setTimeout(function () {
      return q(A, K);
    });
  }
  IR.EMPTY_OBSERVER = {
    closed: !0,
    next: s68.noop,
    error: w4q,
    complete: s68.noop
  };
});

// Register to shared state
__$.rzA = rzA;
