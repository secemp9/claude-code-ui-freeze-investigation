// Module: gh1
// Dependencies: VoA, kTA, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gh1 = v($98 => {
  Object.defineProperty($98, "__esModule", {
    value: !0
  });
  $98.publishReplay = void 0;
  var XHq = __$.VoA(),
    $Hq = __$.kTA(),
    X98 = __$.Hz();
  function _Hq(A, K, q, Y) {
    if (q && !X98.isFunction(q)) Y = q;
    var z = X98.isFunction(q) ? q : void 0;
    return function (w) {
      return $Hq.multicast(new XHq.ReplaySubject(A, K, Y), z)(w);
    };
  }
  $98.publishReplay = _Hq;
});

// Register to shared state
__$.gh1 = gh1;
