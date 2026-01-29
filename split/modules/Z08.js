// Module: Z08
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z08 = v((pCz, G08) => {
  function oVq(A) {
    return {
      name: "Mizar",
      keywords: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
      contains: [A.COMMENT("::", "$")]
    };
  }
  G08.exports = oVq;
});

// Register to shared state
__$.Z08 = Z08;
