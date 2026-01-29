// Module: VoA
// Dependencies: PZ, PoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VoA = v(szA => {
  var l4q = szA && szA.__extends || function () {
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
  Object.defineProperty(szA, "__esModule", {
    value: !0
  });
  szA.ReplaySubject = void 0;
  var i4q = __$.PZ(),
    n4q = __$.PoA(),
    r4q = function (A) {
      l4q(K, A);
      function K(q, Y, z) {
        if (q === void 0) q = 1 / 0;
        if (Y === void 0) Y = 1 / 0;
        if (z === void 0) z = n4q.dateTimestampProvider;
        var w = A.call(this) || this;
        return w._bufferSize = q, w._windowTime = Y, w._timestampProvider = z, w._buffer = [], w._infiniteTimeWindow = !0, w._infiniteTimeWindow = Y === 1 / 0, w._bufferSize = Math.max(1, q), w._windowTime = Math.max(1, Y), w;
      }
      return K.prototype.next = function (q) {
        var Y = this,
          z = Y.isStopped,
          w = Y._buffer,
          H = Y._infiniteTimeWindow,
          J = Y._timestampProvider,
          O = Y._windowTime;
        if (!z) w.push(q), !H && w.push(J.now() + O);
        this._trimBuffer(), A.prototype.next.call(this, q);
      }, K.prototype._subscribe = function (q) {
        this._throwIfClosed(), this._trimBuffer();
        var Y = this._innerSubscribe(q),
          z = this,
          w = z._infiniteTimeWindow,
          H = z._buffer,
          J = H.slice();
        for (var O = 0; O < J.length && !q.closed; O += w ? 1 : 2) q.next(J[O]);
        return this._checkFinalizedStatuses(q), Y;
      }, K.prototype._trimBuffer = function () {
        var q = this,
          Y = q._bufferSize,
          z = q._timestampProvider,
          w = q._buffer,
          H = q._infiniteTimeWindow,
          J = (H ? 1 : 2) * Y;
        if (Y < 1 / 0 && J < w.length && w.splice(0, w.length - J), !H) {
          var O = z.now(),
            X = 0;
          for (var $ = 1; $ < w.length && w[$] <= O; $ += 2) X = $;
          X && w.splice(0, X + 1);
        }
      }, K;
    }(i4q.Subject);
  szA.ReplaySubject = r4q;
});

// Register to shared state
__$.VoA = VoA;
