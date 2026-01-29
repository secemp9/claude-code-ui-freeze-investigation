// Module: V46
// Dependencies: r8A, nRA, aRA, Y0A, U0A, u0A, pRA, d8A, ZT, zq1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V46 = v((N8w, $w4) => {
  var {
      uid: On3,
      states: tRA,
      sentCloseFrameState: wq1,
      emptyBuffer: Xn3,
      opcodes: $n3
    } = __$.r8A(),
    {
      kReadyState: eRA,
      kSentClose: Hq1,
      kByteParser: ww4,
      kReceivedClose: zw4,
      kResponse: Hw4
    } = __$.nRA(),
    {
      fireEvent: _n3,
      failWebsocketConnection: Un,
      isClosing: Gn3,
      isClosed: Zn3,
      isEstablished: Wn3,
      parseExtensions: Dn3
    } = __$.aRA(),
    {
      channels: d0A
    } = __$.Y0A(),
    {
      CloseEvent: jn3
    } = __$.U0A(),
    {
      makeRequest: Mn3
    } = __$.u0A(),
    {
      fetching: Pn3
    } = __$.pRA(),
    {
      Headers: Vn3,
      getHeadersList: fn3
    } = __$.d8A(),
    {
      getDecodeSplit: Nn3
    } = __$.ZT(),
    {
      WebsocketFrameSend: Tn3
    } = __$.zq1(),
    P46;
  try {
    P46 = CA("node:crypto");
  } catch {}
  function vn3(A, K, q, Y, z, w) {
    let H = A;
    H.protocol = A.protocol === "ws:" ? "http:" : "https:";
    let J = Mn3({
      urlList: [H],
      client: q,
      serviceWorkers: "none",
      referrer: "no-referrer",
      mode: "websocket",
      credentials: "include",
      cache: "no-store",
      redirect: "error"
    });
    if (w.headers) {
      let _ = fn3(new Vn3(w.headers));
      J.headersList = _;
    }
    let O = P46.randomBytes(16).toString("base64");
    J.headersList.append("sec-websocket-key", O), J.headersList.append("sec-websocket-version", "13");
    for (let _ of K) J.headersList.append("sec-websocket-protocol", _);
    let X = "permessage-deflate; client_max_window_bits";
    return J.headersList.append("sec-websocket-extensions", X), Pn3({
      request: J,
      useParallelQueue: !0,
      dispatcher: w.dispatcher,
      processResponse(_) {
        if (_.type === "error" || _.status !== 101) {
          Un(Y, "Received network error or non-101 status code.");
          return;
        }
        if (K.length !== 0 && !_.headersList.get("Sec-WebSocket-Protocol")) {
          Un(Y, "Server did not respond with sent protocols.");
          return;
        }
        if (_.headersList.get("Upgrade")?.toLowerCase() !== "websocket") {
          Un(Y, 'Server did not set Upgrade header to "websocket".');
          return;
        }
        if (_.headersList.get("Connection")?.toLowerCase() !== "upgrade") {
          Un(Y, 'Server did not set Connection header to "upgrade".');
          return;
        }
        let G = _.headersList.get("Sec-WebSocket-Accept"),
          Z = P46.createHash("sha1").update(O + On3).digest("base64");
        if (G !== Z) {
          Un(Y, "Incorrect hash received in Sec-WebSocket-Accept header.");
          return;
        }
        let W = _.headersList.get("Sec-WebSocket-Extensions"),
          D;
        if (W !== null) {
          if (D = Dn3(W), !D.has("permessage-deflate")) {
            Un(Y, "Sec-WebSocket-Extensions header does not match.");
            return;
          }
        }
        let j = _.headersList.get("Sec-WebSocket-Protocol");
        if (j !== null) {
          if (!Nn3("sec-websocket-protocol", J.headersList).includes(j)) {
            Un(Y, "Protocol was not set in the opening handshake.");
            return;
          }
        }
        if (_.socket.on("data", Jw4), _.socket.on("close", Ow4), _.socket.on("error", Xw4), d0A.open.hasSubscribers) d0A.open.publish({
          address: _.socket.address(),
          protocol: j,
          extensions: W
        });
        z(_, D);
      }
    });
  }
  function En3(A, K, q, Y) {
    if (Gn3(A) || Zn3(A)) ;else if (!Wn3(A)) Un(A, "Connection was closed before it was established."), A[eRA] = tRA.CLOSING;else if (A[Hq1] === wq1.NOT_SENT) {
      A[Hq1] = wq1.PROCESSING;
      let z = new Tn3();
      if (K !== void 0 && q === void 0) z.frameData = Buffer.allocUnsafe(2), z.frameData.writeUInt16BE(K, 0);else if (K !== void 0 && q !== void 0) z.frameData = Buffer.allocUnsafe(2 + Y), z.frameData.writeUInt16BE(K, 0), z.frameData.write(q, 2, "utf-8");else z.frameData = Xn3;
      A[Hw4].socket.write(z.createFrame($n3.CLOSE)), A[Hq1] = wq1.SENT, A[eRA] = tRA.CLOSING;
    } else A[eRA] = tRA.CLOSING;
  }
  function Jw4(A) {
    if (!this.ws[ww4].write(A)) this.pause();
  }
  function Ow4() {
    let {
        ws: A
      } = this,
      {
        [Hw4]: K
      } = A;
    K.socket.off("data", Jw4), K.socket.off("close", Ow4), K.socket.off("error", Xw4);
    let q = A[Hq1] === wq1.SENT && A[zw4],
      Y = 1005,
      z = "",
      w = A[ww4].closingInfo;
    if (w && !w.error) Y = w.code ?? 1005, z = w.reason;else if (!A[zw4]) Y = 1006;
    if (A[eRA] = tRA.CLOSED, _n3("close", A, (H, J) => new jn3(H, J), {
      wasClean: q,
      code: Y,
      reason: z
    }), d0A.close.hasSubscribers) d0A.close.publish({
      websocket: A,
      code: Y,
      reason: z
    });
  }
  function Xw4(A) {
    let {
      ws: K
    } = this;
    if (K[eRA] = tRA.CLOSING, d0A.socketError.hasSubscribers) d0A.socketError.publish(A);
    this.destroy();
  }
  $w4.exports = {
    establishWebSocketConnection: vn3,
    closeWebSocketConnection: En3
  };
});

// Register to shared state
__$.V46 = V46;
