// Module: FJ7
// Dependencies: vjY, TjY, EjY, nT, MZA, kjY, SJ7, hJ7, CjY, xJ7
//   ... and 18 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FJ7 = k(() => {
  __$.vjY = __$.TjY("/");
  try {
    __$.EjY = __$.vjY("worker_threads").Worker;
  } catch (A) {}
  __$.nT = Uint8Array, __$.MZA = Uint16Array, __$.kjY = Int32Array, __$.SJ7 = new __$.nT([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), __$.hJ7 = new __$.nT([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), __$.CjY = new __$.nT([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), __$.xJ7 = __$.bJ7(__$.SJ7, 2), __$.uJ7 = __$.xJ7.b, __$.LjY = __$.xJ7.r;
  __$.uJ7[28] = 258, __$.LjY[258] = 28;
  __$.BJ7 = __$.bJ7(__$.hJ7, 0), __$.RjY = __$.BJ7.b, __$.U6H = __$.BJ7.r, __$.tW6 = new __$.MZA(32768);
  for (__$.m9 = 0; __$.m9 < 32768; ++__$.m9) __$.iu = (__$.m9 & 43690) >> 1 | (__$.m9 & 21845) << 1, __$.iu = (__$.iu & 52428) >> 2 | (__$.iu & 13107) << 2, __$.iu = (__$.iu & 61680) >> 4 | (__$.iu & 3855) << 4, __$.tW6[__$.m9] = ((__$.iu & 65280) >> 8 | (__$.iu & 255) << 8) >> 1;
  __$.ruA = new __$.nT(288);
  for (__$.m9 = 0; __$.m9 < 144; ++__$.m9) __$.ruA[__$.m9] = 8;
  for (__$.m9 = 144; __$.m9 < 256; ++__$.m9) __$.ruA[__$.m9] = 9;
  for (__$.m9 = 256; __$.m9 < 280; ++__$.m9) __$.ruA[__$.m9] = 7;
  for (__$.m9 = 280; __$.m9 < 288; ++__$.m9) __$.ruA[__$.m9] = 8;
  __$.mJ7 = new __$.nT(32);
  for (__$.m9 = 0; __$.m9 < 32; ++__$.m9) __$.mJ7[__$.m9] = 5;
  __$.yjY = __$.nuA(__$.ruA, 9, 1), __$.IjY = __$.nuA(__$.mJ7, 5, 1), __$.hjY = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler",, "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], __$.xjY = new __$.nT(0);
  __$.eW6 = typeof TextDecoder < "u" && new TextDecoder();
  try {
    __$.eW6.decode(__$.xjY, {
      stream: !0
    }), __$.BjY = 1;
  } catch (A) {}
});

// Register to shared state
__$.FJ7 = FJ7;
