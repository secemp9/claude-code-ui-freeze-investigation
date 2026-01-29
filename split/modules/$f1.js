// Module: $f1
// Dependencies: Kf1, Yf1, RW, P0, eV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $f1 = v((DeH, cYK) => {
  cYK.exports = gY;
  var oT2 = __$.Kf1(),
    aT2 = __$.Yf1(),
    jb6 = __$.RW(),
    Aq = __$.P0().NAMESPACE,
    BYK = __$.eV1(),
    r2 = BYK.elements,
    q9A = Function.prototype.apply.bind(Array.prototype.push),
    zf1 = -1,
    iMA = 1,
    Mj = 2,
    p9 = 3,
    Wm = 4,
    sT2 = 5,
    tT2 = [],
    eT2 = /^HTML$|^-\/\/W3O\/\/DTD W3 HTML Strict 3\.0\/\/EN\/\/$|^-\/W3C\/DTD HTML 4\.0 Transitional\/EN$|^\+\/\/Silmaril\/\/dtd html Pro v0r11 19970101\/\/|^-\/\/AdvaSoft Ltd\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/AS\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict\/\/|^-\/\/IETF\/\/DTD HTML 2\.0\/\/|^-\/\/IETF\/\/DTD HTML 2\.1E\/\/|^-\/\/IETF\/\/DTD HTML 3\.0\/\/|^-\/\/IETF\/\/DTD HTML 3\.2 Final\/\/|^-\/\/IETF\/\/DTD HTML 3\.2\/\/|^-\/\/IETF\/\/DTD HTML 3\/\/|^-\/\/IETF\/\/DTD HTML Level 0\/\/|^-\/\/IETF\/\/DTD HTML Level 1\/\/|^-\/\/IETF\/\/DTD HTML Level 2\/\/|^-\/\/IETF\/\/DTD HTML Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 0\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict\/\/|^-\/\/IETF\/\/DTD HTML\/\/|^-\/\/Metrius\/\/DTD Metrius Presentational\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 Tables\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD HTML\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD Strict HTML\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML 2\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended 1\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended Relaxed 1\.0\/\/|^-\/\/SoftQuad Software\/\/DTD HoTMetaL PRO 6\.0::19990601::extensions to HTML 4\.0\/\/|^-\/\/SoftQuad\/\/DTD HoTMetaL PRO 4\.0::19971010::extensions to HTML 4\.0\/\/|^-\/\/Spyglass\/\/DTD HTML 2\.0 Extended\/\/|^-\/\/SQ\/\/DTD HTML 2\.0 HoTMetaL \+ extensions\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava HTML\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava Strict HTML\/\/|^-\/\/W3C\/\/DTD HTML 3 1995-03-24\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Draft\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Final\/\/|^-\/\/W3C\/\/DTD HTML 3\.2\/\/|^-\/\/W3C\/\/DTD HTML 3\.2S Draft\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/|^-\/\/W3C\/\/DTD HTML Experimental 19960712\/\/|^-\/\/W3C\/\/DTD HTML Experimental 970421\/\/|^-\/\/W3C\/\/DTD W3 HTML\/\/|^-\/\/W3O\/\/DTD W3 HTML 3\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML 2\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML\/\//i,
    Av2 = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
    TYK = /^-\/\/W3C\/\/DTD HTML 4\.01 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.01 Transitional\/\//i,
    Kv2 = /^-\/\/W3C\/\/DTD XHTML 1\.0 Frameset\/\/|^-\/\/W3C\/\/DTD XHTML 1\.0 Transitional\/\//i,
    z9A = Object.create(null);
  z9A[Aq.HTML] = {
    __proto__: null,
    address: !0,
    applet: !0,
    area: !0,
    article: !0,
    aside: !0,
    base: !0,
    basefont: !0,
    bgsound: !0,
    blockquote: !0,
    body: !0,
    br: !0,
    button: !0,
    caption: !0,
    center: !0,
    col: !0,
    colgroup: !0,
    dd: !0,
    details: !0,
    dir: !0,
    div: !0,
    dl: !0,
    dt: !0,
    embed: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    frame: !0,
    frameset: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    head: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    html: !0,
    iframe: !0,
    img: !0,
    input: !0,
    li: !0,
    link: !0,
    listing: !0,
    main: !0,
    marquee: !0,
    menu: !0,
    meta: !0,
    nav: !0,
    noembed: !0,
    noframes: !0,
    noscript: !0,
    object: !0,
    ol: !0,
    p: !0,
    param: !0,
    plaintext: !0,
    pre: !0,
    script: !0,
    section: !0,
    select: !0,
    source: !0,
    style: !0,
    summary: !0,
    table: !0,
    tbody: !0,
    td: !0,
    template: !0,
    textarea: !0,
    tfoot: !0,
    th: !0,
    thead: !0,
    title: !0,
    tr: !0,
    track: !0,
    ul: !0,
    wbr: !0,
    xmp: !0
  };
  z9A[Aq.SVG] = {
    __proto__: null,
    foreignObject: !0,
    desc: !0,
    title: !0
  };
  z9A[Aq.MATHML] = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0,
    "annotation-xml": !0
  };
  var Vb6 = Object.create(null);
  Vb6[Aq.HTML] = {
    __proto__: null,
    address: !0,
    div: !0,
    p: !0
  };
  var mYK = Object.create(null);
  mYK[Aq.HTML] = {
    __proto__: null,
    dd: !0,
    dt: !0
  };
  var nMA = Object.create(null);
  nMA[Aq.HTML] = {
    __proto__: null,
    table: !0,
    thead: !0,
    tbody: !0,
    tfoot: !0,
    tr: !0
  };
  var gYK = Object.create(null);
  gYK[Aq.HTML] = {
    __proto__: null,
    dd: !0,
    dt: !0,
    li: !0,
    menuitem: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rb: !0,
    rp: !0,
    rt: !0,
    rtc: !0
  };
  var FYK = Object.create(null);
  FYK[Aq.HTML] = {
    __proto__: null,
    caption: !0,
    colgroup: !0,
    dd: !0,
    dt: !0,
    li: !0,
    optgroup: !0,
    option: !0,
    p: !0,
    rb: !0,
    rp: !0,
    rt: !0,
    rtc: !0,
    tbody: !0,
    td: !0,
    tfoot: !0,
    th: !0,
    thead: !0,
    tr: !0
  };
  var Jf1 = Object.create(null);
  Jf1[Aq.HTML] = {
    __proto__: null,
    table: !0,
    template: !0,
    html: !0
  };
  var Of1 = Object.create(null);
  Of1[Aq.HTML] = {
    __proto__: null,
    tbody: !0,
    tfoot: !0,
    thead: !0,
    template: !0,
    html: !0
  };
  var fb6 = Object.create(null);
  fb6[Aq.HTML] = {
    __proto__: null,
    tr: !0,
    template: !0,
    html: !0
  };
  var QYK = Object.create(null);
  QYK[Aq.HTML] = {
    __proto__: null,
    button: !0,
    fieldset: !0,
    input: !0,
    keygen: !0,
    object: !0,
    output: !0,
    select: !0,
    textarea: !0,
    img: !0
  };
  var Dm = Object.create(null);
  Dm[Aq.HTML] = {
    __proto__: null,
    applet: !0,
    caption: !0,
    html: !0,
    table: !0,
    td: !0,
    th: !0,
    marquee: !0,
    object: !0,
    template: !0
  };
  Dm[Aq.MATHML] = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0,
    "annotation-xml": !0
  };
  Dm[Aq.SVG] = {
    __proto__: null,
    foreignObject: !0,
    desc: !0,
    title: !0
  };
  var Xf1 = Object.create(Dm);
  Xf1[Aq.HTML] = Object.create(Dm[Aq.HTML]);
  Xf1[Aq.HTML].ol = !0;
  Xf1[Aq.HTML].ul = !0;
  var Nb6 = Object.create(Dm);
  Nb6[Aq.HTML] = Object.create(Dm[Aq.HTML]);
  Nb6[Aq.HTML].button = !0;
  var UYK = Object.create(null);
  UYK[Aq.HTML] = {
    __proto__: null,
    html: !0,
    table: !0,
    template: !0
  };
  var qv2 = Object.create(null);
  qv2[Aq.HTML] = {
    __proto__: null,
    optgroup: !0,
    option: !0
  };
  var pYK = Object.create(null);
  pYK[Aq.MATHML] = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0
  };
  var dYK = Object.create(null);
  dYK[Aq.SVG] = {
    __proto__: null,
    foreignObject: !0,
    desc: !0,
    title: !0
  };
  var vYK = {
      __proto__: null,
      "xlink:actuate": Aq.XLINK,
      "xlink:arcrole": Aq.XLINK,
      "xlink:href": Aq.XLINK,
      "xlink:role": Aq.XLINK,
      "xlink:show": Aq.XLINK,
      "xlink:title": Aq.XLINK,
      "xlink:type": Aq.XLINK,
      "xml:base": Aq.XML,
      "xml:lang": Aq.XML,
      "xml:space": Aq.XML,
      xmlns: Aq.XMLNS,
      "xmlns:xlink": Aq.XMLNS
    },
    EYK = {
      __proto__: null,
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
    kYK = {
      __proto__: null,
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
    CYK = {
      __proto__: null,
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    },
    Yv2 = {
      __proto__: null,
      AElig: 198,
      "AElig;": 198,
      AMP: 38,
      "AMP;": 38,
      Aacute: 193,
      "Aacute;": 193,
      "Abreve;": 258,
      Acirc: 194,
      "Acirc;": 194,
      "Acy;": 1040,
      "Afr;": [55349, 56580],
      Agrave: 192,
      "Agrave;": 192,
      "Alpha;": 913,
      "Amacr;": 256,
      "And;": 10835,
      "Aogon;": 260,
      "Aopf;": [55349, 56632],
      "ApplyFunction;": 8289,
      Aring: 197,
      "Aring;": 197,
      "Ascr;": [55349, 56476],
      "Assign;": 8788,
      Atilde: 195,
      "Atilde;": 195,
      Auml: 196,
      "Auml;": 196,
      "Backslash;": 8726,
      "Barv;": 10983,
      "Barwed;": 8966,
      "Bcy;": 1041,
      "Because;": 8757,
      "Bernoullis;": 8492,
      "Beta;": 914,
      "Bfr;": [55349, 56581],
      "Bopf;": [55349, 56633],
      "Breve;": 728,
      "Bscr;": 8492,
      "Bumpeq;": 8782,
      "CHcy;": 1063,
      COPY: 169,
      "COPY;": 169,
      "Cacute;": 262,
      "Cap;": 8914,
      "CapitalDifferentialD;": 8517,
      "Cayleys;": 8493,
      "Ccaron;": 268,
      Ccedil: 199,
      "Ccedil;": 199,
      "Ccirc;": 264,
      "Cconint;": 8752,
      "Cdot;": 266,
      "Cedilla;": 184,
      "CenterDot;": 183,
      "Cfr;": 8493,
      "Chi;": 935,
      "CircleDot;": 8857,
      "CircleMinus;": 8854,
      "CirclePlus;": 8853,
      "CircleTimes;": 8855,
      "ClockwiseContourIntegral;": 8754,
      "CloseCurlyDoubleQuote;": 8221,
      "CloseCurlyQuote;": 8217,
      "Colon;": 8759,
      "Colone;": 10868,
      "Congruent;": 8801,
      "Conint;": 8751,
      "ContourIntegral;": 8750,
      "Copf;": 8450,
      "Coproduct;": 8720,
      "CounterClockwiseContourIntegral;": 8755,
      "Cross;": 10799,
      "Cscr;": [55349, 56478],
      "Cup;": 8915,
      "CupCap;": 8781,
      "DD;": 8517,
      "DDotrahd;": 10513,
      "DJcy;": 1026,
      "DScy;": 1029,
      "DZcy;": 1039,
      "Dagger;": 8225,
      "Darr;": 8609,
      "Dashv;": 10980,
      "Dcaron;": 270,
      "Dcy;": 1044,
      "Del;": 8711,
      "Delta;": 916,
      "Dfr;": [55349, 56583],
      "DiacriticalAcute;": 180,
      "DiacriticalDot;": 729,
      "DiacriticalDoubleAcute;": 733,
      "DiacriticalGrave;": 96,
      "DiacriticalTilde;": 732,
      "Diamond;": 8900,
      "DifferentialD;": 8518,
      "Dopf;": [55349, 56635],
      "Dot;": 168,
      "DotDot;": 8412,
      "DotEqual;": 8784,
      "DoubleContourIntegral;": 8751,
      "DoubleDot;": 168,
      "DoubleDownArrow;": 8659,
      "DoubleLeftArrow;": 8656,
      "DoubleLeftRightArrow;": 8660,
      "DoubleLeftTee;": 10980,
      "DoubleLongLeftArrow;": 10232,
      "DoubleLongLeftRightArrow;": 10234,
      "DoubleLongRightArrow;": 10233,
      "DoubleRightArrow;": 8658,
      "DoubleRightTee;": 8872,
      "DoubleUpArrow;": 8657,
      "DoubleUpDownArrow;": 8661,
      "DoubleVerticalBar;": 8741,
      "DownArrow;": 8595,
      "DownArrowBar;": 10515,
      "DownArrowUpArrow;": 8693,
      "DownBreve;": 785,
      "DownLeftRightVector;": 10576,
      "DownLeftTeeVector;": 10590,
      "DownLeftVector;": 8637,
      "DownLeftVectorBar;": 10582,
      "DownRightTeeVector;": 10591,
      "DownRightVector;": 8641,
      "DownRightVectorBar;": 10583,
      "DownTee;": 8868,
      "DownTeeArrow;": 8615,
      "Downarrow;": 8659,
      "Dscr;": [55349, 56479],
      "Dstrok;": 272,
      "ENG;": 330,
      ETH: 208,
      "ETH;": 208,
      Eacute: 201,
      "Eacute;": 201,
      "Ecaron;": 282,
      Ecirc: 202,
      "Ecirc;": 202,
      "Ecy;": 1069,
      "Edot;": 278,
      "Efr;": [55349, 56584],
      Egrave: 200,
      "Egrave;": 200,
      "Element;": 8712,
      "Emacr;": 274,
      "EmptySmallSquare;": 9723,
      "EmptyVerySmallSquare;": 9643,
      "Eogon;": 280,
      "Eopf;": [55349, 56636],
      "Epsilon;": 917,
      "Equal;": 10869,
      "EqualTilde;": 8770,
      "Equilibrium;": 8652,
      "Escr;": 8496,
      "Esim;": 10867,
      "Eta;": 919,
      Euml: 203,
      "Euml;": 203,
      "Exists;": 8707,
      "ExponentialE;": 8519,
      "Fcy;": 1060,
      "Ffr;": [55349, 56585],
      "FilledSmallSquare;": 9724,
      "FilledVerySmallSquare;": 9642,
      "Fopf;": [55349, 56637],
      "ForAll;": 8704,
      "Fouriertrf;": 8497,
      "Fscr;": 8497,
      "GJcy;": 1027,
      GT: 62,
      "GT;": 62,
      "Gamma;": 915,
      "Gammad;": 988,
      "Gbreve;": 286,
      "Gcedil;": 290,
      "Gcirc;": 284,
      "Gcy;": 1043,
      "Gdot;": 288,
      "Gfr;": [55349, 56586],
      "Gg;": 8921,
      "Gopf;": [55349, 56638],
      "GreaterEqual;": 8805,
      "GreaterEqualLess;": 8923,
      "GreaterFullEqual;": 8807,
      "GreaterGreater;": 10914,
      "GreaterLess;": 8823,
      "GreaterSlantEqual;": 10878,
      "GreaterTilde;": 8819,
      "Gscr;": [55349, 56482],
      "Gt;": 8811,
      "HARDcy;": 1066,
      "Hacek;": 711,
      "Hat;": 94,
      "Hcirc;": 292,
      "Hfr;": 8460,
      "HilbertSpace;": 8459,
      "Hopf;": 8461,
      "HorizontalLine;": 9472,
      "Hscr;": 8459,
      "Hstrok;": 294,
      "HumpDownHump;": 8782,
      "HumpEqual;": 8783,
      "IEcy;": 1045,
      "IJlig;": 306,
      "IOcy;": 1025,
      Iacute: 205,
      "Iacute;": 205,
      Icirc: 206,
      "Icirc;": 206,
      "Icy;": 1048,
      "Idot;": 304,
      "Ifr;": 8465,
      Igrave: 204,
      "Igrave;": 204,
      "Im;": 8465,
      "Imacr;": 298,
      "ImaginaryI;": 8520,
      "Implies;": 8658,
      "Int;": 8748,
      "Integral;": 8747,
      "Intersection;": 8898,
      "InvisibleComma;": 8291,
      "InvisibleTimes;": 8290,
      "Iogon;": 302,
      "Iopf;": [55349, 56640],
      "Iota;": 921,
      "Iscr;": 8464,
      "Itilde;": 296,
      "Iukcy;": 1030,
      Iuml: 207,
      "Iuml;": 207,
      "Jcirc;": 308,
      "Jcy;": 1049,
      "Jfr;": [55349, 56589],
      "Jopf;": [55349, 56641],
      "Jscr;": [55349, 56485],
      "Jsercy;": 1032,
      "Jukcy;": 1028,
      "KHcy;": 1061,
      "KJcy;": 1036,
      "Kappa;": 922,
      "Kcedil;": 310,
      "Kcy;": 1050,
      "Kfr;": [55349, 56590],
      "Kopf;": [55349, 56642],
      "Kscr;": [55349, 56486],
      "LJcy;": 1033,
      LT: 60,
      "LT;": 60,
      "Lacute;": 313,
      "Lambda;": 923,
      "Lang;": 10218,
      "Laplacetrf;": 8466,
      "Larr;": 8606,
      "Lcaron;": 317,
      "Lcedil;": 315,
      "Lcy;": 1051,
      "LeftAngleBracket;": 10216,
      "LeftArrow;": 8592,
      "LeftArrowBar;": 8676,
      "LeftArrowRightArrow;": 8646,
      "LeftCeiling;": 8968,
      "LeftDoubleBracket;": 10214,
      "LeftDownTeeVector;": 10593,
      "LeftDownVector;": 8643,
      "LeftDownVectorBar;": 10585,
      "LeftFloor;": 8970,
      "LeftRightArrow;": 8596,
      "LeftRightVector;": 10574,
      "LeftTee;": 8867,
      "LeftTeeArrow;": 8612,
      "LeftTeeVector;": 10586,
      "LeftTriangle;": 8882,
      "LeftTriangleBar;": 10703,
      "LeftTriangleEqual;": 8884,
      "LeftUpDownVector;": 10577,
      "LeftUpTeeVector;": 10592,
      "LeftUpVector;": 8639,
      "LeftUpVectorBar;": 10584,
      "LeftVector;": 8636,
      "LeftVectorBar;": 10578,
      "Leftarrow;": 8656,
      "Leftrightarrow;": 8660,
      "LessEqualGreater;": 8922,
      "LessFullEqual;": 8806,
      "LessGreater;": 8822,
      "LessLess;": 10913,
      "LessSlantEqual;": 10877,
      "LessTilde;": 8818,
      "Lfr;": [55349, 56591],
      "Ll;": 8920,
      "Lleftarrow;": 8666,
      "Lmidot;": 319,
      "LongLeftArrow;": 10229,
      "LongLeftRightArrow;": 10231,
      "LongRightArrow;": 10230,
      "Longleftarrow;": 10232,
      "Longleftrightarrow;": 10234,
      "Longrightarrow;": 10233,
      "Lopf;": [55349, 56643],
      "LowerLeftArrow;": 8601,
      "LowerRightArrow;": 8600,
      "Lscr;": 8466,
      "Lsh;": 8624,
      "Lstrok;": 321,
      "Lt;": 8810,
      "Map;": 10501,
      "Mcy;": 1052,
      "MediumSpace;": 8287,
      "Mellintrf;": 8499,
      "Mfr;": [55349, 56592],
      "MinusPlus;": 8723,
      "Mopf;": [55349, 56644],
      "Mscr;": 8499,
      "Mu;": 924,
      "NJcy;": 1034,
      "Nacute;": 323,
      "Ncaron;": 327,
      "Ncedil;": 325,
      "Ncy;": 1053,
      "NegativeMediumSpace;": 8203,
      "NegativeThickSpace;": 8203,
      "NegativeThinSpace;": 8203,
      "NegativeVeryThinSpace;": 8203,
      "NestedGreaterGreater;": 8811,
      "NestedLessLess;": 8810,
      "NewLine;": 10,
      "Nfr;": [55349, 56593],
      "NoBreak;": 8288,
      "NonBreakingSpace;": 160,
      "Nopf;": 8469,
      "Not;": 10988,
      "NotCongruent;": 8802,
      "NotCupCap;": 8813,
      "NotDoubleVerticalBar;": 8742,
      "NotElement;": 8713,
      "NotEqual;": 8800,
      "NotEqualTilde;": [8770, 824],
      "NotExists;": 8708,
      "NotGreater;": 8815,
      "NotGreaterEqual;": 8817,
      "NotGreaterFullEqual;": [8807, 824],
      "NotGreaterGreater;": [8811, 824],
      "NotGreaterLess;": 8825,
      "NotGreaterSlantEqual;": [10878, 824],
      "NotGreaterTilde;": 8821,
      "NotHumpDownHump;": [8782, 824],
      "NotHumpEqual;": [8783, 824],
      "NotLeftTriangle;": 8938,
      "NotLeftTriangleBar;": [10703, 824],
      "NotLeftTriangleEqual;": 8940,
      "NotLess;": 8814,
      "NotLessEqual;": 8816,
      "NotLessGreater;": 8824,
      "NotLessLess;": [8810, 824],
      "NotLessSlantEqual;": [10877, 824],
      "NotLessTilde;": 8820,
      "NotNestedGreaterGreater;": [10914, 824],
      "NotNestedLessLess;": [10913, 824],
      "NotPrecedes;": 8832,
      "NotPrecedesEqual;": [10927, 824],
      "NotPrecedesSlantEqual;": 8928,
      "NotReverseElement;": 8716,
      "NotRightTriangle;": 8939,
      "NotRightTriangleBar;": [10704, 824],
      "NotRightTriangleEqual;": 8941,
      "NotSquareSubset;": [8847, 824],
      "NotSquareSubsetEqual;": 8930,
      "NotSquareSuperset;": [8848, 824],
      "NotSquareSupersetEqual;": 8931,
      "NotSubset;": [8834, 8402],
      "NotSubsetEqual;": 8840,
      "NotSucceeds;": 8833,
      "NotSucceedsEqual;": [10928, 824],
      "NotSucceedsSlantEqual;": 8929,
      "NotSucceedsTilde;": [8831, 824],
      "NotSuperset;": [8835, 8402],
      "NotSupersetEqual;": 8841,
      "NotTilde;": 8769,
      "NotTildeEqual;": 8772,
      "NotTildeFullEqual;": 8775,
      "NotTildeTilde;": 8777,
      "NotVerticalBar;": 8740,
      "Nscr;": [55349, 56489],
      Ntilde: 209,
      "Ntilde;": 209,
      "Nu;": 925,
      "OElig;": 338,
      Oacute: 211,
      "Oacute;": 211,
      Ocirc: 212,
      "Ocirc;": 212,
      "Ocy;": 1054,
      "Odblac;": 336,
      "Ofr;": [55349, 56594],
      Ograve: 210,
      "Ograve;": 210,
      "Omacr;": 332,
      "Omega;": 937,
      "Omicron;": 927,
      "Oopf;": [55349, 56646],
      "OpenCurlyDoubleQuote;": 8220,
      "OpenCurlyQuote;": 8216,
      "Or;": 10836,
      "Oscr;": [55349, 56490],
      Oslash: 216,
      "Oslash;": 216,
      Otilde: 213,
      "Otilde;": 213,
      "Otimes;": 10807,
      Ouml: 214,
      "Ouml;": 214,
      "OverBar;": 8254,
      "OverBrace;": 9182,
      "OverBracket;": 9140,
      "OverParenthesis;": 9180,
      "PartialD;": 8706,
      "Pcy;": 1055,
      "Pfr;": [55349, 56595],
      "Phi;": 934,
      "Pi;": 928,
      "PlusMinus;": 177,
      "Poincareplane;": 8460,
      "Popf;": 8473,
      "Pr;": 10939,
      "Precedes;": 8826,
      "PrecedesEqual;": 10927,
      "PrecedesSlantEqual;": 8828,
      "PrecedesTilde;": 8830,
      "Prime;": 8243,
      "Product;": 8719,
      "Proportion;": 8759,
      "Proportional;": 8733,
      "Pscr;": [55349, 56491],
      "Psi;": 936,
      QUOT: 34,
      "QUOT;": 34,
      "Qfr;": [55349, 56596],
      "Qopf;": 8474,
      "Qscr;": [55349, 56492],
      "RBarr;": 10512,
      REG: 174,
      "REG;": 174,
      "Racute;": 340,
      "Rang;": 10219,
      "Rarr;": 8608,
      "Rarrtl;": 10518,
      "Rcaron;": 344,
      "Rcedil;": 342,
      "Rcy;": 1056,
      "Re;": 8476,
      "ReverseElement;": 8715,
      "ReverseEquilibrium;": 8651,
      "ReverseUpEquilibrium;": 10607,
      "Rfr;": 8476,
      "Rho;": 929,
      "RightAngleBracket;": 10217,
      "RightArrow;": 8594,
      "RightArrowBar;": 8677,
      "RightArrowLeftArrow;": 8644,
      "RightCeiling;": 8969,
      "RightDoubleBracket;": 10215,
      "RightDownTeeVector;": 10589,
      "RightDownVector;": 8642,
      "RightDownVectorBar;": 10581,
      "RightFloor;": 8971,
      "RightTee;": 8866,
      "RightTeeArrow;": 8614,
      "RightTeeVector;": 10587,
      "RightTriangle;": 8883,
      "RightTriangleBar;": 10704,
      "RightTriangleEqual;": 8885,
      "RightUpDownVector;": 10575,
      "RightUpTeeVector;": 10588,
      "RightUpVector;": 8638,
      "RightUpVectorBar;": 10580,
      "RightVector;": 8640,
      "RightVectorBar;": 10579,
      "Rightarrow;": 8658,
      "Ropf;": 8477,
      "RoundImplies;": 10608,
      "Rrightarrow;": 8667,
      "Rscr;": 8475,
      "Rsh;": 8625,
      "RuleDelayed;": 10740,
      "SHCHcy;": 1065,
      "SHcy;": 1064,
      "SOFTcy;": 1068,
      "Sacute;": 346,
      "Sc;": 10940,
      "Scaron;": 352,
      "Scedil;": 350,
      "Scirc;": 348,
      "Scy;": 1057,
      "Sfr;": [55349, 56598],
      "ShortDownArrow;": 8595,
      "ShortLeftArrow;": 8592,
      "ShortRightArrow;": 8594,
      "ShortUpArrow;": 8593,
      "Sigma;": 931,
      "SmallCircle;": 8728,
      "Sopf;": [55349, 56650],
      "Sqrt;": 8730,
      "Square;": 9633,
      "SquareIntersection;": 8851,
      "SquareSubset;": 8847,
      "SquareSubsetEqual;": 8849,
      "SquareSuperset;": 8848,
      "SquareSupersetEqual;": 8850,
      "SquareUnion;": 8852,
      "Sscr;": [55349, 56494],
      "Star;": 8902,
      "Sub;": 8912,
      "Subset;": 8912,
      "SubsetEqual;": 8838,
      "Succeeds;": 8827,
      "SucceedsEqual;": 10928,
      "SucceedsSlantEqual;": 8829,
      "SucceedsTilde;": 8831,
      "SuchThat;": 8715,
      "Sum;": 8721,
      "Sup;": 8913,
      "Superset;": 8835,
      "SupersetEqual;": 8839,
      "Supset;": 8913,
      THORN: 222,
      "THORN;": 222,
      "TRADE;": 8482,
      "TSHcy;": 1035,
      "TScy;": 1062,
      "Tab;": 9,
      "Tau;": 932,
      "Tcaron;": 356,
      "Tcedil;": 354,
      "Tcy;": 1058,
      "Tfr;": [55349, 56599],
      "Therefore;": 8756,
      "Theta;": 920,
      "ThickSpace;": [8287, 8202],
      "ThinSpace;": 8201,
      "Tilde;": 8764,
      "TildeEqual;": 8771,
      "TildeFullEqual;": 8773,
      "TildeTilde;": 8776,
      "Topf;": [55349, 56651],
      "TripleDot;": 8411,
      "Tscr;": [55349, 56495],
      "Tstrok;": 358,
      Uacute: 218,
      "Uacute;": 218,
      "Uarr;": 8607,
      "Uarrocir;": 10569,
      "Ubrcy;": 1038,
      "Ubreve;": 364,
      Ucirc: 219,
      "Ucirc;": 219,
      "Ucy;": 1059,
      "Udblac;": 368,
      "Ufr;": [55349, 56600],
      Ugrave: 217,
      "Ugrave;": 217,
      "Umacr;": 362,
      "UnderBar;": 95,
      "UnderBrace;": 9183,
      "UnderBracket;": 9141,
      "UnderParenthesis;": 9181,
      "Union;": 8899,
      "UnionPlus;": 8846,
      "Uogon;": 370,
      "Uopf;": [55349, 56652],
      "UpArrow;": 8593,
      "UpArrowBar;": 10514,
      "UpArrowDownArrow;": 8645,
      "UpDownArrow;": 8597,
      "UpEquilibrium;": 10606,
      "UpTee;": 8869,
      "UpTeeArrow;": 8613,
      "Uparrow;": 8657,
      "Updownarrow;": 8661,
      "UpperLeftArrow;": 8598,
      "UpperRightArrow;": 8599,
      "Upsi;": 978,
      "Upsilon;": 933,
      "Uring;": 366,
      "Uscr;": [55349, 56496],
      "Utilde;": 360,
      Uuml: 220,
      "Uuml;": 220,
      "VDash;": 8875,
      "Vbar;": 10987,
      "Vcy;": 1042,
      "Vdash;": 8873,
      "Vdashl;": 10982,
      "Vee;": 8897,
      "Verbar;": 8214,
      "Vert;": 8214,
      "VerticalBar;": 8739,
      "VerticalLine;": 124,
      "VerticalSeparator;": 10072,
      "VerticalTilde;": 8768,
      "VeryThinSpace;": 8202,
      "Vfr;": [55349, 56601],
      "Vopf;": [55349, 56653],
      "Vscr;": [55349, 56497],
      "Vvdash;": 8874,
      "Wcirc;": 372,
      "Wedge;": 8896,
      "Wfr;": [55349, 56602],
      "Wopf;": [55349, 56654],
      "Wscr;": [55349, 56498],
      "Xfr;": [55349, 56603],
      "Xi;": 926,
      "Xopf;": [55349, 56655],
      "Xscr;": [55349, 56499],
      "YAcy;": 1071,
      "YIcy;": 1031,
      "YUcy;": 1070,
      Yacute: 221,
      "Yacute;": 221,
      "Ycirc;": 374,
      "Ycy;": 1067,
      "Yfr;": [55349, 56604],
      "Yopf;": [55349, 56656],
      "Yscr;": [55349, 56500],
      "Yuml;": 376,
      "ZHcy;": 1046,
      "Zacute;": 377,
      "Zcaron;": 381,
      "Zcy;": 1047,
      "Zdot;": 379,
      "ZeroWidthSpace;": 8203,
      "Zeta;": 918,
      "Zfr;": 8488,
      "Zopf;": 8484,
      "Zscr;": [55349, 56501],
      aacute: 225,
      "aacute;": 225,
      "abreve;": 259,
      "ac;": 8766,
      "acE;": [8766, 819],
      "acd;": 8767,
      acirc: 226,
      "acirc;": 226,
      acute: 180,
      "acute;": 180,
      "acy;": 1072,
      aelig: 230,
      "aelig;": 230,
      "af;": 8289,
      "afr;": [55349, 56606],
      agrave: 224,
      "agrave;": 224,
      "alefsym;": 8501,
      "aleph;": 8501,
      "alpha;": 945,
      "amacr;": 257,
      "amalg;": 10815,
      amp: 38,
      "amp;": 38,
      "and;": 8743,
      "andand;": 10837,
      "andd;": 10844,
      "andslope;": 10840,
      "andv;": 10842,
      "ang;": 8736,
      "ange;": 10660,
      "angle;": 8736,
      "angmsd;": 8737,
      "angmsdaa;": 10664,
      "angmsdab;": 10665,
      "angmsdac;": 10666,
      "angmsdad;": 10667,
      "angmsdae;": 10668,
      "angmsdaf;": 10669,
      "angmsdag;": 10670,
      "angmsdah;": 10671,
      "angrt;": 8735,
      "angrtvb;": 8894,
      "angrtvbd;": 10653,
      "angsph;": 8738,
      "angst;": 197,
      "angzarr;": 9084,
      "aogon;": 261,
      "aopf;": [55349, 56658],
      "ap;": 8776,
      "apE;": 10864,
      "apacir;": 10863,
      "ape;": 8778,
      "apid;": 8779,
      "apos;": 39,
      "approx;": 8776,
      "approxeq;": 8778,
      aring: 229,
      "aring;": 229,
      "ascr;": [55349, 56502],
      "ast;": 42,
      "asymp;": 8776,
      "asympeq;": 8781,
      atilde: 227,
      "atilde;": 227,
      auml: 228,
      "auml;": 228,
      "awconint;": 8755,
      "awint;": 10769,
      "bNot;": 10989,
      "backcong;": 8780,
      "backepsilon;": 1014,
      "backprime;": 8245,
      "backsim;": 8765,
      "backsimeq;": 8909,
      "barvee;": 8893,
      "barwed;": 8965,
      "barwedge;": 8965,
      "bbrk;": 9141,
      "bbrktbrk;": 9142,
      "bcong;": 8780,
      "bcy;": 1073,
      "bdquo;": 8222,
      "becaus;": 8757,
      "because;": 8757,
      "bemptyv;": 10672,
      "bepsi;": 1014,
      "bernou;": 8492,
      "beta;": 946,
      "beth;": 8502,
      "between;": 8812,
      "bfr;": [55349, 56607],
      "bigcap;": 8898,
      "bigcirc;": 9711,
      "bigcup;": 8899,
      "bigodot;": 10752,
      "bigoplus;": 10753,
      "bigotimes;": 10754,
      "bigsqcup;": 10758,
      "bigstar;": 9733,
      "bigtriangledown;": 9661,
      "bigtriangleup;": 9651,
      "biguplus;": 10756,
      "bigvee;": 8897,
      "bigwedge;": 8896,
      "bkarow;": 10509,
      "blacklozenge;": 10731,
      "blacksquare;": 9642,
      "blacktriangle;": 9652,
      "blacktriangledown;": 9662,
      "blacktriangleleft;": 9666,
      "blacktriangleright;": 9656,
      "blank;": 9251,
      "blk12;": 9618,
      "blk14;": 9617,
      "blk34;": 9619,
      "block;": 9608,
      "bne;": [61, 8421],
      "bnequiv;": [8801, 8421],
      "bnot;": 8976,
      "bopf;": [55349, 56659],
      "bot;": 8869,
      "bottom;": 8869,
      "bowtie;": 8904,
      "boxDL;": 9559,
      "boxDR;": 9556,
      "boxDl;": 9558,
      "boxDr;": 9555,
      "boxH;": 9552,
      "boxHD;": 9574,
      "boxHU;": 9577,
      "boxHd;": 9572,
      "boxHu;": 9575,
      "boxUL;": 9565,
      "boxUR;": 9562,
      "boxUl;": 9564,
      "boxUr;": 9561,
      "boxV;": 9553,
      "boxVH;": 9580,
      "boxVL;": 9571,
      "boxVR;": 9568,
      "boxVh;": 9579,
      "boxVl;": 9570,
      "boxVr;": 9567,
      "boxbox;": 10697,
      "boxdL;": 9557,
      "boxdR;": 9554,
      "boxdl;": 9488,
      "boxdr;": 9484,
      "boxh;": 9472,
      "boxhD;": 9573,
      "boxhU;": 9576,
      "boxhd;": 9516,
      "boxhu;": 9524,
      "boxminus;": 8863,
      "boxplus;": 8862,
      "boxtimes;": 8864,
      "boxuL;": 9563,
      "boxuR;": 9560,
      "boxul;": 9496,
      "boxur;": 9492,
      "boxv;": 9474,
      "boxvH;": 9578,
      "boxvL;": 9569,
      "boxvR;": 9566,
      "boxvh;": 9532,
      "boxvl;": 9508,
      "boxvr;": 9500,
      "bprime;": 8245,
      "breve;": 728,
      brvbar: 166,
      "brvbar;": 166,
      "bscr;": [55349, 56503],
      "bsemi;": 8271,
      "bsim;": 8765,
      "bsime;": 8909,
      "bsol;": 92,
      "bsolb;": 10693,
      "bsolhsub;": 10184,
      "bull;": 8226,
      "bullet;": 8226,
      "bump;": 8782,
      "bumpE;": 10926,
      "bumpe;": 8783,
      "bumpeq;": 8783,
      "cacute;": 263,
      "cap;": 8745,
      "capand;": 10820,
      "capbrcup;": 10825,
      "capcap;": 10827,
      "capcup;": 10823,
      "capdot;": 10816,
      "caps;": [8745, 65024],
      "caret;": 8257,
      "caron;": 711,
      "ccaps;": 10829,
      "ccaron;": 269,
      ccedil: 231,
      "ccedil;": 231,
      "ccirc;": 265,
      "ccups;": 10828,
      "ccupssm;": 10832,
      "cdot;": 267,
      cedil: 184,
      "cedil;": 184,
      "cemptyv;": 10674,
      cent: 162,
      "cent;": 162,
      "centerdot;": 183,
      "cfr;": [55349, 56608],
      "chcy;": 1095,
      "check;": 10003,
      "checkmark;": 10003,
      "chi;": 967,
      "cir;": 9675,
      "cirE;": 10691,
      "circ;": 710,
      "circeq;": 8791,
      "circlearrowleft;": 8634,
      "circlearrowright;": 8635,
      "circledR;": 174,
      "circledS;": 9416,
      "circledast;": 8859,
      "circledcirc;": 8858,
      "circleddash;": 8861,
      "cire;": 8791,
      "cirfnint;": 10768,
      "cirmid;": 10991,
      "cirscir;": 10690,
      "clubs;": 9827,
      "clubsuit;": 9827,
      "colon;": 58,
      "colone;": 8788,
      "coloneq;": 8788,
      "comma;": 44,
      "commat;": 64,
      "comp;": 8705,
      "compfn;": 8728,
      "complement;": 8705,
      "complexes;": 8450,
      "cong;": 8773,
      "congdot;": 10861,
      "conint;": 8750,
      "copf;": [55349, 56660],
      "coprod;": 8720,
      copy: 169,
      "copy;": 169,
      "copysr;": 8471,
      "crarr;": 8629,
      "cross;": 10007,
      "cscr;": [55349, 56504],
      "csub;": 10959,
      "csube;": 10961,
      "csup;": 10960,
      "csupe;": 10962,
      "ctdot;": 8943,
      "cudarrl;": 10552,
      "cudarrr;": 10549,
      "cuepr;": 8926,
      "cuesc;": 8927,
      "cularr;": 8630,
      "cularrp;": 10557,
      "cup;": 8746,
      "cupbrcap;": 10824,
      "cupcap;": 10822,
      "cupcup;": 10826,
      "cupdot;": 8845,
      "cupor;": 10821,
      "cups;": [8746, 65024],
      "curarr;": 8631,
      "curarrm;": 10556,
      "curlyeqprec;": 8926,
      "curlyeqsucc;": 8927,
      "curlyvee;": 8910,
      "curlywedge;": 8911,
      curren: 164,
      "curren;": 164,
      "curvearrowleft;": 8630,
      "curvearrowright;": 8631,
      "cuvee;": 8910,
      "cuwed;": 8911,
      "cwconint;": 8754,
      "cwint;": 8753,
      "cylcty;": 9005,
      "dArr;": 8659,
      "dHar;": 10597,
      "dagger;": 8224,
      "daleth;": 8504,
      "darr;": 8595,
      "dash;": 8208,
      "dashv;": 8867,
      "dbkarow;": 10511,
      "dblac;": 733,
      "dcaron;": 271,
      "dcy;": 1076,
      "dd;": 8518,
      "ddagger;": 8225,
      "ddarr;": 8650,
      "ddotseq;": 10871,
      deg: 176,
      "deg;": 176,
      "delta;": 948,
      "demptyv;": 10673,
      "dfisht;": 10623,
      "dfr;": [55349, 56609],
      "dharl;": 8643,
      "dharr;": 8642,
      "diam;": 8900,
      "diamond;": 8900,
      "diamondsuit;": 9830,
      "diams;": 9830,
      "die;": 168,
      "digamma;": 989,
      "disin;": 8946,
      "div;": 247,
      divide: 247,
      "divide;": 247,
      "divideontimes;": 8903,
      "divonx;": 8903,
      "djcy;": 1106,
      "dlcorn;": 8990,
      "dlcrop;": 8973,
      "dollar;": 36,
      "dopf;": [55349, 56661],
      "dot;": 729,
      "doteq;": 8784,
      "doteqdot;": 8785,
      "dotminus;": 8760,
      "dotplus;": 8724,
      "dotsquare;": 8865,
      "doublebarwedge;": 8966,
      "downarrow;": 8595,
      "downdownarrows;": 8650,
      "downharpoonleft;": 8643,
      "downharpoonright;": 8642,
      "drbkarow;": 10512,
      "drcorn;": 8991,
      "drcrop;": 8972,
      "dscr;": [55349, 56505],
      "dscy;": 1109,
      "dsol;": 10742,
      "dstrok;": 273,
      "dtdot;": 8945,
      "dtri;": 9663,
      "dtrif;": 9662,
      "duarr;": 8693,
      "duhar;": 10607,
      "dwangle;": 10662,
      "dzcy;": 1119,
      "dzigrarr;": 10239,
      "eDDot;": 10871,
      "eDot;": 8785,
      eacute: 233,
      "eacute;": 233,
      "easter;": 10862,
      "ecaron;": 283,
      "ecir;": 8790,
      ecirc: 234,
      "ecirc;": 234,
      "ecolon;": 8789,
      "ecy;": 1101,
      "edot;": 279,
      "ee;": 8519,
      "efDot;": 8786,
      "efr;": [55349, 56610],
      "eg;": 10906,
      egrave: 232,
      "egrave;": 232,
      "egs;": 10902,
      "egsdot;": 10904,
      "el;": 10905,
      "elinters;": 9191,
      "ell;": 8467,
      "els;": 10901,
      "elsdot;": 10903,
      "emacr;": 275,
      "empty;": 8709,
      "emptyset;": 8709,
      "emptyv;": 8709,
      "emsp13;": 8196,
      "emsp14;": 8197,
      "emsp;": 8195,
      "eng;": 331,
      "ensp;": 8194,
      "eogon;": 281,
      "eopf;": [55349, 56662],
      "epar;": 8917,
      "eparsl;": 10723,
      "eplus;": 10865,
      "epsi;": 949,
      "epsilon;": 949,
      "epsiv;": 1013,
      "eqcirc;": 8790,
      "eqcolon;": 8789,
      "eqsim;": 8770,
      "eqslantgtr;": 10902,
      "eqslantless;": 10901,
      "equals;": 61,
      "equest;": 8799,
      "equiv;": 8801,
      "equivDD;": 10872,
      "eqvparsl;": 10725,
      "erDot;": 8787,
      "erarr;": 10609,
      "escr;": 8495,
      "esdot;": 8784,
      "esim;": 8770,
      "eta;": 951,
      eth: 240,
      "eth;": 240,
      euml: 235,
      "euml;": 235,
      "euro;": 8364,
      "excl;": 33,
      "exist;": 8707,
      "expectation;": 8496,
      "exponentiale;": 8519,
      "fallingdotseq;": 8786,
      "fcy;": 1092,
      "female;": 9792,
      "ffilig;": 64259,
      "fflig;": 64256,
      "ffllig;": 64260,
      "ffr;": [55349, 56611],
      "filig;": 64257,
      "fjlig;": [102, 106],
      "flat;": 9837,
      "fllig;": 64258,
      "fltns;": 9649,
      "fnof;": 402,
      "fopf;": [55349, 56663],
      "forall;": 8704,
      "fork;": 8916,
      "forkv;": 10969,
      "fpartint;": 10765,
      frac12: 189,
      "frac12;": 189,
      "frac13;": 8531,
      frac14: 188,
      "frac14;": 188,
      "frac15;": 8533,
      "frac16;": 8537,
      "frac18;": 8539,
      "frac23;": 8532,
      "frac25;": 8534,
      frac34: 190,
      "frac34;": 190,
      "frac35;": 8535,
      "frac38;": 8540,
      "frac45;": 8536,
      "frac56;": 8538,
      "frac58;": 8541,
      "frac78;": 8542,
      "frasl;": 8260,
      "frown;": 8994,
      "fscr;": [55349, 56507],
      "gE;": 8807,
      "gEl;": 10892,
      "gacute;": 501,
      "gamma;": 947,
      "gammad;": 989,
      "gap;": 10886,
      "gbreve;": 287,
      "gcirc;": 285,
      "gcy;": 1075,
      "gdot;": 289,
      "ge;": 8805,
      "gel;": 8923,
      "geq;": 8805,
      "geqq;": 8807,
      "geqslant;": 10878,
      "ges;": 10878,
      "gescc;": 10921,
      "gesdot;": 10880,
      "gesdoto;": 10882,
      "gesdotol;": 10884,
      "gesl;": [8923, 65024],
      "gesles;": 10900,
      "gfr;": [55349, 56612],
      "gg;": 8811,
      "ggg;": 8921,
      "gimel;": 8503,
      "gjcy;": 1107,
      "gl;": 8823,
      "glE;": 10898,
      "gla;": 10917,
      "glj;": 10916,
      "gnE;": 8809,
      "gnap;": 10890,
      "gnapprox;": 10890,
      "gne;": 10888,
      "gneq;": 10888,
      "gneqq;": 8809,
      "gnsim;": 8935,
      "gopf;": [55349, 56664],
      "grave;": 96,
      "gscr;": 8458,
      "gsim;": 8819,
      "gsime;": 10894,
      "gsiml;": 10896,
      gt: 62,
      "gt;": 62,
      "gtcc;": 10919,
      "gtcir;": 10874,
      "gtdot;": 8919,
      "gtlPar;": 10645,
      "gtquest;": 10876,
      "gtrapprox;": 10886,
      "gtrarr;": 10616,
      "gtrdot;": 8919,
      "gtreqless;": 8923,
      "gtreqqless;": 10892,
      "gtrless;": 8823,
      "gtrsim;": 8819,
      "gvertneqq;": [8809, 65024],
      "gvnE;": [8809, 65024],
      "hArr;": 8660,
      "hairsp;": 8202,
      "half;": 189,
      "hamilt;": 8459,
      "hardcy;": 1098,
      "harr;": 8596,
      "harrcir;": 10568,
      "harrw;": 8621,
      "hbar;": 8463,
      "hcirc;": 293,
      "hearts;": 9829,
      "heartsuit;": 9829,
      "hellip;": 8230,
      "hercon;": 8889,
      "hfr;": [55349, 56613],
      "hksearow;": 10533,
      "hkswarow;": 10534,
      "hoarr;": 8703,
      "homtht;": 8763,
      "hookleftarrow;": 8617,
      "hookrightarrow;": 8618,
      "hopf;": [55349, 56665],
      "horbar;": 8213,
      "hscr;": [55349, 56509],
      "hslash;": 8463,
      "hstrok;": 295,
      "hybull;": 8259,
      "hyphen;": 8208,
      iacute: 237,
      "iacute;": 237,
      "ic;": 8291,
      icirc: 238,
      "icirc;": 238,
      "icy;": 1080,
      "iecy;": 1077,
      iexcl: 161,
      "iexcl;": 161,
      "iff;": 8660,
      "ifr;": [55349, 56614],
      igrave: 236,
      "igrave;": 236,
      "ii;": 8520,
      "iiiint;": 10764,
      "iiint;": 8749,
      "iinfin;": 10716,
      "iiota;": 8489,
      "ijlig;": 307,
      "imacr;": 299,
      "image;": 8465,
      "imagline;": 8464,
      "imagpart;": 8465,
      "imath;": 305,
      "imof;": 8887,
      "imped;": 437,
      "in;": 8712,
      "incare;": 8453,
      "infin;": 8734,
      "infintie;": 10717,
      "inodot;": 305,
      "int;": 8747,
      "intcal;": 8890,
      "integers;": 8484,
      "intercal;": 8890,
      "intlarhk;": 10775,
      "intprod;": 10812,
      "iocy;": 1105,
      "iogon;": 303,
      "iopf;": [55349, 56666],
      "iota;": 953,
      "iprod;": 10812,
      iquest: 191,
      "iquest;": 191,
      "iscr;": [55349, 56510],
      "isin;": 8712,
      "isinE;": 8953,
      "isindot;": 8949,
      "isins;": 8948,
      "isinsv;": 8947,
      "isinv;": 8712,
      "it;": 8290,
      "itilde;": 297,
      "iukcy;": 1110,
      iuml: 239,
      "iuml;": 239,
      "jcirc;": 309,
      "jcy;": 1081,
      "jfr;": [55349, 56615],
      "jmath;": 567,
      "jopf;": [55349, 56667],
      "jscr;": [55349, 56511],
      "jsercy;": 1112,
      "jukcy;": 1108,
      "kappa;": 954,
      "kappav;": 1008,
      "kcedil;": 311,
      "kcy;": 1082,
      "kfr;": [55349, 56616],
      "kgreen;": 312,
      "khcy;": 1093,
      "kjcy;": 1116,
      "kopf;": [55349, 56668],
      "kscr;": [55349, 56512],
      "lAarr;": 8666,
      "lArr;": 8656,
      "lAtail;": 10523,
      "lBarr;": 10510,
      "lE;": 8806,
      "lEg;": 10891,
      "lHar;": 10594,
      "lacute;": 314,
      "laemptyv;": 10676,
      "lagran;": 8466,
      "lambda;": 955,
      "lang;": 10216,
      "langd;": 10641,
      "langle;": 10216,
      "lap;": 10885,
      laquo: 171,
      "laquo;": 171,
      "larr;": 8592,
      "larrb;": 8676,
      "larrbfs;": 10527,
      "larrfs;": 10525,
      "larrhk;": 8617,
      "larrlp;": 8619,
      "larrpl;": 10553,
      "larrsim;": 10611,
      "larrtl;": 8610,
      "lat;": 10923,
      "latail;": 10521,
      "late;": 10925,
      "lates;": [10925, 65024],
      "lbarr;": 10508,
      "lbbrk;": 10098,
      "lbrace;": 123,
      "lbrack;": 91,
      "lbrke;": 10635,
      "lbrksld;": 10639,
      "lbrkslu;": 10637,
      "lcaron;": 318,
      "lcedil;": 316,
      "lceil;": 8968,
      "lcub;": 123,
      "lcy;": 1083,
      "ldca;": 10550,
      "ldquo;": 8220,
      "ldquor;": 8222,
      "ldrdhar;": 10599,
      "ldrushar;": 10571,
      "ldsh;": 8626,
      "le;": 8804,
      "leftarrow;": 8592,
      "leftarrowtail;": 8610,
      "leftharpoondown;": 8637,
      "leftharpoonup;": 8636,
      "leftleftarrows;": 8647,
      "leftrightarrow;": 8596,
      "leftrightarrows;": 8646,
      "leftrightharpoons;": 8651,
      "leftrightsquigarrow;": 8621,
      "leftthreetimes;": 8907,
      "leg;": 8922,
      "leq;": 8804,
      "leqq;": 8806,
      "leqslant;": 10877,
      "les;": 10877,
      "lescc;": 10920,
      "lesdot;": 10879,
      "lesdoto;": 10881,
      "lesdotor;": 10883,
      "lesg;": [8922, 65024],
      "lesges;": 10899,
      "lessapprox;": 10885,
      "lessdot;": 8918,
      "lesseqgtr;": 8922,
      "lesseqqgtr;": 10891,
      "lessgtr;": 8822,
      "lesssim;": 8818,
      "lfisht;": 10620,
      "lfloor;": 8970,
      "lfr;": [55349, 56617],
      "lg;": 8822,
      "lgE;": 10897,
      "lhard;": 8637,
      "lharu;": 8636,
      "lharul;": 10602,
      "lhblk;": 9604,
      "ljcy;": 1113,
      "ll;": 8810,
      "llarr;": 8647,
      "llcorner;": 8990,
      "llhard;": 10603,
      "lltri;": 9722,
      "lmidot;": 320,
      "lmoust;": 9136,
      "lmoustache;": 9136,
      "lnE;": 8808,
      "lnap;": 10889,
      "lnapprox;": 10889,
      "lne;": 10887,
      "lneq;": 10887,
      "lneqq;": 8808,
      "lnsim;": 8934,
      "loang;": 10220,
      "loarr;": 8701,
      "lobrk;": 10214,
      "longleftarrow;": 10229,
      "longleftrightarrow;": 10231,
      "longmapsto;": 10236,
      "longrightarrow;": 10230,
      "looparrowleft;": 8619,
      "looparrowright;": 8620,
      "lopar;": 10629,
      "lopf;": [55349, 56669],
      "loplus;": 10797,
      "lotimes;": 10804,
      "lowast;": 8727,
      "lowbar;": 95,
      "loz;": 9674,
      "lozenge;": 9674,
      "lozf;": 10731,
      "lpar;": 40,
      "lparlt;": 10643,
      "lrarr;": 8646,
      "lrcorner;": 8991,
      "lrhar;": 8651,
      "lrhard;": 10605,
      "lrm;": 8206,
      "lrtri;": 8895,
      "lsaquo;": 8249,
      "lscr;": [55349, 56513],
      "lsh;": 8624,
      "lsim;": 8818,
      "lsime;": 10893,
      "lsimg;": 10895,
      "lsqb;": 91,
      "lsquo;": 8216,
      "lsquor;": 8218,
      "lstrok;": 322,
      lt: 60,
      "lt;": 60,
      "ltcc;": 10918,
      "ltcir;": 10873,
      "ltdot;": 8918,
      "lthree;": 8907,
      "ltimes;": 8905,
      "ltlarr;": 10614,
      "ltquest;": 10875,
      "ltrPar;": 10646,
      "ltri;": 9667,
      "ltrie;": 8884,
      "ltrif;": 9666,
      "lurdshar;": 10570,
      "luruhar;": 10598,
      "lvertneqq;": [8808, 65024],
      "lvnE;": [8808, 65024],
      "mDDot;": 8762,
      macr: 175,
      "macr;": 175,
      "male;": 9794,
      "malt;": 10016,
      "maltese;": 10016,
      "map;": 8614,
      "mapsto;": 8614,
      "mapstodown;": 8615,
      "mapstoleft;": 8612,
      "mapstoup;": 8613,
      "marker;": 9646,
      "mcomma;": 10793,
      "mcy;": 1084,
      "mdash;": 8212,
      "measuredangle;": 8737,
      "mfr;": [55349, 56618],
      "mho;": 8487,
      micro: 181,
      "micro;": 181,
      "mid;": 8739,
      "midast;": 42,
      "midcir;": 10992,
      middot: 183,
      "middot;": 183,
      "minus;": 8722,
      "minusb;": 8863,
      "minusd;": 8760,
      "minusdu;": 10794,
      "mlcp;": 10971,
      "mldr;": 8230,
      "mnplus;": 8723,
      "models;": 8871,
      "mopf;": [55349, 56670],
      "mp;": 8723,
      "mscr;": [55349, 56514],
      "mstpos;": 8766,
      "mu;": 956,
      "multimap;": 8888,
      "mumap;": 8888,
      "nGg;": [8921, 824],
      "nGt;": [8811, 8402],
      "nGtv;": [8811, 824],
      "nLeftarrow;": 8653,
      "nLeftrightarrow;": 8654,
      "nLl;": [8920, 824],
      "nLt;": [8810, 8402],
      "nLtv;": [8810, 824],
      "nRightarrow;": 8655,
      "nVDash;": 8879,
      "nVdash;": 8878,
      "nabla;": 8711,
      "nacute;": 324,
      "nang;": [8736, 8402],
      "nap;": 8777,
      "napE;": [10864, 824],
      "napid;": [8779, 824],
      "napos;": 329,
      "napprox;": 8777,
      "natur;": 9838,
      "natural;": 9838,
      "naturals;": 8469,
      nbsp: 160,
      "nbsp;": 160,
      "nbump;": [8782, 824],
      "nbumpe;": [8783, 824],
      "ncap;": 10819,
      "ncaron;": 328,
      "ncedil;": 326,
      "ncong;": 8775,
      "ncongdot;": [10861, 824],
      "ncup;": 10818,
      "ncy;": 1085,
      "ndash;": 8211,
      "ne;": 8800,
      "neArr;": 8663,
      "nearhk;": 10532,
      "nearr;": 8599,
      "nearrow;": 8599,
      "nedot;": [8784, 824],
      "nequiv;": 8802,
      "nesear;": 10536,
      "nesim;": [8770, 824],
      "nexist;": 8708,
      "nexists;": 8708,
      "nfr;": [55349, 56619],
      "ngE;": [8807, 824],
      "nge;": 8817,
      "ngeq;": 8817,
      "ngeqq;": [8807, 824],
      "ngeqslant;": [10878, 824],
      "nges;": [10878, 824],
      "ngsim;": 8821,
      "ngt;": 8815,
      "ngtr;": 8815,
      "nhArr;": 8654,
      "nharr;": 8622,
      "nhpar;": 10994,
      "ni;": 8715,
      "nis;": 8956,
      "nisd;": 8954,
      "niv;": 8715,
      "njcy;": 1114,
      "nlArr;": 8653,
      "nlE;": [8806, 824],
      "nlarr;": 8602,
      "nldr;": 8229,
      "nle;": 8816,
      "nleftarrow;": 8602,
      "nleftrightarrow;": 8622,
      "nleq;": 8816,
      "nleqq;": [8806, 824],
      "nleqslant;": [10877, 824],
      "nles;": [10877, 824],
      "nless;": 8814,
      "nlsim;": 8820,
      "nlt;": 8814,
      "nltri;": 8938,
      "nltrie;": 8940,
      "nmid;": 8740,
      "nopf;": [55349, 56671],
      not: 172,
      "not;": 172,
      "notin;": 8713,
      "notinE;": [8953, 824],
      "notindot;": [8949, 824],
      "notinva;": 8713,
      "notinvb;": 8951,
      "notinvc;": 8950,
      "notni;": 8716,
      "notniva;": 8716,
      "notnivb;": 8958,
      "notnivc;": 8957,
      "npar;": 8742,
      "nparallel;": 8742,
      "nparsl;": [11005, 8421],
      "npart;": [8706, 824],
      "npolint;": 10772,
      "npr;": 8832,
      "nprcue;": 8928,
      "npre;": [10927, 824],
      "nprec;": 8832,
      "npreceq;": [10927, 824],
      "nrArr;": 8655,
      "nrarr;": 8603,
      "nrarrc;": [10547, 824],
      "nrarrw;": [8605, 824],
      "nrightarrow;": 8603,
      "nrtri;": 8939,
      "nrtrie;": 8941,
      "nsc;": 8833,
      "nsccue;": 8929,
      "nsce;": [10928, 824],
      "nscr;": [55349, 56515],
      "nshortmid;": 8740,
      "nshortparallel;": 8742,
      "nsim;": 8769,
      "nsime;": 8772,
      "nsimeq;": 8772,
      "nsmid;": 8740,
      "nspar;": 8742,
      "nsqsube;": 8930,
      "nsqsupe;": 8931,
      "nsub;": 8836,
      "nsubE;": [10949, 824],
      "nsube;": 8840,
      "nsubset;": [8834, 8402],
      "nsubseteq;": 8840,
      "nsubseteqq;": [10949, 824],
      "nsucc;": 8833,
      "nsucceq;": [10928, 824],
      "nsup;": 8837,
      "nsupE;": [10950, 824],
      "nsupe;": 8841,
      "nsupset;": [8835, 8402],
      "nsupseteq;": 8841,
      "nsupseteqq;": [10950, 824],
      "ntgl;": 8825,
      ntilde: 241,
      "ntilde;": 241,
      "ntlg;": 8824,
      "ntriangleleft;": 8938,
      "ntrianglelefteq;": 8940,
      "ntriangleright;": 8939,
      "ntrianglerighteq;": 8941,
      "nu;": 957,
      "num;": 35,
      "numero;": 8470,
      "numsp;": 8199,
      "nvDash;": 8877,
      "nvHarr;": 10500,
      "nvap;": [8781, 8402],
      "nvdash;": 8876,
      "nvge;": [8805, 8402],
      "nvgt;": [62, 8402],
      "nvinfin;": 10718,
      "nvlArr;": 10498,
      "nvle;": [8804, 8402],
      "nvlt;": [60, 8402],
      "nvltrie;": [8884, 8402],
      "nvrArr;": 10499,
      "nvrtrie;": [8885, 8402],
      "nvsim;": [8764, 8402],
      "nwArr;": 8662,
      "nwarhk;": 10531,
      "nwarr;": 8598,
      "nwarrow;": 8598,
      "nwnear;": 10535,
      "oS;": 9416,
      oacute: 243,
      "oacute;": 243,
      "oast;": 8859,
      "ocir;": 8858,
      ocirc: 244,
      "ocirc;": 244,
      "ocy;": 1086,
      "odash;": 8861,
      "odblac;": 337,
      "odiv;": 10808,
      "odot;": 8857,
      "odsold;": 10684,
      "oelig;": 339,
      "ofcir;": 10687,
      "ofr;": [55349, 56620],
      "ogon;": 731,
      ograve: 242,
      "ograve;": 242,
      "ogt;": 10689,
      "ohbar;": 10677,
      "ohm;": 937,
      "oint;": 8750,
      "olarr;": 8634,
      "olcir;": 10686,
      "olcross;": 10683,
      "oline;": 8254,
      "olt;": 10688,
      "omacr;": 333,
      "omega;": 969,
      "omicron;": 959,
      "omid;": 10678,
      "ominus;": 8854,
      "oopf;": [55349, 56672],
      "opar;": 10679,
      "operp;": 10681,
      "oplus;": 8853,
      "or;": 8744,
      "orarr;": 8635,
      "ord;": 10845,
      "order;": 8500,
      "orderof;": 8500,
      ordf: 170,
      "ordf;": 170,
      ordm: 186,
      "ordm;": 186,
      "origof;": 8886,
      "oror;": 10838,
      "orslope;": 10839,
      "orv;": 10843,
      "oscr;": 8500,
      oslash: 248,
      "oslash;": 248,
      "osol;": 8856,
      otilde: 245,
      "otilde;": 245,
      "otimes;": 8855,
      "otimesas;": 10806,
      ouml: 246,
      "ouml;": 246,
      "ovbar;": 9021,
      "par;": 8741,
      para: 182,
      "para;": 182,
      "parallel;": 8741,
      "parsim;": 10995,
      "parsl;": 11005,
      "part;": 8706,
      "pcy;": 1087,
      "percnt;": 37,
      "period;": 46,
      "permil;": 8240,
      "perp;": 8869,
      "pertenk;": 8241,
      "pfr;": [55349, 56621],
      "phi;": 966,
      "phiv;": 981,
      "phmmat;": 8499,
      "phone;": 9742,
      "pi;": 960,
      "pitchfork;": 8916,
      "piv;": 982,
      "planck;": 8463,
      "planckh;": 8462,
      "plankv;": 8463,
      "plus;": 43,
      "plusacir;": 10787,
      "plusb;": 8862,
      "pluscir;": 10786,
      "plusdo;": 8724,
      "plusdu;": 10789,
      "pluse;": 10866,
      plusmn: 177,
      "plusmn;": 177,
      "plussim;": 10790,
      "plustwo;": 10791,
      "pm;": 177,
      "pointint;": 10773,
      "popf;": [55349, 56673],
      pound: 163,
      "pound;": 163,
      "pr;": 8826,
      "prE;": 10931,
      "prap;": 10935,
      "prcue;": 8828,
      "pre;": 10927,
      "prec;": 8826,
      "precapprox;": 10935,
      "preccurlyeq;": 8828,
      "preceq;": 10927,
      "precnapprox;": 10937,
      "precneqq;": 10933,
      "precnsim;": 8936,
      "precsim;": 8830,
      "prime;": 8242,
      "primes;": 8473,
      "prnE;": 10933,
      "prnap;": 10937,
      "prnsim;": 8936,
      "prod;": 8719,
      "profalar;": 9006,
      "profline;": 8978,
      "profsurf;": 8979,
      "prop;": 8733,
      "propto;": 8733,
      "prsim;": 8830,
      "prurel;": 8880,
      "pscr;": [55349, 56517],
      "psi;": 968,
      "puncsp;": 8200,
      "qfr;": [55349, 56622],
      "qint;": 10764,
      "qopf;": [55349, 56674],
      "qprime;": 8279,
      "qscr;": [55349, 56518],
      "quaternions;": 8461,
      "quatint;": 10774,
      "quest;": 63,
      "questeq;": 8799,
      quot: 34,
      "quot;": 34,
      "rAarr;": 8667,
      "rArr;": 8658,
      "rAtail;": 10524,
      "rBarr;": 10511,
      "rHar;": 10596,
      "race;": [8765, 817],
      "racute;": 341,
      "radic;": 8730,
      "raemptyv;": 10675,
      "rang;": 10217,
      "rangd;": 10642,
      "range;": 10661,
      "rangle;": 10217,
      raquo: 187,
      "raquo;": 187,
      "rarr;": 8594,
      "rarrap;": 10613,
      "rarrb;": 8677,
      "rarrbfs;": 10528,
      "rarrc;": 10547,
      "rarrfs;": 10526,
      "rarrhk;": 8618,
      "rarrlp;": 8620,
      "rarrpl;": 10565,
      "rarrsim;": 10612,
      "rarrtl;": 8611,
      "rarrw;": 8605,
      "ratail;": 10522,
      "ratio;": 8758,
      "rationals;": 8474,
      "rbarr;": 10509,
      "rbbrk;": 10099,
      "rbrace;": 125,
      "rbrack;": 93,
      "rbrke;": 10636,
      "rbrksld;": 10638,
      "rbrkslu;": 10640,
      "rcaron;": 345,
      "rcedil;": 343,
      "rceil;": 8969,
      "rcub;": 125,
      "rcy;": 1088,
      "rdca;": 10551,
      "rdldhar;": 10601,
      "rdquo;": 8221,
      "rdquor;": 8221,
      "rdsh;": 8627,
      "real;": 8476,
      "realine;": 8475,
      "realpart;": 8476,
      "reals;": 8477,
      "rect;": 9645,
      reg: 174,
      "reg;": 174,
      "rfisht;": 10621,
      "rfloor;": 8971,
      "rfr;": [55349, 56623],
      "rhard;": 8641,
      "rharu;": 8640,
      "rharul;": 10604,
      "rho;": 961,
      "rhov;": 1009,
      "rightarrow;": 8594,
      "rightarrowtail;": 8611,
      "rightharpoondown;": 8641,
      "rightharpoonup;": 8640,
      "rightleftarrows;": 8644,
      "rightleftharpoons;": 8652,
      "rightrightarrows;": 8649,
      "rightsquigarrow;": 8605,
      "rightthreetimes;": 8908,
      "ring;": 730,
      "risingdotseq;": 8787,
      "rlarr;": 8644,
      "rlhar;": 8652,
      "rlm;": 8207,
      "rmoust;": 9137,
      "rmoustache;": 9137,
      "rnmid;": 10990,
      "roang;": 10221,
      "roarr;": 8702,
      "robrk;": 10215,
      "ropar;": 10630,
      "ropf;": [55349, 56675],
      "roplus;": 10798,
      "rotimes;": 10805,
      "rpar;": 41,
      "rpargt;": 10644,
      "rppolint;": 10770,
      "rrarr;": 8649,
      "rsaquo;": 8250,
      "rscr;": [55349, 56519],
      "rsh;": 8625,
      "rsqb;": 93,
      "rsquo;": 8217,
      "rsquor;": 8217,
      "rthree;": 8908,
      "rtimes;": 8906,
      "rtri;": 9657,
      "rtrie;": 8885,
      "rtrif;": 9656,
      "rtriltri;": 10702,
      "ruluhar;": 10600,
      "rx;": 8478,
      "sacute;": 347,
      "sbquo;": 8218,
      "sc;": 8827,
      "scE;": 10932,
      "scap;": 10936,
      "scaron;": 353,
      "sccue;": 8829,
      "sce;": 10928,
      "scedil;": 351,
      "scirc;": 349,
      "scnE;": 10934,
      "scnap;": 10938,
      "scnsim;": 8937,
      "scpolint;": 10771,
      "scsim;": 8831,
      "scy;": 1089,
      "sdot;": 8901,
      "sdotb;": 8865,
      "sdote;": 10854,
      "seArr;": 8664,
      "searhk;": 10533,
      "searr;": 8600,
      "searrow;": 8600,
      sect: 167,
      "sect;": 167,
      "semi;": 59,
      "seswar;": 10537,
      "setminus;": 8726,
      "setmn;": 8726,
      "sext;": 10038,
      "sfr;": [55349, 56624],
      "sfrown;": 8994,
      "sharp;": 9839,
      "shchcy;": 1097,
      "shcy;": 1096,
      "shortmid;": 8739,
      "shortparallel;": 8741,
      shy: 173,
      "shy;": 173,
      "sigma;": 963,
      "sigmaf;": 962,
      "sigmav;": 962,
      "sim;": 8764,
      "simdot;": 10858,
      "sime;": 8771,
      "simeq;": 8771,
      "simg;": 10910,
      "simgE;": 10912,
      "siml;": 10909,
      "simlE;": 10911,
      "simne;": 8774,
      "simplus;": 10788,
      "simrarr;": 10610,
      "slarr;": 8592,
      "smallsetminus;": 8726,
      "smashp;": 10803,
      "smeparsl;": 10724,
      "smid;": 8739,
      "smile;": 8995,
      "smt;": 10922,
      "smte;": 10924,
      "smtes;": [10924, 65024],
      "softcy;": 1100,
      "sol;": 47,
      "solb;": 10692,
      "solbar;": 9023,
      "sopf;": [55349, 56676],
      "spades;": 9824,
      "spadesuit;": 9824,
      "spar;": 8741,
      "sqcap;": 8851,
      "sqcaps;": [8851, 65024],
      "sqcup;": 8852,
      "sqcups;": [8852, 65024],
      "sqsub;": 8847,
      "sqsube;": 8849,
      "sqsubset;": 8847,
      "sqsubseteq;": 8849,
      "sqsup;": 8848,
      "sqsupe;": 8850,
      "sqsupset;": 8848,
      "sqsupseteq;": 8850,
      "squ;": 9633,
      "square;": 9633,
      "squarf;": 9642,
      "squf;": 9642,
      "srarr;": 8594,
      "sscr;": [55349, 56520],
      "ssetmn;": 8726,
      "ssmile;": 8995,
      "sstarf;": 8902,
      "star;": 9734,
      "starf;": 9733,
      "straightepsilon;": 1013,
      "straightphi;": 981,
      "strns;": 175,
      "sub;": 8834,
      "subE;": 10949,
      "subdot;": 10941,
      "sube;": 8838,
      "subedot;": 10947,
      "submult;": 10945,
      "subnE;": 10955,
      "subne;": 8842,
      "subplus;": 10943,
      "subrarr;": 10617,
      "subset;": 8834,
      "subseteq;": 8838,
      "subseteqq;": 10949,
      "subsetneq;": 8842,
      "subsetneqq;": 10955,
      "subsim;": 10951,
      "subsub;": 10965,
      "subsup;": 10963,
      "succ;": 8827,
      "succapprox;": 10936,
      "succcurlyeq;": 8829,
      "succeq;": 10928,
      "succnapprox;": 10938,
      "succneqq;": 10934,
      "succnsim;": 8937,
      "succsim;": 8831,
      "sum;": 8721,
      "sung;": 9834,
      sup1: 185,
      "sup1;": 185,
      sup2: 178,
      "sup2;": 178,
      sup3: 179,
      "sup3;": 179,
      "sup;": 8835,
      "supE;": 10950,
      "supdot;": 10942,
      "supdsub;": 10968,
      "supe;": 8839,
      "supedot;": 10948,
      "suphsol;": 10185,
      "suphsub;": 10967,
      "suplarr;": 10619,
      "supmult;": 10946,
      "supnE;": 10956,
      "supne;": 8843,
      "supplus;": 10944,
      "supset;": 8835,
      "supseteq;": 8839,
      "supseteqq;": 10950,
      "supsetneq;": 8843,
      "supsetneqq;": 10956,
      "supsim;": 10952,
      "supsub;": 10964,
      "supsup;": 10966,
      "swArr;": 8665,
      "swarhk;": 10534,
      "swarr;": 8601,
      "swarrow;": 8601,
      "swnwar;": 10538,
      szlig: 223,
      "szlig;": 223,
      "target;": 8982,
      "tau;": 964,
      "tbrk;": 9140,
      "tcaron;": 357,
      "tcedil;": 355,
      "tcy;": 1090,
      "tdot;": 8411,
      "telrec;": 8981,
      "tfr;": [55349, 56625],
      "there4;": 8756,
      "therefore;": 8756,
      "theta;": 952,
      "thetasym;": 977,
      "thetav;": 977,
      "thickapprox;": 8776,
      "thicksim;": 8764,
      "thinsp;": 8201,
      "thkap;": 8776,
      "thksim;": 8764,
      thorn: 254,
      "thorn;": 254,
      "tilde;": 732,
      times: 215,
      "times;": 215,
      "timesb;": 8864,
      "timesbar;": 10801,
      "timesd;": 10800,
      "tint;": 8749,
      "toea;": 10536,
      "top;": 8868,
      "topbot;": 9014,
      "topcir;": 10993,
      "topf;": [55349, 56677],
      "topfork;": 10970,
      "tosa;": 10537,
      "tprime;": 8244,
      "trade;": 8482,
      "triangle;": 9653,
      "triangledown;": 9663,
      "triangleleft;": 9667,
      "trianglelefteq;": 8884,
      "triangleq;": 8796,
      "triangleright;": 9657,
      "trianglerighteq;": 8885,
      "tridot;": 9708,
      "trie;": 8796,
      "triminus;": 10810,
      "triplus;": 10809,
      "trisb;": 10701,
      "tritime;": 10811,
      "trpezium;": 9186,
      "tscr;": [55349, 56521],
      "tscy;": 1094,
      "tshcy;": 1115,
      "tstrok;": 359,
      "twixt;": 8812,
      "twoheadleftarrow;": 8606,
      "twoheadrightarrow;": 8608,
      "uArr;": 8657,
      "uHar;": 10595,
      uacute: 250,
      "uacute;": 250,
      "uarr;": 8593,
      "ubrcy;": 1118,
      "ubreve;": 365,
      ucirc: 251,
      "ucirc;": 251,
      "ucy;": 1091,
      "udarr;": 8645,
      "udblac;": 369,
      "udhar;": 10606,
      "ufisht;": 10622,
      "ufr;": [55349, 56626],
      ugrave: 249,
      "ugrave;": 249,
      "uharl;": 8639,
      "uharr;": 8638,
      "uhblk;": 9600,
      "ulcorn;": 8988,
      "ulcorner;": 8988,
      "ulcrop;": 8975,
      "ultri;": 9720,
      "umacr;": 363,
      uml: 168,
      "uml;": 168,
      "uogon;": 371,
      "uopf;": [55349, 56678],
      "uparrow;": 8593,
      "updownarrow;": 8597,
      "upharpoonleft;": 8639,
      "upharpoonright;": 8638,
      "uplus;": 8846,
      "upsi;": 965,
      "upsih;": 978,
      "upsilon;": 965,
      "upuparrows;": 8648,
      "urcorn;": 8989,
      "urcorner;": 8989,
      "urcrop;": 8974,
      "uring;": 367,
      "urtri;": 9721,
      "uscr;": [55349, 56522],
      "utdot;": 8944,
      "utilde;": 361,
      "utri;": 9653,
      "utrif;": 9652,
      "uuarr;": 8648,
      uuml: 252,
      "uuml;": 252,
      "uwangle;": 10663,
      "vArr;": 8661,
      "vBar;": 10984,
      "vBarv;": 10985,
      "vDash;": 8872,
      "vangrt;": 10652,
      "varepsilon;": 1013,
      "varkappa;": 1008,
      "varnothing;": 8709,
      "varphi;": 981,
      "varpi;": 982,
      "varpropto;": 8733,
      "varr;": 8597,
      "varrho;": 1009,
      "varsigma;": 962,
      "varsubsetneq;": [8842, 65024],
      "varsubsetneqq;": [10955, 65024],
      "varsupsetneq;": [8843, 65024],
      "varsupsetneqq;": [10956, 65024],
      "vartheta;": 977,
      "vartriangleleft;": 8882,
      "vartriangleright;": 8883,
      "vcy;": 1074,
      "vdash;": 8866,
      "vee;": 8744,
      "veebar;": 8891,
      "veeeq;": 8794,
      "vellip;": 8942,
      "verbar;": 124,
      "vert;": 124,
      "vfr;": [55349, 56627],
      "vltri;": 8882,
      "vnsub;": [8834, 8402],
      "vnsup;": [8835, 8402],
      "vopf;": [55349, 56679],
      "vprop;": 8733,
      "vrtri;": 8883,
      "vscr;": [55349, 56523],
      "vsubnE;": [10955, 65024],
      "vsubne;": [8842, 65024],
      "vsupnE;": [10956, 65024],
      "vsupne;": [8843, 65024],
      "vzigzag;": 10650,
      "wcirc;": 373,
      "wedbar;": 10847,
      "wedge;": 8743,
      "wedgeq;": 8793,
      "weierp;": 8472,
      "wfr;": [55349, 56628],
      "wopf;": [55349, 56680],
      "wp;": 8472,
      "wr;": 8768,
      "wreath;": 8768,
      "wscr;": [55349, 56524],
      "xcap;": 8898,
      "xcirc;": 9711,
      "xcup;": 8899,
      "xdtri;": 9661,
      "xfr;": [55349, 56629],
      "xhArr;": 10234,
      "xharr;": 10231,
      "xi;": 958,
      "xlArr;": 10232,
      "xlarr;": 10229,
      "xmap;": 10236,
      "xnis;": 8955,
      "xodot;": 10752,
      "xopf;": [55349, 56681],
      "xoplus;": 10753,
      "xotime;": 10754,
      "xrArr;": 10233,
      "xrarr;": 10230,
      "xscr;": [55349, 56525],
      "xsqcup;": 10758,
      "xuplus;": 10756,
      "xutri;": 9651,
      "xvee;": 8897,
      "xwedge;": 8896,
      yacute: 253,
      "yacute;": 253,
      "yacy;": 1103,
      "ycirc;": 375,
      "ycy;": 1099,
      yen: 165,
      "yen;": 165,
      "yfr;": [55349, 56630],
      "yicy;": 1111,
      "yopf;": [55349, 56682],
      "yscr;": [55349, 56526],
      "yucy;": 1102,
      yuml: 255,
      "yuml;": 255,
      "zacute;": 378,
      "zcaron;": 382,
      "zcy;": 1079,
      "zdot;": 380,
      "zeetrf;": 8488,
      "zeta;": 950,
      "zfr;": [55349, 56631],
      "zhcy;": 1078,
      "zigrarr;": 8669,
      "zopf;": [55349, 56683],
      "zscr;": [55349, 56527],
      "zwj;": 8205,
      "zwnj;": 8204
    },
    LYK = /(A(?:Elig;?|MP;?|acute;?|breve;|c(?:irc;?|y;)|fr;|grave;?|lpha;|macr;|nd;|o(?:gon;|pf;)|pplyFunction;|ring;?|s(?:cr;|sign;)|tilde;?|uml;?)|B(?:a(?:ckslash;|r(?:v;|wed;))|cy;|e(?:cause;|rnoullis;|ta;)|fr;|opf;|reve;|scr;|umpeq;)|C(?:Hcy;|OPY;?|a(?:cute;|p(?:;|italDifferentialD;)|yleys;)|c(?:aron;|edil;?|irc;|onint;)|dot;|e(?:dilla;|nterDot;)|fr;|hi;|ircle(?:Dot;|Minus;|Plus;|Times;)|lo(?:ckwiseContourIntegral;|seCurly(?:DoubleQuote;|Quote;))|o(?:lon(?:;|e;)|n(?:gruent;|int;|tourIntegral;)|p(?:f;|roduct;)|unterClockwiseContourIntegral;)|ross;|scr;|up(?:;|Cap;))|D(?:D(?:;|otrahd;)|Jcy;|Scy;|Zcy;|a(?:gger;|rr;|shv;)|c(?:aron;|y;)|el(?:;|ta;)|fr;|i(?:a(?:critical(?:Acute;|Do(?:t;|ubleAcute;)|Grave;|Tilde;)|mond;)|fferentialD;)|o(?:pf;|t(?:;|Dot;|Equal;)|uble(?:ContourIntegral;|Do(?:t;|wnArrow;)|L(?:eft(?:Arrow;|RightArrow;|Tee;)|ong(?:Left(?:Arrow;|RightArrow;)|RightArrow;))|Right(?:Arrow;|Tee;)|Up(?:Arrow;|DownArrow;)|VerticalBar;)|wn(?:Arrow(?:;|Bar;|UpArrow;)|Breve;|Left(?:RightVector;|TeeVector;|Vector(?:;|Bar;))|Right(?:TeeVector;|Vector(?:;|Bar;))|Tee(?:;|Arrow;)|arrow;))|s(?:cr;|trok;))|E(?:NG;|TH;?|acute;?|c(?:aron;|irc;?|y;)|dot;|fr;|grave;?|lement;|m(?:acr;|pty(?:SmallSquare;|VerySmallSquare;))|o(?:gon;|pf;)|psilon;|qu(?:al(?:;|Tilde;)|ilibrium;)|s(?:cr;|im;)|ta;|uml;?|x(?:ists;|ponentialE;))|F(?:cy;|fr;|illed(?:SmallSquare;|VerySmallSquare;)|o(?:pf;|rAll;|uriertrf;)|scr;)|G(?:Jcy;|T;?|amma(?:;|d;)|breve;|c(?:edil;|irc;|y;)|dot;|fr;|g;|opf;|reater(?:Equal(?:;|Less;)|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|scr;|t;)|H(?:ARDcy;|a(?:cek;|t;)|circ;|fr;|ilbertSpace;|o(?:pf;|rizontalLine;)|s(?:cr;|trok;)|ump(?:DownHump;|Equal;))|I(?:Ecy;|Jlig;|Ocy;|acute;?|c(?:irc;?|y;)|dot;|fr;|grave;?|m(?:;|a(?:cr;|ginaryI;)|plies;)|n(?:t(?:;|e(?:gral;|rsection;))|visible(?:Comma;|Times;))|o(?:gon;|pf;|ta;)|scr;|tilde;|u(?:kcy;|ml;?))|J(?:c(?:irc;|y;)|fr;|opf;|s(?:cr;|ercy;)|ukcy;)|K(?:Hcy;|Jcy;|appa;|c(?:edil;|y;)|fr;|opf;|scr;)|L(?:Jcy;|T;?|a(?:cute;|mbda;|ng;|placetrf;|rr;)|c(?:aron;|edil;|y;)|e(?:ft(?:A(?:ngleBracket;|rrow(?:;|Bar;|RightArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|Right(?:Arrow;|Vector;)|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;|rightarrow;)|ss(?:EqualGreater;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;))|fr;|l(?:;|eftarrow;)|midot;|o(?:ng(?:Left(?:Arrow;|RightArrow;)|RightArrow;|left(?:arrow;|rightarrow;)|rightarrow;)|pf;|wer(?:LeftArrow;|RightArrow;))|s(?:cr;|h;|trok;)|t;)|M(?:ap;|cy;|e(?:diumSpace;|llintrf;)|fr;|inusPlus;|opf;|scr;|u;)|N(?:Jcy;|acute;|c(?:aron;|edil;|y;)|e(?:gative(?:MediumSpace;|Thi(?:ckSpace;|nSpace;)|VeryThinSpace;)|sted(?:GreaterGreater;|LessLess;)|wLine;)|fr;|o(?:Break;|nBreakingSpace;|pf;|t(?:;|C(?:ongruent;|upCap;)|DoubleVerticalBar;|E(?:lement;|qual(?:;|Tilde;)|xists;)|Greater(?:;|Equal;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|Hump(?:DownHump;|Equal;)|Le(?:ftTriangle(?:;|Bar;|Equal;)|ss(?:;|Equal;|Greater;|Less;|SlantEqual;|Tilde;))|Nested(?:GreaterGreater;|LessLess;)|Precedes(?:;|Equal;|SlantEqual;)|R(?:everseElement;|ightTriangle(?:;|Bar;|Equal;))|S(?:quareSu(?:bset(?:;|Equal;)|perset(?:;|Equal;))|u(?:bset(?:;|Equal;)|cceeds(?:;|Equal;|SlantEqual;|Tilde;)|perset(?:;|Equal;)))|Tilde(?:;|Equal;|FullEqual;|Tilde;)|VerticalBar;))|scr;|tilde;?|u;)|O(?:Elig;|acute;?|c(?:irc;?|y;)|dblac;|fr;|grave;?|m(?:acr;|ega;|icron;)|opf;|penCurly(?:DoubleQuote;|Quote;)|r;|s(?:cr;|lash;?)|ti(?:lde;?|mes;)|uml;?|ver(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;))|P(?:artialD;|cy;|fr;|hi;|i;|lusMinus;|o(?:incareplane;|pf;)|r(?:;|ecedes(?:;|Equal;|SlantEqual;|Tilde;)|ime;|o(?:duct;|portion(?:;|al;)))|s(?:cr;|i;))|Q(?:UOT;?|fr;|opf;|scr;)|R(?:Barr;|EG;?|a(?:cute;|ng;|rr(?:;|tl;))|c(?:aron;|edil;|y;)|e(?:;|verse(?:E(?:lement;|quilibrium;)|UpEquilibrium;))|fr;|ho;|ight(?:A(?:ngleBracket;|rrow(?:;|Bar;|LeftArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;)|o(?:pf;|undImplies;)|rightarrow;|s(?:cr;|h;)|uleDelayed;)|S(?:H(?:CHcy;|cy;)|OFTcy;|acute;|c(?:;|aron;|edil;|irc;|y;)|fr;|hort(?:DownArrow;|LeftArrow;|RightArrow;|UpArrow;)|igma;|mallCircle;|opf;|q(?:rt;|uare(?:;|Intersection;|Su(?:bset(?:;|Equal;)|perset(?:;|Equal;))|Union;))|scr;|tar;|u(?:b(?:;|set(?:;|Equal;))|c(?:ceeds(?:;|Equal;|SlantEqual;|Tilde;)|hThat;)|m;|p(?:;|erset(?:;|Equal;)|set;)))|T(?:HORN;?|RADE;|S(?:Hcy;|cy;)|a(?:b;|u;)|c(?:aron;|edil;|y;)|fr;|h(?:e(?:refore;|ta;)|i(?:ckSpace;|nSpace;))|ilde(?:;|Equal;|FullEqual;|Tilde;)|opf;|ripleDot;|s(?:cr;|trok;))|U(?:a(?:cute;?|rr(?:;|ocir;))|br(?:cy;|eve;)|c(?:irc;?|y;)|dblac;|fr;|grave;?|macr;|n(?:der(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;)|ion(?:;|Plus;))|o(?:gon;|pf;)|p(?:Arrow(?:;|Bar;|DownArrow;)|DownArrow;|Equilibrium;|Tee(?:;|Arrow;)|arrow;|downarrow;|per(?:LeftArrow;|RightArrow;)|si(?:;|lon;))|ring;|scr;|tilde;|uml;?)|V(?:Dash;|bar;|cy;|dash(?:;|l;)|e(?:e;|r(?:bar;|t(?:;|ical(?:Bar;|Line;|Separator;|Tilde;))|yThinSpace;))|fr;|opf;|scr;|vdash;)|W(?:circ;|edge;|fr;|opf;|scr;)|X(?:fr;|i;|opf;|scr;)|Y(?:Acy;|Icy;|Ucy;|acute;?|c(?:irc;|y;)|fr;|opf;|scr;|uml;)|Z(?:Hcy;|acute;|c(?:aron;|y;)|dot;|e(?:roWidthSpace;|ta;)|fr;|opf;|scr;)|a(?:acute;?|breve;|c(?:;|E;|d;|irc;?|ute;?|y;)|elig;?|f(?:;|r;)|grave;?|l(?:e(?:fsym;|ph;)|pha;)|m(?:a(?:cr;|lg;)|p;?)|n(?:d(?:;|and;|d;|slope;|v;)|g(?:;|e;|le;|msd(?:;|a(?:a;|b;|c;|d;|e;|f;|g;|h;))|rt(?:;|vb(?:;|d;))|s(?:ph;|t;)|zarr;))|o(?:gon;|pf;)|p(?:;|E;|acir;|e;|id;|os;|prox(?:;|eq;))|ring;?|s(?:cr;|t;|ymp(?:;|eq;))|tilde;?|uml;?|w(?:conint;|int;))|b(?:Not;|a(?:ck(?:cong;|epsilon;|prime;|sim(?:;|eq;))|r(?:vee;|wed(?:;|ge;)))|brk(?:;|tbrk;)|c(?:ong;|y;)|dquo;|e(?:caus(?:;|e;)|mptyv;|psi;|rnou;|t(?:a;|h;|ween;))|fr;|ig(?:c(?:ap;|irc;|up;)|o(?:dot;|plus;|times;)|s(?:qcup;|tar;)|triangle(?:down;|up;)|uplus;|vee;|wedge;)|karow;|l(?:a(?:ck(?:lozenge;|square;|triangle(?:;|down;|left;|right;))|nk;)|k(?:1(?:2;|4;)|34;)|ock;)|n(?:e(?:;|quiv;)|ot;)|o(?:pf;|t(?:;|tom;)|wtie;|x(?:D(?:L;|R;|l;|r;)|H(?:;|D;|U;|d;|u;)|U(?:L;|R;|l;|r;)|V(?:;|H;|L;|R;|h;|l;|r;)|box;|d(?:L;|R;|l;|r;)|h(?:;|D;|U;|d;|u;)|minus;|plus;|times;|u(?:L;|R;|l;|r;)|v(?:;|H;|L;|R;|h;|l;|r;)))|prime;|r(?:eve;|vbar;?)|s(?:cr;|emi;|im(?:;|e;)|ol(?:;|b;|hsub;))|u(?:ll(?:;|et;)|mp(?:;|E;|e(?:;|q;))))|c(?:a(?:cute;|p(?:;|and;|brcup;|c(?:ap;|up;)|dot;|s;)|r(?:et;|on;))|c(?:a(?:ps;|ron;)|edil;?|irc;|ups(?:;|sm;))|dot;|e(?:dil;?|mptyv;|nt(?:;|erdot;|))|fr;|h(?:cy;|eck(?:;|mark;)|i;)|ir(?:;|E;|c(?:;|eq;|le(?:arrow(?:left;|right;)|d(?:R;|S;|ast;|circ;|dash;)))|e;|fnint;|mid;|scir;)|lubs(?:;|uit;)|o(?:lon(?:;|e(?:;|q;))|m(?:ma(?:;|t;)|p(?:;|fn;|le(?:ment;|xes;)))|n(?:g(?:;|dot;)|int;)|p(?:f;|rod;|y(?:;|sr;|)))|r(?:arr;|oss;)|s(?:cr;|u(?:b(?:;|e;)|p(?:;|e;)))|tdot;|u(?:darr(?:l;|r;)|e(?:pr;|sc;)|larr(?:;|p;)|p(?:;|brcap;|c(?:ap;|up;)|dot;|or;|s;)|r(?:arr(?:;|m;)|ly(?:eq(?:prec;|succ;)|vee;|wedge;)|ren;?|vearrow(?:left;|right;))|vee;|wed;)|w(?:conint;|int;)|ylcty;)|d(?:Arr;|Har;|a(?:gger;|leth;|rr;|sh(?:;|v;))|b(?:karow;|lac;)|c(?:aron;|y;)|d(?:;|a(?:gger;|rr;)|otseq;)|e(?:g;?|lta;|mptyv;)|f(?:isht;|r;)|har(?:l;|r;)|i(?:am(?:;|ond(?:;|suit;)|s;)|e;|gamma;|sin;|v(?:;|ide(?:;|ontimes;|)|onx;))|jcy;|lc(?:orn;|rop;)|o(?:llar;|pf;|t(?:;|eq(?:;|dot;)|minus;|plus;|square;)|ublebarwedge;|wn(?:arrow;|downarrows;|harpoon(?:left;|right;)))|r(?:bkarow;|c(?:orn;|rop;))|s(?:c(?:r;|y;)|ol;|trok;)|t(?:dot;|ri(?:;|f;))|u(?:arr;|har;)|wangle;|z(?:cy;|igrarr;))|e(?:D(?:Dot;|ot;)|a(?:cute;?|ster;)|c(?:aron;|ir(?:;|c;?)|olon;|y;)|dot;|e;|f(?:Dot;|r;)|g(?:;|rave;?|s(?:;|dot;))|l(?:;|inters;|l;|s(?:;|dot;))|m(?:acr;|pty(?:;|set;|v;)|sp(?:1(?:3;|4;)|;))|n(?:g;|sp;)|o(?:gon;|pf;)|p(?:ar(?:;|sl;)|lus;|si(?:;|lon;|v;))|q(?:c(?:irc;|olon;)|s(?:im;|lant(?:gtr;|less;))|u(?:als;|est;|iv(?:;|DD;))|vparsl;)|r(?:Dot;|arr;)|s(?:cr;|dot;|im;)|t(?:a;|h;?)|u(?:ml;?|ro;)|x(?:cl;|ist;|p(?:ectation;|onentiale;)))|f(?:allingdotseq;|cy;|emale;|f(?:ilig;|l(?:ig;|lig;)|r;)|ilig;|jlig;|l(?:at;|lig;|tns;)|nof;|o(?:pf;|r(?:all;|k(?:;|v;)))|partint;|r(?:a(?:c(?:1(?:2;?|3;|4;?|5;|6;|8;)|2(?:3;|5;)|3(?:4;?|5;|8;)|45;|5(?:6;|8;)|78;)|sl;)|own;)|scr;)|g(?:E(?:;|l;)|a(?:cute;|mma(?:;|d;)|p;)|breve;|c(?:irc;|y;)|dot;|e(?:;|l;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|l;))|l(?:;|es;)))|fr;|g(?:;|g;)|imel;|jcy;|l(?:;|E;|a;|j;)|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|opf;|rave;|s(?:cr;|im(?:;|e;|l;))|t(?:;|c(?:c;|ir;)|dot;|lPar;|quest;|r(?:a(?:pprox;|rr;)|dot;|eq(?:less;|qless;)|less;|sim;)|)|v(?:ertneqq;|nE;))|h(?:Arr;|a(?:irsp;|lf;|milt;|r(?:dcy;|r(?:;|cir;|w;)))|bar;|circ;|e(?:arts(?:;|uit;)|llip;|rcon;)|fr;|ks(?:earow;|warow;)|o(?:arr;|mtht;|ok(?:leftarrow;|rightarrow;)|pf;|rbar;)|s(?:cr;|lash;|trok;)|y(?:bull;|phen;))|i(?:acute;?|c(?:;|irc;?|y;)|e(?:cy;|xcl;?)|f(?:f;|r;)|grave;?|i(?:;|i(?:int;|nt;)|nfin;|ota;)|jlig;|m(?:a(?:cr;|g(?:e;|line;|part;)|th;)|of;|ped;)|n(?:;|care;|fin(?:;|tie;)|odot;|t(?:;|cal;|e(?:gers;|rcal;)|larhk;|prod;))|o(?:cy;|gon;|pf;|ta;)|prod;|quest;?|s(?:cr;|in(?:;|E;|dot;|s(?:;|v;)|v;))|t(?:;|ilde;)|u(?:kcy;|ml;?))|j(?:c(?:irc;|y;)|fr;|math;|opf;|s(?:cr;|ercy;)|ukcy;)|k(?:appa(?:;|v;)|c(?:edil;|y;)|fr;|green;|hcy;|jcy;|opf;|scr;)|l(?:A(?:arr;|rr;|tail;)|Barr;|E(?:;|g;)|Har;|a(?:cute;|emptyv;|gran;|mbda;|ng(?:;|d;|le;)|p;|quo;?|rr(?:;|b(?:;|fs;)|fs;|hk;|lp;|pl;|sim;|tl;)|t(?:;|ail;|e(?:;|s;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|quo(?:;|r;)|r(?:dhar;|ushar;)|sh;)|e(?:;|ft(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|leftarrows;|right(?:arrow(?:;|s;)|harpoons;|squigarrow;)|threetimes;)|g;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|r;))|g(?:;|es;)|s(?:approx;|dot;|eq(?:gtr;|qgtr;)|gtr;|sim;)))|f(?:isht;|loor;|r;)|g(?:;|E;)|h(?:ar(?:d;|u(?:;|l;))|blk;)|jcy;|l(?:;|arr;|corner;|hard;|tri;)|m(?:idot;|oust(?:;|ache;))|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|o(?:a(?:ng;|rr;)|brk;|ng(?:left(?:arrow;|rightarrow;)|mapsto;|rightarrow;)|oparrow(?:left;|right;)|p(?:ar;|f;|lus;)|times;|w(?:ast;|bar;)|z(?:;|enge;|f;))|par(?:;|lt;)|r(?:arr;|corner;|har(?:;|d;)|m;|tri;)|s(?:aquo;|cr;|h;|im(?:;|e;|g;)|q(?:b;|uo(?:;|r;))|trok;)|t(?:;|c(?:c;|ir;)|dot;|hree;|imes;|larr;|quest;|r(?:Par;|i(?:;|e;|f;))|)|ur(?:dshar;|uhar;)|v(?:ertneqq;|nE;))|m(?:DDot;|a(?:cr;?|l(?:e;|t(?:;|ese;))|p(?:;|sto(?:;|down;|left;|up;))|rker;)|c(?:omma;|y;)|dash;|easuredangle;|fr;|ho;|i(?:cro;?|d(?:;|ast;|cir;|dot;?)|nus(?:;|b;|d(?:;|u;)))|l(?:cp;|dr;)|nplus;|o(?:dels;|pf;)|p;|s(?:cr;|tpos;)|u(?:;|ltimap;|map;))|n(?:G(?:g;|t(?:;|v;))|L(?:eft(?:arrow;|rightarrow;)|l;|t(?:;|v;))|Rightarrow;|V(?:Dash;|dash;)|a(?:bla;|cute;|ng;|p(?:;|E;|id;|os;|prox;)|tur(?:;|al(?:;|s;)))|b(?:sp;?|ump(?:;|e;))|c(?:a(?:p;|ron;)|edil;|ong(?:;|dot;)|up;|y;)|dash;|e(?:;|Arr;|ar(?:hk;|r(?:;|ow;))|dot;|quiv;|s(?:ear;|im;)|xist(?:;|s;))|fr;|g(?:E;|e(?:;|q(?:;|q;|slant;)|s;)|sim;|t(?:;|r;))|h(?:Arr;|arr;|par;)|i(?:;|s(?:;|d;)|v;)|jcy;|l(?:Arr;|E;|arr;|dr;|e(?:;|ft(?:arrow;|rightarrow;)|q(?:;|q;|slant;)|s(?:;|s;))|sim;|t(?:;|ri(?:;|e;)))|mid;|o(?:pf;|t(?:;|in(?:;|E;|dot;|v(?:a;|b;|c;))|ni(?:;|v(?:a;|b;|c;))|))|p(?:ar(?:;|allel;|sl;|t;)|olint;|r(?:;|cue;|e(?:;|c(?:;|eq;))))|r(?:Arr;|arr(?:;|c;|w;)|ightarrow;|tri(?:;|e;))|s(?:c(?:;|cue;|e;|r;)|hort(?:mid;|parallel;)|im(?:;|e(?:;|q;))|mid;|par;|qsu(?:be;|pe;)|u(?:b(?:;|E;|e;|set(?:;|eq(?:;|q;)))|cc(?:;|eq;)|p(?:;|E;|e;|set(?:;|eq(?:;|q;)))))|t(?:gl;|ilde;?|lg;|riangle(?:left(?:;|eq;)|right(?:;|eq;)))|u(?:;|m(?:;|ero;|sp;))|v(?:Dash;|Harr;|ap;|dash;|g(?:e;|t;)|infin;|l(?:Arr;|e;|t(?:;|rie;))|r(?:Arr;|trie;)|sim;)|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|near;))|o(?:S;|a(?:cute;?|st;)|c(?:ir(?:;|c;?)|y;)|d(?:ash;|blac;|iv;|ot;|sold;)|elig;|f(?:cir;|r;)|g(?:on;|rave;?|t;)|h(?:bar;|m;)|int;|l(?:arr;|c(?:ir;|ross;)|ine;|t;)|m(?:acr;|ega;|i(?:cron;|d;|nus;))|opf;|p(?:ar;|erp;|lus;)|r(?:;|arr;|d(?:;|er(?:;|of;)|f;?|m;?)|igof;|or;|slope;|v;)|s(?:cr;|lash;?|ol;)|ti(?:lde;?|mes(?:;|as;))|uml;?|vbar;)|p(?:ar(?:;|a(?:;|llel;|)|s(?:im;|l;)|t;)|cy;|er(?:cnt;|iod;|mil;|p;|tenk;)|fr;|h(?:i(?:;|v;)|mmat;|one;)|i(?:;|tchfork;|v;)|l(?:an(?:ck(?:;|h;)|kv;)|us(?:;|acir;|b;|cir;|d(?:o;|u;)|e;|mn;?|sim;|two;))|m;|o(?:intint;|pf;|und;?)|r(?:;|E;|ap;|cue;|e(?:;|c(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;))|ime(?:;|s;)|n(?:E;|ap;|sim;)|o(?:d;|f(?:alar;|line;|surf;)|p(?:;|to;))|sim;|urel;)|s(?:cr;|i;)|uncsp;)|q(?:fr;|int;|opf;|prime;|scr;|u(?:at(?:ernions;|int;)|est(?:;|eq;)|ot;?))|r(?:A(?:arr;|rr;|tail;)|Barr;|Har;|a(?:c(?:e;|ute;)|dic;|emptyv;|ng(?:;|d;|e;|le;)|quo;?|rr(?:;|ap;|b(?:;|fs;)|c;|fs;|hk;|lp;|pl;|sim;|tl;|w;)|t(?:ail;|io(?:;|nals;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|ldhar;|quo(?:;|r;)|sh;)|e(?:al(?:;|ine;|part;|s;)|ct;|g;?)|f(?:isht;|loor;|r;)|h(?:ar(?:d;|u(?:;|l;))|o(?:;|v;))|i(?:ght(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|left(?:arrows;|harpoons;)|rightarrows;|squigarrow;|threetimes;)|ng;|singdotseq;)|l(?:arr;|har;|m;)|moust(?:;|ache;)|nmid;|o(?:a(?:ng;|rr;)|brk;|p(?:ar;|f;|lus;)|times;)|p(?:ar(?:;|gt;)|polint;)|rarr;|s(?:aquo;|cr;|h;|q(?:b;|uo(?:;|r;)))|t(?:hree;|imes;|ri(?:;|e;|f;|ltri;))|uluhar;|x;)|s(?:acute;|bquo;|c(?:;|E;|a(?:p;|ron;)|cue;|e(?:;|dil;)|irc;|n(?:E;|ap;|sim;)|polint;|sim;|y;)|dot(?:;|b;|e;)|e(?:Arr;|ar(?:hk;|r(?:;|ow;))|ct;?|mi;|swar;|tm(?:inus;|n;)|xt;)|fr(?:;|own;)|h(?:arp;|c(?:hcy;|y;)|ort(?:mid;|parallel;)|y;?)|i(?:gma(?:;|f;|v;)|m(?:;|dot;|e(?:;|q;)|g(?:;|E;)|l(?:;|E;)|ne;|plus;|rarr;))|larr;|m(?:a(?:llsetminus;|shp;)|eparsl;|i(?:d;|le;)|t(?:;|e(?:;|s;)))|o(?:ftcy;|l(?:;|b(?:;|ar;))|pf;)|pa(?:des(?:;|uit;)|r;)|q(?:c(?:ap(?:;|s;)|up(?:;|s;))|su(?:b(?:;|e;|set(?:;|eq;))|p(?:;|e;|set(?:;|eq;)))|u(?:;|ar(?:e;|f;)|f;))|rarr;|s(?:cr;|etmn;|mile;|tarf;)|t(?:ar(?:;|f;)|r(?:aight(?:epsilon;|phi;)|ns;))|u(?:b(?:;|E;|dot;|e(?:;|dot;)|mult;|n(?:E;|e;)|plus;|rarr;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;)))|cc(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;)|m;|ng;|p(?:1;?|2;?|3;?|;|E;|d(?:ot;|sub;)|e(?:;|dot;)|hs(?:ol;|ub;)|larr;|mult;|n(?:E;|e;)|plus;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;))))|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|nwar;)|zlig;?)|t(?:a(?:rget;|u;)|brk;|c(?:aron;|edil;|y;)|dot;|elrec;|fr;|h(?:e(?:re(?:4;|fore;)|ta(?:;|sym;|v;))|i(?:ck(?:approx;|sim;)|nsp;)|k(?:ap;|sim;)|orn;?)|i(?:lde;|mes(?:;|b(?:;|ar;)|d;|)|nt;)|o(?:ea;|p(?:;|bot;|cir;|f(?:;|ork;))|sa;)|prime;|r(?:ade;|i(?:angle(?:;|down;|left(?:;|eq;)|q;|right(?:;|eq;))|dot;|e;|minus;|plus;|sb;|time;)|pezium;)|s(?:c(?:r;|y;)|hcy;|trok;)|w(?:ixt;|ohead(?:leftarrow;|rightarrow;)))|u(?:Arr;|Har;|a(?:cute;?|rr;)|br(?:cy;|eve;)|c(?:irc;?|y;)|d(?:arr;|blac;|har;)|f(?:isht;|r;)|grave;?|h(?:ar(?:l;|r;)|blk;)|l(?:c(?:orn(?:;|er;)|rop;)|tri;)|m(?:acr;|l;?)|o(?:gon;|pf;)|p(?:arrow;|downarrow;|harpoon(?:left;|right;)|lus;|si(?:;|h;|lon;)|uparrows;)|r(?:c(?:orn(?:;|er;)|rop;)|ing;|tri;)|scr;|t(?:dot;|ilde;|ri(?:;|f;))|u(?:arr;|ml;?)|wangle;)|v(?:Arr;|Bar(?:;|v;)|Dash;|a(?:ngrt;|r(?:epsilon;|kappa;|nothing;|p(?:hi;|i;|ropto;)|r(?:;|ho;)|s(?:igma;|u(?:bsetneq(?:;|q;)|psetneq(?:;|q;)))|t(?:heta;|riangle(?:left;|right;))))|cy;|dash;|e(?:e(?:;|bar;|eq;)|llip;|r(?:bar;|t;))|fr;|ltri;|nsu(?:b;|p;)|opf;|prop;|rtri;|s(?:cr;|u(?:bn(?:E;|e;)|pn(?:E;|e;)))|zigzag;)|w(?:circ;|e(?:d(?:bar;|ge(?:;|q;))|ierp;)|fr;|opf;|p;|r(?:;|eath;)|scr;)|x(?:c(?:ap;|irc;|up;)|dtri;|fr;|h(?:Arr;|arr;)|i;|l(?:Arr;|arr;)|map;|nis;|o(?:dot;|p(?:f;|lus;)|time;)|r(?:Arr;|arr;)|s(?:cr;|qcup;)|u(?:plus;|tri;)|vee;|wedge;)|y(?:ac(?:ute;?|y;)|c(?:irc;|y;)|en;?|fr;|icy;|opf;|scr;|u(?:cy;|ml;?))|z(?:acute;|c(?:aron;|y;)|dot;|e(?:etrf;|ta;)|fr;|hcy;|igrarr;|opf;|scr;|w(?:j;|nj;)))|[\s\S]/g,
    zv2 = 32,
    wv2 = /[^\r"&\u0000]+/g,
    Hv2 = /[^\r'&\u0000]+/g,
    Jv2 = /[^\r\t\n\f &>\u0000]+/g,
    Ov2 = /[^\r\t\n\f \/>A-Z\u0000]+/g,
    Xv2 = /[^\r\t\n\f \/=>A-Z\u0000]+/g,
    $v2 = /[^\]\r\u0000\uffff]*/g,
    _v2 = /[^&<\r\u0000\uffff]*/g,
    RYK = /[^<\r\u0000\uffff]*/g,
    Gv2 = /[^\r\u0000\uffff]*/g,
    yYK = /(?:(\/)?([a-z]+)>)|[\s\S]/g,
    IYK = /(?:([-a-z]+)[ \t\n\f]*=[ \t\n\f]*('[^'&\r\u0000]*'|"[^"&\r\u0000]*"|[^\t\n\r\f "&'\u0000>][^&> \t\n\r\f\u0000]*[ \t\n\f]))|[\s\S]/g,
    wf1 = /[^\x09\x0A\x0C\x0D\x20]/,
    Mb6 = /[^\x09\x0A\x0C\x0D\x20]/g,
    Zv2 = /[^\x00\x09\x0A\x0C\x0D\x20]/,
    Y9A = /^[\x09\x0A\x0C\x0D\x20]+/,
    Hf1 = /\x00/g;
  function Pj(A) {
    var K = 16384;
    if (A.length < K) return String.fromCharCode.apply(String, A);
    var q = "";
    for (var Y = 0; Y < A.length; Y += K) q += String.fromCharCode.apply(String, A.slice(Y, Y + K));
    return q;
  }
  function Wv2(A) {
    var K = [];
    for (var q = 0; q < A.length; q++) K[q] = A.charCodeAt(q);
    return K;
  }
  function o2(A, K) {
    if (typeof K === "string") return A.namespaceURI === Aq.HTML && A.localName === K;
    var q = K[A.namespaceURI];
    return q && q[A.localName];
  }
  function SYK(A) {
    return o2(A, pYK);
  }
  function hYK(A) {
    if (o2(A, dYK)) return !0;
    if (A.namespaceURI === Aq.MATHML && A.localName === "annotation-xml") {
      var K = A.getAttribute("encoding");
      if (K) K = K.toLowerCase();
      if (K === "text/html" || K === "application/xhtml+xml") return !0;
    }
    return !1;
  }
  function Dv2(A) {
    if (A in kYK) return kYK[A];else return A;
  }
  function bYK(A) {
    for (var K = 0, q = A.length; K < q; K++) if (A[K][0] in EYK) A[K][0] = EYK[A[K][0]];
  }
  function xYK(A) {
    for (var K = 0, q = A.length; K < q; K++) if (A[K][0] === "definitionurl") {
      A[K][0] = "definitionURL";
      break;
    }
  }
  function Pb6(A) {
    for (var K = 0, q = A.length; K < q; K++) if (A[K][0] in vYK) A[K].push(vYK[A[K][0]]);
  }
  function uYK(A, K) {
    for (var q = 0, Y = A.length; q < Y; q++) {
      var z = A[q][0],
        w = A[q][1];
      if (K.hasAttribute(z)) continue;
      K._setAttribute(z, w);
    }
  }
  gY.ElementStack = function () {
    this.elements = [], this.top = null;
  };
  gY.ElementStack.prototype.push = function (A) {
    this.elements.push(A), this.top = A;
  };
  gY.ElementStack.prototype.pop = function (A) {
    this.elements.pop(), this.top = this.elements[this.elements.length - 1];
  };
  gY.ElementStack.prototype.popTag = function (A) {
    for (var K = this.elements.length - 1; K > 0; K--) {
      var q = this.elements[K];
      if (o2(q, A)) break;
    }
    this.elements.length = K, this.top = this.elements[K - 1];
  };
  gY.ElementStack.prototype.popElementType = function (A) {
    for (var K = this.elements.length - 1; K > 0; K--) if (this.elements[K] instanceof A) break;
    this.elements.length = K, this.top = this.elements[K - 1];
  };
  gY.ElementStack.prototype.popElement = function (A) {
    for (var K = this.elements.length - 1; K > 0; K--) if (this.elements[K] === A) break;
    this.elements.length = K, this.top = this.elements[K - 1];
  };
  gY.ElementStack.prototype.removeElement = function (A) {
    if (this.top === A) this.pop();else {
      var K = this.elements.lastIndexOf(A);
      if (K !== -1) this.elements.splice(K, 1);
    }
  };
  gY.ElementStack.prototype.clearToContext = function (A) {
    for (var K = this.elements.length - 1; K > 0; K--) if (o2(this.elements[K], A)) break;
    this.elements.length = K + 1, this.top = this.elements[K];
  };
  gY.ElementStack.prototype.contains = function (A) {
    return this.inSpecificScope(A, Object.create(null));
  };
  gY.ElementStack.prototype.inSpecificScope = function (A, K) {
    for (var q = this.elements.length - 1; q >= 0; q--) {
      var Y = this.elements[q];
      if (o2(Y, A)) return !0;
      if (o2(Y, K)) return !1;
    }
    return !1;
  };
  gY.ElementStack.prototype.elementInSpecificScope = function (A, K) {
    for (var q = this.elements.length - 1; q >= 0; q--) {
      var Y = this.elements[q];
      if (Y === A) return !0;
      if (o2(Y, K)) return !1;
    }
    return !1;
  };
  gY.ElementStack.prototype.elementTypeInSpecificScope = function (A, K) {
    for (var q = this.elements.length - 1; q >= 0; q--) {
      var Y = this.elements[q];
      if (Y instanceof A) return !0;
      if (o2(Y, K)) return !1;
    }
    return !1;
  };
  gY.ElementStack.prototype.inScope = function (A) {
    return this.inSpecificScope(A, Dm);
  };
  gY.ElementStack.prototype.elementInScope = function (A) {
    return this.elementInSpecificScope(A, Dm);
  };
  gY.ElementStack.prototype.elementTypeInScope = function (A) {
    return this.elementTypeInSpecificScope(A, Dm);
  };
  gY.ElementStack.prototype.inButtonScope = function (A) {
    return this.inSpecificScope(A, Nb6);
  };
  gY.ElementStack.prototype.inListItemScope = function (A) {
    return this.inSpecificScope(A, Xf1);
  };
  gY.ElementStack.prototype.inTableScope = function (A) {
    return this.inSpecificScope(A, UYK);
  };
  gY.ElementStack.prototype.inSelectScope = function (A) {
    for (var K = this.elements.length - 1; K >= 0; K--) {
      var q = this.elements[K];
      if (q.namespaceURI !== Aq.HTML) return !1;
      var Y = q.localName;
      if (Y === A) return !0;
      if (Y !== "optgroup" && Y !== "option") return !1;
    }
    return !1;
  };
  gY.ElementStack.prototype.generateImpliedEndTags = function (A, K) {
    var q = K ? FYK : gYK;
    for (var Y = this.elements.length - 1; Y >= 0; Y--) {
      var z = this.elements[Y];
      if (A && o2(z, A)) break;
      if (!o2(this.elements[Y], q)) break;
    }
    this.elements.length = Y + 1, this.top = this.elements[Y];
  };
  gY.ActiveFormattingElements = function () {
    this.list = [], this.attrs = [];
  };
  gY.ActiveFormattingElements.prototype.MARKER = {
    localName: "|"
  };
  gY.ActiveFormattingElements.prototype.insertMarker = function () {
    this.list.push(this.MARKER), this.attrs.push(this.MARKER);
  };
  gY.ActiveFormattingElements.prototype.push = function (A, K) {
    var q = 0;
    for (var Y = this.list.length - 1; Y >= 0; Y--) {
      if (this.list[Y] === this.MARKER) break;
      if (H(A, this.list[Y], this.attrs[Y])) {
        if (q++, q === 3) {
          this.list.splice(Y, 1), this.attrs.splice(Y, 1);
          break;
        }
      }
    }
    this.list.push(A);
    var z = [];
    for (var w = 0; w < K.length; w++) z[w] = K[w];
    this.attrs.push(z);
    function H(J, O, X) {
      if (J.localName !== O.localName) return !1;
      if (J._numattrs !== X.length) return !1;
      for (var $ = 0, _ = X.length; $ < _; $++) {
        var G = X[$][0],
          Z = X[$][1];
        if (!J.hasAttribute(G)) return !1;
        if (J.getAttribute(G) !== Z) return !1;
      }
      return !0;
    }
  };
  gY.ActiveFormattingElements.prototype.clearToMarker = function () {
    for (var A = this.list.length - 1; A >= 0; A--) if (this.list[A] === this.MARKER) break;
    if (A < 0) A = 0;
    this.list.length = A, this.attrs.length = A;
  };
  gY.ActiveFormattingElements.prototype.findElementByTag = function (A) {
    for (var K = this.list.length - 1; K >= 0; K--) {
      var q = this.list[K];
      if (q === this.MARKER) break;
      if (q.localName === A) return q;
    }
    return null;
  };
  gY.ActiveFormattingElements.prototype.indexOf = function (A) {
    return this.list.lastIndexOf(A);
  };
  gY.ActiveFormattingElements.prototype.remove = function (A) {
    var K = this.list.lastIndexOf(A);
    if (K !== -1) this.list.splice(K, 1), this.attrs.splice(K, 1);
  };
  gY.ActiveFormattingElements.prototype.replace = function (A, K, q) {
    var Y = this.list.lastIndexOf(A);
    if (Y !== -1) this.list[Y] = K, this.attrs[Y] = q;
  };
  gY.ActiveFormattingElements.prototype.insertAfter = function (A, K) {
    var q = this.list.lastIndexOf(A);
    if (q !== -1) this.list.splice(q, 0, K), this.attrs.splice(q, 0, K);
  };
  function gY(A, K, q) {
    var Y = null,
      z = 0,
      w = 0,
      H = !1,
      J = !1,
      O = 0,
      X = [],
      $ = "",
      _ = !0,
      G = 0,
      Z = E8,
      W,
      D,
      j = "",
      M = "",
      P = [],
      f = "",
      N = "",
      T = [],
      C = [],
      R = [],
      x = [],
      y = [],
      B = !1,
      b = G9,
      F = null,
      Q = [],
      u = new gY.ElementStack(),
      d = new gY.ActiveFormattingElements(),
      r = K !== void 0,
      c = null,
      YA = null,
      e = !0;
    if (K) e = K.ownerDocument._scripting_enabled;
    if (q && q.scripting_enabled === !1) e = !1;
    var qA = !0,
      HA = !1,
      _A,
      a,
      JA = [],
      jA = !1,
      MA = !1,
      hA = {
        document: function () {
          return yA;
        },
        _asDocumentFragment: function () {
          var IA = yA.createDocumentFragment(),
            bA = yA.firstChild;
          while (bA.hasChildNodes()) IA.appendChild(bA.firstChild);
          return IA;
        },
        pause: function () {
          G++;
        },
        resume: function () {
          G--, this.parse("");
        },
        parse: function (IA, bA, D1) {
          var W6;
          if (G > 0) return $ += IA, !0;
          if (O === 0) {
            if ($) IA = $ + IA, $ = "";
            if (bA) IA += "￿", H = !0;
            if (Y = IA, z = IA.length, w = 0, _) {
              if (_ = !1, Y.charCodeAt(0) === 65279) w = 1;
            }
            O++, W6 = GA(D1), $ = Y.substring(w, z), O--;
          } else {
            if (O++, X.push(Y, z, w), Y = IA, z = IA.length, w = 0, GA(), W6 = !1, $ = Y.substring(w, z), w = X.pop(), z = X.pop(), Y = X.pop(), $) Y = $ + Y.substring(w), z = Y.length, w = 0, $ = "";
            O--;
          }
          return W6;
        }
      },
      yA = new oT2(!0, A);
    if (yA._parser = hA, yA._scripting_enabled = e, K) {
      if (K.ownerDocument._quirks) yA._quirks = !0;
      if (K.ownerDocument._limitedQuirks) yA._limitedQuirks = !0;
      if (K.namespaceURI === Aq.HTML) switch (K.localName) {
        case "title":
        case "textarea":
          Z = X9;
          break;
        case "style":
        case "xmp":
        case "iframe":
        case "noembed":
        case "noframes":
        case "script":
        case "plaintext":
          Z = S3;
          break;
      }
      var AA = yA.createElement("html");
      if (yA._appendChild(AA), u.push(AA), K instanceof r2.HTMLTemplateElement) Q.push(B$);
      e8();
      for (var wA = K; wA !== null; wA = wA.parentElement) if (wA instanceof r2.HTMLFormElement) {
        YA = wA;
        break;
      }
    }
    function GA(IA) {
      var bA, D1, W6, p6;
      while (w < z) {
        if (G > 0 || IA && IA()) return !0;
        switch (typeof Z.lookahead) {
          case "undefined":
            if (bA = Y.charCodeAt(w++), J) {
              if (J = !1, bA === 10) {
                w++;
                continue;
              }
            }
            switch (bA) {
              case 13:
                if (w < z) {
                  if (Y.charCodeAt(w) === 10) w++;
                } else J = !0;
                Z(10);
                break;
              case 65535:
                if (H && w === z) {
                  Z(zf1);
                  break;
                }
              default:
                Z(bA);
                break;
            }
            break;
          case "number":
            bA = Y.charCodeAt(w);
            var U8 = Z.lookahead,
              DK = !0;
            if (U8 < 0) DK = !1, U8 = -U8;
            if (U8 < z - w) D1 = DK ? Y.substring(w, w + U8) : null, p6 = !1;else if (H) {
              if (D1 = DK ? Y.substring(w, z) : null, p6 = !0, bA === 65535 && w === z - 1) bA = zf1;
            } else return !0;
            Z(bA, D1, p6);
            break;
          case "string":
            bA = Y.charCodeAt(w), W6 = Z.lookahead;
            var J5 = Y.indexOf(W6, w);
            if (J5 !== -1) D1 = Y.substring(w, J5 + W6.length), p6 = !1;else {
              if (!H) return !0;
              if (D1 = Y.substring(w, z), bA === 65535 && w === z - 1) bA = zf1;
              p6 = !0;
            }
            Z(bA, D1, p6);
            break;
        }
      }
      return !1;
    }
    function OA(IA, bA) {
      for (var D1 = 0; D1 < y.length; D1++) if (y[D1][0] === IA) return;
      if (bA !== void 0) y.push([IA, bA]);else y.push([IA]);
    }
    function t() {
      IYK.lastIndex = w - 1;
      var IA = IYK.exec(Y);
      if (!IA) throw Error("should never happen");
      var bA = IA[1];
      if (!bA) return !1;
      var D1 = IA[2],
        W6 = D1.length;
      switch (D1[0]) {
        case '"':
        case "'":
          D1 = D1.substring(1, W6 - 1), w += IA[0].length - 1, Z = E1;
          break;
        default:
          Z = gA, w += IA[0].length - 1, D1 = D1.substring(0, W6 - 1);
          break;
      }
      for (var p6 = 0; p6 < y.length; p6++) if (y[p6][0] === bA) return !0;
      return y.push([bA, D1]), !0;
    }
    function XA() {
      B = !1, j = "", y.length = 0;
    }
    function VA() {
      B = !0, j = "", y.length = 0;
    }
    function vA() {
      P.length = 0;
    }
    function RA() {
      f = "";
    }
    function fA() {
      N = "";
    }
    function LA() {
      T.length = 0;
    }
    function SA() {
      C.length = 0, R = null, x = null;
    }
    function xA() {
      R = [];
    }
    function iA() {
      x = [];
    }
    function lA() {
      HA = !0;
    }
    function v1() {
      return u.top && u.top.namespaceURI !== "http://www.w3.org/1999/xhtml";
    }
    function I1(IA) {
      return M === IA;
    }
    function Q1() {
      if (JA.length > 0) {
        var IA = Pj(JA);
        if (JA.length = 0, MA) {
          if (MA = !1, IA[0] === `
`) IA = IA.substring(1);
          if (IA.length === 0) return;
        }
        DA(iMA, IA), jA = !1;
      }
      MA = !1;
    }
    function B1(IA) {
      IA.lastIndex = w - 1;
      var bA = IA.exec(Y);
      if (bA && bA.index === w - 1) {
        if (bA = bA[0], w += bA.length - 1, H && w === z) bA = bA.slice(0, -1), w--;
        return bA;
      } else throw Error("should never happen");
    }
    function C6(IA) {
      IA.lastIndex = w - 1;
      var bA = IA.exec(Y)[0];
      if (!bA) return !1;
      return w1(bA), w += bA.length - 1, !0;
    }
    function w1(IA) {
      if (JA.length > 0) Q1();
      if (MA) {
        if (MA = !1, IA[0] === `
`) IA = IA.substring(1);
        if (IA.length === 0) return;
      }
      DA(iMA, IA);
    }
    function $1() {
      if (B) DA(p9, j);else {
        var IA = j;
        j = "", M = IA, DA(Mj, IA, y);
      }
    }
    function N1() {
      if (w === z) return !1;
      yYK.lastIndex = w;
      var IA = yYK.exec(Y);
      if (!IA) throw Error("should never happen");
      var bA = IA[2];
      if (!bA) return !1;
      var D1 = IA[1];
      if (D1) w += bA.length + 2, DA(p9, bA);else w += bA.length + 1, M = bA, DA(Mj, bA, tT2);
      return !0;
    }
    function A6() {
      if (B) DA(p9, j, null, !0);else DA(Mj, j, y, !0);
    }
    function c1() {
      DA(sT2, Pj(C), R ? Pj(R) : void 0, x ? Pj(x) : void 0);
    }
    function w6() {
      Q1(), b(zf1), yA.modclock = 1;
    }
    var DA = hA.insertToken = function (bA, D1, W6, p6) {
      Q1();
      var U8 = u.top;
      if (!U8 || U8.namespaceURI === Aq.HTML) b(bA, D1, W6, p6);else if (bA !== Mj && bA !== iMA) Sj(bA, D1, W6, p6);else if (SYK(U8) && (bA === iMA || bA === Mj && D1 !== "mglyph" && D1 !== "malignmark") || bA === Mj && D1 === "svg" && U8.namespaceURI === Aq.MATHML && U8.localName === "annotation-xml" || hYK(U8)) a = !0, b(bA, D1, W6, p6), a = !1;else Sj(bA, D1, W6, p6);
    };
    function EA(IA) {
      var bA = u.top;
      if (aA && o2(bA, nMA)) U6(function (D1) {
        return D1.createComment(IA);
      });else {
        if (bA instanceof r2.HTMLTemplateElement) bA = bA.content;
        bA._appendChild(bA.ownerDocument.createComment(IA));
      }
    }
    function rA(IA) {
      var bA = u.top;
      if (aA && o2(bA, nMA)) U6(function (W6) {
        return W6.createTextNode(IA);
      });else {
        if (bA instanceof r2.HTMLTemplateElement) bA = bA.content;
        var D1 = bA.lastChild;
        if (D1 && D1.nodeType === jb6.TEXT_NODE) D1.appendData(IA);else bA._appendChild(bA.ownerDocument.createTextNode(IA));
      }
    }
    function J1(IA, bA, D1) {
      var W6 = BYK.createElement(IA, bA, null);
      if (D1) for (var p6 = 0, U8 = D1.length; p6 < U8; p6++) W6._setAttribute(D1[p6][0], D1[p6][1]);
      return W6;
    }
    var aA = !1;
    function z1(IA, bA) {
      var D1 = f1(function (W6) {
        return J1(W6, IA, bA);
      });
      if (o2(D1, QYK)) D1._form = YA;
      return D1;
    }
    function f1(IA) {
      var bA;
      if (aA && o2(u.top, nMA)) bA = U6(IA);else if (u.top instanceof r2.HTMLTemplateElement) bA = IA(u.top.content.ownerDocument), u.top.content._appendChild(bA);else bA = IA(u.top.ownerDocument), u.top._appendChild(bA);
      return u.push(bA), bA;
    }
    function T1(IA, bA, D1) {
      return f1(function (W6) {
        var p6 = W6._createElementNS(IA, D1, null);
        if (bA) for (var U8 = 0, DK = bA.length; U8 < DK; U8++) {
          var J5 = bA[U8];
          if (J5.length === 2) p6._setAttribute(J5[0], J5[1]);else p6._setAttributeNS(J5[2], J5[0], J5[1]);
        }
        return p6;
      });
    }
    function K6(IA) {
      for (var bA = u.elements.length - 1; bA >= 0; bA--) if (u.elements[bA] instanceof IA) return bA;
      return -1;
    }
    function U6(IA) {
      var bA,
        D1,
        W6 = -1,
        p6 = -1,
        U8;
      if (W6 = K6(r2.HTMLTableElement), p6 = K6(r2.HTMLTemplateElement), p6 >= 0 && (W6 < 0 || p6 > W6)) bA = u.elements[p6];else if (W6 >= 0) if (bA = u.elements[W6].parentNode, bA) D1 = u.elements[W6];else bA = u.elements[W6 - 1];
      if (!bA) bA = u.elements[0];
      if (bA instanceof r2.HTMLTemplateElement) bA = bA.content;
      if (U8 = IA(bA.ownerDocument), U8.nodeType === jb6.TEXT_NODE) {
        var DK;
        if (D1) DK = D1.previousSibling;else DK = bA.lastChild;
        if (DK && DK.nodeType === jb6.TEXT_NODE) return DK.appendData(U8.data), U8;
      }
      if (D1) bA.insertBefore(U8, D1);else bA._appendChild(U8);
      return U8;
    }
    function e8() {
      var IA = !1;
      for (var bA = u.elements.length - 1; bA >= 0; bA--) {
        var D1 = u.elements[bA];
        if (bA === 0) {
          if (IA = !0, r) D1 = K;
        }
        if (D1.namespaceURI === Aq.HTML) {
          var W6 = D1.localName;
          switch (W6) {
            case "select":
              for (var p6 = bA; p6 > 0;) {
                var U8 = u.elements[--p6];
                if (U8 instanceof r2.HTMLTemplateElement) break;else if (U8 instanceof r2.HTMLTableElement) {
                  b = MN;
                  return;
                }
              }
              b = w2;
              return;
            case "tr":
              b = Yq;
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              b = C9;
              return;
            case "caption":
              b = C5;
              return;
            case "colgroup":
              b = A3;
              return;
            case "table":
              b = _4;
              return;
            case "template":
              b = Q[Q.length - 1];
              return;
            case "body":
              b = j1;
              return;
            case "frameset":
              b = Wh;
              return;
            case "html":
              if (c === null) b = ww;else b = v2;
              return;
            default:
              if (!IA) {
                if (W6 === "head") {
                  b = e5;
                  return;
                }
                if (W6 === "td" || W6 === "th") {
                  b = hz;
                  return;
                }
              }
          }
        }
        if (IA) {
          b = j1;
          return;
        }
      }
    }
    function D8(IA, bA) {
      z1(IA, bA), Z = I3, F = b, b = s6;
    }
    function Y7(IA, bA) {
      z1(IA, bA), Z = X9, F = b, b = s6;
    }
    function T7(IA, bA) {
      return {
        elt: J1(IA, d.list[bA].localName, d.attrs[bA]),
        attrs: d.attrs[bA]
      };
    }
    function H4() {
      if (d.list.length === 0) return;
      var IA = d.list[d.list.length - 1];
      if (IA === d.MARKER) return;
      if (u.elements.lastIndexOf(IA) !== -1) return;
      for (var bA = d.list.length - 2; bA >= 0; bA--) {
        if (IA = d.list[bA], IA === d.MARKER) break;
        if (u.elements.lastIndexOf(IA) !== -1) break;
      }
      for (bA = bA + 1; bA < d.list.length; bA++) {
        var D1 = f1(function (W6) {
          return T7(W6, bA).elt;
        });
        d.list[bA] = D1;
      }
    }
    var u7 = {
      localName: "BM"
    };
    function s7(IA) {
      if (o2(u.top, IA) && d.indexOf(u.top) === -1) return u.pop(), !0;
      var bA = 0;
      while (bA < 8) {
        bA++;
        var D1 = d.findElementByTag(IA);
        if (!D1) return !1;
        var W6 = u.elements.lastIndexOf(D1);
        if (W6 === -1) return d.remove(D1), !0;
        if (!u.elementInScope(D1)) return !0;
        var p6 = null,
          U8;
        for (var DK = W6 + 1; DK < u.elements.length; DK++) if (o2(u.elements[DK], z9A)) {
          p6 = u.elements[DK], U8 = DK;
          break;
        }
        if (!p6) return u.popElement(D1), d.remove(D1), !0;else {
          var J5 = u.elements[W6 - 1];
          d.insertAfter(D1, u7);
          var qY = p6,
            TH = p6,
            cJ = U8,
            YY,
            HJ = 0;
          while (!0) {
            if (HJ++, qY = u.elements[--cJ], qY === D1) break;
            if (YY = d.indexOf(qY), HJ > 3 && YY !== -1) d.remove(qY), YY = -1;
            if (YY === -1) {
              u.removeElement(qY);
              continue;
            }
            var b0 = T7(J5.ownerDocument, YY);
            if (d.replace(qY, b0.elt, b0.attrs), u.elements[cJ] = b0.elt, qY = b0.elt, TH === p6) d.remove(u7), d.insertAfter(b0.elt, u7);
            qY._appendChild(TH), TH = qY;
          }
          if (aA && o2(J5, nMA)) U6(function () {
            return TH;
          });else if (J5 instanceof r2.HTMLTemplateElement) J5.content._appendChild(TH);else J5._appendChild(TH);
          var IO = T7(p6.ownerDocument, d.indexOf(D1));
          while (p6.hasChildNodes()) IO.elt._appendChild(p6.firstChild);
          p6._appendChild(IO.elt), d.remove(D1), d.replace(u7, IO.elt, IO.attrs), u.removeElement(D1);
          var KR = u.elements.lastIndexOf(p6);
          u.elements.splice(KR + 1, 0, IO.elt);
        }
      }
      return !0;
    }
    function k5() {
      u.pop(), b = F;
      return;
    }
    function iq() {
      if (delete yA._parser, u.elements.length = 0, yA.defaultView) yA.defaultView.dispatchEvent(new r2.Event("load", {}));
    }
    function r8(IA, bA) {
      Z = bA, w--;
    }
    function E8(IA) {
      switch (IA) {
        case 38:
          W = E8, Z = yO;
          break;
        case 60:
          if (N1()) break;
          Z = dY;
          break;
        case 0:
          JA.push(IA), jA = !0;
          break;
        case -1:
          w6();
          break;
        default:
          C6(_v2) || JA.push(IA);
          break;
      }
    }
    function X9(IA) {
      switch (IA) {
        case 38:
          W = X9, Z = yO;
          break;
        case 60:
          Z = EY;
          break;
        case 0:
          JA.push(65533), jA = !0;
          break;
        case -1:
          w6();
          break;
        default:
          JA.push(IA);
          break;
      }
    }
    function I3(IA) {
      switch (IA) {
        case 60:
          Z = _9;
          break;
        case 0:
          JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          C6(RYK) || JA.push(IA);
          break;
      }
    }
    function Z3(IA) {
      switch (IA) {
        case 60:
          Z = T6;
          break;
        case 0:
          JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          C6(RYK) || JA.push(IA);
          break;
      }
    }
    function S3(IA) {
      switch (IA) {
        case 0:
          JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          C6(Gv2) || JA.push(IA);
          break;
      }
    }
    function dY(IA) {
      switch (IA) {
        case 33:
          Z = j4;
          break;
        case 47:
          Z = vY;
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          XA(), r8(IA, $9);
          break;
        case 63:
          r8(IA, Z8);
          break;
        default:
          JA.push(60), r8(IA, E8);
          break;
      }
    }
    function vY(IA) {
      switch (IA) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          VA(), r8(IA, $9);
          break;
        case 62:
          Z = E8;
          break;
        case -1:
          JA.push(60), JA.push(47), w6();
          break;
        default:
          r8(IA, Z8);
          break;
      }
    }
    function $9(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = gA;
          break;
        case 47:
          Z = Z6;
          break;
        case 62:
          Z = E8, $1();
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          j += String.fromCharCode(IA + 32);
          break;
        case 0:
          j += String.fromCharCode(65533);
          break;
        case -1:
          w6();
          break;
        default:
          j += B1(Ov2);
          break;
      }
    }
    function EY(IA) {
      if (IA === 47) vA(), Z = Yw;else JA.push(60), r8(IA, X9);
    }
    function Yw(IA) {
      switch (IA) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          VA(), r8(IA, QK);
          break;
        default:
          JA.push(60), JA.push(47), r8(IA, X9);
          break;
      }
    }
    function QK(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (I1(j)) {
            Z = gA;
            return;
          }
          break;
        case 47:
          if (I1(j)) {
            Z = Z6;
            return;
          }
          break;
        case 62:
          if (I1(j)) {
            Z = E8, $1();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          j += String.fromCharCode(IA + 32), P.push(IA);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          j += String.fromCharCode(IA), P.push(IA);
          return;
        default:
          break;
      }
      JA.push(60), JA.push(47), q9A(JA, P), r8(IA, X9);
    }
    function _9(IA) {
      if (IA === 47) vA(), Z = kY;else JA.push(60), r8(IA, I3);
    }
    function kY(IA) {
      switch (IA) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          VA(), r8(IA, gq);
          break;
        default:
          JA.push(60), JA.push(47), r8(IA, I3);
          break;
      }
    }
    function gq(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (I1(j)) {
            Z = gA;
            return;
          }
          break;
        case 47:
          if (I1(j)) {
            Z = Z6;
            return;
          }
          break;
        case 62:
          if (I1(j)) {
            Z = E8, $1();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          j += String.fromCharCode(IA + 32), P.push(IA);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          j += String.fromCharCode(IA), P.push(IA);
          return;
        default:
          break;
      }
      JA.push(60), JA.push(47), q9A(JA, P), r8(IA, I3);
    }
    function T6(IA) {
      switch (IA) {
        case 47:
          vA(), Z = W7;
          break;
        case 33:
          Z = n4, JA.push(60), JA.push(33);
          break;
        default:
          JA.push(60), r8(IA, Z3);
          break;
      }
    }
    function W7(IA) {
      switch (IA) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          VA(), r8(IA, Q8);
          break;
        default:
          JA.push(60), JA.push(47), r8(IA, Z3);
          break;
      }
    }
    function Q8(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (I1(j)) {
            Z = gA;
            return;
          }
          break;
        case 47:
          if (I1(j)) {
            Z = Z6;
            return;
          }
          break;
        case 62:
          if (I1(j)) {
            Z = E8, $1();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          j += String.fromCharCode(IA + 32), P.push(IA);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          j += String.fromCharCode(IA), P.push(IA);
          return;
        default:
          break;
      }
      JA.push(60), JA.push(47), q9A(JA, P), r8(IA, Z3);
    }
    function n4(IA) {
      if (IA === 45) Z = Xq, JA.push(45);else r8(IA, Z3);
    }
    function Xq(IA) {
      if (IA === 45) Z = Y4, JA.push(45);else r8(IA, Z3);
    }
    function IK(IA) {
      switch (IA) {
        case 45:
          Z = h3, JA.push(45);
          break;
        case 60:
          Z = c8;
          break;
        case 0:
          JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          JA.push(IA);
          break;
      }
    }
    function h3(IA) {
      switch (IA) {
        case 45:
          Z = Y4, JA.push(45);
          break;
        case 60:
          Z = c8;
          break;
        case 0:
          Z = IK, JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          Z = IK, JA.push(IA);
          break;
      }
    }
    function Y4(IA) {
      switch (IA) {
        case 45:
          JA.push(45);
          break;
        case 60:
          Z = c8;
          break;
        case 62:
          Z = Z3, JA.push(62);
          break;
        case 0:
          Z = IK, JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          Z = IK, JA.push(IA);
          break;
      }
    }
    function c8(IA) {
      switch (IA) {
        case 47:
          vA(), Z = z4;
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          vA(), JA.push(60), r8(IA, p3);
          break;
        default:
          JA.push(60), r8(IA, IK);
          break;
      }
    }
    function z4(IA) {
      switch (IA) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          VA(), r8(IA, $q);
          break;
        default:
          JA.push(60), JA.push(47), r8(IA, IK);
          break;
      }
    }
    function $q(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          if (I1(j)) {
            Z = gA;
            return;
          }
          break;
        case 47:
          if (I1(j)) {
            Z = Z6;
            return;
          }
          break;
        case 62:
          if (I1(j)) {
            Z = E8, $1();
            return;
          }
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          j += String.fromCharCode(IA + 32), P.push(IA);
          return;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          j += String.fromCharCode(IA), P.push(IA);
          return;
        default:
          break;
      }
      JA.push(60), JA.push(47), q9A(JA, P), r8(IA, IK);
    }
    function p3(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 47:
        case 62:
          if (Pj(P) === "script") Z = b5;else Z = IK;
          JA.push(IA);
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          P.push(IA + 32), JA.push(IA);
          break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          P.push(IA), JA.push(IA);
          break;
        default:
          r8(IA, IK);
          break;
      }
    }
    function b5(IA) {
      switch (IA) {
        case 45:
          Z = W3, JA.push(45);
          break;
        case 60:
          Z = NA, JA.push(60);
          break;
        case 0:
          JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          JA.push(IA);
          break;
      }
    }
    function W3(IA) {
      switch (IA) {
        case 45:
          Z = q1, JA.push(45);
          break;
        case 60:
          Z = NA, JA.push(60);
          break;
        case 0:
          Z = b5, JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          Z = b5, JA.push(IA);
          break;
      }
    }
    function q1(IA) {
      switch (IA) {
        case 45:
          JA.push(45);
          break;
        case 60:
          Z = NA, JA.push(60);
          break;
        case 62:
          Z = Z3, JA.push(62);
          break;
        case 0:
          Z = b5, JA.push(65533);
          break;
        case -1:
          w6();
          break;
        default:
          Z = b5, JA.push(IA);
          break;
      }
    }
    function NA(IA) {
      if (IA === 47) vA(), Z = ZA, JA.push(47);else r8(IA, b5);
    }
    function ZA(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 47:
        case 62:
          if (Pj(P) === "script") Z = IK;else Z = b5;
          JA.push(IA);
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          P.push(IA + 32), JA.push(IA);
          break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          P.push(IA), JA.push(IA);
          break;
        default:
          r8(IA, b5);
          break;
      }
    }
    function gA(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 47:
          Z = Z6;
          break;
        case 62:
          Z = E8, $1();
          break;
        case -1:
          w6();
          break;
        case 61:
          RA(), f += String.fromCharCode(IA), Z = pA;
          break;
        default:
          if (t()) break;
          RA(), r8(IA, pA);
          break;
      }
    }
    function pA(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 47:
        case 62:
        case -1:
          r8(IA, dA);
          break;
        case 61:
          Z = G1;
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          f += String.fromCharCode(IA + 32);
          break;
        case 0:
          f += String.fromCharCode(65533);
          break;
        case 34:
        case 39:
        case 60:
        default:
          f += B1(Xv2);
          break;
      }
    }
    function dA(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 47:
          OA(f), Z = Z6;
          break;
        case 61:
          Z = G1;
          break;
        case 62:
          Z = E8, OA(f), $1();
          break;
        case -1:
          OA(f), w6();
          break;
        default:
          OA(f), RA(), r8(IA, pA);
          break;
      }
    }
    function G1(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 34:
          fA(), Z = R1;
          break;
        case 39:
          fA(), Z = u1;
          break;
        case 62:
        default:
          fA(), r8(IA, s1);
          break;
      }
    }
    function R1(IA) {
      switch (IA) {
        case 34:
          OA(f, N), Z = E1;
          break;
        case 38:
          W = R1, Z = yO;
          break;
        case 0:
          N += String.fromCharCode(65533);
          break;
        case -1:
          w6();
          break;
        case 10:
          N += String.fromCharCode(IA);
          break;
        default:
          N += B1(wv2);
          break;
      }
    }
    function u1(IA) {
      switch (IA) {
        case 39:
          OA(f, N), Z = E1;
          break;
        case 38:
          W = u1, Z = yO;
          break;
        case 0:
          N += String.fromCharCode(65533);
          break;
        case -1:
          w6();
          break;
        case 10:
          N += String.fromCharCode(IA);
          break;
        default:
          N += B1(Hv2);
          break;
      }
    }
    function s1(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          OA(f, N), Z = gA;
          break;
        case 38:
          W = s1, Z = yO;
          break;
        case 62:
          OA(f, N), Z = E8, $1();
          break;
        case 0:
          N += String.fromCharCode(65533);
          break;
        case -1:
          w--, Z = E8;
          break;
        case 34:
        case 39:
        case 60:
        case 61:
        case 96:
        default:
          N += B1(Jv2);
          break;
      }
    }
    function E1(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = gA;
          break;
        case 47:
          Z = Z6;
          break;
        case 62:
          Z = E8, $1();
          break;
        case -1:
          w6();
          break;
        default:
          r8(IA, gA);
          break;
      }
    }
    function Z6(IA) {
      switch (IA) {
        case 62:
          Z = E8, A6(!0);
          break;
        case -1:
          w6();
          break;
        default:
          r8(IA, gA);
          break;
      }
    }
    function Z8(IA, bA, D1) {
      var W6 = bA.length;
      if (D1) w += W6 - 1;else w += W6;
      var p6 = bA.substring(0, W6 - 1);
      p6 = p6.replace(/\u0000/g, "�"), p6 = p6.replace(/\u000D\u000A/g, `
`), p6 = p6.replace(/\u000D/g, `
`), DA(Wm, p6), Z = E8;
    }
    Z8.lookahead = ">";
    function j4(IA, bA, D1) {
      if (bA[0] === "-" && bA[1] === "-") {
        w += 2, LA(), Z = d4;
        return;
      }
      if (bA.toUpperCase() === "DOCTYPE") w += 7, Z = NH;else if (bA === "[CDATA[" && v1()) w += 7, Z = I0;else Z = Z8;
    }
    j4.lookahead = 7;
    function d4(IA) {
      switch (LA(), IA) {
        case 45:
          Z = r4;
          break;
        case 62:
          Z = E8, DA(Wm, Pj(T));
          break;
        default:
          r8(IA, U7);
          break;
      }
    }
    function r4(IA) {
      switch (IA) {
        case 45:
          Z = C0;
          break;
        case 62:
          Z = E8, DA(Wm, Pj(T));
          break;
        case -1:
          DA(Wm, Pj(T)), w6();
          break;
        default:
          T.push(45), r8(IA, U7);
          break;
      }
    }
    function U7(IA) {
      switch (IA) {
        case 60:
          T.push(IA), Z = Fq;
          break;
        case 45:
          Z = pw;
          break;
        case 0:
          T.push(65533);
          break;
        case -1:
          DA(Wm, Pj(T)), w6();
          break;
        default:
          T.push(IA);
          break;
      }
    }
    function Fq(IA) {
      switch (IA) {
        case 33:
          T.push(IA), Z = z2;
          break;
        case 60:
          T.push(IA);
          break;
        default:
          r8(IA, U7);
          break;
      }
    }
    function z2(IA) {
      switch (IA) {
        case 45:
          Z = b3;
          break;
        default:
          r8(IA, U7);
          break;
      }
    }
    function b3(IA) {
      switch (IA) {
        case 45:
          Z = zw;
          break;
        default:
          r8(IA, pw);
          break;
      }
    }
    function zw(IA) {
      switch (IA) {
        case 62:
        case -1:
          r8(IA, C0);
          break;
        default:
          r8(IA, C0);
          break;
      }
    }
    function pw(IA) {
      switch (IA) {
        case 45:
          Z = C0;
          break;
        case -1:
          DA(Wm, Pj(T)), w6();
          break;
        default:
          T.push(45), r8(IA, U7);
          break;
      }
    }
    function C0(IA) {
      switch (IA) {
        case 62:
          Z = E8, DA(Wm, Pj(T));
          break;
        case 33:
          Z = zJ;
          break;
        case 45:
          T.push(45);
          break;
        case -1:
          DA(Wm, Pj(T)), w6();
          break;
        default:
          T.push(45), T.push(45), r8(IA, U7);
          break;
      }
    }
    function zJ(IA) {
      switch (IA) {
        case 45:
          T.push(45), T.push(45), T.push(33), Z = pw;
          break;
        case 62:
          Z = E8, DA(Wm, Pj(T));
          break;
        case -1:
          DA(Wm, Pj(T)), w6();
          break;
        default:
          T.push(45), T.push(45), T.push(33), r8(IA, U7);
          break;
      }
    }
    function NH(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = dw;
          break;
        case -1:
          SA(), lA(), c1(), w6();
          break;
        default:
          r8(IA, dw);
          break;
      }
    }
    function dw(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          SA(), C.push(IA + 32), Z = L0;
          break;
        case 0:
          SA(), C.push(65533), Z = L0;
          break;
        case 62:
          SA(), lA(), Z = E8, c1();
          break;
        case -1:
          SA(), lA(), c1(), w6();
          break;
        default:
          SA(), C.push(IA), Z = L0;
          break;
      }
    }
    function L0(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = Kz;
          break;
        case 62:
          Z = E8, c1();
          break;
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
          C.push(IA + 32);
          break;
        case 0:
          C.push(65533);
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          C.push(IA);
          break;
      }
    }
    function Kz(IA, bA, D1) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          w += 1;
          break;
        case 62:
          Z = E8, w += 1, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          if (bA = bA.toUpperCase(), bA === "PUBLIC") w += 6, Z = bP;else if (bA === "SYSTEM") w += 6, Z = R0;else lA(), Z = dJ;
          break;
      }
    }
    Kz.lookahead = 6;
    function bP(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = x_;
          break;
        case 34:
          xA(), Z = RX;
          break;
        case 39:
          xA(), Z = $Z;
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          lA(), Z = dJ;
          break;
      }
    }
    function x_(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 34:
          xA(), Z = RX;
          break;
        case 39:
          xA(), Z = $Z;
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          lA(), Z = dJ;
          break;
      }
    }
    function RX(IA) {
      switch (IA) {
        case 34:
          Z = u$;
          break;
        case 0:
          R.push(65533);
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          R.push(IA);
          break;
      }
    }
    function $Z(IA) {
      switch (IA) {
        case 39:
          Z = u$;
          break;
        case 0:
          R.push(65533);
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          R.push(IA);
          break;
      }
    }
    function u$(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = wJ;
          break;
        case 62:
          Z = E8, c1();
          break;
        case 34:
          iA(), Z = nq;
          break;
        case 39:
          iA(), Z = pJ;
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          lA(), Z = dJ;
          break;
      }
    }
    function wJ(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 62:
          Z = E8, c1();
          break;
        case 34:
          iA(), Z = nq;
          break;
        case 39:
          iA(), Z = pJ;
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          lA(), Z = dJ;
          break;
      }
    }
    function R0(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          Z = t5;
          break;
        case 34:
          iA(), Z = nq;
          break;
        case 39:
          iA(), Z = pJ;
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          lA(), Z = dJ;
          break;
      }
    }
    function t5(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 34:
          iA(), Z = nq;
          break;
        case 39:
          iA(), Z = pJ;
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          lA(), Z = dJ;
          break;
      }
    }
    function nq(IA) {
      switch (IA) {
        case 34:
          Z = y0;
          break;
        case 0:
          x.push(65533);
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          x.push(IA);
          break;
      }
    }
    function pJ(IA) {
      switch (IA) {
        case 39:
          Z = y0;
          break;
        case 0:
          x.push(65533);
          break;
        case 62:
          lA(), Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          x.push(IA);
          break;
      }
    }
    function y0(IA) {
      switch (IA) {
        case 9:
        case 10:
        case 12:
        case 32:
          break;
        case 62:
          Z = E8, c1();
          break;
        case -1:
          lA(), c1(), w6();
          break;
        default:
          Z = dJ;
          break;
      }
    }
    function dJ(IA) {
      switch (IA) {
        case 62:
          Z = E8, c1();
          break;
        case -1:
          c1(), w6();
          break;
        default:
          break;
      }
    }
    function I0(IA) {
      switch (IA) {
        case 93:
          Z = u_;
          break;
        case -1:
          w6();
          break;
        case 0:
          jA = !0;
        default:
          C6($v2) || JA.push(IA);
          break;
      }
    }
    function u_(IA) {
      switch (IA) {
        case 93:
          Z = S0;
          break;
        default:
          JA.push(93), r8(IA, I0);
          break;
      }
    }
    function S0(IA) {
      switch (IA) {
        case 93:
          JA.push(93);
          break;
        case 62:
          Q1(), Z = E8;
          break;
        default:
          JA.push(93), JA.push(93), r8(IA, I0);
          break;
      }
    }
    function yO(IA) {
      switch (vA(), P.push(38), IA) {
        case 9:
        case 10:
        case 12:
        case 32:
        case 60:
        case 38:
        case -1:
          r8(IA, rq);
          break;
        case 35:
          P.push(IA), Z = x3;
          break;
        default:
          r8(IA, yX);
          break;
      }
    }
    function yX(IA) {
      LYK.lastIndex = w;
      var bA = LYK.exec(Y);
      if (!bA) throw Error("should never happen");
      var D1 = bA[1];
      if (!D1) {
        Z = rq;
        return;
      }
      switch (w += D1.length, q9A(P, Wv2(D1)), W) {
        case R1:
        case u1:
        case s1:
          if (D1[D1.length - 1] !== ";") {
            if (/[=A-Za-z0-9]/.test(Y[w])) {
              Z = rq;
              return;
            }
          }
          break;
        default:
          break;
      }
      vA();
      var W6 = Yv2[D1];
      if (typeof W6 === "number") P.push(W6);else q9A(P, W6);
      Z = rq;
    }
    yX.lookahead = -zv2;
    function x3(IA) {
      switch (D = 0, IA) {
        case 120:
        case 88:
          P.push(IA), Z = IX;
          break;
        default:
          r8(IA, h0);
          break;
      }
    }
    function IX(IA) {
      switch (IA) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
          r8(IA, N8);
          break;
        default:
          r8(IA, rq);
          break;
      }
    }
    function h0(IA) {
      switch (IA) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          r8(IA, M8);
          break;
        default:
          r8(IA, rq);
          break;
      }
    }
    function N8(IA) {
      switch (IA) {
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
          D *= 16, D += IA - 55;
          break;
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
          D *= 16, D += IA - 87;
          break;
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          D *= 16, D += IA - 48;
          break;
        case 59:
          Z = V7;
          break;
        default:
          r8(IA, V7);
          break;
      }
    }
    function M8(IA) {
      switch (IA) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          D *= 10, D += IA - 48;
          break;
        case 59:
          Z = V7;
          break;
        default:
          r8(IA, V7);
          break;
      }
    }
    function V7(IA) {
      if (D in CYK) D = CYK[D];else if (D > 1114111 || D >= 55296 && D < 57344) D = 65533;
      if (vA(), D <= 65535) P.push(D);else D = D - 65536, P.push(55296 + (D >> 10)), P.push(56320 + (D & 1023));
      r8(IA, rq);
    }
    function rq(IA) {
      switch (W) {
        case R1:
        case u1:
        case s1:
          N += Pj(P);
          break;
        default:
          q9A(JA, P);
          break;
      }
      r8(IA, W);
    }
    function G9(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (bA = bA.replace(Y9A, ""), bA.length === 0) return;
          break;
        case 4:
          yA._appendChild(yA.createComment(bA));
          return;
        case 5:
          var p6 = bA,
            U8 = D1,
            DK = W6;
          if (yA.appendChild(new aT2(yA, p6, U8, DK)), HA || p6.toLowerCase() !== "html" || eT2.test(U8) || DK && DK.toLowerCase() === Av2 || DK === void 0 && TYK.test(U8)) yA._quirks = !0;else if (Kv2.test(U8) || DK !== void 0 && TYK.test(U8)) yA._limitedQuirks = !0;
          b = CY;
          return;
      }
      yA._quirks = !0, b = CY, b(IA, bA, D1, W6);
    }
    function CY(IA, bA, D1, W6) {
      var p6;
      switch (IA) {
        case 1:
          if (bA = bA.replace(Y9A, ""), bA.length === 0) return;
          break;
        case 5:
          return;
        case 4:
          yA._appendChild(yA.createComment(bA));
          return;
        case 2:
          if (bA === "html") {
            p6 = J1(yA, bA, D1), u.push(p6), yA.appendChild(p6), b = ww;
            return;
          }
          break;
        case 3:
          switch (bA) {
            case "html":
            case "head":
            case "body":
            case "br":
              break;
            default:
              return;
          }
      }
      p6 = J1(yA, "html", null), u.push(p6), yA.appendChild(p6), b = ww, b(IA, bA, D1, W6);
    }
    function ww(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (bA = bA.replace(Y9A, ""), bA.length === 0) return;
          break;
        case 5:
          return;
        case 4:
          EA(bA);
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "head":
              var p6 = z1(bA, D1);
              c = p6, b = e5;
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "html":
            case "head":
            case "body":
            case "br":
              break;
            default:
              return;
          }
      }
      ww(Mj, "head", null), b(IA, bA, D1, W6);
    }
    function e5(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          var p6 = bA.match(Y9A);
          if (p6) rA(p6[0]), bA = bA.substring(p6[0].length);
          if (bA.length === 0) return;
          break;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "meta":
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
              z1(bA, D1), u.pop();
              return;
            case "title":
              Y7(bA, D1);
              return;
            case "noscript":
              if (!e) {
                z1(bA, D1), b = LY;
                return;
              }
            case "noframes":
            case "style":
              D8(bA, D1);
              return;
            case "script":
              f1(function (U8) {
                var DK = J1(U8, bA, D1);
                if (DK._parser_inserted = !0, DK._force_async = !1, r) DK._already_started = !0;
                return Q1(), DK;
              }), Z = Z3, F = b, b = s6;
              return;
            case "template":
              z1(bA, D1), d.insertMarker(), qA = !1, b = B$, Q.push(b);
              return;
            case "head":
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "head":
              u.pop(), b = v2;
              return;
            case "body":
            case "html":
            case "br":
              break;
            case "template":
              if (!u.contains("template")) return;
              u.generateImpliedEndTags(null, "thorough"), u.popTag("template"), d.clearToMarker(), Q.pop(), e8();
              return;
            default:
              return;
          }
          break;
      }
      e5(p9, "head", null), b(IA, bA, D1, W6);
    }
    function LY(IA, bA, D1, W6) {
      switch (IA) {
        case 5:
          return;
        case 4:
          e5(IA, bA);
          return;
        case 1:
          var p6 = bA.match(Y9A);
          if (p6) e5(IA, p6[0]), bA = bA.substring(p6[0].length);
          if (bA.length === 0) return;
          break;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "style":
              e5(IA, bA, D1);
              return;
            case "head":
            case "noscript":
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "noscript":
              u.pop(), b = e5;
              return;
            case "br":
              break;
            default:
              return;
          }
          break;
      }
      LY(p9, "noscript", null), b(IA, bA, D1, W6);
    }
    function v2(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          var p6 = bA.match(Y9A);
          if (p6) rA(p6[0]), bA = bA.substring(p6[0].length);
          if (bA.length === 0) return;
          break;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "body":
              z1(bA, D1), qA = !1, b = j1;
              return;
            case "frameset":
              z1(bA, D1), b = Wh;
              return;
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "script":
            case "style":
            case "template":
            case "title":
              u.push(c), e5(Mj, bA, D1), u.removeElement(c);
              return;
            case "head":
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "template":
              return e5(IA, bA, D1, W6);
            case "body":
            case "html":
            case "br":
              break;
            default:
              return;
          }
          break;
      }
      v2(Mj, "body", null), qA = !0, b(IA, bA, D1, W6);
    }
    function j1(IA, bA, D1, W6) {
      var p6, U8, DK, J5;
      switch (IA) {
        case 1:
          if (jA) {
            if (bA = bA.replace(Hf1, ""), bA.length === 0) return;
          }
          if (qA && wf1.test(bA)) qA = !1;
          H4(), rA(bA);
          return;
        case 5:
          return;
        case 4:
          EA(bA);
          return;
        case -1:
          if (Q.length) return B$(IA);
          iq();
          return;
        case 2:
          switch (bA) {
            case "html":
              if (u.contains("template")) return;
              uYK(D1, u.elements[0]);
              return;
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "script":
            case "style":
            case "template":
            case "title":
              e5(Mj, bA, D1);
              return;
            case "body":
              if (p6 = u.elements[1], !p6 || !(p6 instanceof r2.HTMLBodyElement) || u.contains("template")) return;
              qA = !1, uYK(D1, p6);
              return;
            case "frameset":
              if (!qA) return;
              if (p6 = u.elements[1], !p6 || !(p6 instanceof r2.HTMLBodyElement)) return;
              if (p6.parentNode) p6.parentNode.removeChild(p6);
              while (!(u.top instanceof r2.HTMLHtmlElement)) u.pop();
              z1(bA, D1), b = Wh;
              return;
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
              if (u.inButtonScope("p")) j1(p9, "p");
              z1(bA, D1);
              return;
            case "menu":
              if (u.inButtonScope("p")) j1(p9, "p");
              if (o2(u.top, "menuitem")) u.pop();
              z1(bA, D1);
              return;
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              if (u.inButtonScope("p")) j1(p9, "p");
              if (u.top instanceof r2.HTMLHeadingElement) u.pop();
              z1(bA, D1);
              return;
            case "pre":
            case "listing":
              if (u.inButtonScope("p")) j1(p9, "p");
              z1(bA, D1), MA = !0, qA = !1;
              return;
            case "form":
              if (YA && !u.contains("template")) return;
              if (u.inButtonScope("p")) j1(p9, "p");
              if (J5 = z1(bA, D1), !u.contains("template")) YA = J5;
              return;
            case "li":
              qA = !1;
              for (U8 = u.elements.length - 1; U8 >= 0; U8--) {
                if (DK = u.elements[U8], DK instanceof r2.HTMLLIElement) {
                  j1(p9, "li");
                  break;
                }
                if (o2(DK, z9A) && !o2(DK, Vb6)) break;
              }
              if (u.inButtonScope("p")) j1(p9, "p");
              z1(bA, D1);
              return;
            case "dd":
            case "dt":
              qA = !1;
              for (U8 = u.elements.length - 1; U8 >= 0; U8--) {
                if (DK = u.elements[U8], o2(DK, mYK)) {
                  j1(p9, DK.localName);
                  break;
                }
                if (o2(DK, z9A) && !o2(DK, Vb6)) break;
              }
              if (u.inButtonScope("p")) j1(p9, "p");
              z1(bA, D1);
              return;
            case "plaintext":
              if (u.inButtonScope("p")) j1(p9, "p");
              z1(bA, D1), Z = S3;
              return;
            case "button":
              if (u.inScope("button")) j1(p9, "button"), b(IA, bA, D1, W6);else H4(), z1(bA, D1), qA = !1;
              return;
            case "a":
              var qY = d.findElementByTag("a");
              if (qY) j1(p9, bA), d.remove(qY), u.removeElement(qY);
            case "b":
            case "big":
            case "code":
            case "em":
            case "font":
            case "i":
            case "s":
            case "small":
            case "strike":
            case "strong":
            case "tt":
            case "u":
              H4(), d.push(z1(bA, D1), D1);
              return;
            case "nobr":
              if (H4(), u.inScope(bA)) j1(p9, bA), H4();
              d.push(z1(bA, D1), D1);
              return;
            case "applet":
            case "marquee":
            case "object":
              H4(), z1(bA, D1), d.insertMarker(), qA = !1;
              return;
            case "table":
              if (!yA._quirks && u.inButtonScope("p")) j1(p9, "p");
              z1(bA, D1), qA = !1, b = _4;
              return;
            case "area":
            case "br":
            case "embed":
            case "img":
            case "keygen":
            case "wbr":
              H4(), z1(bA, D1), u.pop(), qA = !1;
              return;
            case "input":
              H4(), J5 = z1(bA, D1), u.pop();
              var TH = J5.getAttribute("type");
              if (!TH || TH.toLowerCase() !== "hidden") qA = !1;
              return;
            case "param":
            case "source":
            case "track":
              z1(bA, D1), u.pop();
              return;
            case "hr":
              if (u.inButtonScope("p")) j1(p9, "p");
              if (o2(u.top, "menuitem")) u.pop();
              z1(bA, D1), u.pop(), qA = !1;
              return;
            case "image":
              j1(Mj, "img", D1, W6);
              return;
            case "textarea":
              z1(bA, D1), MA = !0, qA = !1, Z = X9, F = b, b = s6;
              return;
            case "xmp":
              if (u.inButtonScope("p")) j1(p9, "p");
              H4(), qA = !1, D8(bA, D1);
              return;
            case "iframe":
              qA = !1, D8(bA, D1);
              return;
            case "noembed":
              D8(bA, D1);
              return;
            case "select":
              if (H4(), z1(bA, D1), qA = !1, b === _4 || b === C5 || b === C9 || b === Yq || b === hz) b = MN;else b = w2;
              return;
            case "optgroup":
            case "option":
              if (u.top instanceof r2.HTMLOptionElement) j1(p9, "option");
              H4(), z1(bA, D1);
              return;
            case "menuitem":
              if (o2(u.top, "menuitem")) u.pop();
              H4(), z1(bA, D1);
              return;
            case "rb":
            case "rtc":
              if (u.inScope("ruby")) u.generateImpliedEndTags();
              z1(bA, D1);
              return;
            case "rp":
            case "rt":
              if (u.inScope("ruby")) u.generateImpliedEndTags("rtc");
              z1(bA, D1);
              return;
            case "math":
              if (H4(), xYK(D1), Pb6(D1), T1(bA, D1, Aq.MATHML), W6) u.pop();
              return;
            case "svg":
              if (H4(), bYK(D1), Pb6(D1), T1(bA, D1, Aq.SVG), W6) u.pop();
              return;
            case "caption":
            case "col":
            case "colgroup":
            case "frame":
            case "head":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return;
          }
          H4(), z1(bA, D1);
          return;
        case 3:
          switch (bA) {
            case "template":
              e5(p9, bA, D1);
              return;
            case "body":
              if (!u.inScope("body")) return;
              b = AR;
              return;
            case "html":
              if (!u.inScope("body")) return;
              b = AR, b(IA, bA, D1);
              return;
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "button":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "listing":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "pre":
            case "section":
            case "summary":
            case "ul":
              if (!u.inScope(bA)) return;
              u.generateImpliedEndTags(), u.popTag(bA);
              return;
            case "form":
              if (!u.contains("template")) {
                var cJ = YA;
                if (YA = null, !cJ || !u.elementInScope(cJ)) return;
                u.generateImpliedEndTags(), u.removeElement(cJ);
              } else {
                if (!u.inScope("form")) return;
                u.generateImpliedEndTags(), u.popTag("form");
              }
              return;
            case "p":
              if (!u.inButtonScope(bA)) j1(Mj, bA, null), b(IA, bA, D1, W6);else u.generateImpliedEndTags(bA), u.popTag(bA);
              return;
            case "li":
              if (!u.inListItemScope(bA)) return;
              u.generateImpliedEndTags(bA), u.popTag(bA);
              return;
            case "dd":
            case "dt":
              if (!u.inScope(bA)) return;
              u.generateImpliedEndTags(bA), u.popTag(bA);
              return;
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
              if (!u.elementTypeInScope(r2.HTMLHeadingElement)) return;
              u.generateImpliedEndTags(), u.popElementType(r2.HTMLHeadingElement);
              return;
            case "sarcasm":
              break;
            case "a":
            case "b":
            case "big":
            case "code":
            case "em":
            case "font":
            case "i":
            case "nobr":
            case "s":
            case "small":
            case "strike":
            case "strong":
            case "tt":
            case "u":
              var YY = s7(bA);
              if (YY) return;
              break;
            case "applet":
            case "marquee":
            case "object":
              if (!u.inScope(bA)) return;
              u.generateImpliedEndTags(), u.popTag(bA), d.clearToMarker();
              return;
            case "br":
              j1(Mj, bA, null);
              return;
          }
          for (U8 = u.elements.length - 1; U8 >= 0; U8--) if (DK = u.elements[U8], o2(DK, bA)) {
            u.generateImpliedEndTags(bA), u.popElement(DK);
            break;
          } else if (o2(DK, z9A)) return;
          return;
      }
    }
    function s6(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          rA(bA);
          return;
        case -1:
          if (u.top instanceof r2.HTMLScriptElement) u.top._already_started = !0;
          u.pop(), b = F, b(IA);
          return;
        case 3:
          if (bA === "script") k5();else u.pop(), b = F;
          return;
        default:
          return;
      }
    }
    function _4(IA, bA, D1, W6) {
      function p6(DK) {
        for (var J5 = 0, qY = DK.length; J5 < qY; J5++) if (DK[J5][0] === "type") return DK[J5][1].toLowerCase();
        return null;
      }
      switch (IA) {
        case 1:
          if (a) {
            j1(IA, bA, D1, W6);
            return;
          } else if (o2(u.top, nMA)) {
            _A = [], F = b, b = t7, b(IA, bA, D1, W6);
            return;
          }
          break;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case 2:
          switch (bA) {
            case "caption":
              u.clearToContext(Jf1), d.insertMarker(), z1(bA, D1), b = C5;
              return;
            case "colgroup":
              u.clearToContext(Jf1), z1(bA, D1), b = A3;
              return;
            case "col":
              _4(Mj, "colgroup", null), b(IA, bA, D1, W6);
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              u.clearToContext(Jf1), z1(bA, D1), b = C9;
              return;
            case "td":
            case "th":
            case "tr":
              _4(Mj, "tbody", null), b(IA, bA, D1, W6);
              return;
            case "table":
              if (!u.inTableScope(bA)) return;
              _4(p9, bA), b(IA, bA, D1, W6);
              return;
            case "style":
            case "script":
            case "template":
              e5(IA, bA, D1, W6);
              return;
            case "input":
              var U8 = p6(D1);
              if (U8 !== "hidden") break;
              z1(bA, D1), u.pop();
              return;
            case "form":
              if (YA || u.contains("template")) return;
              YA = z1(bA, D1), u.popElement(YA);
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "table":
              if (!u.inTableScope(bA)) return;
              u.popTag(bA), e8();
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return;
            case "template":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
        case -1:
          j1(IA, bA, D1, W6);
          return;
      }
      aA = !0, j1(IA, bA, D1, W6), aA = !1;
    }
    function t7(IA, bA, D1, W6) {
      if (IA === iMA) {
        if (jA) {
          if (bA = bA.replace(Hf1, ""), bA.length === 0) return;
        }
        _A.push(bA);
      } else {
        var p6 = _A.join("");
        if (_A.length = 0, wf1.test(p6)) aA = !0, j1(iMA, p6), aA = !1;else rA(p6);
        b = F, b(IA, bA, D1, W6);
      }
    }
    function C5(IA, bA, D1, W6) {
      function p6() {
        if (!u.inTableScope("caption")) return !1;
        return u.generateImpliedEndTags(), u.popTag("caption"), d.clearToMarker(), b = _4, !0;
      }
      switch (IA) {
        case 2:
          switch (bA) {
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              if (p6()) b(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "caption":
              p6();
              return;
            case "table":
              if (p6()) b(IA, bA, D1, W6);
              return;
            case "body":
            case "col":
            case "colgroup":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              return;
          }
          break;
      }
      j1(IA, bA, D1, W6);
    }
    function A3(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          var p6 = bA.match(Y9A);
          if (p6) rA(p6[0]), bA = bA.substring(p6[0].length);
          if (bA.length === 0) return;
          break;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "col":
              z1(bA, D1), u.pop();
              return;
            case "template":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "colgroup":
              if (!o2(u.top, "colgroup")) return;
              u.pop(), b = _4;
              return;
            case "col":
              return;
            case "template":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
        case -1:
          j1(IA, bA, D1, W6);
          return;
      }
      if (!o2(u.top, "colgroup")) return;
      A3(p9, "colgroup"), b(IA, bA, D1, W6);
    }
    function C9(IA, bA, D1, W6) {
      function p6() {
        if (!u.inTableScope("tbody") && !u.inTableScope("thead") && !u.inTableScope("tfoot")) return;
        u.clearToContext(Of1), C9(p9, u.top.localName, null), b(IA, bA, D1, W6);
      }
      switch (IA) {
        case 2:
          switch (bA) {
            case "tr":
              u.clearToContext(Of1), z1(bA, D1), b = Yq;
              return;
            case "th":
            case "td":
              C9(Mj, "tr", null), b(IA, bA, D1, W6);
              return;
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "tfoot":
            case "thead":
              p6();
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "table":
              p6();
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              if (u.inTableScope(bA)) u.clearToContext(Of1), u.pop(), b = _4;
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
            case "td":
            case "th":
            case "tr":
              return;
          }
          break;
      }
      _4(IA, bA, D1, W6);
    }
    function Yq(IA, bA, D1, W6) {
      function p6() {
        if (!u.inTableScope("tr")) return !1;
        return u.clearToContext(fb6), u.pop(), b = C9, !0;
      }
      switch (IA) {
        case 2:
          switch (bA) {
            case "th":
            case "td":
              u.clearToContext(fb6), z1(bA, D1), b = hz, d.insertMarker();
              return;
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "tfoot":
            case "thead":
            case "tr":
              if (p6()) b(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "tr":
              p6();
              return;
            case "table":
              if (p6()) b(IA, bA, D1, W6);
              return;
            case "tbody":
            case "tfoot":
            case "thead":
              if (u.inTableScope(bA)) {
                if (p6()) b(IA, bA, D1, W6);
              }
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
            case "td":
            case "th":
              return;
          }
          break;
      }
      _4(IA, bA, D1, W6);
    }
    function hz(IA, bA, D1, W6) {
      switch (IA) {
        case 2:
          switch (bA) {
            case "caption":
            case "col":
            case "colgroup":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr":
              if (u.inTableScope("td")) hz(p9, "td"), b(IA, bA, D1, W6);else if (u.inTableScope("th")) hz(p9, "th"), b(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "td":
            case "th":
              if (!u.inTableScope(bA)) return;
              u.generateImpliedEndTags(), u.popTag(bA), d.clearToMarker(), b = Yq;
              return;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "html":
              return;
            case "table":
            case "tbody":
            case "tfoot":
            case "thead":
            case "tr":
              if (!u.inTableScope(bA)) return;
              hz(p9, u.inTableScope("td") ? "td" : "th"), b(IA, bA, D1, W6);
              return;
          }
          break;
      }
      j1(IA, bA, D1, W6);
    }
    function w2(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (jA) {
            if (bA = bA.replace(Hf1, ""), bA.length === 0) return;
          }
          rA(bA);
          return;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case -1:
          j1(IA, bA, D1, W6);
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "option":
              if (u.top instanceof r2.HTMLOptionElement) w2(p9, bA);
              z1(bA, D1);
              return;
            case "optgroup":
              if (u.top instanceof r2.HTMLOptionElement) w2(p9, "option");
              if (u.top instanceof r2.HTMLOptGroupElement) w2(p9, bA);
              z1(bA, D1);
              return;
            case "select":
              w2(p9, bA);
              return;
            case "input":
            case "keygen":
            case "textarea":
              if (!u.inSelectScope("select")) return;
              w2(p9, "select"), b(IA, bA, D1, W6);
              return;
            case "script":
            case "template":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          switch (bA) {
            case "optgroup":
              if (u.top instanceof r2.HTMLOptionElement && u.elements[u.elements.length - 2] instanceof r2.HTMLOptGroupElement) w2(p9, "option");
              if (u.top instanceof r2.HTMLOptGroupElement) u.pop();
              return;
            case "option":
              if (u.top instanceof r2.HTMLOptionElement) u.pop();
              return;
            case "select":
              if (!u.inSelectScope(bA)) return;
              u.popTag(bA), e8();
              return;
            case "template":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
      }
    }
    function MN(IA, bA, D1, W6) {
      switch (bA) {
        case "caption":
        case "table":
        case "tbody":
        case "tfoot":
        case "thead":
        case "tr":
        case "td":
        case "th":
          switch (IA) {
            case 2:
              MN(p9, "select"), b(IA, bA, D1, W6);
              return;
            case 3:
              if (u.inTableScope(bA)) MN(p9, "select"), b(IA, bA, D1, W6);
              return;
          }
      }
      w2(IA, bA, D1, W6);
    }
    function B$(IA, bA, D1, W6) {
      function p6(U8) {
        b = U8, Q[Q.length - 1] = b, b(IA, bA, D1, W6);
      }
      switch (IA) {
        case 1:
        case 4:
        case 5:
          j1(IA, bA, D1, W6);
          return;
        case -1:
          if (!u.contains("template")) iq();else u.popTag("template"), d.clearToMarker(), Q.pop(), e8(), b(IA, bA, D1, W6);
          return;
        case 2:
          switch (bA) {
            case "base":
            case "basefont":
            case "bgsound":
            case "link":
            case "meta":
            case "noframes":
            case "script":
            case "style":
            case "template":
            case "title":
              e5(IA, bA, D1, W6);
              return;
            case "caption":
            case "colgroup":
            case "tbody":
            case "tfoot":
            case "thead":
              p6(_4);
              return;
            case "col":
              p6(A3);
              return;
            case "tr":
              p6(C9);
              return;
            case "td":
            case "th":
              p6(Yq);
              return;
          }
          p6(j1);
          return;
        case 3:
          switch (bA) {
            case "template":
              e5(IA, bA, D1, W6);
              return;
            default:
              return;
          }
      }
    }
    function AR(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (wf1.test(bA)) break;
          j1(IA, bA);
          return;
        case 4:
          u.elements[0]._appendChild(yA.createComment(bA));
          return;
        case 5:
          return;
        case -1:
          iq();
          return;
        case 2:
          if (bA === "html") {
            j1(IA, bA, D1, W6);
            return;
          }
          break;
        case 3:
          if (bA === "html") {
            if (r) return;
            b = Ag;
            return;
          }
          break;
      }
      b = j1, b(IA, bA, D1, W6);
    }
    function Wh(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (bA = bA.replace(Mb6, ""), bA.length > 0) rA(bA);
          return;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case -1:
          iq();
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "frameset":
              z1(bA, D1);
              return;
            case "frame":
              z1(bA, D1), u.pop();
              return;
            case "noframes":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          if (bA === "frameset") {
            if (r && u.top instanceof r2.HTMLHtmlElement) return;
            if (u.pop(), !r && !(u.top instanceof r2.HTMLFrameSetElement)) b = Dh;
            return;
          }
          break;
      }
    }
    function Dh(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (bA = bA.replace(Mb6, ""), bA.length > 0) rA(bA);
          return;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case -1:
          iq();
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "noframes":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
        case 3:
          if (bA === "html") {
            b = bz;
            return;
          }
          break;
      }
    }
    function Ag(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (wf1.test(bA)) break;
          j1(IA, bA, D1, W6);
          return;
        case 4:
          yA._appendChild(yA.createComment(bA));
          return;
        case 5:
          j1(IA, bA, D1, W6);
          return;
        case -1:
          iq();
          return;
        case 2:
          if (bA === "html") {
            j1(IA, bA, D1, W6);
            return;
          }
          break;
      }
      b = j1, b(IA, bA, D1, W6);
    }
    function bz(IA, bA, D1, W6) {
      switch (IA) {
        case 1:
          if (bA = bA.replace(Mb6, ""), bA.length > 0) j1(IA, bA, D1, W6);
          return;
        case 4:
          yA._appendChild(yA.createComment(bA));
          return;
        case 5:
          j1(IA, bA, D1, W6);
          return;
        case -1:
          iq();
          return;
        case 2:
          switch (bA) {
            case "html":
              j1(IA, bA, D1, W6);
              return;
            case "noframes":
              e5(IA, bA, D1, W6);
              return;
          }
          break;
      }
    }
    function Sj(IA, bA, D1, W6) {
      function p6(qY) {
        for (var TH = 0, cJ = qY.length; TH < cJ; TH++) switch (qY[TH][0]) {
          case "color":
          case "face":
          case "size":
            return !0;
        }
        return !1;
      }
      var U8;
      switch (IA) {
        case 1:
          if (qA && Zv2.test(bA)) qA = !1;
          if (jA) bA = bA.replace(Hf1, "�");
          rA(bA);
          return;
        case 4:
          EA(bA);
          return;
        case 5:
          return;
        case 2:
          switch (bA) {
            case "font":
              if (!p6(D1)) break;
            case "b":
            case "big":
            case "blockquote":
            case "body":
            case "br":
            case "center":
            case "code":
            case "dd":
            case "div":
            case "dl":
            case "dt":
            case "em":
            case "embed":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6":
            case "head":
            case "hr":
            case "i":
            case "img":
            case "li":
            case "listing":
            case "menu":
            case "meta":
            case "nobr":
            case "ol":
            case "p":
            case "pre":
            case "ruby":
            case "s":
            case "small":
            case "span":
            case "strong":
            case "strike":
            case "sub":
            case "sup":
            case "table":
            case "tt":
            case "u":
            case "ul":
            case "var":
              if (r) break;
              do u.pop(), U8 = u.top; while (U8.namespaceURI !== Aq.HTML && !SYK(U8) && !hYK(U8));
              DA(IA, bA, D1, W6);
              return;
          }
          if (U8 = u.elements.length === 1 && r ? K : u.top, U8.namespaceURI === Aq.MATHML) xYK(D1);else if (U8.namespaceURI === Aq.SVG) bA = Dv2(bA), bYK(D1);
          if (Pb6(D1), T1(bA, D1, U8.namespaceURI), W6) {
            if (bA === "script" && U8.namespaceURI === Aq.SVG) ;
            u.pop();
          }
          return;
        case 3:
          if (U8 = u.top, bA === "script" && U8.namespaceURI === Aq.SVG && U8.localName === "script") u.pop();else {
            var DK = u.elements.length - 1,
              J5 = u.elements[DK];
            for (;;) {
              if (J5.localName.toLowerCase() === bA) {
                u.popElement(J5);
                break;
              }
              if (J5 = u.elements[--DK], J5.namespaceURI !== Aq.HTML) continue;
              b(IA, bA, D1, W6);
              break;
            }
          }
          return;
      }
    }
    return hA.testTokenizer = function (IA, bA, D1, W6) {
      var p6 = [];
      switch (bA) {
        case "PCDATA state":
          Z = E8;
          break;
        case "RCDATA state":
          Z = X9;
          break;
        case "RAWTEXT state":
          Z = I3;
          break;
        case "PLAINTEXT state":
          Z = S3;
          break;
      }
      if (D1) M = D1;
      if (DA = function (DK, J5, qY, TH) {
        switch (Q1(), DK) {
          case 1:
            if (p6.length > 0 && p6[p6.length - 1][0] === "Character") p6[p6.length - 1][1] += J5;else p6.push(["Character", J5]);
            break;
          case 4:
            p6.push(["Comment", J5]);
            break;
          case 5:
            p6.push(["DOCTYPE", J5, qY === void 0 ? null : qY, TH === void 0 ? null : TH, !HA]);
            break;
          case 2:
            var cJ = Object.create(null);
            for (var YY = 0; YY < qY.length; YY++) {
              var HJ = qY[YY];
              if (HJ.length === 1) cJ[HJ[0]] = "";else cJ[HJ[0]] = HJ[1];
            }
            var b0 = ["StartTag", J5, cJ];
            if (TH) b0.push(!0);
            p6.push(b0);
            break;
          case 3:
            p6.push(["EndTag", J5]);
            break;
          case -1:
            break;
        }
      }, !W6) this.parse(IA, !0);else {
        for (var U8 = 0; U8 < IA.length; U8++) this.parse(IA[U8]);
        this.parse("", !0);
      }
      return p6;
    }, hA;
  }
});

// Register to shared state
__$.$f1 = $f1;
