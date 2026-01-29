// Module: io8
// Dependencies: Uz, _81, aw, oF, l0, Gz, aF, kZ, NV, zT
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var io8 = v(co8 => {
  Object.defineProperty(co8, "__esModule", {
    value: !0
  });
  co8.getRuntimeConfig = void 0;
  var Uc5 = __$.Uz(),
    pc5 = Uc5.__importDefault(__$._81()),
    Zs1 = __$.aw(),
    Uo8 = __$.oF(),
    n81 = __$.l0(),
    dc5 = __$.Gz(),
    cc5 = __$.aF(),
    po8 = __$.kZ(),
    O8A = __$.NV(),
    do8 = __$.zT(),
    lc5 = __$.sF(),
    ic5 = __$.db(),
    nc5 = __$.Qo8(),
    rc5 = __$.ej(),
    oc5 = __$.KQ(),
    ac5 = __$.ej(),
    sc5 = A => {
      (0, ac5.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, oc5.resolveDefaultsModeConfig)(A),
        q = () => K().then(rc5.loadConfigsForDefaultMode),
        Y = (0, nc5.getRuntimeConfig)(A);
      (0, Zs1.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, O8A.loadConfig)(Zs1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? lc5.calculateBodyLength,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, Uo8.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: pc5.default.version
        }),
        httpAuthSchemes: A?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: w => w.getIdentityProvider("aws.auth#sigv4") || (async H => await A.credentialDefaultProvider(H?.__config || {})()),
          signer: new Zs1.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: w => w.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new dc5.NoAuthSigner()
        }],
        maxAttempts: A?.maxAttempts ?? (0, O8A.loadConfig)(po8.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, O8A.loadConfig)(n81.NODE_REGION_CONFIG_OPTIONS, {
          ...n81.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: do8.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, O8A.loadConfig)({
          ...po8.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || ic5.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? cc5.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? do8.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, O8A.loadConfig)(n81.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, O8A.loadConfig)(n81.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, O8A.loadConfig)(Uo8.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  co8.getRuntimeConfig = sc5;
});

// Register to shared state
__$.io8 = io8;
