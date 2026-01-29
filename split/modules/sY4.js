// Module: sY4
// Dependencies: TK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sY4 = v((o6w, aY4) => {
  var nd3 = __$.TK1();
  aY4.exports = A => {
    return K => {
      return function (Y, z) {
        return K(Y, new nd3({
          ...Y,
          retryOptions: {
            ...A,
            ...Y.retryOptions
          }
        }, {
          handler: z,
          dispatch: K
        }));
      };
    };
  };
});

// Register to shared state
__$.sY4 = sY4;
