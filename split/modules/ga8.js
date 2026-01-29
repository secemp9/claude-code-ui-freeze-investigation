// Module: ga8
// Dependencies: fV, dX, pb, vs1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ga8 = v(Ba8 => {
  Object.defineProperty(Ba8, "__esModule", {
    value: !0
  });
  Ba8.fromTokenFile = void 0;
  var ti5 = __$.fV(),
    ei5 = __$.dX(),
    An5 = __$.pb(),
    Kn5 = CA("fs"),
    qn5 = __$.vs1(),
    ua8 = "AWS_WEB_IDENTITY_TOKEN_FILE",
    Yn5 = "AWS_ROLE_ARN",
    zn5 = "AWS_ROLE_SESSION_NAME",
    wn5 = (A = {}) => async K => {
      A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      let q = A?.webIdentityTokenFile ?? process.env[ua8],
        Y = A?.roleArn ?? process.env[Yn5],
        z = A?.roleSessionName ?? process.env[zn5];
      if (!q || !Y) throw new ei5.CredentialsProviderError("Web identity configuration not specified", {
        logger: A.logger
      });
      let w = await (0, qn5.fromWebToken)({
        ...A,
        webIdentityToken: An5.externalDataInterceptor?.getTokenRecord?.()[q] ?? (0, Kn5.readFileSync)(q, {
          encoding: "ascii"
        }),
        roleArn: Y,
        roleSessionName: z
      })(K);
      if (q === process.env[ua8]) (0, ti5.setCredentialFeature)(w, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
      return w;
    };
  Ba8.fromTokenFile = wn5;
});

// Register to shared state
__$.ga8 = ga8;
