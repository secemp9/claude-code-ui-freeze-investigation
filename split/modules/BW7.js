// Module: BW7
// Dependencies: ZM6, hW7, WM6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BW7 = v(($3H, uW7) => {
  var u$1 = __$.ZM6(),
    $CY = __$.hW7(),
    X3H = __$.WM6();
  function bW7(A) {
    return A === void 0 || A === null;
  }
  function _CY(A) {
    var K = {};
    for (var q in A) K[q] = A[q];
    return K;
  }
  function xW7(A) {
    A = _CY(A || {}), A.whiteList = A.whiteList || u$1.whiteList, A.onAttr = A.onAttr || u$1.onAttr, A.onIgnoreAttr = A.onIgnoreAttr || u$1.onIgnoreAttr, A.safeAttrValue = A.safeAttrValue || u$1.safeAttrValue, this.options = A;
  }
  xW7.prototype.process = function (A) {
    if (A = A || "", A = A.toString(), !A) return "";
    var K = this,
      q = K.options,
      Y = q.whiteList,
      z = q.onAttr,
      w = q.onIgnoreAttr,
      H = q.safeAttrValue,
      J = $CY(A, function (O, X, $, _, G) {
        var Z = Y[$],
          W = !1;
        if (Z === !0) W = Z;else if (typeof Z === "function") W = Z(_);else if (Z instanceof RegExp) W = Z.test(_);
        if (W !== !0) W = !1;
        if (_ = H($, _), !_) return;
        var D = {
          position: X,
          sourcePosition: O,
          source: G,
          isWhite: W
        };
        if (W) {
          var j = z($, _, D);
          if (bW7(j)) return $ + ":" + _;else return j;
        } else {
          var j = w($, _, D);
          if (!bW7(j)) return j;
        }
      });
    return J;
  };
  uW7.exports = xW7;
});

// Register to shared state
__$.BW7 = BW7;
