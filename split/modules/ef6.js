// Module: ef6
// Dependencies: KC7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ef6 = v(e3 => {
  var YdY = e3 && e3.__importDefault || function (A) {
    return A && A.__esModule ? A : {
      default: A
    };
  };
  Object.defineProperty(e3, "__esModule", {
    value: !0
  });
  e3.parse = e3.stringify = e3.toJson = e3.fromJson = e3.DEFAULT_THEME = e3.plain = void 0;
  var G0 = YdY(__$.KC7()),
    zdY = function (A) {
      return A;
    };
  e3.plain = zdY;
  e3.DEFAULT_THEME = {
    keyword: G0.default.blue,
    built_in: G0.default.cyan,
    type: G0.default.cyan.dim,
    literal: G0.default.blue,
    number: G0.default.green,
    regexp: G0.default.red,
    string: G0.default.red,
    subst: e3.plain,
    symbol: e3.plain,
    class: G0.default.blue,
    function: G0.default.yellow,
    title: e3.plain,
    params: e3.plain,
    comment: G0.default.green,
    doctag: G0.default.green,
    meta: G0.default.grey,
    "meta-keyword": e3.plain,
    "meta-string": e3.plain,
    section: e3.plain,
    tag: G0.default.grey,
    name: G0.default.blue,
    "builtin-name": e3.plain,
    attr: G0.default.cyan,
    attribute: e3.plain,
    variable: e3.plain,
    bullet: e3.plain,
    code: e3.plain,
    emphasis: G0.default.italic,
    strong: G0.default.bold,
    formula: e3.plain,
    link: G0.default.underline,
    quote: e3.plain,
    "selector-tag": e3.plain,
    "selector-id": e3.plain,
    "selector-class": e3.plain,
    "selector-attr": e3.plain,
    "selector-pseudo": e3.plain,
    "template-tag": e3.plain,
    "template-variable": e3.plain,
    addition: G0.default.green,
    deletion: G0.default.red,
    default: e3.plain
  };
  function qC7(A) {
    var K = {};
    for (var q = 0, Y = Object.keys(A); q < Y.length; q++) {
      var z = Y[q],
        w = A[z];
      if (Array.isArray(w)) K[z] = w.reduce(function (H, J) {
        return J === "plain" ? e3.plain : H[J];
      }, G0.default);else K[z] = G0.default[w];
    }
    return K;
  }
  e3.fromJson = qC7;
  function YC7(A) {
    var K = {};
    for (var q = 0, Y = Object.keys(K); q < Y.length; q++) {
      var z = Y[q],
        w = K[z];
      K[z] = w._styles;
    }
    return K;
  }
  e3.toJson = YC7;
  function wdY(A) {
    return JSON.stringify(YC7(A));
  }
  e3.stringify = wdY;
  function HdY(A) {
    return qC7(JSON.parse(A));
  }
  e3.parse = HdY;
});

// Register to shared state
__$.ef6 = ef6;
