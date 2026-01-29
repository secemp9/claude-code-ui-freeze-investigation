// Module: D64
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D64 = v(Tf3 => {
  var W64 = A => encodeURIComponent(A).replace(/[!'()*]/g, ff3),
    ff3 = A => `%${A.charCodeAt(0).toString(16).toUpperCase()}`,
    Nf3 = A => A.split("/").map(W64).join("/");
  Tf3.escapeUri = W64;
  Tf3.escapeUriPath = Nf3;
});

// Register to shared state
__$.D64 = D64;
