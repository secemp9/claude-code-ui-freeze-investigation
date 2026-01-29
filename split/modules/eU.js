// Module: eU
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eU = v((Yow, h37) => {
  var I37 = ["nodebuffer", "arraybuffer", "fragments"],
    S37 = typeof Blob < "u";
  if (S37) I37.push("blob");
  h37.exports = {
    BINARY_TYPES: I37,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob: S37,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {}
  };
});

// Register to shared state
__$.eU = eU;
