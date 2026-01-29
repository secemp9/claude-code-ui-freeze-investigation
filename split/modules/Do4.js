// Module: Do4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Do4 = v((hTw, Wo4) => {
  function xH6(A) {
    var K = (A / 8 | 0) + (A % 8 === 0 ? 0 : 1);
    return K;
  }
  var Rs9 = {
    ES256: xH6(256),
    ES384: xH6(384),
    ES512: xH6(521)
  };
  function ys9(A) {
    var K = Rs9[A];
    if (K) return K;
    throw Error('Unknown algorithm "' + A + '"');
  }
  Wo4.exports = ys9;
});

// Register to shared state
__$.Do4 = Do4;
