// Module: ZK1
// Dependencies: GK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZK1 = v((P6w, e54) => {
  var WQ3 = __$.GK1();
  function DQ3({
    maxRedirections: A
  }) {
    return K => {
      return function (Y, z) {
        let {
          maxRedirections: w = A
        } = Y;
        if (!w) return K(Y, z);
        let H = new WQ3(K, w, Y, z);
        return Y = {
          ...Y,
          maxRedirections: 0
        }, K(Y, H);
      };
    };
  }
  e54.exports = DQ3;
});

// Register to shared state
__$.ZK1 = ZK1;
