// Module: Qp8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qp8 = v(gp8 => {
  Object.defineProperty(gp8, "__esModule", {
    value: !0
  });
  gp8.isStreamingPayload = void 0;
  var VR5 = CA("stream"),
    fR5 = A => A?.body instanceof VR5.Readable || typeof ReadableStream < "u" && A?.body instanceof ReadableStream;
  gp8.isStreamingPayload = fR5;
});

// Register to shared state
__$.Qp8 = Qp8;
