// Module: tE7
// Dependencies: BmA, Ts

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tE7 = v(cFY => {
  var gf6 = __$.BmA(),
    Ff6 = __$.Ts(),
    rK = Ff6.TAG_NAMES,
    ZW = Ff6.NAMESPACES,
    qZ1 = Ff6.ATTRS,
    sE7 = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    },
    gFY = {
      attributename: "attributeName",
      attributetype: "attributeType",
      basefrequency: "baseFrequency",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      clippathunits: "clipPathUnits",
      diffuseconstant: "diffuseConstant",
      edgemode: "edgeMode",
      filterunits: "filterUnits",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      limitingconeangle: "limitingConeAngle",
      markerheight: "markerHeight",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textlength: "textLength",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      xchannelselector: "xChannelSelector",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan"
    },
    FFY = {
      "xlink:actuate": {
        prefix: "xlink",
        name: "actuate",
        namespace: ZW.XLINK
      },
      "xlink:arcrole": {
        prefix: "xlink",
        name: "arcrole",
        namespace: ZW.XLINK
      },
      "xlink:href": {
        prefix: "xlink",
        name: "href",
        namespace: ZW.XLINK
      },
      "xlink:role": {
        prefix: "xlink",
        name: "role",
        namespace: ZW.XLINK
      },
      "xlink:show": {
        prefix: "xlink",
        name: "show",
        namespace: ZW.XLINK
      },
      "xlink:title": {
        prefix: "xlink",
        name: "title",
        namespace: ZW.XLINK
      },
      "xlink:type": {
        prefix: "xlink",
        name: "type",
        namespace: ZW.XLINK
      },
      "xml:base": {
        prefix: "xml",
        name: "base",
        namespace: ZW.XML
      },
      "xml:lang": {
        prefix: "xml",
        name: "lang",
        namespace: ZW.XML
      },
      "xml:space": {
        prefix: "xml",
        name: "space",
        namespace: ZW.XML
      },
      xmlns: {
        prefix: "",
        name: "xmlns",
        namespace: ZW.XMLNS
      },
      "xmlns:xlink": {
        prefix: "xmlns",
        name: "xlink",
        namespace: ZW.XMLNS
      }
    },
    QFY = cFY.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
      textpath: "textPath"
    },
    UFY = {
      [rK.B]: !0,
      [rK.BIG]: !0,
      [rK.BLOCKQUOTE]: !0,
      [rK.BODY]: !0,
      [rK.BR]: !0,
      [rK.CENTER]: !0,
      [rK.CODE]: !0,
      [rK.DD]: !0,
      [rK.DIV]: !0,
      [rK.DL]: !0,
      [rK.DT]: !0,
      [rK.EM]: !0,
      [rK.EMBED]: !0,
      [rK.H1]: !0,
      [rK.H2]: !0,
      [rK.H3]: !0,
      [rK.H4]: !0,
      [rK.H5]: !0,
      [rK.H6]: !0,
      [rK.HEAD]: !0,
      [rK.HR]: !0,
      [rK.I]: !0,
      [rK.IMG]: !0,
      [rK.LI]: !0,
      [rK.LISTING]: !0,
      [rK.MENU]: !0,
      [rK.META]: !0,
      [rK.NOBR]: !0,
      [rK.OL]: !0,
      [rK.P]: !0,
      [rK.PRE]: !0,
      [rK.RUBY]: !0,
      [rK.S]: !0,
      [rK.SMALL]: !0,
      [rK.SPAN]: !0,
      [rK.STRONG]: !0,
      [rK.STRIKE]: !0,
      [rK.SUB]: !0,
      [rK.SUP]: !0,
      [rK.TABLE]: !0,
      [rK.TT]: !0,
      [rK.U]: !0,
      [rK.UL]: !0,
      [rK.VAR]: !0
    };
  cFY.causesExit = function (A) {
    let K = A.tagName;
    return K === rK.FONT && (gf6.getTokenAttr(A, qZ1.COLOR) !== null || gf6.getTokenAttr(A, qZ1.SIZE) !== null || gf6.getTokenAttr(A, qZ1.FACE) !== null) ? !0 : UFY[K];
  };
  cFY.adjustTokenMathMLAttrs = function (A) {
    for (let K = 0; K < A.attrs.length; K++) if (A.attrs[K].name === "definitionurl") {
      A.attrs[K].name = "definitionURL";
      break;
    }
  };
  cFY.adjustTokenSVGAttrs = function (A) {
    for (let K = 0; K < A.attrs.length; K++) {
      let q = gFY[A.attrs[K].name];
      if (q) A.attrs[K].name = q;
    }
  };
  cFY.adjustTokenXMLAttrs = function (A) {
    for (let K = 0; K < A.attrs.length; K++) {
      let q = FFY[A.attrs[K].name];
      if (q) A.attrs[K].prefix = q.prefix, A.attrs[K].name = q.name, A.attrs[K].namespace = q.namespace;
    }
  };
  cFY.adjustTokenSVGTagName = function (A) {
    let K = QFY[A.tagName];
    if (K) A.tagName = K;
  };
  function pFY(A, K) {
    return K === ZW.MATHML && (A === rK.MI || A === rK.MO || A === rK.MN || A === rK.MS || A === rK.MTEXT);
  }
  function dFY(A, K, q) {
    if (K === ZW.MATHML && A === rK.ANNOTATION_XML) {
      for (let Y = 0; Y < q.length; Y++) if (q[Y].name === qZ1.ENCODING) {
        let z = q[Y].value.toLowerCase();
        return z === sE7.TEXT_HTML || z === sE7.APPLICATION_XML;
      }
    }
    return K === ZW.SVG && (A === rK.FOREIGN_OBJECT || A === rK.DESC || A === rK.TITLE);
  }
  cFY.isIntegrationPoint = function (A, K, q, Y) {
    if ((!Y || Y === ZW.HTML) && dFY(A, K, q)) return !0;
    if ((!Y || Y === ZW.MATHML) && pFY(A, K)) return !0;
    return !1;
  };
});

// Register to shared state
__$.tE7 = tE7;
