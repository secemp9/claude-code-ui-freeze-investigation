// Module: _K
// Dependencies: rzA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _K = v(bl => {
  var N4q = bl && bl.__extends || function () {
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
  Object.defineProperty(bl, "__esModule", {
    value: !0
  });
  bl.OperatorSubscriber = bl.createOperatorSubscriber = void 0;
  var T4q = __$.rzA();
  function v4q(A, K, q, Y, z) {
    return new W88(A, K, q, Y, z);
  }
  bl.createOperatorSubscriber = v4q;
  var W88 = function (A) {
    N4q(K, A);
    function K(q, Y, z, w, H, J) {
      var O = A.call(this, q) || this;
      return O.onFinalize = H, O.shouldUnsubscribe = J, O._next = Y ? function (X) {
        try {
          Y(X);
        } catch ($) {
          q.error($);
        }
      } : A.prototype._next, O._error = w ? function (X) {
        try {
          w(X);
        } catch ($) {
          q.error($);
        } finally {
          this.unsubscribe();
        }
      } : A.prototype._error, O._complete = z ? function () {
        try {
          z();
        } catch (X) {
          q.error(X);
        } finally {
          this.unsubscribe();
        }
      } : A.prototype._complete, O;
    }
    return K.prototype.unsubscribe = function () {
      var q;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var Y = this.closed;
        A.prototype.unsubscribe.call(this), !Y && ((q = this.onFinalize) === null || q === void 0 || q.call(this));
      }
    }, K;
  }(T4q.Subscriber);
  bl.OperatorSubscriber = W88;
});

// Register to shared state
__$._K = _K;
