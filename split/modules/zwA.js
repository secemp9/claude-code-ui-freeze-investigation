// Module: zwA
// Dependencies: WS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zwA = v(YwA => {
  var j7q = YwA && YwA.__extends || function () {
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
  Object.defineProperty(YwA, "__esModule", {
    value: !0
  });
  YwA.AsyncScheduler = void 0;
  var r88 = __$.WS1(),
    M7q = function (A) {
      j7q(K, A);
      function K(q, Y) {
        if (Y === void 0) Y = r88.Scheduler.now;
        var z = A.call(this, q, Y) || this;
        return z.actions = [], z._active = !1, z;
      }
      return K.prototype.flush = function (q) {
        var Y = this.actions;
        if (this._active) {
          Y.push(q);
          return;
        }
        var z;
        this._active = !0;
        do if (z = q.execute(q.state, q.delay)) break; while (q = Y.shift());
        if (this._active = !1, z) {
          while (q = Y.shift()) q.unsubscribe();
          throw z;
        }
      }, K;
    }(r88.Scheduler);
  YwA.AsyncScheduler = M7q;
});

// Register to shared state
__$.zwA = zwA;
