// Module: in8
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var in8 = v(ha1 => {
  var In8 = __$.BF(),
    mQ5 = __$.mF(),
    gQ5 = __$.gF(),
    Sn8 = __$.Ub(),
    FQ5 = __$.l0(),
    $LA = __$.Gz(),
    SOA = __$.DJ(),
    QQ5 = __$.rF(),
    _LA = __$.qy(),
    hn8 = __$.kZ(),
    Hy = __$.JLA(),
    bn8 = __$.va1(),
    UQ5 = __$.kn8(),
    xn8 = __$.Yy(),
    un8 = __$.yn8(),
    pQ5 = A => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "awsssoportal"
      });
    },
    v81 = {
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
    dQ5 = A => {
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
    cQ5 = A => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials()
      };
    },
    lQ5 = (A, K) => {
      let q = Object.assign(xn8.getAwsRegionExtensionConfiguration(A), Hy.getDefaultExtensionConfiguration(A), un8.getHttpHandlerExtensionConfiguration(A), dQ5(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, xn8.resolveAwsRegionExtensionConfiguration(q), Hy.resolveDefaultRuntimeConfig(q), un8.resolveHttpHandlerRuntimeConfig(q), cQ5(q));
    };
  class GLA extends Hy.Client {
    config;
    constructor(...[A]) {
      let K = UQ5.getRuntimeConfig(A || {});
      super(K);
      this.initConfig = K;
      let q = pQ5(K),
        Y = Sn8.resolveUserAgentConfig(q),
        z = hn8.resolveRetryConfig(Y),
        w = FQ5.resolveRegionConfig(z),
        H = In8.resolveHostHeaderConfig(w),
        J = _LA.resolveEndpointConfig(H),
        O = bn8.resolveHttpAuthSchemeConfig(J),
        X = lQ5(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use(SOA.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Sn8.getUserAgentPlugin(this.config)), this.middlewareStack.use(hn8.getRetryPlugin(this.config)), this.middlewareStack.use(QQ5.getContentLengthPlugin(this.config)), this.middlewareStack.use(In8.getHostHeaderPlugin(this.config)), this.middlewareStack.use(mQ5.getLoggerPlugin(this.config)), this.middlewareStack.use(gQ5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use($LA.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: bn8.defaultSSOHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new $LA.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials
        })
      })), this.middlewareStack.use($LA.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var hOA = class A extends Hy.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Bn8 = class A extends hOA {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(K) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    mn8 = class A extends hOA {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    gn8 = class A extends hOA {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(K) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Fn8 = class A extends hOA {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(K) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    iQ5 = "AccountInfo",
    nQ5 = "AccountListType",
    rQ5 = "AccessTokenType",
    oQ5 = "GetRoleCredentials",
    aQ5 = "GetRoleCredentialsRequest",
    sQ5 = "GetRoleCredentialsResponse",
    tQ5 = "InvalidRequestException",
    eQ5 = "Logout",
    AU5 = "ListAccounts",
    KU5 = "ListAccountsRequest",
    qU5 = "ListAccountRolesRequest",
    YU5 = "ListAccountRolesResponse",
    zU5 = "ListAccountsResponse",
    wU5 = "ListAccountRoles",
    HU5 = "LogoutRequest",
    JU5 = "RoleCredentials",
    OU5 = "RoleInfo",
    XU5 = "RoleListType",
    $U5 = "ResourceNotFoundException",
    _U5 = "SecretAccessKeyType",
    GU5 = "SessionTokenType",
    ZU5 = "TooManyRequestsException",
    WU5 = "UnauthorizedException",
    E81 = "accountId",
    DU5 = "accessKeyId",
    jU5 = "accountList",
    MU5 = "accountName",
    k81 = "accessToken",
    Qn8 = "account_id",
    C81 = "client",
    L81 = "error",
    PU5 = "emailAddress",
    VU5 = "expiration",
    R81 = "http",
    y81 = "httpError",
    I81 = "httpHeader",
    w8A = "httpQuery",
    S81 = "message",
    Un8 = "maxResults",
    pn8 = "max_result",
    h81 = "nextToken",
    dn8 = "next_token",
    fU5 = "roleCredentials",
    NU5 = "roleList",
    cn8 = "roleName",
    TU5 = "role_name",
    ln8 = "smithy.ts.sdk.synthetic.com.amazonaws.sso",
    vU5 = "secretAccessKey",
    EU5 = "sessionToken",
    b81 = "x-amz-sso_bearer_token",
    Zw = "com.amazonaws.sso",
    x81 = [0, Zw, rQ5, 8, 0],
    kU5 = [0, Zw, _U5, 8, 0],
    CU5 = [0, Zw, GU5, 8, 0],
    LU5 = [3, Zw, iQ5, 0, [E81, MU5, PU5], [0, 0, 0]],
    RU5 = [3, Zw, aQ5, 0, [cn8, E81, k81], [[0, {
      [w8A]: TU5
    }], [0, {
      [w8A]: Qn8
    }], [() => x81, {
      [I81]: b81
    }]]],
    yU5 = [3, Zw, sQ5, 0, [fU5], [[() => mU5, 0]]],
    IU5 = [-3, Zw, tQ5, {
      [L81]: C81,
      [y81]: 400
    }, [S81], [0]];
  SOA.TypeRegistry.for(Zw).registerError(IU5, Bn8);
  var SU5 = [3, Zw, qU5, 0, [h81, Un8, k81, E81], [[0, {
      [w8A]: dn8
    }], [1, {
      [w8A]: pn8
    }], [() => x81, {
      [I81]: b81
    }], [0, {
      [w8A]: Qn8
    }]]],
    hU5 = [3, Zw, YU5, 0, [h81, NU5], [0, () => cU5]],
    bU5 = [3, Zw, KU5, 0, [h81, Un8, k81], [[0, {
      [w8A]: dn8
    }], [1, {
      [w8A]: pn8
    }], [() => x81, {
      [I81]: b81
    }]]],
    xU5 = [3, Zw, zU5, 0, [h81, jU5], [0, () => dU5]],
    uU5 = [3, Zw, HU5, 0, [k81], [[() => x81, {
      [I81]: b81
    }]]],
    BU5 = [-3, Zw, $U5, {
      [L81]: C81,
      [y81]: 404
    }, [S81], [0]];
  SOA.TypeRegistry.for(Zw).registerError(BU5, mn8);
  var mU5 = [3, Zw, JU5, 0, [DU5, vU5, EU5, VU5], [0, [() => kU5, 0], [() => CU5, 0], 1]],
    gU5 = [3, Zw, OU5, 0, [cn8, E81], [0, 0]],
    FU5 = [-3, Zw, ZU5, {
      [L81]: C81,
      [y81]: 429
    }, [S81], [0]];
  SOA.TypeRegistry.for(Zw).registerError(FU5, gn8);
  var QU5 = [-3, Zw, WU5, {
    [L81]: C81,
    [y81]: 401
  }, [S81], [0]];
  SOA.TypeRegistry.for(Zw).registerError(QU5, Fn8);
  var UU5 = "unit",
    pU5 = [-3, ln8, "SSOServiceException", 0, [], []];
  SOA.TypeRegistry.for(ln8).registerError(pU5, hOA);
  var dU5 = [1, Zw, nQ5, 0, () => LU5],
    cU5 = [1, Zw, XU5, 0, () => gU5],
    lU5 = [9, Zw, oQ5, {
      [R81]: ["GET", "/federation/credentials", 200]
    }, () => RU5, () => yU5],
    iU5 = [9, Zw, wU5, {
      [R81]: ["GET", "/assignment/roles", 200]
    }, () => SU5, () => hU5],
    nU5 = [9, Zw, AU5, {
      [R81]: ["GET", "/assignment/accounts", 200]
    }, () => bU5, () => xU5],
    rU5 = [9, Zw, eQ5, {
      [R81]: ["POST", "/logout", 200]
    }, () => uU5, () => UU5];
  class ya1 extends Hy.Command.classBuilder().ep(v81).m(function (A, K, q, Y) {
    return [_LA.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(lU5).build() {}
  class u81 extends Hy.Command.classBuilder().ep(v81).m(function (A, K, q, Y) {
    return [_LA.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").sc(iU5).build() {}
  class B81 extends Hy.Command.classBuilder().ep(v81).m(function (A, K, q, Y) {
    return [_LA.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").sc(nU5).build() {}
  class Ia1 extends Hy.Command.classBuilder().ep(v81).m(function (A, K, q, Y) {
    return [_LA.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").sc(rU5).build() {}
  var oU5 = {
    GetRoleCredentialsCommand: ya1,
    ListAccountRolesCommand: u81,
    ListAccountsCommand: B81,
    LogoutCommand: Ia1
  };
  class Sa1 extends GLA {}
  Hy.createAggregatedClient(oU5, Sa1);
  var aU5 = $LA.createPaginator(GLA, u81, "nextToken", "nextToken", "maxResults"),
    sU5 = $LA.createPaginator(GLA, B81, "nextToken", "nextToken", "maxResults");
  Object.defineProperty(ha1, "$Command", {
    enumerable: !0,
    get: function () {
      return Hy.Command;
    }
  });
  Object.defineProperty(ha1, "__Client", {
    enumerable: !0,
    get: function () {
      return Hy.Client;
    }
  });
  ha1.GetRoleCredentialsCommand = ya1;
  ha1.InvalidRequestException = Bn8;
  ha1.ListAccountRolesCommand = u81;
  ha1.ListAccountsCommand = B81;
  ha1.LogoutCommand = Ia1;
  ha1.ResourceNotFoundException = mn8;
  ha1.SSO = Sa1;
  ha1.SSOClient = GLA;
  ha1.SSOServiceException = hOA;
  ha1.TooManyRequestsException = gn8;
  ha1.UnauthorizedException = Fn8;
  ha1.paginateListAccountRoles = aU5;
  ha1.paginateListAccounts = sU5;
});

// Register to shared state
__$.in8 = in8;
