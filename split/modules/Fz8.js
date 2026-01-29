// Module: Fz8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fz8 = v((mEz, gz8) => {
  function qx1(A) {
    if (A instanceof Map) A.clear = A.delete = A.set = function () {
      throw Error("map is read-only");
    };else if (A instanceof Set) A.add = A.clear = A.delete = function () {
      throw Error("set is read-only");
    };
    return Object.freeze(A), Object.getOwnPropertyNames(A).forEach(function (K) {
      var q = A[K];
      if (typeof q == "object" && !Object.isFrozen(q)) qx1(q);
    }), A;
  }
  var yz8 = qx1,
    NDq = qx1;
  yz8.default = NDq;
  class Ax1 {
    constructor(A) {
      if (A.data === void 0) A.data = {};
      this.data = A.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function pwA(A) {
    return A.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function Hi(A, ...K) {
    let q = Object.create(null);
    for (let Y in A) q[Y] = A[Y];
    return K.forEach(function (Y) {
      for (let z in Y) q[z] = Y[z];
    }), q;
  }
  var TDq = "</span>",
    vz8 = A => {
      return !!A.kind;
    };
  class Iz8 {
    constructor(A, K) {
      this.buffer = "", this.classPrefix = K.classPrefix, A.walk(this);
    }
    addText(A) {
      this.buffer += pwA(A);
    }
    openNode(A) {
      if (!vz8(A)) return;
      let K = A.kind;
      if (!A.sublanguage) K = `${this.classPrefix}${K}`;
      this.span(K);
    }
    closeNode(A) {
      if (!vz8(A)) return;
      this.buffer += TDq;
    }
    value() {
      return this.buffer;
    }
    span(A) {
      this.buffer += `<span class="${A}">`;
    }
  }
  class Yx1 {
    constructor() {
      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(A) {
      this.top.children.push(A);
    }
    openNode(A) {
      let K = {
        kind: A,
        children: []
      };
      this.add(K), this.stack.push(K);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
      return;
    }
    closeAllNodes() {
      while (this.closeNode());
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(A) {
      return this.constructor._walk(A, this.rootNode);
    }
    static _walk(A, K) {
      if (typeof K === "string") A.addText(K);else if (K.children) A.openNode(K), K.children.forEach(q => this._walk(A, q)), A.closeNode(K);
      return A;
    }
    static _collapse(A) {
      if (typeof A === "string") return;
      if (!A.children) return;
      if (A.children.every(K => typeof K === "string")) A.children = [A.children.join("")];else A.children.forEach(K => {
        Yx1._collapse(K);
      });
    }
  }
  class Sz8 extends Yx1 {
    constructor(A) {
      super();
      this.options = A;
    }
    addKeyword(A, K) {
      if (A === "") return;
      this.openNode(K), this.addText(A), this.closeNode();
    }
    addText(A) {
      if (A === "") return;
      this.add(A);
    }
    addSublanguage(A, K) {
      let q = A.root;
      q.kind = K, q.sublanguage = !0, this.add(q);
    }
    toHTML() {
      return new Iz8(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  }
  function vDq(A) {
    return new RegExp(A.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
  }
  function dTA(A) {
    if (!A) return null;
    if (typeof A === "string") return A;
    return A.source;
  }
  function EDq(...A) {
    return A.map(q => dTA(q)).join("");
  }
  function kDq(...A) {
    return "(" + A.map(q => dTA(q)).join("|") + ")";
  }
  function CDq(A) {
    return new RegExp(A.toString() + "|").exec("").length - 1;
  }
  function LDq(A, K) {
    let q = A && A.exec(K);
    return q && q.index === 0;
  }
  var RDq = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function yDq(A, K = "|") {
    let q = 0;
    return A.map(Y => {
      q += 1;
      let z = q,
        w = dTA(Y),
        H = "";
      while (w.length > 0) {
        let J = RDq.exec(w);
        if (!J) {
          H += w;
          break;
        }
        if (H += w.substring(0, J.index), w = w.substring(J.index + J[0].length), J[0][0] === "\\" && J[1]) H += "\\" + String(Number(J[1]) + z);else if (H += J[0], J[0] === "(") q++;
      }
      return H;
    }).map(Y => `(${Y})`).join(K);
  }
  var IDq = /\b\B/,
    hz8 = "[a-zA-Z]\\w*",
    zx1 = "[a-zA-Z_]\\w*",
    wx1 = "\\b\\d+(\\.\\d+)?",
    bz8 = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    xz8 = "\\b(0b[01]+)",
    SDq = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    hDq = (A = {}) => {
      let K = /^#![ ]*\//;
      if (A.binary) A.begin = EDq(K, /.*\b/, A.binary, /\b.*/);
      return Hi({
        className: "meta",
        begin: K,
        end: /$/,
        relevance: 0,
        "on:begin": (q, Y) => {
          if (q.index !== 0) Y.ignoreMatch();
        }
      }, A);
    },
    cTA = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    bDq = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [cTA]
    },
    xDq = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [cTA]
    },
    uz8 = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    ZaA = function (A, K, q = {}) {
      let Y = Hi({
        className: "comment",
        begin: A,
        end: K,
        contains: []
      }, q);
      return Y.contains.push(uz8), Y.contains.push({
        className: "doctag",
        begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
        relevance: 0
      }), Y;
    },
    uDq = ZaA("//", "$"),
    BDq = ZaA("/\\*", "\\*/"),
    mDq = ZaA("#", "$"),
    gDq = {
      className: "number",
      begin: wx1,
      relevance: 0
    },
    FDq = {
      className: "number",
      begin: bz8,
      relevance: 0
    },
    QDq = {
      className: "number",
      begin: xz8,
      relevance: 0
    },
    UDq = {
      className: "number",
      begin: wx1 + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    pDq = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [cTA, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [cTA]
        }]
      }]
    },
    dDq = {
      className: "title",
      begin: hz8,
      relevance: 0
    },
    cDq = {
      className: "title",
      begin: zx1,
      relevance: 0
    },
    lDq = {
      begin: "\\.\\s*" + zx1,
      relevance: 0
    },
    iDq = function (A) {
      return Object.assign(A, {
        "on:begin": (K, q) => {
          q.data._beginMatch = K[1];
        },
        "on:end": (K, q) => {
          if (q.data._beginMatch !== K[1]) q.ignoreMatch();
        }
      });
    },
    GaA = Object.freeze({
      __proto__: null,
      MATCH_NOTHING_RE: IDq,
      IDENT_RE: hz8,
      UNDERSCORE_IDENT_RE: zx1,
      NUMBER_RE: wx1,
      C_NUMBER_RE: bz8,
      BINARY_NUMBER_RE: xz8,
      RE_STARTERS_RE: SDq,
      SHEBANG: hDq,
      BACKSLASH_ESCAPE: cTA,
      APOS_STRING_MODE: bDq,
      QUOTE_STRING_MODE: xDq,
      PHRASAL_WORDS_MODE: uz8,
      COMMENT: ZaA,
      C_LINE_COMMENT_MODE: uDq,
      C_BLOCK_COMMENT_MODE: BDq,
      HASH_COMMENT_MODE: mDq,
      NUMBER_MODE: gDq,
      C_NUMBER_MODE: FDq,
      BINARY_NUMBER_MODE: QDq,
      CSS_NUMBER_MODE: UDq,
      REGEXP_MODE: pDq,
      TITLE_MODE: dDq,
      UNDERSCORE_TITLE_MODE: cDq,
      METHOD_GUARD: lDq,
      END_SAME_AS_BEGIN: iDq
    });
  function nDq(A, K) {
    if (A.input[A.index - 1] === ".") K.ignoreMatch();
  }
  function rDq(A, K) {
    if (!K) return;
    if (!A.beginKeywords) return;
    if (A.begin = "\\b(" + A.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", A.__beforeBegin = nDq, A.keywords = A.keywords || A.beginKeywords, delete A.beginKeywords, A.relevance === void 0) A.relevance = 0;
  }
  function oDq(A, K) {
    if (!Array.isArray(A.illegal)) return;
    A.illegal = kDq(...A.illegal);
  }
  function aDq(A, K) {
    if (!A.match) return;
    if (A.begin || A.end) throw Error("begin & end are not supported with match");
    A.begin = A.match, delete A.match;
  }
  function sDq(A, K) {
    if (A.relevance === void 0) A.relevance = 1;
  }
  var tDq = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    eDq = "keyword";
  function Bz8(A, K, q = eDq) {
    let Y = {};
    if (typeof A === "string") z(q, A.split(" "));else if (Array.isArray(A)) z(q, A);else Object.keys(A).forEach(function (w) {
      Object.assign(Y, Bz8(A[w], K, w));
    });
    return Y;
    function z(w, H) {
      if (K) H = H.map(J => J.toLowerCase());
      H.forEach(function (J) {
        let O = J.split("|");
        Y[O[0]] = [w, Ajq(O[0], O[1])];
      });
    }
  }
  function Ajq(A, K) {
    if (K) return Number(K);
    return Kjq(A) ? 0 : 1;
  }
  function Kjq(A) {
    return tDq.includes(A.toLowerCase());
  }
  function qjq(A, {
    plugins: K
  }) {
    function q(J, O) {
      return new RegExp(dTA(J), "m" + (A.case_insensitive ? "i" : "") + (O ? "g" : ""));
    }
    class Y {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(J, O) {
        O.position = this.position++, this.matchIndexes[this.matchAt] = O, this.regexes.push([O, J]), this.matchAt += CDq(J) + 1;
      }
      compile() {
        if (this.regexes.length === 0) this.exec = () => null;
        let J = this.regexes.map(O => O[1]);
        this.matcherRe = q(yDq(J), !0), this.lastIndex = 0;
      }
      exec(J) {
        this.matcherRe.lastIndex = this.lastIndex;
        let O = this.matcherRe.exec(J);
        if (!O) return null;
        let X = O.findIndex((_, G) => G > 0 && _ !== void 0),
          $ = this.matchIndexes[X];
        return O.splice(0, X), Object.assign(O, $);
      }
    }
    class z {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(J) {
        if (this.multiRegexes[J]) return this.multiRegexes[J];
        let O = new Y();
        return this.rules.slice(J).forEach(([X, $]) => O.addRule(X, $)), O.compile(), this.multiRegexes[J] = O, O;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(J, O) {
        if (this.rules.push([J, O]), O.type === "begin") this.count++;
      }
      exec(J) {
        let O = this.getMatcher(this.regexIndex);
        O.lastIndex = this.lastIndex;
        let X = O.exec(J);
        if (this.resumingScanAtSamePosition()) if (X && X.index === this.lastIndex) ;else {
          let $ = this.getMatcher(0);
          $.lastIndex = this.lastIndex + 1, X = $.exec(J);
        }
        if (X) {
          if (this.regexIndex += X.position + 1, this.regexIndex === this.count) this.considerAll();
        }
        return X;
      }
    }
    function w(J) {
      let O = new z();
      if (J.contains.forEach(X => O.addRule(X.begin, {
        rule: X,
        type: "begin"
      })), J.terminatorEnd) O.addRule(J.terminatorEnd, {
        type: "end"
      });
      if (J.illegal) O.addRule(J.illegal, {
        type: "illegal"
      });
      return O;
    }
    function H(J, O) {
      let X = J;
      if (J.isCompiled) return X;
      [aDq].forEach(_ => _(J, O)), A.compilerExtensions.forEach(_ => _(J, O)), J.__beforeBegin = null, [rDq, oDq, sDq].forEach(_ => _(J, O)), J.isCompiled = !0;
      let $ = null;
      if (typeof J.keywords === "object") $ = J.keywords.$pattern, delete J.keywords.$pattern;
      if (J.keywords) J.keywords = Bz8(J.keywords, A.case_insensitive);
      if (J.lexemes && $) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
      if ($ = $ || J.lexemes || /\w+/, X.keywordPatternRe = q($, !0), O) {
        if (!J.begin) J.begin = /\B|\b/;
        if (X.beginRe = q(J.begin), J.endSameAsBegin) J.end = J.begin;
        if (!J.end && !J.endsWithParent) J.end = /\B|\b/;
        if (J.end) X.endRe = q(J.end);
        if (X.terminatorEnd = dTA(J.end) || "", J.endsWithParent && O.terminatorEnd) X.terminatorEnd += (J.end ? "|" : "") + O.terminatorEnd;
      }
      if (J.illegal) X.illegalRe = q(J.illegal);
      if (!J.contains) J.contains = [];
      if (J.contains = [].concat(...J.contains.map(function (_) {
        return Yjq(_ === "self" ? J : _);
      })), J.contains.forEach(function (_) {
        H(_, X);
      }), J.starts) H(J.starts, O);
      return X.matcher = w(X), X;
    }
    if (!A.compilerExtensions) A.compilerExtensions = [];
    if (A.contains && A.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return A.classNameAliases = Hi(A.classNameAliases || {}), H(A);
  }
  function mz8(A) {
    if (!A) return !1;
    return A.endsWithParent || mz8(A.starts);
  }
  function Yjq(A) {
    if (A.variants && !A.cachedVariants) A.cachedVariants = A.variants.map(function (K) {
      return Hi(A, {
        variants: null
      }, K);
    });
    if (A.cachedVariants) return A.cachedVariants;
    if (mz8(A)) return Hi(A, {
      starts: A.starts ? Hi(A.starts) : null
    });
    if (Object.isFrozen(A)) return Hi(A);
    return A;
  }
  var zjq = "10.7.3";
  function wjq(A) {
    return Boolean(A || A === "");
  }
  function Hjq(A) {
    let K = {
      props: ["language", "code", "autodetect"],
      data: function () {
        return {
          detectedLanguage: "",
          unknownLanguage: !1
        };
      },
      computed: {
        className() {
          if (this.unknownLanguage) return "";
          return "hljs " + this.detectedLanguage;
        },
        highlighted() {
          if (!this.autoDetect && !A.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, pwA(this.code);
          let Y = {};
          if (this.autoDetect) Y = A.highlightAuto(this.code), this.detectedLanguage = Y.language;else Y = A.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language;
          return Y.value;
        },
        autoDetect() {
          return !this.language || wjq(this.autodetect);
        },
        ignoreIllegals() {
          return !0;
        }
      },
      render(Y) {
        return Y("pre", {}, [Y("code", {
          class: this.className,
          domProps: {
            innerHTML: this.highlighted
          }
        })]);
      }
    };
    return {
      Component: K,
      VuePlugin: {
        install(Y) {
          Y.component("highlightjs", K);
        }
      }
    };
  }
  var Jjq = {
    "after:highlightElement": ({
      el: A,
      result: K,
      text: q
    }) => {
      let Y = Ez8(A);
      if (!Y.length) return;
      let z = document.createElement("div");
      z.innerHTML = K.value, K.value = Ojq(Y, Ez8(z), q);
    }
  };
  function Kx1(A) {
    return A.nodeName.toLowerCase();
  }
  function Ez8(A) {
    let K = [];
    return function q(Y, z) {
      for (let w = Y.firstChild; w; w = w.nextSibling) if (w.nodeType === 3) z += w.nodeValue.length;else if (w.nodeType === 1) {
        if (K.push({
          event: "start",
          offset: z,
          node: w
        }), z = q(w, z), !Kx1(w).match(/br|hr|img|input/)) K.push({
          event: "stop",
          offset: z,
          node: w
        });
      }
      return z;
    }(A, 0), K;
  }
  function Ojq(A, K, q) {
    let Y = 0,
      z = "",
      w = [];
    function H() {
      if (!A.length || !K.length) return A.length ? A : K;
      if (A[0].offset !== K[0].offset) return A[0].offset < K[0].offset ? A : K;
      return K[0].event === "start" ? A : K;
    }
    function J($) {
      function _(G) {
        return " " + G.nodeName + '="' + pwA(G.value) + '"';
      }
      z += "<" + Kx1($) + [].map.call($.attributes, _).join("") + ">";
    }
    function O($) {
      z += "</" + Kx1($) + ">";
    }
    function X($) {
      ($.event === "start" ? J : O)($.node);
    }
    while (A.length || K.length) {
      let $ = H();
      if (z += pwA(q.substring(Y, $[0].offset)), Y = $[0].offset, $ === A) {
        w.reverse().forEach(O);
        do X($.splice(0, 1)[0]), $ = H(); while ($ === A && $.length && $[0].offset === Y);
        w.reverse().forEach(J);
      } else {
        if ($[0].event === "start") w.push($[0].node);else w.pop();
        X($.splice(0, 1)[0]);
      }
    }
    return z + pwA(q.substr(Y));
  }
  var kz8 = {},
    tb1 = A => {
      console.error(A);
    },
    Cz8 = (A, ...K) => {
      console.log(`WARN: ${A}`, ...K);
    },
    IE = (A, K) => {
      if (kz8[`${A}/${K}`]) return;
      console.log(`Deprecated as of ${A}. ${K}`), kz8[`${A}/${K}`] = !0;
    },
    eb1 = pwA,
    Lz8 = Hi,
    Rz8 = Symbol("nomatch"),
    Xjq = function (A) {
      let K = Object.create(null),
        q = Object.create(null),
        Y = [],
        z = !0,
        w = /(^(<[^>]+>|\t|)+|\n)/gm,
        H = "Could not find the language '{}', did you forget to load/include a language module?",
        J = {
          disableAutodetect: !0,
          name: "Plain text",
          contains: []
        },
        O = {
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: null,
          __emitter: Sz8
        };
      function X(a) {
        return O.noHighlightRe.test(a);
      }
      function $(a) {
        let JA = a.className + " ";
        JA += a.parentNode ? a.parentNode.className : "";
        let jA = O.languageDetectRe.exec(JA);
        if (jA) {
          let MA = d(jA[1]);
          if (!MA) Cz8(H.replace("{}", jA[1])), Cz8("Falling back to no-highlight mode for this block.", a);
          return MA ? jA[1] : "no-highlight";
        }
        return JA.split(/\s+/).find(MA => X(MA) || d(MA));
      }
      function _(a, JA, jA, MA) {
        let hA = "",
          yA = "";
        if (typeof JA === "object") hA = a, jA = JA.ignoreIllegals, yA = JA.language, MA = void 0;else IE("10.7.0", "highlight(lang, code, ...args) has been deprecated."), IE("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), yA = a, hA = JA;
        let AA = {
          code: hA,
          language: yA
        };
        qA("before:highlight", AA);
        let wA = AA.result ? AA.result : G(AA.language, AA.code, jA, MA);
        return wA.code = AA.code, qA("after:highlight", wA), wA;
      }
      function G(a, JA, jA, MA) {
        function hA($1, N1) {
          let A6 = LA.case_insensitive ? N1[0].toLowerCase() : N1[0];
          return Object.prototype.hasOwnProperty.call($1.keywords, A6) && $1.keywords[A6];
        }
        function yA() {
          if (!iA.keywords) {
            v1.addText(I1);
            return;
          }
          let $1 = 0;
          iA.keywordPatternRe.lastIndex = 0;
          let N1 = iA.keywordPatternRe.exec(I1),
            A6 = "";
          while (N1) {
            A6 += I1.substring($1, N1.index);
            let c1 = hA(iA, N1);
            if (c1) {
              let [w6, DA] = c1;
              if (v1.addText(A6), A6 = "", Q1 += DA, w6.startsWith("_")) A6 += N1[0];else {
                let EA = LA.classNameAliases[w6] || w6;
                v1.addKeyword(N1[0], EA);
              }
            } else A6 += N1[0];
            $1 = iA.keywordPatternRe.lastIndex, N1 = iA.keywordPatternRe.exec(I1);
          }
          A6 += I1.substr($1), v1.addText(A6);
        }
        function AA() {
          if (I1 === "") return;
          let $1 = null;
          if (typeof iA.subLanguage === "string") {
            if (!K[iA.subLanguage]) {
              v1.addText(I1);
              return;
            }
            $1 = G(iA.subLanguage, I1, !0, lA[iA.subLanguage]), lA[iA.subLanguage] = $1.top;
          } else $1 = W(I1, iA.subLanguage.length ? iA.subLanguage : null);
          if (iA.relevance > 0) Q1 += $1.relevance;
          v1.addSublanguage($1.emitter, $1.language);
        }
        function wA() {
          if (iA.subLanguage != null) AA();else yA();
          I1 = "";
        }
        function GA($1) {
          if ($1.className) v1.openNode(LA.classNameAliases[$1.className] || $1.className);
          return iA = Object.create($1, {
            parent: {
              value: iA
            }
          }), iA;
        }
        function OA($1, N1, A6) {
          let c1 = LDq($1.endRe, A6);
          if (c1) {
            if ($1["on:end"]) {
              let w6 = new Ax1($1);
              if ($1["on:end"](N1, w6), w6.isMatchIgnored) c1 = !1;
            }
            if (c1) {
              while ($1.endsParent && $1.parent) $1 = $1.parent;
              return $1;
            }
          }
          if ($1.endsWithParent) return OA($1.parent, N1, A6);
        }
        function t($1) {
          if (iA.matcher.regexIndex === 0) return I1 += $1[0], 1;else return w1 = !0, 0;
        }
        function XA($1) {
          let N1 = $1[0],
            A6 = $1.rule,
            c1 = new Ax1(A6),
            w6 = [A6.__beforeBegin, A6["on:begin"]];
          for (let DA of w6) {
            if (!DA) continue;
            if (DA($1, c1), c1.isMatchIgnored) return t(N1);
          }
          if (A6 && A6.endSameAsBegin) A6.endRe = vDq(N1);
          if (A6.skip) I1 += N1;else {
            if (A6.excludeBegin) I1 += N1;
            if (wA(), !A6.returnBegin && !A6.excludeBegin) I1 = N1;
          }
          return GA(A6), A6.returnBegin ? 0 : N1.length;
        }
        function VA($1) {
          let N1 = $1[0],
            A6 = JA.substr($1.index),
            c1 = OA(iA, $1, A6);
          if (!c1) return Rz8;
          let w6 = iA;
          if (w6.skip) I1 += N1;else {
            if (!(w6.returnEnd || w6.excludeEnd)) I1 += N1;
            if (wA(), w6.excludeEnd) I1 = N1;
          }
          do {
            if (iA.className) v1.closeNode();
            if (!iA.skip && !iA.subLanguage) Q1 += iA.relevance;
            iA = iA.parent;
          } while (iA !== c1.parent);
          if (c1.starts) {
            if (c1.endSameAsBegin) c1.starts.endRe = c1.endRe;
            GA(c1.starts);
          }
          return w6.returnEnd ? 0 : N1.length;
        }
        function vA() {
          let $1 = [];
          for (let N1 = iA; N1 !== LA; N1 = N1.parent) if (N1.className) $1.unshift(N1.className);
          $1.forEach(N1 => v1.openNode(N1));
        }
        let RA = {};
        function fA($1, N1) {
          let A6 = N1 && N1[0];
          if (I1 += $1, A6 == null) return wA(), 0;
          if (RA.type === "begin" && N1.type === "end" && RA.index === N1.index && A6 === "") {
            if (I1 += JA.slice(N1.index, N1.index + 1), !z) {
              let c1 = Error("0 width match regex");
              throw c1.languageName = a, c1.badRule = RA.rule, c1;
            }
            return 1;
          }
          if (RA = N1, N1.type === "begin") return XA(N1);else if (N1.type === "illegal" && !jA) {
            let c1 = Error('Illegal lexeme "' + A6 + '" for mode "' + (iA.className || "<unnamed>") + '"');
            throw c1.mode = iA, c1;
          } else if (N1.type === "end") {
            let c1 = VA(N1);
            if (c1 !== Rz8) return c1;
          }
          if (N1.type === "illegal" && A6 === "") return 1;
          if (C6 > 1e5 && C6 > N1.index * 3) throw Error("potential infinite loop, way more iterations than matches");
          return I1 += A6, A6.length;
        }
        let LA = d(a);
        if (!LA) throw tb1(H.replace("{}", a)), Error('Unknown language: "' + a + '"');
        let SA = qjq(LA, {
            plugins: Y
          }),
          xA = "",
          iA = MA || SA,
          lA = {},
          v1 = new O.__emitter(O);
        vA();
        let I1 = "",
          Q1 = 0,
          B1 = 0,
          C6 = 0,
          w1 = !1;
        try {
          iA.matcher.considerAll();
          for (;;) {
            if (C6++, w1) w1 = !1;else iA.matcher.considerAll();
            iA.matcher.lastIndex = B1;
            let $1 = iA.matcher.exec(JA);
            if (!$1) break;
            let N1 = JA.substring(B1, $1.index),
              A6 = fA(N1, $1);
            B1 = $1.index + A6;
          }
          return fA(JA.substr(B1)), v1.closeAllNodes(), v1.finalize(), xA = v1.toHTML(), {
            relevance: Math.floor(Q1),
            value: xA,
            language: a,
            illegal: !1,
            emitter: v1,
            top: iA
          };
        } catch ($1) {
          if ($1.message && $1.message.includes("Illegal")) return {
            illegal: !0,
            illegalBy: {
              msg: $1.message,
              context: JA.slice(B1 - 100, B1 + 100),
              mode: $1.mode
            },
            sofar: xA,
            relevance: 0,
            value: eb1(JA),
            emitter: v1
          };else if (z) return {
            illegal: !1,
            relevance: 0,
            value: eb1(JA),
            emitter: v1,
            language: a,
            top: iA,
            errorRaised: $1
          };else throw $1;
        }
      }
      function Z(a) {
        let JA = {
          relevance: 0,
          emitter: new O.__emitter(O),
          value: eb1(a),
          illegal: !1,
          top: J
        };
        return JA.emitter.addText(a), JA;
      }
      function W(a, JA) {
        JA = JA || O.languages || Object.keys(K);
        let jA = Z(a),
          MA = JA.filter(d).filter(c).map(GA => G(GA, a, !1));
        MA.unshift(jA);
        let hA = MA.sort((GA, OA) => {
            if (GA.relevance !== OA.relevance) return OA.relevance - GA.relevance;
            if (GA.language && OA.language) {
              if (d(GA.language).supersetOf === OA.language) return 1;else if (d(OA.language).supersetOf === GA.language) return -1;
            }
            return 0;
          }),
          [yA, AA] = hA,
          wA = yA;
        return wA.second_best = AA, wA;
      }
      function D(a) {
        if (!(O.tabReplace || O.useBR)) return a;
        return a.replace(w, JA => {
          if (JA === `
`) return O.useBR ? "<br>" : JA;else if (O.tabReplace) return JA.replace(/\t/g, O.tabReplace);
          return JA;
        });
      }
      function j(a, JA, jA) {
        let MA = JA ? q[JA] : jA;
        if (a.classList.add("hljs"), MA) a.classList.add(MA);
      }
      let M = {
          "before:highlightElement": ({
            el: a
          }) => {
            if (O.useBR) a.innerHTML = a.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, `
`);
          },
          "after:highlightElement": ({
            result: a
          }) => {
            if (O.useBR) a.value = a.value.replace(/\n/g, "<br>");
          }
        },
        P = /^(<[^>]+>|\t)+/gm,
        f = {
          "after:highlightElement": ({
            result: a
          }) => {
            if (O.tabReplace) a.value = a.value.replace(P, JA => JA.replace(/\t/g, O.tabReplace));
          }
        };
      function N(a) {
        let JA = null,
          jA = $(a);
        if (X(jA)) return;
        qA("before:highlightElement", {
          el: a,
          language: jA
        }), JA = a;
        let MA = JA.textContent,
          hA = jA ? _(MA, {
            language: jA,
            ignoreIllegals: !0
          }) : W(MA);
        if (qA("after:highlightElement", {
          el: a,
          result: hA,
          text: MA
        }), a.innerHTML = hA.value, j(a, jA, hA.language), a.result = {
          language: hA.language,
          re: hA.relevance,
          relavance: hA.relevance
        }, hA.second_best) a.second_best = {
          language: hA.second_best.language,
          re: hA.second_best.relevance,
          relavance: hA.second_best.relevance
        };
      }
      function T(a) {
        if (a.useBR) IE("10.3.0", "'useBR' will be removed entirely in v11.0"), IE("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
        O = Lz8(O, a);
      }
      let C = () => {
        if (C.called) return;
        C.called = !0, IE("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(N);
      };
      function R() {
        IE("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), x = !0;
      }
      let x = !1;
      function y() {
        if (document.readyState === "loading") {
          x = !0;
          return;
        }
        document.querySelectorAll("pre code").forEach(N);
      }
      function B() {
        if (x) y();
      }
      if (typeof window < "u" && window.addEventListener) window.addEventListener("DOMContentLoaded", B, !1);
      function b(a, JA) {
        let jA = null;
        try {
          jA = JA(A);
        } catch (MA) {
          if (tb1("Language definition for '{}' could not be registered.".replace("{}", a)), !z) throw MA;else tb1(MA);
          jA = J;
        }
        if (!jA.name) jA.name = a;
        if (K[a] = jA, jA.rawDefinition = JA.bind(null, A), jA.aliases) r(jA.aliases, {
          languageName: a
        });
      }
      function F(a) {
        delete K[a];
        for (let JA of Object.keys(q)) if (q[JA] === a) delete q[JA];
      }
      function Q() {
        return Object.keys(K);
      }
      function u(a) {
        IE("10.4.0", "requireLanguage will be removed entirely in v11."), IE("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
        let JA = d(a);
        if (JA) return JA;
        throw Error("The '{}' language is required, but not loaded.".replace("{}", a));
      }
      function d(a) {
        return a = (a || "").toLowerCase(), K[a] || K[q[a]];
      }
      function r(a, {
        languageName: JA
      }) {
        if (typeof a === "string") a = [a];
        a.forEach(jA => {
          q[jA.toLowerCase()] = JA;
        });
      }
      function c(a) {
        let JA = d(a);
        return JA && !JA.disableAutodetect;
      }
      function YA(a) {
        if (a["before:highlightBlock"] && !a["before:highlightElement"]) a["before:highlightElement"] = JA => {
          a["before:highlightBlock"](Object.assign({
            block: JA.el
          }, JA));
        };
        if (a["after:highlightBlock"] && !a["after:highlightElement"]) a["after:highlightElement"] = JA => {
          a["after:highlightBlock"](Object.assign({
            block: JA.el
          }, JA));
        };
      }
      function e(a) {
        YA(a), Y.push(a);
      }
      function qA(a, JA) {
        let jA = a;
        Y.forEach(function (MA) {
          if (MA[jA]) MA[jA](JA);
        });
      }
      function HA(a) {
        return IE("10.2.0", "fixMarkup will be removed entirely in v11.0"), IE("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), D(a);
      }
      function _A(a) {
        return IE("10.7.0", "highlightBlock will be removed entirely in v12.0"), IE("10.7.0", "Please use highlightElement now."), N(a);
      }
      Object.assign(A, {
        highlight: _,
        highlightAuto: W,
        highlightAll: y,
        fixMarkup: HA,
        highlightElement: N,
        highlightBlock: _A,
        configure: T,
        initHighlighting: C,
        initHighlightingOnLoad: R,
        registerLanguage: b,
        unregisterLanguage: F,
        listLanguages: Q,
        getLanguage: d,
        registerAliases: r,
        requireLanguage: u,
        autoDetection: c,
        inherit: Lz8,
        addPlugin: e,
        vuePlugin: Hjq(A).VuePlugin
      }), A.debugMode = function () {
        z = !1;
      }, A.safeMode = function () {
        z = !0;
      }, A.versionString = zjq;
      for (let a in GaA) if (typeof GaA[a] === "object") yz8(GaA[a]);
      return Object.assign(A, GaA), A.addPlugin(M), A.addPlugin(Jjq), A.addPlugin(f), A;
    },
    $jq = Xjq({});
  gz8.exports = $jq;
});

// Register to shared state
__$.Fz8 = Fz8;
