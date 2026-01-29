// Module: Yo8
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Yo8 = v(ea1 => {
  var br8 = __$.BF(),
    jd5 = __$.mF(),
    Md5 = __$.gF(),
    xr8 = __$.Ub(),
    Pd5 = __$.l0(),
    na1 = __$.Gz(),
    xOA = __$.DJ(),
    Vd5 = __$.rF(),
    ar8 = __$.qy(),
    ur8 = __$.kZ(),
    Jn = __$.ej(),
    Br8 = __$.Ua1(),
    fd5 = __$.hr8(),
    mr8 = __$.Yy(),
    gr8 = __$.P81(),
    Nd5 = A => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "signin"
      });
    },
    Td5 = {
      UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
      },
      Endpoint: {
        type: "builtInParams",
        name: "endpoint"
      },
      Region: {
        type: "builtInParams",
        name: "region"
      },
      UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
      }
    },
    vd5 = A => {
      let {
        httpAuthSchemes: K,
        httpAuthSchemeProvider: q,
        credentials: Y
      } = A;
      return {
        setHttpAuthScheme(z) {
          let w = K.findIndex(H => H.schemeId === z.schemeId);
          if (w === -1) K.push(z);else K.splice(w, 1, z);
        },
        httpAuthSchemes() {
          return K;
        },
        setHttpAuthSchemeProvider(z) {
          q = z;
        },
        httpAuthSchemeProvider() {
          return q;
        },
        setCredentials(z) {
          Y = z;
        },
        credentials() {
          return Y;
        }
      };
    },
    Ed5 = A => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials()
      };
    },
    kd5 = (A, K) => {
      let q = Object.assign(mr8.getAwsRegionExtensionConfiguration(A), Jn.getDefaultExtensionConfiguration(A), gr8.getHttpHandlerExtensionConfiguration(A), vd5(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, mr8.resolveAwsRegionExtensionConfiguration(q), Jn.resolveDefaultRuntimeConfig(q), gr8.resolveHttpHandlerRuntimeConfig(q), Ed5(q));
    };
  class ra1 extends Jn.Client {
    config;
    constructor(...[A]) {
      let K = fd5.getRuntimeConfig(A || {});
      super(K);
      this.initConfig = K;
      let q = Nd5(K),
        Y = xr8.resolveUserAgentConfig(q),
        z = ur8.resolveRetryConfig(Y),
        w = Pd5.resolveRegionConfig(z),
        H = br8.resolveHostHeaderConfig(w),
        J = ar8.resolveEndpointConfig(H),
        O = Br8.resolveHttpAuthSchemeConfig(J),
        X = kd5(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use(xOA.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(xr8.getUserAgentPlugin(this.config)), this.middlewareStack.use(ur8.getRetryPlugin(this.config)), this.middlewareStack.use(Vd5.getContentLengthPlugin(this.config)), this.middlewareStack.use(br8.getHostHeaderPlugin(this.config)), this.middlewareStack.use(jd5.getLoggerPlugin(this.config)), this.middlewareStack.use(Md5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(na1.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: Br8.defaultSigninHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new na1.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials
        })
      })), this.middlewareStack.use(na1.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var uOA = class A extends Jn.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    sr8 = class A extends uOA {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      constructor(K) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error;
      }
    },
    tr8 = class A extends uOA {
      name = "InternalServerException";
      $fault = "server";
      error;
      constructor(K) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error;
      }
    },
    er8 = class A extends uOA {
      name = "TooManyRequestsError";
      $fault = "client";
      error;
      constructor(K) {
        super({
          name: "TooManyRequestsError",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error;
      }
    },
    Ao8 = class A extends uOA {
      name = "ValidationException";
      $fault = "client";
      error;
      constructor(K) {
        super({
          name: "ValidationException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error;
      }
    },
    Cd5 = "AccessDeniedException",
    Ld5 = "AccessToken",
    Rd5 = "CreateOAuth2Token",
    yd5 = "CreateOAuth2TokenRequest",
    Id5 = "CreateOAuth2TokenRequestBody",
    Sd5 = "CreateOAuth2TokenResponseBody",
    hd5 = "CreateOAuth2TokenResponse",
    bd5 = "InternalServerException",
    xd5 = "RefreshToken",
    ud5 = "TooManyRequestsError",
    Bd5 = "ValidationException",
    Fr8 = "accessKeyId",
    Qr8 = "accessToken",
    oa1 = "client",
    Ur8 = "clientId",
    pr8 = "codeVerifier",
    md5 = "code",
    On = "error",
    dr8 = "expiresIn",
    cr8 = "grantType",
    gd5 = "http",
    aa1 = "httpError",
    lr8 = "idToken",
    OT = "jsonName",
    l81 = "message",
    c81 = "refreshToken",
    ir8 = "redirectUri",
    Fd5 = "server",
    nr8 = "secretAccessKey",
    rr8 = "sessionToken",
    Ko8 = "smithy.ts.sdk.synthetic.com.amazonaws.signin",
    Qd5 = "tokenInput",
    Ud5 = "tokenOutput",
    or8 = "tokenType",
    AM = "com.amazonaws.signin",
    qo8 = [0, AM, xd5, 8, 0],
    pd5 = [-3, AM, Cd5, {
      [On]: oa1
    }, [On, l81], [0, 0]];
  xOA.TypeRegistry.for(AM).registerError(pd5, sr8);
  var dd5 = [3, AM, Ld5, 8, [Fr8, nr8, rr8], [[0, {
      [OT]: Fr8
    }], [0, {
      [OT]: nr8
    }], [0, {
      [OT]: rr8
    }]]],
    cd5 = [3, AM, yd5, 0, [Qd5], [[() => ld5, 16]]],
    ld5 = [3, AM, Id5, 0, [Ur8, cr8, md5, ir8, pr8, c81], [[0, {
      [OT]: Ur8
    }], [0, {
      [OT]: cr8
    }], 0, [0, {
      [OT]: ir8
    }], [0, {
      [OT]: pr8
    }], [() => qo8, {
      [OT]: c81
    }]]],
    id5 = [3, AM, hd5, 0, [Ud5], [[() => nd5, 16]]],
    nd5 = [3, AM, Sd5, 0, [Qr8, or8, dr8, c81, lr8], [[() => dd5, {
      [OT]: Qr8
    }], [0, {
      [OT]: or8
    }], [1, {
      [OT]: dr8
    }], [() => qo8, {
      [OT]: c81
    }], [0, {
      [OT]: lr8
    }]]],
    rd5 = [-3, AM, bd5, {
      [On]: Fd5,
      [aa1]: 500
    }, [On, l81], [0, 0]];
  xOA.TypeRegistry.for(AM).registerError(rd5, tr8);
  var od5 = [-3, AM, ud5, {
    [On]: oa1,
    [aa1]: 429
  }, [On, l81], [0, 0]];
  xOA.TypeRegistry.for(AM).registerError(od5, er8);
  var ad5 = [-3, AM, Bd5, {
    [On]: oa1,
    [aa1]: 400
  }, [On, l81], [0, 0]];
  xOA.TypeRegistry.for(AM).registerError(ad5, Ao8);
  var sd5 = [-3, Ko8, "SigninServiceException", 0, [], []];
  xOA.TypeRegistry.for(Ko8).registerError(sd5, uOA);
  var td5 = [9, AM, Rd5, {
    [gd5]: ["POST", "/v1/token", 200]
  }, () => cd5, () => id5];
  class sa1 extends Jn.Command.classBuilder().ep(Td5).m(function (A, K, q, Y) {
    return [ar8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(td5).build() {}
  var ed5 = {
    CreateOAuth2TokenCommand: sa1
  };
  class ta1 extends ra1 {}
  Jn.createAggregatedClient(ed5, ta1);
  var Ac5 = {
    AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
    INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
    INVALID_REQUEST: "INVALID_REQUEST",
    SERVER_ERROR: "server_error",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
  };
  Object.defineProperty(ea1, "$Command", {
    enumerable: !0,
    get: function () {
      return Jn.Command;
    }
  });
  Object.defineProperty(ea1, "__Client", {
    enumerable: !0,
    get: function () {
      return Jn.Client;
    }
  });
  ea1.AccessDeniedException = sr8;
  ea1.CreateOAuth2TokenCommand = sa1;
  ea1.InternalServerException = tr8;
  ea1.OAuth2ErrorCode = Ac5;
  ea1.Signin = ta1;
  ea1.SigninClient = ra1;
  ea1.SigninServiceException = uOA;
  ea1.TooManyRequestsError = er8;
  ea1.ValidationException = Ao8;
});

// Register to shared state
__$.Yo8 = Yo8;
