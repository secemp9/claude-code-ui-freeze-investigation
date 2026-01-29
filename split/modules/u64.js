// Module: u64
// Dependencies: gLA, K64, SA6, X64, Z64, y64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var u64 = v(jN3 => {
  var AN3 = __$.gLA(),
    KN3 = __$.K64(),
    FA6 = __$.SA6(),
    qN3 = __$.X64(),
    S64 = __$.Z64(),
    I64 = __$.y64(),
    YN3 = (A, K, q, Y) => {
      let z = A,
        w = {
          start() {},
          async transform(H, J) {
            try {
              let O = new Date(Date.now() + (await Y())),
                X = {
                  ":date": {
                    type: "timestamp",
                    value: O
                  }
                },
                $ = await K.sign({
                  message: {
                    body: H,
                    headers: X
                  },
                  priorSignature: z
                }, {
                  signingDate: O
                });
              z = $.signature;
              let _ = q.encode({
                headers: {
                  ...X,
                  ":chunk-signature": {
                    type: "binary",
                    value: KN3.fromHex($.signature)
                  }
                },
                body: H
              });
              J.enqueue(_);
            } catch (O) {
              J.error(O);
            }
          }
        };
      return new TransformStream({
        ...w
      });
    };
  class h64 {
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(A) {
      this.messageSigner = A.messageSigner, this.eventStreamCodec = new AN3.EventStreamCodec(A.utf8Encoder, A.utf8Decoder), this.systemClockOffsetProvider = async () => A.systemClockOffset ?? 0;
    }
    async handle(A, K, q = {}) {
      let Y = K.request,
        {
          body: z,
          headers: w,
          query: H
        } = Y;
      if (!(z instanceof ReadableStream)) throw Error("Eventstream payload must be a ReadableStream.");
      let J = new TransformStream();
      Y.body = J.readable;
      let O;
      try {
        O = await A(K);
      } catch (Z) {
        throw Y.body.cancel(), Z;
      }
      let $ = ((w.authorization || "").match(/Signature=([\w]+)$/) || [])[1] || H && H["X-Amz-Signature"] || "",
        _ = YN3($, await this.messageSigner(), this.eventStreamCodec, this.systemClockOffsetProvider);
      return z.pipeThrough(_).pipeThrough(J), O;
    }
  }
  var zN3 = A => new h64(A),
    wN3 = () => A => async K => {
      let q = {
          ...K.input
        },
        Y = await A(K),
        z = Y.output;
      if (q.SessionId && z.SessionId == null) z.SessionId = q.SessionId;
      return Y;
    },
    HN3 = {
      step: "initialize",
      name: "injectSessionIdMiddleware",
      tags: ["WEBSOCKET", "EVENT_STREAM"],
      override: !0
    },
    JN3 = (A, K) => q => Y => {
      let {
        request: z
      } = Y;
      if (FA6.HttpRequest.isInstance(z) && A.requestHandler.metadata?.handlerProtocol?.toLowerCase().includes("websocket")) {
        z.protocol = "wss:", z.method = "GET", z.path = `${z.path}-websocket`;
        let {
          headers: w
        } = z;
        delete w["content-type"], delete w["x-amz-content-sha256"];
        for (let H of Object.keys(w)) if (H.indexOf(K.headerPrefix) === 0) {
          let J = H.replace(K.headerPrefix, "");
          z.query[J] = w[H];
        }
        if (w["x-amz-user-agent"]) z.query["user-agent"] = w["x-amz-user-agent"];
        z.headers = {
          host: w.host ?? z.hostname
        };
      }
      return q(Y);
    },
    ON3 = {
      name: "websocketEndpointMiddleware",
      tags: ["WEBSOCKET", "EVENT_STREAM"],
      relation: "after",
      toMiddleware: "eventStreamHeaderMiddleware",
      override: !0
    },
    XN3 = (A, K) => ({
      applyToStack: q => {
        q.addRelativeTo(JN3(A, K), ON3), q.add(wN3(), HN3);
      }
    }),
    b64 = A => A.protocol === "ws:" || A.protocol === "wss:";
  class x64 {
    signer;
    constructor(A) {
      this.signer = A.signer;
    }
    presign(A, K = {}) {
      return this.signer.presign(A, K);
    }
    async sign(A, K) {
      if (FA6.HttpRequest.isInstance(A) && b64(A)) return {
        ...(await this.signer.presign({
          ...A,
          body: ""
        }, {
          ...K,
          expiresIn: 60,
          unsignableHeaders: new Set(Object.keys(A.headers).filter(Y => Y !== "host"))
        })),
        body: A.body
      };else return this.signer.sign(A, K);
    }
  }
  var $N3 = A => {
      let {
        signer: K
      } = A;
      return Object.assign(A, {
        signer: async q => {
          let Y = await K(q);
          if (_N3(Y)) return new x64({
            signer: Y
          });
          throw Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
        }
      });
    },
    _N3 = A => !!A,
    GN3 = 2000;
  class QA6 {
    metadata = {
      handlerProtocol: "websocket/h1.1"
    };
    config;
    configPromise;
    httpHandler;
    sockets = {};
    static create(A, K = new I64.FetchHttpHandler()) {
      if (typeof A?.handle === "function") return A;
      return new QA6(A, K);
    }
    constructor(A, K = new I64.FetchHttpHandler()) {
      if (this.httpHandler = K, typeof A === "function") this.config = {}, this.configPromise = A().then(q => this.config = q ?? {});else this.config = A ?? {}, this.configPromise = Promise.resolve(this.config);
    }
    destroy() {
      for (let [A, K] of Object.entries(this.sockets)) {
        for (let q of K) q.close(1000, "Socket closed through destroy() call");
        delete this.sockets[A];
      }
    }
    async handle(A) {
      if (!b64(A)) return this.httpHandler.handle(A);
      let K = qN3.formatUrl(A),
        q = new WebSocket(K);
      if (!this.sockets[K]) this.sockets[K] = [];
      this.sockets[K].push(q), q.binaryType = "arraybuffer", this.config = await this.configPromise;
      let {
        connectionTimeout: Y = GN3
      } = this.config;
      await this.waitForReady(q, Y);
      let {
          body: z
        } = A,
        w = ZN3(z),
        H = this.connect(q, w),
        J = WN3(H);
      return {
        response: new FA6.HttpResponse({
          statusCode: 200,
          body: J
        })
      };
    }
    updateHttpClientConfig(A, K) {
      this.configPromise = this.configPromise.then(q => {
        return q[A] = K, q;
      });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    removeNotUsableSockets(A) {
      this.sockets[A] = (this.sockets[A] ?? []).filter(K => ![WebSocket.CLOSING, WebSocket.CLOSED].includes(K.readyState));
    }
    waitForReady(A, K) {
      return new Promise((q, Y) => {
        let z = setTimeout(() => {
          this.removeNotUsableSockets(A.url), Y({
            $metadata: {
              httpStatusCode: 500
            }
          });
        }, K);
        A.onopen = () => {
          clearTimeout(z), q();
        };
      });
    }
    connect(A, K) {
      let q = void 0,
        Y = !1,
        z = () => {},
        w = () => {};
      A.onmessage = O => {
        w({
          done: !1,
          value: new Uint8Array(O.data)
        });
      }, A.onerror = O => {
        Y = !0, A.close(), z(O);
      }, A.onclose = () => {
        if (this.removeNotUsableSockets(A.url), Y) return;
        if (q) z(q);else w({
          done: !0,
          value: void 0
        });
      };
      let H = {
        [Symbol.asyncIterator]: () => ({
          next: () => {
            return new Promise((O, X) => {
              w = O, z = X;
            });
          }
        })
      };
      return (async () => {
        try {
          for await (let O of K) A.send(O);
        } catch (O) {
          q = O;
        } finally {
          A.close(1000);
        }
      })(), H;
    }
  }
  var ZN3 = A => {
      if (A[Symbol.asyncIterator]) return A;
      if (DN3(A)) return S64.readableStreamtoIterable(A);
      return {
        [Symbol.asyncIterator]: async function* () {
          yield A;
        }
      };
    },
    WN3 = A => typeof ReadableStream === "function" ? S64.iterableToReadableStream(A) : A,
    DN3 = A => typeof ReadableStream === "function" && A instanceof ReadableStream;
  jN3.WebSocketFetchHandler = QA6;
  jN3.eventStreamPayloadHandlerProvider = zN3;
  jN3.getWebSocketPlugin = XN3;
  jN3.resolveWebSocketConfig = $N3;
});

// Register to shared state
__$.u64 = u64;
