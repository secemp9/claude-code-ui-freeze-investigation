// Module: Ce
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ce = v(ig2 => {
  var Wg6,
    lg2 = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
  ig2.getSymbolSize = function (K) {
    if (!K) throw Error('"version" cannot be null or undefined');
    if (K < 1 || K > 40) throw Error('"version" should be in range from 1 to 40');
    return K * 4 + 17;
  };
  ig2.getSymbolTotalCodewords = function (K) {
    return lg2[K];
  };
  ig2.getBCHDigit = function (A) {
    let K = 0;
    while (A !== 0) K++, A >>>= 1;
    return K;
  };
  ig2.setToSJISFunction = function (K) {
    if (typeof K !== "function") throw Error('"toSJISFunc" is not a valid function.');
    Wg6 = K;
  };
  ig2.isKanjiModeEnabled = function () {
    return typeof Wg6 < "u";
  };
  ig2.toSJIS = function (K) {
    return Wg6(K);
  };
});

// Register to shared state
__$.Ce = Ce;
