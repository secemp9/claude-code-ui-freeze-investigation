// Module: dx4
// Dependencies: mY1, ox

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dx4 = v((njw, px4) => {
  var nk9 = __$.mY1(),
    v6 = __$.ox(),
    Ux4 = {
      integer: "integer",
      float: "float",
      approximate: "approximate"
    };
  function rk9(A, K) {
    if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle) this.options.debuglog("ignoring previous rotate options");
    if (!v6.defined(A)) this.options.useExifOrientation = !0;else if (v6.integer(A) && !(A % 90)) this.options.angle = A;else if (v6.number(A)) {
      if (this.options.rotationAngle = A, v6.object(K) && K.background) {
        let q = nk9(K.background);
        this.options.rotationBackground = [q.red(), q.green(), q.blue(), Math.round(q.alpha() * 255)];
      }
    } else throw v6.invalidParameterError("angle", "numeric", A);
    return this;
  }
  function ok9(A) {
    return this.options.flip = v6.bool(A) ? A : !0, this;
  }
  function ak9(A) {
    return this.options.flop = v6.bool(A) ? A : !0, this;
  }
  function sk9(A, K) {
    let q = [].concat(...A);
    if (q.length === 4 && q.every(v6.number)) this.options.affineMatrix = q;else throw v6.invalidParameterError("matrix", "1x4 or 2x2 array", A);
    if (v6.defined(K)) if (v6.object(K)) {
      if (this._setBackgroundColourOption("affineBackground", K.background), v6.defined(K.idx)) if (v6.number(K.idx)) this.options.affineIdx = K.idx;else throw v6.invalidParameterError("options.idx", "number", K.idx);
      if (v6.defined(K.idy)) if (v6.number(K.idy)) this.options.affineIdy = K.idy;else throw v6.invalidParameterError("options.idy", "number", K.idy);
      if (v6.defined(K.odx)) if (v6.number(K.odx)) this.options.affineOdx = K.odx;else throw v6.invalidParameterError("options.odx", "number", K.odx);
      if (v6.defined(K.ody)) if (v6.number(K.ody)) this.options.affineOdy = K.ody;else throw v6.invalidParameterError("options.ody", "number", K.ody);
      if (v6.defined(K.interpolator)) if (v6.inArray(K.interpolator, Object.values(this.constructor.interpolators))) this.options.affineInterpolator = K.interpolator;else throw v6.invalidParameterError("options.interpolator", "valid interpolator name", K.interpolator);
    } else throw v6.invalidParameterError("options", "object", K);
    return this;
  }
  function tk9(A, K, q) {
    if (!v6.defined(A)) this.options.sharpenSigma = -1;else if (v6.bool(A)) this.options.sharpenSigma = A ? -1 : 0;else if (v6.number(A) && v6.inRange(A, 0.01, 1e4)) {
      if (this.options.sharpenSigma = A, v6.defined(K)) if (v6.number(K) && v6.inRange(K, 0, 1e4)) this.options.sharpenM1 = K;else throw v6.invalidParameterError("flat", "number between 0 and 10000", K);
      if (v6.defined(q)) if (v6.number(q) && v6.inRange(q, 0, 1e4)) this.options.sharpenM2 = q;else throw v6.invalidParameterError("jagged", "number between 0 and 10000", q);
    } else if (v6.plainObject(A)) {
      if (v6.number(A.sigma) && v6.inRange(A.sigma, 0.000001, 10)) this.options.sharpenSigma = A.sigma;else throw v6.invalidParameterError("options.sigma", "number between 0.000001 and 10", A.sigma);
      if (v6.defined(A.m1)) if (v6.number(A.m1) && v6.inRange(A.m1, 0, 1e6)) this.options.sharpenM1 = A.m1;else throw v6.invalidParameterError("options.m1", "number between 0 and 1000000", A.m1);
      if (v6.defined(A.m2)) if (v6.number(A.m2) && v6.inRange(A.m2, 0, 1e6)) this.options.sharpenM2 = A.m2;else throw v6.invalidParameterError("options.m2", "number between 0 and 1000000", A.m2);
      if (v6.defined(A.x1)) if (v6.number(A.x1) && v6.inRange(A.x1, 0, 1e6)) this.options.sharpenX1 = A.x1;else throw v6.invalidParameterError("options.x1", "number between 0 and 1000000", A.x1);
      if (v6.defined(A.y2)) if (v6.number(A.y2) && v6.inRange(A.y2, 0, 1e6)) this.options.sharpenY2 = A.y2;else throw v6.invalidParameterError("options.y2", "number between 0 and 1000000", A.y2);
      if (v6.defined(A.y3)) if (v6.number(A.y3) && v6.inRange(A.y3, 0, 1e6)) this.options.sharpenY3 = A.y3;else throw v6.invalidParameterError("options.y3", "number between 0 and 1000000", A.y3);
    } else throw v6.invalidParameterError("sigma", "number between 0.01 and 10000", A);
    return this;
  }
  function ek9(A) {
    if (!v6.defined(A)) this.options.medianSize = 3;else if (v6.integer(A) && v6.inRange(A, 1, 1000)) this.options.medianSize = A;else throw v6.invalidParameterError("size", "integer between 1 and 1000", A);
    return this;
  }
  function AC9(A) {
    let K;
    if (v6.number(A)) K = A;else if (v6.plainObject(A)) {
      if (!v6.number(A.sigma)) throw v6.invalidParameterError("options.sigma", "number between 0.3 and 1000", K);
      if (K = A.sigma, "precision" in A) if (v6.string(Ux4[A.precision])) this.options.precision = Ux4[A.precision];else throw v6.invalidParameterError("precision", "one of: integer, float, approximate", A.precision);
      if ("minAmplitude" in A) if (v6.number(A.minAmplitude) && v6.inRange(A.minAmplitude, 0.001, 1)) this.options.minAmpl = A.minAmplitude;else throw v6.invalidParameterError("minAmplitude", "number between 0.001 and 1", A.minAmplitude);
    }
    if (!v6.defined(A)) this.options.blurSigma = -1;else if (v6.bool(A)) this.options.blurSigma = A ? -1 : 0;else if (v6.number(K) && v6.inRange(K, 0.3, 1000)) this.options.blurSigma = K;else throw v6.invalidParameterError("sigma", "number between 0.3 and 1000", K);
    return this;
  }
  function KC9(A) {
    if (this.options.flatten = v6.bool(A) ? A : !0, v6.object(A)) this._setBackgroundColourOption("flattenBackground", A.background);
    return this;
  }
  function qC9() {
    return this.options.unflatten = !0, this;
  }
  function YC9(A, K) {
    if (!v6.defined(A)) this.options.gamma = 2.2;else if (v6.number(A) && v6.inRange(A, 1, 3)) this.options.gamma = A;else throw v6.invalidParameterError("gamma", "number between 1.0 and 3.0", A);
    if (!v6.defined(K)) this.options.gammaOut = this.options.gamma;else if (v6.number(K) && v6.inRange(K, 1, 3)) this.options.gammaOut = K;else throw v6.invalidParameterError("gammaOut", "number between 1.0 and 3.0", K);
    return this;
  }
  function zC9(A) {
    if (this.options.negate = v6.bool(A) ? A : !0, v6.plainObject(A) && "alpha" in A) if (!v6.bool(A.alpha)) throw v6.invalidParameterError("alpha", "should be boolean value", A.alpha);else this.options.negateAlpha = A.alpha;
    return this;
  }
  function wC9(A) {
    if (v6.plainObject(A)) {
      if (v6.defined(A.lower)) if (v6.number(A.lower) && v6.inRange(A.lower, 0, 99)) this.options.normaliseLower = A.lower;else throw v6.invalidParameterError("lower", "number between 0 and 99", A.lower);
      if (v6.defined(A.upper)) if (v6.number(A.upper) && v6.inRange(A.upper, 1, 100)) this.options.normaliseUpper = A.upper;else throw v6.invalidParameterError("upper", "number between 1 and 100", A.upper);
    }
    if (this.options.normaliseLower >= this.options.normaliseUpper) throw v6.invalidParameterError("range", "lower to be less than upper", `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`);
    return this.options.normalise = !0, this;
  }
  function HC9(A) {
    return this.normalise(A);
  }
  function JC9(A) {
    if (v6.plainObject(A)) {
      if (v6.integer(A.width) && A.width > 0) this.options.claheWidth = A.width;else throw v6.invalidParameterError("width", "integer greater than zero", A.width);
      if (v6.integer(A.height) && A.height > 0) this.options.claheHeight = A.height;else throw v6.invalidParameterError("height", "integer greater than zero", A.height);
      if (v6.defined(A.maxSlope)) if (v6.integer(A.maxSlope) && v6.inRange(A.maxSlope, 0, 100)) this.options.claheMaxSlope = A.maxSlope;else throw v6.invalidParameterError("maxSlope", "integer between 0 and 100", A.maxSlope);
    } else throw v6.invalidParameterError("options", "plain object", A);
    return this;
  }
  function OC9(A) {
    if (!v6.object(A) || !Array.isArray(A.kernel) || !v6.integer(A.width) || !v6.integer(A.height) || !v6.inRange(A.width, 3, 1001) || !v6.inRange(A.height, 3, 1001) || A.height * A.width !== A.kernel.length) throw Error("Invalid convolution kernel");
    if (!v6.integer(A.scale)) A.scale = A.kernel.reduce(function (K, q) {
      return K + q;
    }, 0);
    if (A.scale < 1) A.scale = 1;
    if (!v6.integer(A.offset)) A.offset = 0;
    return this.options.convKernel = A, this;
  }
  function XC9(A, K) {
    if (!v6.defined(A)) this.options.threshold = 128;else if (v6.bool(A)) this.options.threshold = A ? 128 : 0;else if (v6.integer(A) && v6.inRange(A, 0, 255)) this.options.threshold = A;else throw v6.invalidParameterError("threshold", "integer between 0 and 255", A);
    if (!v6.object(K) || K.greyscale === !0 || K.grayscale === !0) this.options.thresholdGrayscale = !0;else this.options.thresholdGrayscale = !1;
    return this;
  }
  function $C9(A, K, q) {
    if (this.options.boolean = this._createInputDescriptor(A, q), v6.string(K) && v6.inArray(K, ["and", "or", "eor"])) this.options.booleanOp = K;else throw v6.invalidParameterError("operator", "one of: and, or, eor", K);
    return this;
  }
  function _C9(A, K) {
    if (!v6.defined(A) && v6.number(K)) A = 1;else if (v6.number(A) && !v6.defined(K)) K = 0;
    if (!v6.defined(A)) this.options.linearA = [];else if (v6.number(A)) this.options.linearA = [A];else if (Array.isArray(A) && A.length && A.every(v6.number)) this.options.linearA = A;else throw v6.invalidParameterError("a", "number or array of numbers", A);
    if (!v6.defined(K)) this.options.linearB = [];else if (v6.number(K)) this.options.linearB = [K];else if (Array.isArray(K) && K.length && K.every(v6.number)) this.options.linearB = K;else throw v6.invalidParameterError("b", "number or array of numbers", K);
    if (this.options.linearA.length !== this.options.linearB.length) throw Error("Expected a and b to be arrays of the same length");
    return this;
  }
  function GC9(A) {
    if (!Array.isArray(A)) throw v6.invalidParameterError("inputMatrix", "array", A);
    if (A.length !== 3 && A.length !== 4) throw v6.invalidParameterError("inputMatrix", "3x3 or 4x4 array", A.length);
    let K = A.flat().map(Number);
    if (K.length !== 9 && K.length !== 16) throw v6.invalidParameterError("inputMatrix", "cardinality of 9 or 16", K.length);
    return this.options.recombMatrix = K, this;
  }
  function ZC9(A) {
    if (!v6.plainObject(A)) throw v6.invalidParameterError("options", "plain object", A);
    if ("brightness" in A) if (v6.number(A.brightness) && A.brightness >= 0) this.options.brightness = A.brightness;else throw v6.invalidParameterError("brightness", "number above zero", A.brightness);
    if ("saturation" in A) if (v6.number(A.saturation) && A.saturation >= 0) this.options.saturation = A.saturation;else throw v6.invalidParameterError("saturation", "number above zero", A.saturation);
    if ("hue" in A) if (v6.integer(A.hue)) this.options.hue = A.hue % 360;else throw v6.invalidParameterError("hue", "number", A.hue);
    if ("lightness" in A) if (v6.number(A.lightness)) this.options.lightness = A.lightness;else throw v6.invalidParameterError("lightness", "number", A.lightness);
    return this;
  }
  px4.exports = function (A) {
    Object.assign(A.prototype, {
      rotate: rk9,
      flip: ok9,
      flop: ak9,
      affine: sk9,
      sharpen: tk9,
      median: ek9,
      blur: AC9,
      flatten: KC9,
      unflatten: qC9,
      gamma: YC9,
      negate: zC9,
      normalise: wC9,
      normalize: HC9,
      clahe: JC9,
      convolve: OC9,
      threshold: XC9,
      boolean: $C9,
      linear: _C9,
      recomb: GC9,
      modulate: ZC9
    });
  };
});

// Register to shared state
__$.dx4 = dx4;
