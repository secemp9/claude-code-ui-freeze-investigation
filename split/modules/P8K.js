// Module: P8K
// Dependencies: Vy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var P8K = v(j8K => {
  Object.defineProperty(j8K, "__esModule", {
    value: !0
  });
  j8K.createMessageId = void 0;
  var fW2 = __$.Vy6(),
    NW2 = () => {
      return `node-next-${Date.now()}-${(0, fW2.uuid)()}`;
    };
  j8K.createMessageId = NW2;
});

// Register to shared state
__$.P8K = P8K;
