// Module: mK7
// Dependencies: LJ1, kJ1, UH, p2, RJ1, b$6, NxA, xKA, t6, oz
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mK7 = k(() => {
  __$.LJ1();
  __$.kJ1();
  __$.UH();
  __$.p2();
  __$.RJ1();
  __$.b$6(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.NxA = class NxA extends __$.xKA {
    constructor(A) {
      super(A);
      let K = !!this.config.auth.clientSecret,
        q = !!this.config.auth.clientAssertion,
        Y = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
      if (this.appTokenProvider) return;
      if (K && q || q && Y || K && Y) throw __$.t6(__$.oz.invalidClientCredential);
      if (this.config.auth.clientSecret) {
        this.clientSecret = this.config.auth.clientSecret;
        return;
      }
      if (this.config.auth.clientAssertion) {
        this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
        return;
      }
      if (!Y) throw __$.t6(__$.oz.invalidClientCredential);else this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? __$._I.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : __$._I.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
      this.appTokenProvider = void 0;
    }
    SetAppTokenProvider(A) {
      this.appTokenProvider = A;
    }
    async acquireTokenByClientCredential(A) {
      this.logger.info("acquireTokenByClientCredential called", A.correlationId);
      let K;
      if (A.clientAssertion) K = {
        assertion: await __$.yM(A.clientAssertion, this.config.auth.clientId),
        assertionType: __$.IM.JWT_BEARER_ASSERTION_TYPE
      };
      let q = await this.initializeBaseRequest(A),
        Y = {
          ...q,
          scopes: q.scopes.filter(_ => !__$.mD.includes(_))
        },
        z = {
          ...A,
          ...Y,
          clientAssertion: K
        },
        H = new __$.p5(z.authority).getUrlComponents().PathSegments[0];
      if (Object.values(__$.oV).includes(H)) throw __$.t6(__$.oz.missingTenantIdError);
      let J = process.env[__$.K67],
        O;
      if (z.azureRegion !== "DisableMsalForceRegion") if (!z.azureRegion && J) O = J;else O = z.azureRegion;
      let X = {
          azureRegion: O,
          environmentRegion: process.env[__$.A67]
        },
        $ = this.initializeServerTelemetryManager(__$.mU.acquireTokenByClientCredential, z.correlationId, z.skipCache);
      try {
        let _ = await this.createAuthority(z.authority, z.correlationId, X, A.azureCloudOptions),
          G = await this.buildOauthClientConfiguration(_, z.correlationId, "", $),
          Z = new __$.uKA(G, this.appTokenProvider);
        return this.logger.verbose("Client credential client created", z.correlationId), await Z.acquireToken(z);
      } catch (_) {
        if (_ instanceof __$.V5) _.setCorrelationId(z.correlationId);
        throw $.cacheFailedRequest(_), _;
      }
    }
    async acquireTokenOnBehalfOf(A) {
      this.logger.info("acquireTokenOnBehalfOf called", A.correlationId);
      let K = {
        ...A,
        ...(await this.initializeBaseRequest(A))
      };
      try {
        let q = await this.createAuthority(K.authority, K.correlationId, void 0, A.azureCloudOptions),
          Y = await this.buildOauthClientConfiguration(q, K.correlationId, "", void 0),
          z = new __$.fxA(Y);
        return this.logger.verbose("On behalf of client created", K.correlationId), await z.acquireToken(K);
      } catch (q) {
        if (q instanceof __$.V5) q.setCorrelationId(K.correlationId);
        throw q;
      }
    }
  };
});

// Register to shared state
__$.mK7 = mK7;
