// Module: ta6
// Dependencies: $1A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ta6 = k(() => {
  __$.$1A = [];
  __$.$1A.push("SIGHUP", "SIGINT", "SIGTERM");
  if (process.platform !== "win32") __$.$1A.push("SIGALRM", "SIGABRT", "SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
  if (process.platform === "linux") __$.$1A.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT");
});

// Register to shared state
__$.ta6 = ta6;
