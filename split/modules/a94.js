// Module: a94
// Dependencies: _2, j9, xRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var a94 = v((B6w, o94) => {
  var {
      InvalidArgumentError: L86,
      SocketError: gp3
    } = __$._2(),
    {
      AsyncResource: Fp3
    } = CA("node:async_hooks"),
    c94 = __$.j9(),
    {
      addSignal: Qp3,
      removeSignal: l94
    } = __$.xRA(),
    i94 = CA("node:assert");
  class n94 extends Fp3 {
    constructor(A, K) {
      if (!A || typeof A !== "object") throw new L86("invalid opts");
      if (typeof K !== "function") throw new L86("invalid callback");
      let {
        signal: q,
        opaque: Y,
        responseHeaders: z
      } = A;
      if (q && typeof q.on !== "function" && typeof q.addEventListener !== "function") throw new L86("signal must be an EventEmitter or EventTarget");
      super("UNDICI_UPGRADE");
      this.responseHeaders = z || null, this.opaque = Y || null, this.callback = K, this.abort = null, this.context = null, Qp3(this, q);
    }
    onConnect(A, K) {
      if (this.reason) {
        A(this.reason);
        return;
      }
      i94(this.callback), this.abort = A, this.context = null;
    }
    onHeaders() {
      throw new gp3("bad upgrade", null);
    }
    onUpgrade(A, K, q) {
      i94(A === 101);
      let {
        callback: Y,
        opaque: z,
        context: w
      } = this;
      l94(this), this.callback = null;
      let H = this.responseHeaders === "raw" ? c94.parseRawHeaders(K) : c94.parseHeaders(K);
      this.runInAsyncScope(Y, null, null, {
        headers: H,
        socket: q,
        opaque: z,
        context: w
      });
    }
    onError(A) {
      let {
        callback: K,
        opaque: q
      } = this;
      if (l94(this), K) this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(K, null, A, {
          opaque: q
        });
      });
    }
  }
  function r94(A, K) {
    if (K === void 0) return new Promise((q, Y) => {
      r94.call(this, A, (z, w) => {
        return z ? Y(z) : q(w);
      });
    });
    try {
      let q = new n94(A, K);
      this.dispatch({
        ...A,
        method: A.method || "GET",
        upgrade: A.protocol || "Websocket"
      }, q);
    } catch (q) {
      if (typeof K !== "function") throw q;
      let Y = A?.opaque;
      queueMicrotask(() => K(q, {
        opaque: Y
      }));
    }
  }
  o94.exports = r94;
});

// Register to shared state
__$.a94 = a94;
