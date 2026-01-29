// Module: hW7
// Dependencies: WM6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hW7 = v((O3H, SW7) => {
  var pBA = __$.WM6();
  function XCY(A, K) {
    if (A = pBA.trimRight(A), A[A.length - 1] !== ";") A += ";";
    var q = A.length,
      Y = !1,
      z = 0,
      w = 0,
      H = "";
    function J() {
      if (!Y) {
        var $ = pBA.trim(A.slice(z, w)),
          _ = $.indexOf(":");
        if (_ !== -1) {
          var G = pBA.trim($.slice(0, _)),
            Z = pBA.trim($.slice(_ + 1));
          if (G) {
            var W = K(z, H.length, G, Z, $);
            if (W) H += W + "; ";
          }
        }
      }
      z = w + 1;
    }
    for (; w < q; w++) {
      var O = A[w];
      if (O === "/" && A[w + 1] === "*") {
        var X = A.indexOf("*/", w + 2);
        if (X === -1) break;
        w = X + 1, z = w + 1, Y = !1;
      } else if (O === "(") Y = !0;else if (O === ")") Y = !1;else if (O === ";") {
        if (Y) ;else J();
      } else if (O === `
`) J();
    }
    return pBA.trim(H);
  }
  SW7.exports = XCY;
});

// Register to shared state
__$.hW7 = hW7;
