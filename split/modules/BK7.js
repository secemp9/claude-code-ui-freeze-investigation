// Module: BK7
// Dependencies: UH, p2, LJ1, tbA, uK7, h$6, DGA, VxA, xKA, mo
//   ... and 15 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BK7 = k(() => {
  __$.UH();
  __$.p2();
  __$.LJ1();
  __$.tbA();
  __$.uK7();
  __$.h$6();
  __$.DGA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  __$.VxA = class VxA extends __$.xKA {
    constructor(A) {
      super(A);
      if (this.config.broker.nativeBrokerPlugin) if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin, this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions);else this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.");
      this.skus = __$.mo.makeExtraSkuString({
        libraryName: __$.IM.MSAL_SKU,
        libraryVersion: __$.GI
      });
    }
    async acquireTokenByDeviceCode(A) {
      this.logger.info("acquireTokenByDeviceCode called", A.correlationId);
      let K = Object.assign(A, await this.initializeBaseRequest(A)),
        q = this.initializeServerTelemetryManager(__$.mU.acquireTokenByDeviceCode, K.correlationId);
      try {
        let Y = await this.createAuthority(K.authority, K.correlationId, void 0, A.azureCloudOptions),
          z = await this.buildOauthClientConfiguration(Y, K.correlationId, "", q),
          w = new __$.PxA(z);
        return this.logger.verbose("Device code client created", K.correlationId), await w.acquireToken(K);
      } catch (Y) {
        if (Y instanceof __$.V5) Y.setCorrelationId(K.correlationId);
        throw q.cacheFailedRequest(Y), Y;
      }
    }
    async acquireTokenInteractive(A) {
      let K = A.correlationId || this.cryptoProvider.createNewGuid();
      this.logger.trace("acquireTokenInteractive called", K);
      let {
        openBrowser: q,
        successTemplate: Y,
        errorTemplate: z,
        windowHandle: w,
        loopbackClient: H,
        ...J
      } = A;
      if (this.nativeBrokerPlugin) {
        let Z = {
          ...J,
          clientId: this.config.auth.clientId,
          scopes: A.scopes || __$.mD,
          redirectUri: A.redirectUri || "",
          authority: A.authority || this.config.auth.authority,
          correlationId: K,
          extraParameters: {
            ...J.extraQueryParameters,
            ...J.tokenQueryParameters,
            [__$.fKA.X_CLIENT_EXTRA_SKU]: this.skus
          },
          accountId: J.account?.nativeAccountId
        };
        return this.nativeBrokerPlugin.acquireTokenInteractive(Z, w);
      }
      if (A.redirectUri) {
        if (!this.config.broker.nativeBrokerPlugin) throw __$.CJ.createRedirectUriNotSupportedError();
        A.redirectUri = "";
      }
      let {
          verifier: O,
          challenge: X
        } = await this.cryptoProvider.generatePkceCodes(),
        $ = H || new __$.S$6(),
        _ = {},
        G = null;
      try {
        let Z = $.listenForAuthCode(Y, z).then(f => {
            _ = f;
          }).catch(f => {
            G = f;
          }),
          W = await this.waitForRedirectUri($),
          D = {
            ...J,
            correlationId: K,
            scopes: A.scopes || __$.mD,
            redirectUri: W,
            responseMode: __$.fu.QUERY,
            codeChallenge: X,
            codeChallengeMethod: __$.ow1.S256
          },
          j = await this.getAuthCodeUrl(D);
        if (await q(j), await Z, G) throw G;
        if (_.error) throw new __$.RM(_.error, _.error_description, _.suberror);else if (!_.code) throw __$.CJ.createNoAuthCodeInResponseError();
        let M = _.client_info,
          P = {
            code: _.code,
            codeVerifier: O,
            clientInfo: M || __$.u6.EMPTY_STRING,
            ...D
          };
        return await this.acquireTokenByCode(P);
      } finally {
        $.closeServer();
      }
    }
    async acquireTokenSilent(A) {
      let K = A.correlationId || this.cryptoProvider.createNewGuid();
      if (this.logger.trace("acquireTokenSilent called", K), this.nativeBrokerPlugin) {
        let q = {
          ...A,
          clientId: this.config.auth.clientId,
          scopes: A.scopes || __$.mD,
          redirectUri: A.redirectUri || "",
          authority: A.authority || this.config.auth.authority,
          correlationId: K,
          extraParameters: {
            ...A.tokenQueryParameters,
            [__$.fKA.X_CLIENT_EXTRA_SKU]: this.skus
          },
          accountId: A.account.nativeAccountId,
          forceRefresh: A.forceRefresh || !1
        };
        return this.nativeBrokerPlugin.acquireTokenSilent(q);
      }
      if (A.redirectUri) {
        if (!this.config.broker.nativeBrokerPlugin) throw __$.CJ.createRedirectUriNotSupportedError();
        A.redirectUri = "";
      }
      return super.acquireTokenSilent(A);
    }
    async signOut(A) {
      if (this.nativeBrokerPlugin && A.account.nativeAccountId) {
        let K = {
          clientId: this.config.auth.clientId,
          accountId: A.account.nativeAccountId,
          correlationId: A.correlationId || this.cryptoProvider.createNewGuid()
        };
        await this.nativeBrokerPlugin.signOut(K);
      }
      await this.getTokenCache().removeAccount(A.account, A.correlationId);
    }
    async getAllAccounts() {
      if (this.nativeBrokerPlugin) {
        let A = this.cryptoProvider.createNewGuid();
        return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, A);
      }
      return this.getTokenCache().getAllAccounts();
    }
    async waitForRedirectUri(A) {
      return new Promise((K, q) => {
        let Y = 0,
          z = setInterval(() => {
            if (__$.QH1.TIMEOUT_MS / __$.QH1.INTERVAL_MS < Y) {
              clearInterval(z), q(__$.CJ.createLoopbackServerTimeoutError());
              return;
            }
            try {
              let w = A.getRedirectUri();
              clearInterval(z), K(w);
              return;
            } catch (w) {
              if (w instanceof __$.V5 && w.errorCode === __$.X$.noLoopbackServerExists.code) {
                Y++;
                return;
              }
              clearInterval(z), q(w);
              return;
            }
          }, __$.QH1.INTERVAL_MS);
      });
    }
  };
});

// Register to shared state
__$.BK7 = BK7;
