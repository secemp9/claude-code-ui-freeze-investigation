// Module: K8A
// Dependencies: dX, NV, tE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K8A = v(iI5 => {
  var cb = __$.dX(),
    PI5 = CA("url"),
    VI5 = CA("buffer"),
    fI5 = CA("http"),
    Yo1 = __$.NV(),
    NI5 = __$.tE();
  function sCA(A) {
    return new Promise((K, q) => {
      let Y = fI5.request({
        method: "GET",
        ...A,
        hostname: A.hostname?.replace(/^\[(.+)\]$/, "$1")
      });
      Y.on("error", z => {
        q(Object.assign(new cb.ProviderError("Unable to connect to instance metadata service"), z)), Y.destroy();
      }), Y.on("timeout", () => {
        q(new cb.ProviderError("TimeoutError from instance metadata service")), Y.destroy();
      }), Y.on("response", z => {
        let {
          statusCode: w = 400
        } = z;
        if (w < 200 || 300 <= w) q(Object.assign(new cb.ProviderError("Error response received from instance metadata service"), {
          statusCode: w
        })), Y.destroy();
        let H = [];
        z.on("data", J => {
          H.push(J);
        }), z.on("end", () => {
          K(VI5.Buffer.concat(H)), Y.destroy();
        });
      }), Y.end();
    });
  }
  var Ed8 = A => Boolean(A) && typeof A === "object" && typeof A.AccessKeyId === "string" && typeof A.SecretAccessKey === "string" && typeof A.Token === "string" && typeof A.Expiration === "string",
    kd8 = A => ({
      accessKeyId: A.AccessKeyId,
      secretAccessKey: A.SecretAccessKey,
      sessionToken: A.Token,
      expiration: new Date(A.Expiration),
      ...(A.AccountId && {
        accountId: A.AccountId
      })
    }),
    Cd8 = 1000,
    Ld8 = 0,
    zo1 = ({
      maxRetries: A = Ld8,
      timeout: K = Cd8
    }) => ({
      maxRetries: A,
      timeout: K
    }),
    Ko1 = (A, K) => {
      let q = A();
      for (let Y = 0; Y < K; Y++) q = q.catch(A);
      return q;
    },
    H81 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    J81 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    qo1 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    TI5 = (A = {}) => {
      let {
        timeout: K,
        maxRetries: q
      } = zo1(A);
      return () => Ko1(async () => {
        let Y = await LI5({
            logger: A.logger
          }),
          z = JSON.parse(await vI5(K, Y));
        if (!Ed8(z)) throw new cb.CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: A.logger
        });
        return kd8(z);
      }, q);
    },
    vI5 = async (A, K) => {
      if (process.env[qo1]) K.headers = {
        ...K.headers,
        Authorization: process.env[qo1]
      };
      return (await sCA({
        ...K,
        timeout: A
      })).toString();
    },
    EI5 = "169.254.170.2",
    kI5 = {
      localhost: !0,
      "127.0.0.1": !0
    },
    CI5 = {
      "http:": !0,
      "https:": !0
    },
    LI5 = async ({
      logger: A
    }) => {
      if (process.env[J81]) return {
        hostname: EI5,
        path: process.env[J81]
      };
      if (process.env[H81]) {
        let K = PI5.parse(process.env[H81]);
        if (!K.hostname || !(K.hostname in kI5)) throw new cb.CredentialsProviderError(`${K.hostname} is not a valid container metadata service hostname`, {
          tryNextLink: !1,
          logger: A
        });
        if (!K.protocol || !(K.protocol in CI5)) throw new cb.CredentialsProviderError(`${K.protocol} is not a valid container metadata service protocol`, {
          tryNextLink: !1,
          logger: A
        });
        return {
          ...K,
          port: K.port ? parseInt(K.port, 10) : void 0
        };
      }
      throw new cb.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${J81} or ${H81} environment variable is set`, {
        tryNextLink: !1,
        logger: A
      });
    };
  class wo1 extends cb.CredentialsProviderError {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(A, K = !0) {
      super(A, K);
      this.tryNextLink = K, Object.setPrototypeOf(this, wo1.prototype);
    }
  }
  iI5.Endpoint = void 0;
  (function (A) {
    A.IPv4 = "http://169.254.169.254", A.IPv6 = "http://[fd00:ec2::254]";
  })(iI5.Endpoint || (iI5.Endpoint = {}));
  var RI5 = "AWS_EC2_METADATA_SERVICE_ENDPOINT",
    yI5 = "ec2_metadata_service_endpoint",
    II5 = {
      environmentVariableSelector: A => A[RI5],
      configFileSelector: A => A[yI5],
      default: void 0
    },
    MOA;
  (function (A) {
    A.IPv4 = "IPv4", A.IPv6 = "IPv6";
  })(MOA || (MOA = {}));
  var SI5 = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
    hI5 = "ec2_metadata_service_endpoint_mode",
    bI5 = {
      environmentVariableSelector: A => A[SI5],
      configFileSelector: A => A[hI5],
      default: MOA.IPv4
    },
    Rd8 = async () => NI5.parseUrl((await xI5()) || (await uI5())),
    xI5 = async () => Yo1.loadConfig(II5)(),
    uI5 = async () => {
      let A = await Yo1.loadConfig(bI5)();
      switch (A) {
        case MOA.IPv4:
          return iI5.Endpoint.IPv4;
        case MOA.IPv6:
          return iI5.Endpoint.IPv6;
        default:
          throw Error(`Unsupported endpoint mode: ${A}. Select from ${Object.values(MOA)}`);
      }
    },
    BI5 = 300,
    mI5 = 300,
    gI5 = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html",
    Nd8 = (A, K) => {
      let q = BI5 + Math.floor(Math.random() * mI5),
        Y = new Date(Date.now() + q * 1000);
      K.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(Y)}.
For more information, please visit: ` + gI5);
      let z = A.originalExpiration ?? A.expiration;
      return {
        ...A,
        ...(z ? {
          originalExpiration: z
        } : {}),
        expiration: Y
      };
    },
    FI5 = (A, K = {}) => {
      let q = K?.logger || console,
        Y;
      return async () => {
        let z;
        try {
          if (z = await A(), z.expiration && z.expiration.getTime() < Date.now()) z = Nd8(z, q);
        } catch (w) {
          if (Y) q.warn("Credential renew failed: ", w), z = Nd8(Y, q);else throw w;
        }
        return Y = z, z;
      };
    },
    yd8 = "/latest/meta-data/iam/security-credentials/",
    QI5 = "/latest/api/token",
    Ao1 = "AWS_EC2_METADATA_V1_DISABLED",
    Td8 = "ec2_metadata_v1_disabled",
    vd8 = "x-aws-ec2-metadata-token",
    UI5 = (A = {}) => FI5(pI5(A), {
      logger: A.logger
    }),
    pI5 = (A = {}) => {
      let K = !1,
        {
          logger: q,
          profile: Y
        } = A,
        {
          timeout: z,
          maxRetries: w
        } = zo1(A),
        H = async (J, O) => {
          if (K || O.headers?.[vd8] == null) {
            let _ = !1,
              G = !1,
              Z = await Yo1.loadConfig({
                environmentVariableSelector: W => {
                  let D = W[Ao1];
                  if (G = !!D && D !== "false", D === void 0) throw new cb.CredentialsProviderError(`${Ao1} not set in env, checking config file next.`, {
                    logger: A.logger
                  });
                  return G;
                },
                configFileSelector: W => {
                  let D = W[Td8];
                  return _ = !!D && D !== "false", _;
                },
                default: !1
              }, {
                profile: Y
              })();
            if (A.ec2MetadataV1Disabled || Z) {
              let W = [];
              if (A.ec2MetadataV1Disabled) W.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
              if (_) W.push(`config file profile (${Td8})`);
              if (G) W.push(`process environment variable (${Ao1})`);
              throw new wo1(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${W.join(", ")}].`);
            }
          }
          let $ = (await Ko1(async () => {
            let _;
            try {
              _ = await cI5(O);
            } catch (G) {
              if (G.statusCode === 401) K = !1;
              throw G;
            }
            return _;
          }, J)).trim();
          return Ko1(async () => {
            let _;
            try {
              _ = await lI5($, O, A);
            } catch (G) {
              if (G.statusCode === 401) K = !1;
              throw G;
            }
            return _;
          }, J);
        };
      return async () => {
        let J = await Rd8();
        if (K) return q?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), H(w, {
          ...J,
          timeout: z
        });else {
          let O;
          try {
            O = (await dI5({
              ...J,
              timeout: z
            })).toString();
          } catch (X) {
            if (X?.statusCode === 400) throw Object.assign(X, {
              message: "EC2 Metadata token request returned error"
            });else if (X.message === "TimeoutError" || [403, 404, 405].includes(X.statusCode)) K = !0;
            return q?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), H(w, {
              ...J,
              timeout: z
            });
          }
          return H(w, {
            ...J,
            headers: {
              [vd8]: O
            },
            timeout: z
          });
        }
      };
    },
    dI5 = async A => sCA({
      ...A,
      path: QI5,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }),
    cI5 = async A => (await sCA({
      ...A,
      path: yd8
    })).toString(),
    lI5 = async (A, K, q) => {
      let Y = JSON.parse((await sCA({
        ...K,
        path: yd8 + A
      })).toString());
      if (!Ed8(Y)) throw new cb.CredentialsProviderError("Invalid response received from instance metadata service.", {
        logger: q.logger
      });
      return kd8(Y);
    };
  iI5.DEFAULT_MAX_RETRIES = Ld8;
  iI5.DEFAULT_TIMEOUT = Cd8;
  iI5.ENV_CMDS_AUTH_TOKEN = qo1;
  iI5.ENV_CMDS_FULL_URI = H81;
  iI5.ENV_CMDS_RELATIVE_URI = J81;
  iI5.fromContainerMetadata = TI5;
  iI5.fromInstanceMetadata = UI5;
  iI5.getInstanceMetadataEndpoint = Rd8;
  iI5.httpRequest = sCA;
  iI5.providerConfigFromInit = zo1;
});

// Register to shared state
__$.K8A = K8A;
