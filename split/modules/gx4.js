// Module: gx4
// Dependencies: ox

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gx4 = v((ljw, mx4) => {
  var NK = __$.ox(),
    xx4 = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    },
    ux4 = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    },
    bx4 = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    },
    Bx4 = {
      entropy: 16,
      attention: 17
    },
    FY6 = {
      nearest: "nearest",
      linear: "linear",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3"
    },
    Qk9 = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    },
    Uk9 = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };
  function QY6(A) {
    return A.angle % 360 !== 0 || A.useExifOrientation === !0 || A.rotationAngle !== 0;
  }
  function gY1(A) {
    return A.width !== -1 || A.height !== -1;
  }
  function pk9(A, K, q) {
    if (gY1(this.options)) this.options.debuglog("ignoring previous resize options");
    if (this.options.widthPost !== -1) this.options.debuglog("operation order will be: extract, resize, extract");
    if (NK.defined(A)) {
      if (NK.object(A) && !NK.defined(q)) q = A;else if (NK.integer(A) && A > 0) this.options.width = A;else throw NK.invalidParameterError("width", "positive integer", A);
    } else this.options.width = -1;
    if (NK.defined(K)) {
      if (NK.integer(K) && K > 0) this.options.height = K;else throw NK.invalidParameterError("height", "positive integer", K);
    } else this.options.height = -1;
    if (NK.object(q)) {
      if (NK.defined(q.width)) if (NK.integer(q.width) && q.width > 0) this.options.width = q.width;else throw NK.invalidParameterError("width", "positive integer", q.width);
      if (NK.defined(q.height)) if (NK.integer(q.height) && q.height > 0) this.options.height = q.height;else throw NK.invalidParameterError("height", "positive integer", q.height);
      if (NK.defined(q.fit)) {
        let Y = Uk9[q.fit];
        if (NK.string(Y)) this.options.canvas = Y;else throw NK.invalidParameterError("fit", "valid fit", q.fit);
      }
      if (NK.defined(q.position)) {
        let Y = NK.integer(q.position) ? q.position : Bx4[q.position] || ux4[q.position] || xx4[q.position];
        if (NK.integer(Y) && (NK.inRange(Y, 0, 8) || NK.inRange(Y, 16, 17))) this.options.position = Y;else throw NK.invalidParameterError("position", "valid position/gravity/strategy", q.position);
      }
      if (this._setBackgroundColourOption("resizeBackground", q.background), NK.defined(q.kernel)) if (NK.string(FY6[q.kernel])) this.options.kernel = FY6[q.kernel];else throw NK.invalidParameterError("kernel", "valid kernel name", q.kernel);
      if (NK.defined(q.withoutEnlargement)) this._setBooleanOption("withoutEnlargement", q.withoutEnlargement);
      if (NK.defined(q.withoutReduction)) this._setBooleanOption("withoutReduction", q.withoutReduction);
      if (NK.defined(q.fastShrinkOnLoad)) this._setBooleanOption("fastShrinkOnLoad", q.fastShrinkOnLoad);
    }
    if (QY6(this.options) && gY1(this.options)) this.options.rotateBeforePreExtract = !0;
    return this;
  }
  function dk9(A) {
    if (NK.integer(A) && A > 0) this.options.extendTop = A, this.options.extendBottom = A, this.options.extendLeft = A, this.options.extendRight = A;else if (NK.object(A)) {
      if (NK.defined(A.top)) if (NK.integer(A.top) && A.top >= 0) this.options.extendTop = A.top;else throw NK.invalidParameterError("top", "positive integer", A.top);
      if (NK.defined(A.bottom)) if (NK.integer(A.bottom) && A.bottom >= 0) this.options.extendBottom = A.bottom;else throw NK.invalidParameterError("bottom", "positive integer", A.bottom);
      if (NK.defined(A.left)) if (NK.integer(A.left) && A.left >= 0) this.options.extendLeft = A.left;else throw NK.invalidParameterError("left", "positive integer", A.left);
      if (NK.defined(A.right)) if (NK.integer(A.right) && A.right >= 0) this.options.extendRight = A.right;else throw NK.invalidParameterError("right", "positive integer", A.right);
      if (this._setBackgroundColourOption("extendBackground", A.background), NK.defined(A.extendWith)) if (NK.string(bx4[A.extendWith])) this.options.extendWith = bx4[A.extendWith];else throw NK.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", A.extendWith);
    } else throw NK.invalidParameterError("extend", "integer or object", A);
    return this;
  }
  function ck9(A) {
    let K = gY1(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
    if (this.options[`width${K}`] !== -1) this.options.debuglog("ignoring previous extract options");
    if (["left", "top", "width", "height"].forEach(function (q) {
      let Y = A[q];
      if (NK.integer(Y) && Y >= 0) this.options[q + (q === "left" || q === "top" ? "Offset" : "") + K] = Y;else throw NK.invalidParameterError(q, "integer", Y);
    }, this), QY6(this.options) && !gY1(this.options)) {
      if (this.options.widthPre === -1 || this.options.widthPost === -1) this.options.rotateBeforePreExtract = !0;
    }
    return this;
  }
  function lk9(A) {
    if (this.options.trimThreshold = 10, NK.defined(A)) if (NK.object(A)) {
      if (NK.defined(A.background)) this._setBackgroundColourOption("trimBackground", A.background);
      if (NK.defined(A.threshold)) if (NK.number(A.threshold) && A.threshold >= 0) this.options.trimThreshold = A.threshold;else throw NK.invalidParameterError("threshold", "positive number", A.threshold);
      if (NK.defined(A.lineArt)) this._setBooleanOption("trimLineArt", A.lineArt);
    } else throw NK.invalidParameterError("trim", "object", A);
    if (QY6(this.options)) this.options.rotateBeforePreExtract = !0;
    return this;
  }
  mx4.exports = function (A) {
    Object.assign(A.prototype, {
      resize: pk9,
      extend: dk9,
      extract: ck9,
      trim: lk9
    }), A.gravity = xx4, A.strategy = Bx4, A.kernel = FY6, A.fit = Qk9, A.position = ux4;
  };
});

// Register to shared state
__$.gx4 = gx4;
