// Module: tE
// Dependencies: eg8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tE = v(uM5 => {
  var xM5 = __$.eg8(),
    AF8 = A => {
      if (typeof A === "string") return AF8(new URL(A));
      let {
          hostname: K,
          pathname: q,
          port: Y,
          protocol: z,
          search: w
        } = A,
        H;
      if (w) H = xM5.parseQueryString(w);
      return {
        hostname: K,
        port: Y ? parseInt(Y) : void 0,
        protocol: z,
        path: q,
        query: H
      };
    };
  uM5.parseUrl = AF8;
});

// Register to shared state
__$.tE = tE;
