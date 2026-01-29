// Module: cD1
// Dependencies: Ot, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cD1 = v((zEH, fd7) => {
  fd7.exports = e5A;
  var Gk6 = __$.Ot();
  ((e5A.prototype = Object.create(Gk6.prototype)).constructor = e5A).className = "Method";
  var _jA = __$.pG();
  function e5A(A, K, q, Y, z, w, H, J, O) {
    if (_jA.isObject(z)) H = z, z = w = void 0;else if (_jA.isObject(w)) H = w, w = void 0;
    if (!(K === void 0 || _jA.isString(K))) throw TypeError("type must be a string");
    if (!_jA.isString(q)) throw TypeError("requestType must be a string");
    if (!_jA.isString(Y)) throw TypeError("responseType must be a string");
    Gk6.call(this, A, H), this.type = K || "rpc", this.requestType = q, this.requestStream = z ? !0 : void 0, this.responseType = Y, this.responseStream = w ? !0 : void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = J, this.parsedOptions = O;
  }
  e5A.fromJSON = function (K, q) {
    return new e5A(K, q.type, q.requestType, q.responseType, q.requestStream, q.responseStream, q.options, q.comment, q.parsedOptions);
  };
  e5A.prototype.toJSON = function (K) {
    var q = K ? Boolean(K.keepComments) : !1;
    return _jA.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", q ? this.comment : void 0, "parsedOptions", this.parsedOptions]);
  };
  e5A.prototype.resolve = function () {
    if (this.resolved) return this;
    return this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), Gk6.prototype.resolve.call(this);
  };
});

// Register to shared state
__$.cD1 = cD1;
