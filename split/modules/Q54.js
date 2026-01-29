// Module: Q54
// Dependencies: j9, Y0A, V66, _2, MJ, Eq4, k66, Lq4, j0A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Q54 = v((D6w, F54) => {
  var Tq = CA("node:assert"),
    M5 = __$.j9(),
    {
      channels: y54
    } = __$.Y0A(),
    F66 = __$.V66(),
    {
      RequestContentLengthMismatchError: b8A,
      ResponseContentLengthMismatchError: ZF3,
      RequestAbortedError: u54,
      HeadersTimeoutError: WF3,
      HeadersOverflowError: DF3,
      SocketError: HK1,
      InformationalError: M0A,
      BodyTimeoutError: jF3,
      HTTPParserError: MF3,
      ResponseExceededMaxSizeError: PF3
    } = __$._2(),
    {
      kUrl: B54,
      kReset: SV,
      kClient: d66,
      kParser: nO,
      kBlocking: DRA,
      kRunning: TD,
      kPending: VF3,
      kSize: I54,
      kWriting: Ln,
      kQueue: Zy,
      kNoRef: ZRA,
      kKeepAliveDefaultTimeout: fF3,
      kHostHeader: NF3,
      kPendingIdx: TF3,
      kRunningIdx: Vk,
      kError: fk,
      kPipelining: zK1,
      kSocket: P0A,
      kKeepAliveTimeoutValue: JK1,
      kMaxHeadersSize: Q66,
      kKeepAliveMaxTimeout: vF3,
      kKeepAliveTimeoutThreshold: EF3,
      kHeadersTimeout: kF3,
      kBodyTimeout: CF3,
      kStrictContentLength: c66,
      kMaxRequests: S54,
      kCounter: LF3,
      kMaxResponseSize: RF3,
      kOnError: yF3,
      kResume: Cn,
      kHTTPContext: m54
    } = __$.MJ(),
    Zx = __$.Eq4(),
    IF3 = Buffer.alloc(0),
    KK1 = Buffer[Symbol.species],
    qK1 = M5.addListener,
    SF3 = M5.removeAllListeners,
    U66;
  async function hF3() {
    let A = process.env.JEST_WORKER_ID ? __$.k66() : void 0,
      K;
    try {
      K = await WebAssembly.compile(__$.Lq4());
    } catch (q) {
      K = await WebAssembly.compile(A || __$.k66());
    }
    return await WebAssembly.instantiate(K, {
      env: {
        wasm_on_url: (q, Y, z) => {
          return 0;
        },
        wasm_on_status: (q, Y, z) => {
          Tq(K_.ptr === q);
          let w = Y - Dx + Wx.byteOffset;
          return K_.onStatus(new KK1(Wx.buffer, w, z)) || 0;
        },
        wasm_on_message_begin: q => {
          return Tq(K_.ptr === q), K_.onMessageBegin() || 0;
        },
        wasm_on_header_field: (q, Y, z) => {
          Tq(K_.ptr === q);
          let w = Y - Dx + Wx.byteOffset;
          return K_.onHeaderField(new KK1(Wx.buffer, w, z)) || 0;
        },
        wasm_on_header_value: (q, Y, z) => {
          Tq(K_.ptr === q);
          let w = Y - Dx + Wx.byteOffset;
          return K_.onHeaderValue(new KK1(Wx.buffer, w, z)) || 0;
        },
        wasm_on_headers_complete: (q, Y, z, w) => {
          return Tq(K_.ptr === q), K_.onHeadersComplete(Y, Boolean(z), Boolean(w)) || 0;
        },
        wasm_on_body: (q, Y, z) => {
          Tq(K_.ptr === q);
          let w = Y - Dx + Wx.byteOffset;
          return K_.onBody(new KK1(Wx.buffer, w, z)) || 0;
        },
        wasm_on_message_complete: q => {
          return Tq(K_.ptr === q), K_.onMessageComplete() || 0;
        }
      }
    });
  }
  var p66 = null,
    l66 = hF3();
  l66.catch();
  var K_ = null,
    Wx = null,
    YK1 = 0,
    Dx = null,
    bF3 = 0,
    WRA = 1,
    V0A = 2 | WRA,
    wK1 = 4 | WRA,
    i66 = 8 | bF3;
  class g54 {
    constructor(A, K, {
      exports: q
    }) {
      Tq(Number.isFinite(A[Q66]) && A[Q66] > 0), this.llhttp = q, this.ptr = this.llhttp.llhttp_alloc(Zx.TYPE.RESPONSE), this.client = A, this.socket = K, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = A[Q66], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = A[RF3];
    }
    setTimeout(A, K) {
      if (A !== this.timeoutValue || K & WRA ^ this.timeoutType & WRA) {
        if (this.timeout) F66.clearTimeout(this.timeout), this.timeout = null;
        if (A) if (K & WRA) this.timeout = F66.setFastTimeout(h54, A, new WeakRef(this));else this.timeout = setTimeout(h54, A, new WeakRef(this)), this.timeout.unref();
        this.timeoutValue = A;
      } else if (this.timeout) {
        if (this.timeout.refresh) this.timeout.refresh();
      }
      this.timeoutType = K;
    }
    resume() {
      if (this.socket.destroyed || !this.paused) return;
      if (Tq(this.ptr != null), Tq(K_ == null), this.llhttp.llhttp_resume(this.ptr), Tq(this.timeoutType === wK1), this.timeout) {
        if (this.timeout.refresh) this.timeout.refresh();
      }
      this.paused = !1, this.execute(this.socket.read() || IF3), this.readMore();
    }
    readMore() {
      while (!this.paused && this.ptr) {
        let A = this.socket.read();
        if (A === null) break;
        this.execute(A);
      }
    }
    execute(A) {
      Tq(this.ptr != null), Tq(K_ == null), Tq(!this.paused);
      let {
        socket: K,
        llhttp: q
      } = this;
      if (A.length > YK1) {
        if (Dx) q.free(Dx);
        YK1 = Math.ceil(A.length / 4096) * 4096, Dx = q.malloc(YK1);
      }
      new Uint8Array(q.memory.buffer, Dx, YK1).set(A);
      try {
        let Y;
        try {
          Wx = A, K_ = this, Y = q.llhttp_execute(this.ptr, Dx, A.length);
        } catch (w) {
          throw w;
        } finally {
          K_ = null, Wx = null;
        }
        let z = q.llhttp_get_error_pos(this.ptr) - Dx;
        if (Y === Zx.ERROR.PAUSED_UPGRADE) this.onUpgrade(A.slice(z));else if (Y === Zx.ERROR.PAUSED) this.paused = !0, K.unshift(A.slice(z));else if (Y !== Zx.ERROR.OK) {
          let w = q.llhttp_get_error_reason(this.ptr),
            H = "";
          if (w) {
            let J = new Uint8Array(q.memory.buffer, w).indexOf(0);
            H = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(q.memory.buffer, w, J).toString() + ")";
          }
          throw new MF3(H, Zx.ERROR[Y], A.slice(z));
        }
      } catch (Y) {
        M5.destroy(K, Y);
      }
    }
    destroy() {
      Tq(this.ptr != null), Tq(K_ == null), this.llhttp.llhttp_free(this.ptr), this.ptr = null, this.timeout && F66.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1;
    }
    onStatus(A) {
      this.statusText = A.toString();
    }
    onMessageBegin() {
      let {
        socket: A,
        client: K
      } = this;
      if (A.destroyed) return -1;
      let q = K[Zy][K[Vk]];
      if (!q) return -1;
      q.onResponseStarted();
    }
    onHeaderField(A) {
      let K = this.headers.length;
      if ((K & 1) === 0) this.headers.push(A);else this.headers[K - 1] = Buffer.concat([this.headers[K - 1], A]);
      this.trackHeader(A.length);
    }
    onHeaderValue(A) {
      let K = this.headers.length;
      if ((K & 1) === 1) this.headers.push(A), K += 1;else this.headers[K - 1] = Buffer.concat([this.headers[K - 1], A]);
      let q = this.headers[K - 2];
      if (q.length === 10) {
        let Y = M5.bufferToLowerCasedHeaderName(q);
        if (Y === "keep-alive") this.keepAlive += A.toString();else if (Y === "connection") this.connection += A.toString();
      } else if (q.length === 14 && M5.bufferToLowerCasedHeaderName(q) === "content-length") this.contentLength += A.toString();
      this.trackHeader(A.length);
    }
    trackHeader(A) {
      if (this.headersSize += A, this.headersSize >= this.headersMaxSize) M5.destroy(this.socket, new DF3());
    }
    onUpgrade(A) {
      let {
        upgrade: K,
        client: q,
        socket: Y,
        headers: z,
        statusCode: w
      } = this;
      Tq(K), Tq(q[P0A] === Y), Tq(!Y.destroyed), Tq(!this.paused), Tq((z.length & 1) === 0);
      let H = q[Zy][q[Vk]];
      Tq(H), Tq(H.upgrade || H.method === "CONNECT"), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, this.headers = [], this.headersSize = 0, Y.unshift(A), Y[nO].destroy(), Y[nO] = null, Y[d66] = null, Y[fk] = null, SF3(Y), q[P0A] = null, q[m54] = null, q[Zy][q[Vk]++] = null, q.emit("disconnect", q[B54], [q], new M0A("upgrade"));
      try {
        H.onUpgrade(w, z, Y);
      } catch (J) {
        M5.destroy(Y, J);
      }
      q[Cn]();
    }
    onHeadersComplete(A, K, q) {
      let {
        client: Y,
        socket: z,
        headers: w,
        statusText: H
      } = this;
      if (z.destroyed) return -1;
      let J = Y[Zy][Y[Vk]];
      if (!J) return -1;
      if (Tq(!this.upgrade), Tq(this.statusCode < 200), A === 100) return M5.destroy(z, new HK1("bad response", M5.getSocketInfo(z))), -1;
      if (K && !J.upgrade) return M5.destroy(z, new HK1("bad upgrade", M5.getSocketInfo(z))), -1;
      if (Tq(this.timeoutType === V0A), this.statusCode = A, this.shouldKeepAlive = q || J.method === "HEAD" && !z[SV] && this.connection.toLowerCase() === "keep-alive", this.statusCode >= 200) {
        let X = J.bodyTimeout != null ? J.bodyTimeout : Y[CF3];
        this.setTimeout(X, wK1);
      } else if (this.timeout) {
        if (this.timeout.refresh) this.timeout.refresh();
      }
      if (J.method === "CONNECT") return Tq(Y[TD] === 1), this.upgrade = !0, 2;
      if (K) return Tq(Y[TD] === 1), this.upgrade = !0, 2;
      if (Tq((this.headers.length & 1) === 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && Y[zK1]) {
        let X = this.keepAlive ? M5.parseKeepAliveTimeout(this.keepAlive) : null;
        if (X != null) {
          let $ = Math.min(X - Y[EF3], Y[vF3]);
          if ($ <= 0) z[SV] = !0;else Y[JK1] = $;
        } else Y[JK1] = Y[fF3];
      } else z[SV] = !0;
      let O = J.onHeaders(A, w, this.resume, H) === !1;
      if (J.aborted) return -1;
      if (J.method === "HEAD") return 1;
      if (A < 200) return 1;
      if (z[DRA]) z[DRA] = !1, Y[Cn]();
      return O ? Zx.ERROR.PAUSED : 0;
    }
    onBody(A) {
      let {
        client: K,
        socket: q,
        statusCode: Y,
        maxResponseSize: z
      } = this;
      if (q.destroyed) return -1;
      let w = K[Zy][K[Vk]];
      if (Tq(w), Tq(this.timeoutType === wK1), this.timeout) {
        if (this.timeout.refresh) this.timeout.refresh();
      }
      if (Tq(Y >= 200), z > -1 && this.bytesRead + A.length > z) return M5.destroy(q, new PF3()), -1;
      if (this.bytesRead += A.length, w.onData(A) === !1) return Zx.ERROR.PAUSED;
    }
    onMessageComplete() {
      let {
        client: A,
        socket: K,
        statusCode: q,
        upgrade: Y,
        headers: z,
        contentLength: w,
        bytesRead: H,
        shouldKeepAlive: J
      } = this;
      if (K.destroyed && (!q || J)) return -1;
      if (Y) return;
      Tq(q >= 100), Tq((this.headers.length & 1) === 0);
      let O = A[Zy][A[Vk]];
      if (Tq(O), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", this.headers = [], this.headersSize = 0, q < 200) return;
      if (O.method !== "HEAD" && w && H !== parseInt(w, 10)) return M5.destroy(K, new ZF3()), -1;
      if (O.onComplete(z), A[Zy][A[Vk]++] = null, K[Ln]) return Tq(A[TD] === 0), M5.destroy(K, new M0A("reset")), Zx.ERROR.PAUSED;else if (!J) return M5.destroy(K, new M0A("reset")), Zx.ERROR.PAUSED;else if (K[SV] && A[TD] === 0) return M5.destroy(K, new M0A("reset")), Zx.ERROR.PAUSED;else if (A[zK1] == null || A[zK1] === 1) setImmediate(() => A[Cn]());else A[Cn]();
    }
  }
  function h54(A) {
    let {
      socket: K,
      timeoutType: q,
      client: Y,
      paused: z
    } = A.deref();
    if (q === V0A) {
      if (!K[Ln] || K.writableNeedDrain || Y[TD] > 1) Tq(!z, "cannot be paused while waiting for headers"), M5.destroy(K, new WF3());
    } else if (q === wK1) {
      if (!z) M5.destroy(K, new jF3());
    } else if (q === i66) Tq(Y[TD] === 0 && Y[JK1]), M5.destroy(K, new M0A("socket idle timeout"));
  }
  async function xF3(A, K) {
    if (A[P0A] = K, !p66) p66 = await l66, l66 = null;
    K[ZRA] = !1, K[Ln] = !1, K[SV] = !1, K[DRA] = !1, K[nO] = new g54(A, K, p66), qK1(K, "error", function (Y) {
      Tq(Y.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
      let z = this[nO];
      if (Y.code === "ECONNRESET" && z.statusCode && !z.shouldKeepAlive) {
        z.onMessageComplete();
        return;
      }
      this[fk] = Y, this[d66][yF3](Y);
    }), qK1(K, "readable", function () {
      let Y = this[nO];
      if (Y) Y.readMore();
    }), qK1(K, "end", function () {
      let Y = this[nO];
      if (Y.statusCode && !Y.shouldKeepAlive) {
        Y.onMessageComplete();
        return;
      }
      M5.destroy(this, new HK1("other side closed", M5.getSocketInfo(this)));
    }), qK1(K, "close", function () {
      let Y = this[d66],
        z = this[nO];
      if (z) {
        if (!this[fk] && z.statusCode && !z.shouldKeepAlive) z.onMessageComplete();
        this[nO].destroy(), this[nO] = null;
      }
      let w = this[fk] || new HK1("closed", M5.getSocketInfo(this));
      if (Y[P0A] = null, Y[m54] = null, Y.destroyed) {
        Tq(Y[VF3] === 0);
        let H = Y[Zy].splice(Y[Vk]);
        for (let J = 0; J < H.length; J++) {
          let O = H[J];
          M5.errorRequest(Y, O, w);
        }
      } else if (Y[TD] > 0 && w.code !== "UND_ERR_INFO") {
        let H = Y[Zy][Y[Vk]];
        Y[Zy][Y[Vk]++] = null, M5.errorRequest(Y, H, w);
      }
      Y[TF3] = Y[Vk], Tq(Y[TD] === 0), Y.emit("disconnect", Y[B54], [Y], w), Y[Cn]();
    });
    let q = !1;
    return K.on("close", () => {
      q = !0;
    }), {
      version: "h1",
      defaultPipelining: 1,
      write(...Y) {
        return mF3(A, ...Y);
      },
      resume() {
        uF3(A);
      },
      destroy(Y, z) {
        if (q) queueMicrotask(z);else K.destroy(Y).on("close", z);
      },
      get destroyed() {
        return K.destroyed;
      },
      busy(Y) {
        if (K[Ln] || K[SV] || K[DRA]) return !0;
        if (Y) {
          if (A[TD] > 0 && !Y.idempotent) return !0;
          if (A[TD] > 0 && (Y.upgrade || Y.method === "CONNECT")) return !0;
          if (A[TD] > 0 && M5.bodyLength(Y.body) !== 0 && (M5.isStream(Y.body) || M5.isAsyncIterable(Y.body) || M5.isFormDataLike(Y.body))) return !0;
        }
        return !1;
      }
    };
  }
  function uF3(A) {
    let K = A[P0A];
    if (K && !K.destroyed) {
      if (A[I54] === 0) {
        if (!K[ZRA] && K.unref) K.unref(), K[ZRA] = !0;
      } else if (K[ZRA] && K.ref) K.ref(), K[ZRA] = !1;
      if (A[I54] === 0) {
        if (K[nO].timeoutType !== i66) K[nO].setTimeout(A[JK1], i66);
      } else if (A[TD] > 0 && K[nO].statusCode < 200) {
        if (K[nO].timeoutType !== V0A) {
          let q = A[Zy][A[Vk]],
            Y = q.headersTimeout != null ? q.headersTimeout : A[kF3];
          K[nO].setTimeout(Y, V0A);
        }
      }
    }
  }
  function BF3(A) {
    return A !== "GET" && A !== "HEAD" && A !== "OPTIONS" && A !== "TRACE" && A !== "CONNECT";
  }
  function mF3(A, K) {
    let {
        method: q,
        path: Y,
        host: z,
        upgrade: w,
        blocking: H,
        reset: J
      } = K,
      {
        body: O,
        headers: X,
        contentLength: $
      } = K,
      _ = q === "PUT" || q === "POST" || q === "PATCH" || q === "QUERY" || q === "PROPFIND" || q === "PROPPATCH";
    if (M5.isFormDataLike(O)) {
      if (!U66) U66 = __$.j0A().extractBody;
      let [j, M] = U66(O);
      if (K.contentType == null) X.push("content-type", M);
      O = j.stream, $ = j.length;
    } else if (M5.isBlobLike(O) && K.contentType == null && O.type) X.push("content-type", O.type);
    if (O && typeof O.read === "function") O.read(0);
    let G = M5.bodyLength(O);
    if ($ = G ?? $, $ === null) $ = K.contentLength;
    if ($ === 0 && !_) $ = null;
    if (BF3(q) && $ > 0 && K.contentLength !== null && K.contentLength !== $) {
      if (A[c66]) return M5.errorRequest(A, K, new b8A()), !1;
      process.emitWarning(new b8A());
    }
    let Z = A[P0A],
      W = j => {
        if (K.aborted || K.completed) return;
        M5.errorRequest(A, K, j || new u54()), M5.destroy(O), M5.destroy(Z, new M0A("aborted"));
      };
    try {
      K.onConnect(W);
    } catch (j) {
      M5.errorRequest(A, K, j);
    }
    if (K.aborted) return !1;
    if (q === "HEAD") Z[SV] = !0;
    if (w || q === "CONNECT") Z[SV] = !0;
    if (J != null) Z[SV] = J;
    if (A[S54] && Z[LF3]++ >= A[S54]) Z[SV] = !0;
    if (H) Z[DRA] = !0;
    let D = `${q} ${Y} HTTP/1.1\r
`;
    if (typeof z === "string") D += `host: ${z}\r
`;else D += A[NF3];
    if (w) D += `connection: upgrade\r
upgrade: ${w}\r
`;else if (A[zK1] && !Z[SV]) D += `connection: keep-alive\r
`;else D += `connection: close\r
`;
    if (Array.isArray(X)) for (let j = 0; j < X.length; j += 2) {
      let M = X[j + 0],
        P = X[j + 1];
      if (Array.isArray(P)) for (let f = 0; f < P.length; f++) D += `${M}: ${P[f]}\r
`;else D += `${M}: ${P}\r
`;
    }
    if (y54.sendHeaders.hasSubscribers) y54.sendHeaders.publish({
      request: K,
      headers: D,
      socket: Z
    });
    if (!O || G === 0) b54(W, null, A, K, Z, $, D, _);else if (M5.isBuffer(O)) b54(W, O, A, K, Z, $, D, _);else if (M5.isBlobLike(O)) {
      if (typeof O.stream === "function") x54(W, O.stream(), A, K, Z, $, D, _);else FF3(W, O, A, K, Z, $, D, _);
    } else if (M5.isStream(O)) gF3(W, O, A, K, Z, $, D, _);else if (M5.isIterable(O)) x54(W, O, A, K, Z, $, D, _);else Tq(!1);
    return !0;
  }
  function gF3(A, K, q, Y, z, w, H, J) {
    Tq(w !== 0 || q[TD] === 0, "stream body cannot be pipelined");
    let O = !1,
      X = new n66({
        abort: A,
        socket: z,
        request: Y,
        contentLength: w,
        client: q,
        expectsPayload: J,
        header: H
      }),
      $ = function (W) {
        if (O) return;
        try {
          if (!X.write(W) && this.pause) this.pause();
        } catch (D) {
          M5.destroy(this, D);
        }
      },
      _ = function () {
        if (O) return;
        if (K.resume) K.resume();
      },
      G = function () {
        if (queueMicrotask(() => {
          K.removeListener("error", Z);
        }), !O) {
          let W = new u54();
          queueMicrotask(() => Z(W));
        }
      },
      Z = function (W) {
        if (O) return;
        if (O = !0, Tq(z.destroyed || z[Ln] && q[TD] <= 1), z.off("drain", _).off("error", Z), K.removeListener("data", $).removeListener("end", Z).removeListener("close", G), !W) try {
          X.end();
        } catch (D) {
          W = D;
        }
        if (X.destroy(W), W && (W.code !== "UND_ERR_INFO" || W.message !== "reset")) M5.destroy(K, W);else M5.destroy(K);
      };
    if (K.on("data", $).on("end", Z).on("error", Z).on("close", G), K.resume) K.resume();
    if (z.on("drain", _).on("error", Z), K.errorEmitted ?? K.errored) setImmediate(() => Z(K.errored));else if (K.endEmitted ?? K.readableEnded) setImmediate(() => Z(null));
    if (K.closeEmitted ?? K.closed) setImmediate(G);
  }
  function b54(A, K, q, Y, z, w, H, J) {
    try {
      if (!K) {
        if (w === 0) z.write(`${H}content-length: 0\r
\r
`, "latin1");else Tq(w === null, "no body must not have content length"), z.write(`${H}\r
`, "latin1");
      } else if (M5.isBuffer(K)) {
        if (Tq(w === K.byteLength, "buffer body must have content length"), z.cork(), z.write(`${H}content-length: ${w}\r
\r
`, "latin1"), z.write(K), z.uncork(), Y.onBodySent(K), !J && Y.reset !== !1) z[SV] = !0;
      }
      Y.onRequestSent(), q[Cn]();
    } catch (O) {
      A(O);
    }
  }
  async function FF3(A, K, q, Y, z, w, H, J) {
    Tq(w === K.size, "blob body must have content length");
    try {
      if (w != null && w !== K.size) throw new b8A();
      let O = Buffer.from(await K.arrayBuffer());
      if (z.cork(), z.write(`${H}content-length: ${w}\r
\r
`, "latin1"), z.write(O), z.uncork(), Y.onBodySent(O), Y.onRequestSent(), !J && Y.reset !== !1) z[SV] = !0;
      q[Cn]();
    } catch (O) {
      A(O);
    }
  }
  async function x54(A, K, q, Y, z, w, H, J) {
    Tq(w !== 0 || q[TD] === 0, "iterator body cannot be pipelined");
    let O = null;
    function X() {
      if (O) {
        let G = O;
        O = null, G();
      }
    }
    let $ = () => new Promise((G, Z) => {
      if (Tq(O === null), z[fk]) Z(z[fk]);else O = G;
    });
    z.on("close", X).on("drain", X);
    let _ = new n66({
      abort: A,
      socket: z,
      request: Y,
      contentLength: w,
      client: q,
      expectsPayload: J,
      header: H
    });
    try {
      for await (let G of K) {
        if (z[fk]) throw z[fk];
        if (!_.write(G)) await $();
      }
      _.end();
    } catch (G) {
      _.destroy(G);
    } finally {
      z.off("close", X).off("drain", X);
    }
  }
  class n66 {
    constructor({
      abort: A,
      socket: K,
      request: q,
      contentLength: Y,
      client: z,
      expectsPayload: w,
      header: H
    }) {
      this.socket = K, this.request = q, this.contentLength = Y, this.client = z, this.bytesWritten = 0, this.expectsPayload = w, this.header = H, this.abort = A, K[Ln] = !0;
    }
    write(A) {
      let {
        socket: K,
        request: q,
        contentLength: Y,
        client: z,
        bytesWritten: w,
        expectsPayload: H,
        header: J
      } = this;
      if (K[fk]) throw K[fk];
      if (K.destroyed) return !1;
      let O = Buffer.byteLength(A);
      if (!O) return !0;
      if (Y !== null && w + O > Y) {
        if (z[c66]) throw new b8A();
        process.emitWarning(new b8A());
      }
      if (K.cork(), w === 0) {
        if (!H && q.reset !== !1) K[SV] = !0;
        if (Y === null) K.write(`${J}transfer-encoding: chunked\r
`, "latin1");else K.write(`${J}content-length: ${Y}\r
\r
`, "latin1");
      }
      if (Y === null) K.write(`\r
${O.toString(16)}\r
`, "latin1");
      this.bytesWritten += O;
      let X = K.write(A);
      if (K.uncork(), q.onBodySent(A), !X) {
        if (K[nO].timeout && K[nO].timeoutType === V0A) {
          if (K[nO].timeout.refresh) K[nO].timeout.refresh();
        }
      }
      return X;
    }
    end() {
      let {
        socket: A,
        contentLength: K,
        client: q,
        bytesWritten: Y,
        expectsPayload: z,
        header: w,
        request: H
      } = this;
      if (H.onRequestSent(), A[Ln] = !1, A[fk]) throw A[fk];
      if (A.destroyed) return;
      if (Y === 0) {
        if (z) A.write(`${w}content-length: 0\r
\r
`, "latin1");else A.write(`${w}\r
`, "latin1");
      } else if (K === null) A.write(`\r
0\r
\r
`, "latin1");
      if (K !== null && Y !== K) if (q[c66]) throw new b8A();else process.emitWarning(new b8A());
      if (A[nO].timeout && A[nO].timeoutType === V0A) {
        if (A[nO].timeout.refresh) A[nO].timeout.refresh();
      }
      q[Cn]();
    }
    destroy(A) {
      let {
        socket: K,
        client: q,
        abort: Y
      } = this;
      if (K[Ln] = !1, A) Tq(q[TD] <= 1, "pipeline should only contain this request"), Y(A);
    }
  }
  F54.exports = xF3;
});

// Register to shared state
__$.Q54 = Q54;
