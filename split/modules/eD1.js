// Module: eD1
// Dependencies: $jA, Jt, VS, s5A, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eD1 = v((GEH, xd7) => {
  xd7.exports = Jv;
  var tD1 = __$.$jA();
  ((Jv.prototype = Object.create(tD1.prototype)).constructor = Jv).className = "Root";
  var aD1 = __$.Jt(),
    Ck6 = __$.VS(),
    w92 = __$.s5A(),
    Xt = __$.pG(),
    Lk6,
    Rk6,
    YFA;
  function Jv(A) {
    tD1.call(this, "", A), this.deferred = [], this.files = [], this._edition = "proto2", this._fullyQualifiedObjects = {};
  }
  Jv.fromJSON = function (K, q) {
    if (!q) q = new Jv();
    if (K.options) q.setOptions(K.options);
    return q.addJSON(K.nested).resolveAll();
  };
  Jv.prototype.resolvePath = Xt.path.resolve;
  Jv.prototype.fetch = Xt.fetch;
  function bd7() {}
  Jv.prototype.load = function A(K, q, Y) {
    if (typeof q === "function") Y = q, q = void 0;
    var z = this;
    if (!Y) return Xt.asPromise(A, z, K, q);
    var w = Y === bd7;
    function H(Z, W) {
      if (!Y) return;
      if (w) throw Z;
      if (W) W.resolveAll();
      var D = Y;
      Y = null, D(Z, W);
    }
    function J(Z) {
      var W = Z.lastIndexOf("google/protobuf/");
      if (W > -1) {
        var D = Z.substring(W);
        if (D in YFA) return D;
      }
      return null;
    }
    function O(Z, W) {
      try {
        if (Xt.isString(W) && W.charAt(0) === "{") W = JSON.parse(W);
        if (!Xt.isString(W)) z.setOptions(W.options).addJSON(W.nested);else {
          Rk6.filename = Z;
          var D = Rk6(W, z, q),
            j,
            M = 0;
          if (D.imports) {
            for (; M < D.imports.length; ++M) if (j = J(D.imports[M]) || z.resolvePath(Z, D.imports[M])) X(j);
          }
          if (D.weakImports) {
            for (M = 0; M < D.weakImports.length; ++M) if (j = J(D.weakImports[M]) || z.resolvePath(Z, D.weakImports[M])) X(j, !0);
          }
        }
      } catch (P) {
        H(P);
      }
      if (!w && !$) H(null, z);
    }
    function X(Z, W) {
      if (Z = J(Z) || Z, z.files.indexOf(Z) > -1) return;
      if (z.files.push(Z), Z in YFA) {
        if (w) O(Z, YFA[Z]);else ++$, setTimeout(function () {
          --$, O(Z, YFA[Z]);
        });
        return;
      }
      if (w) {
        var D;
        try {
          D = Xt.fs.readFileSync(Z).toString("utf8");
        } catch (j) {
          if (!W) H(j);
          return;
        }
        O(Z, D);
      } else ++$, z.fetch(Z, function (j, M) {
        if (--$, !Y) return;
        if (j) {
          if (!W) H(j);else if (!$) H(null, z);
          return;
        }
        O(Z, M);
      });
    }
    var $ = 0;
    if (Xt.isString(K)) K = [K];
    for (var _ = 0, G; _ < K.length; ++_) if (G = z.resolvePath("", K[_])) X(G);
    if (w) return z.resolveAll(), z;
    if (!$) H(null, z);
    return z;
  };
  Jv.prototype.loadSync = function (K, q) {
    if (!Xt.isNode) throw Error("not supported");
    return this.load(K, q, bd7);
  };
  Jv.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (K) {
      return "'extend " + K.extend + "' in " + K.parent.fullName;
    }).join(", "));
    return tD1.prototype.resolveAll.call(this);
  };
  var sD1 = /^[A-Z]/;
  function hd7(A, K) {
    var q = K.parent.lookup(K.extend);
    if (q) {
      var Y = new aD1(K.fullName, K.id, K.type, K.rule, void 0, K.options);
      if (q.get(Y.name)) return !0;
      return Y.declaringField = K, K.extensionField = Y, q.add(Y), !0;
    }
    return !1;
  }
  Jv.prototype._handleAdd = function (K) {
    if (K instanceof aD1) {
      if (K.extend !== void 0 && !K.extensionField) {
        if (!hd7(this, K)) this.deferred.push(K);
      }
    } else if (K instanceof Ck6) {
      if (sD1.test(K.name)) K.parent[K.name] = K.values;
    } else if (!(K instanceof w92)) {
      if (K instanceof Lk6) for (var q = 0; q < this.deferred.length;) if (hd7(this, this.deferred[q])) this.deferred.splice(q, 1);else ++q;
      for (var Y = 0; Y < K.nestedArray.length; ++Y) this._handleAdd(K._nestedArray[Y]);
      if (sD1.test(K.name)) K.parent[K.name] = K;
    }
    if (K instanceof Lk6 || K instanceof Ck6 || K instanceof aD1) this._fullyQualifiedObjects[K.fullName] = K;
  };
  Jv.prototype._handleRemove = function (K) {
    if (K instanceof aD1) {
      if (K.extend !== void 0) if (K.extensionField) K.extensionField.parent.remove(K.extensionField), K.extensionField = null;else {
        var q = this.deferred.indexOf(K);
        if (q > -1) this.deferred.splice(q, 1);
      }
    } else if (K instanceof Ck6) {
      if (sD1.test(K.name)) delete K.parent[K.name];
    } else if (K instanceof tD1) {
      for (var Y = 0; Y < K.nestedArray.length; ++Y) this._handleRemove(K._nestedArray[Y]);
      if (sD1.test(K.name)) delete K.parent[K.name];
    }
    delete this._fullyQualifiedObjects[K.fullName];
  };
  Jv._configure = function (A, K, q) {
    Lk6 = A, Rk6 = K, YFA = q;
  };
});

// Register to shared state
__$.eD1 = eD1;
