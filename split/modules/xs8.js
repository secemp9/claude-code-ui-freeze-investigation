// Module: xs8
// Dependencies: Uz, Wd8, aw, W8A, V81, oF, l0, Gz, aF, kZ
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xs8 = v(hs8 => {
  Object.defineProperty(hs8, "__esModule", {
    value: !0
  });
  hs8.getRuntimeConfig = void 0;
  var Jr5 = __$.Uz(),
    Or5 = Jr5.__importDefault(__$.Wd8()),
    hs1 = __$.aw(),
    Xr5 = __$.W8A(),
    Rs8 = __$.V81(),
    ys8 = __$.oF(),
    e81 = __$.l0(),
    $r5 = __$.Gz(),
    _r5 = __$.aF(),
    Is8 = __$.kZ(),
    D8A = __$.NV(),
    Ss8 = __$.zT(),
    Gr5 = __$.sF(),
    Zr5 = __$.db(),
    Wr5 = __$.Ls8(),
    Dr5 = __$.oCA(),
    jr5 = __$.KQ(),
    Mr5 = __$.oCA(),
    Pr5 = A => {
      (0, Mr5.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, jr5.resolveDefaultsModeConfig)(A),
        q = () => K().then(Dr5.loadConfigsForDefaultMode),
        Y = (0, Wr5.getRuntimeConfig)(A);
      (0, hs1.emitWarningIfUnsupportedVersion)(process.version);
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
        authSchemePreference: A?.authSchemePreference ?? (0, D8A.loadConfig)(hs1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? Gr5.calculateBodyLength,
        credentialDefaultProvider: A?.credentialDefaultProvider ?? Xr5.defaultProvider,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, ys8.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: Or5.default.version
        }),
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: w => w.getIdentityProvider("aws.auth#sigv4"),
          signer: new hs1.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#httpBearerAuth",
          identityProvider: w => w.getIdentityProvider("smithy.api#httpBearerAuth") || (async H => {
            try {
              return await (0, Rs8.fromEnvSigningName)({
                signingName: "bedrock"
              })();
            } catch (J) {
              return await (0, Rs8.nodeProvider)(H)(H);
            }
          }),
          signer: new $r5.HttpBearerAuthSigner()
        }],
        maxAttempts: A?.maxAttempts ?? (0, D8A.loadConfig)(Is8.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, D8A.loadConfig)(e81.NODE_REGION_CONFIG_OPTIONS, {
          ...e81.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: Ss8.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, D8A.loadConfig)({
          ...Is8.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || Zr5.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? _r5.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? Ss8.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, D8A.loadConfig)(e81.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, D8A.loadConfig)(e81.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, D8A.loadConfig)(ys8.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  hs8.getRuntimeConfig = Pr5;
});

// Register to shared state
__$.xs8 = xs8;
