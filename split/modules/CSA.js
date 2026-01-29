// Module: CSA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CSA = v((mMw, rY1) => {
  function Du4(A) {
    return Array.isArray(A) ? A : [A];
  }
  var EL9 = void 0,
    oY6 = "",
    Zu4 = " ",
    rY6 = "\\",
    kL9 = /^\s+$/,
    CL9 = /(?:[^\\]|^)\\$/,
    LL9 = /^\\!/,
    RL9 = /^\\#/,
    yL9 = /\r?\n/g,
    IL9 = /^\.{0,2}\/|^\.{1,2}$/,
    SL9 = /\/$/,
    m$A = "/",
    ju4 = "node-ignore";
  if (typeof Symbol < "u") ju4 = Symbol.for("node-ignore");
  var Mu4 = ju4,
    g$A = (A, K, q) => {
      return Object.defineProperty(A, K, {
        value: q
      }), q;
    },
    hL9 = /([0-z])-([0-z])/g,
    Pu4 = () => !1,
    bL9 = A => A.replace(hL9, (K, q, Y) => q.charCodeAt(0) <= Y.charCodeAt(0) ? K : oY6),
    xL9 = A => {
      let {
        length: K
      } = A;
      return A.slice(0, K - K % 2);
    },
    uL9 = [[/^\uFEFF/, () => oY6], [/((?:\\\\)*?)(\\?\s+)$/, (A, K, q) => K + (q.indexOf("\\") === 0 ? Zu4 : oY6)], [/(\\+?)\s/g, (A, K) => {
      let {
        length: q
      } = K;
      return K.slice(0, q - q % 2) + Zu4;
    }], [/[\\$.|*+(){^]/g, A => `\\${A}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function () {
      return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (A, K, q) => K + 6 < q.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (A, K, q) => {
      let Y = q.replace(/\\\*/g, "[^\\/]*");
      return K + Y;
    }], [/\\\\\\(?=[$.|*+(){^])/g, () => rY6], [/\\\\/g, () => rY6], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (A, K, q, Y, z) => K === rY6 ? `\\[${q}${xL9(Y)}${z}` : z === "]" ? Y.length % 2 === 0 ? `[${bL9(q)}${Y}]` : "[]" : "[]"], [/(?:[^*])$/, A => /\/$/.test(A) ? `${A}$` : `${A}(?=$|\\/$)`]],
    BL9 = /(^|\\\/)?\\\*$/,
    kSA = "regex",
    iY1 = "checkRegex",
    Wu4 = "_",
    mL9 = {
      [kSA](A, K) {
        return `${K ? `${K}[^/]+` : "[^/]*"}(?=$|\\/$)`;
      },
      [iY1](A, K) {
        return `${K ? `${K}[^/]*` : "[^/]*"}(?=$|\\/$)`;
      }
    },
    gL9 = A => uL9.reduce((K, [q, Y]) => K.replace(q, Y.bind(A)), A),
    nY1 = A => typeof A === "string",
    FL9 = A => A && nY1(A) && !kL9.test(A) && !CL9.test(A) && A.indexOf("#") !== 0,
    QL9 = A => A.split(yL9).filter(Boolean);
  class Vu4 {
    constructor(A, K, q, Y, z, w) {
      this.pattern = A, this.mark = K, this.negative = z, g$A(this, "body", q), g$A(this, "ignoreCase", Y), g$A(this, "regexPrefix", w);
    }
    get regex() {
      let A = Wu4 + kSA;
      if (this[A]) return this[A];
      return this._make(kSA, A);
    }
    get checkRegex() {
      let A = Wu4 + iY1;
      if (this[A]) return this[A];
      return this._make(iY1, A);
    }
    _make(A, K) {
      let q = this.regexPrefix.replace(BL9, mL9[A]),
        Y = this.ignoreCase ? new RegExp(q, "i") : new RegExp(q);
      return g$A(this, K, Y);
    }
  }
  var UL9 = ({
    pattern: A,
    mark: K
  }, q) => {
    let Y = !1,
      z = A;
    if (z.indexOf("!") === 0) Y = !0, z = z.substr(1);
    z = z.replace(LL9, "!").replace(RL9, "#");
    let w = gL9(z);
    return new Vu4(A, K, z, q, Y, w);
  };
  class fu4 {
    constructor(A) {
      this._ignoreCase = A, this._rules = [];
    }
    _add(A) {
      if (A && A[Mu4]) {
        this._rules = this._rules.concat(A._rules._rules), this._added = !0;
        return;
      }
      if (nY1(A)) A = {
        pattern: A
      };
      if (FL9(A.pattern)) {
        let K = UL9(A, this._ignoreCase);
        this._added = !0, this._rules.push(K);
      }
    }
    add(A) {
      return this._added = !1, Du4(nY1(A) ? QL9(A) : A).forEach(this._add, this), this._added;
    }
    test(A, K, q) {
      let Y = !1,
        z = !1,
        w;
      this._rules.forEach(J => {
        let {
          negative: O
        } = J;
        if (z === O && Y !== z || O && !Y && !z && !K) return;
        if (!J[q].test(A)) return;
        Y = !O, z = O, w = O ? EL9 : J;
      });
      let H = {
        ignored: Y,
        unignored: z
      };
      if (w) H.rule = w;
      return H;
    }
  }
  var pL9 = (A, K) => {
      throw new K(A);
    },
    YU = (A, K, q) => {
      if (!nY1(A)) return q(`path must be a string, but got \`${K}\``, TypeError);
      if (!A) return q("path must not be empty", TypeError);
      if (YU.isNotRelative(A)) return q(`path should be a \`path.relative()\`d string, but got "${K}"`, RangeError);
      return !0;
    },
    Nu4 = A => IL9.test(A);
  YU.isNotRelative = Nu4;
  YU.convert = A => A;
  class Tu4 {
    constructor({
      ignorecase: A = !0,
      ignoreCase: K = A,
      allowRelativePaths: q = !1
    } = {}) {
      g$A(this, Mu4, !0), this._rules = new fu4(K), this._strictPathCheck = !q, this._initCache();
    }
    _initCache() {
      this._ignoreCache = Object.create(null), this._testCache = Object.create(null);
    }
    add(A) {
      if (this._rules.add(A)) this._initCache();
      return this;
    }
    addPattern(A) {
      return this.add(A);
    }
    _test(A, K, q, Y) {
      let z = A && YU.convert(A);
      return YU(z, A, this._strictPathCheck ? pL9 : Pu4), this._t(z, K, q, Y);
    }
    checkIgnore(A) {
      if (!SL9.test(A)) return this.test(A);
      let K = A.split(m$A).filter(Boolean);
      if (K.pop(), K.length) {
        let q = this._t(K.join(m$A) + m$A, this._testCache, !0, K);
        if (q.ignored) return q;
      }
      return this._rules.test(A, !1, iY1);
    }
    _t(A, K, q, Y) {
      if (A in K) return K[A];
      if (!Y) Y = A.split(m$A).filter(Boolean);
      if (Y.pop(), !Y.length) return K[A] = this._rules.test(A, q, kSA);
      let z = this._t(Y.join(m$A) + m$A, K, q, Y);
      return K[A] = z.ignored ? z : this._rules.test(A, q, kSA);
    }
    ignores(A) {
      return this._test(A, this._ignoreCache, !1).ignored;
    }
    createFilter() {
      return A => !this.ignores(A);
    }
    filter(A) {
      return Du4(A).filter(this.createFilter());
    }
    test(A) {
      return this._test(A, this._testCache, !0);
    }
  }
  var aY6 = A => new Tu4(A),
    dL9 = A => YU(A && YU.convert(A), A, Pu4),
    vu4 = () => {
      let A = q => /^\\\\\?\\/.test(q) || /["<>|\u0000-\u001F]+/u.test(q) ? q : q.replace(/\\/g, "/");
      YU.convert = A;
      let K = /^[a-z]:\//i;
      YU.isNotRelative = q => K.test(q) || Nu4(q);
    };
  if (typeof process < "u" && process.platform === "win32") vu4();
  rY1.exports = aY6;
  aY6.default = aY6;
  rY1.exports.isPathValid = dL9;
  g$A(rY1.exports, Symbol.for("setupWindows"), vu4);
});

// Register to shared state
__$.CSA = CSA;
