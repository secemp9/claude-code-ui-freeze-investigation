// Module: Xy6
// Dependencies: Uz, sjA, Oy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xy6 = v(z6K => {
  Object.defineProperty(z6K, "__esModule", {
    value: !0
  });
  z6K.PriorityQueue = z6K.ON_REMOVE_FROM_FUTURE = void 0;
  var jZ2 = __$.Uz(),
    MZ2 = __$.sjA(),
    PZ2 = __$.Oy6();
  z6K.ON_REMOVE_FROM_FUTURE = "onRemoveFromFuture";
  var VZ2 = function (A) {
    jZ2.__extends(K, A);
    function K(q, Y, z) {
      var w = A.call(this) || this;
      return w.future = [], w.maxAttempts = q, w.queue = Y, w.seen = z !== null && z !== void 0 ? z : {}, w;
    }
    return K.prototype.push = function () {
      var q = this,
        Y = [];
      for (var z = 0; z < arguments.length; z++) Y[z] = arguments[z];
      var w = Y.map(function (H) {
        var J = q.updateAttempts(H);
        if (J > q.maxAttempts || q.includes(H)) return !1;
        return q.queue.push(H), !0;
      });
      return this.queue = this.queue.sort(function (H, J) {
        return q.getAttempts(H) - q.getAttempts(J);
      }), w;
    }, K.prototype.pushWithBackoff = function (q) {
      var Y = this;
      if (this.getAttempts(q) === 0) return this.push(q)[0];
      var z = this.updateAttempts(q);
      if (z > this.maxAttempts || this.includes(q)) return !1;
      var w = (0, PZ2.backoff)({
        attempt: z - 1
      });
      return setTimeout(function () {
        Y.queue.push(q), Y.future = Y.future.filter(function (H) {
          return H.id !== q.id;
        }), Y.emit(z6K.ON_REMOVE_FROM_FUTURE);
      }, w), this.future.push(q), !0;
    }, K.prototype.getAttempts = function (q) {
      var Y;
      return (Y = this.seen[q.id]) !== null && Y !== void 0 ? Y : 0;
    }, K.prototype.updateAttempts = function (q) {
      return this.seen[q.id] = this.getAttempts(q) + 1, this.getAttempts(q);
    }, K.prototype.includes = function (q) {
      return this.queue.includes(q) || this.future.includes(q) || Boolean(this.queue.find(function (Y) {
        return Y.id === q.id;
      })) || Boolean(this.future.find(function (Y) {
        return Y.id === q.id;
      }));
    }, K.prototype.pop = function () {
      return this.queue.shift();
    }, Object.defineProperty(K.prototype, "length", {
      get: function () {
        return this.queue.length;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(K.prototype, "todo", {
      get: function () {
        return this.queue.length + this.future.length;
      },
      enumerable: !1,
      configurable: !0
    }), K;
  }(MZ2.Emitter);
  z6K.PriorityQueue = VZ2;
});

// Register to shared state
__$.Xy6 = Xy6;
