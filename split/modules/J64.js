// Module: J64
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var J64 = v(aV3 => {
  var H64 = A => encodeURIComponent(A).replace(/[!'()*]/g, rV3),
    rV3 = A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`,
    oV3 = A => A.split("/").map(H64).join("/");
  aV3.escapeUri = H64;
  aV3.escapeUriPath = oV3;
});

// Register to shared state
__$.J64 = J64;
