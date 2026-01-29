// Module: py1
// Dependencies: Fy1, gy1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var py1 = v((U_z, Ae6) => {
  var ZAq = __$.Fy1(),
    WAq = __$.gy1();
  Ae6.exports = DAq;
  function DAq(A) {
    if (!Object.keys(this.jobs).length) return;
    this.index = this.size, ZAq(this), WAq(A)(null, this.results);
  }
});

// Register to shared state
__$.py1 = py1;
