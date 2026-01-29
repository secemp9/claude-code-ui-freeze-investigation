// Module: KMK
// Dependencies: Zg6, mg6, ejK, KF6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KMK = v(hp2 => {
  var Ip2 = __$.Zg6(),
    YF6 = __$.mg6(),
    AMK = __$.ejK(),
    Sp2 = __$.KF6();
  function zF6(A, K, q, Y, z) {
    let w = [].slice.call(arguments, 1),
      H = w.length,
      J = typeof w[H - 1] === "function";
    if (!J && !Ip2()) throw Error("Callback required as last argument");
    if (J) {
      if (H < 2) throw Error("Too few arguments provided");
      if (H === 2) z = q, q = K, K = Y = void 0;else if (H === 3) if (K.getContext && typeof z > "u") z = Y, Y = void 0;else z = Y, Y = q, q = K, K = void 0;
    } else {
      if (H < 1) throw Error("Too few arguments provided");
      if (H === 1) q = K, K = Y = void 0;else if (H === 2 && !K.getContext) Y = q, q = K, K = void 0;
      return new Promise(function (O, X) {
        try {
          let $ = YF6.create(q, Y);
          O(A($, K, Y));
        } catch ($) {
          X($);
        }
      });
    }
    try {
      let O = YF6.create(q, Y);
      z(null, A(O, K, Y));
    } catch (O) {
      z(O);
    }
  }
  hp2.create = YF6.create;
  hp2.toCanvas = zF6.bind(null, AMK.render);
  hp2.toDataURL = zF6.bind(null, AMK.renderToDataURL);
  hp2.toString = zF6.bind(null, function (A, K, q) {
    return Sp2.render(A, q);
  });
});

// Register to shared state
__$.KMK = KMK;
