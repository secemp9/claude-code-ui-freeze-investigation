// Module: zT
// Dependencies: VB8, TB8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zT = v(e_5 => {
  var CB8 = __$.VB8(),
    LB8 = __$.TB8(),
    O61 = CA("http"),
    X61 = CA("https"),
    RB8 = CA("stream"),
    Fl1 = CA("http2"),
    p_5 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
    yB8 = A => {
      let K = {};
      for (let q of Object.keys(A)) {
        let Y = A[q];
        K[q] = Array.isArray(Y) ? Y.join(",") : Y;
      }
      return K;
    },
    sj = {
      setTimeout: (A, K) => setTimeout(A, K),
      clearTimeout: A => clearTimeout(A)
    },
    vB8 = 1000,
    d_5 = (A, K, q = 0) => {
      if (!q) return -1;
      let Y = z => {
        let w = sj.setTimeout(() => {
            A.destroy(), K(Object.assign(Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${q} ms.`), {
              name: "TimeoutError"
            }));
          }, q - z),
          H = J => {
            if (J?.connecting) J.on("connect", () => {
              sj.clearTimeout(w);
            });else sj.clearTimeout(w);
          };
        if (A.socket) H(A.socket);else A.on("socket", H);
      };
      if (q < 2000) return Y(0), 0;
      return sj.setTimeout(Y.bind(null, vB8), vB8);
    },
    c_5 = (A, K, q = 0, Y, z) => {
      if (q) return sj.setTimeout(() => {
        let w = `@smithy/node-http-handler - [${Y ? "ERROR" : "WARN"}] a request has exceeded the configured ${q} ms requestTimeout.`;
        if (Y) {
          let H = Object.assign(Error(w), {
            name: "TimeoutError",
            code: "ETIMEDOUT"
          });
          A.destroy(H), K(H);
        } else w += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.", z?.warn?.(w);
      }, q);
      return -1;
    },
    l_5 = 3000,
    i_5 = (A, {
      keepAlive: K,
      keepAliveMsecs: q
    }, Y = l_5) => {
      if (K !== !0) return -1;
      let z = () => {
        if (A.socket) A.socket.setKeepAlive(K, q || 0);else A.on("socket", w => {
          w.setKeepAlive(K, q || 0);
        });
      };
      if (Y === 0) return z(), 0;
      return sj.setTimeout(z, Y);
    },
    EB8 = 3000,
    n_5 = (A, K, q = 0) => {
      let Y = z => {
        let w = q - z,
          H = () => {
            A.destroy(), K(Object.assign(Error(`@smithy/node-http-handler - the request socket timed out after ${q} ms of inactivity (configured by client requestHandler).`), {
              name: "TimeoutError"
            }));
          };
        if (A.socket) A.socket.setTimeout(w, H), A.on("close", () => A.socket?.removeListener("timeout", H));else A.setTimeout(w, H);
      };
      if (0 < q && q < 6000) return Y(0), 0;
      return sj.setTimeout(Y.bind(null, q === 0 ? 0 : EB8), EB8);
    },
    kB8 = 6000;
  async function IB8(A, K, q = kB8, Y = !1) {
    let z = K.headers ?? {},
      w = z.Expect || z.expect,
      H = -1,
      J = !0;
    if (!Y && w === "100-continue") J = await Promise.race([new Promise(O => {
      H = Number(sj.setTimeout(() => O(!0), Math.max(kB8, q)));
    }), new Promise(O => {
      A.on("continue", () => {
        sj.clearTimeout(H), O(!0);
      }), A.on("response", () => {
        sj.clearTimeout(H), O(!1);
      }), A.on("error", () => {
        sj.clearTimeout(H), O(!1);
      });
    })]);
    if (J) r_5(A, K.body);
  }
  function r_5(A, K) {
    if (K instanceof RB8.Readable) {
      K.pipe(A);
      return;
    }
    if (K) {
      if (Buffer.isBuffer(K) || typeof K === "string") {
        A.end(K);
        return;
      }
      let q = K;
      if (typeof q === "object" && q.buffer && typeof q.byteOffset === "number" && typeof q.byteLength === "number") {
        A.end(Buffer.from(q.buffer, q.byteOffset, q.byteLength));
        return;
      }
      A.end(Buffer.from(K));
      return;
    }
    A.end();
  }
  var o_5 = 0;
  class $61 {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = !1;
    metadata = {
      handlerProtocol: "http/1.1"
    };
    static create(A) {
      if (typeof A?.handle === "function") return A;
      return new $61(A);
    }
    static checkSocketUsage(A, K, q = console) {
      let {
        sockets: Y,
        requests: z,
        maxSockets: w
      } = A;
      if (typeof w !== "number" || w === 1 / 0) return K;
      let H = 15000;
      if (Date.now() - H < K) return K;
      if (Y && z) for (let J in Y) {
        let O = Y[J]?.length ?? 0,
          X = z[J]?.length ?? 0;
        if (O >= w && X >= 2 * w) return q?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${O} and ${X} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), Date.now();
      }
      return K;
    }
    constructor(A) {
      this.configProvider = new Promise((K, q) => {
        if (typeof A === "function") A().then(Y => {
          K(this.resolveDefaultConfig(Y));
        }).catch(q);else K(this.resolveDefaultConfig(A));
      });
    }
    resolveDefaultConfig(A) {
      let {
          requestTimeout: K,
          connectionTimeout: q,
          socketTimeout: Y,
          socketAcquisitionWarningTimeout: z,
          httpAgent: w,
          httpsAgent: H,
          throwOnRequestTimeout: J
        } = A || {},
        O = !0,
        X = 50;
      return {
        connectionTimeout: q,
        requestTimeout: K,
        socketTimeout: Y,
        socketAcquisitionWarningTimeout: z,
        throwOnRequestTimeout: J,
        httpAgent: (() => {
          if (w instanceof O61.Agent || typeof w?.destroy === "function") return this.externalAgent = !0, w;
          return new O61.Agent({
            keepAlive: !0,
            maxSockets: 50,
            ...w
          });
        })(),
        httpsAgent: (() => {
          if (H instanceof X61.Agent || typeof H?.destroy === "function") return this.externalAgent = !0, H;
          return new X61.Agent({
            keepAlive: !0,
            maxSockets: 50,
            ...H
          });
        })(),
        logger: console
      };
    }
    destroy() {
      this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
    }
    async handle(A, {
      abortSignal: K,
      requestTimeout: q
    } = {}) {
      if (!this.config) this.config = await this.configProvider;
      return new Promise((Y, z) => {
        let w = this.config,
          H = void 0,
          J = [],
          O = async R => {
            await H, J.forEach(sj.clearTimeout), Y(R);
          },
          X = async R => {
            await H, J.forEach(sj.clearTimeout), z(R);
          };
        if (K?.aborted) {
          let R = Error("Request aborted");
          R.name = "AbortError", X(R);
          return;
        }
        let $ = A.protocol === "https:",
          _ = A.headers ?? {},
          G = (_.Expect ?? _.expect) === "100-continue",
          Z = $ ? w.httpsAgent : w.httpAgent;
        if (G && !this.externalAgent) Z = new ($ ? X61.Agent : O61.Agent)({
          keepAlive: !1,
          maxSockets: 1 / 0
        });
        J.push(sj.setTimeout(() => {
          this.socketWarningTimestamp = $61.checkSocketUsage(Z, this.socketWarningTimestamp, w.logger);
        }, w.socketAcquisitionWarningTimeout ?? (w.requestTimeout ?? 2000) + (w.connectionTimeout ?? 1000)));
        let W = LB8.buildQueryString(A.query || {}),
          D = void 0;
        if (A.username != null || A.password != null) {
          let R = A.username ?? "",
            x = A.password ?? "";
          D = `${R}:${x}`;
        }
        let j = A.path;
        if (W) j += `?${W}`;
        if (A.fragment) j += `#${A.fragment}`;
        let M = A.hostname ?? "";
        if (M[0] === "[" && M.endsWith("]")) M = A.hostname.slice(1, -1);else M = A.hostname;
        let P = {
            headers: A.headers,
            host: M,
            method: A.method,
            path: j,
            port: A.port,
            agent: Z,
            auth: D
          },
          N = ($ ? X61.request : O61.request)(P, R => {
            let x = new CB8.HttpResponse({
              statusCode: R.statusCode || -1,
              reason: R.statusMessage,
              headers: yB8(R.headers),
              body: R
            });
            O({
              response: x
            });
          });
        if (N.on("error", R => {
          if (p_5.includes(R.code)) X(Object.assign(R, {
            name: "TimeoutError"
          }));else X(R);
        }), K) {
          let R = () => {
            N.destroy();
            let x = Error("Request aborted");
            x.name = "AbortError", X(x);
          };
          if (typeof K.addEventListener === "function") {
            let x = K;
            x.addEventListener("abort", R, {
              once: !0
            }), N.once("close", () => x.removeEventListener("abort", R));
          } else K.onabort = R;
        }
        let T = q ?? w.requestTimeout;
        J.push(d_5(N, X, w.connectionTimeout)), J.push(c_5(N, X, T, w.throwOnRequestTimeout, w.logger ?? console)), J.push(n_5(N, X, w.socketTimeout));
        let C = P.agent;
        if (typeof C === "object" && "keepAlive" in C) J.push(i_5(N, {
          keepAlive: C.keepAlive,
          keepAliveMsecs: C.keepAliveMsecs
        }));
        H = IB8(N, A, T, this.externalAgent).catch(R => {
          return J.forEach(sj.clearTimeout), z(R);
        });
      });
    }
    updateHttpClientConfig(A, K) {
      this.config = void 0, this.configProvider = this.configProvider.then(q => {
        return {
          ...q,
          [A]: K
        };
      });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  class SB8 {
    sessions = [];
    constructor(A) {
      this.sessions = A ?? [];
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift();
    }
    offerLast(A) {
      this.sessions.push(A);
    }
    contains(A) {
      return this.sessions.includes(A);
    }
    remove(A) {
      this.sessions = this.sessions.filter(K => K !== A);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(A) {
      for (let K of this.sessions) if (K === A) {
        if (!K.destroyed) K.destroy();
      }
    }
  }
  class hB8 {
    constructor(A) {
      if (this.config = A, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrency must be greater than zero.");
    }
    config;
    sessionCache = new Map();
    lease(A, K) {
      let q = this.getUrlString(A),
        Y = this.sessionCache.get(q);
      if (Y) {
        let J = Y.poll();
        if (J && !this.config.disableConcurrency) return J;
      }
      let z = Fl1.connect(q);
      if (this.config.maxConcurrency) z.settings({
        maxConcurrentStreams: this.config.maxConcurrency
      }, J => {
        if (J) throw Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + A.destination.toString());
      });
      z.unref();
      let w = () => {
        z.destroy(), this.deleteSession(q, z);
      };
      if (z.on("goaway", w), z.on("error", w), z.on("frameError", w), z.on("close", () => this.deleteSession(q, z)), K.requestTimeout) z.setTimeout(K.requestTimeout, w);
      let H = this.sessionCache.get(q) || new SB8();
      return H.offerLast(z), this.sessionCache.set(q, H), z;
    }
    deleteSession(A, K) {
      let q = this.sessionCache.get(A);
      if (!q) return;
      if (!q.contains(K)) return;
      q.remove(K), this.sessionCache.set(A, q);
    }
    release(A, K) {
      let q = this.getUrlString(A);
      this.sessionCache.get(q)?.offerLast(K);
    }
    destroy() {
      for (let [A, K] of this.sessionCache) {
        for (let q of K) {
          if (!q.destroyed) q.destroy();
          K.remove(q);
        }
        this.sessionCache.delete(A);
      }
    }
    setMaxConcurrentStreams(A) {
      if (A && A <= 0) throw RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = A;
    }
    setDisableConcurrentStreams(A) {
      this.config.disableConcurrency = A;
    }
    getUrlString(A) {
      return A.destination.toString();
    }
  }
  class Ql1 {
    config;
    configProvider;
    metadata = {
      handlerProtocol: "h2"
    };
    connectionManager = new hB8({});
    static create(A) {
      if (typeof A?.handle === "function") return A;
      return new Ql1(A);
    }
    constructor(A) {
      this.configProvider = new Promise((K, q) => {
        if (typeof A === "function") A().then(Y => {
          K(Y || {});
        }).catch(q);else K(A || {});
      });
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(A, {
      abortSignal: K,
      requestTimeout: q
    } = {}) {
      if (!this.config) {
        if (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1), this.config.maxConcurrentStreams) this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
      }
      let {
          requestTimeout: Y,
          disableConcurrentStreams: z
        } = this.config,
        w = q ?? Y;
      return new Promise((H, J) => {
        let O = !1,
          X = void 0,
          $ = async y => {
            await X, H(y);
          },
          _ = async y => {
            await X, J(y);
          };
        if (K?.aborted) {
          O = !0;
          let y = Error("Request aborted");
          y.name = "AbortError", _(y);
          return;
        }
        let {
            hostname: G,
            method: Z,
            port: W,
            protocol: D,
            query: j
          } = A,
          M = "";
        if (A.username != null || A.password != null) {
          let y = A.username ?? "",
            B = A.password ?? "";
          M = `${y}:${B}@`;
        }
        let P = `${D}//${M}${G}${W ? `:${W}` : ""}`,
          f = {
            destination: new URL(P)
          },
          N = this.connectionManager.lease(f, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: z || !1
          }),
          T = y => {
            if (z) this.destroySession(N);
            O = !0, _(y);
          },
          C = LB8.buildQueryString(j || {}),
          R = A.path;
        if (C) R += `?${C}`;
        if (A.fragment) R += `#${A.fragment}`;
        let x = N.request({
          ...A.headers,
          [Fl1.constants.HTTP2_HEADER_PATH]: R,
          [Fl1.constants.HTTP2_HEADER_METHOD]: Z
        });
        if (N.ref(), x.on("response", y => {
          let B = new CB8.HttpResponse({
            statusCode: y[":status"] || -1,
            headers: yB8(y),
            body: x
          });
          if (O = !0, $({
            response: B
          }), z) N.close(), this.connectionManager.deleteSession(P, N);
        }), w) x.setTimeout(w, () => {
          x.close();
          let y = Error(`Stream timed out because of no activity for ${w} ms`);
          y.name = "TimeoutError", T(y);
        });
        if (K) {
          let y = () => {
            x.close();
            let B = Error("Request aborted");
            B.name = "AbortError", T(B);
          };
          if (typeof K.addEventListener === "function") {
            let B = K;
            B.addEventListener("abort", y, {
              once: !0
            }), x.once("close", () => B.removeEventListener("abort", y));
          } else K.onabort = y;
        }
        x.on("frameError", (y, B, b) => {
          T(Error(`Frame type id ${y} in stream id ${b} has failed with code ${B}.`));
        }), x.on("error", T), x.on("aborted", () => {
          T(Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${x.rstCode}.`));
        }), x.on("close", () => {
          if (N.unref(), z) N.destroy();
          if (!O) T(Error("Unexpected error: http2 request did not get a response"));
        }), X = IB8(x, A, w);
      });
    }
    updateHttpClientConfig(A, K) {
      this.config = void 0, this.configProvider = this.configProvider.then(q => {
        return {
          ...q,
          [A]: K
        };
      });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    destroySession(A) {
      if (!A.destroyed) A.destroy();
    }
  }
  class bB8 extends RB8.Writable {
    bufferedBytes = [];
    _write(A, K, q) {
      this.bufferedBytes.push(A), q();
    }
  }
  var a_5 = A => {
      if (s_5(A)) return t_5(A);
      return new Promise((K, q) => {
        let Y = new bB8();
        A.pipe(Y), A.on("error", z => {
          Y.end(), q(z);
        }), Y.on("error", q), Y.on("finish", function () {
          let z = new Uint8Array(Buffer.concat(this.bufferedBytes));
          K(z);
        });
      });
    },
    s_5 = A => typeof ReadableStream === "function" && A instanceof ReadableStream;
  async function t_5(A) {
    let K = [],
      q = A.getReader(),
      Y = !1,
      z = 0;
    while (!Y) {
      let {
        done: J,
        value: O
      } = await q.read();
      if (O) K.push(O), z += O.length;
      Y = J;
    }
    let w = new Uint8Array(z),
      H = 0;
    for (let J of K) w.set(J, H), H += J.length;
    return w;
  }
  e_5.DEFAULT_REQUEST_TIMEOUT = o_5;
  e_5.NodeHttp2Handler = Ql1;
  e_5.NodeHttpHandler = $61;
  e_5.streamCollector = a_5;
});

// Register to shared state
__$.zT = zT;
