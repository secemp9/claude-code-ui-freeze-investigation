// Module: cjK
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cjK = v(Op2 => {
  Op2.render = function (A, K, q) {
    let Y = A.modules.size,
      z = A.modules.data,
      w = "\x1B[40m  \x1B[0m",
      H = "\x1B[47m  \x1B[0m",
      J = "",
      O = Array(Y + 3).join("\x1B[47m  \x1B[0m"),
      X = Array(2).join("\x1B[47m  \x1B[0m");
    J += O + `
`;
    for (let $ = 0; $ < Y; ++$) {
      J += "\x1B[47m  \x1B[0m";
      for (let _ = 0; _ < Y; _++) J += z[$ * Y + _] ? "\x1B[40m  \x1B[0m" : "\x1B[47m  \x1B[0m";
      J += X + `
`;
    }
    if (J += O + `
`, typeof q === "function") q(null, J);
    return J;
  };
});

// Register to shared state
__$.cjK = cjK;
