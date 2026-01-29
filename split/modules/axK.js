// Module: axK
// Dependencies: QxK, pxK, cxK, ixK, oxK, dd6, FxK, UxK, dxK, lxK
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var axK = k(() => {
  __$.QxK();
  __$.pxK();
  __$.cxK();
  __$.ixK();
  __$.oxK();
  __$.dd6 = {
    code: "en-US",
    formatDistance: __$.FxK,
    formatLong: __$.UxK,
    formatRelative: __$.dxK,
    localize: __$.lxK,
    match: __$.rxK,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
});

// Register to shared state
__$.axK = axK;
