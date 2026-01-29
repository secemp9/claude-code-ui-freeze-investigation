// Module: SH
// Dependencies: ab8, B5, I8, GJ, q6, Z1, ci, maA, cO, wb
//   ... and 24 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SH = k(() => {
  __$.ab8();
  __$.B5();
  __$.I8();
  __$.GJ();
  __$.q6();
  __$.Z1();
  __$.ci();
  __$.maA();
  __$.cO();
  __$.wb();
  __$.gc1 = __$.z6(() => {
    let {
      rgPath: A,
      rgArgs: K
    } = __$.UwA();
    return __$.YO.checkDependencies({
      command: A,
      args: K
    });
  }), __$.Rx8 = __$.z6(A => {
    return A?.sandbox?.enabled ?? !1;
  });
  __$.Ix8 = __$.z6(A => {
    return A?.sandbox?.autoAllowBashIfSandboxed ?? !0;
  });
  __$.Sx8 = __$.z6(A => {
    return A?.sandbox?.allowUnsandboxedCommands ?? !0;
  });
  __$.Fc1 = __$.z6(() => {
    return __$.YO.isSupportedPlatform();
  }), __$.hx8 = __$.z6(A => {
    let K = A?.sandbox?.enabledPlatforms;
    if (K === void 0) return !0;
    if (K.length === 0) return !1;
    let q = __$.o6();
    return K.includes(q);
  });
  __$.S8 = {
    initialize: __$.CO5,
    isSandboxingEnabled: __$.e11,
    isSandboxEnabledInSettings: __$.yx8,
    isPlatformInEnabledList: __$.bx8,
    isAutoAllowBashIfSandboxedEnabled: __$.VO5,
    areUnsandboxedCommandsAllowed: __$.fO5,
    areSandboxSettingsLockedByPolicy: __$.TO5,
    setSandboxSettings: __$.vO5,
    getExcludedCommands: __$.EO5,
    wrapWithSandbox: __$.kO5,
    refreshConfig: __$.LO5,
    reset: __$.RO5,
    checkDependencies: __$.gc1,
    getFsReadConfig: __$.YO.getFsReadConfig,
    getFsWriteConfig: __$.YO.getFsWriteConfig,
    getNetworkRestrictionConfig: __$.YO.getNetworkRestrictionConfig,
    getIgnoreViolations: __$.YO.getIgnoreViolations,
    getLinuxGlobPatternWarnings: __$.NO5,
    isSupportedPlatform: __$.Fc1,
    getAllowUnixSockets: __$.YO.getAllowUnixSockets,
    getAllowLocalBinding: __$.YO.getAllowLocalBinding,
    getEnableWeakerNestedSandbox: __$.YO.getEnableWeakerNestedSandbox,
    getProxyPort: __$.YO.getProxyPort,
    getSocksProxyPort: __$.YO.getSocksProxyPort,
    getLinuxHttpSocketPath: __$.YO.getLinuxHttpSocketPath,
    getLinuxSocksSocketPath: __$.YO.getLinuxSocksSocketPath,
    waitForNetworkInitialization: __$.YO.waitForNetworkInitialization,
    getSandboxViolationStore: __$.YO.getSandboxViolationStore,
    annotateStderrWithSandboxFailures: __$.YO.annotateStderrWithSandboxFailures
  };
});

// Register to shared state
__$.SH = SH;
