// Module: D36
// Dependencies: RK, P9, Q4A, G36, AL4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D36 = v(qL4 => {
  Object.defineProperty(qL4, "__esModule", {
    value: !0
  });
  qL4.defaultResource = qL4.emptyResource = qL4.resourceFromDetectedResource = qL4.resourceFromAttributes = void 0;
  var LIA = __$.RK(),
    Z36 = __$.P9(),
    c4A = __$.Q4A(),
    _$9 = __$.G36(),
    CIA = __$.AL4();
  class RIA {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(A, K) {
      let q = new RIA({}, K);
      return q._rawAttributes = KL4(A), q._asyncAttributesPending = A.filter(([Y, z]) => (0, CIA.isPromiseLike)(z)).length > 0, q;
    }
    constructor(A, K) {
      let q = A.attributes ?? {};
      this._rawAttributes = Object.entries(q).map(([Y, z]) => {
        if ((0, CIA.isPromiseLike)(z)) this._asyncAttributesPending = !0;
        return [Y, z];
      }), this._rawAttributes = KL4(this._rawAttributes), this._schemaUrl = D$9(K?.schemaUrl);
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (!this.asyncAttributesPending) return;
      for (let A = 0; A < this._rawAttributes.length; A++) {
        let [K, q] = this._rawAttributes[A];
        this._rawAttributes[A] = [K, (0, CIA.isPromiseLike)(q) ? await q : q];
      }
      this._asyncAttributesPending = !1;
    }
    get attributes() {
      if (this.asyncAttributesPending) LIA.diag.error("Accessing resource attributes before async attributes settled");
      if (this._memoizedAttributes) return this._memoizedAttributes;
      let A = {};
      for (let [K, q] of this._rawAttributes) {
        if ((0, CIA.isPromiseLike)(q)) {
          LIA.diag.debug(`Unsettled resource attribute ${K} skipped`);
          continue;
        }
        if (q != null) A[K] ??= q;
      }
      if (!this._asyncAttributesPending) this._memoizedAttributes = A;
      return A;
    }
    getRawAttributes() {
      return this._rawAttributes;
    }
    get schemaUrl() {
      return this._schemaUrl;
    }
    merge(A) {
      if (A == null) return this;
      let K = j$9(this, A),
        q = K ? {
          schemaUrl: K
        } : void 0;
      return RIA.FromAttributeList([...A.getRawAttributes(), ...this.getRawAttributes()], q);
    }
  }
  function W36(A, K) {
    return RIA.FromAttributeList(Object.entries(A), K);
  }
  qL4.resourceFromAttributes = W36;
  function G$9(A, K) {
    return new RIA(A, K);
  }
  qL4.resourceFromDetectedResource = G$9;
  function Z$9() {
    return W36({});
  }
  qL4.emptyResource = Z$9;
  function W$9() {
    return W36({
      [c4A.ATTR_SERVICE_NAME]: (0, _$9.defaultServiceName)(),
      [c4A.ATTR_TELEMETRY_SDK_LANGUAGE]: Z36.SDK_INFO[c4A.ATTR_TELEMETRY_SDK_LANGUAGE],
      [c4A.ATTR_TELEMETRY_SDK_NAME]: Z36.SDK_INFO[c4A.ATTR_TELEMETRY_SDK_NAME],
      [c4A.ATTR_TELEMETRY_SDK_VERSION]: Z36.SDK_INFO[c4A.ATTR_TELEMETRY_SDK_VERSION]
    });
  }
  qL4.defaultResource = W$9;
  function KL4(A) {
    return A.map(([K, q]) => {
      if ((0, CIA.isPromiseLike)(q)) return [K, q.catch(Y => {
        LIA.diag.debug("promise rejection for resource attribute: %s - %s", K, Y);
        return;
      })];
      return [K, q];
    });
  }
  function D$9(A) {
    if (typeof A === "string" || A === void 0) return A;
    LIA.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", A);
    return;
  }
  function j$9(A, K) {
    let q = A?.schemaUrl,
      Y = K?.schemaUrl,
      z = q === void 0 || q === "",
      w = Y === void 0 || Y === "";
    if (z) return Y;
    if (w) return q;
    if (q === Y) return q;
    LIA.diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', q, Y);
    return;
  }
});

// Register to shared state
__$.D36 = D36;
