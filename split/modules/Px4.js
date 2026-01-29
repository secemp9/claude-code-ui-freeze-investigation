// Module: Px4
// Dependencies: Dx4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Px4 = v((gjw, Mx4) => {
  var Mk9 = __$.Dx4(),
    Pk9 = Array.prototype.concat,
    Vk9 = Array.prototype.slice,
    jx4 = Mx4.exports = function (K) {
      var q = [];
      for (var Y = 0, z = K.length; Y < z; Y++) {
        var w = K[Y];
        if (Mk9(w)) q = Pk9.call(q, Vk9.call(w));else q.push(w);
      }
      return q;
    };
  jx4.wrap = function (A) {
    return function () {
      return A(jx4(arguments));
    };
  };
});

// Register to shared state
__$.Px4 = Px4;
