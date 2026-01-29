// Module: hr8
// Dependencies: Uz, _81, aw, oF, l0, aF, kZ, NV, zT, sF
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hr8 = v(Ir8 => {
  Object.defineProperty(Ir8, "__esModule", {
    value: !0
  });
  Ir8.getRuntimeConfig = void 0;
  var Hd5 = __$.Uz(),
    Jd5 = Hd5.__importDefault(__$._81()),
    Cr8 = __$.aw(),
    Lr8 = __$.oF(),
    d81 = __$.l0(),
    Od5 = __$.aF(),
    Rr8 = __$.kZ(),
    J8A = __$.NV(),
    yr8 = __$.zT(),
    Xd5 = __$.sF(),
    $d5 = __$.db(),
    _d5 = __$.kr8(),
    Gd5 = __$.ej(),
    Zd5 = __$.KQ(),
    Wd5 = __$.ej(),
    Dd5 = A => {
      (0, Wd5.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, Zd5.resolveDefaultsModeConfig)(A),
        q = () => K().then(Gd5.loadConfigsForDefaultMode),
        Y = (0, _d5.getRuntimeConfig)(A);
      (0, Cr8.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, J8A.loadConfig)(Cr8.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? Xd5.calculateBodyLength,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, Lr8.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: Jd5.default.version
        }),
        maxAttempts: A?.maxAttempts ?? (0, J8A.loadConfig)(Rr8.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, J8A.loadConfig)(d81.NODE_REGION_CONFIG_OPTIONS, {
          ...d81.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: yr8.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, J8A.loadConfig)({
          ...Rr8.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || $d5.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? Od5.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? yr8.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, J8A.loadConfig)(d81.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, J8A.loadConfig)(d81.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, J8A.loadConfig)(Lr8.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  Ir8.getRuntimeConfig = Dd5;
});

// Register to shared state
__$.hr8 = hr8;
