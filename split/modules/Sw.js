// Module: Sw
// Dependencies: p7, Z1, R2, uIA, P4A, Ix, SXA, dj, l1, q6
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sw = k(() => {
  __$.p7();
  __$.Z1();
  __$.R2();
  __$.uIA();
  __$.P4A();
  __$.Ix();
  __$.SXA();
  __$.dj();
  __$.l1();
  __$.q6();
  __$.UK();
  __$.WXK = __$.z6(() => {
    if (process.on("SIGINT", () => {
      __$.v8("info", "shutdown_signal", {
        signal: "SIGINT"
      }), __$.Jq(0);
    }), process.on("SIGTERM", () => {
      __$.v8("info", "shutdown_signal", {
        signal: "SIGTERM"
      }), __$.Jq(143);
    }), process.platform !== "win32") process.on("SIGHUP", () => {
      __$.v8("info", "shutdown_signal", {
        signal: "SIGHUP"
      }), __$.Jq(129);
    });
    process.on("uncaughtException", A => {
      __$.v8("error", "uncaught_exception", {
        error_name: A.name,
        error_message: A.message.slice(0, 2000)
      }), __$.n("tengu_uncaught_exception", {
        error_name: A.name
      });
    }), process.on("unhandledRejection", A => {
      let K = A instanceof Error ? A.name : typeof A === "string" ? "string" : "unknown",
        q = A instanceof Error ? {
          error_name: A.name,
          error_message: A.message.slice(0, 2000)
        } : {
          error_message: String(A).slice(0, 2000)
        };
      __$.v8("error", "unhandled_rejection", q), __$.n("tengu_unhandled_rejection", {
        error_name: K
      });
    });
  });
});

// Register to shared state
__$.Sw = Sw;
