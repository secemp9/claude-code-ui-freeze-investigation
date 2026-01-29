// Module: cl8
// Dependencies: Uz, _81, aw, oF, l0, aF, kZ, NV, zT, sF
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cl8 = v(pl8 => {
  Object.defineProperty(pl8, "__esModule", {
    value: !0
  });
  pl8.getRuntimeConfig = void 0;
  var GB5 = __$.Uz(),
    ZB5 = GB5.__importDefault(__$._81()),
    gl8 = __$.aw(),
    Fl8 = __$.oF(),
    j81 = __$.l0(),
    WB5 = __$.aF(),
    Ql8 = __$.kZ(),
    q8A = __$.NV(),
    Ul8 = __$.zT(),
    DB5 = __$.sF(),
    jB5 = __$.db(),
    MB5 = __$.xl8(),
    PB5 = __$.ej(),
    VB5 = __$.KQ(),
    fB5 = __$.ej(),
    NB5 = A => {
      (0, fB5.emitWarningIfUnsupportedVersion)(process.version);
      let K = (0, VB5.resolveDefaultsModeConfig)(A),
        q = () => K().then(PB5.loadConfigsForDefaultMode),
        Y = (0, MB5.getRuntimeConfig)(A);
      (0, gl8.emitWarningIfUnsupportedVersion)(process.version);
      let z = {
        profile: A?.profile,
        logger: Y.logger
      };
      return {
        ...Y,
        ...A,
        runtime: "node",
        defaultsMode: K,
        authSchemePreference: A?.authSchemePreference ?? (0, q8A.loadConfig)(gl8.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, z),
        bodyLengthChecker: A?.bodyLengthChecker ?? DB5.calculateBodyLength,
        defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, Fl8.createDefaultUserAgentProvider)({
          serviceId: Y.serviceId,
          clientVersion: ZB5.default.version
        }),
        maxAttempts: A?.maxAttempts ?? (0, q8A.loadConfig)(Ql8.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
        region: A?.region ?? (0, q8A.loadConfig)(j81.NODE_REGION_CONFIG_OPTIONS, {
          ...j81.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...z
        }),
        requestHandler: Ul8.NodeHttpHandler.create(A?.requestHandler ?? q),
        retryMode: A?.retryMode ?? (0, q8A.loadConfig)({
          ...Ql8.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await q()).retryMode || jB5.DEFAULT_RETRY_MODE
        }, A),
        sha256: A?.sha256 ?? WB5.Hash.bind(null, "sha256"),
        streamCollector: A?.streamCollector ?? Ul8.streamCollector,
        useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, q8A.loadConfig)(j81.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, z),
        useFipsEndpoint: A?.useFipsEndpoint ?? (0, q8A.loadConfig)(j81.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, z),
        userAgentAppId: A?.userAgentAppId ?? (0, q8A.loadConfig)(Fl8.NODE_APP_ID_CONFIG_OPTIONS, z)
      };
    };
  pl8.getRuntimeConfig = NB5;
});

// Register to shared state
__$.cl8 = cl8;
