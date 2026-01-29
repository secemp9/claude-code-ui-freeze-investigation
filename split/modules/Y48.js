// Module: Y48
// Dependencies: KwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y48 = v(HwA => {
  var k7q = HwA && HwA.__extends || function () {
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
  Object.defineProperty(HwA, "__esModule", {
    value: !0
  });
  HwA.QueueAction = void 0;
  var C7q = __$.KwA(),
    L7q = function (A) {
      k7q(K, A);
      function K(q, Y) {
        var z = A.call(this, q, Y) || this;
        return z.scheduler = q, z.work = Y, z;
      }
      return K.prototype.schedule = function (q, Y) {
        if (Y === void 0) Y = 0;
        if (Y > 0) return A.prototype.schedule.call(this, q, Y);
        return this.delay = Y, this.state = q, this.scheduler.flush(this), this;
      }, K.prototype.execute = function (q, Y) {
        return Y > 0 || this.closed ? A.prototype.execute.call(this, q, Y) : this._execute(q, Y);
      }, K.prototype.requestAsyncId = function (q, Y, z) {
        if (z === void 0) z = 0;
        if (z != null && z > 0 || z == null && this.delay > 0) return A.prototype.requestAsyncId.call(this, q, Y, z);
        return q.flush(this), 0;
      }, K;
    }(C7q.AsyncAction);
  HwA.QueueAction = L7q;
});

// Register to shared state
__$.Y48 = Y48;
