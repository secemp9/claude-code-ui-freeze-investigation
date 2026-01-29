// Module: wc8
// Dependencies: Uz, fV, zT, dX, hd8, sd8, Ac8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wc8 = v(Yc8 => {
  Object.defineProperty(Yc8, "__esModule", {
    value: !0
  });
  Yc8.fromHttp = void 0;
  var yh5 = __$.Uz(),
    Ih5 = __$.fV(),
    Sh5 = __$.zT(),
    Kc8 = __$.dX(),
    hh5 = yh5.__importDefault(CA("fs/promises")),
    bh5 = __$.hd8(),
    qc8 = __$.sd8(),
    xh5 = __$.Ac8(),
    uh5 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    Bh5 = "http://169.254.170.2",
    mh5 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    gh5 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
    Fh5 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    Qh5 = (A = {}) => {
      A.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let K,
        q = A.awsContainerCredentialsRelativeUri ?? process.env[uh5],
        Y = A.awsContainerCredentialsFullUri ?? process.env[mh5],
        z = A.awsContainerAuthorizationToken ?? process.env[Fh5],
        w = A.awsContainerAuthorizationTokenFile ?? process.env[gh5],
        H = A.logger?.constructor?.name === "NoOpLogger" || !A.logger?.warn ? console.warn : A.logger.warn.bind(A.logger);
      if (q && Y) H("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), H("awsContainerCredentialsFullUri will take precedence.");
      if (z && w) H("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), H("awsContainerAuthorizationToken will take precedence.");
      if (Y) K = Y;else if (q) K = `${Bh5}${q}`;else throw new Kc8.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
        logger: A.logger
      });
      let J = new URL(K);
      (0, bh5.checkUrl)(J, A.logger);
      let O = Sh5.NodeHttpHandler.create({
        requestTimeout: A.timeout ?? 1000,
        connectionTimeout: A.timeout ?? 1000
      });
      return (0, xh5.retryWrapper)(async () => {
        let X = (0, qc8.createGetRequest)(J);
        if (z) X.headers.Authorization = z;else if (w) X.headers.Authorization = (await hh5.default.readFile(w)).toString();
        try {
          let $ = await O.handle(X);
          return (0, qc8.getCredentials)($.response).then(_ => (0, Ih5.setCredentialFeature)(_, "CREDENTIALS_HTTP", "z"));
        } catch ($) {
          throw new Kc8.CredentialsProviderError(String($), {
            logger: A.logger
          });
        }
      }, A.maxRetries ?? 3, A.timeout ?? 1000);
    };
  Yc8.fromHttp = Qh5;
});

// Register to shared state
__$.wc8 = wc8;
