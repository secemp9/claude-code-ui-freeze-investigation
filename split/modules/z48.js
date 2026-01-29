// Module: z48
// Dependencies: zwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z48 = v(JwA => {
  var R7q = JwA && JwA.__extends || function () {
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
  Object.defineProperty(JwA, "__esModule", {
    value: !0
  });
  JwA.QueueScheduler = void 0;
  var y7q = __$.zwA(),
    I7q = function (A) {
      R7q(K, A);
      function K() {
        return A !== null && A.apply(this, arguments) || this;
      }
      return K;
    }(y7q.AsyncScheduler);
  JwA.QueueScheduler = I7q;
});

// Register to shared state
__$.z48 = z48;
