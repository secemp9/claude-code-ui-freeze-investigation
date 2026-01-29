// Module: w81
// Dependencies: fV, dX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w81 = v($I5 => {
  var JI5 = __$.fV(),
    OI5 = __$.dX(),
    Dd8 = "AWS_ACCESS_KEY_ID",
    jd8 = "AWS_SECRET_ACCESS_KEY",
    Md8 = "AWS_SESSION_TOKEN",
    Pd8 = "AWS_CREDENTIAL_EXPIRATION",
    Vd8 = "AWS_CREDENTIAL_SCOPE",
    fd8 = "AWS_ACCOUNT_ID",
    XI5 = A => async () => {
      A?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      let K = process.env[Dd8],
        q = process.env[jd8],
        Y = process.env[Md8],
        z = process.env[Pd8],
        w = process.env[Vd8],
        H = process.env[fd8];
      if (K && q) {
        let J = {
          accessKeyId: K,
          secretAccessKey: q,
          ...(Y && {
            sessionToken: Y
          }),
          ...(z && {
            expiration: new Date(z)
          }),
          ...(w && {
            credentialScope: w
          }),
          ...(H && {
            accountId: H
          })
        };
        return JI5.setCredentialFeature(J, "CREDENTIALS_ENV_VARS", "g"), J;
      }
      throw new OI5.CredentialsProviderError("Unable to find environment variable credentials.", {
        logger: A?.logger
      });
    };
  $I5.ENV_ACCOUNT_ID = fd8;
  $I5.ENV_CREDENTIAL_SCOPE = Vd8;
  $I5.ENV_EXPIRATION = Pd8;
  $I5.ENV_KEY = Dd8;
  $I5.ENV_SECRET = jd8;
  $I5.ENV_SESSION = Md8;
  $I5.fromEnv = XI5;
});

// Register to shared state
__$.w81 = w81;
