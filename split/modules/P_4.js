// Module: P_4
// Dependencies: oyA, xk

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P_4 = v((lYw, M_4) => {
  var Y19 = __$.oyA(),
    z19 = __$.xk();
  M_4.exports = (A, K, q) => {
    let Y = [],
      z = null,
      w = null,
      H = A.sort(($, _) => z19($, _, q));
    for (let $ of H) if (Y19($, K, q)) {
      if (w = $, !z) z = $;
    } else {
      if (w) Y.push([z, w]);
      w = null, z = null;
    }
    if (z) Y.push([z, null]);
    let J = [];
    for (let [$, _] of Y) if ($ === _) J.push($);else if (!_ && $ === H[0]) J.push("*");else if (!_) J.push(`>=${$}`);else if ($ === H[0]) J.push(`<=${_}`);else J.push(`${$} - ${_}`);
    let O = J.join(" || "),
      X = typeof K.raw === "string" ? K.raw : String(K);
    return O.length < X.length ? O : K;
  };
});

// Register to shared state
__$.P_4 = P_4;
