// Module: nk7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nk7 = v((F_H, ik7) => {
  var npY = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    dk7 = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    rpY = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    opY = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    apY = new Map([["n", `
`], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\x00"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
  function lk7(A) {
    let K = A[0] === "u",
      q = A[1] === "{";
    if (K && !q && A.length === 5 || A[0] === "x" && A.length === 3) return String.fromCharCode(parseInt(A.slice(1), 16));
    if (K && q) return String.fromCodePoint(parseInt(A.slice(2, -1), 16));
    return apY.get(A) || A;
  }
  function spY(A, K) {
    let q = [],
      Y = K.trim().split(/\s*,\s*/g),
      z;
    for (let w of Y) {
      let H = Number(w);
      if (!Number.isNaN(H)) q.push(H);else if (z = w.match(rpY)) q.push(z[2].replace(opY, (J, O, X) => O ? lk7(O) : X));else throw Error(`Invalid Chalk template style argument: ${w} (in style '${A}')`);
    }
    return q;
  }
  function tpY(A) {
    dk7.lastIndex = 0;
    let K = [],
      q;
    while ((q = dk7.exec(A)) !== null) {
      let Y = q[1];
      if (q[2]) {
        let z = spY(Y, q[2]);
        K.push([Y].concat(z));
      } else K.push([Y]);
    }
    return K;
  }
  function ck7(A, K) {
    let q = {};
    for (let z of K) for (let w of z.styles) q[w[0]] = z.inverse ? null : w.slice(1);
    let Y = A;
    for (let [z, w] of Object.entries(q)) {
      if (!Array.isArray(w)) continue;
      if (!(z in Y)) throw Error(`Unknown Chalk style: ${z}`);
      Y = w.length > 0 ? Y[z](...w) : Y[z];
    }
    return Y;
  }
  ik7.exports = (A, K) => {
    let q = [],
      Y = [],
      z = [];
    if (K.replace(npY, (w, H, J, O, X, $) => {
      if (H) z.push(lk7(H));else if (O) {
        let _ = z.join("");
        z = [], Y.push(q.length === 0 ? _ : ck7(A, q)(_)), q.push({
          inverse: J,
          styles: tpY(O)
        });
      } else if (X) {
        if (q.length === 0) throw Error("Found extraneous } in Chalk template literal");
        Y.push(ck7(A, q)(z.join(""))), z = [], q.pop();
      } else z.push($);
    }), Y.push(z.join("")), q.length > 0) {
      let w = `Chalk template literal is missing ${q.length} closing bracket${q.length === 1 ? "" : "s"} (\`}\`)`;
      throw Error(w);
    }
    return Y.join("");
  };
});

// Register to shared state
__$.nk7 = nk7;
