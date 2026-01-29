// Module: TF8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TF8 = v(PV5 => {
  var NF8 = A => encodeURIComponent(A).replace(/[!'()*]/g, jV5),
    jV5 = A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`,
    MV5 = A => A.split("/").map(NF8).join("/");
  PV5.escapeUri = NF8;
  PV5.escapeUriPath = MV5;
});

// Register to shared state
__$.TF8 = TF8;
