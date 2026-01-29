// Module: Fg6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fg6 = v(SQ2 => {
  var Ie = [{
    x: [0],
    y: [0]
  }, {
    x: [4],
    y: [0]
  }, {
    x: [0, 4],
    y: [4]
  }, {
    x: [2, 6],
    y: [0, 4]
  }, {
    x: [0, 2, 4, 6],
    y: [2, 6]
  }, {
    x: [1, 3, 5, 7],
    y: [0, 2, 4, 6]
  }, {
    x: [0, 1, 2, 3, 4, 5, 6, 7],
    y: [1, 3, 5, 7]
  }];
  SQ2.getImagePasses = function (A, K) {
    let q = [],
      Y = A % 8,
      z = K % 8,
      w = (A - Y) / 8,
      H = (K - z) / 8;
    for (let J = 0; J < Ie.length; J++) {
      let O = Ie[J],
        X = w * O.x.length,
        $ = H * O.y.length;
      for (let _ = 0; _ < O.x.length; _++) if (O.x[_] < Y) X++;else break;
      for (let _ = 0; _ < O.y.length; _++) if (O.y[_] < z) $++;else break;
      if (X > 0 && $ > 0) q.push({
        width: X,
        height: $,
        index: J
      });
    }
    return q;
  };
  SQ2.getInterlaceIterator = function (A) {
    return function (K, q, Y) {
      let z = K % Ie[Y].x.length,
        w = (K - z) / Ie[Y].x.length * 8 + Ie[Y].x[z],
        H = q % Ie[Y].y.length,
        J = (q - H) / Ie[Y].y.length * 8 + Ie[Y].y[H];
      return w * 4 + J * A * 4;
    };
  };
});

// Register to shared state
__$.Fg6 = Fg6;
