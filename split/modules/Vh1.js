// Module: Vh1
// Dependencies: ul, Ug, NwA, fwA, TwA, MZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vh1 = v(C38 => {
  Object.defineProperty(C38, "__esModule", {
    value: !0
  });
  C38.first = void 0;
  var dzq = __$.ul(),
    czq = __$.Ug(),
    lzq = __$.NwA(),
    izq = __$.fwA(),
    nzq = __$.TwA(),
    rzq = __$.MZ();
  function ozq(A, K) {
    var q = arguments.length >= 2;
    return function (Y) {
      return Y.pipe(A ? czq.filter(function (z, w) {
        return A(z, w, Y);
      }) : rzq.identity, lzq.take(1), q ? izq.defaultIfEmpty(K) : nzq.throwIfEmpty(function () {
        return new dzq.EmptyError();
      }));
    };
  }
  C38.first = ozq;
});

// Register to shared state
__$.Vh1 = Vh1;
