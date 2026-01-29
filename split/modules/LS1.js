// Module: LS1
// Dependencies: q78, w78, O78, kS1, CS1, MS1, jS1, ToA, NS1, PS1
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LS1 = v(P78 => {
  Object.defineProperty(P78, "__esModule", {
    value: !0
  });
  P78.scheduled = void 0;
  var zqq = __$.q78(),
    wqq = __$.w78(),
    Hqq = __$.O78(),
    Jqq = __$.kS1(),
    Oqq = __$.CS1(),
    Xqq = __$.MS1(),
    $qq = __$.jS1(),
    _qq = __$.ToA(),
    Gqq = __$.NS1(),
    Zqq = __$.PS1(),
    Wqq = __$.VS1(),
    Dqq = __$.voA(),
    jqq = __$.M78();
  function Mqq(A, K) {
    if (A != null) {
      if (Xqq.isInteropObservable(A)) return zqq.scheduleObservable(A, K);
      if (_qq.isArrayLike(A)) return Hqq.scheduleArray(A, K);
      if ($qq.isPromise(A)) return wqq.schedulePromise(A, K);
      if (Zqq.isAsyncIterable(A)) return Oqq.scheduleAsyncIterable(A, K);
      if (Gqq.isIterable(A)) return Jqq.scheduleIterable(A, K);
      if (Dqq.isReadableStreamLike(A)) return jqq.scheduleReadableStreamLike(A, K);
    }
    throw Wqq.createInvalidObservableTypeError(A);
  }
  P78.scheduled = Mqq;
});

// Register to shared state
__$.LS1 = LS1;
