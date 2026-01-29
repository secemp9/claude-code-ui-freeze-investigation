// Module: M78
// Dependencies: CS1, voA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var M78 = v(D78 => {
  Object.defineProperty(D78, "__esModule", {
    value: !0
  });
  D78.scheduleReadableStreamLike = void 0;
  var Kqq = __$.CS1(),
    qqq = __$.voA();
  function Yqq(A, K) {
    return Kqq.scheduleAsyncIterable(qqq.readableStreamLikeToAsyncGenerator(A), K);
  }
  D78.scheduleReadableStreamLike = Yqq;
});

// Register to shared state
__$.M78 = M78;
