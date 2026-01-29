// Module: Fh4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fh4 = v((Ojw, gh4) => {
  var mh4 = () => process.platform === "linux",
    fY1 = null,
    Nv9 = () => {
      if (!fY1) if (mh4() && process.report) {
        let A = process.report.excludeNetwork;
        process.report.excludeNetwork = !0, fY1 = process.report.getReport(), process.report.excludeNetwork = A;
      } else fY1 = {};
      return fY1;
    };
  gh4.exports = {
    isLinux: mh4,
    getReport: Nv9
  };
});

// Register to shared state
__$.Fh4 = Fh4;
