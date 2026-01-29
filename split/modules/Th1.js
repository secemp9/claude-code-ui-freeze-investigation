// Module: Th1
// Dependencies: ul, Ug, UoA, TwA, fwA, MZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Th1 = v(b38 => {
  Object.defineProperty(b38, "__esModule", {
    value: !0
  });
  b38.last = void 0;
  var Xwq = __$.ul(),
    $wq = __$.Ug(),
    _wq = __$.UoA(),
    Gwq = __$.TwA(),
    Zwq = __$.fwA(),
    Wwq = __$.MZ();
  function Dwq(A, K) {
    var q = arguments.length >= 2;
    return function (Y) {
      return Y.pipe(A ? $wq.filter(function (z, w) {
        return A(z, w, Y);
      }) : Wwq.identity, _wq.takeLast(1), q ? Zwq.defaultIfEmpty(K) : Gwq.throwIfEmpty(function () {
        return new Xwq.EmptyError();
      }));
    };
  }
  b38.last = Dwq;
});

// Register to shared state
__$.Th1 = Th1;
