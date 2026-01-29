// Module: NC
// Dependencies: o47, XJ1, ZxA, $xA, QD, ZGA, XxA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NC = v((nmw, e47) => {
  var jqY = /\s+/g;
  class GxA {
    constructor(A, K) {
      if (K = PqY(K), A instanceof GxA) if (A.loose === !!K.loose && A.includePrerelease === !!K.includePrerelease) return A;else return new GxA(A.raw, K);
      if (A instanceof Z$6) return this.raw = A.value, this.set = [[A]], this.formatted = void 0, this;
      if (this.options = K, this.loose = !!K.loose, this.includePrerelease = !!K.includePrerelease, this.raw = A.trim().replace(jqY, " "), this.set = this.raw.split("||").map(q => this.parseRange(q.trim())).filter(q => q.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let q = this.set[0];
        if (this.set = this.set.filter(Y => !s47(Y[0])), this.set.length === 0) this.set = [q];else if (this.set.length > 1) {
          for (let Y of this.set) if (Y.length === 1 && kqY(Y[0])) {
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
      let q = ((this.options.includePrerelease && vqY) | (this.options.loose && EqY)) + ":" + A,
        Y = a47.get(q);
      if (Y) return Y;
      let z = this.options.loose,
        w = z ? Af[SM.HYPHENRANGELOOSE] : Af[SM.HYPHENRANGE];
      A = A.replace(w, uqY(this.options.includePrerelease)), pH("hyphen replace", A), A = A.replace(Af[SM.COMPARATORTRIM], fqY), pH("comparator trim", A), A = A.replace(Af[SM.TILDETRIM], NqY), pH("tilde trim", A), A = A.replace(Af[SM.CARETTRIM], TqY), pH("caret trim", A);
      let H = A.split(" ").map($ => CqY($, this.options)).join(" ").split(/\s+/).map($ => xqY($, this.options));
      if (z) H = H.filter($ => {
        return pH("loose invalid filter", $, this.options), !!$.match(Af[SM.COMPARATORLOOSE]);
      });
      pH("range list", H);
      let J = new Map(),
        O = H.map($ => new Z$6($, this.options));
      for (let $ of O) {
        if (s47($)) return [$];
        J.set($.value, $);
      }
      if (J.size > 1 && J.has("")) J.delete("");
      let X = [...J.values()];
      return a47.set(q, X), X;
    }
    intersects(A, K) {
      if (!(A instanceof GxA)) throw TypeError("a Range is required");
      return this.set.some(q => {
        return t47(q, K) && A.set.some(Y => {
          return t47(Y, K) && q.every(z => {
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
        A = new VqY(A, this.options);
      } catch (K) {
        return !1;
      }
      for (let K = 0; K < this.set.length; K++) if (BqY(this.set[K], A, this.options)) return !0;
      return !1;
    }
  }
  e47.exports = GxA;
  var MqY = __$.o47(),
    a47 = new MqY(),
    PqY = __$.XJ1(),
    Z$6 = __$.ZxA(),
    pH = __$.$xA(),
    VqY = __$.QD(),
    {
      safeRe: Af,
      t: SM,
      comparatorTrimReplace: fqY,
      tildeTrimReplace: NqY,
      caretTrimReplace: TqY
    } = __$.ZGA(),
    {
      FLAG_INCLUDE_PRERELEASE: vqY,
      FLAG_LOOSE: EqY
    } = __$.XxA(),
    s47 = A => A.value === "<0.0.0-0",
    kqY = A => A.value === "",
    t47 = (A, K) => {
      let q = !0,
        Y = A.slice(),
        z = Y.pop();
      while (q && Y.length) q = Y.every(w => {
        return z.intersects(w, K);
      }), z = Y.pop();
      return q;
    },
    CqY = (A, K) => {
      return pH("comp", A, K), A = yqY(A, K), pH("caret", A), A = LqY(A, K), pH("tildes", A), A = SqY(A, K), pH("xrange", A), A = bqY(A, K), pH("stars", A), A;
    },
    hM = A => !A || A.toLowerCase() === "x" || A === "*",
    LqY = (A, K) => {
      return A.trim().split(/\s+/).map(q => RqY(q, K)).join(" ");
    },
    RqY = (A, K) => {
      let q = K.loose ? Af[SM.TILDELOOSE] : Af[SM.TILDE];
      return A.replace(q, (Y, z, w, H, J) => {
        pH("tilde", A, Y, z, w, H, J);
        let O;
        if (hM(z)) O = "";else if (hM(w)) O = `>=${z}.0.0 <${+z + 1}.0.0-0`;else if (hM(H)) O = `>=${z}.${w}.0 <${z}.${+w + 1}.0-0`;else if (J) pH("replaceTilde pr", J), O = `>=${z}.${w}.${H}-${J} <${z}.${+w + 1}.0-0`;else O = `>=${z}.${w}.${H} <${z}.${+w + 1}.0-0`;
        return pH("tilde return", O), O;
      });
    },
    yqY = (A, K) => {
      return A.trim().split(/\s+/).map(q => IqY(q, K)).join(" ");
    },
    IqY = (A, K) => {
      pH("caret", A, K);
      let q = K.loose ? Af[SM.CARETLOOSE] : Af[SM.CARET],
        Y = K.includePrerelease ? "-0" : "";
      return A.replace(q, (z, w, H, J, O) => {
        pH("caret", A, z, w, H, J, O);
        let X;
        if (hM(w)) X = "";else if (hM(H)) X = `>=${w}.0.0${Y} <${+w + 1}.0.0-0`;else if (hM(J)) {
          if (w === "0") X = `>=${w}.${H}.0${Y} <${w}.${+H + 1}.0-0`;else X = `>=${w}.${H}.0${Y} <${+w + 1}.0.0-0`;
        } else if (O) {
          if (pH("replaceCaret pr", O), w === "0") {
            if (H === "0") X = `>=${w}.${H}.${J}-${O} <${w}.${H}.${+J + 1}-0`;else X = `>=${w}.${H}.${J}-${O} <${w}.${+H + 1}.0-0`;
          } else X = `>=${w}.${H}.${J}-${O} <${+w + 1}.0.0-0`;
        } else if (pH("no pr"), w === "0") {
          if (H === "0") X = `>=${w}.${H}.${J}${Y} <${w}.${H}.${+J + 1}-0`;else X = `>=${w}.${H}.${J}${Y} <${w}.${+H + 1}.0-0`;
        } else X = `>=${w}.${H}.${J} <${+w + 1}.0.0-0`;
        return pH("caret return", X), X;
      });
    },
    SqY = (A, K) => {
      return pH("replaceXRanges", A, K), A.split(/\s+/).map(q => hqY(q, K)).join(" ");
    },
    hqY = (A, K) => {
      A = A.trim();
      let q = K.loose ? Af[SM.XRANGELOOSE] : Af[SM.XRANGE];
      return A.replace(q, (Y, z, w, H, J, O) => {
        pH("xRange", A, Y, z, w, H, J, O);
        let X = hM(w),
          $ = X || hM(H),
          _ = $ || hM(J),
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
        return pH("xRange return", Y), Y;
      });
    },
    bqY = (A, K) => {
      return pH("replaceStars", A, K), A.trim().replace(Af[SM.STAR], "");
    },
    xqY = (A, K) => {
      return pH("replaceGTE0", A, K), A.trim().replace(Af[K.includePrerelease ? SM.GTE0PRE : SM.GTE0], "");
    },
    uqY = A => (K, q, Y, z, w, H, J, O, X, $, _, G) => {
      if (hM(Y)) q = "";else if (hM(z)) q = `>=${Y}.0.0${A ? "-0" : ""}`;else if (hM(w)) q = `>=${Y}.${z}.0${A ? "-0" : ""}`;else if (H) q = `>=${q}`;else q = `>=${q}${A ? "-0" : ""}`;
      if (hM(X)) O = "";else if (hM($)) O = `<${+X + 1}.0.0-0`;else if (hM(_)) O = `<${X}.${+$ + 1}.0-0`;else if (G) O = `<=${X}.${$}.${_}-${G}`;else if (A) O = `<${X}.${$}.${+_ + 1}-0`;else O = `<=${O}`;
      return `${q} ${O}`.trim();
    },
    BqY = (A, K, q) => {
      for (let Y = 0; Y < A.length; Y++) if (!A[Y].test(K)) return !1;
      if (K.prerelease.length && !q.includePrerelease) {
        for (let Y = 0; Y < A.length; Y++) {
          if (pH(A[Y].semver), A[Y].semver === Z$6.ANY) continue;
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
__$.NC = NC;
