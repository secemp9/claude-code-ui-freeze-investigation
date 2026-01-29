// Module: zc4
// Dependencies: L26, pd4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zc4 = v((Wfw, Yc4) => {
  var {
      create: Bp9,
      defineProperty: lSA,
      getOwnPropertyDescriptor: mp9,
      getOwnPropertyNames: gp9,
      getPrototypeOf: Fp9
    } = Object,
    Qp9 = Object.prototype.hasOwnProperty,
    jG = (A, K) => lSA(A, "name", {
      value: K,
      configurable: !0
    }),
    Up9 = (A, K) => {
      for (var q in K) lSA(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    ld4 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of gp9(K)) if (!Qp9.call(A, z) && z !== q) lSA(A, z, {
          get: () => K[z],
          enumerable: !(Y = mp9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    pp9 = (A, K, q) => (q = A != null ? Bp9(Fp9(A)) : {}, ld4(K || !A || !A.__esModule ? lSA(q, "default", {
      value: A,
      enumerable: !0
    }) : q, A)),
    dp9 = A => ld4(lSA({}, "__esModule", {
      value: !0
    }), A),
    id4 = {};
  Up9(id4, {
    DEFAULT_REQUEST_TIMEOUT: () => rp9,
    NodeHttp2Handler: () => ep9,
    NodeHttpHandler: () => op9,
    streamCollector: () => Kd9
  });
  Yc4.exports = dp9(id4);
  var nd4 = __$.L26(),
    rd4 = __$.pd4(),
    qw6 = CA("http"),
    Yw6 = CA("https"),
    cp9 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
    od4 = jG(A => {
      let K = {};
      for (let q of Object.keys(A)) {
        let Y = A[q];
        K[q] = Array.isArray(Y) ? Y.join(",") : Y;
      }
      return K;
    }, "getTransformedHeaders"),
    lp9 = jG((A, K, q = 0) => {
      if (!q) return;
      let Y = setTimeout(() => {
        A.destroy(), K(Object.assign(Error(`Socket timed out without establishing a connection within ${q} ms`), {
          name: "TimeoutError"
        }));
      }, q);
      A.on("socket", z => {
        if (z.connecting) z.on("connect", () => {
          clearTimeout(Y);
        });else clearTimeout(Y);
      });
    }, "setConnectionTimeout"),
    ip9 = jG((A, {
      keepAlive: K,
      keepAliveMsecs: q
    }) => {
      if (K !== !0) return;
      A.on("socket", Y => {
        Y.setKeepAlive(K, q || 0);
      });
    }, "setSocketKeepAlive"),
    np9 = jG((A, K, q = 0) => {
      A.setTimeout(q, () => {
        A.destroy(), K(Object.assign(Error(`Connection timed out after ${q} ms`), {
          name: "TimeoutError"
        }));
      });
    }, "setSocketTimeout"),
    ad4 = CA("stream"),
    dd4 = 1000;
  async function zw6(A, K, q = dd4) {
    let Y = K.headers ?? {},
      z = Y.Expect || Y.expect,
      w = -1,
      H = !1;
    if (z === "100-continue") await Promise.race([new Promise(J => {
      w = Number(setTimeout(J, Math.max(dd4, q)));
    }), new Promise(J => {
      A.on("continue", () => {
        clearTimeout(w), J();
      }), A.on("error", () => {
        H = !0, clearTimeout(w), J();
      });
    })]);
    if (!H) sd4(A, K.body);
  }
  jG(zw6, "writeRequestBody");
  function sd4(A, K) {
    if (K instanceof ad4.Readable) {
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
  jG(sd4, "writeBody");
  var rp9 = 0,
    td4 = class A {
      constructor(K) {
        this.socketWarningTimestamp = 0, this.metadata = {
          handlerProtocol: "http/1.1"
        }, this.configProvider = new Promise((q, Y) => {
          if (typeof K === "function") K().then(z => {
            q(this.resolveDefaultConfig(z));
          }).catch(Y);else q(this.resolveDefaultConfig(K));
        });
      }
      static create(K) {
        if (typeof (K == null ? void 0 : K.handle) === "function") return K;
        return new A(K);
      }
      static checkSocketUsage(K, q) {
        var Y, z;
        let {
          sockets: w,
          requests: H,
          maxSockets: J
        } = K;
        if (typeof J !== "number" || J === 1 / 0) return q;
        let O = 15000;
        if (Date.now() - O < q) return q;
        if (w && H) for (let X in w) {
          let $ = ((Y = w[X]) == null ? void 0 : Y.length) ?? 0,
            _ = ((z = H[X]) == null ? void 0 : z.length) ?? 0;
          if ($ >= J && _ >= 2 * J) return console.warn("@smithy/node-http-handler:WARN", `socket usage at capacity=${$} and ${_} additional requests are enqueued.`, "See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html", "or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config."), Date.now();
        }
        return q;
      }
      resolveDefaultConfig(K) {
        let {
            requestTimeout: q,
            connectionTimeout: Y,
            socketTimeout: z,
            httpAgent: w,
            httpsAgent: H
          } = K || {},
          J = !0,
          O = 50;
        return {
          connectionTimeout: Y,
          requestTimeout: q ?? z,
          httpAgent: (() => {
            if (w instanceof qw6.Agent || typeof (w == null ? void 0 : w.destroy) === "function") return w;
            return new qw6.Agent({
              keepAlive: !0,
              maxSockets: 50,
              ...w
            });
          })(),
          httpsAgent: (() => {
            if (H instanceof Yw6.Agent || typeof (H == null ? void 0 : H.destroy) === "function") return H;
            return new Yw6.Agent({
              keepAlive: !0,
              maxSockets: 50,
              ...H
            });
          })()
        };
      }
      destroy() {
        var K, q, Y, z;
        (q = (K = this.config) == null ? void 0 : K.httpAgent) == null || q.destroy(), (z = (Y = this.config) == null ? void 0 : Y.httpsAgent) == null || z.destroy();
      }
      async handle(K, {
        abortSignal: q
      } = {}) {
        if (!this.config) this.config = await this.configProvider;
        let Y;
        return new Promise((z, w) => {
          let H = void 0,
            J = jG(async P => {
              await H, clearTimeout(Y), z(P);
            }, "resolve"),
            O = jG(async P => {
              await H, w(P);
            }, "reject");
          if (!this.config) throw Error("Node HTTP request handler config is not resolved");
          if (q == null ? void 0 : q.aborted) {
            let P = Error("Request aborted");
            P.name = "AbortError", O(P);
            return;
          }
          let X = K.protocol === "https:",
            $ = X ? this.config.httpsAgent : this.config.httpAgent;
          Y = setTimeout(() => {
            this.socketWarningTimestamp = A.checkSocketUsage($, this.socketWarningTimestamp);
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000));
          let _ = (0, rd4.buildQueryString)(K.query || {}),
            G = void 0;
          if (K.username != null || K.password != null) {
            let P = K.username ?? "",
              f = K.password ?? "";
            G = `${P}:${f}`;
          }
          let Z = K.path;
          if (_) Z += `?${_}`;
          if (K.fragment) Z += `#${K.fragment}`;
          let W = {
              headers: K.headers,
              host: K.hostname,
              method: K.method,
              path: Z,
              port: K.port,
              agent: $,
              auth: G
            },
            j = (X ? Yw6.request : qw6.request)(W, P => {
              let f = new nd4.HttpResponse({
                statusCode: P.statusCode || -1,
                reason: P.statusMessage,
                headers: od4(P.headers),
                body: P
              });
              J({
                response: f
              });
            });
          if (j.on("error", P => {
            if (cp9.includes(P.code)) O(Object.assign(P, {
              name: "TimeoutError"
            }));else O(P);
          }), lp9(j, O, this.config.connectionTimeout), np9(j, O, this.config.requestTimeout), q) q.onabort = () => {
            j.abort();
            let P = Error("Request aborted");
            P.name = "AbortError", O(P);
          };
          let M = W.agent;
          if (typeof M === "object" && "keepAlive" in M) ip9(j, {
            keepAlive: M.keepAlive,
            keepAliveMsecs: M.keepAliveMsecs
          });
          H = zw6(j, K, this.config.requestTimeout).catch(w);
        });
      }
      updateHttpClientConfig(K, q) {
        this.config = void 0, this.configProvider = this.configProvider.then(Y => {
          return {
            ...Y,
            [K]: q
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
  jG(td4, "NodeHttpHandler");
  var op9 = td4,
    cd4 = CA("http2"),
    ap9 = pp9(CA("http2")),
    ed4 = class {
      constructor(K) {
        this.sessions = [], this.sessions = K ?? [];
      }
      poll() {
        if (this.sessions.length > 0) return this.sessions.shift();
      }
      offerLast(K) {
        this.sessions.push(K);
      }
      contains(K) {
        return this.sessions.includes(K);
      }
      remove(K) {
        this.sessions = this.sessions.filter(q => q !== K);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(K) {
        for (let q of this.sessions) if (q === K) {
          if (!q.destroyed) q.destroy();
        }
      }
    };
  jG(ed4, "NodeHttp2ConnectionPool");
  var sp9 = ed4,
    Ac4 = class {
      constructor(K) {
        if (this.sessionCache = new Map(), this.config = K, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrency must be greater than zero.");
      }
      lease(K, q) {
        let Y = this.getUrlString(K),
          z = this.sessionCache.get(Y);
        if (z) {
          let O = z.poll();
          if (O && !this.config.disableConcurrency) return O;
        }
        let w = ap9.default.connect(Y);
        if (this.config.maxConcurrency) w.settings({
          maxConcurrentStreams: this.config.maxConcurrency
        }, O => {
          if (O) throw Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + K.destination.toString());
        });
        w.unref();
        let H = jG(() => {
          w.destroy(), this.deleteSession(Y, w);
        }, "destroySessionCb");
        if (w.on("goaway", H), w.on("error", H), w.on("frameError", H), w.on("close", () => this.deleteSession(Y, w)), q.requestTimeout) w.setTimeout(q.requestTimeout, H);
        let J = this.sessionCache.get(Y) || new sp9();
        return J.offerLast(w), this.sessionCache.set(Y, J), w;
      }
      deleteSession(K, q) {
        let Y = this.sessionCache.get(K);
        if (!Y) return;
        if (!Y.contains(q)) return;
        Y.remove(q), this.sessionCache.set(K, Y);
      }
      release(K, q) {
        var Y;
        let z = this.getUrlString(K);
        (Y = this.sessionCache.get(z)) == null || Y.offerLast(q);
      }
      destroy() {
        for (let [K, q] of this.sessionCache) {
          for (let Y of q) {
            if (!Y.destroyed) Y.destroy();
            q.remove(Y);
          }
          this.sessionCache.delete(K);
        }
      }
      setMaxConcurrentStreams(K) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrentStreams must be greater than zero.");
        this.config.maxConcurrency = K;
      }
      setDisableConcurrentStreams(K) {
        this.config.disableConcurrency = K;
      }
      getUrlString(K) {
        return K.destination.toString();
      }
    };
  jG(Ac4, "NodeHttp2ConnectionManager");
  var tp9 = Ac4,
    Kc4 = class A {
      constructor(K) {
        this.metadata = {
          handlerProtocol: "h2"
        }, this.connectionManager = new tp9({}), this.configProvider = new Promise((q, Y) => {
          if (typeof K === "function") K().then(z => {
            q(z || {});
          }).catch(Y);else q(K || {});
        });
      }
      static create(K) {
        if (typeof (K == null ? void 0 : K.handle) === "function") return K;
        return new A(K);
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(K, {
        abortSignal: q
      } = {}) {
        if (!this.config) {
          if (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1), this.config.maxConcurrentStreams) this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
        }
        let {
          requestTimeout: Y,
          disableConcurrentStreams: z
        } = this.config;
        return new Promise((w, H) => {
          var J;
          let O = !1,
            X = void 0,
            $ = jG(async y => {
              await X, w(y);
            }, "resolve"),
            _ = jG(async y => {
              await X, H(y);
            }, "reject");
          if (q == null ? void 0 : q.aborted) {
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
            } = K,
            M = "";
          if (K.username != null || K.password != null) {
            let y = K.username ?? "",
              B = K.password ?? "";
            M = `${y}:${B}@`;
          }
          let P = `${D}//${M}${G}${W ? `:${W}` : ""}`,
            f = {
              destination: new URL(P)
            },
            N = this.connectionManager.lease(f, {
              requestTimeout: (J = this.config) == null ? void 0 : J.sessionTimeout,
              disableConcurrentStreams: z || !1
            }),
            T = jG(y => {
              if (z) this.destroySession(N);
              O = !0, _(y);
            }, "rejectWithDestroy"),
            C = (0, rd4.buildQueryString)(j || {}),
            R = K.path;
          if (C) R += `?${C}`;
          if (K.fragment) R += `#${K.fragment}`;
          let x = N.request({
            ...K.headers,
            [cd4.constants.HTTP2_HEADER_PATH]: R,
            [cd4.constants.HTTP2_HEADER_METHOD]: Z
          });
          if (N.ref(), x.on("response", y => {
            let B = new nd4.HttpResponse({
              statusCode: y[":status"] || -1,
              headers: od4(y),
              body: x
            });
            if (O = !0, $({
              response: B
            }), z) N.close(), this.connectionManager.deleteSession(P, N);
          }), Y) x.setTimeout(Y, () => {
            x.close();
            let y = Error(`Stream timed out because of no activity for ${Y} ms`);
            y.name = "TimeoutError", T(y);
          });
          if (q) q.onabort = () => {
            x.close();
            let y = Error("Request aborted");
            y.name = "AbortError", T(y);
          };
          x.on("frameError", (y, B, b) => {
            T(Error(`Frame type id ${y} in stream id ${b} has failed with code ${B}.`));
          }), x.on("error", T), x.on("aborted", () => {
            T(Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${x.rstCode}.`));
          }), x.on("close", () => {
            if (N.unref(), z) N.destroy();
            if (!O) T(Error("Unexpected error: http2 request did not get a response"));
          }), X = zw6(x, K, Y);
        });
      }
      updateHttpClientConfig(K, q) {
        this.config = void 0, this.configProvider = this.configProvider.then(Y => {
          return {
            ...Y,
            [K]: q
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      destroySession(K) {
        if (!K.destroyed) K.destroy();
      }
    };
  jG(Kc4, "NodeHttp2Handler");
  var ep9 = Kc4,
    qc4 = class extends ad4.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      _write(K, q, Y) {
        this.bufferedBytes.push(K), Y();
      }
    };
  jG(qc4, "Collector");
  var Ad9 = qc4,
    Kd9 = jG(A => new Promise((K, q) => {
      let Y = new Ad9();
      A.pipe(Y), A.on("error", z => {
        Y.end(), q(z);
      }), Y.on("error", q), Y.on("finish", function () {
        let z = new Uint8Array(Buffer.concat(this.bufferedBytes));
        K(z);
      });
    }), "streamCollector");
});

// Register to shared state
__$.zc4 = zc4;
