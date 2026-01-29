// Module: b88
// Dependencies: mN

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var b88 = v(ezA => {
  var t4q = ezA && ezA.__extends || function () {
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
  Object.defineProperty(ezA, "__esModule", {
    value: !0
  });
  ezA.Action = void 0;
  var e4q = __$.mN(),
    A7q = function (A) {
      t4q(K, A);
      function K(q, Y) {
        return A.call(this) || this;
      }
      return K.prototype.schedule = function (q, Y) {
        if (Y === void 0) Y = 0;
        return this;
      }, K;
    }(e4q.Subscription);
  ezA.Action = A7q;
});

// Register to shared state
__$.b88 = b88;
