// Module: oY4
// Dependencies: GK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oY4 = v((r6w, rY4) => {
  var id3 = __$.GK1();
  rY4.exports = A => {
    let K = A?.maxRedirections;
    return q => {
      return function (z, w) {
        let {
          maxRedirections: H = K,
          ...J
        } = z;
        if (!H) return q(z, w);
        let O = new id3(q, H, z, w);
        return q(J, O);
      };
    };
  };
});

// Register to shared state
__$.oY4 = oY4;
