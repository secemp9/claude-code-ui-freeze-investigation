// Module: okK
// Dependencies: a4A, q6, i6, xcA, iw, ckK, Sw, R2, p7, nL6
//   ... and 48 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var okK = k(() => {
  __$.a4A();
  __$.q6();
  __$.i6();
  __$.i6();
  __$.xcA();
  __$.iw();
  __$.ckK();
  __$.Sw();
  __$.R2();
  __$.p7();
  __$.q6();
  __$.nL6();
  __$.uIA();
  __$.n_1();
  __$.TQ();
  __$.r0A();
  __$.xwA();
  __$.ci();
  __$.eE1();
  __$.ujA();
  __$.CS();
  __$.xcA();
  __$.q6();
  __$.a_1();
  __$.LT();
  __$.xVA();
  __$.IG();
  __$.Gs();
  __$.Xz();
  __$.Z1();
  __$.dj();
  __$.Rr();
  __$.rkK = __$.z6(() => {
    let A = Date.now();
    __$.v8("info", "init_started"), __$.wK("init_function_start");
    try {
      let K = Date.now();
      __$.pE1(), __$.v8("info", "init_configs_enabled", {
        duration_ms: Date.now() - K
      }), __$.wK("init_configs_enabled");
      let q = Date.now();
      __$.pkK(), __$.v8("info", "init_safe_env_vars_applied", {
        duration_ms: Date.now() - q
      }), __$.wK("init_safe_env_vars_applied");
      let Y = Date.now();
      if (__$.a_.initialize(), __$.v8("info", "init_settings_detector_initialized", {
        duration_ms: Date.now() - Y
      }), __$.wK("init_settings_detector_initialized"), __$.FVA.initialize(), __$.wK("init_skill_detector_initialized"), __$.WXK(), __$.wK("init_after_graceful_shutdown"), __$.iy4(), __$.wK("init_after_1p_event_logging"), __$.Zy4(), __$.wK("init_after_oauth_populate"), __$.R36(), __$.wK("init_after_jetbrains_detection"), __$.eL6()) __$.Ot7();
      if (__$.lB()) __$.Mt7();
      __$.wK("init_after_remote_settings_check"), __$.dEK();
      let z = Date.now();
      __$.h("[init] configureGlobalMTLS starting"), __$.YH4(), __$.v8("info", "init_mtls_configured", {
        duration_ms: Date.now() - z
      }), __$.h("[init] configureGlobalMTLS complete");
      let w = Date.now();
      if (__$.h("[init] configureGlobalAgents starting"), __$.OH4(), __$.v8("info", "init_proxy_configured", {
        duration_ms: Date.now() - w
      }), __$.h("[init] configureGlobalAgents complete"), __$.wK("init_network_configured"), __$.d28(), __$.kK(__$.Tv7), __$.sH()) process.env.CLAUDE_CODE_SESSION_ID = __$.d1(), __$.vEK();
      if (__$.CVA()) {
        let H = Date.now();
        __$.REK(), __$.v8("info", "init_scratchpad_created", {
          duration_ms: Date.now() - H
        });
      }
      __$.v8("info", "init_completed", {
        duration_ms: Date.now() - A
      }), __$.wK("init_function_end");
    } catch (K) {
      if (K instanceof __$.KV) return __$.dkK({
        error: K
      });else throw K;
    }
  });
});

// Register to shared state
__$.okK = okK;
