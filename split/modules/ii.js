// Module: ii
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ii = v(mu8 => {
  Object.defineProperty(mu8, "__esModule", {
    value: !0
  });
  mu8.isBlob = mu8.isReadableStream = void 0;
  var u$5 = A => typeof ReadableStream === "function" && (A?.constructor?.name === ReadableStream.name || A instanceof ReadableStream);
  mu8.isReadableStream = u$5;
  var B$5 = A => {
    return typeof Blob === "function" && (A?.constructor?.name === Blob.name || A instanceof Blob);
  };
  mu8.isBlob = B$5;
});

// Register to shared state
__$.ii = ii;
