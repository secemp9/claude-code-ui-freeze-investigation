// Module: QV1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QV1 = v(kN2 => {
  kN2.isValidName = vN2;
  kN2.isValidQName = EN2;
  var MN2 = /^[_:A-Za-z][-.:\w]+$/,
    PN2 = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/,
    MUA = "_A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",
    PUA = "-._A-Za-z0-9·À-ÖØ-öø-˿̀-ͽͿ-῿‌‍‿⁀⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",
    K9A = "[" + MUA + "][" + PUA + "]*",
    Lh6 = MUA + ":",
    Rh6 = PUA + ":",
    VN2 = new RegExp("^[" + Lh6 + "][" + Rh6 + "]*$"),
    fN2 = new RegExp("^(" + K9A + "|" + K9A + ":" + K9A + ")$"),
    h3K = /[\uD800-\uDB7F\uDC00-\uDFFF]/,
    b3K = /[\uD800-\uDB7F\uDC00-\uDFFF]/g,
    x3K = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g;
  MUA += "\uD800-\uDB7F\uDC00-\uDFFF";
  PUA += "\uD800-\uDB7F\uDC00-\uDFFF";
  K9A = "[" + MUA + "][" + PUA + "]*";
  Lh6 = MUA + ":";
  Rh6 = PUA + ":";
  var NN2 = new RegExp("^[" + Lh6 + "][" + Rh6 + "]*$"),
    TN2 = new RegExp("^(" + K9A + "|" + K9A + ":" + K9A + ")$");
  function vN2(A) {
    if (MN2.test(A)) return !0;
    if (VN2.test(A)) return !0;
    if (!h3K.test(A)) return !1;
    if (!NN2.test(A)) return !1;
    var K = A.match(b3K),
      q = A.match(x3K);
    return q !== null && 2 * q.length === K.length;
  }
  function EN2(A) {
    if (PN2.test(A)) return !0;
    if (fN2.test(A)) return !0;
    if (!h3K.test(A)) return !1;
    if (!TN2.test(A)) return !1;
    var K = A.match(b3K),
      q = A.match(x3K);
    return q !== null && 2 * q.length === K.length;
  }
});

// Register to shared state
__$.QV1 = QV1;
