// Module: GV8
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GV8 = v(_V8 => {
  Object.defineProperty(_V8, "__esModule", {
    value: !0
  });
  var $V8 = __$.H8();
  function Apq(A, K) {
    let q = {
      sent_at: new Date().toISOString()
    };
    if (K) q.dsn = $V8.dsnToString(K);
    let Y = A.map(Kpq);
    return $V8.createEnvelope(q, Y);
  }
  function Kpq(A) {
    return [{
      type: "span"
    }, A];
  }
  _V8.createSpanEnvelope = Apq;
});

// Register to shared state
__$.GV8 = GV8;
