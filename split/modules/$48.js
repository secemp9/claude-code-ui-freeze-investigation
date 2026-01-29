// Module: $48
// Dependencies: KwA, HS1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $48 = v(OwA => {
  var b7q = OwA && OwA.__extends || function () {
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
  Object.defineProperty(OwA, "__esModule", {
    value: !0
  });
  OwA.AnimationFrameAction = void 0;
  var x7q = __$.KwA(),
    X48 = __$.HS1(),
    u7q = function (A) {
      b7q(K, A);
      function K(q, Y) {
        var z = A.call(this, q, Y) || this;
        return z.scheduler = q, z.work = Y, z;
      }
      return K.prototype.requestAsyncId = function (q, Y, z) {
        if (z === void 0) z = 0;
        if (z !== null && z > 0) return A.prototype.requestAsyncId.call(this, q, Y, z);
        return q.actions.push(this), q._scheduled || (q._scheduled = X48.animationFrameProvider.requestAnimationFrame(function () {
          return q.flush(void 0);
        }));
      }, K.prototype.recycleAsyncId = function (q, Y, z) {
        var w;
        if (z === void 0) z = 0;
        if (z != null ? z > 0 : this.delay > 0) return A.prototype.recycleAsyncId.call(this, q, Y, z);
        var H = q.actions;
        if (Y != null && Y === q._scheduled && ((w = H[H.length - 1]) === null || w === void 0 ? void 0 : w.id) !== Y) X48.animationFrameProvider.cancelAnimationFrame(Y), q._scheduled = void 0;
        return;
      }, K;
    }(x7q.AsyncAction);
  OwA.AnimationFrameAction = u7q;
});

// Register to shared state
__$.$48 = $48;
