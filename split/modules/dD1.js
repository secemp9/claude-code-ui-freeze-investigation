// Module: dD1
// Dependencies: Jt, t5A, pG

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dD1 = v((YEH, Vd7) => {
  Vd7.exports = Ad;
  var _k6 = __$.Jt();
  ((Ad.prototype = Object.create(_k6.prototype)).constructor = Ad).className = "MapField";
  var Q32 = __$.t5A(),
    AFA = __$.pG();
  function Ad(A, K, q, Y, z, w) {
    if (_k6.call(this, A, K, Y, void 0, void 0, z, w), !AFA.isString(q)) throw TypeError("keyType must be a string");
    this.keyType = q, this.resolvedKeyType = null, this.map = !0;
  }
  Ad.fromJSON = function (K, q) {
    return new Ad(K, q.id, q.keyType, q.type, q.options, q.comment);
  };
  Ad.prototype.toJSON = function (K) {
    var q = K ? Boolean(K.keepComments) : !1;
    return AFA.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", q ? this.comment : void 0]);
  };
  Ad.prototype.resolve = function () {
    if (this.resolved) return this;
    if (Q32.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
    return _k6.prototype.resolve.call(this);
  };
  Ad.d = function (K, q, Y) {
    if (typeof Y === "function") Y = AFA.decorateType(Y).name;else if (Y && typeof Y === "object") Y = AFA.decorateEnum(Y).name;
    return function (w, H) {
      AFA.decorateType(w.constructor).add(new Ad(H, K, q, Y));
    };
  };
});

// Register to shared state
__$.dD1 = dD1;
