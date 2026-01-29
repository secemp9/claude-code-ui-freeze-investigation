// Module: hx4
// Dependencies: mY1, ox, MSA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hx4 = v((cjw, Sx4) => {
  var hk9 = __$.mY1(),
    n6 = __$.ox(),
    rr = __$.MSA(),
    bk9 = {
      left: "low",
      center: "centre",
      centre: "centre",
      right: "high"
    };
  function Ix4(A) {
    let {
      raw: K,
      density: q,
      limitInputPixels: Y,
      ignoreIcc: z,
      unlimited: w,
      sequentialRead: H,
      failOn: J,
      failOnError: O,
      animated: X,
      page: $,
      pages: _,
      subifd: G
    } = A;
    return [K, q, Y, z, w, H, J, O, X, $, _, G].some(n6.defined) ? {
      raw: K,
      density: q,
      limitInputPixels: Y,
      ignoreIcc: z,
      unlimited: w,
      sequentialRead: H,
      failOn: J,
      failOnError: O,
      animated: X,
      page: $,
      pages: _,
      subifd: G
    } : void 0;
  }
  function xk9(A, K, q) {
    let Y = {
      failOn: "warning",
      limitInputPixels: Math.pow(16383, 2),
      ignoreIcc: !1,
      unlimited: !1,
      sequentialRead: !0
    };
    if (n6.string(A)) Y.file = A;else if (n6.buffer(A)) {
      if (A.length === 0) throw Error("Input Buffer is empty");
      Y.buffer = A;
    } else if (n6.arrayBuffer(A)) {
      if (A.byteLength === 0) throw Error("Input bit Array is empty");
      Y.buffer = Buffer.from(A, 0, A.byteLength);
    } else if (n6.typedArray(A)) {
      if (A.length === 0) throw Error("Input Bit Array is empty");
      Y.buffer = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
    } else if (n6.plainObject(A) && !n6.defined(K)) {
      if (K = A, Ix4(K)) Y.buffer = [];
    } else if (!n6.defined(A) && !n6.defined(K) && n6.object(q) && q.allowStream) Y.buffer = [];else throw Error(`Unsupported input '${A}' of type ${typeof A}${n6.defined(K) ? ` when also providing options of type ${typeof K}` : ""}`);
    if (n6.object(K)) {
      if (n6.defined(K.failOnError)) if (n6.bool(K.failOnError)) Y.failOn = K.failOnError ? "warning" : "none";else throw n6.invalidParameterError("failOnError", "boolean", K.failOnError);
      if (n6.defined(K.failOn)) if (n6.string(K.failOn) && n6.inArray(K.failOn, ["none", "truncated", "error", "warning"])) Y.failOn = K.failOn;else throw n6.invalidParameterError("failOn", "one of: none, truncated, error, warning", K.failOn);
      if (n6.defined(K.density)) if (n6.inRange(K.density, 1, 1e5)) Y.density = K.density;else throw n6.invalidParameterError("density", "number between 1 and 100000", K.density);
      if (n6.defined(K.ignoreIcc)) if (n6.bool(K.ignoreIcc)) Y.ignoreIcc = K.ignoreIcc;else throw n6.invalidParameterError("ignoreIcc", "boolean", K.ignoreIcc);
      if (n6.defined(K.limitInputPixels)) if (n6.bool(K.limitInputPixels)) Y.limitInputPixels = K.limitInputPixels ? Math.pow(16383, 2) : 0;else if (n6.integer(K.limitInputPixels) && n6.inRange(K.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) Y.limitInputPixels = K.limitInputPixels;else throw n6.invalidParameterError("limitInputPixels", "positive integer", K.limitInputPixels);
      if (n6.defined(K.unlimited)) if (n6.bool(K.unlimited)) Y.unlimited = K.unlimited;else throw n6.invalidParameterError("unlimited", "boolean", K.unlimited);
      if (n6.defined(K.sequentialRead)) if (n6.bool(K.sequentialRead)) Y.sequentialRead = K.sequentialRead;else throw n6.invalidParameterError("sequentialRead", "boolean", K.sequentialRead);
      if (n6.defined(K.raw)) if (n6.object(K.raw) && n6.integer(K.raw.width) && K.raw.width > 0 && n6.integer(K.raw.height) && K.raw.height > 0 && n6.integer(K.raw.channels) && n6.inRange(K.raw.channels, 1, 4)) switch (Y.rawWidth = K.raw.width, Y.rawHeight = K.raw.height, Y.rawChannels = K.raw.channels, Y.rawPremultiplied = !!K.raw.premultiplied, A.constructor) {
        case Uint8Array:
        case Uint8ClampedArray:
          Y.rawDepth = "uchar";
          break;
        case Int8Array:
          Y.rawDepth = "char";
          break;
        case Uint16Array:
          Y.rawDepth = "ushort";
          break;
        case Int16Array:
          Y.rawDepth = "short";
          break;
        case Uint32Array:
          Y.rawDepth = "uint";
          break;
        case Int32Array:
          Y.rawDepth = "int";
          break;
        case Float32Array:
          Y.rawDepth = "float";
          break;
        case Float64Array:
          Y.rawDepth = "double";
          break;
        default:
          Y.rawDepth = "uchar";
          break;
      } else throw Error("Expected width, height and channels for raw pixel input");
      if (n6.defined(K.animated)) if (n6.bool(K.animated)) Y.pages = K.animated ? -1 : 1;else throw n6.invalidParameterError("animated", "boolean", K.animated);
      if (n6.defined(K.pages)) if (n6.integer(K.pages) && n6.inRange(K.pages, -1, 1e5)) Y.pages = K.pages;else throw n6.invalidParameterError("pages", "integer between -1 and 100000", K.pages);
      if (n6.defined(K.page)) if (n6.integer(K.page) && n6.inRange(K.page, 0, 1e5)) Y.page = K.page;else throw n6.invalidParameterError("page", "integer between 0 and 100000", K.page);
      if (n6.defined(K.level)) if (n6.integer(K.level) && n6.inRange(K.level, 0, 256)) Y.level = K.level;else throw n6.invalidParameterError("level", "integer between 0 and 256", K.level);
      if (n6.defined(K.subifd)) if (n6.integer(K.subifd) && n6.inRange(K.subifd, -1, 1e5)) Y.subifd = K.subifd;else throw n6.invalidParameterError("subifd", "integer between -1 and 100000", K.subifd);
      if (n6.defined(K.create)) if (n6.object(K.create) && n6.integer(K.create.width) && K.create.width > 0 && n6.integer(K.create.height) && K.create.height > 0 && n6.integer(K.create.channels)) {
        if (Y.createWidth = K.create.width, Y.createHeight = K.create.height, Y.createChannels = K.create.channels, n6.defined(K.create.noise)) {
          if (!n6.object(K.create.noise)) throw Error("Expected noise to be an object");
          if (!n6.inArray(K.create.noise.type, ["gaussian"])) throw Error("Only gaussian noise is supported at the moment");
          if (!n6.inRange(K.create.channels, 1, 4)) throw n6.invalidParameterError("create.channels", "number between 1 and 4", K.create.channels);
          if (Y.createNoiseType = K.create.noise.type, n6.number(K.create.noise.mean) && n6.inRange(K.create.noise.mean, 0, 1e4)) Y.createNoiseMean = K.create.noise.mean;else throw n6.invalidParameterError("create.noise.mean", "number between 0 and 10000", K.create.noise.mean);
          if (n6.number(K.create.noise.sigma) && n6.inRange(K.create.noise.sigma, 0, 1e4)) Y.createNoiseSigma = K.create.noise.sigma;else throw n6.invalidParameterError("create.noise.sigma", "number between 0 and 10000", K.create.noise.sigma);
        } else if (n6.defined(K.create.background)) {
          if (!n6.inRange(K.create.channels, 3, 4)) throw n6.invalidParameterError("create.channels", "number between 3 and 4", K.create.channels);
          let z = hk9(K.create.background);
          Y.createBackground = [z.red(), z.green(), z.blue(), Math.round(z.alpha() * 255)];
        } else throw Error("Expected valid noise or background to create a new input image");
        delete Y.buffer;
      } else throw Error("Expected valid width, height and channels to create a new input image");
      if (n6.defined(K.text)) if (n6.object(K.text) && n6.string(K.text.text)) {
        if (Y.textValue = K.text.text, n6.defined(K.text.height) && n6.defined(K.text.dpi)) throw Error("Expected only one of dpi or height");
        if (n6.defined(K.text.font)) if (n6.string(K.text.font)) Y.textFont = K.text.font;else throw n6.invalidParameterError("text.font", "string", K.text.font);
        if (n6.defined(K.text.fontfile)) if (n6.string(K.text.fontfile)) Y.textFontfile = K.text.fontfile;else throw n6.invalidParameterError("text.fontfile", "string", K.text.fontfile);
        if (n6.defined(K.text.width)) if (n6.integer(K.text.width) && K.text.width > 0) Y.textWidth = K.text.width;else throw n6.invalidParameterError("text.width", "positive integer", K.text.width);
        if (n6.defined(K.text.height)) if (n6.integer(K.text.height) && K.text.height > 0) Y.textHeight = K.text.height;else throw n6.invalidParameterError("text.height", "positive integer", K.text.height);
        if (n6.defined(K.text.align)) if (n6.string(K.text.align) && n6.string(this.constructor.align[K.text.align])) Y.textAlign = this.constructor.align[K.text.align];else throw n6.invalidParameterError("text.align", "valid alignment", K.text.align);
        if (n6.defined(K.text.justify)) if (n6.bool(K.text.justify)) Y.textJustify = K.text.justify;else throw n6.invalidParameterError("text.justify", "boolean", K.text.justify);
        if (n6.defined(K.text.dpi)) if (n6.integer(K.text.dpi) && n6.inRange(K.text.dpi, 1, 1e6)) Y.textDpi = K.text.dpi;else throw n6.invalidParameterError("text.dpi", "integer between 1 and 1000000", K.text.dpi);
        if (n6.defined(K.text.rgba)) if (n6.bool(K.text.rgba)) Y.textRgba = K.text.rgba;else throw n6.invalidParameterError("text.rgba", "bool", K.text.rgba);
        if (n6.defined(K.text.spacing)) if (n6.integer(K.text.spacing) && n6.inRange(K.text.spacing, -1e6, 1e6)) Y.textSpacing = K.text.spacing;else throw n6.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", K.text.spacing);
        if (n6.defined(K.text.wrap)) if (n6.string(K.text.wrap) && n6.inArray(K.text.wrap, ["word", "char", "word-char", "none"])) Y.textWrap = K.text.wrap;else throw n6.invalidParameterError("text.wrap", "one of: word, char, word-char, none", K.text.wrap);
        delete Y.buffer;
      } else throw Error("Expected a valid string to create an image with text.");
    } else if (n6.defined(K)) throw Error("Invalid input options " + K);
    return Y;
  }
  function uk9(A, K, q) {
    if (Array.isArray(this.options.input.buffer)) {
      if (n6.buffer(A)) {
        if (this.options.input.buffer.length === 0) this.on("finish", () => {
          this.streamInFinished = !0;
        });
        this.options.input.buffer.push(A), q();
      } else q(Error("Non-Buffer data on Writable Stream"));
    } else q(Error("Unexpected data on Writable Stream"));
  }
  function Bk9() {
    if (this._isStreamInput()) this.options.input.buffer = Buffer.concat(this.options.input.buffer);
  }
  function mk9() {
    return Array.isArray(this.options.input.buffer);
  }
  function gk9(A) {
    let K = Error();
    if (n6.fn(A)) {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), rr.metadata(this.options, (q, Y) => {
          if (q) A(n6.nativeError(q, K));else A(null, Y);
        });
      });else rr.metadata(this.options, (q, Y) => {
        if (q) A(n6.nativeError(q, K));else A(null, Y);
      });
      return this;
    } else if (this._isStreamInput()) return new Promise((q, Y) => {
      let z = () => {
        this._flattenBufferIn(), rr.metadata(this.options, (w, H) => {
          if (w) Y(n6.nativeError(w, K));else q(H);
        });
      };
      if (this.writableFinished) z();else this.once("finish", z);
    });else return new Promise((q, Y) => {
      rr.metadata(this.options, (z, w) => {
        if (z) Y(n6.nativeError(z, K));else q(w);
      });
    });
  }
  function Fk9(A) {
    let K = Error();
    if (n6.fn(A)) {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), rr.stats(this.options, (q, Y) => {
          if (q) A(n6.nativeError(q, K));else A(null, Y);
        });
      });else rr.stats(this.options, (q, Y) => {
        if (q) A(n6.nativeError(q, K));else A(null, Y);
      });
      return this;
    } else if (this._isStreamInput()) return new Promise((q, Y) => {
      this.on("finish", function () {
        this._flattenBufferIn(), rr.stats(this.options, (z, w) => {
          if (z) Y(n6.nativeError(z, K));else q(w);
        });
      });
    });else return new Promise((q, Y) => {
      rr.stats(this.options, (z, w) => {
        if (z) Y(n6.nativeError(z, K));else q(w);
      });
    });
  }
  Sx4.exports = function (A) {
    Object.assign(A.prototype, {
      _inputOptionsFromObject: Ix4,
      _createInputDescriptor: xk9,
      _write: uk9,
      _flattenBufferIn: Bk9,
      _isStreamInput: mk9,
      metadata: gk9,
      stats: Fk9
    }), A.align = bk9;
  };
});

// Register to shared state
__$.hx4 = hx4;
