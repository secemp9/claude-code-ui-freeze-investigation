// Module: uk
// Dependencies: m$4, l51, nyA, cyA, LD, hXA, dyA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uk = v((bYw, U$4) => {
  var $A9 = /\s+/g;
  class iyA {
    constructor(A, K) {
      if (K = GA9(K), A instanceof iyA) if (A.loose === !!K.loose && A.includePrerelease === !!K.includePrerelease) return A;else return new iyA(A.raw, K);
      if (A instanceof Aq6) return this.raw = A.value, this.set = [[A]], this.formatted = void 0, this;
      if (this.options = K, this.loose = !!K.loose, this.includePrerelease = !!K.includePrerelease, this.raw = A.trim().replace($A9, " "), this.set = this.raw.split("||").map(q => this.parseRange(q.trim())).filter(q => q.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let q = this.set[0];
        if (this.set = this.set.filter(Y => !F$4(Y[0])), this.set.length === 0) this.set = [q];else if (this.set.length > 1) {
          for (let Y of this.set) if (Y.length === 1 && VA9(Y[0])) {
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
      let q = ((this.options.includePrerelease && MA9) | (this.options.loose && PA9)) + ":" + A,
        Y = g$4.get(q);
      if (Y) return Y;
      let z = this.options.loose,
        w = z ? gV[OM.HYPHENRANGELOOSE] : gV[OM.HYPHENRANGE];
      A = A.replace(w, yA9(this.options.includePrerelease)), mH("hyphen replace", A), A = A.replace(gV[OM.COMPARATORTRIM], WA9), mH("comparator trim", A), A = A.replace(gV[OM.TILDETRIM], DA9), mH("tilde trim", A), A = A.replace(gV[OM.CARETTRIM], jA9), mH("caret trim", A);
      let H = A.split(" ").map($ => fA9($, this.options)).join(" ").split(/\s+/).map($ => RA9($, this.options));
      if (z) H = H.filter($ => {
        return mH("loose invalid filter", $, this.options), !!$.match(gV[OM.COMPARATORLOOSE]);
      });
      mH("range list", H);
      let J = new Map(),
        O = H.map($ => new Aq6($, this.options));
      for (let $ of O) {
        if (F$4($)) return [$];
        J.set($.value, $);
      }
      if (J.size > 1 && J.has("")) J.delete("");
      let X = [...J.values()];
      return g$4.set(q, X), X;
    }
    intersects(A, K) {
      if (!(A instanceof iyA)) throw TypeError("a Range is required");
      return this.set.some(q => {
        return Q$4(q, K) && A.set.some(Y => {
          return Q$4(Y, K) && q.every(z => {
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
        A = new ZA9(A, this.options);
      } catch (K) {
        return !1;
      }
      for (let K = 0; K < this.set.length; K++) if (IA9(this.set[K], A, this.options)) return !0;
      return !1;
    }
  }
  U$4.exports = iyA;
  var _A9 = __$.m$4(),
    g$4 = new _A9(),
    GA9 = __$.l51(),
    Aq6 = __$.nyA(),
    mH = __$.cyA(),
    ZA9 = __$.LD(),
    {
      safeRe: gV,
      t: OM,
      comparatorTrimReplace: WA9,
      tildeTrimReplace: DA9,
      caretTrimReplace: jA9
    } = __$.hXA(),
    {
      FLAG_INCLUDE_PRERELEASE: MA9,
      FLAG_LOOSE: PA9
    } = __$.dyA(),
    F$4 = A => A.value === "<0.0.0-0",
    VA9 = A => A.value === "",
    Q$4 = (A, K) => {
      let q = !0,
        Y = A.slice(),
        z = Y.pop();
      while (q && Y.length) q = Y.every(w => {
        return z.intersects(w, K);
      }), z = Y.pop();
      return q;
    },
    fA9 = (A, K) => {
      return mH("comp", A, K), A = vA9(A, K), mH("caret", A), A = NA9(A, K), mH("tildes", A), A = kA9(A, K), mH("xrange", A), A = LA9(A, K), mH("stars", A), A;
    },
    XM = A => !A || A.toLowerCase() === "x" || A === "*",
    NA9 = (A, K) => {
      return A.trim().split(/\s+/).map(q => TA9(q, K)).join(" ");
    },
    TA9 = (A, K) => {
      let q = K.loose ? gV[OM.TILDELOOSE] : gV[OM.TILDE];
      return A.replace(q, (Y, z, w, H, J) => {
        mH("tilde", A, Y, z, w, H, J);
        let O;
        if (XM(z)) O = "";else if (XM(w)) O = `>=${z}.0.0 <${+z + 1}.0.0-0`;else if (XM(H)) O = `>=${z}.${w}.0 <${z}.${+w + 1}.0-0`;else if (J) mH("replaceTilde pr", J), O = `>=${z}.${w}.${H}-${J} <${z}.${+w + 1}.0-0`;else O = `>=${z}.${w}.${H} <${z}.${+w + 1}.0-0`;
        return mH("tilde return", O), O;
      });
    },
    vA9 = (A, K) => {
      return A.trim().split(/\s+/).map(q => EA9(q, K)).join(" ");
    },
    EA9 = (A, K) => {
      mH("caret", A, K);
      let q = K.loose ? gV[OM.CARETLOOSE] : gV[OM.CARET],
        Y = K.includePrerelease ? "-0" : "";
      return A.replace(q, (z, w, H, J, O) => {
        mH("caret", A, z, w, H, J, O);
        let X;
        if (XM(w)) X = "";else if (XM(H)) X = `>=${w}.0.0${Y} <${+w + 1}.0.0-0`;else if (XM(J)) {
          if (w === "0") X = `>=${w}.${H}.0${Y} <${w}.${+H + 1}.0-0`;else X = `>=${w}.${H}.0${Y} <${+w + 1}.0.0-0`;
        } else if (O) {
          if (mH("replaceCaret pr", O), w === "0") {
            if (H === "0") X = `>=${w}.${H}.${J}-${O} <${w}.${H}.${+J + 1}-0`;else X = `>=${w}.${H}.${J}-${O} <${w}.${+H + 1}.0-0`;
          } else X = `>=${w}.${H}.${J}-${O} <${+w + 1}.0.0-0`;
        } else if (mH("no pr"), w === "0") {
          if (H === "0") X = `>=${w}.${H}.${J}${Y} <${w}.${H}.${+J + 1}-0`;else X = `>=${w}.${H}.${J}${Y} <${w}.${+H + 1}.0-0`;
        } else X = `>=${w}.${H}.${J} <${+w + 1}.0.0-0`;
        return mH("caret return", X), X;
      });
    },
    kA9 = (A, K) => {
      return mH("replaceXRanges", A, K), A.split(/\s+/).map(q => CA9(q, K)).join(" ");
    },
    CA9 = (A, K) => {
      A = A.trim();
      let q = K.loose ? gV[OM.XRANGELOOSE] : gV[OM.XRANGE];
      return A.replace(q, (Y, z, w, H, J, O) => {
        mH("xRange", A, Y, z, w, H, J, O);
        let X = XM(w),
          $ = X || XM(H),
          _ = $ || XM(J),
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
        return mH("xRange return", Y), Y;
      });
    },
    LA9 = (A, K) => {
      return mH("replaceStars", A, K), A.trim().replace(gV[OM.STAR], "");
    },
    RA9 = (A, K) => {
      return mH("replaceGTE0", A, K), A.trim().replace(gV[K.includePrerelease ? OM.GTE0PRE : OM.GTE0], "");
    },
    yA9 = A => (K, q, Y, z, w, H, J, O, X, $, _, G) => {
      if (XM(Y)) q = "";else if (XM(z)) q = `>=${Y}.0.0${A ? "-0" : ""}`;else if (XM(w)) q = `>=${Y}.${z}.0${A ? "-0" : ""}`;else if (H) q = `>=${q}`;else q = `>=${q}${A ? "-0" : ""}`;
      if (XM(X)) O = "";else if (XM($)) O = `<${+X + 1}.0.0-0`;else if (XM(_)) O = `<${X}.${+$ + 1}.0-0`;else if (G) O = `<=${X}.${$}.${_}-${G}`;else if (A) O = `<${X}.${$}.${+_ + 1}-0`;else O = `<=${O}`;
      return `${q} ${O}`.trim();
    },
    IA9 = (A, K, q) => {
      for (let Y = 0; Y < A.length; Y++) if (!A[Y].test(K)) return !1;
      if (K.prerelease.length && !q.includePrerelease) {
        for (let Y = 0; Y < A.length; Y++) {
          if (mH(A[Y].semver), A[Y].semver === Aq6.ANY) continue;
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
__$.uk = uk;
