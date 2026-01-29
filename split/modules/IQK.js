// Module: IQK
// Dependencies: n3, p7, C1, i6, sO, BQ, Z5z, W5z, NlA, j5z
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IQK = k(() => {
  __$.n3();
  __$.p7();
  __$.C1();
  __$.i6();
  __$.sO();
  __$.BQ();
  __$.Z5z = new Set(["tengu_api_error", "tengu_api_success", "tengu_compact_failed", "tengu_model_fallback_triggered", "tengu_oauth_error", "tengu_oauth_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_lock_acquired", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_completed", "tengu_oauth_token_refresh_lock_releasing", "tengu_oauth_token_refresh_lock_released", "tengu_query_error", "tengu_tool_use_error", "tengu_tool_use_success"]), __$.W5z = ["arch", "clientType", "errorType", "http_status_range", "http_status", "model", "platform", "provider", "toolName", "userBucket", "userType", "version", "versionBase"];
  __$.NlA = [];
  __$.j5z = __$.z6(async () => {
    if (__$.K$()) return __$.IC1 = !1, !1;
    try {
      let A = async () => {
        if (__$.Sc) clearTimeout(__$.Sc), __$.Sc = null;
        await __$.$c6();
      };
      return process.on("beforeExit", A), __$.IC1 = !0, !0;
    } catch (A) {
      return __$.KA(A instanceof Error ? A : Error(String(A))), __$.IC1 = !1, !1;
    }
  });
  __$.P5z = __$.z6(() => {
    let A = __$.my(),
      K = __$.J5z("sha256").update(A).digest("hex");
    return parseInt(K.slice(0, 8), 16) % __$.M5z;
  });
});

// Register to shared state
__$.IQK = IQK;
