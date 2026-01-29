// Module: yh6
// Dependencies: P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yh6 = v(yN2 => {
  var u3K = __$.P0();
  yN2.property = function (A) {
    if (Array.isArray(A.type)) {
      var K = Object.create(null);
      A.type.forEach(function (z) {
        K[z.value || z] = z.alias || z;
      });
      var q = A.missing;
      if (q === void 0) q = null;
      var Y = A.invalid;
      if (Y === void 0) Y = q;
      return {
        get: function () {
          var z = this._getattr(A.name);
          if (z === null) return q;
          if (z = K[z.toLowerCase()], z !== void 0) return z;
          if (Y !== null) return Y;
          return z;
        },
        set: function (z) {
          this._setattr(A.name, z);
        }
      };
    } else if (A.type === Boolean) return {
      get: function () {
        return this.hasAttribute(A.name);
      },
      set: function (z) {
        if (z) this._setattr(A.name, "");else this.removeAttribute(A.name);
      }
    };else if (A.type === Number || A.type === "long" || A.type === "unsigned long" || A.type === "limited unsigned long with fallback") return RN2(A);else if (!A.type || A.type === String) return {
      get: function () {
        return this._getattr(A.name) || "";
      },
      set: function (z) {
        if (A.treatNullAsEmptyString && z === null) z = "";
        this._setattr(A.name, z);
      }
    };else if (typeof A.type === "function") return A.type(A.name, A);
    throw Error("Invalid attribute definition");
  };
  function RN2(A) {
    var K;
    if (typeof A.default === "function") K = A.default;else if (typeof A.default === "number") K = function () {
      return A.default;
    };else K = function () {
      u3K.assert(!1, typeof A.default);
    };
    var q = A.type === "unsigned long",
      Y = A.type === "long",
      z = A.type === "limited unsigned long with fallback",
      w = A.min,
      H = A.max,
      J = A.setmin;
    if (w === void 0) {
      if (q) w = 0;
      if (Y) w = -2147483648;
      if (z) w = 1;
    }
    if (H === void 0) {
      if (q || Y || z) H = 2147483647;
    }
    return {
      get: function () {
        var O = this._getattr(A.name),
          X = A.float ? parseFloat(O) : parseInt(O, 10);
        if (O === null || !isFinite(X) || w !== void 0 && X < w || H !== void 0 && X > H) return K.call(this);
        if (q || Y || z) {
          if (!/^[ \t\n\f\r]*[-+]?[0-9]/.test(O)) return K.call(this);
          X = X | 0;
        }
        return X;
      },
      set: function (O) {
        if (!A.float) O = Math.floor(O);
        if (J !== void 0 && O < J) u3K.IndexSizeError(A.name + " set to " + O);
        if (q) O = O < 0 || O > 2147483647 ? K.call(this) : O | 0;else if (z) O = O < 1 || O > 2147483647 ? K.call(this) : O | 0;else if (Y) O = O < -2147483648 || O > 2147483647 ? K.call(this) : O | 0;
        this._setattr(A.name, String(O));
      }
    };
  }
  yN2.registerChangeHandler = function (A, K, q) {
    var Y = A.prototype;
    if (!Object.prototype.hasOwnProperty.call(Y, "_attributeChangeHandlers")) Y._attributeChangeHandlers = Object.create(Y._attributeChangeHandlers || null);
    Y._attributeChangeHandlers[K] = q;
  };
});

// Register to shared state
__$.yh6 = yh6;
