// Module: zs1
// Dependencies: fV, dX, pb, Yr8, Yo8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zs1 = v(Wc5 => {
  var $c5 = __$.fV(),
    Xn = __$.dX(),
    qs1 = __$.pb(),
    _c5 = __$.Yr8(),
    i81 = CA("node:crypto"),
    As1 = CA("node:fs"),
    Gc5 = CA("node:os"),
    Ks1 = CA("node:path");
  class Ys1 {
    profileData;
    init;
    callerClientConfig;
    static REFRESH_THRESHOLD = 300000;
    constructor(A, K, q) {
      this.profileData = A, this.init = K, this.callerClientConfig = q;
    }
    async loadCredentials() {
      let A = await this.loadToken();
      if (!A) throw new Xn.CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, {
        tryNextLink: !1,
        logger: this.logger
      });
      let K = A.accessToken,
        q = Date.now();
      if (new Date(K.expiresAt).getTime() - q <= Ys1.REFRESH_THRESHOLD) return this.refresh(A);
      return {
        accessKeyId: K.accessKeyId,
        secretAccessKey: K.secretAccessKey,
        sessionToken: K.sessionToken,
        accountId: K.accountId,
        expiration: new Date(K.expiresAt)
      };
    }
    get logger() {
      return this.init?.logger;
    }
    get loginSession() {
      return this.profileData.login_session;
    }
    async refresh(A) {
      let {
          SigninClient: K,
          CreateOAuth2TokenCommand: q
        } = await Promise.resolve().then(() => o(__$.Yo8())),
        {
          logger: Y,
          userAgentAppId: z
        } = this.callerClientConfig ?? {},
        H = ($ => {
          return $?.metadata?.handlerProtocol === "h2";
        })(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler,
        J = this.profileData.region ?? (await this.callerClientConfig?.region?.()) ?? process.env.AWS_REGION,
        O = new K({
          credentials: {
            accessKeyId: "",
            secretAccessKey: ""
          },
          region: J,
          requestHandler: H,
          logger: Y,
          userAgentAppId: z,
          ...this.init?.clientConfig
        });
      this.createDPoPInterceptor(O.middlewareStack);
      let X = {
        tokenInput: {
          clientId: A.clientId,
          refreshToken: A.refreshToken,
          grantType: "refresh_token"
        }
      };
      try {
        let $ = await O.send(new q(X)),
          {
            accessKeyId: _,
            secretAccessKey: G,
            sessionToken: Z
          } = $.tokenOutput?.accessToken ?? {},
          {
            refreshToken: W,
            expiresIn: D
          } = $.tokenOutput ?? {};
        if (!_ || !G || !Z || !W) throw new Xn.CredentialsProviderError("Token refresh response missing required fields", {
          logger: this.logger,
          tryNextLink: !1
        });
        let j = (D ?? 900) * 1000,
          M = new Date(Date.now() + j),
          P = {
            ...A,
            accessToken: {
              ...A.accessToken,
              accessKeyId: _,
              secretAccessKey: G,
              sessionToken: Z,
              expiresAt: M.toISOString()
            },
            refreshToken: W
          };
        await this.saveToken(P);
        let f = P.accessToken;
        return {
          accessKeyId: f.accessKeyId,
          secretAccessKey: f.secretAccessKey,
          sessionToken: f.sessionToken,
          accountId: f.accountId,
          expiration: M
        };
      } catch ($) {
        if ($.name === "AccessDeniedException") {
          let _ = $.error,
            G;
          switch (_) {
            case "TOKEN_EXPIRED":
              G = "Your session has expired. Please reauthenticate.";
              break;
            case "USER_CREDENTIALS_CHANGED":
              G = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
              break;
            case "INSUFFICIENT_PERMISSIONS":
              G = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
              break;
            default:
              G = `Failed to refresh token: ${String($)}. Please re-authenticate using \`aws login\``;
          }
          throw new Xn.CredentialsProviderError(G, {
            logger: this.logger,
            tryNextLink: !1
          });
        }
        throw new Xn.CredentialsProviderError(`Failed to refresh token: ${String($)}. Please re-authenticate using aws login`, {
          logger: this.logger
        });
      }
    }
    async loadToken() {
      let A = this.getTokenFilePath();
      try {
        let K;
        try {
          K = await qs1.readFile(A, {
            ignoreCache: this.init?.ignoreCache
          });
        } catch {
          K = await As1.promises.readFile(A, "utf8");
        }
        let q = JSON.parse(K),
          Y = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter(z => !q[z]);
        if (!q.accessToken?.accountId) Y.push("accountId");
        if (Y.length > 0) throw new Xn.CredentialsProviderError(`Token validation failed, missing fields: ${Y.join(", ")}`, {
          logger: this.logger,
          tryNextLink: !1
        });
        return q;
      } catch (K) {
        throw new Xn.CredentialsProviderError(`Failed to load token from ${A}: ${String(K)}`, {
          logger: this.logger,
          tryNextLink: !1
        });
      }
    }
    async saveToken(A) {
      let K = this.getTokenFilePath(),
        q = Ks1.dirname(K);
      try {
        await As1.promises.mkdir(q, {
          recursive: !0
        });
      } catch (Y) {}
      await As1.promises.writeFile(K, JSON.stringify(A, null, 2), "utf8");
    }
    getTokenFilePath() {
      let A = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? Ks1.join(Gc5.homedir(), ".aws", "login", "cache"),
        K = Buffer.from(this.loginSession, "utf8"),
        q = i81.createHash("sha256").update(K).digest("hex");
      return Ks1.join(A, `${q}.json`);
    }
    derToRawSignature(A) {
      let K = 2;
      if (A[K] !== 2) throw Error("Invalid DER signature");
      K++;
      let q = A[K++],
        Y = A.subarray(K, K + q);
      if (K += q, A[K] !== 2) throw Error("Invalid DER signature");
      K++;
      let z = A[K++],
        w = A.subarray(K, K + z);
      Y = Y[0] === 0 ? Y.subarray(1) : Y, w = w[0] === 0 ? w.subarray(1) : w;
      let H = Buffer.concat([Buffer.alloc(32 - Y.length), Y]),
        J = Buffer.concat([Buffer.alloc(32 - w.length), w]);
      return Buffer.concat([H, J]);
    }
    createDPoPInterceptor(A) {
      A.add(K => async q => {
        if (_c5.HttpRequest.isInstance(q.request)) {
          let Y = q.request,
            z = `${Y.protocol}//${Y.hostname}${Y.port ? `:${Y.port}` : ""}${Y.path}`,
            w = await this.generateDpop(Y.method, z);
          Y.headers = {
            ...Y.headers,
            DPoP: w
          };
        }
        return K(q);
      }, {
        step: "finalizeRequest",
        name: "dpopInterceptor",
        override: !0
      });
    }
    async generateDpop(A = "POST", K) {
      let q = await this.loadToken();
      try {
        let Y = i81.createPrivateKey({
            key: q.dpopKey,
            format: "pem",
            type: "sec1"
          }),
          w = i81.createPublicKey(Y).export({
            format: "der",
            type: "spki"
          }),
          H = -1;
        for (let M = 0; M < w.length; M++) if (w[M] === 4) {
          H = M;
          break;
        }
        let J = w.slice(H + 1, H + 33),
          O = w.slice(H + 33, H + 65),
          X = {
            alg: "ES256",
            typ: "dpop+jwt",
            jwk: {
              kty: "EC",
              crv: "P-256",
              x: J.toString("base64url"),
              y: O.toString("base64url")
            }
          },
          $ = {
            jti: crypto.randomUUID(),
            htm: A,
            htu: K,
            iat: Math.floor(Date.now() / 1000)
          },
          _ = Buffer.from(JSON.stringify(X)).toString("base64url"),
          G = Buffer.from(JSON.stringify($)).toString("base64url"),
          Z = `${_}.${G}`,
          W = i81.sign("sha256", Buffer.from(Z), Y),
          j = this.derToRawSignature(W).toString("base64url");
        return `${Z}.${j}`;
      } catch (Y) {
        throw new Xn.CredentialsProviderError(`Failed to generate Dpop proof: ${Y instanceof Error ? Y.message : String(Y)}`, {
          logger: this.logger,
          tryNextLink: !1
        });
      }
    }
  }
  var Zc5 = A => async ({
    callerClientConfig: K
  } = {}) => {
    A?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
    let q = await qs1.parseKnownFiles(A || {}),
      Y = qs1.getProfileName({
        profile: A?.profile ?? K?.profile
      }),
      z = q[Y];
    if (!z?.login_session) throw new Xn.CredentialsProviderError(`Profile ${Y} does not contain login_session.`, {
      tryNextLink: !0,
      logger: A?.logger
    });
    let H = await new Ys1(z, A, K).loadCredentials();
    return $c5.setCredentialFeature(H, "CREDENTIALS_LOGIN", "AD");
  };
  Wc5.fromLoginCredentials = Zc5;
});

// Register to shared state
__$.zs1 = zs1;
