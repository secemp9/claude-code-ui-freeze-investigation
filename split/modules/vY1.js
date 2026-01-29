// Module: vY1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vY1 = v((Gjw, Hb4) => {
  var xv9 = Number.MAX_SAFE_INTEGER || 9007199254740991,
    uv9 = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Hb4.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: xv9,
    RELEASE_TYPES: uv9,
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
});

// Register to shared state
__$.vY1 = vY1;
