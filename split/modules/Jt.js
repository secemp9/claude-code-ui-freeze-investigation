// Module: Jt
// Dependencies: Ot, VS, t5A, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jt = v((DEH, Fd7) => {
  Fd7.exports = dG;
  var JFA = __$.Ot();
  ((dG.prototype = Object.create(JFA.prototype)).constructor = dG).className = "Field";
  var gd7 = __$.VS(),
    Sk6 = __$.t5A(),
    k$ = __$.pG(),
    HFA,
    G92 = /^required|optional|repeated$/;
  dG.fromJSON = function (K, q) {
    var Y = new dG(K, q.id, q.type, q.rule, q.extend, q.options, q.comment);
    if (q.edition) Y._edition = q.edition;
    return Y._defaultEdition = "proto3", Y;
  };
  function dG(A, K, q, Y, z, w, H) {
    if (k$.isObject(Y)) H = z, w = Y, Y = z = void 0;else if (k$.isObject(z)) H = w, w = z, z = void 0;
    if (JFA.call(this, A, w), !k$.isInteger(K) || K < 0) throw TypeError("id must be a non-negative integer");
    if (!k$.isString(q)) throw TypeError("type must be a string");
    if (Y !== void 0 && !G92.test(Y = Y.toString().toLowerCase())) throw TypeError("rule must be a string rule");
    if (z !== void 0 && !k$.isString(z)) throw TypeError("extend must be a string");
    if (Y === "proto3_optional") Y = "optional";
    this.rule = Y && Y !== "optional" ? Y : void 0, this.type = q, this.id = K, this.extend = z || void 0, this.repeated = Y === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = k$.Long ? Sk6.long[q] !== void 0 : !1, this.bytes = q === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.comment = H;
  }
  Object.defineProperty(dG.prototype, "required", {
    get: function () {
      return this._features.field_presence === "LEGACY_REQUIRED";
    }
  });
  Object.defineProperty(dG.prototype, "optional", {
    get: function () {
      return !this.required;
    }
  });
  Object.defineProperty(dG.prototype, "delimited", {
    get: function () {
      return this.resolvedType instanceof HFA && this._features.message_encoding === "DELIMITED";
    }
  });
  Object.defineProperty(dG.prototype, "packed", {
    get: function () {
      return this._features.repeated_field_encoding === "PACKED";
    }
  });
  Object.defineProperty(dG.prototype, "hasPresence", {
    get: function () {
      if (this.repeated || this.map) return !1;
      return this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT";
    }
  });
  dG.prototype.setOption = function (K, q, Y) {
    return JFA.prototype.setOption.call(this, K, q, Y);
  };
  dG.prototype.toJSON = function (K) {
    var q = K ? Boolean(K.keepComments) : !1;
    return k$.toObject(["edition", this._editionToJSON(), "rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", q ? this.comment : void 0]);
  };
  dG.prototype.resolve = function () {
    if (this.resolved) return this;
    if ((this.typeDefault = Sk6.defaults[this.type]) === void 0) {
      if (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof HFA) this.typeDefault = null;else this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    } else if (this.options && this.options.proto3_optional) this.typeDefault = null;
    if (this.options && this.options.default != null) {
      if (this.typeDefault = this.options.default, this.resolvedType instanceof gd7 && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
    if (this.options) {
      if (this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof gd7)) delete this.options.packed;
      if (!Object.keys(this.options).length) this.options = void 0;
    }
    if (this.long) {
      if (this.typeDefault = k$.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze) Object.freeze(this.typeDefault);
    } else if (this.bytes && typeof this.typeDefault === "string") {
      var K;
      if (k$.base64.test(this.typeDefault)) k$.base64.decode(this.typeDefault, K = k$.newBuffer(k$.base64.length(this.typeDefault)), 0);else k$.utf8.write(this.typeDefault, K = k$.newBuffer(k$.utf8.length(this.typeDefault)), 0);
      this.typeDefault = K;
    }
    if (this.map) this.defaultValue = k$.emptyObject;else if (this.repeated) this.defaultValue = k$.emptyArray;else this.defaultValue = this.typeDefault;
    if (this.parent instanceof HFA) this.parent.ctor.prototype[this.name] = this.defaultValue;
    return JFA.prototype.resolve.call(this);
  };
  dG.prototype._inferLegacyProtoFeatures = function (K) {
    if (K !== "proto2" && K !== "proto3") return {};
    var q = {};
    if (this.rule === "required") q.field_presence = "LEGACY_REQUIRED";
    if (this.parent && Sk6.defaults[this.type] === void 0) {
      var Y = this.parent.get(this.type.split(".").pop());
      if (Y && Y instanceof HFA && Y.group) q.message_encoding = "DELIMITED";
    }
    if (this.getOption("packed") === !0) q.repeated_field_encoding = "PACKED";else if (this.getOption("packed") === !1) q.repeated_field_encoding = "EXPANDED";
    return q;
  };
  dG.prototype._resolveFeatures = function (K) {
    return JFA.prototype._resolveFeatures.call(this, this._edition || K);
  };
  dG.d = function (K, q, Y, z) {
    if (typeof q === "function") q = k$.decorateType(q).name;else if (q && typeof q === "object") q = k$.decorateEnum(q).name;
    return function (H, J) {
      k$.decorateType(H.constructor).add(new dG(J, K, q, Y, {
        default: z
      }));
    };
  };
  dG._configure = function (K) {
    HFA = K;
  };
});

// Register to shared state
__$.Jt = Jt;
