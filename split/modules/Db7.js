// Module: Db7
// Dependencies: ptY, dtY, ctY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Db7 = k(() => {
  __$.ptY = {
    visibilityState: "visible",
    documentElement: {
      lang: "en"
    },
    addEventListener: (A, K) => {}
  }, __$.dtY = {
    document: __$.ptY,
    location: {
      href: "node://localhost",
      pathname: "/"
    },
    addEventListener: (A, K) => {
      if (A === "beforeunload") process.on("exit", () => {
        if (typeof K === "function") K({});else K.handleEvent({});
      });
    },
    focus: () => {},
    innerHeight: 768,
    innerWidth: 1024
  }, __$.ctY = {
    sendBeacon: (A, K) => {
      return !0;
    },
    userAgent: "Mozilla/5.0 (Node.js) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0",
    language: "en-US"
  };
  if (typeof window > "u") global.window = __$.dtY;
  if (typeof navigator > "u") global.navigator = __$.ctY;
});

// Register to shared state
__$.Db7 = Db7;
