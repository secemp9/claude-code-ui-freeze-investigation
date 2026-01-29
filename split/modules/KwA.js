// Module: KwA
// Dependencies: b88, B88, mg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KwA = v(AwA => {
  var K7q = AwA && AwA.__extends || function () {
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
  Object.defineProperty(AwA, "__esModule", {
    value: !0
  });
  AwA.AsyncAction = void 0;
  var q7q = __$.b88(),
    m88 = __$.B88(),
    Y7q = __$.mg(),
    z7q = function (A) {
      K7q(K, A);
      function K(q, Y) {
        var z = A.call(this, q, Y) || this;
        return z.scheduler = q, z.work = Y, z.pending = !1, z;
      }
      return K.prototype.schedule = function (q, Y) {
        var z;
        if (Y === void 0) Y = 0;
        if (this.closed) return this;
        this.state = q;
        var w = this.id,
          H = this.scheduler;
        if (w != null) this.id = this.recycleAsyncId(H, w, Y);
        return this.pending = !0, this.delay = Y, this.id = (z = this.id) !== null && z !== void 0 ? z : this.requestAsyncId(H, this.id, Y), this;
      }, K.prototype.requestAsyncId = function (q, Y, z) {
        if (z === void 0) z = 0;
        return m88.intervalProvider.setInterval(q.flush.bind(q, this), z);
      }, K.prototype.recycleAsyncId = function (q, Y, z) {
        if (z === void 0) z = 0;
        if (z != null && this.delay === z && this.pending === !1) return Y;
        if (Y != null) m88.intervalProvider.clearInterval(Y);
        return;
      }, K.prototype.execute = function (q, Y) {
        if (this.closed) return Error("executing a cancelled action");
        this.pending = !1;
        var z = this._execute(q, Y);
        if (z) return z;else if (this.pending === !1 && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
      }, K.prototype._execute = function (q, Y) {
        var z = !1,
          w;
        try {
          this.work(q);
        } catch (H) {
          z = !0, w = H ? H : Error("Scheduled action threw falsy error");
        }
        if (z) return this.unsubscribe(), w;
      }, K.prototype.unsubscribe = function () {
        if (!this.closed) {
          var q = this,
            Y = q.id,
            z = q.scheduler,
            w = z.actions;
          if (this.work = this.state = this.scheduler = null, this.pending = !1, Y7q.arrRemove(w, this), Y != null) this.id = this.recycleAsyncId(z, Y, null);
          this.delay = null, A.prototype.unsubscribe.call(this);
        }
      }, K;
    }(q7q.Action);
  AwA.AsyncAction = z7q;
});

// Register to shared state
__$.KwA = KwA;
