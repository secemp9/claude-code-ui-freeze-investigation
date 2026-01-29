// Module: ph4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ph4 = v((Xjw, Uh4) => {
  var Qh4 = CA("fs"),
    Tv9 = A => Qh4.readFileSync(A, "utf-8"),
    vv9 = A => new Promise((K, q) => {
      Qh4.readFile(A, "utf-8", (Y, z) => {
        if (Y) q(Y);else K(z);
      });
    });
  Uh4.exports = {
    LDD_PATH: "/usr/bin/ldd",
    readFileSync: Tv9,
    readFile: vv9
  };
});

// Register to shared state
__$.ph4 = ph4;
