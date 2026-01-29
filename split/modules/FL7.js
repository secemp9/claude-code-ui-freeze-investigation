// Module: FL7
// Dependencies: HDA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FL7 = v((rWH, gL7) => {
  var tmA = __$.HDA();
  function NN6(A, K, q, Y, z) {
    var w = "",
      H = "",
      J = Math.floor(z / 2) - 1;
    if (Y - K > J) w = " ... ", K = Y - J + w.length;
    if (q - Y > J) H = " ...", q = Y + J - H.length;
    return {
      str: w + A.slice(K, q).replace(/\t/g, "→") + H,
      pos: Y - K + w.length
    };
  }
  function TN6(A, K) {
    return tmA.repeat(" ", K - A.length) + A;
  }
  function ilY(A, K) {
    if (K = Object.create(K || null), !A.buffer) return null;
    if (!K.maxLength) K.maxLength = 79;
    if (typeof K.indent !== "number") K.indent = 1;
    if (typeof K.linesBefore !== "number") K.linesBefore = 3;
    if (typeof K.linesAfter !== "number") K.linesAfter = 2;
    var q = /\r?\n|\r|\0/g,
      Y = [0],
      z = [],
      w,
      H = -1;
    while (w = q.exec(A.buffer)) if (z.push(w.index), Y.push(w.index + w[0].length), A.position <= w.index && H < 0) H = Y.length - 2;
    if (H < 0) H = Y.length - 1;
    var J = "",
      O,
      X,
      $ = Math.min(A.line + K.linesAfter, z.length).toString().length,
      _ = K.maxLength - (K.indent + $ + 3);
    for (O = 1; O <= K.linesBefore; O++) {
      if (H - O < 0) break;
      X = NN6(A.buffer, Y[H - O], z[H - O], A.position - (Y[H] - Y[H - O]), _), J = tmA.repeat(" ", K.indent) + TN6((A.line - O + 1).toString(), $) + " | " + X.str + `
` + J;
    }
    X = NN6(A.buffer, Y[H], z[H], A.position, _), J += tmA.repeat(" ", K.indent) + TN6((A.line + 1).toString(), $) + " | " + X.str + `
`, J += tmA.repeat("-", K.indent + $ + 3 + X.pos) + `^
`;
    for (O = 1; O <= K.linesAfter; O++) {
      if (H + O >= z.length) break;
      X = NN6(A.buffer, Y[H + O], z[H + O], A.position - (Y[H] - Y[H + O]), _), J += tmA.repeat(" ", K.indent) + TN6((A.line + O + 1).toString(), $) + " | " + X.str + `
`;
    }
    return J.replace(/\n$/, "");
  }
  gL7.exports = ilY;
});

// Register to shared state
__$.FL7 = FL7;
