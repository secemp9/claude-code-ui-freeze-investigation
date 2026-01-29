// Module: VS1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var VS1 = v(u48 => {
  Object.defineProperty(u48, "__esModule", {
    value: !0
  });
  u48.createInvalidObservableTypeError = void 0;
  function XKq(A) {
    return TypeError("You provided " + (A !== null && typeof A === "object" ? "an invalid object" : "'" + A + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  u48.createInvalidObservableTypeError = XKq;
});

// Register to shared state
__$.VS1 = VS1;
