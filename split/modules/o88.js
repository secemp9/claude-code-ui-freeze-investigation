// Module: o88
// Dependencies: zwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var o88 = v(wwA => {
  var P7q = wwA && wwA.__extends || function () {
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
  Object.defineProperty(wwA, "__esModule", {
    value: !0
  });
  wwA.AsapScheduler = void 0;
  var V7q = __$.zwA(),
    f7q = function (A) {
      P7q(K, A);
      function K() {
        return A !== null && A.apply(this, arguments) || this;
      }
      return K.prototype.flush = function (q) {
        this._active = !0;
        var Y = this._scheduled;
        this._scheduled = void 0;
        var z = this.actions,
          w;
        q = q || z.shift();
        do if (w = q.execute(q.state, q.delay)) break; while ((q = z[0]) && q.id === Y && z.shift());
        if (this._active = !1, w) {
          while ((q = z[0]) && q.id === Y && z.shift()) q.unsubscribe();
          throw w;
        }
      }, K;
    }(V7q.AsyncScheduler);
  wwA.AsapScheduler = f7q;
});

// Register to shared state
__$.o88 = o88;
