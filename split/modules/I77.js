// Module: I77
// Dependencies: DxA, fC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I77 = v((wgw, y77) => {
  var X5Y = __$.DxA(),
    $5Y = __$.fC();
  y77.exports = (A, K, q) => {
    let Y = [],
      z = null,
      w = null,
      H = A.sort(($, _) => $5Y($, _, q));
    for (let $ of H) if (X5Y($, K, q)) {
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
__$.I77 = I77;
