// Module: Zb6
// Dependencies: QMA, Xb6, P0, sV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Zb6 = v(ST2 => {
  var wYK = __$.QMA(),
    LT2 = __$.Xb6(),
    RT2 = __$.P0(),
    yT2 = __$.sV1(),
    IT2 = ST2.elements = {},
    HYK = Object.create(null);
  ST2.createElement = function (A, K, q) {
    var Y = HYK[K] || Gb6;
    return new Y(A, K, q);
  };
  function _b6(A) {
    return LT2(A, Gb6, IT2, HYK);
  }
  var Gb6 = _b6({
    superclass: wYK,
    name: "SVGElement",
    ctor: function (K, q, Y) {
      wYK.call(this, K, q, RT2.NAMESPACE.SVG, Y);
    },
    props: {
      style: {
        get: function () {
          if (!this._style) this._style = new yT2(this);
          return this._style;
        }
      }
    }
  });
  _b6({
    name: "SVGSVGElement",
    ctor: function (K, q, Y) {
      Gb6.call(this, K, q, Y);
    },
    tag: "svg",
    props: {
      createSVGRect: {
        value: function () {
          return ST2.createElement(this.ownerDocument, "rect", null);
        }
      }
    }
  });
  _b6({
    tags: ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"]
  });
});

// Register to shared state
__$.Zb6 = Zb6;
