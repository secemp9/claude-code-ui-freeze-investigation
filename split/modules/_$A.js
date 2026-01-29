// Module: _$A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _$A = v(Zj9 => {
  function Gj9({
    format: A,
    minFractionDigits: K,
    tag: q,
    value: Y
  }) {
    if (typeof Y === "bigint") return String(Y);
    let z = typeof Y === "number" ? Y : Number(Y);
    if (!isFinite(z)) return isNaN(z) ? ".nan" : z < 0 ? "-.inf" : ".inf";
    let w = JSON.stringify(Y);
    if (!A && K && (!q || q === "tag:yaml.org,2002:float") && /^\d/.test(w)) {
      let H = w.indexOf(".");
      if (H < 0) H = w.length, w += ".";
      let J = K - (w.length - H - 1);
      while (J-- > 0) w += "0";
    }
    return w;
  }
  Zj9.stringifyNumber = Gj9;
});

// Register to shared state
__$._$A = _$A;
