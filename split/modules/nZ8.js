// Module: nZ8
// Dependencies: eTA, qD, Ob, SZ8, awA, qEq, KEq, swA, og, paA
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nZ8 = k(() => {
  __$.eTA();
  __$.qD = {
    staleTTL: 60000,
    maxAge: 14400000,
    cacheKey: "gbFeaturesCache",
    backgroundSync: !0,
    maxEntries: 10,
    disableIdleStreams: !1,
    idleStreamInterval: 20000,
    disableCache: !1
  }, __$.Ob = __$.SZ8(), __$.awA = {
    fetchFeaturesCall: A => {
      let {
        host: K,
        clientKey: q,
        headers: Y
      } = A;
      return __$.Ob.fetch(`${K}/api/features/${q}`, {
        headers: Y
      });
    },
    fetchRemoteEvalCall: A => {
      let {
          host: K,
          clientKey: q,
          payload: Y,
          headers: z
        } = A,
        w = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...z
          },
          body: JSON.stringify(Y)
        };
      return __$.Ob.fetch(`${K}/api/eval/${q}`, w);
    },
    eventSourceCall: A => {
      let {
        host: K,
        clientKey: q,
        headers: Y
      } = A;
      if (Y) return new __$.Ob.EventSource(`${K}/sub/${q}`, {
        headers: Y
      });
      return new __$.Ob.EventSource(`${K}/sub/${q}`);
    },
    startIdleListener: () => {
      let A;
      if (!(typeof window < "u" && typeof document < "u")) return;
      let q = () => {
        if (document.visibilityState === "visible") window.clearTimeout(A), __$.qEq();else if (document.visibilityState === "hidden") A = window.setTimeout(__$.KEq, __$.qD.idleStreamInterval);
      };
      return document.addEventListener("visibilitychange", q), () => document.removeEventListener("visibilitychange", q);
    },
    stopIdleListener: () => {}
  };
  try {
    if (globalThis.localStorage) __$.Ob.localStorage = globalThis.localStorage;
  } catch (A) {}
  __$.swA = new Map(), __$.og = new Map(), __$.paA = new Map(), __$.twA = new Map(), __$.ewA = new Set();
});

// Register to shared state
__$.nZ8 = nZ8;
