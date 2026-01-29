// Module: jgA
// Dependencies: CDA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jgA = v(nI7 => {
  Object.defineProperty(nI7, "__esModule", {
    value: !0
  });
  nI7._getStorageKey = nI7._getUserStorageKey = void 0;
  var lI7 = __$.CDA();
  function iI7(A, K, q) {
    var Y;
    if (q) return q(A, K);
    let z = K && K.customIDs ? K.customIDs : {},
      w = [`uid:${(Y = K === null || K === void 0 ? void 0 : K.userID) !== null && Y !== void 0 ? Y : ""}`, `cids:${Object.keys(z).sort((H, J) => H.localeCompare(J)).map(H => `${H}-${z[H]}`).join(",")}`, `k:${A}`];
    return (0, lI7._DJB2)(w.join("|"));
  }
  nI7._getUserStorageKey = iI7;
  function soY(A, K, q) {
    if (K) return iI7(A, K, q);
    return (0, lI7._DJB2)(`k:${A}`);
  }
  nI7._getStorageKey = soY;
});

// Register to shared state
__$.jgA = jgA;
