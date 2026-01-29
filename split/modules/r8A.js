// Module: r8A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r8A = v((M8w, lz4) => {
  var xi3 = {
      enumerable: !0,
      writable: !1,
      configurable: !1
    },
    ui3 = {
      CONNECTING: 0,
      OPEN: 1,
      CLOSING: 2,
      CLOSED: 3
    },
    Bi3 = {
      NOT_SENT: 0,
      PROCESSING: 1,
      SENT: 2
    },
    mi3 = {
      CONTINUATION: 0,
      TEXT: 1,
      BINARY: 2,
      CLOSE: 8,
      PING: 9,
      PONG: 10
    },
    gi3 = {
      INFO: 0,
      PAYLOADLENGTH_16: 2,
      PAYLOADLENGTH_64: 3,
      READ_DATA: 4
    },
    Fi3 = Buffer.allocUnsafe(0),
    Qi3 = {
      string: 1,
      typedArray: 2,
      arrayBuffer: 3,
      blob: 4
    };
  lz4.exports = {
    uid: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    sentCloseFrameState: Bi3,
    staticPropertyDescriptors: xi3,
    states: ui3,
    opcodes: mi3,
    maxUnsigned16Bit: 65535,
    parserStates: gi3,
    emptyBuffer: Fi3,
    sendHints: Qi3
  };
});

// Register to shared state
__$.r8A = r8A;
