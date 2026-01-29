// Module: foA
// Dependencies: PZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var foA = v(tzA => {
  var o4q = tzA && tzA.__extends || function () {
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
  Object.defineProperty(tzA, "__esModule", {
    value: !0
  });
  tzA.AsyncSubject = void 0;
  var a4q = __$.PZ(),
    s4q = function (A) {
      o4q(K, A);
      function K() {
        var q = A !== null && A.apply(this, arguments) || this;
        return q._value = null, q._hasValue = !1, q._isComplete = !1, q;
      }
      return K.prototype._checkFinalizedStatuses = function (q) {
        var Y = this,
          z = Y.hasError,
          w = Y._hasValue,
          H = Y._value,
          J = Y.thrownError,
          O = Y.isStopped,
          X = Y._isComplete;
        if (z) q.error(J);else if (O || X) w && q.next(H), q.complete();
      }, K.prototype.next = function (q) {
        if (!this.isStopped) this._value = q, this._hasValue = !0;
      }, K.prototype.complete = function () {
        var q = this,
          Y = q._hasValue,
          z = q._value,
          w = q._isComplete;
        if (!w) this._isComplete = !0, Y && A.prototype.next.call(this, z), A.prototype.complete.call(this);
      }, K;
    }(a4q.Subject);
  tzA.AsyncSubject = s4q;
});

// Register to shared state
__$.foA = foA;
