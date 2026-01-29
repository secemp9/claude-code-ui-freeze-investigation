// Module: wQ4
// Dependencies: Uz, MF4, aw, W8A, oF, l0, aF, kZ, NV, zT
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wQ4 = v(YQ4 => {
  Object.defineProperty(YQ4, "__esModule", {
    value: !0
  });
  YQ4.getRuntimeConfig = void 0;
  var Wx9 = __$.Uz(),
    Dx9 = Wx9.__importDefault(__$.MF4()),
    eF4 = __$.aw(),
    jx9 = __$.W8A(),
    AQ4 = __$.oF(),
    b21 = __$.l0(),
    Mx9 = __$.aF(),
    KQ4 = __$.kZ(),
    L7A = __$.NV(),
    qQ4 = __$.zT(),
    Px9 = __$.sF(),
    Vx9 = __$.db(),
    fx9 = __$.tF4(),
    Nx9 = __$.gSA(),
    Tx9 = __$.KQ(),
    vx9 = __$.gSA(),
    Ex9 = A => {
      (0, vx9.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, Tx9.resolveDefaultsModeConfig)(A),
        q = () => K().then(Nx9.loadConfigsForDefaultMode),
        Y = (0, fx9.getRuntimeConfig)(A);
      (0, eF4.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, L7A.loadConfig)(eF4.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? Px9.calculateBodyLength,
        credentialDefaultProvider: A?.credentialDefaultProvider ?? jx9.defaultProvider,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, AQ4.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: Dx9.default.version
        }),
        maxAttempts: A?.maxAttempts ?? (0, L7A.loadConfig)(KQ4.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, L7A.loadConfig)(b21.NODE_REGION_CONFIG_OPTIONS, {
          ...b21.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: qQ4.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, L7A.loadConfig)({
          ...KQ4.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || Vx9.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? Mx9.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? qQ4.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, L7A.loadConfig)(b21.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, L7A.loadConfig)(b21.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, L7A.loadConfig)(AQ4.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  YQ4.getRuntimeConfig = Ex9;
});

// Register to shared state
__$.wQ4 = wQ4;
