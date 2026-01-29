// Module: Ja1
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ja1 = v(Ha1 => {
  var tl8 = __$.BF(),
    pB5 = __$.mF(),
    dB5 = __$.gF(),
    el8 = __$.Ub(),
    cB5 = __$.l0(),
    qa1 = __$.Gz(),
    wT = __$.DJ(),
    lB5 = __$.rF(),
    zi8 = __$.qy(),
    Ai8 = __$.kZ(),
    wn = __$.ej(),
    Ki8 = __$.go1(),
    iB5 = __$.cl8(),
    qi8 = __$.Yy(),
    Yi8 = __$.P81(),
    nB5 = A => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "sso-oauth"
      });
    },
    rB5 = {
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
    oB5 = A => {
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
    aB5 = A => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials()
      };
    },
    sB5 = (A, K) => {
      let q = Object.assign(qi8.getAwsRegionExtensionConfiguration(A), wn.getDefaultExtensionConfiguration(A), Yi8.getHttpHandlerExtensionConfiguration(A), oB5(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, qi8.resolveAwsRegionExtensionConfiguration(q), wn.resolveDefaultRuntimeConfig(q), Yi8.resolveHttpHandlerRuntimeConfig(q), aB5(q));
    };
  class Ya1 extends wn.Client {
    config;
    constructor(...[A]) {
      let K = iB5.getRuntimeConfig(A || {});
      super(K);
      this.initConfig = K;
      let q = nB5(K),
        Y = el8.resolveUserAgentConfig(q),
        z = Ai8.resolveRetryConfig(Y),
        w = cB5.resolveRegionConfig(z),
        H = tl8.resolveHostHeaderConfig(w),
        J = zi8.resolveEndpointConfig(H),
        O = Ki8.resolveHttpAuthSchemeConfig(J),
        X = sB5(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use(wT.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(el8.getUserAgentPlugin(this.config)), this.middlewareStack.use(Ai8.getRetryPlugin(this.config)), this.middlewareStack.use(lB5.getContentLengthPlugin(this.config)), this.middlewareStack.use(tl8.getHostHeaderPlugin(this.config)), this.middlewareStack.use(pB5.getLoggerPlugin(this.config)), this.middlewareStack.use(dB5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(qa1.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: Ki8.defaultSSOOIDCHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new qa1.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials
        })
      })), this.middlewareStack.use(qa1.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var HT = class A extends wn.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    wi8 = class A extends HT {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(K) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.reason = K.reason, this.error_description = K.error_description;
      }
    },
    Hi8 = class A extends HT {
      name = "AuthorizationPendingException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    Ji8 = class A extends HT {
      name = "ExpiredTokenException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    Oi8 = class A extends HT {
      name = "InternalServerException";
      $fault = "server";
      error;
      error_description;
      constructor(K) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    Xi8 = class A extends HT {
      name = "InvalidClientException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    $i8 = class A extends HT {
      name = "InvalidGrantException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    _i8 = class A extends HT {
      name = "InvalidRequestException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(K) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.reason = K.reason, this.error_description = K.error_description;
      }
    },
    Gi8 = class A extends HT {
      name = "InvalidScopeException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    Zi8 = class A extends HT {
      name = "SlowDownException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    Wi8 = class A extends HT {
      name = "UnauthorizedClientException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    Di8 = class A extends HT {
      name = "UnsupportedGrantTypeException";
      $fault = "client";
      error;
      error_description;
      constructor(K) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype), this.error = K.error, this.error_description = K.error_description;
      }
    },
    tB5 = "AccessDeniedException",
    eB5 = "AuthorizationPendingException",
    Am5 = "AccessToken",
    Km5 = "ClientSecret",
    qm5 = "CreateToken",
    Ym5 = "CreateTokenRequest",
    zm5 = "CreateTokenResponse",
    wm5 = "CodeVerifier",
    Hm5 = "ExpiredTokenException",
    Jm5 = "InvalidClientException",
    Om5 = "InvalidGrantException",
    Xm5 = "InvalidRequestException",
    $m5 = "InternalServerException",
    _m5 = "InvalidScopeException",
    Gm5 = "IdToken",
    Zm5 = "RefreshToken",
    Wm5 = "SlowDownException",
    Dm5 = "UnauthorizedClientException",
    jm5 = "UnsupportedGrantTypeException",
    Mm5 = "accessToken",
    lb = "client",
    Pm5 = "clientId",
    Vm5 = "clientSecret",
    fm5 = "codeVerifier",
    Nm5 = "code",
    Tm5 = "deviceCode",
    lO = "error",
    vm5 = "expiresIn",
    zy = "error_description",
    Em5 = "grantType",
    km5 = "http",
    wy = "httpError",
    Cm5 = "idToken",
    ji8 = "reason",
    Mi8 = "refreshToken",
    Lm5 = "redirectUri",
    Rm5 = "scope",
    ym5 = "server",
    Pi8 = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc",
    Im5 = "tokenType",
    b2 = "com.amazonaws.ssooidc",
    Sm5 = [0, b2, Am5, 8, 0],
    hm5 = [0, b2, Km5, 8, 0],
    bm5 = [0, b2, wm5, 8, 0],
    xm5 = [0, b2, Gm5, 8, 0],
    Vi8 = [0, b2, Zm5, 8, 0],
    um5 = [-3, b2, tB5, {
      [lO]: lb,
      [wy]: 400
    }, [lO, ji8, zy], [0, 0, 0]];
  wT.TypeRegistry.for(b2).registerError(um5, wi8);
  var Bm5 = [-3, b2, eB5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(Bm5, Hi8);
  var mm5 = [3, b2, Ym5, 0, [Pm5, Vm5, Em5, Tm5, Nm5, Mi8, Rm5, Lm5, fm5], [0, [() => hm5, 0], 0, 0, 0, [() => Vi8, 0], 64, 0, [() => bm5, 0]]],
    gm5 = [3, b2, zm5, 0, [Mm5, Im5, vm5, Mi8, Cm5], [[() => Sm5, 0], 0, 1, [() => Vi8, 0], [() => xm5, 0]]],
    Fm5 = [-3, b2, Hm5, {
      [lO]: lb,
      [wy]: 400
    }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(Fm5, Ji8);
  var Qm5 = [-3, b2, $m5, {
    [lO]: ym5,
    [wy]: 500
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(Qm5, Oi8);
  var Um5 = [-3, b2, Jm5, {
    [lO]: lb,
    [wy]: 401
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(Um5, Xi8);
  var pm5 = [-3, b2, Om5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(pm5, $i8);
  var dm5 = [-3, b2, Xm5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, ji8, zy], [0, 0, 0]];
  wT.TypeRegistry.for(b2).registerError(dm5, _i8);
  var cm5 = [-3, b2, _m5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(cm5, Gi8);
  var lm5 = [-3, b2, Wm5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(lm5, Zi8);
  var im5 = [-3, b2, Dm5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(im5, Wi8);
  var nm5 = [-3, b2, jm5, {
    [lO]: lb,
    [wy]: 400
  }, [lO, zy], [0, 0]];
  wT.TypeRegistry.for(b2).registerError(nm5, Di8);
  var rm5 = [-3, Pi8, "SSOOIDCServiceException", 0, [], []];
  wT.TypeRegistry.for(Pi8).registerError(rm5, HT);
  var om5 = [9, b2, qm5, {
    [km5]: ["POST", "/token", 200]
  }, () => mm5, () => gm5];
  class za1 extends wn.Command.classBuilder().ep(rB5).m(function (A, K, q, Y) {
    return [zi8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(om5).build() {}
  var am5 = {
    CreateTokenCommand: za1
  };
  class wa1 extends Ya1 {}
  wn.createAggregatedClient(am5, wa1);
  var sm5 = {
      KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
    },
    tm5 = {
      KMS_DISABLED_KEY: "KMS_DisabledException",
      KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
      KMS_INVALID_STATE: "KMS_InvalidStateException",
      KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
    };
  Object.defineProperty(Ha1, "$Command", {
    enumerable: !0,
    get: function () {
      return wn.Command;
    }
  });
  Object.defineProperty(Ha1, "__Client", {
    enumerable: !0,
    get: function () {
      return wn.Client;
    }
  });
  Ha1.AccessDeniedException = wi8;
  Ha1.AccessDeniedExceptionReason = sm5;
  Ha1.AuthorizationPendingException = Hi8;
  Ha1.CreateTokenCommand = za1;
  Ha1.ExpiredTokenException = Ji8;
  Ha1.InternalServerException = Oi8;
  Ha1.InvalidClientException = Xi8;
  Ha1.InvalidGrantException = $i8;
  Ha1.InvalidRequestException = _i8;
  Ha1.InvalidRequestExceptionReason = tm5;
  Ha1.InvalidScopeException = Gi8;
  Ha1.SSOOIDC = wa1;
  Ha1.SSOOIDCClient = Ya1;
  Ha1.SSOOIDCServiceException = HT;
  Ha1.SlowDownException = Zi8;
  Ha1.UnauthorizedClientException = Wi8;
  Ha1.UnsupportedGrantTypeException = Di8;
});

// Register to shared state
__$.Ja1 = Ja1;
