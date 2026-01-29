// Module: ib4
// Dependencies: EY1, WSA, Fb4, ZSA, R$A, CY6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ib4 = v((Ljw, lb4) => {
  var DSA = Symbol("SemVer ANY");
  class IY1 {
    static get ANY() {
      return DSA;
    }
    constructor(A, K) {
      if (K = Qb4(K), A instanceof IY1) if (A.loose === !!K.loose) return A;else A = A.value;
      if (A = A.trim().split(/\s+/).join(" "), kY6("comparator", A, K), this.options = K, this.loose = !!K.loose, this.parse(A), this.semver === DSA) this.value = "";else this.value = this.operator + this.semver.version;
      kY6("comp", this);
    }
    parse(A) {
      let K = this.options.loose ? Ub4[pb4.COMPARATORLOOSE] : Ub4[pb4.COMPARATOR],
        q = A.match(K);
      if (!q) throw TypeError(`Invalid comparator: ${A}`);
      if (this.operator = q[1] !== void 0 ? q[1] : "", this.operator === "=") this.operator = "";
      if (!q[2]) this.semver = DSA;else this.semver = new db4(q[2], this.options.loose);
    }
    toString() {
      return this.value;
    }
    test(A) {
      if (kY6("Comparator.test", A, this.options.loose), this.semver === DSA || A === DSA) return !0;
      if (typeof A === "string") try {
        A = new db4(A, this.options);
      } catch (K) {
        return !1;
      }
      return EY6(A, this.operator, this.semver, this.options);
    }
    intersects(A, K) {
      if (!(A instanceof IY1)) throw TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return !0;
        return new cb4(A.value, K).test(this.value);
      } else if (A.operator === "") {
        if (A.value === "") return !0;
        return new cb4(this.value, K).test(A.semver);
      }
      if (K = Qb4(K), K.includePrerelease && (this.value === "<0.0.0-0" || A.value === "<0.0.0-0")) return !1;
      if (!K.includePrerelease && (this.value.startsWith("<0.0.0") || A.value.startsWith("<0.0.0"))) return !1;
      if (this.operator.startsWith(">") && A.operator.startsWith(">")) return !0;
      if (this.operator.startsWith("<") && A.operator.startsWith("<")) return !0;
      if (this.semver.version === A.semver.version && this.operator.includes("=") && A.operator.includes("=")) return !0;
      if (EY6(this.semver, "<", A.semver, K) && this.operator.startsWith(">") && A.operator.startsWith("<")) return !0;
      if (EY6(this.semver, ">", A.semver, K) && this.operator.startsWith("<") && A.operator.startsWith(">")) return !0;
      return !1;
    }
  }
  lb4.exports = IY1;
  var Qb4 = __$.EY1(),
    {
      safeRe: Ub4,
      t: pb4
    } = __$.WSA(),
    EY6 = __$.Fb4(),
    kY6 = __$.ZSA(),
    db4 = __$.R$A(),
    cb4 = __$.CY6();
});

// Register to shared state
__$.ib4 = ib4;
