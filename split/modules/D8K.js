// Module: D8K
// Dependencies: X8K, My6, fy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var D8K = v(Z8K => {
  Object.defineProperty(Z8K, "__esModule", {
    value: !0
  });
  Z8K.createConfiguredNodePlugin = Z8K.createNodePlugin = void 0;
  var WW2 = __$.X8K(),
    DW2 = __$.My6(),
    jW2 = __$.fy6();
  function MW2(A) {
    A.updateEvent("context.library.name", "@segment/analytics-node"), A.updateEvent("context.library.version", DW2.version);
    let K = (0, jW2.detectRuntime)();
    if (K === "node") A.updateEvent("_metadata.nodeVersion", process.version);
    A.updateEvent("_metadata.jsRuntime", K);
  }
  function G8K(A) {
    function K(q) {
      return MW2(q), A.enqueue(q);
    }
    return {
      name: "Segment.io",
      type: "destination",
      version: "1.0.0",
      isLoaded: () => !0,
      load: () => Promise.resolve(),
      alias: K,
      group: K,
      identify: K,
      page: K,
      screen: K,
      track: K
    };
  }
  Z8K.createNodePlugin = G8K;
  var PW2 = (A, K) => {
    let q = new WW2.Publisher(A, K);
    return {
      publisher: q,
      plugin: G8K(q)
    };
  };
  Z8K.createConfiguredNodePlugin = PW2;
});

// Register to shared state
__$.D8K = D8K;
