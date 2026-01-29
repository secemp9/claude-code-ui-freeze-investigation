// Module: g81
// Dependencies: dX, pb, fV, V81, rn8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var g81 = v(Zp5 => {
  var Jy = __$.dX(),
    m81 = __$.pb(),
    on8 = __$.fV(),
    _p5 = __$.V81(),
    sn8 = A => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"),
    ZLA = !1,
    an8 = async ({
      ssoStartUrl: A,
      ssoSession: K,
      ssoAccountId: q,
      ssoRegion: Y,
      ssoRoleName: z,
      ssoClient: w,
      clientConfig: H,
      parentClientConfig: J,
      profile: O,
      filepath: X,
      configFilepath: $,
      ignoreCache: _,
      logger: G
    }) => {
      let Z,
        W = "To refresh this SSO session run aws sso login with the corresponding profile.";
      if (K) try {
        let b = await _p5.fromSso({
          profile: O,
          filepath: X,
          configFilepath: $,
          ignoreCache: _
        })();
        Z = {
          accessToken: b.token,
          expiresAt: new Date(b.expiration).toISOString()
        };
      } catch (b) {
        throw new Jy.CredentialsProviderError(b.message, {
          tryNextLink: ZLA,
          logger: G
        });
      } else try {
        Z = await m81.getSSOTokenFromFile(A);
      } catch (b) {
        throw new Jy.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
          tryNextLink: ZLA,
          logger: G
        });
      }
      if (new Date(Z.expiresAt).getTime() - Date.now() <= 0) throw new Jy.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
        tryNextLink: ZLA,
        logger: G
      });
      let {
          accessToken: D
        } = Z,
        {
          SSOClient: j,
          GetRoleCredentialsCommand: M
        } = await Promise.resolve().then(function () {
          return __$.rn8();
        }),
        P = w || new j(Object.assign({}, H ?? {}, {
          logger: H?.logger ?? J?.logger,
          region: H?.region ?? Y,
          userAgentAppId: H?.userAgentAppId ?? J?.userAgentAppId
        })),
        f;
      try {
        f = await P.send(new M({
          accountId: q,
          roleName: z,
          accessToken: D
        }));
      } catch (b) {
        throw new Jy.CredentialsProviderError(b, {
          tryNextLink: ZLA,
          logger: G
        });
      }
      let {
        roleCredentials: {
          accessKeyId: N,
          secretAccessKey: T,
          sessionToken: C,
          expiration: R,
          credentialScope: x,
          accountId: y
        } = {}
      } = f;
      if (!N || !T || !C || !R) throw new Jy.CredentialsProviderError("SSO returns an invalid temporary credential.", {
        tryNextLink: ZLA,
        logger: G
      });
      let B = {
        accessKeyId: N,
        secretAccessKey: T,
        sessionToken: C,
        expiration: new Date(R),
        ...(x && {
          credentialScope: x
        }),
        ...(y && {
          accountId: y
        })
      };
      if (K) on8.setCredentialFeature(B, "CREDENTIALS_SSO", "s");else on8.setCredentialFeature(B, "CREDENTIALS_SSO_LEGACY", "u");
      return B;
    },
    tn8 = (A, K) => {
      let {
        sso_start_url: q,
        sso_account_id: Y,
        sso_region: z,
        sso_role_name: w
      } = A;
      if (!q || !Y || !z || !w) throw new Jy.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(A).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
        tryNextLink: !1,
        logger: K
      });
      return A;
    },
    Gp5 = (A = {}) => async ({
      callerClientConfig: K
    } = {}) => {
      A.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      let {
          ssoStartUrl: q,
          ssoAccountId: Y,
          ssoRegion: z,
          ssoRoleName: w,
          ssoSession: H
        } = A,
        {
          ssoClient: J
        } = A,
        O = m81.getProfileName({
          profile: A.profile ?? K?.profile
        });
      if (!q && !Y && !z && !w && !H) {
        let $ = (await m81.parseKnownFiles(A))[O];
        if (!$) throw new Jy.CredentialsProviderError(`Profile ${O} was not found.`, {
          logger: A.logger
        });
        if (!sn8($)) throw new Jy.CredentialsProviderError(`Profile ${O} is not configured with SSO credentials.`, {
          logger: A.logger
        });
        if ($?.sso_session) {
          let M = (await m81.loadSsoSessionData(A))[$.sso_session],
            P = ` configurations in profile ${O} and sso-session ${$.sso_session}`;
          if (z && z !== M.sso_region) throw new Jy.CredentialsProviderError("Conflicting SSO region" + P, {
            tryNextLink: !1,
            logger: A.logger
          });
          if (q && q !== M.sso_start_url) throw new Jy.CredentialsProviderError("Conflicting SSO start_url" + P, {
            tryNextLink: !1,
            logger: A.logger
          });
          $.sso_region = M.sso_region, $.sso_start_url = M.sso_start_url;
        }
        let {
          sso_start_url: _,
          sso_account_id: G,
          sso_region: Z,
          sso_role_name: W,
          sso_session: D
        } = tn8($, A.logger);
        return an8({
          ssoStartUrl: _,
          ssoSession: D,
          ssoAccountId: G,
          ssoRegion: Z,
          ssoRoleName: W,
          ssoClient: J,
          clientConfig: A.clientConfig,
          parentClientConfig: A.parentClientConfig,
          profile: O,
          filepath: A.filepath,
          configFilepath: A.configFilepath,
          ignoreCache: A.ignoreCache,
          logger: A.logger
        });
      } else if (!q || !Y || !z || !w) throw new Jy.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
        tryNextLink: !1,
        logger: A.logger
      });else return an8({
        ssoStartUrl: q,
        ssoSession: H,
        ssoAccountId: Y,
        ssoRegion: z,
        ssoRoleName: w,
        ssoClient: J,
        clientConfig: A.clientConfig,
        parentClientConfig: A.parentClientConfig,
        profile: O,
        filepath: A.filepath,
        configFilepath: A.configFilepath,
        ignoreCache: A.ignoreCache,
        logger: A.logger
      });
    };
  Zp5.fromSSO = Gp5;
  Zp5.isSsoProfile = sn8;
  Zp5.validateSsoProfile = tn8;
});

// Register to shared state
__$.g81 = g81;
