// Module: l88
// Dependencies: KwA, d88

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var l88 = v(qwA => {
  var _7q = qwA && qwA.__extends || function () {
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
  Object.defineProperty(qwA, "__esModule", {
    value: !0
  });
  qwA.AsapAction = void 0;
  var G7q = __$.KwA(),
    c88 = __$.d88(),
    Z7q = function (A) {
      _7q(K, A);
      function K(q, Y) {
        var z = A.call(this, q, Y) || this;
        return z.scheduler = q, z.work = Y, z;
      }
      return K.prototype.requestAsyncId = function (q, Y, z) {
        if (z === void 0) z = 0;
        if (z !== null && z > 0) return A.prototype.requestAsyncId.call(this, q, Y, z);
        return q.actions.push(this), q._scheduled || (q._scheduled = c88.immediateProvider.setImmediate(q.flush.bind(q, void 0)));
      }, K.prototype.recycleAsyncId = function (q, Y, z) {
        var w;
        if (z === void 0) z = 0;
        if (z != null ? z > 0 : this.delay > 0) return A.prototype.recycleAsyncId.call(this, q, Y, z);
        var H = q.actions;
        if (Y != null && ((w = H[H.length - 1]) === null || w === void 0 ? void 0 : w.id) !== Y) {
          if (c88.immediateProvider.clearImmediate(Y), q._scheduled === Y) q._scheduled = void 0;
        }
        return;
      }, K;
    }(G7q.AsyncAction);
  qwA.AsapAction = Z7q;
});

// Register to shared state
__$.l88 = l88;
