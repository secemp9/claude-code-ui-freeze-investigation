// Module: UU8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UU8 = v(FU8 => {
  Object.defineProperty(FU8, "__esModule", {
    value: !0
  });
  FU8.readFile = FU8.fileIntercept = FU8.filePromises = void 0;
  var Nk5 = CA("node:fs/promises");
  FU8.filePromises = {};
  FU8.fileIntercept = {};
  var Tk5 = (A, K) => {
    if (FU8.fileIntercept[A] !== void 0) return FU8.fileIntercept[A];
    if (!FU8.filePromises[A] || K?.ignoreCache) FU8.filePromises[A] = (0, Nk5.readFile)(A, "utf8");
    return FU8.filePromises[A];
  };
  FU8.readFile = Tk5;
});

// Register to shared state
__$.UU8 = UU8;
