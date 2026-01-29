// Module: Tw1
// Dependencies: Lt4, zO6, Rt4, St4, fw1, ZEw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Tw1 = k(() => {
  __$.Lt4();
  __$.zO6 = ["verbose", "info", "warning", "error"], __$.Rt4 = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
  };
  __$.St4 = __$.fw1({
    logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
    namespace: "typeSpecRuntime"
  }), __$.ZEw = __$.St4.logger;
});

// Register to shared state
__$.Tw1 = Tw1;
