// Module: QB8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QB8 = v(RG5 => {
  var FB8 = A => encodeURIComponent(A).replace(/[!'()*]/g, CG5),
    CG5 = A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`,
    LG5 = A => A.split("/").map(FB8).join("/");
  RG5.escapeUri = FB8;
  RG5.escapeUriPath = LG5;
});

// Register to shared state
__$.QB8 = QB8;
