// Module: CL7
// Dependencies: hs, wDA, wL

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var CL7 = v((dWH, kL7) => {
  var {
      ono: vL7
    } = __$.hs(),
    flY = __$.wDA(),
    Bs = __$.wL();
  kL7.exports = HS;
  function HS() {
    this.circular = !1, this._$refs = {}, this._root$Ref = null;
  }
  HS.prototype.paths = function (A) {
    return EL7(this._$refs, arguments).map(q => {
      return q.decoded;
    });
  };
  HS.prototype.values = function (A) {
    let K = this._$refs;
    return EL7(K, arguments).reduce((Y, z) => {
      return Y[z.decoded] = K[z.encoded].value, Y;
    }, {});
  };
  HS.prototype.toJSON = HS.prototype.values;
  HS.prototype.exists = function (A, K) {
    try {
      return this._resolve(A, "", K), !0;
    } catch (q) {
      return !1;
    }
  };
  HS.prototype.get = function (A, K) {
    return this._resolve(A, "", K).value;
  };
  HS.prototype.set = function (A, K) {
    let q = Bs.resolve(this._root$Ref.path, A),
      Y = Bs.stripHash(q),
      z = this._$refs[Y];
    if (!z) throw vL7(`Error resolving $ref pointer "${A}". 
"${Y}" not found.`);
    z.set(q, K);
  };
  HS.prototype._add = function (A) {
    let K = Bs.stripHash(A),
      q = new flY();
    return q.path = K, q.$refs = this, this._$refs[K] = q, this._root$Ref = this._root$Ref || q, q;
  };
  HS.prototype._resolve = function (A, K, q) {
    let Y = Bs.resolve(this._root$Ref.path, A),
      z = Bs.stripHash(Y),
      w = this._$refs[z];
    if (!w) throw vL7(`Error resolving $ref pointer "${A}". 
"${z}" not found.`);
    return w.resolve(Y, q, A, K);
  };
  HS.prototype._get$Ref = function (A) {
    A = Bs.resolve(this._root$Ref.path, A);
    let K = Bs.stripHash(A);
    return this._$refs[K];
  };
  function EL7(A, K) {
    let q = Object.keys(A);
    if (K = Array.isArray(K[0]) ? K[0] : Array.prototype.slice.call(K), K.length > 0 && K[0]) q = q.filter(Y => {
      return K.indexOf(A[Y].pathType) !== -1;
    });
    return q.map(Y => {
      return {
        encoded: Y,
        decoded: A[Y].pathType === "file" ? Bs.toFileSystemPath(Y, !0) : Y
      };
    });
  }
});

// Register to shared state
__$.CL7 = CL7;
