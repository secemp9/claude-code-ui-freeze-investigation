// Module: Ht6
// Dependencies: BO, Cy1, TE, CrA, rtK, zt6, Yt6, wt6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ht6 = k(() => {
  ({
    env: __$.BO
  } = __$.Cy1);
  if (__$.TE("no-color") || __$.TE("no-colors") || __$.TE("color=false") || __$.TE("color=never")) __$.CrA = 0;else if (__$.TE("color") || __$.TE("colors") || __$.TE("color=true") || __$.TE("color=always")) __$.CrA = 1;
  __$.rtK = {
    stdout: __$.zt6({
      isTTY: __$.Yt6.isatty(1)
    }),
    stderr: __$.zt6({
      isTTY: __$.Yt6.isatty(2)
    })
  }, __$.wt6 = __$.rtK;
});

// Register to shared state
__$.Ht6 = Ht6;
