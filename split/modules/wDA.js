// Module: wDA
// Dependencies: amA, wS, wL

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wDA = v((pWH, TL7) => {
  TL7.exports = qP;
  var NL7 = __$.amA(),
    {
      InvalidPointerError: DlY,
      isHandledError: jlY,
      normalizeError: fL7
    } = __$.wS(),
    {
      safePointerToPath: MlY,
      stripHash: PlY,
      getHash: VlY
    } = __$.wL();
  function qP() {
    this.path = void 0, this.value = void 0, this.$refs = void 0, this.pathType = void 0, this.errors = void 0;
  }
  qP.prototype.addError = function (A) {
    if (this.errors === void 0) this.errors = [];
    let K = this.errors.map(({
      footprint: q
    }) => q);
    if (Array.isArray(A.errors)) this.errors.push(...A.errors.map(fL7).filter(({
      footprint: q
    }) => !K.includes(q)));else if (!K.includes(A.footprint)) this.errors.push(fL7(A));
  };
  qP.prototype.exists = function (A, K) {
    try {
      return this.resolve(A, K), !0;
    } catch (q) {
      return !1;
    }
  };
  qP.prototype.get = function (A, K) {
    return this.resolve(A, K).value;
  };
  qP.prototype.resolve = function (A, K, q, Y) {
    let z = new NL7(this, A, q);
    try {
      return z.resolve(this.value, K, Y);
    } catch (w) {
      if (!K || !K.continueOnError || !jlY(w)) throw w;
      if (w.path === null) w.path = MlY(VlY(Y));
      if (w instanceof DlY) w.source = decodeURI(PlY(Y));
      return this.addError(w), null;
    }
  };
  qP.prototype.set = function (A, K) {
    let q = new NL7(this, A);
    this.value = q.set(this.value, K);
  };
  qP.is$Ref = function (A) {
    return A && typeof A === "object" && typeof A.$ref === "string" && A.$ref.length > 0;
  };
  qP.isExternal$Ref = function (A) {
    return qP.is$Ref(A) && A.$ref[0] !== "#";
  };
  qP.isAllowed$Ref = function (A, K) {
    if (qP.is$Ref(A)) {
      if (A.$ref.substr(0, 2) === "#/" || A.$ref === "#") return !0;else if (A.$ref[0] !== "#" && (!K || K.resolve.external)) return !0;
    }
  };
  qP.isExtended$Ref = function (A) {
    return qP.is$Ref(A) && Object.keys(A).length > 1;
  };
  qP.dereference = function (A, K) {
    if (K && typeof K === "object" && qP.isExtended$Ref(A)) {
      let q = {};
      for (let Y of Object.keys(A)) if (Y !== "$ref") q[Y] = A[Y];
      for (let Y of Object.keys(K)) if (!(Y in q)) q[Y] = K[Y];
      return q;
    } else return K;
  };
});

// Register to shared state
__$.wDA = wDA;
