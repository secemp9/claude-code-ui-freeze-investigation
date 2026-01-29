// Module: XC6
// Dependencies: jS, lE6, K9, r5A, UG, Lw, zP, YjA, El7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XC6 = v(yl7 => {
  Object.defineProperty(yl7, "__esModule", {
    value: !0
  });
  yl7.DEFAULT_PORT = void 0;
  yl7.setup = s22;
  var kl7 = __$.jS(),
    JC6 = CA("dns"),
    c22 = __$.lE6(),
    OC6 = __$.K9(),
    PjA = __$.r5A(),
    l22 = __$.UG(),
    i22 = __$.Lw(),
    n22 = __$.K9(),
    Zt = __$.zP(),
    Cl7 = CA("net"),
    r22 = __$.YjA(),
    Ll7 = __$.El7(),
    o22 = "dns_resolver";
  function FB(A) {
    i22.trace(n22.LogVerbosity.DEBUG, o22, A);
  }
  yl7.DEFAULT_PORT = 443;
  var a22 = 30000;
  class Rl7 {
    constructor(A, K, q) {
      var Y, z, w;
      if (this.target = A, this.listener = K, this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, this.latestServiceConfigResult = null, this.continueResolving = !1, this.isNextResolutionTimerRunning = !1, this.isServiceConfigEnabled = !0, this.returnedIpResult = !1, this.alternativeResolver = new JC6.promises.Resolver(), FB("Resolver constructed for target " + (0, Zt.uriToString)(A)), A.authority) this.alternativeResolver.setServers([A.authority]);
      let H = (0, Zt.splitHostPort)(A.path);
      if (H === null) this.ipResult = null, this.dnsHostname = null, this.port = null;else if ((0, Cl7.isIPv4)(H.host) || (0, Cl7.isIPv6)(H.host)) this.ipResult = [{
        addresses: [{
          host: H.host,
          port: (Y = H.port) !== null && Y !== void 0 ? Y : yl7.DEFAULT_PORT
        }]
      }], this.dnsHostname = null, this.port = null;else this.ipResult = null, this.dnsHostname = H.host, this.port = (z = H.port) !== null && z !== void 0 ? z : yl7.DEFAULT_PORT;
      if (this.percentage = Math.random() * 100, q["grpc.service_config_disable_resolution"] === 1) this.isServiceConfigEnabled = !1;
      this.defaultResolutionError = {
        code: OC6.Status.UNAVAILABLE,
        details: `Name resolution failed for target ${(0, Zt.uriToString)(this.target)}`,
        metadata: new l22.Metadata()
      };
      let J = {
        initialDelay: q["grpc.initial_reconnect_backoff_ms"],
        maxDelay: q["grpc.max_reconnect_backoff_ms"]
      };
      this.backoff = new r22.BackoffTimeout(() => {
        if (this.continueResolving) this.startResolutionWithBackoff();
      }, J), this.backoff.unref(), this.minTimeBetweenResolutionsMs = (w = q["grpc.dns_min_time_between_resolutions_ms"]) !== null && w !== void 0 ? w : a22, this.nextResolutionTimer = setTimeout(() => {}, 0), clearTimeout(this.nextResolutionTimer);
    }
    startResolution() {
      if (this.ipResult !== null) {
        if (!this.returnedIpResult) FB("Returning IP address for target " + (0, Zt.uriToString)(this.target)), setImmediate(() => {
          this.listener((0, PjA.statusOrFromValue)(this.ipResult), {}, null, "");
        }), this.returnedIpResult = !0;
        this.backoff.stop(), this.backoff.reset(), this.stopNextResolutionTimer();
        return;
      }
      if (this.dnsHostname === null) FB("Failed to parse DNS address " + (0, Zt.uriToString)(this.target)), setImmediate(() => {
        this.listener((0, PjA.statusOrFromError)({
          code: OC6.Status.UNAVAILABLE,
          details: `Failed to parse DNS address ${(0, Zt.uriToString)(this.target)}`
        }), {}, null, "");
      }), this.stopNextResolutionTimer();else {
        if (this.pendingLookupPromise !== null) return;
        FB("Looking up DNS hostname " + this.dnsHostname), this.latestLookupResult = null;
        let A = this.dnsHostname;
        if (this.pendingLookupPromise = this.lookup(A), this.pendingLookupPromise.then(K => {
          if (this.pendingLookupPromise === null) return;
          this.pendingLookupPromise = null, this.latestLookupResult = (0, PjA.statusOrFromValue)(K.map(z => ({
            addresses: [z]
          })));
          let q = "[" + K.map(z => z.host + ":" + z.port).join(",") + "]";
          FB("Resolved addresses for target " + (0, Zt.uriToString)(this.target) + ": " + q);
          let Y = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
          this.handleHealthStatus(Y);
        }, K => {
          if (this.pendingLookupPromise === null) return;
          FB("Resolution error for target " + (0, Zt.uriToString)(this.target) + ": " + K.message), this.pendingLookupPromise = null, this.stopNextResolutionTimer(), this.listener((0, PjA.statusOrFromError)(this.defaultResolutionError), {}, this.latestServiceConfigResult, "");
        }), this.isServiceConfigEnabled && this.pendingTxtPromise === null) this.pendingTxtPromise = this.resolveTxt(A), this.pendingTxtPromise.then(K => {
          if (this.pendingTxtPromise === null) return;
          this.pendingTxtPromise = null;
          let q;
          try {
            if (q = (0, c22.extractAndSelectServiceConfig)(K, this.percentage), q) this.latestServiceConfigResult = (0, PjA.statusOrFromValue)(q);else this.latestServiceConfigResult = null;
          } catch (Y) {
            this.latestServiceConfigResult = (0, PjA.statusOrFromError)({
              code: OC6.Status.UNAVAILABLE,
              details: `Parsing service config failed with error ${Y.message}`
            });
          }
          if (this.latestLookupResult !== null) this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
        }, K => {});
      }
    }
    handleHealthStatus(A) {
      if (A) this.backoff.stop(), this.backoff.reset();else this.continueResolving = !0;
    }
    async lookup(A) {
      if (Ll7.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
        FB("Using alternative DNS resolver.");
        let q = await Promise.allSettled([this.alternativeResolver.resolve4(A), this.alternativeResolver.resolve6(A)]);
        if (q.every(Y => Y.status === "rejected")) throw Error(q[0].reason);
        return q.reduce((Y, z) => {
          return z.status === "fulfilled" ? [...Y, ...z.value] : Y;
        }, []).map(Y => ({
          host: Y,
          port: +this.port
        }));
      }
      return (await JC6.promises.lookup(A, {
        all: !0
      })).map(q => ({
        host: q.address,
        port: +this.port
      }));
    }
    async resolveTxt(A) {
      if (Ll7.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) return FB("Using alternative DNS resolver."), this.alternativeResolver.resolveTxt(A);
      return JC6.promises.resolveTxt(A);
    }
    startNextResolutionTimer() {
      var A, K;
      clearTimeout(this.nextResolutionTimer), this.nextResolutionTimer = setTimeout(() => {
        if (this.stopNextResolutionTimer(), this.continueResolving) this.startResolutionWithBackoff();
      }, this.minTimeBetweenResolutionsMs), (K = (A = this.nextResolutionTimer).unref) === null || K === void 0 || K.call(A), this.isNextResolutionTimerRunning = !0;
    }
    stopNextResolutionTimer() {
      clearTimeout(this.nextResolutionTimer), this.isNextResolutionTimerRunning = !1;
    }
    startResolutionWithBackoff() {
      if (this.pendingLookupPromise === null) this.continueResolving = !1, this.backoff.runOnce(), this.startNextResolutionTimer(), this.startResolution();
    }
    updateResolution() {
      if (this.pendingLookupPromise === null) if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
        if (this.isNextResolutionTimerRunning) FB('resolution update delayed by "min time between resolutions" rate limit');else FB("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
        this.continueResolving = !0;
      } else this.startResolutionWithBackoff();
    }
    destroy() {
      this.continueResolving = !1, this.backoff.reset(), this.backoff.stop(), this.stopNextResolutionTimer(), this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, this.latestServiceConfigResult = null, this.returnedIpResult = !1;
    }
    static getDefaultAuthority(A) {
      return A.path;
    }
  }
  function s22() {
    (0, kl7.registerResolver)("dns", Rl7), (0, kl7.registerDefaultScheme)("dns");
  }
});

// Register to shared state
__$.XC6 = XC6;
