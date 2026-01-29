// Module: nyA
// Dependencies: l51, hXA, eK6, cyA, LD, uk

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nyA = v((xYw, n$4) => {
  var ryA = Symbol("SemVer ANY");
  class q31 {
    static get ANY() {
      return ryA;
    }
    constructor(A, K) {
      if (K = p$4(K), A instanceof q31) if (A.loose === !!K.loose) return A;else A = A.value;
      if (A = A.trim().split(/\s+/).join(" "), qq6("comparator", A, K), this.options = K, this.loose = !!K.loose, this.parse(A), this.semver === ryA) this.value = "";else this.value = this.operator + this.semver.version;
      qq6("comp", this);
    }
    parse(A) {
      let K = this.options.loose ? d$4[c$4.COMPARATORLOOSE] : d$4[c$4.COMPARATOR],
        q = A.match(K);
      if (!q) throw TypeError(`Invalid comparator: ${A}`);
      if (this.operator = q[1] !== void 0 ? q[1] : "", this.operator === "=") this.operator = "";
      if (!q[2]) this.semver = ryA;else this.semver = new l$4(q[2], this.options.loose);
    }
    toString() {
      return this.value;
    }
    test(A) {
      if (qq6("Comparator.test", A, this.options.loose), this.semver === ryA || A === ryA) return !0;
      if (typeof A === "string") try {
        A = new l$4(A, this.options);
      } catch (K) {
        return !1;
      }
      return Kq6(A, this.operator, this.semver, this.options);
    }
    intersects(A, K) {
      if (!(A instanceof q31)) throw TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return !0;
        return new i$4(A.value, K).test(this.value);
      } else if (A.operator === "") {
        if (A.value === "") return !0;
        return new i$4(this.value, K).test(A.semver);
      }
      if (K = p$4(K), K.includePrerelease && (this.value === "<0.0.0-0" || A.value === "<0.0.0-0")) return !1;
      if (!K.includePrerelease && (this.value.startsWith("<0.0.0") || A.value.startsWith("<0.0.0"))) return !1;
      if (this.operator.startsWith(">") && A.operator.startsWith(">")) return !0;
      if (this.operator.startsWith("<") && A.operator.startsWith("<")) return !0;
      if (this.semver.version === A.semver.version && this.operator.includes("=") && A.operator.includes("=")) return !0;
      if (Kq6(this.semver, "<", A.semver, K) && this.operator.startsWith(">") && A.operator.startsWith("<")) return !0;
      if (Kq6(this.semver, ">", A.semver, K) && this.operator.startsWith("<") && A.operator.startsWith(">")) return !0;
      return !1;
    }
  }
  n$4.exports = q31;
  var p$4 = __$.l51(),
    {
      safeRe: d$4,
      t: c$4
    } = __$.hXA(),
    Kq6 = __$.eK6(),
    qq6 = __$.cyA(),
    l$4 = __$.LD(),
    i$4 = __$.uk();
});

// Register to shared state
__$.nyA = nyA;
