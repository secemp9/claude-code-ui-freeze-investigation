// Module: amA
// Dependencies: wDA, wL, wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var amA = v((UWH, VL7) => {
  VL7.exports = us;
  var MN6 = __$.wDA(),
    PN6 = __$.wL(),
    {
      JSONParserError: JlY,
      InvalidPointerError: OlY,
      MissingPointerError: XlY,
      isHandledError: $lY
    } = __$.wS(),
    _lY = /\//g,
    GlY = /~/g,
    ZlY = /~1/g,
    WlY = /~0/g;
  function us(A, K, q) {
    this.$ref = A, this.path = K, this.originalPath = q || K, this.value = void 0, this.circular = !1, this.indirections = 0;
  }
  us.prototype.resolve = function (A, K, q) {
    let Y = us.parse(this.path, this.originalPath);
    this.value = PL7(A);
    for (let z = 0; z < Y.length; z++) {
      if (yZ1(this, K)) this.path = us.join(this.path, Y.slice(z));
      if (typeof this.value === "object" && this.value !== null && "$ref" in this.value) return this;
      let w = Y[z];
      if (this.value[w] === void 0 || this.value[w] === null) throw this.value = null, new XlY(w, decodeURI(this.originalPath));else this.value = this.value[w];
    }
    if (!this.value || this.value.$ref && PN6.resolve(this.path, this.value.$ref) !== q) yZ1(this, K);
    return this;
  };
  us.prototype.set = function (A, K, q) {
    let Y = us.parse(this.path),
      z;
    if (Y.length === 0) return this.value = K, K;
    this.value = PL7(A);
    for (let w = 0; w < Y.length - 1; w++) if (yZ1(this, q), z = Y[w], this.value && this.value[z] !== void 0) this.value = this.value[z];else this.value = ML7(this, z, {});
    return yZ1(this, q), z = Y[Y.length - 1], ML7(this, z, K), A;
  };
  us.parse = function (A, K) {
    let q = PN6.getHash(A).substr(1);
    if (!q) return [];
    q = q.split("/");
    for (let Y = 0; Y < q.length; Y++) q[Y] = decodeURIComponent(q[Y].replace(ZlY, "/").replace(WlY, "~"));
    if (q[0] !== "") throw new OlY(q, K === void 0 ? A : K);
    return q.slice(1);
  };
  us.join = function (A, K) {
    if (A.indexOf("#") === -1) A += "#";
    K = Array.isArray(K) ? K : [K];
    for (let q = 0; q < K.length; q++) {
      let Y = K[q];
      A += "/" + encodeURIComponent(Y.replace(GlY, "~0").replace(_lY, "~1"));
    }
    return A;
  };
  function yZ1(A, K) {
    if (MN6.isAllowed$Ref(A.value, K)) {
      let q = PN6.resolve(A.path, A.value.$ref);
      if (q === A.path) A.circular = !0;else {
        let Y = A.$ref.$refs._resolve(q, A.path, K);
        if (Y === null) return !1;
        if (A.indirections += Y.indirections + 1, MN6.isExtended$Ref(A.value)) return A.value = MN6.dereference(A.value, Y.value), !1;else A.$ref = Y.$ref, A.path = Y.path, A.value = Y.value;
        return !0;
      }
    }
  }
  function ML7(A, K, q) {
    if (A.value && typeof A.value === "object") {
      if (K === "-" && Array.isArray(A.value)) A.value.push(q);else A.value[K] = q;
    } else throw new JlY(`Error assigning $ref pointer "${A.path}". 
Cannot set "${K}" of a non-object.`);
    return q;
  }
  function PL7(A) {
    if ($lY(A)) throw A;
    return A;
  }
});

// Register to shared state
__$.amA = amA;
