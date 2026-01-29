// Module: mk7
// Dependencies: BY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mk7 = v((B_H, Bk7) => {
  var hk7 = (A, K) => (...q) => {
      return `\x1B[${A(...q) + K}m`;
    },
    bk7 = (A, K) => (...q) => {
      let Y = A(...q);
      return `\x1B[${38 + K};5;${Y}m`;
    },
    xk7 = (A, K) => (...q) => {
      let Y = A(...q);
      return `\x1B[${38 + K};2;${Y[0]};${Y[1]};${Y[2]}m`;
    },
    XZ1 = A => A,
    uk7 = (A, K, q) => [A, K, q],
    nWA = (A, K, q) => {
      Object.defineProperty(A, K, {
        get: () => {
          let Y = q();
          return Object.defineProperty(A, K, {
            value: Y,
            enumerable: !0,
            configurable: !0
          }), Y;
        },
        enumerable: !0,
        configurable: !0
      });
    },
    if6,
    rWA = (A, K, q, Y) => {
      if (if6 === void 0) if6 = __$.BY6();
      let z = Y ? 10 : 0,
        w = {};
      for (let [H, J] of Object.entries(if6)) {
        let O = H === "ansi16" ? "ansi" : H;
        if (H === K) w[O] = A(q, z);else if (typeof J === "object") w[O] = A(J[K], z);
      }
      return w;
    };
  function ppY() {
    let A = new Map(),
      K = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
    K.color.gray = K.color.blackBright, K.bgColor.bgGray = K.bgColor.bgBlackBright, K.color.grey = K.color.blackBright, K.bgColor.bgGrey = K.bgColor.bgBlackBright;
    for (let [q, Y] of Object.entries(K)) {
      for (let [z, w] of Object.entries(Y)) K[z] = {
        open: `\x1B[${w[0]}m`,
        close: `\x1B[${w[1]}m`
      }, Y[z] = K[z], A.set(w[0], w[1]);
      Object.defineProperty(K, q, {
        value: Y,
        enumerable: !1
      });
    }
    return Object.defineProperty(K, "codes", {
      value: A,
      enumerable: !1
    }), K.color.close = "\x1B[39m", K.bgColor.close = "\x1B[49m", nWA(K.color, "ansi", () => rWA(hk7, "ansi16", XZ1, !1)), nWA(K.color, "ansi256", () => rWA(bk7, "ansi256", XZ1, !1)), nWA(K.color, "ansi16m", () => rWA(xk7, "rgb", uk7, !1)), nWA(K.bgColor, "ansi", () => rWA(hk7, "ansi16", XZ1, !0)), nWA(K.bgColor, "ansi256", () => rWA(bk7, "ansi256", XZ1, !0)), nWA(K.bgColor, "ansi16m", () => rWA(xk7, "rgb", uk7, !0)), K;
  }
  Object.defineProperty(Bk7, "exports", {
    enumerable: !0,
    get: ppY
  });
});

// Register to shared state
__$.mk7 = mk7;
