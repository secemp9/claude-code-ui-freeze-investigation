// Module: t81
// Dependencies: pb, dX, fV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var t81 = v(ii5 => {
  var Ts1 = __$.pb(),
    Ns1 = __$.dX(),
    Qi5 = CA("child_process"),
    Ui5 = CA("util"),
    pi5 = __$.fV(),
    di5 = (A, K, q) => {
      if (K.Version !== 1) throw Error(`Profile ${A} credential_process did not return Version 1.`);
      if (K.AccessKeyId === void 0 || K.SecretAccessKey === void 0) throw Error(`Profile ${A} credential_process returned invalid credentials.`);
      if (K.Expiration) {
        let w = new Date();
        if (new Date(K.Expiration) < w) throw Error(`Profile ${A} credential_process returned expired credentials.`);
      }
      let Y = K.AccountId;
      if (!Y && q?.[A]?.aws_account_id) Y = q[A].aws_account_id;
      let z = {
        accessKeyId: K.AccessKeyId,
        secretAccessKey: K.SecretAccessKey,
        ...(K.SessionToken && {
          sessionToken: K.SessionToken
        }),
        ...(K.Expiration && {
          expiration: new Date(K.Expiration)
        }),
        ...(K.CredentialScope && {
          credentialScope: K.CredentialScope
        }),
        ...(Y && {
          accountId: Y
        })
      };
      return pi5.setCredentialFeature(z, "CREDENTIALS_PROCESS", "w"), z;
    },
    ci5 = async (A, K, q) => {
      let Y = K[A];
      if (K[A]) {
        let z = Y.credential_process;
        if (z !== void 0) {
          let w = Ui5.promisify(Ts1.externalDataInterceptor?.getTokenRecord?.().exec ?? Qi5.exec);
          try {
            let {
                stdout: H
              } = await w(z),
              J;
            try {
              J = JSON.parse(H.trim());
            } catch {
              throw Error(`Profile ${A} credential_process returned invalid JSON.`);
            }
            return di5(A, J, K);
          } catch (H) {
            throw new Ns1.CredentialsProviderError(H.message, {
              logger: q
            });
          }
        } else throw new Ns1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
          logger: q
        });
      } else throw new Ns1.CredentialsProviderError(`Profile ${A} could not be found in shared credentials file.`, {
        logger: q
      });
    },
    li5 = (A = {}) => async ({
      callerClientConfig: K
    } = {}) => {
      A.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      let q = await Ts1.parseKnownFiles(A);
      return ci5(Ts1.getProfileName({
        profile: A.profile ?? K?.profile
      }), q, A.logger);
    };
  ii5.fromProcess = li5;
});

// Register to shared state
__$.t81 = t81;
