// Module: ix4
// Dependencies: mY1, ox

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ix4 = v((rjw, lx4) => {
  var WC9 = __$.mY1(),
    AU = __$.ox(),
    cx4 = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };
  function DC9(A) {
    return this._setBackgroundColourOption("tint", A), this;
  }
  function jC9(A) {
    return this.options.greyscale = AU.bool(A) ? A : !0, this;
  }
  function MC9(A) {
    return this.greyscale(A);
  }
  function PC9(A) {
    if (!AU.string(A)) throw AU.invalidParameterError("colourspace", "string", A);
    return this.options.colourspacePipeline = A, this;
  }
  function VC9(A) {
    return this.pipelineColourspace(A);
  }
  function fC9(A) {
    if (!AU.string(A)) throw AU.invalidParameterError("colourspace", "string", A);
    return this.options.colourspace = A, this;
  }
  function NC9(A) {
    return this.toColourspace(A);
  }
  function TC9(A, K) {
    if (AU.defined(K)) if (AU.object(K) || AU.string(K)) {
      let q = WC9(K);
      this.options[A] = [q.red(), q.green(), q.blue(), Math.round(q.alpha() * 255)];
    } else throw AU.invalidParameterError("background", "object or string", K);
  }
  lx4.exports = function (A) {
    Object.assign(A.prototype, {
      tint: DC9,
      greyscale: jC9,
      grayscale: MC9,
      pipelineColourspace: PC9,
      pipelineColorspace: VC9,
      toColourspace: fC9,
      toColorspace: NC9,
      _setBackgroundColourOption: TC9
    }), A.colourspace = cx4, A.colorspace = cx4;
  };
});

// Register to shared state
__$.ix4 = ix4;
