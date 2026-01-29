// Module: e1K
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e1K = v(s1K => {
  Object.defineProperty(s1K, "__esModule", {
    value: !0
  });
  s1K.Emitter = void 0;
  var ZZ2 = function () {
    function A(K) {
      var q;
      this.callbacks = {}, this.warned = !1, this.maxListeners = (q = K === null || K === void 0 ? void 0 : K.maxListeners) !== null && q !== void 0 ? q : 10;
    }
    return A.prototype.warnIfPossibleMemoryLeak = function (K) {
      if (this.warned) return;
      if (this.maxListeners && this.callbacks[K].length > this.maxListeners) console.warn("Event Emitter: Possible memory leak detected; ".concat(String(K), " has exceeded ").concat(this.maxListeners, " listeners.")), this.warned = !0;
    }, A.prototype.on = function (K, q) {
      if (!this.callbacks[K]) this.callbacks[K] = [q];else this.callbacks[K].push(q), this.warnIfPossibleMemoryLeak(K);
      return this;
    }, A.prototype.once = function (K, q) {
      var Y = this,
        z = function () {
          var w = [];
          for (var H = 0; H < arguments.length; H++) w[H] = arguments[H];
          Y.off(K, z), q.apply(Y, w);
        };
      return this.on(K, z), this;
    }, A.prototype.off = function (K, q) {
      var Y,
        z = (Y = this.callbacks[K]) !== null && Y !== void 0 ? Y : [],
        w = z.filter(function (H) {
          return H !== q;
        });
      return this.callbacks[K] = w, this;
    }, A.prototype.emit = function (K) {
      var q = this,
        Y,
        z = [];
      for (var w = 1; w < arguments.length; w++) z[w - 1] = arguments[w];
      var H = (Y = this.callbacks[K]) !== null && Y !== void 0 ? Y : [];
      return H.forEach(function (J) {
        J.apply(q, z);
      }), this;
    }, A;
  }();
  s1K.Emitter = ZZ2;
});

// Register to shared state
__$.e1K = e1K;
