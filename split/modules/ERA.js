// Module: ERA
// Dependencies: j9, Y0A, lK4, J0A, _2, wRA, MJ, Q54, r54, ZK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ERA = v((V6w, $34) => {
  var DQ = CA("node:assert"),
    w34 = CA("node:net"),
    jQ3 = CA("node:http"),
    x8A = __$.j9(),
    {
      channels: N0A
    } = __$.Y0A(),
    MQ3 = __$.lK4(),
    PQ3 = __$.J0A(),
    {
      InvalidArgumentError: n0,
      InformationalError: VQ3,
      ClientDestroyedError: fQ3
    } = __$._2(),
    NQ3 = __$.wRA(),
    {
      kUrl: Mx,
      kServerName: In,
      kClient: TQ3,
      kBusy: A86,
      kConnect: vQ3,
      kResuming: u8A,
      kRunning: TRA,
      kPending: vRA,
      kSize: NRA,
      kQueue: My,
      kConnected: EQ3,
      kConnecting: T0A,
      kNeedDrain: hn,
      kKeepAliveDefaultTimeout: A34,
      kHostHeader: kQ3,
      kPendingIdx: Py,
      kRunningIdx: jQ,
      kError: CQ3,
      kPipelining: WK1,
      kKeepAliveTimeoutValue: LQ3,
      kMaxHeadersSize: RQ3,
      kKeepAliveMaxTimeout: yQ3,
      kKeepAliveTimeoutThreshold: IQ3,
      kHeadersTimeout: SQ3,
      kBodyTimeout: hQ3,
      kStrictContentLength: bQ3,
      kConnector: PRA,
      kMaxRedirections: xQ3,
      kMaxRequests: K86,
      kCounter: uQ3,
      kClose: BQ3,
      kDestroy: mQ3,
      kDispatch: gQ3,
      kInterceptors: K34,
      kLocalAddress: VRA,
      kMaxResponseSize: FQ3,
      kOnError: QQ3,
      kHTTPContext: r0,
      kMaxConcurrentStreams: UQ3,
      kResume: fRA
    } = __$.MJ(),
    pQ3 = __$.Q54(),
    dQ3 = __$.r54(),
    q34 = !1,
    Sn = Symbol("kClosedResolve"),
    Y34 = () => {};
  function H34(A) {
    return A[WK1] ?? A[r0]?.defaultPipelining ?? 1;
  }
  class J34 extends PQ3 {
    constructor(A, {
      interceptors: K,
      maxHeaderSize: q,
      headersTimeout: Y,
      socketTimeout: z,
      requestTimeout: w,
      connectTimeout: H,
      bodyTimeout: J,
      idleTimeout: O,
      keepAlive: X,
      keepAliveTimeout: $,
      maxKeepAliveTimeout: _,
      keepAliveMaxTimeout: G,
      keepAliveTimeoutThreshold: Z,
      socketPath: W,
      pipelining: D,
      tls: j,
      strictContentLength: M,
      maxCachedSessions: P,
      maxRedirections: f,
      connect: N,
      maxRequestsPerClient: T,
      localAddress: C,
      maxResponseSize: R,
      autoSelectFamily: x,
      autoSelectFamilyAttemptTimeout: y,
      maxConcurrentStreams: B,
      allowH2: b
    } = {}) {
      super();
      if (X !== void 0) throw new n0("unsupported keepAlive, use pipelining=0 instead");
      if (z !== void 0) throw new n0("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
      if (w !== void 0) throw new n0("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
      if (O !== void 0) throw new n0("unsupported idleTimeout, use keepAliveTimeout instead");
      if (_ !== void 0) throw new n0("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
      if (q != null && !Number.isFinite(q)) throw new n0("invalid maxHeaderSize");
      if (W != null && typeof W !== "string") throw new n0("invalid socketPath");
      if (H != null && (!Number.isFinite(H) || H < 0)) throw new n0("invalid connectTimeout");
      if ($ != null && (!Number.isFinite($) || $ <= 0)) throw new n0("invalid keepAliveTimeout");
      if (G != null && (!Number.isFinite(G) || G <= 0)) throw new n0("invalid keepAliveMaxTimeout");
      if (Z != null && !Number.isFinite(Z)) throw new n0("invalid keepAliveTimeoutThreshold");
      if (Y != null && (!Number.isInteger(Y) || Y < 0)) throw new n0("headersTimeout must be a positive integer or zero");
      if (J != null && (!Number.isInteger(J) || J < 0)) throw new n0("bodyTimeout must be a positive integer or zero");
      if (N != null && typeof N !== "function" && typeof N !== "object") throw new n0("connect must be a function or an object");
      if (f != null && (!Number.isInteger(f) || f < 0)) throw new n0("maxRedirections must be a positive number");
      if (T != null && (!Number.isInteger(T) || T < 0)) throw new n0("maxRequestsPerClient must be a positive number");
      if (C != null && (typeof C !== "string" || w34.isIP(C) === 0)) throw new n0("localAddress must be valid string IP address");
      if (R != null && (!Number.isInteger(R) || R < -1)) throw new n0("maxResponseSize must be a positive number");
      if (y != null && (!Number.isInteger(y) || y < -1)) throw new n0("autoSelectFamilyAttemptTimeout must be a positive number");
      if (b != null && typeof b !== "boolean") throw new n0("allowH2 must be a valid boolean value");
      if (B != null && (typeof B !== "number" || B < 1)) throw new n0("maxConcurrentStreams must be a positive integer, greater than 0");
      if (typeof N !== "function") N = NQ3({
        ...j,
        maxCachedSessions: P,
        allowH2: b,
        socketPath: W,
        timeout: H,
        ...(x ? {
          autoSelectFamily: x,
          autoSelectFamilyAttemptTimeout: y
        } : void 0),
        ...N
      });
      if (K?.Client && Array.isArray(K.Client)) {
        if (this[K34] = K.Client, !q34) q34 = !0, process.emitWarning("Client.Options#interceptor is deprecated. Use Dispatcher#compose instead.", {
          code: "UNDICI-CLIENT-INTERCEPTOR-DEPRECATED"
        });
      } else this[K34] = [cQ3({
        maxRedirections: f
      })];
      this[Mx] = x8A.parseOrigin(A), this[PRA] = N, this[WK1] = D != null ? D : 1, this[RQ3] = q || jQ3.maxHeaderSize, this[A34] = $ == null ? 4000 : $, this[yQ3] = G == null ? 600000 : G, this[IQ3] = Z == null ? 2000 : Z, this[LQ3] = this[A34], this[In] = null, this[VRA] = C != null ? C : null, this[u8A] = 0, this[hn] = 0, this[kQ3] = `host: ${this[Mx].hostname}${this[Mx].port ? `:${this[Mx].port}` : ""}\r
`, this[hQ3] = J != null ? J : 300000, this[SQ3] = Y != null ? Y : 300000, this[bQ3] = M == null ? !0 : M, this[xQ3] = f, this[K86] = T, this[Sn] = null, this[FQ3] = R > -1 ? R : -1, this[UQ3] = B != null ? B : 100, this[r0] = null, this[My] = [], this[jQ] = 0, this[Py] = 0, this[fRA] = F => q86(this, F), this[QQ3] = F => O34(this, F);
    }
    get pipelining() {
      return this[WK1];
    }
    set pipelining(A) {
      this[WK1] = A, this[fRA](!0);
    }
    get [vRA]() {
      return this[My].length - this[Py];
    }
    get [TRA]() {
      return this[Py] - this[jQ];
    }
    get [NRA]() {
      return this[My].length - this[jQ];
    }
    get [EQ3]() {
      return !!this[r0] && !this[T0A] && !this[r0].destroyed;
    }
    get [A86]() {
      return Boolean(this[r0]?.busy(null) || this[NRA] >= (H34(this) || 1) || this[vRA] > 0);
    }
    [vQ3](A) {
      X34(this), this.once("connect", A);
    }
    [gQ3](A, K) {
      let q = A.origin || this[Mx].origin,
        Y = new MQ3(q, A, K);
      if (this[My].push(Y), this[u8A]) ;else if (x8A.bodyLength(Y.body) == null && x8A.isIterable(Y.body)) this[u8A] = 1, queueMicrotask(() => q86(this));else this[fRA](!0);
      if (this[u8A] && this[hn] !== 2 && this[A86]) this[hn] = 2;
      return this[hn] < 2;
    }
    async [BQ3]() {
      return new Promise(A => {
        if (this[NRA]) this[Sn] = A;else A(null);
      });
    }
    async [mQ3](A) {
      return new Promise(K => {
        let q = this[My].splice(this[Py]);
        for (let z = 0; z < q.length; z++) {
          let w = q[z];
          x8A.errorRequest(this, w, A);
        }
        let Y = () => {
          if (this[Sn]) this[Sn](), this[Sn] = null;
          K(null);
        };
        if (this[r0]) this[r0].destroy(A, Y), this[r0] = null;else queueMicrotask(Y);
        this[fRA]();
      });
    }
  }
  var cQ3 = __$.ZK1();
  function O34(A, K) {
    if (A[TRA] === 0 && K.code !== "UND_ERR_INFO" && K.code !== "UND_ERR_SOCKET") {
      DQ(A[Py] === A[jQ]);
      let q = A[My].splice(A[jQ]);
      for (let Y = 0; Y < q.length; Y++) {
        let z = q[Y];
        x8A.errorRequest(A, z, K);
      }
      DQ(A[NRA] === 0);
    }
  }
  async function X34(A) {
    DQ(!A[T0A]), DQ(!A[r0]);
    let {
      host: K,
      hostname: q,
      protocol: Y,
      port: z
    } = A[Mx];
    if (q[0] === "[") {
      let w = q.indexOf("]");
      DQ(w !== -1);
      let H = q.substring(1, w);
      DQ(w34.isIP(H)), q = H;
    }
    if (A[T0A] = !0, N0A.beforeConnect.hasSubscribers) N0A.beforeConnect.publish({
      connectParams: {
        host: K,
        hostname: q,
        protocol: Y,
        port: z,
        version: A[r0]?.version,
        servername: A[In],
        localAddress: A[VRA]
      },
      connector: A[PRA]
    });
    try {
      let w = await new Promise((H, J) => {
        A[PRA]({
          host: K,
          hostname: q,
          protocol: Y,
          port: z,
          servername: A[In],
          localAddress: A[VRA]
        }, (O, X) => {
          if (O) J(O);else H(X);
        });
      });
      if (A.destroyed) {
        x8A.destroy(w.on("error", Y34), new fQ3());
        return;
      }
      DQ(w);
      try {
        A[r0] = w.alpnProtocol === "h2" ? await dQ3(A, w) : await pQ3(A, w);
      } catch (H) {
        throw w.destroy().on("error", Y34), H;
      }
      if (A[T0A] = !1, w[uQ3] = 0, w[K86] = A[K86], w[TQ3] = A, w[CQ3] = null, N0A.connected.hasSubscribers) N0A.connected.publish({
        connectParams: {
          host: K,
          hostname: q,
          protocol: Y,
          port: z,
          version: A[r0]?.version,
          servername: A[In],
          localAddress: A[VRA]
        },
        connector: A[PRA],
        socket: w
      });
      A.emit("connect", A[Mx], [A]);
    } catch (w) {
      if (A.destroyed) return;
      if (A[T0A] = !1, N0A.connectError.hasSubscribers) N0A.connectError.publish({
        connectParams: {
          host: K,
          hostname: q,
          protocol: Y,
          port: z,
          version: A[r0]?.version,
          servername: A[In],
          localAddress: A[VRA]
        },
        connector: A[PRA],
        error: w
      });
      if (w.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
        DQ(A[TRA] === 0);
        while (A[vRA] > 0 && A[My][A[Py]].servername === A[In]) {
          let H = A[My][A[Py]++];
          x8A.errorRequest(A, H, w);
        }
      } else O34(A, w);
      A.emit("connectionError", A[Mx], [A], w);
    }
    A[fRA]();
  }
  function z34(A) {
    A[hn] = 0, A.emit("drain", A[Mx], [A]);
  }
  function q86(A, K) {
    if (A[u8A] === 2) return;
    if (A[u8A] = 2, lQ3(A, K), A[u8A] = 0, A[jQ] > 256) A[My].splice(0, A[jQ]), A[Py] -= A[jQ], A[jQ] = 0;
  }
  function lQ3(A, K) {
    while (!0) {
      if (A.destroyed) {
        DQ(A[vRA] === 0);
        return;
      }
      if (A[Sn] && !A[NRA]) {
        A[Sn](), A[Sn] = null;
        return;
      }
      if (A[r0]) A[r0].resume();
      if (A[A86]) A[hn] = 2;else if (A[hn] === 2) {
        if (K) A[hn] = 1, queueMicrotask(() => z34(A));else z34(A);
        continue;
      }
      if (A[vRA] === 0) return;
      if (A[TRA] >= (H34(A) || 1)) return;
      let q = A[My][A[Py]];
      if (A[Mx].protocol === "https:" && A[In] !== q.servername) {
        if (A[TRA] > 0) return;
        A[In] = q.servername, A[r0]?.destroy(new VQ3("servername changed"), () => {
          A[r0] = null, q86(A);
        });
      }
      if (A[T0A]) return;
      if (!A[r0]) {
        X34(A);
        return;
      }
      if (A[r0].destroyed) return;
      if (A[r0].busy(q)) return;
      if (!q.aborted && A[r0].write(q)) A[Py]++;else A[My].splice(A[Py], 1);
    }
  }
  $34.exports = J34;
});

// Register to shared state
__$.ERA = ERA;
