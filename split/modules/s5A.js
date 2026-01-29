// Module: s5A
// Dependencies: Ot, Jt, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var s5A = v((jEH, pd7) => {
  pd7.exports = Ov;
  var Kj1 = __$.Ot();
  ((Ov.prototype = Object.create(Kj1.prototype)).constructor = Ov).className = "OneOf";
  var Qd7 = __$.Jt(),
    Aj1 = __$.pG();
  function Ov(A, K, q, Y) {
    if (!Array.isArray(K)) q = K, K = void 0;
    if (Kj1.call(this, A, q), !(K === void 0 || Array.isArray(K))) throw TypeError("fieldNames must be an Array");
    this.oneof = K || [], this.fieldsArray = [], this.comment = Y;
  }
  Ov.fromJSON = function (K, q) {
    return new Ov(K, q.oneof, q.options, q.comment);
  };
  Ov.prototype.toJSON = function (K) {
    var q = K ? Boolean(K.keepComments) : !1;
    return Aj1.toObject(["options", this.options, "oneof", this.oneof, "comment", q ? this.comment : void 0]);
  };
  function Ud7(A) {
    if (A.parent) {
      for (var K = 0; K < A.fieldsArray.length; ++K) if (!A.fieldsArray[K].parent) A.parent.add(A.fieldsArray[K]);
    }
  }
  Ov.prototype.add = function (K) {
    if (!(K instanceof Qd7)) throw TypeError("field must be a Field");
    if (K.parent && K.parent !== this.parent) K.parent.remove(K);
    return this.oneof.push(K.name), this.fieldsArray.push(K), K.partOf = this, Ud7(this), this;
  };
  Ov.prototype.remove = function (K) {
    if (!(K instanceof Qd7)) throw TypeError("field must be a Field");
    var q = this.fieldsArray.indexOf(K);
    if (q < 0) throw Error(K + " is not a member of " + this);
    if (this.fieldsArray.splice(q, 1), q = this.oneof.indexOf(K.name), q > -1) this.oneof.splice(q, 1);
    return K.partOf = null, this;
  };
  Ov.prototype.onAdd = function (K) {
    Kj1.prototype.onAdd.call(this, K);
    var q = this;
    for (var Y = 0; Y < this.oneof.length; ++Y) {
      var z = K.get(this.oneof[Y]);
      if (z && !z.partOf) z.partOf = q, q.fieldsArray.push(z);
    }
    Ud7(this);
  };
  Ov.prototype.onRemove = function (K) {
    for (var q = 0, Y; q < this.fieldsArray.length; ++q) if ((Y = this.fieldsArray[q]).parent) Y.parent.remove(Y);
    Kj1.prototype.onRemove.call(this, K);
  };
  Object.defineProperty(Ov.prototype, "isProto3Optional", {
    get: function () {
      if (this.fieldsArray == null || this.fieldsArray.length !== 1) return !1;
      var A = this.fieldsArray[0];
      return A.options != null && A.options.proto3_optional === !0;
    }
  });
  Ov.d = function () {
    var K = Array(arguments.length),
      q = 0;
    while (q < arguments.length) K[q] = arguments[q++];
    return function (z, w) {
      Aj1.decorateType(z.constructor).add(new Ov(w, K)), Object.defineProperty(z, w, {
        get: Aj1.oneOfGetter(K),
        set: Aj1.oneOfSetter(K)
      });
    };
  };
});

// Register to shared state
__$.s5A = s5A;
