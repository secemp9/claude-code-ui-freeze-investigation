// Module: Sb8
// Dependencies: gy8, ry8, lh8, L11, Ob8, Db8, NJA, wc1, b11, UkA
//   ... and 24 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sb8 = k(() => {
  __$.gy8();
  __$.ry8();
  __$.lh8();
  __$.L11();
  __$.Ob8();
  __$.Db8();
  __$.NJA();
  __$.wc1();
  __$.b11 = new __$.UkA();
  __$.YO = {
    initialize: __$.dw5,
    isSupportedPlatform: __$.fb8,
    isSandboxingEnabled: __$.cw5,
    checkDependencies: __$.Nb8,
    getFsReadConfig: __$.lw5,
    getFsWriteConfig: __$.iw5,
    getNetworkRestrictionConfig: __$.nw5,
    getAllowUnixSockets: __$.Tb8,
    getAllowLocalBinding: __$.vb8,
    getIgnoreViolations: __$.Eb8,
    getEnableWeakerNestedSandbox: __$.kb8,
    getProxyPort: __$.Cb8,
    getSocksProxyPort: __$.Lb8,
    getLinuxHttpSocketPath: __$.Rb8,
    getLinuxSocksSocketPath: __$.yb8,
    waitForNetworkInitialization: __$.Ib8,
    wrapWithSandbox: __$.sw5,
    reset: __$.Xc1,
    getSandboxViolationStore: __$.AH5,
    annotateStderrWithSandboxFailures: __$.KH5,
    getLinuxGlobPatternWarnings: __$.qH5,
    getConfig: __$.tw5,
    updateConfig: __$.ew5
  };
});

// Register to shared state
__$.Sb8 = Sb8;
