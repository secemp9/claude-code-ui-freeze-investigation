// Module: NB8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NB8 = v(B_5 => {
  var fB8 = A => encodeURIComponent(A).replace(/[!'()*]/g, x_5),
    x_5 = A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`,
    u_5 = A => A.split("/").map(fB8).join("/");
  B_5.escapeUri = fB8;
  B_5.escapeUriPath = u_5;
});

// Register to shared state
__$.NB8 = NB8;
