// Module: VS
// Dependencies: Ot, $jA, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VS = v((PEH, ld7) => {
  ld7.exports = fS;
  var hk6 = __$.Ot();
  ((fS.prototype = Object.create(hk6.prototype)).constructor = fS).className = "Enum";
  var cd7 = __$.$jA(),
    Yj1 = __$.pG();
  function fS(A, K, q, Y, z, w) {
    if (hk6.call(this, A, q), K && typeof K !== "object") throw TypeError("values must be an object");
    if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = Y, this.comments = z || {}, this.valuesOptions = w, this._valuesFeatures = {}, this.reserved = void 0, K) {
      for (var H = Object.keys(K), J = 0; J < H.length; ++J) if (typeof K[H[J]] === "number") this.valuesById[this.values[H[J]] = K[H[J]]] = H[J];
    }
  }
  fS.prototype._resolveFeatures = function (K) {
    return K = this._edition || K, hk6.prototype._resolveFeatures.call(this, K), Object.keys(this.values).forEach(q => {
      var Y = Object.assign({}, this._features);
      this._valuesFeatures[q] = Object.assign(Y, this.valuesOptions && this.valuesOptions[q] && this.valuesOptions[q].features);
    }), this;
  };
  fS.fromJSON = function (K, q) {
    var Y = new fS(K, q.values, q.options, q.comment, q.comments);
    if (Y.reserved = q.reserved, q.edition) Y._edition = q.edition;
    return Y._defaultEdition = "proto3", Y;
  };
  fS.prototype.toJSON = function (K) {
    var q = K ? Boolean(K.keepComments) : !1;
    return Yj1.toObject(["edition", this._editionToJSON(), "options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", q ? this.comment : void 0, "comments", q ? this.comments : void 0]);
  };
  fS.prototype.add = function (K, q, Y, z) {
    if (!Yj1.isString(K)) throw TypeError("name must be a string");
    if (!Yj1.isInteger(q)) throw TypeError("id must be an integer");
    if (this.values[K] !== void 0) throw Error("duplicate name '" + K + "' in " + this);
    if (this.isReservedId(q)) throw Error("id " + q + " is reserved in " + this);
    if (this.isReservedName(K)) throw Error("name '" + K + "' is reserved in " + this);
    if (this.valuesById[q] !== void 0) {
      if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + q + " in " + this);
      this.values[K] = q;
    } else this.valuesById[this.values[K] = q] = K;
    if (z) {
      if (this.valuesOptions === void 0) this.valuesOptions = {};
      this.valuesOptions[K] = z || null;
    }
    return this.comments[K] = Y || null, this;
  };
  fS.prototype.remove = function (K) {
    if (!Yj1.isString(K)) throw TypeError("name must be a string");
    var q = this.values[K];
    if (q == null) throw Error("name '" + K + "' does not exist in " + this);
    if (delete this.valuesById[q], delete this.values[K], delete this.comments[K], this.valuesOptions) delete this.valuesOptions[K];
    return this;
  };
  fS.prototype.isReservedId = function (K) {
    return cd7.isReservedId(this.reserved, K);
  };
  fS.prototype.isReservedName = function (K) {
    return cd7.isReservedName(this.reserved, K);
  };
});

// Register to shared state
__$.VS = VS;
