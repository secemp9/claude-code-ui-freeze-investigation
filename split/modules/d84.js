// Module: d84
// Dependencies: Uz, s64, aw, W8A, A84, V81, oF, l0, Gz, q84
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d84 = v(U84 => {
  Object.defineProperty(U84, "__esModule", {
    value: !0
  });
  U84.getRuntimeConfig = void 0;
  var kv3 = __$.Uz(),
    Cv3 = kv3.__importDefault(__$.s64()),
    X16 = __$.aw(),
    Lv3 = __$.W8A(),
    Rv3 = __$.A84(),
    m84 = __$.V81(),
    g84 = __$.oF(),
    K71 = __$.l0(),
    yv3 = __$.Gz(),
    Iv3 = __$.q84(),
    Sv3 = __$.aF(),
    F84 = __$.kZ(),
    E8A = __$.NV(),
    Q84 = __$.zT(),
    hv3 = __$.sF(),
    bv3 = __$.db(),
    xv3 = __$.B84(),
    uv3 = __$.dLA(),
    Bv3 = __$.KQ(),
    mv3 = __$.dLA(),
    gv3 = A => {
      (0, mv3.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, Bv3.resolveDefaultsModeConfig)(A),
        q = () => K().then(uv3.loadConfigsForDefaultMode),
        Y = (0, xv3.getRuntimeConfig)(A);
      (0, X16.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger,
        signingName: "bedrock"
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, E8A.loadConfig)(X16.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? hv3.calculateBodyLength,
        credentialDefaultProvider: A?.credentialDefaultProvider ?? Lv3.defaultProvider,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, g84.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: Cv3.default.version
        }),
        eventStreamPayloadHandlerProvider: A?.eventStreamPayloadHandlerProvider ?? Rv3.eventStreamPayloadHandlerProvider,
        eventStreamSerdeProvider: A?.eventStreamSerdeProvider ?? Iv3.eventStreamSerdeProvider,
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: w => w.getIdentityProvider("aws.auth#sigv4"),
          signer: new X16.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#httpBearerAuth",
          identityProvider: w => w.getIdentityProvider("smithy.api#httpBearerAuth") || (async H => {
            try {
              return await (0, m84.fromEnvSigningName)({
                signingName: "bedrock"
              })();
            } catch (J) {
              return await (0, m84.nodeProvider)(H)(H);
            }
          }),
          signer: new yv3.HttpBearerAuthSigner()
        }],
        maxAttempts: A?.maxAttempts ?? (0, E8A.loadConfig)(F84.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, E8A.loadConfig)(K71.NODE_REGION_CONFIG_OPTIONS, {
          ...K71.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: Q84.NodeHttp2Handler.create(A?.requestHandler ?? (async () => ({
          ...(await q()),
          disableConcurrentStreams: !0
        }))),
        retryMode: A?.retryMode ?? (0, E8A.loadConfig)({
          ...F84.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || bv3.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? Sv3.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? Q84.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, E8A.loadConfig)(K71.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, E8A.loadConfig)(K71.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, E8A.loadConfig)(g84.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  U84.getRuntimeConfig = gv3;
});

// Register to shared state
__$.d84 = d84;
