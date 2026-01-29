// Module: NG4
// Dependencies: cA, LXA, mXA, PG4, Qk, $A, a3, s, $G, n69
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NG4 = k(() => {
  __$.cA();
  __$.LXA();
  __$.mXA();
  __$.PG4();
  __$.Qk = o(__$.$A(), 1), __$.a3 = __$.Qk.default.memo(function (K) {
    let q = __$.s(9),
      {
        children: Y
      } = K;
    if (typeof Y !== "string") {
      let O = String(Y),
        X;
      if (q[0] !== O) X = __$.Qk.default.createElement(__$.$G, null, O), q[0] = O, q[1] = X;else X = q[1];
      return X;
    }
    if (Y === "") return null;
    let z, w, H;
    if (q[2] !== Y) {
      H = Symbol.for("react.early_return_sentinel");
      A: {
        let O = __$.n69(Y);
        if (O.length === 0) {
          H = null;
          break A;
        }
        if (O.length === 1 && Object.keys(O[0].props).length === 0) {
          H = __$.Qk.default.createElement(__$.$G, null, O[0].text);
          break A;
        }
        z = __$.$G, w = O.map(__$.s69);
      }
      q[2] = Y, q[3] = z, q[4] = w, q[5] = H;
    } else z = q[3], w = q[4], H = q[5];
    if (H !== Symbol.for("react.early_return_sentinel")) return H;
    let J;
    if (q[6] !== z || q[7] !== w) J = __$.Qk.default.createElement(z, null, w), q[6] = z, q[7] = w, q[8] = J;else J = q[8];
    return J;
  });
  __$.o69 = {
    black: "ansi:black",
    red: "ansi:red",
    green: "ansi:green",
    yellow: "ansi:yellow",
    blue: "ansi:blue",
    magenta: "ansi:magenta",
    cyan: "ansi:cyan",
    white: "ansi:white",
    brightBlack: "ansi:blackBright",
    brightRed: "ansi:redBright",
    brightGreen: "ansi:greenBright",
    brightYellow: "ansi:yellowBright",
    brightBlue: "ansi:blueBright",
    brightMagenta: "ansi:magentaBright",
    brightCyan: "ansi:cyanBright",
    brightWhite: "ansi:whiteBright"
  };
});

// Register to shared state
__$.NG4 = NG4;
