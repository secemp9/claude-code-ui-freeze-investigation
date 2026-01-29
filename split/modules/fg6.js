// Module: fg6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var fg6 = v(RF2 => {
  var kdA = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  kdA = kdA.replace(/u/g, "\\u");
  var EF2 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kdA + `)(?:.|[\r
]))+`;
  RF2.KANJI = new RegExp(kdA, "g");
  RF2.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  RF2.BYTE = new RegExp(EF2, "g");
  RF2.NUMERIC = new RegExp("[0-9]+", "g");
  RF2.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
  var kF2 = new RegExp("^" + kdA + "$"),
    CF2 = new RegExp("^[0-9]+$"),
    LF2 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  RF2.testKanji = function (K) {
    return kF2.test(K);
  };
  RF2.testNumeric = function (K) {
    return CF2.test(K);
  };
  RF2.testAlphanumeric = function (K) {
    return LF2.test(K);
  };
});

// Register to shared state
__$.fg6 = fg6;
