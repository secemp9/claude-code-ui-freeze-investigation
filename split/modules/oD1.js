// Module: oD1
// Dependencies: $jA, VS, s5A, Jt, dD1, lD1, iD1, GD1, $D1, pG
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oD1 = v((_EH, Sd7) => {
  Sd7.exports = Rw;
  var _L = __$.$jA();
  ((Rw.prototype = Object.create(_L.prototype)).constructor = Rw).className = "Type";
  var s32 = __$.VS(),
    Ek6 = __$.s5A(),
    nD1 = __$.Jt(),
    t32 = __$.dD1(),
    e32 = __$.lD1(),
    Tk6 = __$.iD1(),
    vk6 = __$.GD1(),
    A92 = __$.$D1(),
    $j = __$.pG(),
    K92 = __$.kk6(),
    q92 = __$.Wk6(),
    Y92 = __$.Mk6(),
    Id7 = __$.fk6(),
    z92 = __$.Nk6();
  function Rw(A, K) {
    _L.call(this, A, K), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
  }
  Object.defineProperties(Rw.prototype, {
    fieldsById: {
      get: function () {
        if (this._fieldsById) return this._fieldsById;
        this._fieldsById = {};
        for (var A = Object.keys(this.fields), K = 0; K < A.length; ++K) {
          var q = this.fields[A[K]],
            Y = q.id;
          if (this._fieldsById[Y]) throw Error("duplicate id " + Y + " in " + this);
          this._fieldsById[Y] = q;
        }
        return this._fieldsById;
      }
    },
    fieldsArray: {
      get: function () {
        return this._fieldsArray || (this._fieldsArray = $j.toArray(this.fields));
      }
    },
    oneofsArray: {
      get: function () {
        return this._oneofsArray || (this._oneofsArray = $j.toArray(this.oneofs));
      }
    },
    ctor: {
      get: function () {
        return this._ctor || (this.ctor = Rw.generateConstructor(this)());
      },
      set: function (A) {
        var K = A.prototype;
        if (!(K instanceof Tk6)) (A.prototype = new Tk6()).constructor = A, $j.merge(A.prototype, K);
        A.$type = A.prototype.$type = this, $j.merge(A, Tk6, !0), this._ctor = A;
        var q = 0;
        for (; q < this.fieldsArray.length; ++q) this._fieldsArray[q].resolve();
        var Y = {};
        for (q = 0; q < this.oneofsArray.length; ++q) Y[this._oneofsArray[q].resolve().name] = {
          get: $j.oneOfGetter(this._oneofsArray[q].oneof),
          set: $j.oneOfSetter(this._oneofsArray[q].oneof)
        };
        if (q) Object.defineProperties(A.prototype, Y);
      }
    }
  });
  Rw.generateConstructor = function (K) {
    var q = $j.codegen(["p"], K.name);
    for (var Y = 0, z; Y < K.fieldsArray.length; ++Y) if ((z = K._fieldsArray[Y]).map) q("this%s={}", $j.safeProp(z.name));else if (z.repeated) q("this%s=[]", $j.safeProp(z.name));
    return q("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  function rD1(A) {
    return A._fieldsById = A._fieldsArray = A._oneofsArray = null, delete A.encode, delete A.decode, delete A.verify, A;
  }
  Rw.fromJSON = function (K, q) {
    var Y = new Rw(K, q.options);
    Y.extensions = q.extensions, Y.reserved = q.reserved;
    var z = Object.keys(q.fields),
      w = 0;
    for (; w < z.length; ++w) Y.add((typeof q.fields[z[w]].keyType < "u" ? t32.fromJSON : nD1.fromJSON)(z[w], q.fields[z[w]]));
    if (q.oneofs) for (z = Object.keys(q.oneofs), w = 0; w < z.length; ++w) Y.add(Ek6.fromJSON(z[w], q.oneofs[z[w]]));
    if (q.nested) for (z = Object.keys(q.nested), w = 0; w < z.length; ++w) {
      var H = q.nested[z[w]];
      Y.add((H.id !== void 0 ? nD1.fromJSON : H.fields !== void 0 ? Rw.fromJSON : H.values !== void 0 ? s32.fromJSON : H.methods !== void 0 ? e32.fromJSON : _L.fromJSON)(z[w], H));
    }
    if (q.extensions && q.extensions.length) Y.extensions = q.extensions;
    if (q.reserved && q.reserved.length) Y.reserved = q.reserved;
    if (q.group) Y.group = !0;
    if (q.comment) Y.comment = q.comment;
    if (q.edition) Y._edition = q.edition;
    return Y._defaultEdition = "proto3", Y;
  };
  Rw.prototype.toJSON = function (K) {
    var q = _L.prototype.toJSON.call(this, K),
      Y = K ? Boolean(K.keepComments) : !1;
    return $j.toObject(["edition", this._editionToJSON(), "options", q && q.options || void 0, "oneofs", _L.arrayToJSON(this.oneofsArray, K), "fields", _L.arrayToJSON(this.fieldsArray.filter(function (z) {
      return !z.declaringField;
    }), K) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", q && q.nested || void 0, "comment", Y ? this.comment : void 0]);
  };
  Rw.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    _L.prototype.resolveAll.call(this);
    var K = this.oneofsArray;
    Y = 0;
    while (Y < K.length) K[Y++].resolve();
    var q = this.fieldsArray,
      Y = 0;
    while (Y < q.length) q[Y++].resolve();
    return this;
  };
  Rw.prototype._resolveFeaturesRecursive = function (K) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return K = this._edition || K, _L.prototype._resolveFeaturesRecursive.call(this, K), this.oneofsArray.forEach(q => {
      q._resolveFeatures(K);
    }), this.fieldsArray.forEach(q => {
      q._resolveFeatures(K);
    }), this;
  };
  Rw.prototype.get = function (K) {
    return this.fields[K] || this.oneofs && this.oneofs[K] || this.nested && this.nested[K] || null;
  };
  Rw.prototype.add = function (K) {
    if (this.get(K.name)) throw Error("duplicate name '" + K.name + "' in " + this);
    if (K instanceof nD1 && K.extend === void 0) {
      if (this._fieldsById ? this._fieldsById[K.id] : this.fieldsById[K.id]) throw Error("duplicate id " + K.id + " in " + this);
      if (this.isReservedId(K.id)) throw Error("id " + K.id + " is reserved in " + this);
      if (this.isReservedName(K.name)) throw Error("name '" + K.name + "' is reserved in " + this);
      if (K.parent) K.parent.remove(K);
      return this.fields[K.name] = K, K.message = this, K.onAdd(this), rD1(this);
    }
    if (K instanceof Ek6) {
      if (!this.oneofs) this.oneofs = {};
      return this.oneofs[K.name] = K, K.onAdd(this), rD1(this);
    }
    return _L.prototype.add.call(this, K);
  };
  Rw.prototype.remove = function (K) {
    if (K instanceof nD1 && K.extend === void 0) {
      if (!this.fields || this.fields[K.name] !== K) throw Error(K + " is not a member of " + this);
      return delete this.fields[K.name], K.parent = null, K.onRemove(this), rD1(this);
    }
    if (K instanceof Ek6) {
      if (!this.oneofs || this.oneofs[K.name] !== K) throw Error(K + " is not a member of " + this);
      return delete this.oneofs[K.name], K.parent = null, K.onRemove(this), rD1(this);
    }
    return _L.prototype.remove.call(this, K);
  };
  Rw.prototype.isReservedId = function (K) {
    return _L.isReservedId(this.reserved, K);
  };
  Rw.prototype.isReservedName = function (K) {
    return _L.isReservedName(this.reserved, K);
  };
  Rw.prototype.create = function (K) {
    return new this.ctor(K);
  };
  Rw.prototype.setup = function () {
    var K = this.fullName,
      q = [];
    for (var Y = 0; Y < this.fieldsArray.length; ++Y) q.push(this._fieldsArray[Y].resolve().resolvedType);
    this.encode = K92(this)({
      Writer: A92,
      types: q,
      util: $j
    }), this.decode = q92(this)({
      Reader: vk6,
      types: q,
      util: $j
    }), this.verify = Y92(this)({
      types: q,
      util: $j
    }), this.fromObject = Id7.fromObject(this)({
      types: q,
      util: $j
    }), this.toObject = Id7.toObject(this)({
      types: q,
      util: $j
    });
    var z = z92[K];
    if (z) {
      var w = Object.create(this);
      w.fromObject = this.fromObject, this.fromObject = z.fromObject.bind(w), w.toObject = this.toObject, this.toObject = z.toObject.bind(w);
    }
    return this;
  };
  Rw.prototype.encode = function (K, q) {
    return this.setup().encode(K, q);
  };
  Rw.prototype.encodeDelimited = function (K, q) {
    return this.encode(K, q && q.len ? q.fork() : q).ldelim();
  };
  Rw.prototype.decode = function (K, q) {
    return this.setup().decode(K, q);
  };
  Rw.prototype.decodeDelimited = function (K) {
    if (!(K instanceof vk6)) K = vk6.create(K);
    return this.decode(K, K.uint32());
  };
  Rw.prototype.verify = function (K) {
    return this.setup().verify(K);
  };
  Rw.prototype.fromObject = function (K) {
    return this.setup().fromObject(K);
  };
  Rw.prototype.toObject = function (K, q) {
    return this.setup().toObject(K, q);
  };
  Rw.d = function (K) {
    return function (Y) {
      $j.decorateType(Y, K);
    };
  };
});

// Register to shared state
__$.oD1 = oD1;
