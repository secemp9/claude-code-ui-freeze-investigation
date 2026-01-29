// Module: Lj1
// Dependencies: FE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lj1 = v(ui7 => {
  Object.defineProperty(ui7, "__esModule", {
    value: !0
  });
  ui7.ServerCredentials = void 0;
  ui7.createCertificateProviderServerCredentials = yw2;
  ui7.createServerCredentialsWithInterceptors = Iw2;
  var EC6 = __$.FE6();
  class TjA {
    constructor(A, K) {
      this.serverConstructorOptions = A, this.watchers = new Set(), this.latestContextOptions = null, this.latestContextOptions = K !== null && K !== void 0 ? K : null;
    }
    _addWatcher(A) {
      this.watchers.add(A);
    }
    _removeWatcher(A) {
      this.watchers.delete(A);
    }
    getWatcherCount() {
      return this.watchers.size;
    }
    updateSecureContextOptions(A) {
      this.latestContextOptions = A;
      for (let K of this.watchers) K(this.latestContextOptions);
    }
    _isSecure() {
      return this.serverConstructorOptions !== null;
    }
    _getSecureContextOptions() {
      return this.latestContextOptions;
    }
    _getConstructorOptions() {
      return this.serverConstructorOptions;
    }
    _getInterceptors() {
      return [];
    }
    static createInsecure() {
      return new kC6();
    }
    static createSsl(A, K, q = !1) {
      var Y;
      if (A !== null && !Buffer.isBuffer(A)) throw TypeError("rootCerts must be null or a Buffer");
      if (!Array.isArray(K)) throw TypeError("keyCertPairs must be an array");
      if (typeof q !== "boolean") throw TypeError("checkClientCertificate must be a boolean");
      let z = [],
        w = [];
      for (let H = 0; H < K.length; H++) {
        let J = K[H];
        if (J === null || typeof J !== "object") throw TypeError(`keyCertPair[${H}] must be an object`);
        if (!Buffer.isBuffer(J.private_key)) throw TypeError(`keyCertPair[${H}].private_key must be a Buffer`);
        if (!Buffer.isBuffer(J.cert_chain)) throw TypeError(`keyCertPair[${H}].cert_chain must be a Buffer`);
        z.push(J.cert_chain), w.push(J.private_key);
      }
      return new CC6({
        requestCert: q,
        ciphers: EC6.CIPHER_SUITES
      }, {
        ca: (Y = A !== null && A !== void 0 ? A : (0, EC6.getDefaultRootsData)()) !== null && Y !== void 0 ? Y : void 0,
        cert: z,
        key: w
      });
    }
  }
  ui7.ServerCredentials = TjA;
  class kC6 extends TjA {
    constructor() {
      super(null);
    }
    _getSettings() {
      return null;
    }
    _equals(A) {
      return A instanceof kC6;
    }
  }
  class CC6 extends TjA {
    constructor(A, K) {
      super(A, K);
      this.options = Object.assign(Object.assign({}, A), K);
    }
    _equals(A) {
      if (this === A) return !0;
      if (!(A instanceof CC6)) return !1;
      if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(A.options.ca)) {
        if (!this.options.ca.equals(A.options.ca)) return !1;
      } else if (this.options.ca !== A.options.ca) return !1;
      if (Array.isArray(this.options.cert) && Array.isArray(A.options.cert)) {
        if (this.options.cert.length !== A.options.cert.length) return !1;
        for (let K = 0; K < this.options.cert.length; K++) {
          let q = this.options.cert[K],
            Y = A.options.cert[K];
          if (Buffer.isBuffer(q) && Buffer.isBuffer(Y)) {
            if (!q.equals(Y)) return !1;
          } else if (q !== Y) return !1;
        }
      } else if (this.options.cert !== A.options.cert) return !1;
      if (Array.isArray(this.options.key) && Array.isArray(A.options.key)) {
        if (this.options.key.length !== A.options.key.length) return !1;
        for (let K = 0; K < this.options.key.length; K++) {
          let q = this.options.key[K],
            Y = A.options.key[K];
          if (Buffer.isBuffer(q) && Buffer.isBuffer(Y)) {
            if (!q.equals(Y)) return !1;
          } else if (q !== Y) return !1;
        }
      } else if (this.options.key !== A.options.key) return !1;
      if (this.options.requestCert !== A.options.requestCert) return !1;
      return !0;
    }
  }
  class LC6 extends TjA {
    constructor(A, K, q) {
      super({
        requestCert: K !== null,
        rejectUnauthorized: q,
        ciphers: EC6.CIPHER_SUITES
      });
      this.identityCertificateProvider = A, this.caCertificateProvider = K, this.requireClientCertificate = q, this.latestCaUpdate = null, this.latestIdentityUpdate = null, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
    }
    _addWatcher(A) {
      var K;
      if (this.getWatcherCount() === 0) (K = this.caCertificateProvider) === null || K === void 0 || K.addCaCertificateListener(this.caCertificateUpdateListener), this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      super._addWatcher(A);
    }
    _removeWatcher(A) {
      var K;
      if (super._removeWatcher(A), this.getWatcherCount() === 0) (K = this.caCertificateProvider) === null || K === void 0 || K.removeCaCertificateListener(this.caCertificateUpdateListener), this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    _equals(A) {
      if (this === A) return !0;
      if (!(A instanceof LC6)) return !1;
      return this.caCertificateProvider === A.caCertificateProvider && this.identityCertificateProvider === A.identityCertificateProvider && this.requireClientCertificate === A.requireClientCertificate;
    }
    calculateSecureContextOptions() {
      var A;
      if (this.latestIdentityUpdate === null) return null;
      if (this.caCertificateProvider !== null && this.latestCaUpdate === null) return null;
      return {
        ca: (A = this.latestCaUpdate) === null || A === void 0 ? void 0 : A.caCertificate,
        cert: [this.latestIdentityUpdate.certificate],
        key: [this.latestIdentityUpdate.privateKey]
      };
    }
    finalizeUpdate() {
      let A = this.calculateSecureContextOptions();
      this.updateSecureContextOptions(A);
    }
    handleCaCertificateUpdate(A) {
      this.latestCaUpdate = A, this.finalizeUpdate();
    }
    handleIdentityCertitificateUpdate(A) {
      this.latestIdentityUpdate = A, this.finalizeUpdate();
    }
  }
  function yw2(A, K, q) {
    return new LC6(A, K, q);
  }
  class RC6 extends TjA {
    constructor(A, K) {
      super({});
      this.childCredentials = A, this.interceptors = K;
    }
    _isSecure() {
      return this.childCredentials._isSecure();
    }
    _equals(A) {
      if (!(A instanceof RC6)) return !1;
      if (!this.childCredentials._equals(A.childCredentials)) return !1;
      if (this.interceptors.length !== A.interceptors.length) return !1;
      for (let K = 0; K < this.interceptors.length; K++) if (this.interceptors[K] !== A.interceptors[K]) return !1;
      return !0;
    }
    _getInterceptors() {
      return this.interceptors;
    }
    _addWatcher(A) {
      this.childCredentials._addWatcher(A);
    }
    _removeWatcher(A) {
      this.childCredentials._removeWatcher(A);
    }
    _getConstructorOptions() {
      return this.childCredentials._getConstructorOptions();
    }
    _getSecureContextOptions() {
      return this.childCredentials._getSecureContextOptions();
    }
  }
  function Iw2(A, K) {
    return new RC6(A, K);
  }
});

// Register to shared state
__$.Lj1 = Lj1;
