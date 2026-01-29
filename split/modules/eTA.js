// Module: eTA
// Dependencies: IZ8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eTA = k(() => {
  __$.IZ8 = {
    fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
    SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
    EventSource: globalThis.EventSource
  };
});

// Register to shared state
__$.eTA = eTA;
