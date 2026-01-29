// Module: Dd7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dd7 = v(Wd7 => {
  var Xk6 = Wd7,
    Zd7 = Xk6.isAbsolute = function (K) {
      return /^(?:\/|\w+:)/.test(K);
    },
    Ok6 = Xk6.normalize = function (K) {
      K = K.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
      var q = K.split("/"),
        Y = Zd7(K),
        z = "";
      if (Y) z = q.shift() + "/";
      for (var w = 0; w < q.length;) if (q[w] === "..") {
        if (w > 0 && q[w - 1] !== "..") q.splice(--w, 2);else if (Y) q.splice(w, 1);else ++w;
      } else if (q[w] === ".") q.splice(w, 1);else ++w;
      return z + q.join("/");
    };
  Xk6.resolve = function (K, q, Y) {
    if (!Y) q = Ok6(q);
    if (Zd7(q)) return q;
    if (!Y) K = Ok6(K);
    return (K = K.replace(/(?:\/|^)[^/]+$/, "")).length ? Ok6(K + "/" + q) : q;
  };
});

// Register to shared state
__$.Dd7 = Dd7;
