// Module: Qw4
// Dependencies: SZ, IV, ZT, r8A, nRA, aRA, V46, kw4, j9, SK1
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qw4 = v((k8w, Fw4) => {
  var {
      webidl: A5
    } = __$.SZ(),
    {
      URLSerializer: Un3
    } = __$.IV(),
    {
      environmentSettingsObject: hw4
    } = __$.ZT(),
    {
      staticPropertyDescriptors: pn,
      states: AyA,
      sentCloseFrameState: pn3,
      sendHints: $q1
    } = __$.r8A(),
    {
      kWebSocketURL: bw4,
      kReadyState: N46,
      kController: dn3,
      kBinaryType: _q1,
      kResponse: xw4,
      kSentClose: cn3,
      kByteParser: ln3
    } = __$.nRA(),
    {
      isConnecting: in3,
      isEstablished: nn3,
      isClosing: rn3,
      isValidSubprotocol: on3,
      fireEvent: uw4
    } = __$.aRA(),
    {
      establishWebSocketConnection: an3,
      closeWebSocketConnection: Bw4
    } = __$.V46(),
    {
      ByteParser: sn3
    } = __$.kw4(),
    {
      kEnumerableProperty: kk,
      isBlobLike: mw4
    } = __$.j9(),
    {
      getGlobalDispatcher: tn3
    } = __$.SK1(),
    {
      types: gw4
    } = CA("node:util"),
    {
      ErrorEvent: en3,
      CloseEvent: Ar3
    } = __$.U0A(),
    {
      SendQueue: Kr3
    } = __$.Sw4();
  class B2 extends EventTarget {
    #A = {
      open: null,
      error: null,
      close: null,
      message: null
    };
    #K = 0;
    #q = "";
    #z = "";
    #Y;
    constructor(A, K = []) {
      super();
      A5.util.markAsUncloneable(this);
      let q = "WebSocket constructor";
      A5.argumentLengthCheck(arguments, 1, q);
      let Y = A5.converters["DOMString or sequence<DOMString> or WebSocketInit"](K, q, "options");
      A = A5.converters.USVString(A, q, "url"), K = Y.protocols;
      let z = hw4.settingsObject.baseUrl,
        w;
      try {
        w = new URL(A, z);
      } catch (J) {
        throw new DOMException(J, "SyntaxError");
      }
      if (w.protocol === "http:") w.protocol = "ws:";else if (w.protocol === "https:") w.protocol = "wss:";
      if (w.protocol !== "ws:" && w.protocol !== "wss:") throw new DOMException(`Expected a ws: or wss: protocol, got ${w.protocol}`, "SyntaxError");
      if (w.hash || w.href.endsWith("#")) throw new DOMException("Got fragment", "SyntaxError");
      if (typeof K === "string") K = [K];
      if (K.length !== new Set(K.map(J => J.toLowerCase())).size) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      if (K.length > 0 && !K.every(J => on3(J))) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      this[bw4] = new URL(w.href);
      let H = hw4.settingsObject;
      this[dn3] = an3(w, K, H, this, (J, O) => this.#J(J, O), Y), this[N46] = B2.CONNECTING, this[cn3] = pn3.NOT_SENT, this[_q1] = "blob";
    }
    close(A = void 0, K = void 0) {
      A5.brandCheck(this, B2);
      let q = "WebSocket.close";
      if (A !== void 0) A = A5.converters["unsigned short"](A, q, "code", {
        clamp: !0
      });
      if (K !== void 0) K = A5.converters.USVString(K, q, "reason");
      if (A !== void 0) {
        if (A !== 1000 && (A < 3000 || A > 4999)) throw new DOMException("invalid code", "InvalidAccessError");
      }
      let Y = 0;
      if (K !== void 0) {
        if (Y = Buffer.byteLength(K), Y > 123) throw new DOMException(`Reason must be less than 123 bytes; received ${Y}`, "SyntaxError");
      }
      Bw4(this, A, K, Y);
    }
    send(A) {
      A5.brandCheck(this, B2);
      let K = "WebSocket.send";
      if (A5.argumentLengthCheck(arguments, 1, K), A = A5.converters.WebSocketSendData(A, K, "data"), in3(this)) throw new DOMException("Sent before connected.", "InvalidStateError");
      if (!nn3(this) || rn3(this)) return;
      if (typeof A === "string") {
        let q = Buffer.byteLength(A);
        this.#K += q, this.#Y.add(A, () => {
          this.#K -= q;
        }, $q1.string);
      } else if (gw4.isArrayBuffer(A)) this.#K += A.byteLength, this.#Y.add(A, () => {
        this.#K -= A.byteLength;
      }, $q1.arrayBuffer);else if (ArrayBuffer.isView(A)) this.#K += A.byteLength, this.#Y.add(A, () => {
        this.#K -= A.byteLength;
      }, $q1.typedArray);else if (mw4(A)) this.#K += A.size, this.#Y.add(A, () => {
        this.#K -= A.size;
      }, $q1.blob);
    }
    get readyState() {
      return A5.brandCheck(this, B2), this[N46];
    }
    get bufferedAmount() {
      return A5.brandCheck(this, B2), this.#K;
    }
    get url() {
      return A5.brandCheck(this, B2), Un3(this[bw4]);
    }
    get extensions() {
      return A5.brandCheck(this, B2), this.#z;
    }
    get protocol() {
      return A5.brandCheck(this, B2), this.#q;
    }
    get onopen() {
      return A5.brandCheck(this, B2), this.#A.open;
    }
    set onopen(A) {
      if (A5.brandCheck(this, B2), this.#A.open) this.removeEventListener("open", this.#A.open);
      if (typeof A === "function") this.#A.open = A, this.addEventListener("open", A);else this.#A.open = null;
    }
    get onerror() {
      return A5.brandCheck(this, B2), this.#A.error;
    }
    set onerror(A) {
      if (A5.brandCheck(this, B2), this.#A.error) this.removeEventListener("error", this.#A.error);
      if (typeof A === "function") this.#A.error = A, this.addEventListener("error", A);else this.#A.error = null;
    }
    get onclose() {
      return A5.brandCheck(this, B2), this.#A.close;
    }
    set onclose(A) {
      if (A5.brandCheck(this, B2), this.#A.close) this.removeEventListener("close", this.#A.close);
      if (typeof A === "function") this.#A.close = A, this.addEventListener("close", A);else this.#A.close = null;
    }
    get onmessage() {
      return A5.brandCheck(this, B2), this.#A.message;
    }
    set onmessage(A) {
      if (A5.brandCheck(this, B2), this.#A.message) this.removeEventListener("message", this.#A.message);
      if (typeof A === "function") this.#A.message = A, this.addEventListener("message", A);else this.#A.message = null;
    }
    get binaryType() {
      return A5.brandCheck(this, B2), this[_q1];
    }
    set binaryType(A) {
      if (A5.brandCheck(this, B2), A !== "blob" && A !== "arraybuffer") this[_q1] = "blob";else this[_q1] = A;
    }
    #J(A, K) {
      this[xw4] = A;
      let q = new sn3(this, K);
      q.on("drain", qr3), q.on("error", Yr3.bind(this)), A.socket.ws = this, this[ln3] = q, this.#Y = new Kr3(A.socket), this[N46] = AyA.OPEN;
      let Y = A.headersList.get("sec-websocket-extensions");
      if (Y !== null) this.#z = Y;
      let z = A.headersList.get("sec-websocket-protocol");
      if (z !== null) this.#q = z;
      uw4("open", this);
    }
  }
  B2.CONNECTING = B2.prototype.CONNECTING = AyA.CONNECTING;
  B2.OPEN = B2.prototype.OPEN = AyA.OPEN;
  B2.CLOSING = B2.prototype.CLOSING = AyA.CLOSING;
  B2.CLOSED = B2.prototype.CLOSED = AyA.CLOSED;
  Object.defineProperties(B2.prototype, {
    CONNECTING: pn,
    OPEN: pn,
    CLOSING: pn,
    CLOSED: pn,
    url: kk,
    readyState: kk,
    bufferedAmount: kk,
    onopen: kk,
    onerror: kk,
    onclose: kk,
    close: kk,
    onmessage: kk,
    binaryType: kk,
    send: kk,
    extensions: kk,
    protocol: kk,
    [Symbol.toStringTag]: {
      value: "WebSocket",
      writable: !1,
      enumerable: !1,
      configurable: !0
    }
  });
  Object.defineProperties(B2, {
    CONNECTING: pn,
    OPEN: pn,
    CLOSING: pn,
    CLOSED: pn
  });
  A5.converters["sequence<DOMString>"] = A5.sequenceConverter(A5.converters.DOMString);
  A5.converters["DOMString or sequence<DOMString>"] = function (A, K, q) {
    if (A5.util.Type(A) === "Object" && Symbol.iterator in A) return A5.converters["sequence<DOMString>"](A);
    return A5.converters.DOMString(A, K, q);
  };
  A5.converters.WebSocketInit = A5.dictionaryConverter([{
    key: "protocols",
    converter: A5.converters["DOMString or sequence<DOMString>"],
    defaultValue: () => []
  }, {
    key: "dispatcher",
    converter: A5.converters.any,
    defaultValue: () => tn3()
  }, {
    key: "headers",
    converter: A5.nullableConverter(A5.converters.HeadersInit)
  }]);
  A5.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function (A) {
    if (A5.util.Type(A) === "Object" && !(Symbol.iterator in A)) return A5.converters.WebSocketInit(A);
    return {
      protocols: A5.converters["DOMString or sequence<DOMString>"](A)
    };
  };
  A5.converters.WebSocketSendData = function (A) {
    if (A5.util.Type(A) === "Object") {
      if (mw4(A)) return A5.converters.Blob(A, {
        strict: !1
      });
      if (ArrayBuffer.isView(A) || gw4.isArrayBuffer(A)) return A5.converters.BufferSource(A);
    }
    return A5.converters.USVString(A);
  };
  function qr3() {
    this.ws[xw4].socket.resume();
  }
  function Yr3(A) {
    let K, q;
    if (A instanceof Ar3) K = A.reason, q = A.code;else K = A.message;
    uw4("error", this, () => new en3("error", {
      error: A,
      message: K
    })), Bw4(this, q);
  }
  Fw4.exports = {
    WebSocket: B2
  };
});

// Register to shared state
__$.Qw4 = Qw4;
