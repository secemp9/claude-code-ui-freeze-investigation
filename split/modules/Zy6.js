// Module: Zy6
// Dependencies: Uz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zy6 = v($6K => {
  Object.defineProperty($6K, "__esModule", {
    value: !0
  });
  $6K.NullStats = $6K.CoreStats = void 0;
  var Gy6 = __$.Uz(),
    EZ2 = function (A) {
      var K = {
        gauge: "g",
        counter: "c"
      };
      return K[A];
    },
    X6K = function () {
      function A() {
        this.metrics = [];
      }
      return A.prototype.increment = function (K, q, Y) {
        if (q === void 0) q = 1;
        this.metrics.push({
          metric: K,
          value: q,
          tags: Y !== null && Y !== void 0 ? Y : [],
          type: "counter",
          timestamp: Date.now()
        });
      }, A.prototype.gauge = function (K, q, Y) {
        this.metrics.push({
          metric: K,
          value: q,
          tags: Y !== null && Y !== void 0 ? Y : [],
          type: "gauge",
          timestamp: Date.now()
        });
      }, A.prototype.flush = function () {
        var K = this.metrics.map(function (q) {
          return Gy6.__assign(Gy6.__assign({}, q), {
            tags: q.tags.join(",")
          });
        });
        if (console.table) console.table(K);else console.log(K);
        this.metrics = [];
      }, A.prototype.serialize = function () {
        return this.metrics.map(function (K) {
          return {
            m: K.metric,
            v: K.value,
            t: K.tags,
            k: EZ2(K.type),
            e: K.timestamp
          };
        });
      }, A;
    }();
  $6K.CoreStats = X6K;
  var kZ2 = function (A) {
    Gy6.__extends(K, A);
    function K() {
      return A !== null && A.apply(this, arguments) || this;
    }
    return K.prototype.gauge = function () {
      var q = [];
      for (var Y = 0; Y < arguments.length; Y++) q[Y] = arguments[Y];
    }, K.prototype.increment = function () {
      var q = [];
      for (var Y = 0; Y < arguments.length; Y++) q[Y] = arguments[Y];
    }, K.prototype.flush = function () {
      var q = [];
      for (var Y = 0; Y < arguments.length; Y++) q[Y] = arguments[Y];
    }, K.prototype.serialize = function () {
      var q = [];
      for (var Y = 0; Y < arguments.length; Y++) q[Y] = arguments[Y];
      return [];
    }, K;
  }(X6K);
  $6K.NullStats = kZ2;
});

// Register to shared state
__$.Zy6 = Zy6;
