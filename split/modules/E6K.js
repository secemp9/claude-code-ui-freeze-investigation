// Module: E6K
// Dependencies: N6K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var E6K = v(T6K => {
  Object.defineProperty(T6K, "__esModule", {
    value: !0
  });
  T6K.createTaskGroup = void 0;
  var uZ2 = __$.N6K(),
    BZ2 = function () {
      var A,
        K,
        q = 0;
      return {
        done: function () {
          return A;
        },
        run: function (Y) {
          var z = Y();
          if ((0, uZ2.isThenable)(z)) {
            if (++q === 1) A = new Promise(function (w) {
              return K = w;
            });
            z.finally(function () {
              return --q === 0 && K();
            });
          }
          return z;
        }
      };
    };
  T6K.createTaskGroup = BZ2;
});

// Register to shared state
__$.E6K = E6K;
