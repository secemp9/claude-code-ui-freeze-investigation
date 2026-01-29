// Module: dyA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dyA = v((zYw, FX4) => {
  var Ae3 = Number.MAX_SAFE_INTEGER || 9007199254740991,
    Ke3 = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  FX4.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: Ae3,
    RELEASE_TYPES: Ke3,
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
});

// Register to shared state
__$.dyA = dyA;
