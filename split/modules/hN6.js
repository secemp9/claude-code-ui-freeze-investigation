// Module: hN6
// Dependencies: HDA, zj

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hN6 = v((YDH, aL7) => {
  var $iY = __$.HDA(),
    _iY = __$.zj();
  function GiY(A) {
    return 48 <= A && A <= 57 || 65 <= A && A <= 70 || 97 <= A && A <= 102;
  }
  function ZiY(A) {
    return 48 <= A && A <= 55;
  }
  function WiY(A) {
    return 48 <= A && A <= 57;
  }
  function DiY(A) {
    if (A === null) return !1;
    var K = A.length,
      q = 0,
      Y = !1,
      z;
    if (!K) return !1;
    if (z = A[q], z === "-" || z === "+") z = A[++q];
    if (z === "0") {
      if (q + 1 === K) return !0;
      if (z = A[++q], z === "b") {
        q++;
        for (; q < K; q++) {
          if (z = A[q], z === "_") continue;
          if (z !== "0" && z !== "1") return !1;
          Y = !0;
        }
        return Y && z !== "_";
      }
      if (z === "x") {
        q++;
        for (; q < K; q++) {
          if (z = A[q], z === "_") continue;
          if (!GiY(A.charCodeAt(q))) return !1;
          Y = !0;
        }
        return Y && z !== "_";
      }
      if (z === "o") {
        q++;
        for (; q < K; q++) {
          if (z = A[q], z === "_") continue;
          if (!ZiY(A.charCodeAt(q))) return !1;
          Y = !0;
        }
        return Y && z !== "_";
      }
    }
    if (z === "_") return !1;
    for (; q < K; q++) {
      if (z = A[q], z === "_") continue;
      if (!WiY(A.charCodeAt(q))) return !1;
      Y = !0;
    }
    if (!Y || z === "_") return !1;
    return !0;
  }
  function jiY(A) {
    var K = A,
      q = 1,
      Y;
    if (K.indexOf("_") !== -1) K = K.replace(/_/g, "");
    if (Y = K[0], Y === "-" || Y === "+") {
      if (Y === "-") q = -1;
      K = K.slice(1), Y = K[0];
    }
    if (K === "0") return 0;
    if (Y === "0") {
      if (K[1] === "b") return q * parseInt(K.slice(2), 2);
      if (K[1] === "x") return q * parseInt(K.slice(2), 16);
      if (K[1] === "o") return q * parseInt(K.slice(2), 8);
    }
    return q * parseInt(K, 10);
  }
  function MiY(A) {
    return Object.prototype.toString.call(A) === "[object Number]" && A % 1 === 0 && !$iY.isNegativeZero(A);
  }
  aL7.exports = new _iY("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: DiY,
    construct: jiY,
    predicate: MiY,
    represent: {
      binary: function (A) {
        return A >= 0 ? "0b" + A.toString(2) : "-0b" + A.toString(2).slice(1);
      },
      octal: function (A) {
        return A >= 0 ? "0o" + A.toString(8) : "-0o" + A.toString(8).slice(1);
      },
      decimal: function (A) {
        return A.toString(10);
      },
      hexadecimal: function (A) {
        return A >= 0 ? "0x" + A.toString(16).toUpperCase() : "-0x" + A.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  });
});

// Register to shared state
__$.hN6 = hN6;
