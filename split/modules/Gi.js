// Module: Gi
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gi = v(mf8 => {
  var {
    _optionalChain: Bf8
  } = __$.H8();
  Object.defineProperty(mf8, "__esModule", {
    value: !0
  });
  function wiq(A) {
    let K = Bf8([A, "call", Y => Y(), "access", Y => Y.getClient, "call", Y => Y(), "optionalAccess", Y => Y.getOptions, "call", Y => Y()]);
    return (Bf8([K, "optionalAccess", Y => Y.instrumenter]) || "sentry") !== "sentry";
  }
  mf8.shouldDisableAutoInstrumentation = wiq;
});

// Register to shared state
__$.Gi = Gi;
