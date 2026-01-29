// Module: Qx4
// Dependencies: ox

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qx4 = v((ijw, Fx4) => {
  var lz = __$.ox(),
    UY6 = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };
  function ik9(A) {
    if (!Array.isArray(A)) throw lz.invalidParameterError("images to composite", "array", A);
    return this.options.composite = A.map(K => {
      if (!lz.object(K)) throw lz.invalidParameterError("image to composite", "object", K);
      let q = this._inputOptionsFromObject(K),
        Y = {
          input: this._createInputDescriptor(K.input, q, {
            allowStream: !1
          }),
          blend: "over",
          tile: !1,
          left: 0,
          top: 0,
          hasOffset: !1,
          gravity: 0,
          premultiplied: !1
        };
      if (lz.defined(K.blend)) if (lz.string(UY6[K.blend])) Y.blend = UY6[K.blend];else throw lz.invalidParameterError("blend", "valid blend name", K.blend);
      if (lz.defined(K.tile)) if (lz.bool(K.tile)) Y.tile = K.tile;else throw lz.invalidParameterError("tile", "boolean", K.tile);
      if (lz.defined(K.left)) if (lz.integer(K.left)) Y.left = K.left;else throw lz.invalidParameterError("left", "integer", K.left);
      if (lz.defined(K.top)) if (lz.integer(K.top)) Y.top = K.top;else throw lz.invalidParameterError("top", "integer", K.top);
      if (lz.defined(K.top) !== lz.defined(K.left)) throw Error("Expected both left and top to be set");else Y.hasOffset = lz.integer(K.top) && lz.integer(K.left);
      if (lz.defined(K.gravity)) if (lz.integer(K.gravity) && lz.inRange(K.gravity, 0, 8)) Y.gravity = K.gravity;else if (lz.string(K.gravity) && lz.integer(this.constructor.gravity[K.gravity])) Y.gravity = this.constructor.gravity[K.gravity];else throw lz.invalidParameterError("gravity", "valid gravity", K.gravity);
      if (lz.defined(K.premultiplied)) if (lz.bool(K.premultiplied)) Y.premultiplied = K.premultiplied;else throw lz.invalidParameterError("premultiplied", "boolean", K.premultiplied);
      return Y;
    }), this;
  }
  Fx4.exports = function (A) {
    A.prototype.composite = ik9, A.blend = UY6;
  };
});

// Register to shared state
__$.Qx4 = Qx4;
