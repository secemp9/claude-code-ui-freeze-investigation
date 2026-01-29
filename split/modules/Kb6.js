// Module: Kb6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kb6 = v((stH, k9K) => {
  var atH = k9K.exports = {
    nextSkippingChildren: $T2,
    nextAncestorSibling: Ab6,
    next: _T2,
    previous: GT2,
    deepLastChild: E9K
  };
  function $T2(A, K) {
    if (A === K) return null;
    if (A.nextSibling !== null) return A.nextSibling;
    return Ab6(A, K);
  }
  function Ab6(A, K) {
    for (A = A.parentNode; A !== null; A = A.parentNode) {
      if (A === K) return null;
      if (A.nextSibling !== null) return A.nextSibling;
    }
    return null;
  }
  function _T2(A, K) {
    var q = A.firstChild;
    if (q !== null) return q;
    if (A === K) return null;
    if (q = A.nextSibling, q !== null) return q;
    return Ab6(A, K);
  }
  function E9K(A) {
    while (A.lastChild) A = A.lastChild;
    return A;
  }
  function GT2(A, K) {
    var q = A.previousSibling;
    if (q !== null) return E9K(q);
    if (q = A.parentNode, q === K) return null;
    return q;
  }
});

// Register to shared state
__$.Kb6 = Kb6;
