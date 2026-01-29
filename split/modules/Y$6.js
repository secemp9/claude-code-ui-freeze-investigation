// Module: Y$6
// Dependencies: wJ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y$6 = v((Zmw, p87) => {
  var zKY = __$.wJ1();
  p87.exports = function (A, K) {
    K = K || {};
    var q = zKY.decode(A, K);
    if (!q) return null;
    var Y = q.payload;
    if (typeof Y === "string") try {
      var z = JSON.parse(Y);
      if (z !== null && typeof z === "object") Y = z;
    } catch (w) {}
    if (K.complete === !0) return {
      header: q.header,
      payload: Y,
      signature: q.signature
    };
    return Y;
  };
});

// Register to shared state
__$.Y$6 = Y$6;
