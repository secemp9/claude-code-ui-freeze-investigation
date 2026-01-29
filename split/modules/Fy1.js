// Module: Fy1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fy1 = v((g_z, at6) => {
  at6.exports = JAq;
  function JAq(A) {
    Object.keys(A.jobs).forEach(OAq.bind(A)), A.jobs = {};
  }
  function OAq(A) {
    if (typeof this.jobs[A] == "function") this.jobs[A]();
  }
});

// Register to shared state
__$.Fy1 = Fy1;
