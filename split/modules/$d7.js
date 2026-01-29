// Module: $d7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $d7 = v((evH, Xd7) => {
  Xd7.exports = Hk6;
  function Hk6(A, K) {
    if (typeof A === "string") K = A, A = void 0;
    var q = [];
    function Y(w) {
      if (typeof w !== "string") {
        var H = z();
        if (Hk6.verbose) console.log("codegen: " + H);
        if (H = "return " + H, w) {
          var J = Object.keys(w),
            O = Array(J.length + 1),
            X = Array(J.length),
            $ = 0;
          while ($ < J.length) O[$] = J[$], X[$] = w[J[$++]];
          return O[$] = H, Function.apply(null, O).apply(null, X);
        }
        return Function(H)();
      }
      var _ = Array(arguments.length - 1),
        G = 0;
      while (G < _.length) _[G] = arguments[++G];
      if (G = 0, w = w.replace(/%([%dfijs])/g, function (W, D) {
        var j = _[G++];
        switch (D) {
          case "d":
          case "f":
            return String(Number(j));
          case "i":
            return String(Math.floor(j));
          case "j":
            return JSON.stringify(j);
          case "s":
            return String(j);
        }
        return "%";
      }), G !== _.length) throw Error("parameter count mismatch");
      return q.push(w), Y;
    }
    function z(w) {
      return "function " + (w || K || "") + "(" + (A && A.join(",") || "") + `){
  ` + q.join(`
  `) + `
}`;
    }
    return Y.toString = z, Y;
  }
  Hk6.verbose = !1;
});

// Register to shared state
__$.$d7 = $d7;
