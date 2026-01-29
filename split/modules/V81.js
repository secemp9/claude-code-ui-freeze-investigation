// Module: V81
// Dependencies: fV, jc8, dX, pb, Ja1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V81 = v(Lg5 => {
  var jg5 = __$.fV(),
    Mg5 = __$.jc8(),
    JT = __$.dX(),
    wLA = __$.pb(),
    Pg5 = CA("fs"),
    Vg5 = ({
      logger: A,
      signingName: K
    } = {}) => async () => {
      if (A?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !K) throw new JT.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
        logger: A
      });
      let q = Mg5.getBearerTokenEnvKey(K);
      if (!(q in process.env)) throw new JT.TokenProviderError(`Token not present in '${q}' environment variable`, {
        logger: A
      });
      let Y = {
        token: process.env[q]
      };
      return jg5.setTokenFeature(Y, "BEARER_SERVICE_ENV_VARS", "3"), Y;
    },
    fg5 = 300000,
    Oa1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
    Ng5 = async (A, K = {}) => {
      let {
          SSOOIDCClient: q
        } = await Promise.resolve().then(() => o(__$.Ja1())),
        Y = w => K.clientConfig?.[w] ?? K.parentClientConfig?.[w];
      return new q(Object.assign({}, K.clientConfig ?? {}, {
        region: A ?? K.clientConfig?.region,
        logger: Y("logger"),
        userAgentAppId: Y("userAgentAppId")
      }));
    },
    Tg5 = async (A, K, q = {}) => {
      let {
        CreateTokenCommand: Y
      } = await Promise.resolve().then(() => o(__$.Ja1()));
      return (await Ng5(K, q)).send(new Y({
        clientId: A.clientId,
        clientSecret: A.clientSecret,
        refreshToken: A.refreshToken,
        grantType: "refresh_token"
      }));
    },
    fi8 = A => {
      if (A.expiration && A.expiration.getTime() < Date.now()) throw new JT.TokenProviderError(`Token is expired. ${Oa1}`, !1);
    },
    Y8A = (A, K, q = !1) => {
      if (typeof K > "u") throw new JT.TokenProviderError(`Value not present for '${A}' in SSO Token${q ? ". Cannot refresh" : ""}. ${Oa1}`, !1);
    },
    {
      writeFile: vg5
    } = Pg5.promises,
    Eg5 = (A, K) => {
      let q = wLA.getSSOTokenFilepath(A),
        Y = JSON.stringify(K, null, 2);
      return vg5(q, Y);
    },
    Ni8 = new Date(0),
    Ti8 = (A = {}) => async ({
      callerClientConfig: K
    } = {}) => {
      let q = {
        ...A,
        parentClientConfig: {
          ...K,
          ...A.parentClientConfig
        }
      };
      q.logger?.debug("@aws-sdk/token-providers - fromSso");
      let Y = await wLA.parseKnownFiles(q),
        z = wLA.getProfileName({
          profile: q.profile ?? K?.profile
        }),
        w = Y[z];
      if (!w) throw new JT.TokenProviderError(`Profile '${z}' could not be found in shared credentials file.`, !1);else if (!w.sso_session) throw new JT.TokenProviderError(`Profile '${z}' is missing required property 'sso_session'.`);
      let H = w.sso_session,
        O = (await wLA.loadSsoSessionData(q))[H];
      if (!O) throw new JT.TokenProviderError(`Sso session '${H}' could not be found in shared credentials file.`, !1);
      for (let W of ["sso_start_url", "sso_region"]) if (!O[W]) throw new JT.TokenProviderError(`Sso session '${H}' is missing required property '${W}'.`, !1);
      O.sso_start_url;
      let X = O.sso_region,
        $;
      try {
        $ = await wLA.getSSOTokenFromFile(H);
      } catch (W) {
        throw new JT.TokenProviderError(`The SSO session token associated with profile=${z} was not found or is invalid. ${Oa1}`, !1);
      }
      Y8A("accessToken", $.accessToken), Y8A("expiresAt", $.expiresAt);
      let {
          accessToken: _,
          expiresAt: G
        } = $,
        Z = {
          token: _,
          expiration: new Date(G)
        };
      if (Z.expiration.getTime() - Date.now() > fg5) return Z;
      if (Date.now() - Ni8.getTime() < 30000) return fi8(Z), Z;
      Y8A("clientId", $.clientId, !0), Y8A("clientSecret", $.clientSecret, !0), Y8A("refreshToken", $.refreshToken, !0);
      try {
        Ni8.setTime(Date.now());
        let W = await Tg5($, X, q);
        Y8A("accessToken", W.accessToken), Y8A("expiresIn", W.expiresIn);
        let D = new Date(Date.now() + W.expiresIn * 1000);
        try {
          await Eg5(H, {
            ...$,
            accessToken: W.accessToken,
            expiresAt: D.toISOString(),
            refreshToken: W.refreshToken
          });
        } catch (j) {}
        return {
          token: W.accessToken,
          expiration: D
        };
      } catch (W) {
        return fi8(Z), Z;
      }
    },
    kg5 = ({
      token: A,
      logger: K
    }) => async () => {
      if (K?.debug("@aws-sdk/token-providers - fromStatic"), !A || !A.token) throw new JT.TokenProviderError("Please pass a valid token to fromStatic", !1);
      return A;
    },
    Cg5 = (A = {}) => JT.memoize(JT.chain(Ti8(A), async () => {
      throw new JT.TokenProviderError("Could not load token from any providers", !1);
    }), K => K.expiration !== void 0 && K.expiration.getTime() - Date.now() < 300000, K => K.expiration !== void 0);
  Lg5.fromEnvSigningName = Vg5;
  Lg5.fromSso = Ti8;
  Lg5.fromStatic = kg5;
  Lg5.nodeProvider = Cg5;
});

// Register to shared state
__$.V81 = V81;
