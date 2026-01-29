// Module: ByA
// Dependencies: RyA, f04, N04, T04, N51, MK6, a0, PK6, T51, s5w
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ByA = k(() => {
  __$.RyA();
  __$.f04 = new Set([27, 155]), __$.N04 = "[".codePointAt(0), __$.T04 = "]".codePointAt(0), __$.N51 = new Set(), __$.MK6 = new Map();
  for (let [A, K] of __$.a0.codes) __$.N51.add(__$.a0.color.ansi(K)), __$.MK6.set(__$.a0.color.ansi(A), __$.a0.color.ansi(K));
  __$.PK6 = __$.T51.split("").map(A => A.charCodeAt(0)), __$.s5w = __$.v04.charCodeAt(0), __$.Yt3 = `\x1B]8;;${__$.v04}`;
});

// Register to shared state
__$.ByA = ByA;
