// Module: W8A
// Dependencies: w81, dX, pb, K8A, X81, g81, Cs1, t81, PLA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W8A = v(yn5 => {
  var Ls1 = __$.w81(),
    fLA = __$.dX(),
    vn5 = __$.pb(),
    la8 = "AWS_EC2_METADATA_DISABLED",
    En5 = async A => {
      let {
        ENV_CMDS_FULL_URI: K,
        ENV_CMDS_RELATIVE_URI: q,
        fromContainerMetadata: Y,
        fromInstanceMetadata: z
      } = await Promise.resolve().then(() => o(__$.K8A()));
      if (process.env[q] || process.env[K]) {
        A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        let {
          fromHttp: w
        } = await Promise.resolve().then(() => o(__$.X81()));
        return fLA.chain(w(A), Y(A));
      }
      if (process.env[la8] && process.env[la8] !== "false") return async () => {
        throw new fLA.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
          logger: A.logger
        });
      };
      return A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), z(A);
    };
  function kn5(A, K) {
    let q = Cn5(A),
      Y,
      z,
      w,
      H = async J => {
        if (J?.forceRefresh) return await q(J);
        if (w?.expiration) {
          if (w?.expiration?.getTime() < Date.now()) w = void 0;
        }
        if (Y) await Y;else if (!w || K?.(w)) if (w) {
          if (!z) z = q(J).then(O => {
            w = O, z = void 0;
          });
        } else return Y = q(J).then(O => {
          w = O, Y = void 0;
        }), H(J);
        return w;
      };
    return H;
  }
  var Cn5 = A => async K => {
      let q;
      for (let Y of A) try {
        return await Y(K);
      } catch (z) {
        if (q = z, z?.tryNextLink) continue;
        throw z;
      }
      throw q;
    },
    ia8 = !1,
    Ln5 = (A = {}) => kn5([async () => {
      if (A.profile ?? process.env[vn5.ENV_PROFILE]) {
        if (process.env[Ls1.ENV_KEY] && process.env[Ls1.ENV_SECRET]) {
          if (!ia8) (A.logger?.warn && A.logger?.constructor?.name !== "NoOpLogger" ? A.logger.warn.bind(A.logger) : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), ia8 = !0;
        }
        throw new fLA.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
          logger: A.logger,
          tryNextLink: !0
        });
      }
      return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), Ls1.fromEnv(A)();
    }, async K => {
      A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
      let {
        ssoStartUrl: q,
        ssoAccountId: Y,
        ssoRegion: z,
        ssoRoleName: w,
        ssoSession: H
      } = A;
      if (!q && !Y && !z && !w && !H) throw new fLA.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
        logger: A.logger
      });
      let {
        fromSSO: J
      } = await Promise.resolve().then(() => o(__$.g81()));
      return J(A)(K);
    }, async K => {
      A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
      let {
        fromIni: q
      } = await Promise.resolve().then(() => o(__$.Cs1()));
      return q(A)(K);
    }, async K => {
      A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
      let {
        fromProcess: q
      } = await Promise.resolve().then(() => o(__$.t81()));
      return q(A)(K);
    }, async K => {
      A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
      let {
        fromTokenFile: q
      } = await Promise.resolve().then(() => o(__$.PLA()));
      return q(A)(K);
    }, async () => {
      return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await En5(A))();
    }, async () => {
      throw new fLA.CredentialsProviderError("Could not load credentials from any providers", {
        tryNextLink: !1,
        logger: A.logger
      });
    }], na8),
    Rn5 = A => A?.expiration !== void 0,
    na8 = A => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000;
  yn5.credentialsTreatedAsExpired = na8;
  yn5.credentialsWillNeedRefresh = Rn5;
  yn5.defaultProvider = Ln5;
});

// Register to shared state
__$.W8A = W8A;
