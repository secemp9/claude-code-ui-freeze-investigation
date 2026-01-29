// Module: bw6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var bw6 = v((INw, Ml4) => {
  var Ez1 = Object.prototype.hasOwnProperty,
    jl4 = Object.prototype.toString,
    $l4 = Object.defineProperty,
    _l4 = Object.getOwnPropertyDescriptor,
    Gl4 = function (K) {
      if (typeof Array.isArray === "function") return Array.isArray(K);
      return jl4.call(K) === "[object Array]";
    },
    Zl4 = function (K) {
      if (!K || jl4.call(K) !== "[object Object]") return !1;
      var q = Ez1.call(K, "constructor"),
        Y = K.constructor && K.constructor.prototype && Ez1.call(K.constructor.prototype, "isPrototypeOf");
      if (K.constructor && !q && !Y) return !1;
      var z;
      for (z in K);
      return typeof z > "u" || Ez1.call(K, z);
    },
    Wl4 = function (K, q) {
      if ($l4 && q.name === "__proto__") $l4(K, q.name, {
        enumerable: !0,
        configurable: !0,
        value: q.newValue,
        writable: !0
      });else K[q.name] = q.newValue;
    },
    Dl4 = function (K, q) {
      if (q === "__proto__") {
        if (!Ez1.call(K, q)) return;else if (_l4) return _l4(K, q).value;
      }
      return K[q];
    };
  Ml4.exports = function A() {
    var K,
      q,
      Y,
      z,
      w,
      H,
      J = arguments[0],
      O = 1,
      X = arguments.length,
      $ = !1;
    if (typeof J === "boolean") $ = J, J = arguments[1] || {}, O = 2;
    if (J == null || typeof J !== "object" && typeof J !== "function") J = {};
    for (; O < X; ++O) if (K = arguments[O], K != null) {
      for (q in K) if (Y = Dl4(J, q), z = Dl4(K, q), J !== z) {
        if ($ && z && (Zl4(z) || (w = Gl4(z)))) {
          if (w) w = !1, H = Y && Gl4(Y) ? Y : [];else H = Y && Zl4(Y) ? Y : {};
          Wl4(J, {
            name: q,
            newValue: A($, H, z)
          });
        } else if (typeof z < "u") Wl4(J, {
          name: q,
          newValue: z
        });
      }
    }
    return J;
  };
});

// Register to shared state
__$.bw6 = bw6;
