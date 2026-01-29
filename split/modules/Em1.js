// Module: Em1
// Dependencies: sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Em1 = v(UT8 => {
  Object.defineProperty(UT8, "__esModule", {
    value: !0
  });
  var maq = CA("os"),
    gaq = CA("util"),
    FT8 = __$.sq();
  class QT8 extends FT8.ServerRuntimeClient {
    constructor(A) {
      FT8.applySdkMetadata(A, "node"), A.transportOptions = {
        textEncoder: new gaq.TextEncoder(),
        ...A.transportOptions
      };
      let K = {
        ...A,
        platform: "node",
        runtime: {
          name: "node",
          version: global.process.version
        },
        serverName: A.serverName || global.process.env.SENTRY_NAME || maq.hostname()
      };
      super(K);
    }
  }
  UT8.NodeClient = QT8;
});

// Register to shared state
__$.Em1 = Em1;
