// Module: kn8
// Dependencies: Uz, mi8, aw, oF, l0, aF, kZ, NV, zT, sF
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kn8 = v(vn8 => {
  Object.defineProperty(vn8, "__esModule", {
    value: !0
  });
  vn8.getRuntimeConfig = void 0;
  var WQ5 = __$.Uz(),
    DQ5 = WQ5.__importDefault(__$.mi8()),
    Vn8 = __$.aw(),
    fn8 = __$.oF(),
    N81 = __$.l0(),
    jQ5 = __$.aF(),
    Nn8 = __$.kZ(),
    z8A = __$.NV(),
    Tn8 = __$.zT(),
    MQ5 = __$.sF(),
    PQ5 = __$.db(),
    VQ5 = __$.Pn8(),
    fQ5 = __$.JLA(),
    NQ5 = __$.KQ(),
    TQ5 = __$.JLA(),
    vQ5 = A => {
      (0, TQ5.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, NQ5.resolveDefaultsModeConfig)(A),
        q = () => K().then(fQ5.loadConfigsForDefaultMode),
        Y = (0, VQ5.getRuntimeConfig)(A);
      (0, Vn8.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, z8A.loadConfig)(Vn8.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? MQ5.calculateBodyLength,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, fn8.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: DQ5.default.version
        }),
        maxAttempts: A?.maxAttempts ?? (0, z8A.loadConfig)(Nn8.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, z8A.loadConfig)(N81.NODE_REGION_CONFIG_OPTIONS, {
          ...N81.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: Tn8.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, z8A.loadConfig)({
          ...Nn8.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || PQ5.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? jQ5.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? Tn8.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, z8A.loadConfig)(N81.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, z8A.loadConfig)(N81.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, z8A.loadConfig)(fn8.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  vn8.getRuntimeConfig = vQ5;
});

// Register to shared state
__$.kn8 = kn8;
