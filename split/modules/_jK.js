// Module: _jK
// Dependencies: XVA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _jK = v((pFJ, $jK) => {
  var SL = __$.XVA();
  $jK.exports = function (A, K, q, Y) {
    let z = [SL.COLORTYPE_COLOR_ALPHA, SL.COLORTYPE_ALPHA].indexOf(Y.colorType) !== -1;
    if (Y.colorType === Y.inputColorType) {
      let W = function () {
        let D = new ArrayBuffer(2);
        return new DataView(D).setInt16(0, 256, !0), new Int16Array(D)[0] !== 256;
      }();
      if (Y.bitDepth === 8 || Y.bitDepth === 16 && W) return A;
    }
    let w = Y.bitDepth !== 16 ? A : new Uint16Array(A.buffer),
      H = 255,
      J = SL.COLORTYPE_TO_BPP_MAP[Y.inputColorType];
    if (J === 4 && !Y.inputHasAlpha) J = 3;
    let O = SL.COLORTYPE_TO_BPP_MAP[Y.colorType];
    if (Y.bitDepth === 16) H = 65535, O *= 2;
    let X = Buffer.alloc(K * q * O),
      $ = 0,
      _ = 0,
      G = Y.bgColor || {};
    if (G.red === void 0) G.red = H;
    if (G.green === void 0) G.green = H;
    if (G.blue === void 0) G.blue = H;
    function Z() {
      let W,
        D,
        j,
        M = H;
      switch (Y.inputColorType) {
        case SL.COLORTYPE_COLOR_ALPHA:
          M = w[$ + 3], W = w[$], D = w[$ + 1], j = w[$ + 2];
          break;
        case SL.COLORTYPE_COLOR:
          W = w[$], D = w[$ + 1], j = w[$ + 2];
          break;
        case SL.COLORTYPE_ALPHA:
          M = w[$ + 1], W = w[$], D = W, j = W;
          break;
        case SL.COLORTYPE_GRAYSCALE:
          W = w[$], D = W, j = W;
          break;
        default:
          throw Error("input color type:" + Y.inputColorType + " is not supported at present");
      }
      if (Y.inputHasAlpha) {
        if (!z) M /= H, W = Math.min(Math.max(Math.round((1 - M) * G.red + M * W), 0), H), D = Math.min(Math.max(Math.round((1 - M) * G.green + M * D), 0), H), j = Math.min(Math.max(Math.round((1 - M) * G.blue + M * j), 0), H);
      }
      return {
        red: W,
        green: D,
        blue: j,
        alpha: M
      };
    }
    for (let W = 0; W < q; W++) for (let D = 0; D < K; D++) {
      let j = Z(w, $);
      switch (Y.colorType) {
        case SL.COLORTYPE_COLOR_ALPHA:
        case SL.COLORTYPE_COLOR:
          if (Y.bitDepth === 8) {
            if (X[_] = j.red, X[_ + 1] = j.green, X[_ + 2] = j.blue, z) X[_ + 3] = j.alpha;
          } else if (X.writeUInt16BE(j.red, _), X.writeUInt16BE(j.green, _ + 2), X.writeUInt16BE(j.blue, _ + 4), z) X.writeUInt16BE(j.alpha, _ + 6);
          break;
        case SL.COLORTYPE_ALPHA:
        case SL.COLORTYPE_GRAYSCALE:
          {
            let M = (j.red + j.green + j.blue) / 3;
            if (Y.bitDepth === 8) {
              if (X[_] = M, z) X[_ + 1] = j.alpha;
            } else if (X.writeUInt16BE(M, _), z) X.writeUInt16BE(j.alpha, _ + 2);
            break;
          }
        default:
          throw Error("unrecognised color Type " + Y.colorType);
      }
      $ += J, _ += O;
    }
    return X;
  };
});

// Register to shared state
__$._jK = _jK;
