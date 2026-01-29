// Module: RO1
// Dependencies: dxA, JG6, XG6, uGA, eU, J97, _G6, UxA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RO1 = v((Dow, f97) => {
  var mwY = CA("events"),
    gwY = CA("https"),
    FwY = CA("http"),
    _97 = CA("net"),
    QwY = CA("tls"),
    {
      randomBytes: UwY,
      createHash: pwY
    } = CA("crypto"),
    {
      Duplex: Zow,
      Readable: Wow
    } = CA("stream"),
    {
      URL: GG6
    } = CA("url"),
    za = __$.dxA(),
    dwY = __$.JG6(),
    cwY = __$.XG6(),
    {
      isBlob: lwY
    } = __$.uGA(),
    {
      BINARY_TYPES: X97,
      EMPTY_BUFFER: kO1,
      GUID: iwY,
      kForOnEventAttribute: ZG6,
      kListener: nwY,
      kStatusCode: rwY,
      kWebSocket: TG,
      NOOP: G97
    } = __$.eU(),
    {
      EventTarget: {
        addEventListener: owY,
        removeEventListener: awY
      }
    } = __$.J97(),
    {
      format: swY,
      parse: twY
    } = __$._G6(),
    {
      toBuffer: ewY
    } = __$.UxA(),
    Z97 = Symbol("kAborted"),
    WG6 = [8, 13],
    Kp = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
    AHY = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
  class y5 extends mwY {
    constructor(A, K, q) {
      super();
      if (this._binaryType = X97[0], this._closeCode = 1006, this._closeFrameReceived = !1, this._closeFrameSent = !1, this._closeMessage = kO1, this._closeTimer = null, this._errorEmitted = !1, this._extensions = {}, this._paused = !1, this._protocol = "", this._readyState = y5.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, A !== null) {
        if (this._bufferedAmount = 0, this._isServer = !1, this._redirects = 0, K === void 0) K = [];else if (!Array.isArray(K)) if (typeof K === "object" && K !== null) q = K, K = [];else K = [K];
        W97(this, A, K, q);
      } else this._autoPong = q.autoPong, this._isServer = !0;
    }
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(A) {
      if (!X97.includes(A)) return;
      if (this._binaryType = A, this._receiver) this._receiver._binaryType = A;
    }
    get bufferedAmount() {
      if (!this._socket) return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    get extensions() {
      return Object.keys(this._extensions).join();
    }
    get isPaused() {
      return this._paused;
    }
    get onclose() {
      return null;
    }
    get onerror() {
      return null;
    }
    get onopen() {
      return null;
    }
    get onmessage() {
      return null;
    }
    get protocol() {
      return this._protocol;
    }
    get readyState() {
      return this._readyState;
    }
    get url() {
      return this._url;
    }
    setSocket(A, K, q) {
      let Y = new dwY({
          allowSynchronousEvents: q.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: q.maxPayload,
          skipUTF8Validation: q.skipUTF8Validation
        }),
        z = new cwY(A, this._extensions, q.generateMask);
      if (this._receiver = Y, this._sender = z, this._socket = A, Y[TG] = this, z[TG] = this, A[TG] = this, Y.on("conclude", YHY), Y.on("drain", zHY), Y.on("error", wHY), Y.on("message", HHY), Y.on("ping", JHY), Y.on("pong", OHY), z.onerror = XHY, A.setTimeout) A.setTimeout(0);
      if (A.setNoDelay) A.setNoDelay();
      if (K.length > 0) A.unshift(K);
      A.on("close", M97), A.on("data", LO1), A.on("end", P97), A.on("error", V97), this._readyState = y5.OPEN, this.emit("open");
    }
    emitClose() {
      if (!this._socket) {
        this._readyState = y5.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
        return;
      }
      if (this._extensions[za.extensionName]) this._extensions[za.extensionName].cleanup();
      this._receiver.removeAllListeners(), this._readyState = y5.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
    }
    close(A, K) {
      if (this.readyState === y5.CLOSED) return;
      if (this.readyState === y5.CONNECTING) {
        lT(this, this._req, "WebSocket was closed before the connection was established");
        return;
      }
      if (this.readyState === y5.CLOSING) {
        if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) this._socket.end();
        return;
      }
      this._readyState = y5.CLOSING, this._sender.close(A, K, !this._isServer, q => {
        if (q) return;
        if (this._closeFrameSent = !0, this._closeFrameReceived || this._receiver._writableState.errorEmitted) this._socket.end();
      }), j97(this);
    }
    pause() {
      if (this.readyState === y5.CONNECTING || this.readyState === y5.CLOSED) return;
      this._paused = !0, this._socket.pause();
    }
    ping(A, K, q) {
      if (this.readyState === y5.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof A === "function") q = A, A = K = void 0;else if (typeof K === "function") q = K, K = void 0;
      if (typeof A === "number") A = A.toString();
      if (this.readyState !== y5.OPEN) {
        DG6(this, A, q);
        return;
      }
      if (K === void 0) K = !this._isServer;
      this._sender.ping(A || kO1, K, q);
    }
    pong(A, K, q) {
      if (this.readyState === y5.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof A === "function") q = A, A = K = void 0;else if (typeof K === "function") q = K, K = void 0;
      if (typeof A === "number") A = A.toString();
      if (this.readyState !== y5.OPEN) {
        DG6(this, A, q);
        return;
      }
      if (K === void 0) K = !this._isServer;
      this._sender.pong(A || kO1, K, q);
    }
    resume() {
      if (this.readyState === y5.CONNECTING || this.readyState === y5.CLOSED) return;
      if (this._paused = !1, !this._receiver._writableState.needDrain) this._socket.resume();
    }
    send(A, K, q) {
      if (this.readyState === y5.CONNECTING) throw Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof K === "function") q = K, K = {};
      if (typeof A === "number") A = A.toString();
      if (this.readyState !== y5.OPEN) {
        DG6(this, A, q);
        return;
      }
      let Y = {
        binary: typeof A !== "string",
        mask: !this._isServer,
        compress: !0,
        fin: !0,
        ...K
      };
      if (!this._extensions[za.extensionName]) Y.compress = !1;
      this._sender.send(A || kO1, Y, q);
    }
    terminate() {
      if (this.readyState === y5.CLOSED) return;
      if (this.readyState === y5.CONNECTING) {
        lT(this, this._req, "WebSocket was closed before the connection was established");
        return;
      }
      if (this._socket) this._readyState = y5.CLOSING, this._socket.destroy();
    }
  }
  Object.defineProperty(y5, "CONNECTING", {
    enumerable: !0,
    value: Kp.indexOf("CONNECTING")
  });
  Object.defineProperty(y5.prototype, "CONNECTING", {
    enumerable: !0,
    value: Kp.indexOf("CONNECTING")
  });
  Object.defineProperty(y5, "OPEN", {
    enumerable: !0,
    value: Kp.indexOf("OPEN")
  });
  Object.defineProperty(y5.prototype, "OPEN", {
    enumerable: !0,
    value: Kp.indexOf("OPEN")
  });
  Object.defineProperty(y5, "CLOSING", {
    enumerable: !0,
    value: Kp.indexOf("CLOSING")
  });
  Object.defineProperty(y5.prototype, "CLOSING", {
    enumerable: !0,
    value: Kp.indexOf("CLOSING")
  });
  Object.defineProperty(y5, "CLOSED", {
    enumerable: !0,
    value: Kp.indexOf("CLOSED")
  });
  Object.defineProperty(y5.prototype, "CLOSED", {
    enumerable: !0,
    value: Kp.indexOf("CLOSED")
  });
  ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach(A => {
    Object.defineProperty(y5.prototype, A, {
      enumerable: !0
    });
  });
  ["open", "error", "close", "message"].forEach(A => {
    Object.defineProperty(y5.prototype, `on${A}`, {
      enumerable: !0,
      get() {
        for (let K of this.listeners(A)) if (K[ZG6]) return K[nwY];
        return null;
      },
      set(K) {
        for (let q of this.listeners(A)) if (q[ZG6]) {
          this.removeListener(A, q);
          break;
        }
        if (typeof K !== "function") return;
        this.addEventListener(A, K, {
          [ZG6]: !0
        });
      }
    });
  });
  y5.prototype.addEventListener = owY;
  y5.prototype.removeEventListener = awY;
  f97.exports = y5;
  function W97(A, K, q, Y) {
    let z = {
      allowSynchronousEvents: !0,
      autoPong: !0,
      protocolVersion: WG6[1],
      maxPayload: 104857600,
      skipUTF8Validation: !1,
      perMessageDeflate: !0,
      followRedirects: !1,
      maxRedirects: 10,
      ...Y,
      socketPath: void 0,
      hostname: void 0,
      protocol: void 0,
      timeout: void 0,
      method: "GET",
      host: void 0,
      path: void 0,
      port: void 0
    };
    if (A._autoPong = z.autoPong, !WG6.includes(z.protocolVersion)) throw RangeError(`Unsupported protocol version: ${z.protocolVersion} (supported versions: ${WG6.join(", ")})`);
    let w;
    if (K instanceof GG6) w = K;else try {
      w = new GG6(K);
    } catch (D) {
      throw SyntaxError(`Invalid URL: ${K}`);
    }
    if (w.protocol === "http:") w.protocol = "ws:";else if (w.protocol === "https:") w.protocol = "wss:";
    A._url = w.href;
    let H = w.protocol === "wss:",
      J = w.protocol === "ws+unix:",
      O;
    if (w.protocol !== "ws:" && !H && !J) O = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;else if (J && !w.pathname) O = "The URL's pathname is empty";else if (w.hash) O = "The URL contains a fragment identifier";
    if (O) {
      let D = SyntaxError(O);
      if (A._redirects === 0) throw D;else {
        CO1(A, D);
        return;
      }
    }
    let X = H ? 443 : 80,
      $ = UwY(16).toString("base64"),
      _ = H ? gwY.request : FwY.request,
      G = new Set(),
      Z;
    if (z.createConnection = z.createConnection || (H ? qHY : KHY), z.defaultPort = z.defaultPort || X, z.port = w.port || X, z.host = w.hostname.startsWith("[") ? w.hostname.slice(1, -1) : w.hostname, z.headers = {
      ...z.headers,
      "Sec-WebSocket-Version": z.protocolVersion,
      "Sec-WebSocket-Key": $,
      Connection: "Upgrade",
      Upgrade: "websocket"
    }, z.path = w.pathname + w.search, z.timeout = z.handshakeTimeout, z.perMessageDeflate) Z = new za(z.perMessageDeflate !== !0 ? z.perMessageDeflate : {}, !1, z.maxPayload), z.headers["Sec-WebSocket-Extensions"] = swY({
      [za.extensionName]: Z.offer()
    });
    if (q.length) {
      for (let D of q) {
        if (typeof D !== "string" || !AHY.test(D) || G.has(D)) throw SyntaxError("An invalid or duplicated subprotocol was specified");
        G.add(D);
      }
      z.headers["Sec-WebSocket-Protocol"] = q.join(",");
    }
    if (z.origin) if (z.protocolVersion < 13) z.headers["Sec-WebSocket-Origin"] = z.origin;else z.headers.Origin = z.origin;
    if (w.username || w.password) z.auth = `${w.username}:${w.password}`;
    if (J) {
      let D = z.path.split(":");
      z.socketPath = D[0], z.path = D[1];
    }
    let W;
    if (z.followRedirects) {
      if (A._redirects === 0) {
        A._originalIpc = J, A._originalSecure = H, A._originalHostOrSocketPath = J ? z.socketPath : w.host;
        let D = Y && Y.headers;
        if (Y = {
          ...Y,
          headers: {}
        }, D) for (let [j, M] of Object.entries(D)) Y.headers[j.toLowerCase()] = M;
      } else if (A.listenerCount("redirect") === 0) {
        let D = J ? A._originalIpc ? z.socketPath === A._originalHostOrSocketPath : !1 : A._originalIpc ? !1 : w.host === A._originalHostOrSocketPath;
        if (!D || A._originalSecure && !H) {
          if (delete z.headers.authorization, delete z.headers.cookie, !D) delete z.headers.host;
          z.auth = void 0;
        }
      }
      if (z.auth && !Y.headers.authorization) Y.headers.authorization = "Basic " + Buffer.from(z.auth).toString("base64");
      if (W = A._req = _(z), A._redirects) A.emit("redirect", A.url, W);
    } else W = A._req = _(z);
    if (z.timeout) W.on("timeout", () => {
      lT(A, W, "Opening handshake has timed out");
    });
    if (W.on("error", D => {
      if (W === null || W[Z97]) return;
      W = A._req = null, CO1(A, D);
    }), W.on("response", D => {
      let j = D.headers.location,
        M = D.statusCode;
      if (j && z.followRedirects && M >= 300 && M < 400) {
        if (++A._redirects > z.maxRedirects) {
          lT(A, W, "Maximum redirects exceeded");
          return;
        }
        W.abort();
        let P;
        try {
          P = new GG6(j, K);
        } catch (f) {
          let N = SyntaxError(`Invalid URL: ${j}`);
          CO1(A, N);
          return;
        }
        W97(A, P, q, Y);
      } else if (!A.emit("unexpected-response", W, D)) lT(A, W, `Unexpected server response: ${D.statusCode}`);
    }), W.on("upgrade", (D, j, M) => {
      if (A.emit("upgrade", D), A.readyState !== y5.CONNECTING) return;
      W = A._req = null;
      let P = D.headers.upgrade;
      if (P === void 0 || P.toLowerCase() !== "websocket") {
        lT(A, j, "Invalid Upgrade header");
        return;
      }
      let f = pwY("sha1").update($ + iwY).digest("base64");
      if (D.headers["sec-websocket-accept"] !== f) {
        lT(A, j, "Invalid Sec-WebSocket-Accept header");
        return;
      }
      let N = D.headers["sec-websocket-protocol"],
        T;
      if (N !== void 0) {
        if (!G.size) T = "Server sent a subprotocol but none was requested";else if (!G.has(N)) T = "Server sent an invalid subprotocol";
      } else if (G.size) T = "Server sent no subprotocol";
      if (T) {
        lT(A, j, T);
        return;
      }
      if (N) A._protocol = N;
      let C = D.headers["sec-websocket-extensions"];
      if (C !== void 0) {
        if (!Z) {
          lT(A, j, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
          return;
        }
        let R;
        try {
          R = twY(C);
        } catch (y) {
          lT(A, j, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        let x = Object.keys(R);
        if (x.length !== 1 || x[0] !== za.extensionName) {
          lT(A, j, "Server indicated an extension that was not requested");
          return;
        }
        try {
          Z.accept(R[za.extensionName]);
        } catch (y) {
          lT(A, j, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        A._extensions[za.extensionName] = Z;
      }
      A.setSocket(j, M, {
        allowSynchronousEvents: z.allowSynchronousEvents,
        generateMask: z.generateMask,
        maxPayload: z.maxPayload,
        skipUTF8Validation: z.skipUTF8Validation
      });
    }), z.finishRequest) z.finishRequest(W, A);else W.end();
  }
  function CO1(A, K) {
    A._readyState = y5.CLOSING, A._errorEmitted = !0, A.emit("error", K), A.emitClose();
  }
  function KHY(A) {
    return A.path = A.socketPath, _97.connect(A);
  }
  function qHY(A) {
    if (A.path = void 0, !A.servername && A.servername !== "") A.servername = _97.isIP(A.host) ? "" : A.host;
    return QwY.connect(A);
  }
  function lT(A, K, q) {
    A._readyState = y5.CLOSING;
    let Y = Error(q);
    if (Error.captureStackTrace(Y, lT), K.setHeader) {
      if (K[Z97] = !0, K.abort(), K.socket && !K.socket.destroyed) K.socket.destroy();
      process.nextTick(CO1, A, Y);
    } else K.destroy(Y), K.once("error", A.emit.bind(A, "error")), K.once("close", A.emitClose.bind(A));
  }
  function DG6(A, K, q) {
    if (K) {
      let Y = lwY(K) ? K.size : ewY(K).length;
      if (A._socket) A._sender._bufferedBytes += Y;else A._bufferedAmount += Y;
    }
    if (q) {
      let Y = Error(`WebSocket is not open: readyState ${A.readyState} (${Kp[A.readyState]})`);
      process.nextTick(q, Y);
    }
  }
  function YHY(A, K) {
    let q = this[TG];
    if (q._closeFrameReceived = !0, q._closeMessage = K, q._closeCode = A, q._socket[TG] === void 0) return;
    if (q._socket.removeListener("data", LO1), process.nextTick(D97, q._socket), A === 1005) q.close();else q.close(A, K);
  }
  function zHY() {
    let A = this[TG];
    if (!A.isPaused) A._socket.resume();
  }
  function wHY(A) {
    let K = this[TG];
    if (K._socket[TG] !== void 0) K._socket.removeListener("data", LO1), process.nextTick(D97, K._socket), K.close(A[rwY]);
    if (!K._errorEmitted) K._errorEmitted = !0, K.emit("error", A);
  }
  function $97() {
    this[TG].emitClose();
  }
  function HHY(A, K) {
    this[TG].emit("message", A, K);
  }
  function JHY(A) {
    let K = this[TG];
    if (K._autoPong) K.pong(A, !this._isServer, G97);
    K.emit("ping", A);
  }
  function OHY(A) {
    this[TG].emit("pong", A);
  }
  function D97(A) {
    A.resume();
  }
  function XHY(A) {
    let K = this[TG];
    if (K.readyState === y5.CLOSED) return;
    if (K.readyState === y5.OPEN) K._readyState = y5.CLOSING, j97(K);
    if (this._socket.end(), !K._errorEmitted) K._errorEmitted = !0, K.emit("error", A);
  }
  function j97(A) {
    A._closeTimer = setTimeout(A._socket.destroy.bind(A._socket), 30000);
  }
  function M97() {
    let A = this[TG];
    this.removeListener("close", M97), this.removeListener("data", LO1), this.removeListener("end", P97), A._readyState = y5.CLOSING;
    let K;
    if (!this._readableState.endEmitted && !A._closeFrameReceived && !A._receiver._writableState.errorEmitted && (K = A._socket.read()) !== null) A._receiver.write(K);
    if (A._receiver.end(), this[TG] = void 0, clearTimeout(A._closeTimer), A._receiver._writableState.finished || A._receiver._writableState.errorEmitted) A.emitClose();else A._receiver.on("error", $97), A._receiver.on("finish", $97);
  }
  function LO1(A) {
    if (!this[TG]._receiver.write(A)) this.pause();
  }
  function P97() {
    let A = this[TG];
    A._readyState = y5.CLOSING, A._receiver.end(), this.end();
  }
  function V97() {
    let A = this[TG];
    if (this.removeListener("error", V97), this.on("error", G97), A) A._readyState = y5.CLOSING, this.destroy();
  }
});

// Register to shared state
__$.RO1 = RO1;
