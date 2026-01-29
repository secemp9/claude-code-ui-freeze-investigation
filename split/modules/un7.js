// Module: un7
// Dependencies: Lw, K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var un7 = v(bn7 => {
  Object.defineProperty(bn7, "__esModule", {
    value: !0
  });
  bn7.FileWatcherCertificateProvider = void 0;
  var cH2 = CA("fs"),
    lH2 = __$.Lw(),
    iH2 = __$.K9(),
    nH2 = CA("util"),
    rH2 = "certificate_provider";
  function xj1(A) {
    lH2.trace(iH2.LogVerbosity.DEBUG, rH2, A);
  }
  var gC6 = (0, nH2.promisify)(cH2.readFile);
  class hn7 {
    constructor(A) {
      if (this.config = A, this.refreshTimer = null, this.fileResultPromise = null, this.latestCaUpdate = void 0, this.caListeners = new Set(), this.latestIdentityUpdate = void 0, this.identityListeners = new Set(), this.lastUpdateTime = null, A.certificateFile === void 0 !== (A.privateKeyFile === void 0)) throw Error("certificateFile and privateKeyFile must be set or unset together");
      if (A.certificateFile === void 0 && A.caCertificateFile === void 0) throw Error("At least one of certificateFile and caCertificateFile must be set");
      xj1("File watcher constructed with config " + JSON.stringify(A));
    }
    updateCertificates() {
      if (this.fileResultPromise) return;
      this.fileResultPromise = Promise.allSettled([this.config.certificateFile ? gC6(this.config.certificateFile) : Promise.reject(), this.config.privateKeyFile ? gC6(this.config.privateKeyFile) : Promise.reject(), this.config.caCertificateFile ? gC6(this.config.caCertificateFile) : Promise.reject()]), this.fileResultPromise.then(([A, K, q]) => {
        if (!this.refreshTimer) return;
        if (xj1("File watcher read certificates certificate " + A.status + ", privateKey " + K.status + ", CA certificate " + q.status), this.lastUpdateTime = new Date(), this.fileResultPromise = null, A.status === "fulfilled" && K.status === "fulfilled") this.latestIdentityUpdate = {
          certificate: A.value,
          privateKey: K.value
        };else this.latestIdentityUpdate = null;
        if (q.status === "fulfilled") this.latestCaUpdate = {
          caCertificate: q.value
        };else this.latestCaUpdate = null;
        for (let Y of this.identityListeners) Y(this.latestIdentityUpdate);
        for (let Y of this.caListeners) Y(this.latestCaUpdate);
      }), xj1("File watcher initiated certificate update");
    }
    maybeStartWatchingFiles() {
      if (!this.refreshTimer) {
        let A = this.lastUpdateTime ? new Date().getTime() - this.lastUpdateTime.getTime() : 1 / 0;
        if (A > this.config.refreshIntervalMs) this.updateCertificates();
        if (A > this.config.refreshIntervalMs * 2) this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0;
        this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs), xj1("File watcher started watching");
      }
    }
    maybeStopWatchingFiles() {
      if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
        if (this.fileResultPromise = null, this.refreshTimer) clearInterval(this.refreshTimer), this.refreshTimer = null;
      }
    }
    addCaCertificateListener(A) {
      if (this.caListeners.add(A), this.maybeStartWatchingFiles(), this.latestCaUpdate !== void 0) process.nextTick(A, this.latestCaUpdate);
    }
    removeCaCertificateListener(A) {
      this.caListeners.delete(A), this.maybeStopWatchingFiles();
    }
    addIdentityCertificateListener(A) {
      if (this.identityListeners.add(A), this.maybeStartWatchingFiles(), this.latestIdentityUpdate !== void 0) process.nextTick(A, this.latestIdentityUpdate);
    }
    removeIdentityCertificateListener(A) {
      this.identityListeners.delete(A), this.maybeStopWatchingFiles();
    }
  }
  bn7.FileWatcherCertificateProvider = hn7;
});

// Register to shared state
__$.un7 = un7;
