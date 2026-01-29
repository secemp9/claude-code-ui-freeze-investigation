// Module: ejK
// Dependencies: IdA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ejK = v(Rp2 => {
  var qF6 = __$.IdA();
  function Cp2(A, K, q) {
    if (A.clearRect(0, 0, K.width, K.height), !K.style) K.style = {};
    K.height = q, K.width = q, K.style.height = q + "px", K.style.width = q + "px";
  }
  function Lp2() {
    try {
      return document.createElement("canvas");
    } catch (A) {
      throw Error("You need to specify a canvas element");
    }
  }
  Rp2.render = function (K, q, Y) {
    let z = Y,
      w = q;
    if (typeof z > "u" && (!q || !q.getContext)) z = q, q = void 0;
    if (!q) w = Lp2();
    z = qF6.getOptions(z);
    let H = qF6.getImageWidth(K.modules.size, z),
      J = w.getContext("2d"),
      O = J.createImageData(H, H);
    return qF6.qrToImageData(O.data, K, z), Cp2(J, w, H), J.putImageData(O, 0, 0), w;
  };
  Rp2.renderToDataURL = function (K, q, Y) {
    let z = Y;
    if (typeof z > "u" && (!q || !q.getContext)) z = q, q = void 0;
    if (!z) z = {};
    let w = Rp2.render(K, q, z),
      H = z.type || "image/png",
      J = z.rendererOpts || {};
    return w.toDataURL(H, J.quality);
  };
});

// Register to shared state
__$.ejK = ejK;
