// Module: aRA
// Dependencies: nRA, r8A, U0A, IV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aRA = v((V8w, Kw4) => {
  var {
      kReadyState: rRA,
      kController: Ui3,
      kResponse: pi3,
      kBinaryType: di3,
      kWebSocketURL: ci3
    } = __$.nRA(),
    {
      states: oRA,
      opcodes: Qn
    } = __$.r8A(),
    {
      ErrorEvent: li3,
      createFastMessageEvent: ii3
    } = __$.U0A(),
    {
      isUtf8: ni3
    } = CA("node:buffer"),
    {
      collectASequenceOfCodePointsFast: ri3,
      removeHTTPWhitespace: nz4
    } = __$.IV();
  function oi3(A) {
    return A[rRA] === oRA.CONNECTING;
  }
  function ai3(A) {
    return A[rRA] === oRA.OPEN;
  }
  function si3(A) {
    return A[rRA] === oRA.CLOSING;
  }
  function ti3(A) {
    return A[rRA] === oRA.CLOSED;
  }
  function j46(A, K, q = (z, w) => new Event(z, w), Y = {}) {
    let z = q(A, Y);
    K.dispatchEvent(z);
  }
  function ei3(A, K, q) {
    if (A[rRA] !== oRA.OPEN) return;
    let Y;
    if (K === Qn.TEXT) try {
      Y = Aw4(q);
    } catch {
      oz4(A, "Received invalid UTF-8 in text frame.");
      return;
    } else if (K === Qn.BINARY) if (A[di3] === "blob") Y = new Blob([q]);else Y = An3(q);
    j46("message", A, ii3, {
      origin: A[ci3].origin,
      data: Y
    });
  }
  function An3(A) {
    if (A.byteLength === A.buffer.byteLength) return A.buffer;
    return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
  }
  function Kn3(A) {
    if (A.length === 0) return !1;
    for (let K = 0; K < A.length; ++K) {
      let q = A.charCodeAt(K);
      if (q < 33 || q > 126 || q === 34 || q === 40 || q === 41 || q === 44 || q === 47 || q === 58 || q === 59 || q === 60 || q === 61 || q === 62 || q === 63 || q === 64 || q === 91 || q === 92 || q === 93 || q === 123 || q === 125) return !1;
    }
    return !0;
  }
  function qn3(A) {
    if (A >= 1000 && A < 1015) return A !== 1004 && A !== 1005 && A !== 1006;
    return A >= 3000 && A <= 4999;
  }
  function oz4(A, K) {
    let {
      [Ui3]: q,
      [pi3]: Y
    } = A;
    if (q.abort(), Y?.socket && !Y.socket.destroyed) Y.socket.destroy();
    if (K) j46("error", A, (z, w) => new li3(z, w), {
      error: Error(K),
      message: K
    });
  }
  function az4(A) {
    return A === Qn.CLOSE || A === Qn.PING || A === Qn.PONG;
  }
  function sz4(A) {
    return A === Qn.CONTINUATION;
  }
  function tz4(A) {
    return A === Qn.TEXT || A === Qn.BINARY;
  }
  function Yn3(A) {
    return tz4(A) || sz4(A) || az4(A);
  }
  function zn3(A) {
    let K = {
        position: 0
      },
      q = new Map();
    while (K.position < A.length) {
      let Y = ri3(";", A, K),
        [z, w = ""] = Y.split("=");
      q.set(nz4(z, !0, !1), nz4(w, !1, !0)), K.position++;
    }
    return q;
  }
  function wn3(A) {
    for (let K = 0; K < A.length; K++) {
      let q = A.charCodeAt(K);
      if (q < 48 || q > 57) return !1;
    }
    return !0;
  }
  var ez4 = typeof process.versions.icu === "string",
    rz4 = ez4 ? new TextDecoder("utf-8", {
      fatal: !0
    }) : void 0,
    Aw4 = ez4 ? rz4.decode.bind(rz4) : function (A) {
      if (ni3(A)) return A.toString("utf-8");
      throw TypeError("Invalid utf-8 received.");
    };
  Kw4.exports = {
    isConnecting: oi3,
    isEstablished: ai3,
    isClosing: si3,
    isClosed: ti3,
    fireEvent: j46,
    isValidSubprotocol: Kn3,
    isValidStatusCode: qn3,
    failWebsocketConnection: oz4,
    websocketMessageReceived: ei3,
    utf8Decode: Aw4,
    isControlFrame: az4,
    isContinuationFrame: sz4,
    isTextBinaryFrame: tz4,
    isValidOpcode: Yn3,
    parseExtensions: zn3,
    isValidClientWindowBits: wn3
  };
});

// Register to shared state
__$.aRA = aRA;
