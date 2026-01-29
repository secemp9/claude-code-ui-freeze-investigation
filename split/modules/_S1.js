// Module: _S1
// Dependencies: PZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _S1 = v(azA => {
  var p4q = azA && azA.__extends || function () {
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
  Object.defineProperty(azA, "__esModule", {
    value: !0
  });
  azA.BehaviorSubject = void 0;
  var d4q = __$.PZ(),
    c4q = function (A) {
      p4q(K, A);
      function K(q) {
        var Y = A.call(this) || this;
        return Y._value = q, Y;
      }
      return Object.defineProperty(K.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0
      }), K.prototype._subscribe = function (q) {
        var Y = A.prototype._subscribe.call(this, q);
        return !Y.closed && q.next(this._value), Y;
      }, K.prototype.getValue = function () {
        var q = this,
          Y = q.hasError,
          z = q.thrownError,
          w = q._value;
        if (Y) throw z;
        return this._throwIfClosed(), w;
      }, K.prototype.next = function (q) {
        A.prototype.next.call(this, this._value = q);
      }, K;
    }(d4q.Subject);
  azA.BehaviorSubject = c4q;
});

// Register to shared state
__$._S1 = _S1;
