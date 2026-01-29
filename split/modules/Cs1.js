// Module: Cs1
// Dependencies: pb, dX, fV, zs1, X81, K8A, w81, s81, t81, g81
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cs1 = v(Nn5 => {
  var ks1 = __$.pb(),
    VLA = __$.dX(),
    wQ = __$.fV(),
    Hn5 = __$.zs1(),
    Jn5 = (A, K, q) => {
      let Y = {
        EcsContainer: async z => {
          let {
              fromHttp: w
            } = await Promise.resolve().then(() => o(__$.X81())),
            {
              fromContainerMetadata: H
            } = await Promise.resolve().then(() => o(__$.K8A()));
          return q?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => VLA.chain(w(z ?? {}), H(z))().then(Es1);
        },
        Ec2InstanceMetadata: async z => {
          q?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          let {
            fromInstanceMetadata: w
          } = await Promise.resolve().then(() => o(__$.K8A()));
          return async () => w(z)().then(Es1);
        },
        Environment: async z => {
          q?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          let {
            fromEnv: w
          } = await Promise.resolve().then(() => o(__$.w81()));
          return async () => w(z)().then(Es1);
        }
      };
      if (A in Y) return Y[A];else throw new VLA.CredentialsProviderError(`Unsupported credential source in profile ${K}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
        logger: q
      });
    },
    Es1 = A => wQ.setCredentialFeature(A, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"),
    On5 = (A, {
      profile: K = "default",
      logger: q
    } = {}) => {
      return Boolean(A) && typeof A === "object" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof A.external_id) > -1 && ["undefined", "string"].indexOf(typeof A.mfa_serial) > -1 && (Xn5(A, {
        profile: K,
        logger: q
      }) || $n5(A, {
        profile: K,
        logger: q
      }));
    },
    Xn5 = (A, {
      profile: K,
      logger: q
    }) => {
      let Y = typeof A.source_profile === "string" && typeof A.credential_source > "u";
      if (Y) q?.debug?.(`    ${K} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
      return Y;
    },
    $n5 = (A, {
      profile: K,
      logger: q
    }) => {
      let Y = typeof A.credential_source === "string" && typeof A.source_profile > "u";
      if (Y) q?.debug?.(`    ${K} isCredentialSourceProfile credential_source=${A.credential_source}`);
      return Y;
    },
    _n5 = async (A, K, q, Y = {}, z) => {
      q.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      let w = K[A],
        {
          source_profile: H,
          region: J
        } = w;
      if (!q.roleAssumer) {
        let {
          getDefaultRoleAssumer: X
        } = await Promise.resolve().then(() => o(__$.s81()));
        q.roleAssumer = X({
          ...q.clientConfig,
          credentialProviderLogger: q.logger,
          parentClientConfig: {
            ...q?.parentClientConfig,
            region: J ?? q?.parentClientConfig?.region
          }
        }, q.clientPlugins);
      }
      if (H && H in Y) throw new VLA.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${ks1.getProfileName(q)}. Profiles visited: ` + Object.keys(Y).join(", "), {
        logger: q.logger
      });
      q.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${H ? `source_profile=[${H}]` : `profile=[${A}]`}`);
      let O = H ? z(H, K, q, {
        ...Y,
        [H]: !0
      }, Ua8(K[H] ?? {})) : (await Jn5(w.credential_source, A, q.logger)(q))();
      if (Ua8(w)) return O.then(X => wQ.setCredentialFeature(X, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));else {
        let X = {
            RoleArn: w.role_arn,
            RoleSessionName: w.role_session_name || `aws-sdk-js-${Date.now()}`,
            ExternalId: w.external_id,
            DurationSeconds: parseInt(w.duration_seconds || "3600", 10)
          },
          {
            mfa_serial: $
          } = w;
        if ($) {
          if (!q.mfaCodeProvider) throw new VLA.CredentialsProviderError(`Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`, {
            logger: q.logger,
            tryNextLink: !1
          });
          X.SerialNumber = $, X.TokenCode = await q.mfaCodeProvider($);
        }
        let _ = await O;
        return q.roleAssumer(_, X).then(G => wQ.setCredentialFeature(G, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      }
    },
    Ua8 = A => {
      return !A.role_arn && !!A.credential_source;
    },
    Gn5 = A => {
      return Boolean(A && A.login_session);
    },
    Zn5 = async (A, K) => {
      let q = await Hn5.fromLoginCredentials({
        ...K,
        profile: A
      })();
      return wQ.setCredentialFeature(q, "CREDENTIALS_PROFILE_LOGIN", "AC");
    },
    Wn5 = A => Boolean(A) && typeof A === "object" && typeof A.credential_process === "string",
    Dn5 = async (A, K) => Promise.resolve().then(() => o(__$.t81())).then(({
      fromProcess: q
    }) => q({
      ...A,
      profile: K
    })().then(Y => wQ.setCredentialFeature(Y, "CREDENTIALS_PROFILE_PROCESS", "v"))),
    jn5 = async (A, K, q = {}) => {
      let {
        fromSSO: Y
      } = await Promise.resolve().then(() => o(__$.g81()));
      return Y({
        profile: A,
        logger: q.logger,
        parentClientConfig: q.parentClientConfig,
        clientConfig: q.clientConfig
      })().then(z => {
        if (K.sso_session) return wQ.setCredentialFeature(z, "CREDENTIALS_PROFILE_SSO", "r");else return wQ.setCredentialFeature(z, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
      });
    },
    Mn5 = A => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"),
    pa8 = A => Boolean(A) && typeof A === "object" && typeof A.aws_access_key_id === "string" && typeof A.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof A.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof A.aws_account_id) > -1,
    da8 = async (A, K) => {
      K?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      let q = {
        accessKeyId: A.aws_access_key_id,
        secretAccessKey: A.aws_secret_access_key,
        sessionToken: A.aws_session_token,
        ...(A.aws_credential_scope && {
          credentialScope: A.aws_credential_scope
        }),
        ...(A.aws_account_id && {
          accountId: A.aws_account_id
        })
      };
      return wQ.setCredentialFeature(q, "CREDENTIALS_PROFILE", "n");
    },
    Pn5 = A => Boolean(A) && typeof A === "object" && typeof A.web_identity_token_file === "string" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1,
    Vn5 = async (A, K) => Promise.resolve().then(() => o(__$.PLA())).then(({
      fromTokenFile: q
    }) => q({
      webIdentityTokenFile: A.web_identity_token_file,
      roleArn: A.role_arn,
      roleSessionName: A.role_session_name,
      roleAssumerWithWebIdentity: K.roleAssumerWithWebIdentity,
      logger: K.logger,
      parentClientConfig: K.parentClientConfig
    })().then(Y => wQ.setCredentialFeature(Y, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))),
    ca8 = async (A, K, q, Y = {}, z = !1) => {
      let w = K[A];
      if (Object.keys(Y).length > 0 && pa8(w)) return da8(w, q);
      if (z || On5(w, {
        profile: A,
        logger: q.logger
      })) return _n5(A, K, q, Y, ca8);
      if (pa8(w)) return da8(w, q);
      if (Pn5(w)) return Vn5(w, q);
      if (Wn5(w)) return Dn5(q, A);
      if (Mn5(w)) return await jn5(A, w, q);
      if (Gn5(w)) return Zn5(A, q);
      throw new VLA.CredentialsProviderError(`Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`, {
        logger: q.logger
      });
    },
    fn5 = (A = {}) => async ({
      callerClientConfig: K
    } = {}) => {
      let q = {
        ...A,
        parentClientConfig: {
          ...K,
          ...A.parentClientConfig
        }
      };
      q.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      let Y = await ks1.parseKnownFiles(q);
      return ca8(ks1.getProfileName({
        profile: A.profile ?? K?.profile
      }), Y, q);
    };
  Nn5.fromIni = fn5;
});

// Register to shared state
__$.Cs1 = Cs1;
