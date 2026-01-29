// Module: $jA
// Dependencies: Ot, Jt, pG, s5A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $jA = v((qEH, Pd7) => {
  Pd7.exports = VY;
  var UD1 = __$.Ot();
  ((VY.prototype = Object.create(UD1.prototype)).constructor = VY).className = "Namespace";
  var $k6 = __$.Jt(),
    pD1 = __$.pG(),
    F32 = __$.s5A(),
    o5A,
    XjA,
    a5A;
  VY.fromJSON = function (K, q) {
    return new VY(K, q.options).addJSON(q.nested);
  };
  function jd7(A, K) {
    if (!(A && A.length)) return;
    var q = {};
    for (var Y = 0; Y < A.length; ++Y) q[A[Y].name] = A[Y].toJSON(K);
    return q;
  }
  VY.arrayToJSON = jd7;
  VY.isReservedId = function (K, q) {
    if (K) {
      for (var Y = 0; Y < K.length; ++Y) if (typeof K[Y] !== "string" && K[Y][0] <= q && K[Y][1] > q) return !0;
    }
    return !1;
  };
  VY.isReservedName = function (K, q) {
    if (K) {
      for (var Y = 0; Y < K.length; ++Y) if (K[Y] === q) return !0;
    }
    return !1;
  };
  function VY(A, K) {
    UD1.call(this, A, K), this.nested = void 0, this._nestedArray = null, this._lookupCache = {}, this._needsRecursiveFeatureResolution = !0, this._needsRecursiveResolve = !0;
  }
  function Md7(A) {
    A._nestedArray = null, A._lookupCache = {};
    var K = A;
    while (K = K.parent) K._lookupCache = {};
    return A;
  }
  Object.defineProperty(VY.prototype, "nestedArray", {
    get: function () {
      return this._nestedArray || (this._nestedArray = pD1.toArray(this.nested));
    }
  });
  VY.prototype.toJSON = function (K) {
    return pD1.toObject(["options", this.options, "nested", jd7(this.nestedArray, K)]);
  };
  VY.prototype.addJSON = function (K) {
    var q = this;
    if (K) for (var Y = Object.keys(K), z = 0, w; z < Y.length; ++z) w = K[Y[z]], q.add((w.fields !== void 0 ? o5A.fromJSON : w.values !== void 0 ? a5A.fromJSON : w.methods !== void 0 ? XjA.fromJSON : w.id !== void 0 ? $k6.fromJSON : VY.fromJSON)(Y[z], w));
    return this;
  };
  VY.prototype.get = function (K) {
    return this.nested && this.nested[K] || null;
  };
  VY.prototype.getEnum = function (K) {
    if (this.nested && this.nested[K] instanceof a5A) return this.nested[K].values;
    throw Error("no such enum: " + K);
  };
  VY.prototype.add = function (K) {
    if (!(K instanceof $k6 && K.extend !== void 0 || K instanceof o5A || K instanceof F32 || K instanceof a5A || K instanceof XjA || K instanceof VY)) throw TypeError("object must be a valid nested object");
    if (!this.nested) this.nested = {};else {
      var q = this.get(K.name);
      if (q) if (q instanceof VY && K instanceof VY && !(q instanceof o5A || q instanceof XjA)) {
        var Y = q.nestedArray;
        for (var z = 0; z < Y.length; ++z) K.add(Y[z]);
        if (this.remove(q), !this.nested) this.nested = {};
        K.setOptions(q.options, !0);
      } else throw Error("duplicate name '" + K.name + "' in " + this);
    }
    if (this.nested[K.name] = K, !(this instanceof o5A || this instanceof XjA || this instanceof a5A || this instanceof $k6)) {
      if (!K._edition) K._edition = K._defaultEdition;
    }
    this._needsRecursiveFeatureResolution = !0, this._needsRecursiveResolve = !0;
    var w = this;
    while (w = w.parent) w._needsRecursiveFeatureResolution = !0, w._needsRecursiveResolve = !0;
    return K.onAdd(this), Md7(this);
  };
  VY.prototype.remove = function (K) {
    if (!(K instanceof UD1)) throw TypeError("object must be a ReflectionObject");
    if (K.parent !== this) throw Error(K + " is not a member of " + this);
    if (delete this.nested[K.name], !Object.keys(this.nested).length) this.nested = void 0;
    return K.onRemove(this), Md7(this);
  };
  VY.prototype.define = function (K, q) {
    if (pD1.isString(K)) K = K.split(".");else if (!Array.isArray(K)) throw TypeError("illegal path");
    if (K && K.length && K[0] === "") throw Error("path must be relative");
    var Y = this;
    while (K.length > 0) {
      var z = K.shift();
      if (Y.nested && Y.nested[z]) {
        if (Y = Y.nested[z], !(Y instanceof VY)) throw Error("path conflicts with non-namespace objects");
      } else Y.add(Y = new VY(z));
    }
    if (q) Y.addJSON(q);
    return Y;
  };
  VY.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    this._resolveFeaturesRecursive(this._edition);
    var K = this.nestedArray,
      q = 0;
    this.resolve();
    while (q < K.length) if (K[q] instanceof VY) K[q++].resolveAll();else K[q++].resolve();
    return this._needsRecursiveResolve = !1, this;
  };
  VY.prototype._resolveFeaturesRecursive = function (K) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return this._needsRecursiveFeatureResolution = !1, K = this._edition || K, UD1.prototype._resolveFeaturesRecursive.call(this, K), this.nestedArray.forEach(q => {
      q._resolveFeaturesRecursive(K);
    }), this;
  };
  VY.prototype.lookup = function (K, q, Y) {
    if (typeof q === "boolean") Y = q, q = void 0;else if (q && !Array.isArray(q)) q = [q];
    if (pD1.isString(K) && K.length) {
      if (K === ".") return this.root;
      K = K.split(".");
    } else if (!K.length) return this;
    var z = K.join(".");
    if (K[0] === "") return this.root.lookup(K.slice(1), q);
    var w = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + z];
    if (w && (!q || q.indexOf(w.constructor) > -1)) return w;
    if (w = this._lookupImpl(K, z), w && (!q || q.indexOf(w.constructor) > -1)) return w;
    if (Y) return null;
    var H = this;
    while (H.parent) {
      if (w = H.parent._lookupImpl(K, z), w && (!q || q.indexOf(w.constructor) > -1)) return w;
      H = H.parent;
    }
    return null;
  };
  VY.prototype._lookupImpl = function (K, q) {
    if (Object.prototype.hasOwnProperty.call(this._lookupCache, q)) return this._lookupCache[q];
    var Y = this.get(K[0]),
      z = null;
    if (Y) {
      if (K.length === 1) z = Y;else if (Y instanceof VY) K = K.slice(1), z = Y._lookupImpl(K, K.join("."));
    } else for (var w = 0; w < this.nestedArray.length; ++w) if (this._nestedArray[w] instanceof VY && (Y = this._nestedArray[w]._lookupImpl(K, q))) z = Y;
    return this._lookupCache[q] = z, z;
  };
  VY.prototype.lookupType = function (K) {
    var q = this.lookup(K, [o5A]);
    if (!q) throw Error("no such type: " + K);
    return q;
  };
  VY.prototype.lookupEnum = function (K) {
    var q = this.lookup(K, [a5A]);
    if (!q) throw Error("no such Enum '" + K + "' in " + this);
    return q;
  };
  VY.prototype.lookupTypeOrEnum = function (K) {
    var q = this.lookup(K, [o5A, a5A]);
    if (!q) throw Error("no such Type or Enum '" + K + "' in " + this);
    return q;
  };
  VY.prototype.lookupService = function (K) {
    var q = this.lookup(K, [XjA]);
    if (!q) throw Error("no such Service '" + K + "' in " + this);
    return q;
  };
  VY._configure = function (A, K, q) {
    o5A = A, XjA = K, a5A = q;
  };
});

// Register to shared state
__$.$jA = $jA;
