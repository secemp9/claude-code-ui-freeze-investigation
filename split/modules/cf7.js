// Module: cf7
// Dependencies: zV6, tqA, qy, wV6, DJ, fV, Yy

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cf7 = v(WG1 => {
  var TmA = __$.zV6(),
    vf = __$.tqA(),
    rI = __$.qy(),
    oI = __$.wV6(),
    Av = __$.DJ(),
    DV6 = __$.fV(),
    _hY = __$.Yy(),
    Ef = class A extends vf.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    jf7 = class A extends Ef {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Mf7 = class A extends Ef {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(K) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Pf7 = class A extends Ef {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(K) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Vf7 = class A extends Ef {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(K) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    ff7 = class A extends Ef {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(K) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Nf7 = class A extends Ef {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(K) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Tf7 = class A extends Ef {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(K) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    vf7 = class A extends Ef {
      name = "InvalidAuthorizationMessageException";
      $fault = "client";
      constructor(K) {
        super({
          name: "InvalidAuthorizationMessageException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Ef7 = class A extends Ef {
      name = "ExpiredTradeInTokenException";
      $fault = "client";
      constructor(K) {
        super({
          name: "ExpiredTradeInTokenException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    kf7 = class A extends Ef {
      name = "JWTPayloadSizeExceededException";
      $fault = "client";
      constructor(K) {
        super({
          name: "JWTPayloadSizeExceededException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Cf7 = class A extends Ef {
      name = "OutboundWebIdentityFederationDisabledException";
      $fault = "client";
      constructor(K) {
        super({
          name: "OutboundWebIdentityFederationDisabledException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Lf7 = class A extends Ef {
      name = "SessionDurationEscalationException";
      $fault = "client";
      constructor(K) {
        super({
          name: "SessionDurationEscalationException",
          $fault: "client",
          ...K
        });
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    jV6 = "Arn",
    Rf7 = "AccessKeyId",
    GhY = "AssumedPrincipal",
    ZhY = "AssumeRole",
    WhY = "AssumedRoleId",
    DhY = "AssumeRoleRequest",
    jhY = "AssumeRoleResponse",
    MhY = "AssumeRootRequest",
    PhY = "AssumeRootResponse",
    DG1 = "AssumedRoleUser",
    VhY = "AssumeRoleWithSAML",
    fhY = "AssumeRoleWithSAMLRequest",
    NhY = "AssumeRoleWithSAMLResponse",
    ThY = "AssumeRoleWithWebIdentity",
    vhY = "AssumeRoleWithWebIdentityRequest",
    EhY = "AssumeRoleWithWebIdentityResponse",
    khY = "AssumeRoot",
    yf7 = "Account",
    MV6 = "Audience",
    Js = "Credentials",
    ChY = "ContextAssertion",
    LhY = "DecodeAuthorizationMessage",
    RhY = "DecodeAuthorizationMessageRequest",
    yhY = "DecodeAuthorizationMessageResponse",
    IhY = "DecodedMessage",
    A5A = "DurationSeconds",
    If7 = "Expiration",
    ShY = "ExternalId",
    hhY = "EncodedMessage",
    bhY = "ExpiredTokenException",
    xhY = "ExpiredTradeInTokenException",
    Sf7 = "FederatedUser",
    uhY = "FederatedUserId",
    BhY = "GetAccessKeyInfo",
    mhY = "GetAccessKeyInfoRequest",
    ghY = "GetAccessKeyInfoResponse",
    FhY = "GetCallerIdentity",
    QhY = "GetCallerIdentityRequest",
    UhY = "GetCallerIdentityResponse",
    phY = "GetDelegatedAccessToken",
    dhY = "GetDelegatedAccessTokenRequest",
    chY = "GetDelegatedAccessTokenResponse",
    lhY = "GetFederationToken",
    ihY = "GetFederationTokenRequest",
    nhY = "GetFederationTokenResponse",
    rhY = "GetSessionToken",
    ohY = "GetSessionTokenRequest",
    ahY = "GetSessionTokenResponse",
    shY = "GetWebIdentityToken",
    thY = "GetWebIdentityTokenRequest",
    ehY = "GetWebIdentityTokenResponse",
    AbY = "Issuer",
    KbY = "InvalidAuthorizationMessageException",
    qbY = "IDPCommunicationErrorException",
    YbY = "IDPRejectedClaimException",
    zbY = "InvalidIdentityTokenException",
    wbY = "JWTPayloadSizeExceededException",
    HbY = "Key",
    JbY = "MalformedPolicyDocumentException",
    ObY = "Name",
    XbY = "NameQualifier",
    $bY = "OutboundWebIdentityFederationDisabledException",
    jG1 = "Policy",
    MG1 = "PolicyArns",
    _bY = "PrincipalArn",
    GbY = "ProviderArn",
    ZbY = "ProvidedContexts",
    WbY = "ProvidedContextsListType",
    DbY = "ProvidedContext",
    jbY = "PolicyDescriptorType",
    MbY = "ProviderId",
    vmA = "PackedPolicySize",
    PbY = "PackedPolicyTooLargeException",
    VbY = "Provider",
    PV6 = "RoleArn",
    fbY = "RegionDisabledException",
    hf7 = "RoleSessionName",
    NbY = "Subject",
    TbY = "SigningAlgorithm",
    vbY = "SecretAccessKey",
    EbY = "SAMLAssertion",
    kbY = "SAMLAssertionType",
    CbY = "SessionDurationEscalationException",
    LbY = "SubjectFromWebIdentityToken",
    EmA = "SourceIdentity",
    bf7 = "SerialNumber",
    RbY = "SubjectType",
    ybY = "SessionToken",
    VV6 = "Tags",
    xf7 = "TokenCode",
    IbY = "TradeInToken",
    SbY = "TargetPrincipal",
    hbY = "TaskPolicyArn",
    bbY = "TransitiveTagKeys",
    xbY = "Tag",
    ubY = "UserId",
    BbY = "Value",
    uf7 = "WebIdentityToken",
    mbY = "arn",
    gbY = "accessKeySecretType",
    aC = "awsQueryError",
    sC = "client",
    FbY = "clientTokenType",
    tC = "error",
    eC = "httpError",
    AL = "message",
    QbY = "policyDescriptorListType",
    Bf7 = "smithy.ts.sdk.synthetic.com.amazonaws.sts",
    UbY = "tradeInTokenType",
    pbY = "tagListType",
    dbY = "webIdentityTokenType",
    Z7 = "com.amazonaws.sts",
    cbY = [0, Z7, gbY, 8, 0],
    lbY = [0, Z7, FbY, 8, 0],
    ibY = [0, Z7, kbY, 8, 0],
    nbY = [0, Z7, UbY, 8, 0],
    rbY = [0, Z7, dbY, 8, 0],
    fV6 = [3, Z7, DG1, 0, [WhY, jV6], [0, 0]],
    obY = [3, Z7, DhY, 0, [PV6, hf7, MG1, jG1, A5A, VV6, bbY, ShY, bf7, xf7, EmA, ZbY], [0, 0, () => PG1, 0, 1, () => NV6, 64, 0, 0, 0, 0, () => bxY]],
    abY = [3, Z7, jhY, 0, [Js, DG1, vmA, EmA], [[() => K5A, 0], () => fV6, 1, 0]],
    sbY = [3, Z7, fhY, 0, [PV6, _bY, EbY, MG1, jG1, A5A], [0, 0, [() => ibY, 0], () => PG1, 0, 1]],
    tbY = [3, Z7, NhY, 0, [Js, DG1, vmA, NbY, RbY, AbY, MV6, XbY, EmA], [[() => K5A, 0], () => fV6, 1, 0, 0, 0, 0, 0, 0]],
    ebY = [3, Z7, vhY, 0, [PV6, hf7, uf7, MbY, MG1, jG1, A5A], [0, 0, [() => lbY, 0], 0, () => PG1, 0, 1]],
    AxY = [3, Z7, EhY, 0, [Js, LbY, DG1, vmA, VbY, MV6, EmA], [[() => K5A, 0], 0, () => fV6, 1, 0, 0, 0]],
    KxY = [3, Z7, MhY, 0, [SbY, hbY, A5A], [0, () => mf7, 1]],
    qxY = [3, Z7, PhY, 0, [Js, EmA], [[() => K5A, 0], 0]],
    K5A = [3, Z7, Js, 0, [Rf7, vbY, ybY, If7], [0, [() => cbY, 0], 0, 4]],
    YxY = [3, Z7, RhY, 0, [hhY], [0]],
    zxY = [3, Z7, yhY, 0, [IhY], [0]],
    wxY = [-3, Z7, bhY, {
      [tC]: sC,
      [eC]: 400,
      [aC]: ["ExpiredTokenException", 400]
    }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(wxY, jf7);
  var HxY = [-3, Z7, xhY, {
    [tC]: sC,
    [eC]: 400,
    [aC]: ["ExpiredTradeInTokenException", 400]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(HxY, Ef7);
  var JxY = [3, Z7, Sf7, 0, [uhY, jV6], [0, 0]],
    OxY = [3, Z7, mhY, 0, [Rf7], [0]],
    XxY = [3, Z7, ghY, 0, [yf7], [0]],
    $xY = [3, Z7, QhY, 0, [], []],
    _xY = [3, Z7, UhY, 0, [ubY, yf7, jV6], [0, 0, 0]],
    GxY = [3, Z7, dhY, 0, [IbY], [[() => nbY, 0]]],
    ZxY = [3, Z7, chY, 0, [Js, vmA, GhY], [[() => K5A, 0], 1, 0]],
    WxY = [3, Z7, ihY, 0, [ObY, jG1, MG1, A5A, VV6], [0, 0, () => PG1, 1, () => NV6]],
    DxY = [3, Z7, nhY, 0, [Js, Sf7, vmA], [[() => K5A, 0], () => JxY, 1]],
    jxY = [3, Z7, ohY, 0, [A5A, bf7, xf7], [1, 0, 0]],
    MxY = [3, Z7, ahY, 0, [Js], [[() => K5A, 0]]],
    PxY = [3, Z7, thY, 0, [MV6, A5A, TbY, VV6], [64, 1, 0, () => NV6]],
    VxY = [3, Z7, ehY, 0, [uf7, If7], [[() => rbY, 0], 4]],
    fxY = [-3, Z7, qbY, {
      [tC]: sC,
      [eC]: 400,
      [aC]: ["IDPCommunicationError", 400]
    }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(fxY, Tf7);
  var NxY = [-3, Z7, YbY, {
    [tC]: sC,
    [eC]: 403,
    [aC]: ["IDPRejectedClaim", 403]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(NxY, ff7);
  var TxY = [-3, Z7, KbY, {
    [tC]: sC,
    [eC]: 400,
    [aC]: ["InvalidAuthorizationMessageException", 400]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(TxY, vf7);
  var vxY = [-3, Z7, zbY, {
    [tC]: sC,
    [eC]: 400,
    [aC]: ["InvalidIdentityToken", 400]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(vxY, Nf7);
  var ExY = [-3, Z7, wbY, {
    [tC]: sC,
    [eC]: 400,
    [aC]: ["JWTPayloadSizeExceededException", 400]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(ExY, kf7);
  var kxY = [-3, Z7, JbY, {
    [tC]: sC,
    [eC]: 400,
    [aC]: ["MalformedPolicyDocument", 400]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(kxY, Mf7);
  var CxY = [-3, Z7, $bY, {
    [tC]: sC,
    [eC]: 403,
    [aC]: ["OutboundWebIdentityFederationDisabledException", 403]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(CxY, Cf7);
  var LxY = [-3, Z7, PbY, {
    [tC]: sC,
    [eC]: 400,
    [aC]: ["PackedPolicyTooLarge", 400]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(LxY, Pf7);
  var mf7 = [3, Z7, jbY, 0, [mbY], [0]],
    RxY = [3, Z7, DbY, 0, [GbY, ChY], [0, 0]],
    yxY = [-3, Z7, fbY, {
      [tC]: sC,
      [eC]: 403,
      [aC]: ["RegionDisabledException", 403]
    }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(yxY, Vf7);
  var IxY = [-3, Z7, CbY, {
    [tC]: sC,
    [eC]: 403,
    [aC]: ["SessionDurationEscalationException", 403]
  }, [AL], [0]];
  Av.TypeRegistry.for(Z7).registerError(IxY, Lf7);
  var SxY = [3, Z7, xbY, 0, [HbY, BbY], [0, 0]],
    hxY = [-3, Bf7, "STSServiceException", 0, [], []];
  Av.TypeRegistry.for(Bf7).registerError(hxY, Ef);
  var PG1 = [1, Z7, QbY, 0, () => mf7],
    bxY = [1, Z7, WbY, 0, () => RxY],
    NV6 = [1, Z7, pbY, 0, () => SxY],
    xxY = [9, Z7, ZhY, 0, () => obY, () => abY],
    uxY = [9, Z7, VhY, 0, () => sbY, () => tbY],
    BxY = [9, Z7, ThY, 0, () => ebY, () => AxY],
    mxY = [9, Z7, khY, 0, () => KxY, () => qxY],
    gxY = [9, Z7, LhY, 0, () => YxY, () => zxY],
    FxY = [9, Z7, BhY, 0, () => OxY, () => XxY],
    QxY = [9, Z7, FhY, 0, () => $xY, () => _xY],
    UxY = [9, Z7, phY, 0, () => GxY, () => ZxY],
    pxY = [9, Z7, lhY, 0, () => WxY, () => DxY],
    dxY = [9, Z7, rhY, 0, () => jxY, () => MxY],
    cxY = [9, Z7, shY, 0, () => PxY, () => VxY];
  class VG1 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(xxY).build() {}
  class TV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").sc(uxY).build() {}
  class fG1 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(BxY).build() {}
  class vV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {}).n("STSClient", "AssumeRootCommand").sc(mxY).build() {}
  class EV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").sc(gxY).build() {}
  class kV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").sc(FxY).build() {}
  class CV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").sc(QxY).build() {}
  class LV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetDelegatedAccessToken", {}).n("STSClient", "GetDelegatedAccessTokenCommand").sc(UxY).build() {}
  class RV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").sc(pxY).build() {}
  class yV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").sc(dxY).build() {}
  class IV6 extends vf.Command.classBuilder().ep(oI.commonParams).m(function (A, K, q, Y) {
    return [rI.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "GetWebIdentityToken", {}).n("STSClient", "GetWebIdentityTokenCommand").sc(cxY).build() {}
  var lxY = {
    AssumeRoleCommand: VG1,
    AssumeRoleWithSAMLCommand: TV6,
    AssumeRoleWithWebIdentityCommand: fG1,
    AssumeRootCommand: vV6,
    DecodeAuthorizationMessageCommand: EV6,
    GetAccessKeyInfoCommand: kV6,
    GetCallerIdentityCommand: CV6,
    GetDelegatedAccessTokenCommand: LV6,
    GetFederationTokenCommand: RV6,
    GetSessionTokenCommand: yV6,
    GetWebIdentityTokenCommand: IV6
  };
  class SV6 extends TmA.STSClient {}
  vf.createAggregatedClient(lxY, SV6);
  var gf7 = A => {
      if (typeof A?.Arn === "string") {
        let K = A.Arn.split(":");
        if (K.length > 4 && K[4] !== "") return K[4];
      }
      return;
    },
    Ff7 = async (A, K, q, Y = {}) => {
      let z = typeof A === "function" ? await A() : A,
        w = typeof K === "function" ? await K() : K,
        H = await _hY.stsRegionDefaultResolver(Y)();
      return q?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${z} (credential provider clientConfig)`, `${w} (contextual client)`, `${H} (STS default: AWS_REGION, profile region, or us-east-1)`), z ?? w ?? H;
    },
    ixY = (A, K) => {
      let q, Y;
      return async (z, w) => {
        if (Y = z, !q) {
          let {
              logger: $ = A?.parentClientConfig?.logger,
              profile: _ = A?.parentClientConfig?.profile,
              region: G,
              requestHandler: Z = A?.parentClientConfig?.requestHandler,
              credentialProviderLogger: W,
              userAgentAppId: D = A?.parentClientConfig?.userAgentAppId
            } = A,
            j = await Ff7(G, A?.parentClientConfig?.region, W, {
              logger: $,
              profile: _
            }),
            M = !Qf7(Z);
          q = new K({
            ...A,
            userAgentAppId: D,
            profile: _,
            credentialDefaultProvider: () => async () => Y,
            region: j,
            requestHandler: M ? Z : void 0,
            logger: $
          });
        }
        let {
          Credentials: H,
          AssumedRoleUser: J
        } = await q.send(new VG1(w));
        if (!H || !H.AccessKeyId || !H.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${w.RoleArn}`);
        let O = gf7(J),
          X = {
            accessKeyId: H.AccessKeyId,
            secretAccessKey: H.SecretAccessKey,
            sessionToken: H.SessionToken,
            expiration: H.Expiration,
            ...(H.CredentialScope && {
              credentialScope: H.CredentialScope
            }),
            ...(O && {
              accountId: O
            })
          };
        return DV6.setCredentialFeature(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X;
      };
    },
    nxY = (A, K) => {
      let q;
      return async Y => {
        if (!q) {
          let {
              logger: O = A?.parentClientConfig?.logger,
              profile: X = A?.parentClientConfig?.profile,
              region: $,
              requestHandler: _ = A?.parentClientConfig?.requestHandler,
              credentialProviderLogger: G,
              userAgentAppId: Z = A?.parentClientConfig?.userAgentAppId
            } = A,
            W = await Ff7($, A?.parentClientConfig?.region, G, {
              logger: O,
              profile: X
            }),
            D = !Qf7(_);
          q = new K({
            ...A,
            userAgentAppId: Z,
            profile: X,
            region: W,
            requestHandler: D ? _ : void 0,
            logger: O
          });
        }
        let {
          Credentials: z,
          AssumedRoleUser: w
        } = await q.send(new fG1(Y));
        if (!z || !z.AccessKeyId || !z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${Y.RoleArn}`);
        let H = gf7(w),
          J = {
            accessKeyId: z.AccessKeyId,
            secretAccessKey: z.SecretAccessKey,
            sessionToken: z.SessionToken,
            expiration: z.Expiration,
            ...(z.CredentialScope && {
              credentialScope: z.CredentialScope
            }),
            ...(H && {
              accountId: H
            })
          };
        if (H) DV6.setCredentialFeature(J, "RESOLVED_ACCOUNT_ID", "T");
        return DV6.setCredentialFeature(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J;
      };
    },
    Qf7 = A => {
      return A?.metadata?.handlerProtocol === "h2";
    },
    Uf7 = (A, K) => {
      if (!K) return A;else return class extends A {
        constructor(Y) {
          super(Y);
          for (let z of K) this.middlewareStack.use(z);
        }
      };
    },
    pf7 = (A = {}, K) => ixY(A, Uf7(TmA.STSClient, K)),
    df7 = (A = {}, K) => nxY(A, Uf7(TmA.STSClient, K)),
    rxY = A => K => A({
      roleAssumer: pf7(K),
      roleAssumerWithWebIdentity: df7(K),
      ...K
    });
  Object.defineProperty(WG1, "$Command", {
    enumerable: !0,
    get: function () {
      return vf.Command;
    }
  });
  WG1.AssumeRoleCommand = VG1;
  WG1.AssumeRoleWithSAMLCommand = TV6;
  WG1.AssumeRoleWithWebIdentityCommand = fG1;
  WG1.AssumeRootCommand = vV6;
  WG1.DecodeAuthorizationMessageCommand = EV6;
  WG1.ExpiredTokenException = jf7;
  WG1.ExpiredTradeInTokenException = Ef7;
  WG1.GetAccessKeyInfoCommand = kV6;
  WG1.GetCallerIdentityCommand = CV6;
  WG1.GetDelegatedAccessTokenCommand = LV6;
  WG1.GetFederationTokenCommand = RV6;
  WG1.GetSessionTokenCommand = yV6;
  WG1.GetWebIdentityTokenCommand = IV6;
  WG1.IDPCommunicationErrorException = Tf7;
  WG1.IDPRejectedClaimException = ff7;
  WG1.InvalidAuthorizationMessageException = vf7;
  WG1.InvalidIdentityTokenException = Nf7;
  WG1.JWTPayloadSizeExceededException = kf7;
  WG1.MalformedPolicyDocumentException = Mf7;
  WG1.OutboundWebIdentityFederationDisabledException = Cf7;
  WG1.PackedPolicyTooLargeException = Pf7;
  WG1.RegionDisabledException = Vf7;
  WG1.STS = SV6;
  WG1.STSServiceException = Ef;
  WG1.SessionDurationEscalationException = Lf7;
  WG1.decorateDefaultCredentialProvider = rxY;
  WG1.getDefaultRoleAssumer = pf7;
  WG1.getDefaultRoleAssumerWithWebIdentity = df7;
  Object.keys(TmA).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(WG1, A)) Object.defineProperty(WG1, A, {
      enumerable: !0,
      get: function () {
        return TmA[A];
      }
    });
  });
});

// Register to shared state
__$.cf7 = cf7;
