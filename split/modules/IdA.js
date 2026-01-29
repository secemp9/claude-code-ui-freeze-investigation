// Module: IdA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IdA = v(lU2 => {
  function QjK(A) {
    if (typeof A === "number") A = A.toString();
    if (typeof A !== "string") throw Error("Color should be defined as hex string");
    let K = A.slice().replace("#", "").split("");
    if (K.length < 3 || K.length === 5 || K.length > 8) throw Error("Invalid hex color: " + A);
    if (K.length === 3 || K.length === 4) K = Array.prototype.concat.apply([], K.map(function (Y) {
      return [Y, Y];
    }));
    if (K.length === 6) K.push("F", "F");
    let q = parseInt(K.join(""), 16);
    return {
      r: q >> 24 & 255,
      g: q >> 16 & 255,
      b: q >> 8 & 255,
      a: q & 255,
      hex: "#" + K.slice(0, 6).join("")
    };
  }
  lU2.getOptions = function (K) {
    if (!K) K = {};
    if (!K.color) K.color = {};
    let q = typeof K.margin > "u" || K.margin === null || K.margin < 0 ? 4 : K.margin,
      Y = K.width && K.width >= 21 ? K.width : void 0,
      z = K.scale || 4;
    return {
      width: Y,
      scale: Y ? 4 : z,
      margin: q,
      color: {
        dark: QjK(K.color.dark || "#000000ff"),
        light: QjK(K.color.light || "#ffffffff")
      },
      type: K.type,
      rendererOpts: K.rendererOpts || {}
    };
  };
  lU2.getScale = function (K, q) {
    return q.width && q.width >= K + q.margin * 2 ? q.width / (K + q.margin * 2) : q.scale;
  };
  lU2.getImageWidth = function (K, q) {
    let Y = lU2.getScale(K, q);
    return Math.floor((K + q.margin * 2) * Y);
  };
  lU2.qrToImageData = function (K, q, Y) {
    let z = q.modules.size,
      w = q.modules.data,
      H = lU2.getScale(z, Y),
      J = Math.floor((z + Y.margin * 2) * H),
      O = Y.margin * H,
      X = [Y.color.light, Y.color.dark];
    for (let $ = 0; $ < J; $++) for (let _ = 0; _ < J; _++) {
      let G = ($ * J + _) * 4,
        Z = Y.color.light;
      if ($ >= O && _ >= O && $ < J - O && _ < J - O) {
        let W = Math.floor(($ - O) / H),
          D = Math.floor((_ - O) / H);
        Z = X[w[W * z + D] ? 1 : 0];
      }
      K[G++] = Z.r, K[G++] = Z.g, K[G++] = Z.b, K[G] = Z.a;
    }
  };
});

// Register to shared state
__$.IdA = IdA;
