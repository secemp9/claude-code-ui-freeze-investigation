// Module: qjA
// Dependencies: kD1, FE6, zP, jS, Lw, K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qjA = v(TU7 => {
  Object.defineProperty(TU7, "__esModule", {
    value: !0
  });
  TU7.ChannelCredentials = void 0;
  TU7.createCertificateProviderChannelCredentials = cK2;
  var cgA = CA("tls"),
    RD1 = __$.kD1(),
    dE6 = __$.FE6(),
    VU7 = __$.zP(),
    UK2 = __$.jS(),
    pK2 = __$.Lw(),
    dK2 = __$.K9();
  function pE6(A, K) {
    if (A && !(A instanceof Buffer)) throw TypeError(`${K}, if provided, must be a Buffer.`);
  }
  class KjA {
    compose(A) {
      return new LD1(this, A);
    }
    static createSsl(A, K, q, Y) {
      var z;
      if (pE6(A, "Root certificate"), pE6(K, "Private key"), pE6(q, "Certificate chain"), K && !q) throw Error("Private key must be given with accompanying certificate chain");
      if (!K && q) throw Error("Certificate chain must be given with accompanying private key");
      let w = (0, cgA.createSecureContext)({
        ca: (z = A !== null && A !== void 0 ? A : (0, dE6.getDefaultRootsData)()) !== null && z !== void 0 ? z : void 0,
        key: K !== null && K !== void 0 ? K : void 0,
        cert: q !== null && q !== void 0 ? q : void 0,
        ciphers: dE6.CIPHER_SUITES
      });
      return new CD1(w, Y !== null && Y !== void 0 ? Y : {});
    }
    static createFromSecureContext(A, K) {
      return new CD1(A, K !== null && K !== void 0 ? K : {});
    }
    static createInsecure() {
      return new cE6();
    }
  }
  TU7.ChannelCredentials = KjA;
  class cE6 extends KjA {
    constructor() {
      super();
    }
    compose(A) {
      throw Error("Cannot compose insecure credentials");
    }
    _isSecure() {
      return !1;
    }
    _equals(A) {
      return A instanceof cE6;
    }
    _createSecureConnector(A, K, q) {
      return {
        connect(Y) {
          return Promise.resolve({
            socket: Y,
            secure: !1
          });
        },
        waitForReady: () => {
          return Promise.resolve();
        },
        getCallCredentials: () => {
          return q !== null && q !== void 0 ? q : RD1.CallCredentials.createEmpty();
        },
        destroy() {}
      };
    }
  }
  function fU7(A, K, q, Y) {
    var z, w;
    let H = {
        secureContext: A
      },
      J = q;
    if ("grpc.http_connect_target" in Y) {
      let _ = (0, VU7.parseUri)(Y["grpc.http_connect_target"]);
      if (_) J = _;
    }
    let O = (0, UK2.getDefaultAuthority)(J),
      X = (0, VU7.splitHostPort)(O),
      $ = (z = X === null || X === void 0 ? void 0 : X.host) !== null && z !== void 0 ? z : O;
    if (H.host = $, K.checkServerIdentity) H.checkServerIdentity = K.checkServerIdentity;
    if (K.rejectUnauthorized !== void 0) H.rejectUnauthorized = K.rejectUnauthorized;
    if (H.ALPNProtocols = ["h2"], Y["grpc.ssl_target_name_override"]) {
      let _ = Y["grpc.ssl_target_name_override"],
        G = (w = H.checkServerIdentity) !== null && w !== void 0 ? w : cgA.checkServerIdentity;
      H.checkServerIdentity = (Z, W) => {
        return G(_, W);
      }, H.servername = _;
    } else H.servername = $;
    if (Y["grpc-node.tls_enable_trace"]) H.enableTrace = !0;
    return H;
  }
  class NU7 {
    constructor(A, K) {
      this.connectionOptions = A, this.callCredentials = K;
    }
    connect(A) {
      let K = Object.assign({
        socket: A
      }, this.connectionOptions);
      return new Promise((q, Y) => {
        let z = (0, cgA.connect)(K, () => {
          var w;
          if (((w = this.connectionOptions.rejectUnauthorized) !== null && w !== void 0 ? w : !0) && !z.authorized) {
            Y(z.authorizationError);
            return;
          }
          q({
            socket: z,
            secure: !0
          });
        });
        z.on("error", w => {
          Y(w);
        });
      });
    }
    waitForReady() {
      return Promise.resolve();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {}
  }
  class CD1 extends KjA {
    constructor(A, K) {
      super();
      this.secureContext = A, this.verifyOptions = K;
    }
    _isSecure() {
      return !0;
    }
    _equals(A) {
      if (this === A) return !0;
      if (A instanceof CD1) return this.secureContext === A.secureContext && this.verifyOptions.checkServerIdentity === A.verifyOptions.checkServerIdentity;else return !1;
    }
    _createSecureConnector(A, K, q) {
      let Y = fU7(this.secureContext, this.verifyOptions, A, K);
      return new NU7(Y, q !== null && q !== void 0 ? q : RD1.CallCredentials.createEmpty());
    }
  }
  class dgA extends KjA {
    constructor(A, K, q) {
      super();
      this.caCertificateProvider = A, this.identityCertificateProvider = K, this.verifyOptions = q, this.refcount = 0, this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this), this.secureContextWatchers = [];
    }
    _isSecure() {
      return !0;
    }
    _equals(A) {
      var K, q;
      if (this === A) return !0;
      if (A instanceof dgA) return this.caCertificateProvider === A.caCertificateProvider && this.identityCertificateProvider === A.identityCertificateProvider && ((K = this.verifyOptions) === null || K === void 0 ? void 0 : K.checkServerIdentity) === ((q = A.verifyOptions) === null || q === void 0 ? void 0 : q.checkServerIdentity);else return !1;
    }
    ref() {
      var A;
      if (this.refcount === 0) this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener), (A = this.identityCertificateProvider) === null || A === void 0 || A.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      this.refcount += 1;
    }
    unref() {
      var A;
      if (this.refcount -= 1, this.refcount === 0) this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener), (A = this.identityCertificateProvider) === null || A === void 0 || A.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    _createSecureConnector(A, K, q) {
      return this.ref(), new dgA.SecureConnectorImpl(this, A, K, q !== null && q !== void 0 ? q : RD1.CallCredentials.createEmpty());
    }
    maybeUpdateWatchers() {
      if (this.hasReceivedUpdates()) {
        for (let A of this.secureContextWatchers) A(this.getLatestSecureContext());
        this.secureContextWatchers = [];
      }
    }
    handleCaCertificateUpdate(A) {
      this.latestCaUpdate = A, this.maybeUpdateWatchers();
    }
    handleIdentityCertitificateUpdate(A) {
      this.latestIdentityUpdate = A, this.maybeUpdateWatchers();
    }
    hasReceivedUpdates() {
      if (this.latestCaUpdate === void 0) return !1;
      if (this.identityCertificateProvider && this.latestIdentityUpdate === void 0) return !1;
      return !0;
    }
    getSecureContext() {
      if (this.hasReceivedUpdates()) return Promise.resolve(this.getLatestSecureContext());else return new Promise(A => {
        this.secureContextWatchers.push(A);
      });
    }
    getLatestSecureContext() {
      var A, K;
      if (!this.latestCaUpdate) return null;
      if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) return null;
      try {
        return (0, cgA.createSecureContext)({
          ca: this.latestCaUpdate.caCertificate,
          key: (A = this.latestIdentityUpdate) === null || A === void 0 ? void 0 : A.privateKey,
          cert: (K = this.latestIdentityUpdate) === null || K === void 0 ? void 0 : K.certificate,
          ciphers: dE6.CIPHER_SUITES
        });
      } catch (q) {
        return (0, pK2.log)(dK2.LogVerbosity.ERROR, "Failed to createSecureContext with error " + q.message), null;
      }
    }
  }
  dgA.SecureConnectorImpl = class {
    constructor(A, K, q, Y) {
      this.parent = A, this.channelTarget = K, this.options = q, this.callCredentials = Y;
    }
    connect(A) {
      return new Promise((K, q) => {
        let Y = this.parent.getLatestSecureContext();
        if (!Y) {
          q(Error("Failed to load credentials"));
          return;
        }
        if (A.closed) q(Error("Socket closed while loading credentials"));
        let z = fU7(Y, this.parent.verifyOptions, this.channelTarget, this.options),
          w = Object.assign({
            socket: A
          }, z),
          H = () => {
            q(Error("Socket closed"));
          },
          J = X => {
            q(X);
          },
          O = (0, cgA.connect)(w, () => {
            var X;
            if (O.removeListener("close", H), O.removeListener("error", J), ((X = this.parent.verifyOptions.rejectUnauthorized) !== null && X !== void 0 ? X : !0) && !O.authorized) {
              q(O.authorizationError);
              return;
            }
            K({
              socket: O,
              secure: !0
            });
          });
        O.once("close", H), O.once("error", J);
      });
    }
    async waitForReady() {
      await this.parent.getSecureContext();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {
      this.parent.unref();
    }
  };
  function cK2(A, K, q) {
    return new dgA(A, K, q !== null && q !== void 0 ? q : {});
  }
  class LD1 extends KjA {
    constructor(A, K) {
      super();
      if (this.channelCredentials = A, this.callCredentials = K, !A._isSecure()) throw Error("Cannot compose insecure credentials");
    }
    compose(A) {
      let K = this.callCredentials.compose(A);
      return new LD1(this.channelCredentials, K);
    }
    _isSecure() {
      return !0;
    }
    _equals(A) {
      if (this === A) return !0;
      if (A instanceof LD1) return this.channelCredentials._equals(A.channelCredentials) && this.callCredentials._equals(A.callCredentials);else return !1;
    }
    _createSecureConnector(A, K, q) {
      let Y = this.callCredentials.compose(q !== null && q !== void 0 ? q : RD1.CallCredentials.createEmpty());
      return this.channelCredentials._createSecureConnector(A, K, Y);
    }
  }
});

// Register to shared state
__$.qjA = qjA;
