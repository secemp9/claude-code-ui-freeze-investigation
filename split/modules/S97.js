// Module: S97
// Dependencies: _G6, dxA, C97, RO1, eU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var S97 = v((fow, I97) => {
  var DHY = CA("events"),
    yO1 = CA("http"),
    {
      Duplex: Vow
    } = CA("stream"),
    {
      createHash: jHY
    } = CA("crypto"),
    L97 = __$._G6(),
    AqA = __$.dxA(),
    MHY = __$.C97(),
    PHY = __$.RO1(),
    {
      GUID: VHY,
      kWebSocket: fHY
    } = __$.eU(),
    NHY = /^[+/0-9A-Za-z]{22}==$/;
  class y97 extends DHY {
    constructor(A, K) {
      super();
      if (A = {
        allowSynchronousEvents: !0,
        autoPong: !0,
        maxPayload: 104857600,
        skipUTF8Validation: !1,
        perMessageDeflate: !1,
        handleProtocols: null,
        clientTracking: !0,
        verifyClient: null,
        noServer: !1,
        backlog: null,
        server: null,
        host: null,
        path: null,
        port: null,
        WebSocket: PHY,
        ...A
      }, A.port == null && !A.server && !A.noServer || A.port != null && (A.server || A.noServer) || A.server && A.noServer) throw TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
      if (A.port != null) this._server = yO1.createServer((q, Y) => {
        let z = yO1.STATUS_CODES[426];
        Y.writeHead(426, {
          "Content-Length": z.length,
          "Content-Type": "text/plain"
        }), Y.end(z);
      }), this._server.listen(A.port, A.host, A.backlog, K);else if (A.server) this._server = A.server;
      if (this._server) {
        let q = this.emit.bind(this, "connection");
        this._removeListeners = THY(this._server, {
          listening: this.emit.bind(this, "listening"),
          error: this.emit.bind(this, "error"),
          upgrade: (Y, z, w) => {
            this.handleUpgrade(Y, z, w, q);
          }
        });
      }
      if (A.perMessageDeflate === !0) A.perMessageDeflate = {};
      if (A.clientTracking) this.clients = new Set(), this._shouldEmitClose = !1;
      this.options = A, this._state = 0;
    }
    address() {
      if (this.options.noServer) throw Error('The server is operating in "noServer" mode');
      if (!this._server) return null;
      return this._server.address();
    }
    close(A) {
      if (this._state === 2) {
        if (A) this.once("close", () => {
          A(Error("The server is not running"));
        });
        process.nextTick(nxA, this);
        return;
      }
      if (A) this.once("close", A);
      if (this._state === 1) return;
      if (this._state = 1, this.options.noServer || this.options.server) {
        if (this._server) this._removeListeners(), this._removeListeners = this._server = null;
        if (this.clients) {
          if (!this.clients.size) process.nextTick(nxA, this);else this._shouldEmitClose = !0;
        } else process.nextTick(nxA, this);
      } else {
        let K = this._server;
        this._removeListeners(), this._removeListeners = this._server = null, K.close(() => {
          nxA(this);
        });
      }
    }
    shouldHandle(A) {
      if (this.options.path) {
        let K = A.url.indexOf("?");
        if ((K !== -1 ? A.url.slice(0, K) : A.url) !== this.options.path) return !1;
      }
      return !0;
    }
    handleUpgrade(A, K, q, Y) {
      K.on("error", R97);
      let z = A.headers["sec-websocket-key"],
        w = A.headers.upgrade,
        H = +A.headers["sec-websocket-version"];
      if (A.method !== "GET") {
        KqA(this, A, K, 405, "Invalid HTTP method");
        return;
      }
      if (w === void 0 || w.toLowerCase() !== "websocket") {
        KqA(this, A, K, 400, "Invalid Upgrade header");
        return;
      }
      if (z === void 0 || !NHY.test(z)) {
        KqA(this, A, K, 400, "Missing or invalid Sec-WebSocket-Key header");
        return;
      }
      if (H !== 13 && H !== 8) {
        KqA(this, A, K, 400, "Missing or invalid Sec-WebSocket-Version header", {
          "Sec-WebSocket-Version": "13, 8"
        });
        return;
      }
      if (!this.shouldHandle(A)) {
        rxA(K, 400);
        return;
      }
      let J = A.headers["sec-websocket-protocol"],
        O = new Set();
      if (J !== void 0) try {
        O = MHY.parse(J);
      } catch (_) {
        KqA(this, A, K, 400, "Invalid Sec-WebSocket-Protocol header");
        return;
      }
      let X = A.headers["sec-websocket-extensions"],
        $ = {};
      if (this.options.perMessageDeflate && X !== void 0) {
        let _ = new AqA(this.options.perMessageDeflate, !0, this.options.maxPayload);
        try {
          let G = L97.parse(X);
          if (G[AqA.extensionName]) _.accept(G[AqA.extensionName]), $[AqA.extensionName] = _;
        } catch (G) {
          KqA(this, A, K, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
          return;
        }
      }
      if (this.options.verifyClient) {
        let _ = {
          origin: A.headers[`${H === 8 ? "sec-websocket-origin" : "origin"}`],
          secure: !!(A.socket.authorized || A.socket.encrypted),
          req: A
        };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(_, (G, Z, W, D) => {
            if (!G) return rxA(K, Z || 401, W, D);
            this.completeUpgrade($, z, O, A, K, q, Y);
          });
          return;
        }
        if (!this.options.verifyClient(_)) return rxA(K, 401);
      }
      this.completeUpgrade($, z, O, A, K, q, Y);
    }
    completeUpgrade(A, K, q, Y, z, w, H) {
      if (!z.readable || !z.writable) return z.destroy();
      if (z[fHY]) throw Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
      if (this._state > 0) return rxA(z, 503);
      let O = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${jHY("sha1").update(K + VHY).digest("base64")}`],
        X = new this.options.WebSocket(null, void 0, this.options);
      if (q.size) {
        let $ = this.options.handleProtocols ? this.options.handleProtocols(q, Y) : q.values().next().value;
        if ($) O.push(`Sec-WebSocket-Protocol: ${$}`), X._protocol = $;
      }
      if (A[AqA.extensionName]) {
        let $ = A[AqA.extensionName].params,
          _ = L97.format({
            [AqA.extensionName]: [$]
          });
        O.push(`Sec-WebSocket-Extensions: ${_}`), X._extensions = A;
      }
      if (this.emit("headers", O, Y), z.write(O.concat(`\r
`).join(`\r
`)), z.removeListener("error", R97), X.setSocket(z, w, {
        allowSynchronousEvents: this.options.allowSynchronousEvents,
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation
      }), this.clients) this.clients.add(X), X.on("close", () => {
        if (this.clients.delete(X), this._shouldEmitClose && !this.clients.size) process.nextTick(nxA, this);
      });
      H(X, Y);
    }
  }
  I97.exports = y97;
  function THY(A, K) {
    for (let q of Object.keys(K)) A.on(q, K[q]);
    return function () {
      for (let Y of Object.keys(K)) A.removeListener(Y, K[Y]);
    };
  }
  function nxA(A) {
    A._state = 2, A.emit("close");
  }
  function R97() {
    this.destroy();
  }
  function rxA(A, K, q, Y) {
    q = q || yO1.STATUS_CODES[K], Y = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(q),
      ...Y
    }, A.once("finish", A.destroy), A.end(`HTTP/1.1 ${K} ${yO1.STATUS_CODES[K]}\r
` + Object.keys(Y).map(z => `${z}: ${Y[z]}`).join(`\r
`) + `\r
\r
` + q);
  }
  function KqA(A, K, q, Y, z, w) {
    if (A.listenerCount("wsClientError")) {
      let H = Error(z);
      Error.captureStackTrace(H, KqA), A.emit("wsClientError", H, q, K);
    } else rxA(q, Y, z, w);
  }
});

// Register to shared state
__$.S97 = S97;
