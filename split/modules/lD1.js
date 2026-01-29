// Module: lD1
// Dependencies: $jA, cD1, pG, YE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lD1 = v((wEH, Td7) => {
  Td7.exports = Hv;
  var Kd = __$.$jA();
  ((Hv.prototype = Object.create(Kd.prototype)).constructor = Hv).className = "Service";
  var Zk6 = __$.cD1(),
    KFA = __$.pG(),
    U32 = __$.YE6();
  function Hv(A, K) {
    Kd.call(this, A, K), this.methods = {}, this._methodsArray = null;
  }
  Hv.fromJSON = function (K, q) {
    var Y = new Hv(K, q.options);
    if (q.methods) for (var z = Object.keys(q.methods), w = 0; w < z.length; ++w) Y.add(Zk6.fromJSON(z[w], q.methods[z[w]]));
    if (q.nested) Y.addJSON(q.nested);
    if (q.edition) Y._edition = q.edition;
    return Y.comment = q.comment, Y._defaultEdition = "proto3", Y;
  };
  Hv.prototype.toJSON = function (K) {
    var q = Kd.prototype.toJSON.call(this, K),
      Y = K ? Boolean(K.keepComments) : !1;
    return KFA.toObject(["edition", this._editionToJSON(), "options", q && q.options || void 0, "methods", Kd.arrayToJSON(this.methodsArray, K) || {}, "nested", q && q.nested || void 0, "comment", Y ? this.comment : void 0]);
  };
  Object.defineProperty(Hv.prototype, "methodsArray", {
    get: function () {
      return this._methodsArray || (this._methodsArray = KFA.toArray(this.methods));
    }
  });
  function Nd7(A) {
    return A._methodsArray = null, A;
  }
  Hv.prototype.get = function (K) {
    return this.methods[K] || Kd.prototype.get.call(this, K);
  };
  Hv.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    Kd.prototype.resolve.call(this);
    var K = this.methodsArray;
    for (var q = 0; q < K.length; ++q) K[q].resolve();
    return this;
  };
  Hv.prototype._resolveFeaturesRecursive = function (K) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return K = this._edition || K, Kd.prototype._resolveFeaturesRecursive.call(this, K), this.methodsArray.forEach(q => {
      q._resolveFeaturesRecursive(K);
    }), this;
  };
  Hv.prototype.add = function (K) {
    if (this.get(K.name)) throw Error("duplicate name '" + K.name + "' in " + this);
    if (K instanceof Zk6) return this.methods[K.name] = K, K.parent = this, Nd7(this);
    return Kd.prototype.add.call(this, K);
  };
  Hv.prototype.remove = function (K) {
    if (K instanceof Zk6) {
      if (this.methods[K.name] !== K) throw Error(K + " is not a member of " + this);
      return delete this.methods[K.name], K.parent = null, Nd7(this);
    }
    return Kd.prototype.remove.call(this, K);
  };
  Hv.prototype.create = function (K, q, Y) {
    var z = new U32.Service(K, q, Y);
    for (var w = 0, H; w < this.methodsArray.length; ++w) {
      var J = KFA.lcFirst((H = this._methodsArray[w]).resolve().name).replace(/[^$\w_]/g, "");
      z[J] = KFA.codegen(["r", "c"], KFA.isReserved(J) ? J + "_" : J)("return this.rpcCall(m,q,s,r,c)")({
        m: H,
        q: H.resolvedRequestType.ctor,
        s: H.resolvedResponseType.ctor
      });
    }
    return z;
  };
});

// Register to shared state
__$.lD1 = lD1;
