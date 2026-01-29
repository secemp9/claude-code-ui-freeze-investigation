// Module: pNK
// Dependencies: SH, mA, I8, g4, q6, gNK, B5, QNK, $A, Mn2
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pNK = k(() => {
  __$.SH();
  __$.mA();
  __$.I8();
  __$.g4();
  __$.q6();
  __$.gNK();
  __$.B5();
  __$.QNK = o(__$.$A(), 1);
  __$.Mn2 = {
    name: "sandbox",
    get description() {
      let A = __$.S8.isSandboxingEnabled(),
        K = __$.S8.isAutoAllowBashIfSandboxedEnabled(),
        q = __$.S8.areUnsandboxedCommandsAllowed(),
        Y = __$.S8.areSandboxSettingsLockedByPolicy(),
        z = __$.S8.checkDependencies().errors.length === 0,
        w;
      if (!z) w = __$.eA.warning;else w = A ? __$.eA.tick : __$.eA.circle;
      let H = "sandbox disabled";
      if (A) H = K ? "sandbox enabled (auto-allow)" : "sandbox enabled", H += q ? ", fallback allowed" : "";
      if (Y) H += " (managed)";
      return `${w} ${H} (⏎ to configure)`;
    },
    argumentHint: 'exclude "command pattern"',
    isEnabled: () => !0,
    isHidden: !__$.S8.isSupportedPlatform() || !__$.S8.isPlatformInEnabledList(),
    immediate: !0,
    type: "local-jsx",
    userFacingName: () => "sandbox",
    call: __$.jn2
  }, __$.UNK = __$.Mn2;
});

// Register to shared state
__$.pNK = pNK;
