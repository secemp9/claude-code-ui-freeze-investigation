// Module: CY6
// Dependencies: Lb4, EY1, ib4, ZSA, R$A, WSA, vY1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CY6 = v((Rjw, ab4) => {
  var fE9 = /\s+/g;
  class jSA {
    constructor(A, K) {
      if (K = TE9(K), A instanceof jSA) if (A.loose === !!K.loose && A.includePrerelease === !!K.includePrerelease) return A;else return new jSA(A.raw, K);
      if (A instanceof LY6) return this.raw = A.value, this.set = [[A]], this.formatted = void 0, this;
      if (this.options = K, this.loose = !!K.loose, this.includePrerelease = !!K.includePrerelease, this.raw = A.trim().replace(fE9, " "), this.set = this.raw.split("||").map(q => this.parseRange(q.trim())).filter(q => q.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let q = this.set[0];
        if (this.set = this.set.filter(Y => !rb4(Y[0])), this.set.length === 0) this.set = [q];else if (this.set.length > 1) {
          for (let Y of this.set) if (Y.length === 1 && yE9(Y[0])) {
            this.set = [Y];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let A = 0; A < this.set.length; A++) {
          if (A > 0) this.formatted += "||";
          let K = this.set[A];
          for (let q = 0; q < K.length; q++) {
            if (q > 0) this.formatted += " ";
            this.formatted += K[q].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(A) {
      let q = ((this.options.includePrerelease && LE9) | (this.options.loose && RE9)) + ":" + A,
        Y = nb4.get(q);
      if (Y) return Y;
      let z = this.options.loose,
        w = z ? pV[GM.HYPHENRANGELOOSE] : pV[GM.HYPHENRANGE];
      A = A.replace(w, FE9(this.options.includePrerelease)), gH("hyphen replace", A), A = A.replace(pV[GM.COMPARATORTRIM], EE9), gH("comparator trim", A), A = A.replace(pV[GM.TILDETRIM], kE9), gH("tilde trim", A), A = A.replace(pV[GM.CARETTRIM], CE9), gH("caret trim", A);
      let H = A.split(" ").map($ => IE9($, this.options)).join(" ").split(/\s+/).map($ => gE9($, this.options));
      if (z) H = H.filter($ => {
        return gH("loose invalid filter", $, this.options), !!$.match(pV[GM.COMPARATORLOOSE]);
      });
      gH("range list", H);
      let J = new Map(),
        O = H.map($ => new LY6($, this.options));
      for (let $ of O) {
        if (rb4($)) return [$];
        J.set($.value, $);
      }
      if (J.size > 1 && J.has("")) J.delete("");
      let X = [...J.values()];
      return nb4.set(q, X), X;
    }
    intersects(A, K) {
      if (!(A instanceof jSA)) throw TypeError("a Range is required");
      return this.set.some(q => {
        return ob4(q, K) && A.set.some(Y => {
          return ob4(Y, K) && q.every(z => {
            return Y.every(w => {
              return z.intersects(w, K);
            });
          });
        });
      });
    }
    test(A) {
      if (!A) return !1;
      if (typeof A === "string") try {
        A = new vE9(A, this.options);
      } catch (K) {
        return !1;
      }
      for (let K = 0; K < this.set.length; K++) if (QE9(this.set[K], A, this.options)) return !0;
      return !1;
    }
  }
  ab4.exports = jSA;
  var NE9 = __$.Lb4(),
    nb4 = new NE9(),
    TE9 = __$.EY1(),
    LY6 = __$.ib4(),
    gH = __$.ZSA(),
    vE9 = __$.R$A(),
    {
      safeRe: pV,
      t: GM,
      comparatorTrimReplace: EE9,
      tildeTrimReplace: kE9,
      caretTrimReplace: CE9
    } = __$.WSA(),
    {
      FLAG_INCLUDE_PRERELEASE: LE9,
      FLAG_LOOSE: RE9
    } = __$.vY1(),
    rb4 = A => A.value === "<0.0.0-0",
    yE9 = A => A.value === "",
    ob4 = (A, K) => {
      let q = !0,
        Y = A.slice(),
        z = Y.pop();
      while (q && Y.length) q = Y.every(w => {
        return z.intersects(w, K);
      }), z = Y.pop();
      return q;
    },
    IE9 = (A, K) => {
      return gH("comp", A, K), A = bE9(A, K), gH("caret", A), A = SE9(A, K), gH("tildes", A), A = uE9(A, K), gH("xrange", A), A = mE9(A, K), gH("stars", A), A;
    },
    ZM = A => !A || A.toLowerCase() === "x" || A === "*",
    SE9 = (A, K) => {
      return A.trim().split(/\s+/).map(q => hE9(q, K)).join(" ");
    },
    hE9 = (A, K) => {
      let q = K.loose ? pV[GM.TILDELOOSE] : pV[GM.TILDE];
      return A.replace(q, (Y, z, w, H, J) => {
        gH("tilde", A, Y, z, w, H, J);
        let O;
        if (ZM(z)) O = "";else if (ZM(w)) O = `>=${z}.0.0 <${+z + 1}.0.0-0`;else if (ZM(H)) O = `>=${z}.${w}.0 <${z}.${+w + 1}.0-0`;else if (J) gH("replaceTilde pr", J), O = `>=${z}.${w}.${H}-${J} <${z}.${+w + 1}.0-0`;else O = `>=${z}.${w}.${H} <${z}.${+w + 1}.0-0`;
        return gH("tilde return", O), O;
      });
    },
    bE9 = (A, K) => {
      return A.trim().split(/\s+/).map(q => xE9(q, K)).join(" ");
    },
    xE9 = (A, K) => {
      gH("caret", A, K);
      let q = K.loose ? pV[GM.CARETLOOSE] : pV[GM.CARET],
        Y = K.includePrerelease ? "-0" : "";
      return A.replace(q, (z, w, H, J, O) => {
        gH("caret", A, z, w, H, J, O);
        let X;
        if (ZM(w)) X = "";else if (ZM(H)) X = `>=${w}.0.0${Y} <${+w + 1}.0.0-0`;else if (ZM(J)) {
          if (w === "0") X = `>=${w}.${H}.0${Y} <${w}.${+H + 1}.0-0`;else X = `>=${w}.${H}.0${Y} <${+w + 1}.0.0-0`;
        } else if (O) {
          if (gH("replaceCaret pr", O), w === "0") {
            if (H === "0") X = `>=${w}.${H}.${J}-${O} <${w}.${H}.${+J + 1}-0`;else X = `>=${w}.${H}.${J}-${O} <${w}.${+H + 1}.0-0`;
          } else X = `>=${w}.${H}.${J}-${O} <${+w + 1}.0.0-0`;
        } else if (gH("no pr"), w === "0") {
          if (H === "0") X = `>=${w}.${H}.${J}${Y} <${w}.${H}.${+J + 1}-0`;else X = `>=${w}.${H}.${J}${Y} <${w}.${+H + 1}.0-0`;
        } else X = `>=${w}.${H}.${J} <${+w + 1}.0.0-0`;
        return gH("caret return", X), X;
      });
    },
    uE9 = (A, K) => {
      return gH("replaceXRanges", A, K), A.split(/\s+/).map(q => BE9(q, K)).join(" ");
    },
    BE9 = (A, K) => {
      A = A.trim();
      let q = K.loose ? pV[GM.XRANGELOOSE] : pV[GM.XRANGE];
      return A.replace(q, (Y, z, w, H, J, O) => {
        gH("xRange", A, Y, z, w, H, J, O);
        let X = ZM(w),
          $ = X || ZM(H),
          _ = $ || ZM(J),
          G = _;
        if (z === "=" && G) z = "";
        if (O = K.includePrerelease ? "-0" : "", X) {
          if (z === ">" || z === "<") Y = "<0.0.0-0";else Y = "*";
        } else if (z && G) {
          if ($) H = 0;
          if (J = 0, z === ">") {
            if (z = ">=", $) w = +w + 1, H = 0, J = 0;else H = +H + 1, J = 0;
          } else if (z === "<=") if (z = "<", $) w = +w + 1;else H = +H + 1;
          if (z === "<") O = "-0";
          Y = `${z + w}.${H}.${J}${O}`;
        } else if ($) Y = `>=${w}.0.0${O} <${+w + 1}.0.0-0`;else if (_) Y = `>=${w}.${H}.0${O} <${w}.${+H + 1}.0-0`;
        return gH("xRange return", Y), Y;
      });
    },
    mE9 = (A, K) => {
      return gH("replaceStars", A, K), A.trim().replace(pV[GM.STAR], "");
    },
    gE9 = (A, K) => {
      return gH("replaceGTE0", A, K), A.trim().replace(pV[K.includePrerelease ? GM.GTE0PRE : GM.GTE0], "");
    },
    FE9 = A => (K, q, Y, z, w, H, J, O, X, $, _, G) => {
      if (ZM(Y)) q = "";else if (ZM(z)) q = `>=${Y}.0.0${A ? "-0" : ""}`;else if (ZM(w)) q = `>=${Y}.${z}.0${A ? "-0" : ""}`;else if (H) q = `>=${q}`;else q = `>=${q}${A ? "-0" : ""}`;
      if (ZM(X)) O = "";else if (ZM($)) O = `<${+X + 1}.0.0-0`;else if (ZM(_)) O = `<${X}.${+$ + 1}.0-0`;else if (G) O = `<=${X}.${$}.${_}-${G}`;else if (A) O = `<${X}.${$}.${+_ + 1}-0`;else O = `<=${O}`;
      return `${q} ${O}`.trim();
    },
    QE9 = (A, K, q) => {
      for (let Y = 0; Y < A.length; Y++) if (!A[Y].test(K)) return !1;
      if (K.prerelease.length && !q.includePrerelease) {
        for (let Y = 0; Y < A.length; Y++) {
          if (gH(A[Y].semver), A[Y].semver === LY6.ANY) continue;
          if (A[Y].semver.prerelease.length > 0) {
            let z = A[Y].semver;
            if (z.major === K.major && z.minor === K.minor && z.patch === K.patch) return !0;
          }
        }
        return !1;
      }
      return !0;
    };
});

// Register to shared state
__$.CY6 = CY6;
