// Module: XDK
// Dependencies: Ce

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XDK = v(YF2 => {
  var qF2 = __$.Ce().getSymbolSize;
  YF2.getRowColCoords = function (K) {
    if (K === 1) return [];
    let q = Math.floor(K / 7) + 2,
      Y = qF2(K),
      z = Y === 145 ? 26 : Math.ceil((Y - 13) / (2 * q - 2)) * 2,
      w = [Y - 7];
    for (let H = 1; H < q - 1; H++) w[H] = w[H - 1] - z;
    return w.push(6), w.reverse();
  };
  YF2.getPositions = function (K) {
    let q = [],
      Y = YF2.getRowColCoords(K),
      z = Y.length;
    for (let w = 0; w < z; w++) for (let H = 0; H < z; H++) {
      if (w === 0 && H === 0 || w === 0 && H === z - 1 || w === z - 1 && H === 0) continue;
      q.push([Y[w], Y[H]]);
    }
    return q;
  };
});

// Register to shared state
__$.XDK = XDK;
