// Module: r54
// Dependencies: j9, _2, MJ, j0A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r54 = v((j6w, n54) => {
  var Nk = CA("node:assert"),
    {
      pipeline: QF3
    } = CA("node:stream"),
    r9 = __$.j9(),
    {
      RequestContentLengthMismatchError: r66,
      RequestAbortedError: U54,
      SocketError: jRA,
      InformationalError: o66
    } = __$._2(),
    {
      kUrl: OK1,
      kReset: $K1,
      kClient: f0A,
      kRunning: _K1,
      kPending: UF3,
      kQueue: Rn,
      kPendingIdx: a66,
      kRunningIdx: Wy,
      kError: jy,
      kSocket: wG,
      kStrictContentLength: pF3,
      kOnError: s66,
      kMaxConcurrentStreams: i54,
      kHTTP2Session: Dy,
      kResume: yn,
      kSize: dF3,
      kHTTPContext: cF3
    } = __$.MJ(),
    WQ = Symbol("open streams"),
    p54,
    d54 = !1,
    XK1;
  try {
    XK1 = CA("node:http2");
  } catch {
    XK1 = {
      constants: {}
    };
  }
  var {
    constants: {
      HTTP2_HEADER_AUTHORITY: lF3,
      HTTP2_HEADER_METHOD: iF3,
      HTTP2_HEADER_PATH: nF3,
      HTTP2_HEADER_SCHEME: rF3,
      HTTP2_HEADER_CONTENT_LENGTH: oF3,
      HTTP2_HEADER_EXPECT: aF3,
      HTTP2_HEADER_STATUS: sF3
    }
  } = XK1;
  function tF3(A) {
    let K = [];
    for (let [q, Y] of Object.entries(A)) if (Array.isArray(Y)) for (let z of Y) K.push(Buffer.from(q), Buffer.from(z));else K.push(Buffer.from(q), Buffer.from(Y));
    return K;
  }
  async function eF3(A, K) {
    if (A[wG] = K, !d54) d54 = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
      code: "UNDICI-H2"
    });
    let q = XK1.connect(A[OK1], {
      createConnection: () => K,
      peerMaxConcurrentStreams: A[i54]
    });
    q[WQ] = 0, q[f0A] = A, q[wG] = K, r9.addListener(q, "error", KQ3), r9.addListener(q, "frameError", qQ3), r9.addListener(q, "end", YQ3), r9.addListener(q, "goaway", zQ3), r9.addListener(q, "close", function () {
      let {
          [f0A]: z
        } = this,
        {
          [wG]: w
        } = z,
        H = this[wG][jy] || this[jy] || new jRA("closed", r9.getSocketInfo(w));
      if (z[Dy] = null, z.destroyed) {
        Nk(z[UF3] === 0);
        let J = z[Rn].splice(z[Wy]);
        for (let O = 0; O < J.length; O++) {
          let X = J[O];
          r9.errorRequest(z, X, H);
        }
      }
    }), q.unref(), A[Dy] = q, K[Dy] = q, r9.addListener(K, "error", function (z) {
      Nk(z.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[jy] = z, this[f0A][s66](z);
    }), r9.addListener(K, "end", function () {
      r9.destroy(this, new jRA("other side closed", r9.getSocketInfo(this)));
    }), r9.addListener(K, "close", function () {
      let z = this[jy] || new jRA("closed", r9.getSocketInfo(this));
      if (A[wG] = null, this[Dy] != null) this[Dy].destroy(z);
      A[a66] = A[Wy], Nk(A[_K1] === 0), A.emit("disconnect", A[OK1], [A], z), A[yn]();
    });
    let Y = !1;
    return K.on("close", () => {
      Y = !0;
    }), {
      version: "h2",
      defaultPipelining: 1 / 0,
      write(...z) {
        return HQ3(A, ...z);
      },
      resume() {
        AQ3(A);
      },
      destroy(z, w) {
        if (Y) queueMicrotask(w);else K.destroy(z).on("close", w);
      },
      get destroyed() {
        return K.destroyed;
      },
      busy() {
        return !1;
      }
    };
  }
  function AQ3(A) {
    let K = A[wG];
    if (K?.destroyed === !1) if (A[dF3] === 0 && A[i54] === 0) K.unref(), A[Dy].unref();else K.ref(), A[Dy].ref();
  }
  function KQ3(A) {
    Nk(A.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[wG][jy] = A, this[f0A][s66](A);
  }
  function qQ3(A, K, q) {
    if (q === 0) {
      let Y = new o66(`HTTP/2: "frameError" received - type ${A}, code ${K}`);
      this[wG][jy] = Y, this[f0A][s66](Y);
    }
  }
  function YQ3() {
    let A = new jRA("other side closed", r9.getSocketInfo(this[wG]));
    this.destroy(A), r9.destroy(this[wG], A);
  }
  function zQ3(A) {
    let K = this[jy] || new jRA(`HTTP/2: "GOAWAY" frame received with code ${A}`, r9.getSocketInfo(this)),
      q = this[f0A];
    if (q[wG] = null, q[cF3] = null, this[Dy] != null) this[Dy].destroy(K), this[Dy] = null;
    if (r9.destroy(this[wG], K), q[Wy] < q[Rn].length) {
      let Y = q[Rn][q[Wy]];
      q[Rn][q[Wy]++] = null, r9.errorRequest(q, Y, K), q[a66] = q[Wy];
    }
    Nk(q[_K1] === 0), q.emit("disconnect", q[OK1], [q], K), q[yn]();
  }
  function wQ3(A) {
    return A !== "GET" && A !== "HEAD" && A !== "OPTIONS" && A !== "TRACE" && A !== "CONNECT";
  }
  function HQ3(A, K) {
    let q = A[Dy],
      {
        method: Y,
        path: z,
        host: w,
        upgrade: H,
        expectContinue: J,
        signal: O,
        headers: X
      } = K,
      {
        body: $
      } = K;
    if (H) return r9.errorRequest(A, K, Error("Upgrade not supported for H2")), !1;
    let _ = {};
    for (let N = 0; N < X.length; N += 2) {
      let T = X[N + 0],
        C = X[N + 1];
      if (Array.isArray(C)) {
        for (let R = 0; R < C.length; R++) if (_[T]) _[T] += `,${C[R]}`;else _[T] = C[R];
      } else _[T] = C;
    }
    let G,
      {
        hostname: Z,
        port: W
      } = A[OK1];
    _[lF3] = w || `${Z}${W ? `:${W}` : ""}`, _[iF3] = Y;
    let D = N => {
      if (K.aborted || K.completed) return;
      if (N = N || new U54(), r9.errorRequest(A, K, N), G != null) r9.destroy(G, N);
      r9.destroy($, N), A[Rn][A[Wy]++] = null, A[yn]();
    };
    try {
      K.onConnect(D);
    } catch (N) {
      r9.errorRequest(A, K, N);
    }
    if (K.aborted) return !1;
    if (Y === "CONNECT") {
      if (q.ref(), G = q.request(_, {
        endStream: !1,
        signal: O
      }), G.id && !G.pending) K.onUpgrade(null, null, G), ++q[WQ], A[Rn][A[Wy]++] = null;else G.once("ready", () => {
        K.onUpgrade(null, null, G), ++q[WQ], A[Rn][A[Wy]++] = null;
      });
      return G.once("close", () => {
        if (q[WQ] -= 1, q[WQ] === 0) q.unref();
      }), !0;
    }
    _[nF3] = z, _[rF3] = "https";
    let j = Y === "PUT" || Y === "POST" || Y === "PATCH";
    if ($ && typeof $.read === "function") $.read(0);
    let M = r9.bodyLength($);
    if (r9.isFormDataLike($)) {
      p54 ??= __$.j0A().extractBody;
      let [N, T] = p54($);
      _["content-type"] = T, $ = N.stream, M = N.length;
    }
    if (M == null) M = K.contentLength;
    if (M === 0 || !j) M = null;
    if (wQ3(Y) && M > 0 && K.contentLength != null && K.contentLength !== M) {
      if (A[pF3]) return r9.errorRequest(A, K, new r66()), !1;
      process.emitWarning(new r66());
    }
    if (M != null) Nk($, "no body must not have content length"), _[oF3] = `${M}`;
    q.ref();
    let P = Y === "GET" || Y === "HEAD" || $ === null;
    if (J) _[aF3] = "100-continue", G = q.request(_, {
      endStream: P,
      signal: O
    }), G.once("continue", f);else G = q.request(_, {
      endStream: P,
      signal: O
    }), f();
    return ++q[WQ], G.once("response", N => {
      let {
        [sF3]: T,
        ...C
      } = N;
      if (K.onResponseStarted(), K.aborted) {
        let R = new U54();
        r9.errorRequest(A, K, R), r9.destroy(G, R);
        return;
      }
      if (K.onHeaders(Number(T), tF3(C), G.resume.bind(G), "") === !1) G.pause();
      G.on("data", R => {
        if (K.onData(R) === !1) G.pause();
      });
    }), G.once("end", () => {
      if (G.state?.state == null || G.state.state < 6) K.onComplete([]);
      if (q[WQ] === 0) q.unref();
      D(new o66("HTTP/2: stream half-closed (remote)")), A[Rn][A[Wy]++] = null, A[a66] = A[Wy], A[yn]();
    }), G.once("close", () => {
      if (q[WQ] -= 1, q[WQ] === 0) q.unref();
    }), G.once("error", function (N) {
      D(N);
    }), G.once("frameError", (N, T) => {
      D(new o66(`HTTP/2: "frameError" received - type ${N}, code ${T}`));
    }), !0;
    function f() {
      if (!$ || M === 0) c54(D, G, null, A, K, A[wG], M, j);else if (r9.isBuffer($)) c54(D, G, $, A, K, A[wG], M, j);else if (r9.isBlobLike($)) {
        if (typeof $.stream === "function") l54(D, G, $.stream(), A, K, A[wG], M, j);else OQ3(D, G, $, A, K, A[wG], M, j);
      } else if (r9.isStream($)) JQ3(D, A[wG], j, G, $, A, K, M);else if (r9.isIterable($)) l54(D, G, $, A, K, A[wG], M, j);else Nk(!1);
    }
  }
  function c54(A, K, q, Y, z, w, H, J) {
    try {
      if (q != null && r9.isBuffer(q)) Nk(H === q.byteLength, "buffer body must have content length"), K.cork(), K.write(q), K.uncork(), K.end(), z.onBodySent(q);
      if (!J) w[$K1] = !0;
      z.onRequestSent(), Y[yn]();
    } catch (O) {
      A(O);
    }
  }
  function JQ3(A, K, q, Y, z, w, H, J) {
    Nk(J !== 0 || w[_K1] === 0, "stream body cannot be pipelined");
    let O = QF3(z, Y, $ => {
      if ($) r9.destroy(O, $), A($);else {
        if (r9.removeAllListeners(O), H.onRequestSent(), !q) K[$K1] = !0;
        w[yn]();
      }
    });
    r9.addListener(O, "data", X);
    function X($) {
      H.onBodySent($);
    }
  }
  async function OQ3(A, K, q, Y, z, w, H, J) {
    Nk(H === q.size, "blob body must have content length");
    try {
      if (H != null && H !== q.size) throw new r66();
      let O = Buffer.from(await q.arrayBuffer());
      if (K.cork(), K.write(O), K.uncork(), K.end(), z.onBodySent(O), z.onRequestSent(), !J) w[$K1] = !0;
      Y[yn]();
    } catch (O) {
      A(O);
    }
  }
  async function l54(A, K, q, Y, z, w, H, J) {
    Nk(H !== 0 || Y[_K1] === 0, "iterator body cannot be pipelined");
    let O = null;
    function X() {
      if (O) {
        let _ = O;
        O = null, _();
      }
    }
    let $ = () => new Promise((_, G) => {
      if (Nk(O === null), w[jy]) G(w[jy]);else O = _;
    });
    K.on("close", X).on("drain", X);
    try {
      for await (let _ of q) {
        if (w[jy]) throw w[jy];
        let G = K.write(_);
        if (z.onBodySent(_), !G) await $();
      }
      if (K.end(), z.onRequestSent(), !J) w[$K1] = !0;
      Y[yn]();
    } catch (_) {
      A(_);
    } finally {
      K.off("close", X).off("drain", X);
    }
  }
  n54.exports = eF3;
});

// Register to shared state
__$.r54 = r54;
