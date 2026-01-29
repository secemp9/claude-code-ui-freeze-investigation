// Module: yN8
// Dependencies: A6A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yN8 = v(RN8 => {
  Object.defineProperty(RN8, "__esModule", {
    value: !0
  });
  var Lnq = __$.A6A(),
    LN8 = 0,
    $m1 = 1 / 0,
    EtA = 0,
    Rnq = A => {
      A.forEach(K => {
        if (K.interactionId) $m1 = Math.min($m1, K.interactionId), EtA = Math.max(EtA, K.interactionId), LN8 = EtA ? (EtA - $m1) / 7 + 1 : 0;
      });
    },
    _m1,
    ynq = () => {
      return _m1 ? LN8 : performance.interactionCount || 0;
    },
    Inq = () => {
      if ("interactionCount" in performance || _m1) return;
      _m1 = Lnq.observe("event", Rnq, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
      });
    };
  RN8.getInteractionCount = ynq;
  RN8.initInteractionCountPolyfill = Inq;
});

// Register to shared state
__$.yN8 = yN8;
