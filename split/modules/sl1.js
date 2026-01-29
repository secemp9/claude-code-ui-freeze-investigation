// Module: sl1
// Dependencies: oJA, _z, Il1, nu8, wB8, OB8, WB8, qm8, Om8, ii

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sl1 = v(vZ => {
  var Xm8 = __$.oJA(),
    $m8 = __$._z(),
    _m8 = __$.Il1(),
    Gm8 = __$.nu8(),
    Zm8 = __$.wB8(),
    Wm8 = __$.OB8(),
    Dm8 = __$.WB8(),
    jm8 = __$.qm8(),
    Mm8 = __$.Om8(),
    Pm8 = __$.ii();
  class VCA extends Uint8Array {
    static fromString(A, K = "utf-8") {
      if (typeof A === "string") {
        if (K === "base64") return VCA.mutate(Xm8.fromBase64(A));
        return VCA.mutate($m8.fromUtf8(A));
      }
      throw Error(`Unsupported conversion from ${typeof A} to Uint8ArrayBlobAdapter.`);
    }
    static mutate(A) {
      return Object.setPrototypeOf(A, VCA.prototype), A;
    }
    transformToString(A = "utf-8") {
      if (A === "base64") return Xm8.toBase64(this);
      return $m8.toUtf8(this);
    }
  }
  vZ.Uint8ArrayBlobAdapter = VCA;
  Object.keys(_m8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return _m8[A];
      }
    });
  });
  Object.keys(Gm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return Gm8[A];
      }
    });
  });
  Object.keys(Zm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return Zm8[A];
      }
    });
  });
  Object.keys(Wm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return Wm8[A];
      }
    });
  });
  Object.keys(Dm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return Dm8[A];
      }
    });
  });
  Object.keys(jm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return jm8[A];
      }
    });
  });
  Object.keys(Mm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return Mm8[A];
      }
    });
  });
  Object.keys(Pm8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(vZ, A)) Object.defineProperty(vZ, A, {
      enumerable: !0,
      get: function () {
        return Pm8[A];
      }
    });
  });
});

// Register to shared state
__$.sl1 = sl1;
