// Module: a4A
// Dependencies: Z1, l1, l6, q6, e6, b1, T91, Fy4, KZ9, Qy4
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a4A = k(() => {
  __$.Z1();
  __$.l1();
  __$.l6();
  __$.q6();
  __$.e6();
  __$.b1();
  __$.T91 = process.env.CLAUDE_CODE_PROFILE_STARTUP === "1", __$.Fy4 = Math.random() < __$.KZ9, __$.Qy4 = __$.T91 || __$.Fy4, __$.Uy4 = new Map();
  __$.qZ9 = {
    import_time: ["cli_entry", "main_tsx_imports_loaded"],
    init_time: ["init_function_start", "init_function_end"],
    settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
    total_time: ["cli_entry", "main_after_run"]
  };
  if (__$.Qy4) __$.wK("profiler_initialized");
});

// Register to shared state
__$.a4A = a4A;
