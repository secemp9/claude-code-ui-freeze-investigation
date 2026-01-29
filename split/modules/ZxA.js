// Module: ZxA
// Dependencies: XJ1, ZGA, G$6, $xA, QD, NC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZxA = v((rmw, w77) => {
  var WxA = Symbol("SemVer ANY");
  class VJ1 {
    static get ANY() {
      return WxA;
    }
    constructor(A, K) {
      if (K = A77(K), A instanceof VJ1) if (A.loose === !!K.loose) return A;else A = A.value;
      if (A = A.trim().split(/\s+/).join(" "), D$6("comparator", A, K), this.options = K, this.loose = !!K.loose, this.parse(A), this.semver === WxA) this.value = "";else this.value = this.operator + this.semver.version;
      D$6("comp", this);
    }
    parse(A) {
      let K = this.options.loose ? K77[q77.COMPARATORLOOSE] : K77[q77.COMPARATOR],
        q = A.match(K);
      if (!q) throw TypeError(`Invalid comparator: ${A}`);
      if (this.operator = q[1] !== void 0 ? q[1] : "", this.operator === "=") this.operator = "";
      if (!q[2]) this.semver = WxA;else this.semver = new Y77(q[2], this.options.loose);
    }
    toString() {
      return this.value;
    }
    test(A) {
      if (D$6("Comparator.test", A, this.options.loose), this.semver === WxA || A === WxA) return !0;
      if (typeof A === "string") try {
        A = new Y77(A, this.options);
      } catch (K) {
        return !1;
      }
      return W$6(A, this.operator, this.semver, this.options);
    }
    intersects(A, K) {
      if (!(A instanceof VJ1)) throw TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return !0;
        return new z77(A.value, K).test(this.value);
      } else if (A.operator === "") {
        if (A.value === "") return !0;
        return new z77(this.value, K).test(A.semver);
      }
      if (K = A77(K), K.includePrerelease && (this.value === "<0.0.0-0" || A.value === "<0.0.0-0")) return !1;
      if (!K.includePrerelease && (this.value.startsWith("<0.0.0") || A.value.startsWith("<0.0.0"))) return !1;
      if (this.operator.startsWith(">") && A.operator.startsWith(">")) return !0;
      if (this.operator.startsWith("<") && A.operator.startsWith("<")) return !0;
      if (this.semver.version === A.semver.version && this.operator.includes("=") && A.operator.includes("=")) return !0;
      if (W$6(this.semver, "<", A.semver, K) && this.operator.startsWith(">") && A.operator.startsWith("<")) return !0;
      if (W$6(this.semver, ">", A.semver, K) && this.operator.startsWith("<") && A.operator.startsWith(">")) return !0;
      return !1;
    }
  }
  w77.exports = VJ1;
  var A77 = __$.XJ1(),
    {
      safeRe: K77,
      t: q77
    } = __$.ZGA(),
    W$6 = __$.G$6(),
    D$6 = __$.$xA(),
    Y77 = __$.QD(),
    z77 = __$.NC();
});

// Register to shared state
__$.ZxA = ZxA;
