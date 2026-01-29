// Module: U78
// Dependencies: ul, rzA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U78 = v(F78 => {
  Object.defineProperty(F78, "__esModule", {
    value: !0
  });
  F78.firstValueFrom = void 0;
  var Fqq = __$.ul(),
    Qqq = __$.rzA();
  function Uqq(A, K) {
    var q = typeof K === "object";
    return new Promise(function (Y, z) {
      var w = new Qqq.SafeSubscriber({
        next: function (H) {
          Y(H), w.unsubscribe();
        },
        error: z,
        complete: function () {
          if (q) Y(K.defaultValue);else z(new Fqq.EmptyError());
        }
      });
      A.subscribe(w);
    });
  }
  F78.firstValueFrom = Uqq;
});

// Register to shared state
__$.U78 = U78;
