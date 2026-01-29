// Module: Ot
// Dependencies: s5A, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ot = v((MEH, dd7) => {
  dd7.exports = MW;
  MW.className = "ReflectionObject";
  var Z92 = __$.s5A(),
    OFA = __$.pG(),
    qj1,
    W92 = {
      enum_type: "OPEN",
      field_presence: "EXPLICIT",
      json_format: "ALLOW",
      message_encoding: "LENGTH_PREFIXED",
      repeated_field_encoding: "PACKED",
      utf8_validation: "VERIFY"
    },
    D92 = {
      enum_type: "CLOSED",
      field_presence: "EXPLICIT",
      json_format: "LEGACY_BEST_EFFORT",
      message_encoding: "LENGTH_PREFIXED",
      repeated_field_encoding: "EXPANDED",
      utf8_validation: "NONE"
    },
    j92 = {
      enum_type: "OPEN",
      field_presence: "IMPLICIT",
      json_format: "ALLOW",
      message_encoding: "LENGTH_PREFIXED",
      repeated_field_encoding: "PACKED",
      utf8_validation: "VERIFY"
    };
  function MW(A, K) {
    if (!OFA.isString(A)) throw TypeError("name must be a string");
    if (K && !OFA.isObject(K)) throw TypeError("options must be an object");
    this.options = K, this.parsedOptions = null, this.name = A, this._edition = null, this._defaultEdition = "proto2", this._features = {}, this._featuresResolved = !1, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
  }
  Object.defineProperties(MW.prototype, {
    root: {
      get: function () {
        var A = this;
        while (A.parent !== null) A = A.parent;
        return A;
      }
    },
    fullName: {
      get: function () {
        var A = [this.name],
          K = this.parent;
        while (K) A.unshift(K.name), K = K.parent;
        return A.join(".");
      }
    }
  });
  MW.prototype.toJSON = function () {
    throw Error();
  };
  MW.prototype.onAdd = function (K) {
    if (this.parent && this.parent !== K) this.parent.remove(this);
    this.parent = K, this.resolved = !1;
    var q = K.root;
    if (q instanceof qj1) q._handleAdd(this);
  };
  MW.prototype.onRemove = function (K) {
    var q = K.root;
    if (q instanceof qj1) q._handleRemove(this);
    this.parent = null, this.resolved = !1;
  };
  MW.prototype.resolve = function () {
    if (this.resolved) return this;
    if (this.root instanceof qj1) this.resolved = !0;
    return this;
  };
  MW.prototype._resolveFeaturesRecursive = function (K) {
    return this._resolveFeatures(this._edition || K);
  };
  MW.prototype._resolveFeatures = function (K) {
    if (this._featuresResolved) return;
    var q = {};
    if (!K) throw Error("Unknown edition for " + this.fullName);
    var Y = Object.assign(this.options ? Object.assign({}, this.options.features) : {}, this._inferLegacyProtoFeatures(K));
    if (this._edition) {
      if (K === "proto2") q = Object.assign({}, D92);else if (K === "proto3") q = Object.assign({}, j92);else if (K === "2023") q = Object.assign({}, W92);else throw Error("Unknown edition: " + K);
      this._features = Object.assign(q, Y || {}), this._featuresResolved = !0;
      return;
    }
    if (this.partOf instanceof Z92) {
      var z = Object.assign({}, this.partOf._features);
      this._features = Object.assign(z, Y || {});
    } else if (this.declaringField) ;else if (this.parent) {
      var w = Object.assign({}, this.parent._features);
      this._features = Object.assign(w, Y || {});
    } else throw Error("Unable to find a parent for " + this.fullName);
    if (this.extensionField) this.extensionField._features = this._features;
    this._featuresResolved = !0;
  };
  MW.prototype._inferLegacyProtoFeatures = function () {
    return {};
  };
  MW.prototype.getOption = function (K) {
    if (this.options) return this.options[K];
    return;
  };
  MW.prototype.setOption = function (K, q, Y) {
    if (!this.options) this.options = {};
    if (/^features\./.test(K)) OFA.setProperty(this.options, K, q, Y);else if (!Y || this.options[K] === void 0) {
      if (this.getOption(K) !== q) this.resolved = !1;
      this.options[K] = q;
    }
    return this;
  };
  MW.prototype.setParsedOption = function (K, q, Y) {
    if (!this.parsedOptions) this.parsedOptions = [];
    var z = this.parsedOptions;
    if (Y) {
      var w = z.find(function (O) {
        return Object.prototype.hasOwnProperty.call(O, K);
      });
      if (w) {
        var H = w[K];
        OFA.setProperty(H, Y, q);
      } else w = {}, w[K] = OFA.setProperty({}, Y, q), z.push(w);
    } else {
      var J = {};
      J[K] = q, z.push(J);
    }
    return this;
  };
  MW.prototype.setOptions = function (K, q) {
    if (K) for (var Y = Object.keys(K), z = 0; z < Y.length; ++z) this.setOption(Y[z], K[Y[z]], q);
    return this;
  };
  MW.prototype.toString = function () {
    var K = this.constructor.className,
      q = this.fullName;
    if (q.length) return K + " " + q;
    return K;
  };
  MW.prototype._editionToJSON = function () {
    if (!this._edition || this._edition === "proto3") return;
    return this._edition;
  };
  MW._configure = function (A) {
    qj1 = A;
  };
});

// Register to shared state
__$.Ot = Ot;
