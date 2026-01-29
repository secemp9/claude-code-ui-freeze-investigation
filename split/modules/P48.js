// Module: P48
// Dependencies: KwA, mN, zwA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P48 = v(xl => {
  var j48 = xl && xl.__extends || function () {
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
  Object.defineProperty(xl, "__esModule", {
    value: !0
  });
  xl.VirtualAction = xl.VirtualTimeScheduler = void 0;
  var U7q = __$.KwA(),
    p7q = __$.mN(),
    d7q = __$.zwA(),
    c7q = function (A) {
      j48(K, A);
      function K(q, Y) {
        if (q === void 0) q = M48;
        if (Y === void 0) Y = 1 / 0;
        var z = A.call(this, q, function () {
          return z.frame;
        }) || this;
        return z.maxFrames = Y, z.frame = 0, z.index = -1, z;
      }
      return K.prototype.flush = function () {
        var q = this,
          Y = q.actions,
          z = q.maxFrames,
          w,
          H;
        while ((H = Y[0]) && H.delay <= z) if (Y.shift(), this.frame = H.delay, w = H.execute(H.state, H.delay)) break;
        if (w) {
          while (H = Y.shift()) H.unsubscribe();
          throw w;
        }
      }, K.frameTimeFactor = 10, K;
    }(d7q.AsyncScheduler);
  xl.VirtualTimeScheduler = c7q;
  var M48 = function (A) {
    j48(K, A);
    function K(q, Y, z) {
      if (z === void 0) z = q.index += 1;
      var w = A.call(this, q, Y) || this;
      return w.scheduler = q, w.work = Y, w.index = z, w.active = !0, w.index = q.index = z, w;
    }
    return K.prototype.schedule = function (q, Y) {
      if (Y === void 0) Y = 0;
      if (Number.isFinite(Y)) {
        if (!this.id) return A.prototype.schedule.call(this, q, Y);
        this.active = !1;
        var z = new K(this.scheduler, this.work);
        return this.add(z), z.schedule(q, Y);
      } else return p7q.Subscription.EMPTY;
    }, K.prototype.requestAsyncId = function (q, Y, z) {
      if (z === void 0) z = 0;
      this.delay = q.frame + z;
      var w = q.actions;
      return w.push(this), w.sort(K.sortActions), 1;
    }, K.prototype.recycleAsyncId = function (q, Y, z) {
      if (z === void 0) z = 0;
      return;
    }, K.prototype._execute = function (q, Y) {
      if (this.active === !0) return A.prototype._execute.call(this, q, Y);
    }, K.sortActions = function (q, Y) {
      if (q.delay === Y.delay) {
        if (q.index === Y.index) return 0;else if (q.index > Y.index) return 1;else return -1;
      } else if (q.delay > Y.delay) return 1;else return -1;
    }, K;
  }(U7q.AsyncAction);
  xl.VirtualAction = M48;
});

// Register to shared state
__$.P48 = P48;
