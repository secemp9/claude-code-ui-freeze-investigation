// Module: XxA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XxA = v((Pmw, o87) => {
  var HKY = Number.MAX_SAFE_INTEGER || 9007199254740991,
    JKY = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  o87.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: HKY,
    RELEASE_TYPES: JKY,
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
});

// Register to shared state
__$.XxA = XxA;
