// Module: rV7
// Dependencies: Uz, eP7, aw, W8A, oF, l0, Gz, aF, kZ, NV
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rV7 = v(iV7 => {
  Object.defineProperty(iV7, "__esModule", {
    value: !0
  });
  iV7.getRuntimeConfig = void 0;
  var RSY = __$.Uz(),
    ySY = RSY.__importDefault(__$.eP7()),
    GV6 = __$.aw(),
    pV7 = __$.W8A(),
    dV7 = __$.oF(),
    GG1 = __$.l0(),
    ISY = __$.Gz(),
    SSY = __$.aF(),
    cV7 = __$.kZ(),
    eqA = __$.NV(),
    lV7 = __$.zT(),
    hSY = __$.sF(),
    bSY = __$.db(),
    xSY = __$.UV7(),
    uSY = __$.tqA(),
    BSY = __$.KQ(),
    mSY = __$.tqA(),
    gSY = A => {
      (0, mSY.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, BSY.resolveDefaultsModeConfig)(A),
        q = () => K().then(uSY.loadConfigsForDefaultMode),
        Y = (0, xSY.getRuntimeConfig)(A);
      (0, GV6.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, eqA.loadConfig)(GV6.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? hSY.calculateBodyLength,
        credentialDefaultProvider: A?.credentialDefaultProvider ?? pV7.defaultProvider,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, dV7.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: ySY.default.version
        }),
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: w => w.getIdentityProvider("aws.auth#sigv4") || (async H => await (0, pV7.defaultProvider)(H?.__config || {})()),
          signer: new GV6.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: w => w.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new ISY.NoAuthSigner()
        }],
        maxAttempts: A?.maxAttempts ?? (0, eqA.loadConfig)(cV7.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, eqA.loadConfig)(GG1.NODE_REGION_CONFIG_OPTIONS, {
          ...GG1.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: lV7.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, eqA.loadConfig)({
          ...cV7.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || bSY.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? SSY.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? lV7.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, eqA.loadConfig)(GG1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, eqA.loadConfig)(GG1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, eqA.loadConfig)(dV7.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  iV7.getRuntimeConfig = gSY;
});

// Register to shared state
__$.rV7 = rV7;
