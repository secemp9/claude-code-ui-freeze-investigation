// Module: UTK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UTK = v(VE1 => {
  (function (A) {
    A.black = "\x1B[30m", A.red = "\x1B[31m", A.green = "\x1B[32m", A.yellow = "\x1B[33m", A.blue = "\x1B[34m", A.magenta = "\x1B[35m", A.cyan = "\x1B[36m", A.lightgray = "\x1B[37m", A.default = "\x1B[39m", A.darkgray = "\x1B[90m", A.lightred = "\x1B[91m", A.lightgreen = "\x1B[92m", A.lightyellow = "\x1B[93m", A.lightblue = "\x1B[94m", A.lightmagenta = "\x1B[95m", A.lightcyan = "\x1B[96m", A.white = "\x1B[97m", A.reset = "\x1B[0m";
    function K(q, Y) {
      return Y === void 0 ? q : Y + q + A.reset;
    }
    A.colored = K, A.plot = function (q, Y = void 0) {
      if (typeof q[0] == "number") q = [q];
      Y = typeof Y < "u" ? Y : {};
      let z = typeof Y.min < "u" ? Y.min : q[0][0],
        w = typeof Y.max < "u" ? Y.max : q[0][0];
      for (let N = 0; N < q.length; N++) for (let T = 0; T < q[N].length; T++) z = Math.min(z, q[N][T]), w = Math.max(w, q[N][T]);
      let H = ["┼", "┤", "╶", "╴", "─", "╰", "╭", "╮", "╯", "│"],
        J = Math.abs(w - z),
        O = typeof Y.offset < "u" ? Y.offset : 3,
        X = typeof Y.padding < "u" ? Y.padding : "           ",
        $ = typeof Y.height < "u" ? Y.height : J,
        _ = typeof Y.colors < "u" ? Y.colors : [],
        G = J !== 0 ? $ / J : 1,
        Z = Math.round(z * G),
        W = Math.round(w * G),
        D = Math.abs(W - Z),
        j = 0;
      for (let N = 0; N < q.length; N++) j = Math.max(j, q[N].length);
      j = j + O;
      let M = typeof Y.symbols < "u" ? Y.symbols : H,
        P = typeof Y.format < "u" ? Y.format : function (N) {
          return (X + N.toFixed(2)).slice(-X.length);
        },
        f = Array(D + 1);
      for (let N = 0; N <= D; N++) {
        f[N] = Array(j);
        for (let T = 0; T < j; T++) f[N][T] = " ";
      }
      for (let N = Z; N <= W; ++N) {
        let T = P(D > 0 ? w - (N - Z) * J / D : N, N - Z);
        f[N - Z][Math.max(O - T.length, 0)] = T, f[N - Z][O - 1] = N == 0 ? M[0] : M[1];
      }
      for (let N = 0; N < q.length; N++) {
        let T = _[N % _.length],
          C = Math.round(q[N][0] * G) - Z;
        f[D - C][O - 1] = K(M[0], T);
        for (let R = 0; R < q[N].length - 1; R++) {
          let x = Math.round(q[N][R + 0] * G) - Z,
            y = Math.round(q[N][R + 1] * G) - Z;
          if (x == y) f[D - x][R + O] = K(M[4], T);else {
            f[D - y][R + O] = K(x > y ? M[5] : M[6], T), f[D - x][R + O] = K(x > y ? M[7] : M[8], T);
            let B = Math.min(x, y),
              b = Math.max(x, y);
            for (let F = B + 1; F < b; F++) f[D - F][R + O] = K(M[9], T);
          }
        }
      }
      return f.map(function (N) {
        return N.join("");
      }).join(`
`);
    };
  })(typeof VE1 > "u" ? VE1.asciichart = {} : VE1);
});

// Register to shared state
__$.UTK = UTK;
