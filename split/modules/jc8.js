// Module: jc8
// Dependencies: h61, Gz, dX, fV, On1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jc8 = v(th5 => {
  var No1 = __$.h61(),
    qn = __$.Gz(),
    Hc8 = __$.dX(),
    dh5 = __$.fV(),
    Jc8 = __$.On1(),
    Oc8 = A => No1.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0,
    To1 = A => new Date(Date.now() + A),
    ch5 = (A, K) => Math.abs(To1(K).getTime() - A) >= 300000,
    Xc8 = (A, K) => {
      let q = Date.parse(A);
      if (ch5(q, K)) return q - Date.now();
      return K;
    },
    eCA = (A, K) => {
      if (!K) throw Error(`Property \`${A}\` is not resolved for AWS SDK SigV4Auth`);
      return K;
    },
    vo1 = async A => {
      let K = eCA("context", A.context),
        q = eCA("config", A.config),
        Y = K.endpointV2?.properties?.authSchemes?.[0],
        w = await eCA("signer", q.signer)(Y),
        H = A?.signingRegion,
        J = A?.signingRegionSet,
        O = A?.signingName;
      return {
        config: q,
        signer: w,
        signingRegion: H,
        signingRegionSet: J,
        signingName: O
      };
    };
  class $81 {
    async sign(A, K, q) {
      if (!No1.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let Y = await vo1(q),
        {
          config: z,
          signer: w
        } = Y,
        {
          signingRegion: H,
          signingName: J
        } = Y,
        O = q.context;
      if (O?.authSchemes?.length ?? !1) {
        let [$, _] = O.authSchemes;
        if ($?.name === "sigv4a" && _?.name === "sigv4") H = _?.signingRegion ?? H, J = _?.signingName ?? J;
      }
      return await w.sign(A, {
        signingDate: To1(z.systemClockOffset),
        signingRegion: H,
        signingService: J
      });
    }
    errorHandler(A) {
      return K => {
        let q = K.ServerTime ?? Oc8(K.$response);
        if (q) {
          let Y = eCA("config", A.config),
            z = Y.systemClockOffset;
          if (Y.systemClockOffset = Xc8(q, Y.systemClockOffset), Y.systemClockOffset !== z && K.$metadata) K.$metadata.clockSkewCorrected = !0;
        }
        throw K;
      };
    }
    successHandler(A, K) {
      let q = Oc8(A);
      if (q) {
        let Y = eCA("config", K.config);
        Y.systemClockOffset = Xc8(q, Y.systemClockOffset);
      }
    }
  }
  var lh5 = $81;
  class Zc8 extends $81 {
    async sign(A, K, q) {
      if (!No1.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let {
          config: Y,
          signer: z,
          signingRegion: w,
          signingRegionSet: H,
          signingName: J
        } = await vo1(q),
        X = ((await Y.sigv4aSigningRegionSet?.()) ?? H ?? [w]).join(",");
      return await z.sign(A, {
        signingDate: To1(Y.systemClockOffset),
        signingRegion: X,
        signingService: J
      });
    }
  }
  var $c8 = A => typeof A === "string" && A.length > 0 ? A.split(",").map(K => K.trim()) : [],
    Wc8 = A => `AWS_BEARER_TOKEN_${A.replace(/[\s-]/g, "_").toUpperCase()}`,
    _c8 = "AWS_AUTH_SCHEME_PREFERENCE",
    Gc8 = "auth_scheme_preference",
    ih5 = {
      environmentVariableSelector: (A, K) => {
        if (K?.signingName) {
          if (Wc8(K.signingName) in A) return ["httpBearerAuth"];
        }
        if (!(_c8 in A)) return;
        return $c8(A[_c8]);
      },
      configFileSelector: A => {
        if (!(Gc8 in A)) return;
        return $c8(A[Gc8]);
      },
      default: []
    },
    nh5 = A => {
      return A.sigv4aSigningRegionSet = qn.normalizeProvider(A.sigv4aSigningRegionSet), A;
    },
    rh5 = {
      environmentVariableSelector(A) {
        if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map(K => K.trim());
        throw new Hc8.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: !0
        });
      },
      configFileSelector(A) {
        if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map(K => K.trim());
        throw new Hc8.ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: !0
        });
      },
      default: void 0
    },
    Dc8 = A => {
      let K = A.credentials,
        q = !!A.credentials,
        Y = void 0;
      Object.defineProperty(A, "credentials", {
        set(X) {
          if (X && X !== K && X !== Y) q = !0;
          K = X;
          let $ = ah5(A, {
              credentials: K,
              credentialDefaultProvider: A.credentialDefaultProvider
            }),
            _ = sh5(A, $);
          if (q && !_.attributed) Y = async G => _(G).then(Z => dh5.setCredentialFeature(Z, "CREDENTIALS_CODE", "e")), Y.memoized = _.memoized, Y.configBound = _.configBound, Y.attributed = !0;else Y = _;
        },
        get() {
          return Y;
        },
        enumerable: !0,
        configurable: !0
      }), A.credentials = K;
      let {
          signingEscapePath: z = !0,
          systemClockOffset: w = A.systemClockOffset || 0,
          sha256: H
        } = A,
        J;
      if (A.signer) J = qn.normalizeProvider(A.signer);else if (A.regionInfoProvider) J = () => qn.normalizeProvider(A.region)().then(async X => [(await A.regionInfoProvider(X, {
        useFipsEndpoint: await A.useFipsEndpoint(),
        useDualstackEndpoint: await A.useDualstackEndpoint()
      })) || {}, X]).then(([X, $]) => {
        let {
          signingRegion: _,
          signingService: G
        } = X;
        A.signingRegion = A.signingRegion || _ || $, A.signingName = A.signingName || G || A.serviceId;
        let Z = {
          ...A,
          credentials: A.credentials,
          region: A.signingRegion,
          service: A.signingName,
          sha256: H,
          uriEscapePath: z
        };
        return new (A.signerConstructor || Jc8.SignatureV4)(Z);
      });else J = async X => {
        X = Object.assign({}, {
          name: "sigv4",
          signingName: A.signingName || A.defaultSigningName,
          signingRegion: await qn.normalizeProvider(A.region)(),
          properties: {}
        }, X);
        let {
          signingRegion: $,
          signingName: _
        } = X;
        A.signingRegion = A.signingRegion || $, A.signingName = A.signingName || _ || A.serviceId;
        let G = {
          ...A,
          credentials: A.credentials,
          region: A.signingRegion,
          service: A.signingName,
          sha256: H,
          uriEscapePath: z
        };
        return new (A.signerConstructor || Jc8.SignatureV4)(G);
      };
      return Object.assign(A, {
        systemClockOffset: w,
        signingEscapePath: z,
        signer: J
      });
    },
    oh5 = Dc8;
  function ah5(A, {
    credentials: K,
    credentialDefaultProvider: q
  }) {
    let Y;
    if (K) {
      if (!K?.memoized) Y = qn.memoizeIdentityProvider(K, qn.isIdentityExpired, qn.doesIdentityRequireRefresh);else Y = K;
    } else if (q) Y = qn.normalizeProvider(q(Object.assign({}, A, {
      parentClientConfig: A
    })));else Y = async () => {
      throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
    };
    return Y.memoized = !0, Y;
  }
  function sh5(A, K) {
    if (K.configBound) return K;
    let q = async Y => K({
      ...Y,
      callerClientConfig: A
    });
    return q.memoized = K.memoized, q.configBound = !0, q;
  }
  th5.AWSSDKSigV4Signer = lh5;
  th5.AwsSdkSigV4ASigner = Zc8;
  th5.AwsSdkSigV4Signer = $81;
  th5.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = ih5;
  th5.NODE_SIGV4A_CONFIG_OPTIONS = rh5;
  th5.getBearerTokenEnvKey = Wc8;
  th5.resolveAWSSDKSigV4Config = oh5;
  th5.resolveAwsSdkSigV4AConfig = nh5;
  th5.resolveAwsSdkSigV4Config = Dc8;
  th5.validateSigningProperties = vo1;
});

// Register to shared state
__$.jc8 = jc8;
