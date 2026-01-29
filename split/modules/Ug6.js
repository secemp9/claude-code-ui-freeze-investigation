// Module: Ug6
// Dependencies: Fg6, Qg6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ug6 = v((xFJ, tDK) => {
  var xQ2 = __$.Fg6(),
    uQ2 = __$.Qg6();
  function sDK(A, K, q) {
    let Y = A * K;
    if (q !== 8) Y = Math.ceil(Y / (8 / q));
    return Y;
  }
  var OVA = tDK.exports = function (A, K) {
    let {
      width: q,
      height: Y,
      interlace: z,
      bpp: w,
      depth: H
    } = A;
    if (this.read = K.read, this.write = K.write, this.complete = K.complete, this._imageIndex = 0, this._images = [], z) {
      let J = xQ2.getImagePasses(q, Y);
      for (let O = 0; O < J.length; O++) this._images.push({
        byteWidth: sDK(J[O].width, w, H),
        height: J[O].height,
        lineIndex: 0
      });
    } else this._images.push({
      byteWidth: sDK(q, w, H),
      height: Y,
      lineIndex: 0
    });
    if (H === 8) this._xComparison = w;else if (H === 16) this._xComparison = w * 2;else this._xComparison = 1;
  };
  OVA.prototype.start = function () {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
  };
  OVA.prototype._unFilterType1 = function (A, K, q) {
    let Y = this._xComparison,
      z = Y - 1;
    for (let w = 0; w < q; w++) {
      let H = A[1 + w],
        J = w > z ? K[w - Y] : 0;
      K[w] = H + J;
    }
  };
  OVA.prototype._unFilterType2 = function (A, K, q) {
    let Y = this._lastLine;
    for (let z = 0; z < q; z++) {
      let w = A[1 + z],
        H = Y ? Y[z] : 0;
      K[z] = w + H;
    }
  };
  OVA.prototype._unFilterType3 = function (A, K, q) {
    let Y = this._xComparison,
      z = Y - 1,
      w = this._lastLine;
    for (let H = 0; H < q; H++) {
      let J = A[1 + H],
        O = w ? w[H] : 0,
        X = H > z ? K[H - Y] : 0,
        $ = Math.floor((X + O) / 2);
      K[H] = J + $;
    }
  };
  OVA.prototype._unFilterType4 = function (A, K, q) {
    let Y = this._xComparison,
      z = Y - 1,
      w = this._lastLine;
    for (let H = 0; H < q; H++) {
      let J = A[1 + H],
        O = w ? w[H] : 0,
        X = H > z ? K[H - Y] : 0,
        $ = H > z && w ? w[H - Y] : 0,
        _ = uQ2(X, O, $);
      K[H] = J + _;
    }
  };
  OVA.prototype._reverseFilterLine = function (A) {
    let K = A[0],
      q,
      Y = this._images[this._imageIndex],
      z = Y.byteWidth;
    if (K === 0) q = A.slice(1, z + 1);else switch (q = Buffer.alloc(z), K) {
      case 1:
        this._unFilterType1(A, q, z);
        break;
      case 2:
        this._unFilterType2(A, q, z);
        break;
      case 3:
        this._unFilterType3(A, q, z);
        break;
      case 4:
        this._unFilterType4(A, q, z);
        break;
      default:
        throw Error("Unrecognised filter type - " + K);
    }
    if (this.write(q), Y.lineIndex++, Y.lineIndex >= Y.height) this._lastLine = null, this._imageIndex++, Y = this._images[this._imageIndex];else this._lastLine = q;
    if (Y) this.read(Y.byteWidth + 1, this._reverseFilterLine.bind(this));else this._lastLine = null, this.complete();
  };
});

// Register to shared state
__$.Ug6 = Ug6;
