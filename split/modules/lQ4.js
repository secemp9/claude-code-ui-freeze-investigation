// Module: lQ4
// Dependencies: BF, mF, gF, Ub, l0, Gz, DJ, rF, qy, kZ
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lQ4 = v(bz6 => {
  var $Q4 = __$.BF(),
    gx9 = __$.mF(),
    Fx9 = __$.gF(),
    _Q4 = __$.Ub(),
    Qx9 = __$.l0(),
    u21 = __$.Gz(),
    xT = __$.DJ(),
    Ux9 = __$.rF(),
    vJ = __$.qy(),
    GQ4 = __$.kZ(),
    F2 = __$.gSA(),
    ZQ4 = __$.Az6(),
    px9 = __$.wQ4(),
    WQ4 = __$.Yy(),
    DQ4 = __$.XQ4(),
    dx9 = A => {
      return Object.assign(A, {
        useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
        useFipsEndpoint: A.useFipsEndpoint ?? !1,
        defaultSigningName: "cognito-identity"
      });
    },
    ZO = {
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
    cx9 = A => {
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
    lx9 = A => {
      return {
        httpAuthSchemes: A.httpAuthSchemes(),
        httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
        credentials: A.credentials()
      };
    },
    ix9 = (A, K) => {
      let q = Object.assign(WQ4.getAwsRegionExtensionConfiguration(A), F2.getDefaultExtensionConfiguration(A), DQ4.getHttpHandlerExtensionConfiguration(A), cx9(A));
      return K.forEach(Y => Y.configure(q)), Object.assign(A, WQ4.resolveAwsRegionExtensionConfiguration(q), F2.resolveDefaultRuntimeConfig(q), DQ4.resolveHttpHandlerRuntimeConfig(q), lx9(q));
    };
  class m21 extends F2.Client {
    config;
    constructor(...[A]) {
      let K = px9.getRuntimeConfig(A || {});
      super(K);
      this.initConfig = K;
      let q = dx9(K),
        Y = _Q4.resolveUserAgentConfig(q),
        z = GQ4.resolveRetryConfig(Y),
        w = Qx9.resolveRegionConfig(z),
        H = $Q4.resolveHostHeaderConfig(w),
        J = vJ.resolveEndpointConfig(H),
        O = ZQ4.resolveHttpAuthSchemeConfig(J),
        X = ix9(O, A?.extensions || []);
      this.config = X, this.middlewareStack.use(xT.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(_Q4.getUserAgentPlugin(this.config)), this.middlewareStack.use(GQ4.getRetryPlugin(this.config)), this.middlewareStack.use(Ux9.getContentLengthPlugin(this.config)), this.middlewareStack.use($Q4.getHostHeaderPlugin(this.config)), this.middlewareStack.use(gx9.getLoggerPlugin(this.config)), this.middlewareStack.use(Fx9.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(u21.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: ZQ4.defaultCognitoIdentityHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async $ => new u21.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": $.credentials
        })
      })), this.middlewareStack.use(u21.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var uT = class A extends F2.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    jQ4 = class A extends uT {
      name = "InternalErrorException";
      $fault = "server";
      constructor(K) {
        super({
          name: "InternalErrorException",
          $fault: "server",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    MQ4 = class A extends uT {
      name = "InvalidParameterException";
      $fault = "client";
      constructor(K) {
        super({
          name: "InvalidParameterException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    PQ4 = class A extends uT {
      name = "LimitExceededException";
      $fault = "client";
      constructor(K) {
        super({
          name: "LimitExceededException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    VQ4 = class A extends uT {
      name = "NotAuthorizedException";
      $fault = "client";
      constructor(K) {
        super({
          name: "NotAuthorizedException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    fQ4 = class A extends uT {
      name = "ResourceConflictException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ResourceConflictException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    NQ4 = class A extends uT {
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
    TQ4 = class A extends uT {
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
    vQ4 = class A extends uT {
      name = "ExternalServiceException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ExternalServiceException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    EQ4 = class A extends uT {
      name = "InvalidIdentityPoolConfigurationException";
      $fault = "client";
      constructor(K) {
        super({
          name: "InvalidIdentityPoolConfigurationException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    kQ4 = class A extends uT {
      name = "DeveloperUserAlreadyRegisteredException";
      $fault = "client";
      constructor(K) {
        super({
          name: "DeveloperUserAlreadyRegisteredException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    CQ4 = class A extends uT {
      name = "ConcurrentModificationException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ConcurrentModificationException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    LQ4 = "AllowClassicFlow",
    nx9 = "AccountId",
    rx9 = "AccessKeyId",
    ox9 = "AmbiguousRoleResolution",
    RQ4 = "AllowUnauthenticatedIdentities",
    yQ4 = "Credentials",
    ax9 = "CreationDate",
    sx9 = "ClientId",
    tx9 = "CognitoIdentityProvider",
    ex9 = "CreateIdentityPoolInput",
    Au9 = "CognitoIdentityProviderList",
    IQ4 = "CognitoIdentityProviders",
    Ku9 = "CreateIdentityPool",
    qu9 = "ConcurrentModificationException",
    Yu9 = "CustomRoleArn",
    zu9 = "Claim",
    wu9 = "DeleteIdentities",
    Hu9 = "DeleteIdentitiesInput",
    Ju9 = "DescribeIdentityInput",
    Ou9 = "DeleteIdentityPool",
    Xu9 = "DeleteIdentityPoolInput",
    $u9 = "DescribeIdentityPoolInput",
    _u9 = "DescribeIdentityPool",
    Gu9 = "DeleteIdentitiesResponse",
    Zu9 = "DescribeIdentity",
    g21 = "DeveloperProviderName",
    Wu9 = "DeveloperUserAlreadyRegisteredException",
    SQ4 = "DeveloperUserIdentifier",
    Du9 = "DeveloperUserIdentifierList",
    ju9 = "DestinationUserIdentifier",
    Mu9 = "Expiration",
    Pu9 = "ErrorCode",
    Vu9 = "ExternalServiceException",
    fu9 = "GetCredentialsForIdentity",
    Nu9 = "GetCredentialsForIdentityInput",
    Tu9 = "GetCredentialsForIdentityResponse",
    vu9 = "GetId",
    Eu9 = "GetIdInput",
    ku9 = "GetIdentityPoolRoles",
    Cu9 = "GetIdentityPoolRolesInput",
    Lu9 = "GetIdentityPoolRolesResponse",
    Ru9 = "GetIdResponse",
    yu9 = "GetOpenIdToken",
    Iu9 = "GetOpenIdTokenForDeveloperIdentity",
    Su9 = "GetOpenIdTokenForDeveloperIdentityInput",
    hu9 = "GetOpenIdTokenForDeveloperIdentityResponse",
    bu9 = "GetOpenIdTokenInput",
    xu9 = "GetOpenIdTokenResponse",
    uu9 = "GetPrincipalTagAttributeMap",
    Bu9 = "GetPrincipalTagAttributeMapInput",
    mu9 = "GetPrincipalTagAttributeMapResponse",
    gu9 = "HideDisabled",
    Fu9 = "Identities",
    Qu9 = "IdentityDescription",
    Uu9 = "InternalErrorException",
    MM = "IdentityId",
    pu9 = "InvalidIdentityPoolConfigurationException",
    du9 = "IdentityIdsToDelete",
    cu9 = "IdentitiesList",
    lu9 = "IdentityPool",
    iu9 = "InvalidParameterException",
    DG = "IdentityPoolId",
    nu9 = "IdentityPoolsList",
    Hz6 = "IdentityPoolName",
    F21 = "IdentityProviderName",
    ru9 = "IdentityPoolShortDescription",
    ou9 = "IdentityProviderToken",
    hQ4 = "IdentityPoolTags",
    au9 = "IdentityPools",
    r$A = "Logins",
    su9 = "LookupDeveloperIdentity",
    tu9 = "LookupDeveloperIdentityInput",
    eu9 = "LookupDeveloperIdentityResponse",
    AB9 = "LimitExceededException",
    KB9 = "ListIdentities",
    qB9 = "ListIdentitiesInput",
    YB9 = "ListIdentityPools",
    zB9 = "ListIdentityPoolsInput",
    wB9 = "ListIdentityPoolsResponse",
    HB9 = "ListIdentitiesResponse",
    JB9 = "LoginsMap",
    OB9 = "LastModifiedDate",
    XB9 = "ListTagsForResource",
    $B9 = "ListTagsForResourceInput",
    _B9 = "ListTagsForResourceResponse",
    GB9 = "LoginsToRemove",
    ZB9 = "MergeDeveloperIdentities",
    WB9 = "MergeDeveloperIdentitiesInput",
    DB9 = "MergeDeveloperIdentitiesResponse",
    Jz6 = "MaxResults",
    jB9 = "MappingRulesList",
    MB9 = "MappingRule",
    PB9 = "MatchType",
    VB9 = "NotAuthorizedException",
    o$A = "NextToken",
    bQ4 = "OpenIdConnectProviderARNs",
    fB9 = "OIDCToken",
    NB9 = "ProviderName",
    Q21 = "PrincipalTags",
    xQ4 = "Roles",
    Oz6 = "ResourceArn",
    TB9 = "RoleARN",
    vB9 = "RulesConfiguration",
    EB9 = "ResourceConflictException",
    kB9 = "RulesConfigurationType",
    uQ4 = "RoleMappings",
    CB9 = "RoleMappingMap",
    LB9 = "RoleMapping",
    RB9 = "ResourceNotFoundException",
    yB9 = "Rules",
    IB9 = "SetIdentityPoolRoles",
    SB9 = "SetIdentityPoolRolesInput",
    hB9 = "SecretKey",
    bB9 = "SecretKeyString",
    BQ4 = "SupportedLoginProviders",
    mQ4 = "SamlProviderARNs",
    xB9 = "SetPrincipalTagAttributeMap",
    uB9 = "SetPrincipalTagAttributeMapInput",
    BB9 = "SetPrincipalTagAttributeMapResponse",
    mB9 = "ServerSideTokenCheck",
    gB9 = "SessionToken",
    FB9 = "SourceUserIdentifier",
    gQ4 = "Token",
    QB9 = "TokenDuration",
    UB9 = "TagKeys",
    pB9 = "TooManyRequestsException",
    dB9 = "TagResource",
    cB9 = "TagResourceInput",
    lB9 = "TagResourceResponse",
    FQ4 = "Tags",
    iB9 = "Type",
    Xz6 = "UseDefaults",
    nB9 = "UnlinkDeveloperIdentity",
    rB9 = "UnlinkDeveloperIdentityInput",
    oB9 = "UnlinkIdentity",
    aB9 = "UnprocessedIdentityIds",
    sB9 = "UnprocessedIdentityIdList",
    tB9 = "UnlinkIdentityInput",
    eB9 = "UnprocessedIdentityId",
    Am9 = "UpdateIdentityPool",
    Km9 = "UntagResource",
    qm9 = "UntagResourceInput",
    Ym9 = "UntagResourceResponse",
    zm9 = "Value",
    wu = "client",
    dy = "error",
    Hu = "httpError",
    cy = "message",
    wm9 = "server",
    QQ4 = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity",
    F8 = "com.amazonaws.cognitoidentity",
    Hm9 = [0, F8, ou9, 8, 0],
    UQ4 = [0, F8, fB9, 8, 0],
    Jm9 = [0, F8, bB9, 8, 0],
    Om9 = [3, F8, tx9, 0, [NB9, sx9, mB9], [0, 0, 2]],
    Xm9 = [-3, F8, qu9, {
      [dy]: wu,
      [Hu]: 400
    }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(Xm9, CQ4);
  var $m9 = [3, F8, ex9, 0, [Hz6, RQ4, LQ4, BQ4, g21, bQ4, IQ4, mQ4, hQ4], [0, 2, 2, 128, 0, 64, () => dQ4, 64, 128]],
    _m9 = [3, F8, yQ4, 0, [rx9, hB9, gB9, Mu9], [0, [() => Jm9, 0], 0, 4]],
    Gm9 = [3, F8, Hu9, 0, [du9], [64]],
    Zm9 = [3, F8, Gu9, 0, [aB9], [() => Zg9]],
    Wm9 = [3, F8, Xu9, 0, [DG], [0]],
    Dm9 = [3, F8, Ju9, 0, [MM], [0]],
    jm9 = [3, F8, $u9, 0, [DG], [0]],
    Mm9 = [-3, F8, Wu9, {
      [dy]: wu,
      [Hu]: 400
    }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(Mm9, kQ4);
  var Pm9 = [-3, F8, Vu9, {
    [dy]: wu,
    [Hu]: 400
  }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(Pm9, vQ4);
  var Vm9 = [3, F8, Nu9, 0, [MM, r$A, Yu9], [0, [() => dSA, 0], 0]],
    fm9 = [3, F8, Tu9, 0, [MM, yQ4], [0, [() => _m9, 0]]],
    Nm9 = [3, F8, Cu9, 0, [DG], [0]],
    Tm9 = [3, F8, Lu9, 0, [DG, xQ4, uQ4], [0, 128, () => cQ4]],
    vm9 = [3, F8, Eu9, 0, [nx9, DG, r$A], [0, 0, [() => dSA, 0]]],
    Em9 = [3, F8, Ru9, 0, [MM], [0]],
    km9 = [3, F8, Su9, 0, [DG, MM, r$A, Q21, QB9], [0, 0, [() => dSA, 0], 128, 1]],
    Cm9 = [3, F8, hu9, 0, [MM, gQ4], [0, [() => UQ4, 0]]],
    Lm9 = [3, F8, bu9, 0, [MM, r$A], [0, [() => dSA, 0]]],
    Rm9 = [3, F8, xu9, 0, [MM, gQ4], [0, [() => UQ4, 0]]],
    ym9 = [3, F8, Bu9, 0, [DG, F21], [0, 0]],
    Im9 = [3, F8, mu9, 0, [DG, F21, Xz6, Q21], [0, 0, 2, 128]],
    pQ4 = [3, F8, Qu9, 0, [MM, r$A, ax9, OB9], [0, 64, 4, 4]],
    B21 = [3, F8, lu9, 0, [DG, Hz6, RQ4, LQ4, BQ4, g21, bQ4, IQ4, mQ4, hQ4], [0, 0, 2, 2, 128, 0, 64, () => dQ4, 64, 128]],
    Sm9 = [3, F8, ru9, 0, [DG, Hz6], [0, 0]],
    hm9 = [-3, F8, Uu9, {
      [dy]: wm9
    }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(hm9, jQ4);
  var bm9 = [-3, F8, pu9, {
    [dy]: wu,
    [Hu]: 400
  }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(bm9, EQ4);
  var xm9 = [-3, F8, iu9, {
    [dy]: wu,
    [Hu]: 400
  }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(xm9, MQ4);
  var um9 = [-3, F8, AB9, {
    [dy]: wu,
    [Hu]: 400
  }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(um9, PQ4);
  var Bm9 = [3, F8, qB9, 0, [DG, Jz6, o$A, gu9], [0, 1, 0, 2]],
    mm9 = [3, F8, HB9, 0, [DG, Fu9, o$A], [0, () => $g9, 0]],
    gm9 = [3, F8, zB9, 0, [Jz6, o$A], [1, 0]],
    Fm9 = [3, F8, wB9, 0, [au9, o$A], [() => _g9, 0]],
    Qm9 = [3, F8, $B9, 0, [Oz6], [0]],
    Um9 = [3, F8, _B9, 0, [FQ4], [128]],
    pm9 = [3, F8, tu9, 0, [DG, MM, SQ4, Jz6, o$A], [0, 0, 0, 1, 0]],
    dm9 = [3, F8, eu9, 0, [MM, Du9, o$A], [0, 64, 0]],
    cm9 = [3, F8, MB9, 0, [zu9, PB9, zm9, TB9], [0, 0, 0, 0]],
    lm9 = [3, F8, WB9, 0, [FB9, ju9, g21, DG], [0, 0, 0, 0]],
    im9 = [3, F8, DB9, 0, [MM], [0]],
    nm9 = [-3, F8, VB9, {
      [dy]: wu,
      [Hu]: 403
    }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(nm9, VQ4);
  var rm9 = [-3, F8, EB9, {
    [dy]: wu,
    [Hu]: 409
  }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(rm9, fQ4);
  var om9 = [-3, F8, RB9, {
    [dy]: wu,
    [Hu]: 404
  }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(om9, TQ4);
  var am9 = [3, F8, LB9, 0, [iB9, ox9, vB9], [0, 0, () => sm9]],
    sm9 = [3, F8, kB9, 0, [yB9], [() => Gg9]],
    tm9 = [3, F8, SB9, 0, [DG, xQ4, uQ4], [0, 128, () => cQ4]],
    em9 = [3, F8, uB9, 0, [DG, F21, Xz6, Q21], [0, 0, 2, 128]],
    Ag9 = [3, F8, BB9, 0, [DG, F21, Xz6, Q21], [0, 0, 2, 128]],
    Kg9 = [3, F8, cB9, 0, [Oz6, FQ4], [0, 128]],
    qg9 = [3, F8, lB9, 0, [], []],
    Yg9 = [-3, F8, pB9, {
      [dy]: wu,
      [Hu]: 429
    }, [cy], [0]];
  xT.TypeRegistry.for(F8).registerError(Yg9, NQ4);
  var zg9 = [3, F8, rB9, 0, [MM, DG, g21, SQ4], [0, 0, 0, 0]],
    wg9 = [3, F8, tB9, 0, [MM, r$A, GB9], [0, [() => dSA, 0], 64]],
    Hg9 = [3, F8, eB9, 0, [MM, Pu9], [0, 0]],
    Jg9 = [3, F8, qm9, 0, [Oz6, UB9], [0, 64]],
    Og9 = [3, F8, Ym9, 0, [], []],
    U21 = "unit",
    Xg9 = [-3, QQ4, "CognitoIdentityServiceException", 0, [], []];
  xT.TypeRegistry.for(QQ4).registerError(Xg9, uT);
  var dQ4 = [1, F8, Au9, 0, () => Om9],
    $g9 = [1, F8, cu9, 0, () => pQ4],
    _g9 = [1, F8, nu9, 0, () => Sm9],
    Gg9 = [1, F8, jB9, 0, () => cm9],
    Zg9 = [1, F8, sB9, 0, () => Hg9],
    dSA = [2, F8, JB9, 0, [0, 0], [() => Hm9, 0]],
    cQ4 = [2, F8, CB9, 0, 0, () => am9],
    Wg9 = [9, F8, Ku9, 0, () => $m9, () => B21],
    Dg9 = [9, F8, wu9, 0, () => Gm9, () => Zm9],
    jg9 = [9, F8, Ou9, 0, () => Wm9, () => U21],
    Mg9 = [9, F8, Zu9, 0, () => Dm9, () => pQ4],
    Pg9 = [9, F8, _u9, 0, () => jm9, () => B21],
    Vg9 = [9, F8, fu9, 0, () => Vm9, () => fm9],
    fg9 = [9, F8, vu9, 0, () => vm9, () => Em9],
    Ng9 = [9, F8, ku9, 0, () => Nm9, () => Tm9],
    Tg9 = [9, F8, yu9, 0, () => Lm9, () => Rm9],
    vg9 = [9, F8, Iu9, 0, () => km9, () => Cm9],
    Eg9 = [9, F8, uu9, 0, () => ym9, () => Im9],
    kg9 = [9, F8, KB9, 0, () => Bm9, () => mm9],
    Cg9 = [9, F8, YB9, 0, () => gm9, () => Fm9],
    Lg9 = [9, F8, XB9, 0, () => Qm9, () => Um9],
    Rg9 = [9, F8, su9, 0, () => pm9, () => dm9],
    yg9 = [9, F8, ZB9, 0, () => lm9, () => im9],
    Ig9 = [9, F8, IB9, 0, () => tm9, () => U21],
    Sg9 = [9, F8, xB9, 0, () => em9, () => Ag9],
    hg9 = [9, F8, dB9, 0, () => Kg9, () => qg9],
    bg9 = [9, F8, nB9, 0, () => zg9, () => U21],
    xg9 = [9, F8, oB9, 0, () => wg9, () => U21],
    ug9 = [9, F8, Km9, 0, () => Jg9, () => Og9],
    Bg9 = [9, F8, Am9, 0, () => B21, () => B21];
  class $z6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").sc(Wg9).build() {}
  class _z6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").sc(Dg9).build() {}
  class Gz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").sc(jg9).build() {}
  class Zz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").sc(Mg9).build() {}
  class Wz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").sc(Pg9).build() {}
  class Dz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").sc(Vg9).build() {}
  class jz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").sc(fg9).build() {}
  class Mz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").sc(Ng9).build() {}
  class Pz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").sc(Tg9).build() {}
  class Vz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").sc(vg9).build() {}
  class fz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").sc(Eg9).build() {}
  class Nz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").sc(kg9).build() {}
  class p21 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").sc(Cg9).build() {}
  class Tz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").sc(Lg9).build() {}
  class vz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").sc(Rg9).build() {}
  class Ez6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").sc(yg9).build() {}
  class kz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").sc(Ig9).build() {}
  class Cz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").sc(Sg9).build() {}
  class Lz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").sc(hg9).build() {}
  class Rz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").sc(bg9).build() {}
  class yz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").sc(xg9).build() {}
  class Iz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").sc(ug9).build() {}
  class Sz6 extends F2.Command.classBuilder().ep(ZO).m(function (A, K, q, Y) {
    return [vJ.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").sc(Bg9).build() {}
  var mg9 = {
    CreateIdentityPoolCommand: $z6,
    DeleteIdentitiesCommand: _z6,
    DeleteIdentityPoolCommand: Gz6,
    DescribeIdentityCommand: Zz6,
    DescribeIdentityPoolCommand: Wz6,
    GetCredentialsForIdentityCommand: Dz6,
    GetIdCommand: jz6,
    GetIdentityPoolRolesCommand: Mz6,
    GetOpenIdTokenCommand: Pz6,
    GetOpenIdTokenForDeveloperIdentityCommand: Vz6,
    GetPrincipalTagAttributeMapCommand: fz6,
    ListIdentitiesCommand: Nz6,
    ListIdentityPoolsCommand: p21,
    ListTagsForResourceCommand: Tz6,
    LookupDeveloperIdentityCommand: vz6,
    MergeDeveloperIdentitiesCommand: Ez6,
    SetIdentityPoolRolesCommand: kz6,
    SetPrincipalTagAttributeMapCommand: Cz6,
    TagResourceCommand: Lz6,
    UnlinkDeveloperIdentityCommand: Rz6,
    UnlinkIdentityCommand: yz6,
    UntagResourceCommand: Iz6,
    UpdateIdentityPoolCommand: Sz6
  };
  class hz6 extends m21 {}
  F2.createAggregatedClient(mg9, hz6);
  var gg9 = u21.createPaginator(m21, p21, "NextToken", "NextToken", "MaxResults"),
    Fg9 = {
      AUTHENTICATED_ROLE: "AuthenticatedRole",
      DENY: "Deny"
    },
    Qg9 = {
      ACCESS_DENIED: "AccessDenied",
      INTERNAL_SERVER_ERROR: "InternalServerError"
    },
    Ug9 = {
      CONTAINS: "Contains",
      EQUALS: "Equals",
      NOT_EQUAL: "NotEqual",
      STARTS_WITH: "StartsWith"
    },
    pg9 = {
      RULES: "Rules",
      TOKEN: "Token"
    };
  Object.defineProperty(bz6, "$Command", {
    enumerable: !0,
    get: function () {
      return F2.Command;
    }
  });
  Object.defineProperty(bz6, "__Client", {
    enumerable: !0,
    get: function () {
      return F2.Client;
    }
  });
  bz6.AmbiguousRoleResolutionType = Fg9;
  bz6.CognitoIdentity = hz6;
  bz6.CognitoIdentityClient = m21;
  bz6.CognitoIdentityServiceException = uT;
  bz6.ConcurrentModificationException = CQ4;
  bz6.CreateIdentityPoolCommand = $z6;
  bz6.DeleteIdentitiesCommand = _z6;
  bz6.DeleteIdentityPoolCommand = Gz6;
  bz6.DescribeIdentityCommand = Zz6;
  bz6.DescribeIdentityPoolCommand = Wz6;
  bz6.DeveloperUserAlreadyRegisteredException = kQ4;
  bz6.ErrorCode = Qg9;
  bz6.ExternalServiceException = vQ4;
  bz6.GetCredentialsForIdentityCommand = Dz6;
  bz6.GetIdCommand = jz6;
  bz6.GetIdentityPoolRolesCommand = Mz6;
  bz6.GetOpenIdTokenCommand = Pz6;
  bz6.GetOpenIdTokenForDeveloperIdentityCommand = Vz6;
  bz6.GetPrincipalTagAttributeMapCommand = fz6;
  bz6.InternalErrorException = jQ4;
  bz6.InvalidIdentityPoolConfigurationException = EQ4;
  bz6.InvalidParameterException = MQ4;
  bz6.LimitExceededException = PQ4;
  bz6.ListIdentitiesCommand = Nz6;
  bz6.ListIdentityPoolsCommand = p21;
  bz6.ListTagsForResourceCommand = Tz6;
  bz6.LookupDeveloperIdentityCommand = vz6;
  bz6.MappingRuleMatchType = Ug9;
  bz6.MergeDeveloperIdentitiesCommand = Ez6;
  bz6.NotAuthorizedException = VQ4;
  bz6.ResourceConflictException = fQ4;
  bz6.ResourceNotFoundException = TQ4;
  bz6.RoleMappingType = pg9;
  bz6.SetIdentityPoolRolesCommand = kz6;
  bz6.SetPrincipalTagAttributeMapCommand = Cz6;
  bz6.TagResourceCommand = Lz6;
  bz6.TooManyRequestsException = NQ4;
  bz6.UnlinkDeveloperIdentityCommand = Rz6;
  bz6.UnlinkIdentityCommand = yz6;
  bz6.UntagResourceCommand = Iz6;
  bz6.UpdateIdentityPoolCommand = Sz6;
  bz6.paginateListIdentityPools = gg9;
});

// Register to shared state
__$.lQ4 = lQ4;
