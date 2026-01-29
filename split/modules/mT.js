// Module: mT
// Dependencies: y_A, A06, EJ, ghA, Pw1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mT = k(() => {
  __$.y_A();
  __$.A06();
  __$.EJ = __$.ghA({
    namespace: "Microsoft.AAD",
    packageName: "@azure/identity",
    packageVersion: __$.Pw1
  });
});

// Register to shared state
__$.mT = mT;
