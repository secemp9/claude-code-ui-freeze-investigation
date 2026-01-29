// Module: QD
// Dependencies: $xA, XxA, ZGA, XJ1, X$6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var QD = v((Tmw, w47) => {
  var $J1 = __$.$xA(),
    {
      MAX_LENGTH: q47,
      MAX_SAFE_INTEGER: _J1
    } = __$.XxA(),
    {
      safeRe: Y47,
      safeSrc: z47,
      t: GJ1
    } = __$.ZGA(),
    TKY = __$.XJ1(),
    {
      compareIdentifiers: WGA
    } = __$.X$6();
  class $I {
    constructor(A, K) {
      if (K = TKY(K), A instanceof $I) {
        if (A.loose === !!K.loose && A.includePrerelease === !!K.includePrerelease) return A;else A = A.version;
      } else if (typeof A !== "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof A}".`);
      if (A.length > q47) throw TypeError(`version is longer than ${q47} characters`);
      $J1("SemVer", A, K), this.options = K, this.loose = !!K.loose, this.includePrerelease = !!K.includePrerelease;
      let q = A.trim().match(K.loose ? Y47[GJ1.LOOSE] : Y47[GJ1.FULL]);
      if (!q) throw TypeError(`Invalid Version: ${A}`);
      if (this.raw = A, this.major = +q[1], this.minor = +q[2], this.patch = +q[3], this.major > _J1 || this.major < 0) throw TypeError("Invalid major version");
      if (this.minor > _J1 || this.minor < 0) throw TypeError("Invalid minor version");
      if (this.patch > _J1 || this.patch < 0) throw TypeError("Invalid patch version");
      if (!q[4]) this.prerelease = [];else this.prerelease = q[4].split(".").map(Y => {
        if (/^[0-9]+$/.test(Y)) {
          let z = +Y;
          if (z >= 0 && z < _J1) return z;
        }
        return Y;
      });
      this.build = q[5] ? q[5].split(".") : [], this.format();
    }
    format() {
      if (this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(A) {
      if ($J1("SemVer.compare", this.version, this.options, A), !(A instanceof $I)) {
        if (typeof A === "string" && A === this.version) return 0;
        A = new $I(A, this.options);
      }
      if (A.version === this.version) return 0;
      return this.compareMain(A) || this.comparePre(A);
    }
    compareMain(A) {
      if (!(A instanceof $I)) A = new $I(A, this.options);
      return WGA(this.major, A.major) || WGA(this.minor, A.minor) || WGA(this.patch, A.patch);
    }
    comparePre(A) {
      if (!(A instanceof $I)) A = new $I(A, this.options);
      if (this.prerelease.length && !A.prerelease.length) return -1;else if (!this.prerelease.length && A.prerelease.length) return 1;else if (!this.prerelease.length && !A.prerelease.length) return 0;
      let K = 0;
      do {
        let q = this.prerelease[K],
          Y = A.prerelease[K];
        if ($J1("prerelease compare", K, q, Y), q === void 0 && Y === void 0) return 0;else if (Y === void 0) return 1;else if (q === void 0) return -1;else if (q === Y) continue;else return WGA(q, Y);
      } while (++K);
    }
    compareBuild(A) {
      if (!(A instanceof $I)) A = new $I(A, this.options);
      let K = 0;
      do {
        let q = this.build[K],
          Y = A.build[K];
        if ($J1("build compare", K, q, Y), q === void 0 && Y === void 0) return 0;else if (Y === void 0) return 1;else if (q === void 0) return -1;else if (q === Y) continue;else return WGA(q, Y);
      } while (++K);
    }
    inc(A, K, q) {
      if (A.startsWith("pre")) {
        if (!K && q === !1) throw Error("invalid increment argument: identifier is empty");
        if (K) {
          let Y = new RegExp(`^${this.options.loose ? z47[GJ1.PRERELEASELOOSE] : z47[GJ1.PRERELEASE]}$`),
            z = `-${K}`.match(Y);
          if (!z || z[1] !== K) throw Error(`invalid identifier: ${K}`);
        }
      }
      switch (A) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", K, q);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", K, q);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", K, q), this.inc("pre", K, q);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) this.inc("patch", K, q);
          this.inc("pre", K, q);
          break;
        case "release":
          if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
          this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
          this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) this.patch++;
          this.prerelease = [];
          break;
        case "pre":
          {
            let Y = Number(q) ? 1 : 0;
            if (this.prerelease.length === 0) this.prerelease = [Y];else {
              let z = this.prerelease.length;
              while (--z >= 0) if (typeof this.prerelease[z] === "number") this.prerelease[z]++, z = -2;
              if (z === -1) {
                if (K === this.prerelease.join(".") && q === !1) throw Error("invalid increment argument: identifier already exists");
                this.prerelease.push(Y);
              }
            }
            if (K) {
              let z = [K, Y];
              if (q === !1) z = [K];
              if (WGA(this.prerelease[0], K) === 0) {
                if (isNaN(this.prerelease[1])) this.prerelease = z;
              } else this.prerelease = z;
            }
            break;
          }
        default:
          throw Error(`invalid increment argument: ${A}`);
      }
      if (this.raw = this.format(), this.build.length) this.raw += `+${this.build.join(".")}`;
      return this;
    }
  }
  w47.exports = $I;
});

// Register to shared state
__$.QD = QD;
