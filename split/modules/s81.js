// Module: s81
// Dependencies: Js1, ej, qy, Os1, DJ, fV, Yy

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var s81 = v(r81 => {
  var DLA = __$.Js1(),
    jLA = __$.ej(),
    $a8 = __$.qy(),
    _a8 = __$.Os1(),
    Gn = __$.DJ(),
    js1 = __$.fV(),
    _l5 = __$.Yy(),
    zQ = class A extends jLA.ServiceException {
      constructor(K) {
        super(K);
        Object.setPrototypeOf(this, A.prototype);
      }
    },
    Ga8 = class A extends zQ {
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
    Za8 = class A extends zQ {
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
    Wa8 = class A extends zQ {
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
    Da8 = class A extends zQ {
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
    ja8 = class A extends zQ {
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
    Ma8 = class A extends zQ {
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
    Pa8 = class A extends zQ {
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
    Gl5 = "Arn",
    Zl5 = "AccessKeyId",
    Wl5 = "AssumeRole",
    Dl5 = "AssumedRoleId",
    jl5 = "AssumeRoleRequest",
    Ml5 = "AssumeRoleResponse",
    Ms1 = "AssumedRoleUser",
    Pl5 = "AssumeRoleWithWebIdentity",
    Vl5 = "AssumeRoleWithWebIdentityRequest",
    fl5 = "AssumeRoleWithWebIdentityResponse",
    Nl5 = "Audience",
    Ps1 = "Credentials",
    Tl5 = "ContextAssertion",
    Va8 = "DurationSeconds",
    vl5 = "Expiration",
    El5 = "ExternalId",
    kl5 = "ExpiredTokenException",
    Cl5 = "IDPCommunicationErrorException",
    Ll5 = "IDPRejectedClaimException",
    Rl5 = "InvalidIdentityTokenException",
    yl5 = "Key",
    Il5 = "MalformedPolicyDocumentException",
    fa8 = "Policy",
    Na8 = "PolicyArns",
    Sl5 = "ProviderArn",
    hl5 = "ProvidedContexts",
    bl5 = "ProvidedContextsListType",
    xl5 = "ProvidedContext",
    ul5 = "PolicyDescriptorType",
    Bl5 = "ProviderId",
    Ta8 = "PackedPolicySize",
    ml5 = "PackedPolicyTooLargeException",
    gl5 = "Provider",
    va8 = "RoleArn",
    Fl5 = "RegionDisabledException",
    Ea8 = "RoleSessionName",
    Ql5 = "SecretAccessKey",
    Ul5 = "SubjectFromWebIdentityToken",
    Vs1 = "SourceIdentity",
    pl5 = "SerialNumber",
    dl5 = "SessionToken",
    cl5 = "Tags",
    ll5 = "TokenCode",
    il5 = "TransitiveTagKeys",
    nl5 = "Tag",
    rl5 = "Value",
    ol5 = "WebIdentityToken",
    al5 = "arn",
    sl5 = "accessKeySecretType",
    X8A = "awsQueryError",
    $8A = "client",
    tl5 = "clientTokenType",
    _8A = "error",
    G8A = "httpError",
    Z8A = "message",
    el5 = "policyDescriptorListType",
    ka8 = "smithy.ts.sdk.synthetic.com.amazonaws.sts",
    Ai5 = "tagListType",
    x2 = "com.amazonaws.sts",
    Ki5 = [0, x2, sl5, 8, 0],
    qi5 = [0, x2, tl5, 8, 0],
    Ca8 = [3, x2, Ms1, 0, [Dl5, Gl5], [0, 0]],
    Yi5 = [3, x2, jl5, 0, [va8, Ea8, Na8, fa8, Va8, cl5, il5, El5, pl5, ll5, Vs1, hl5], [0, 0, () => Ra8, 0, 1, () => Vi5, 64, 0, 0, 0, 0, () => Pi5]],
    zi5 = [3, x2, Ml5, 0, [Ps1, Ms1, Ta8, Vs1], [[() => La8, 0], () => Ca8, 1, 0]],
    wi5 = [3, x2, Vl5, 0, [va8, Ea8, ol5, Bl5, Na8, fa8, Va8], [0, 0, [() => qi5, 0], 0, () => Ra8, 0, 1]],
    Hi5 = [3, x2, fl5, 0, [Ps1, Ul5, Ms1, Ta8, gl5, Nl5, Vs1], [[() => La8, 0], 0, () => Ca8, 1, 0, 0, 0]],
    La8 = [3, x2, Ps1, 0, [Zl5, Ql5, dl5, vl5], [0, [() => Ki5, 0], 0, 4]],
    Ji5 = [-3, x2, kl5, {
      [_8A]: $8A,
      [G8A]: 400,
      [X8A]: ["ExpiredTokenException", 400]
    }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError(Ji5, Ga8);
  var Oi5 = [-3, x2, Cl5, {
    [_8A]: $8A,
    [G8A]: 400,
    [X8A]: ["IDPCommunicationError", 400]
  }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError(Oi5, Pa8);
  var Xi5 = [-3, x2, Ll5, {
    [_8A]: $8A,
    [G8A]: 403,
    [X8A]: ["IDPRejectedClaim", 403]
  }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError(Xi5, ja8);
  var $i5 = [-3, x2, Rl5, {
    [_8A]: $8A,
    [G8A]: 400,
    [X8A]: ["InvalidIdentityToken", 400]
  }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError($i5, Ma8);
  var _i5 = [-3, x2, Il5, {
    [_8A]: $8A,
    [G8A]: 400,
    [X8A]: ["MalformedPolicyDocument", 400]
  }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError(_i5, Za8);
  var Gi5 = [-3, x2, ml5, {
    [_8A]: $8A,
    [G8A]: 400,
    [X8A]: ["PackedPolicyTooLarge", 400]
  }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError(Gi5, Wa8);
  var Zi5 = [3, x2, ul5, 0, [al5], [0]],
    Wi5 = [3, x2, xl5, 0, [Sl5, Tl5], [0, 0]],
    Di5 = [-3, x2, Fl5, {
      [_8A]: $8A,
      [G8A]: 403,
      [X8A]: ["RegionDisabledException", 403]
    }, [Z8A], [0]];
  Gn.TypeRegistry.for(x2).registerError(Di5, Da8);
  var ji5 = [3, x2, nl5, 0, [yl5, rl5], [0, 0]],
    Mi5 = [-3, ka8, "STSServiceException", 0, [], []];
  Gn.TypeRegistry.for(ka8).registerError(Mi5, zQ);
  var Ra8 = [1, x2, el5, 0, () => Zi5],
    Pi5 = [1, x2, bl5, 0, () => Wi5],
    Vi5 = [1, x2, Ai5, 0, () => ji5],
    fi5 = [9, x2, Wl5, 0, () => Yi5, () => zi5],
    Ni5 = [9, x2, Pl5, 0, () => wi5, () => Hi5];
  class o81 extends jLA.Command.classBuilder().ep(_a8.commonParams).m(function (A, K, q, Y) {
    return [$a8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(fi5).build() {}
  class a81 extends jLA.Command.classBuilder().ep(_a8.commonParams).m(function (A, K, q, Y) {
    return [$a8.getEndpointPlugin(q, A.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(Ni5).build() {}
  var Ti5 = {
    AssumeRoleCommand: o81,
    AssumeRoleWithWebIdentityCommand: a81
  };
  class fs1 extends DLA.STSClient {}
  jLA.createAggregatedClient(Ti5, fs1);
  var ya8 = A => {
      if (typeof A?.Arn === "string") {
        let K = A.Arn.split(":");
        if (K.length > 4 && K[4] !== "") return K[4];
      }
      return;
    },
    Ia8 = async (A, K, q, Y = {}) => {
      let z = typeof A === "function" ? await A() : A,
        w = typeof K === "function" ? await K() : K,
        H = await _l5.stsRegionDefaultResolver(Y)();
      return q?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${z} (credential provider clientConfig)`, `${w} (contextual client)`, `${H} (STS default: AWS_REGION, profile region, or us-east-1)`), z ?? w ?? H;
    },
    vi5 = (A, K) => {
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
            j = await Ia8(G, A?.parentClientConfig?.region, W, {
              logger: $,
              profile: _
            }),
            M = !Sa8(Z);
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
        } = await q.send(new o81(w));
        if (!H || !H.AccessKeyId || !H.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${w.RoleArn}`);
        let O = ya8(J),
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
        return js1.setCredentialFeature(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X;
      };
    },
    Ei5 = (A, K) => {
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
            W = await Ia8($, A?.parentClientConfig?.region, G, {
              logger: O,
              profile: X
            }),
            D = !Sa8(_);
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
        } = await q.send(new a81(Y));
        if (!z || !z.AccessKeyId || !z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${Y.RoleArn}`);
        let H = ya8(w),
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
        if (H) js1.setCredentialFeature(J, "RESOLVED_ACCOUNT_ID", "T");
        return js1.setCredentialFeature(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J;
      };
    },
    Sa8 = A => {
      return A?.metadata?.handlerProtocol === "h2";
    },
    ha8 = (A, K) => {
      if (!K) return A;else return class extends A {
        constructor(Y) {
          super(Y);
          for (let z of K) this.middlewareStack.use(z);
        }
      };
    },
    ba8 = (A = {}, K) => vi5(A, ha8(DLA.STSClient, K)),
    xa8 = (A = {}, K) => Ei5(A, ha8(DLA.STSClient, K)),
    ki5 = A => K => A({
      roleAssumer: ba8(K),
      roleAssumerWithWebIdentity: xa8(K),
      ...K
    });
  Object.defineProperty(r81, "$Command", {
    enumerable: !0,
    get: function () {
      return jLA.Command;
    }
  });
  r81.AssumeRoleCommand = o81;
  r81.AssumeRoleWithWebIdentityCommand = a81;
  r81.ExpiredTokenException = Ga8;
  r81.IDPCommunicationErrorException = Pa8;
  r81.IDPRejectedClaimException = ja8;
  r81.InvalidIdentityTokenException = Ma8;
  r81.MalformedPolicyDocumentException = Za8;
  r81.PackedPolicyTooLargeException = Wa8;
  r81.RegionDisabledException = Da8;
  r81.STS = fs1;
  r81.STSServiceException = zQ;
  r81.decorateDefaultCredentialProvider = ki5;
  r81.getDefaultRoleAssumer = ba8;
  r81.getDefaultRoleAssumerWithWebIdentity = xa8;
  Object.keys(DLA).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(r81, A)) Object.defineProperty(r81, A, {
      enumerable: !0,
      get: function () {
        return DLA[A];
      }
    });
  });
});

// Register to shared state
__$.s81 = s81;
