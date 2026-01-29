// Module: qY4
// Dependencies: _2, j9, xRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qY4 = v((m6w, KY4) => {
  var Up3 = CA("node:assert"),
    {
      AsyncResource: pp3
    } = CA("node:async_hooks"),
    {
      InvalidArgumentError: R86,
      SocketError: dp3
    } = __$._2(),
    s94 = __$.j9(),
    {
      addSignal: cp3,
      removeSignal: t94
    } = __$.xRA();
  class e94 extends pp3 {
    constructor(A, K) {
      if (!A || typeof A !== "object") throw new R86("invalid opts");
      if (typeof K !== "function") throw new R86("invalid callback");
      let {
        signal: q,
        opaque: Y,
        responseHeaders: z
      } = A;
      if (q && typeof q.on !== "function" && typeof q.addEventListener !== "function") throw new R86("signal must be an EventEmitter or EventTarget");
      super("UNDICI_CONNECT");
      this.opaque = Y || null, this.responseHeaders = z || null, this.callback = K, this.abort = null, cp3(this, q);
    }
    onConnect(A, K) {
      if (this.reason) {
        A(this.reason);
        return;
      }
      Up3(this.callback), this.abort = A, this.context = K;
    }
    onHeaders() {
      throw new dp3("bad connect", null);
    }
    onUpgrade(A, K, q) {
      let {
        callback: Y,
        opaque: z,
        context: w
      } = this;
      t94(this), this.callback = null;
      let H = K;
      if (H != null) H = this.responseHeaders === "raw" ? s94.parseRawHeaders(K) : s94.parseHeaders(K);
      this.runInAsyncScope(Y, null, null, {
        statusCode: A,
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
      if (t94(this), K) this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(K, null, A, {
          opaque: q
        });
      });
    }
  }
  function AY4(A, K) {
    if (K === void 0) return new Promise((q, Y) => {
      AY4.call(this, A, (z, w) => {
        return z ? Y(z) : q(w);
      });
    });
    try {
      let q = new e94(A, K);
      this.dispatch({
        ...A,
        method: "CONNECT"
      }, q);
    } catch (q) {
      if (typeof K !== "function") throw q;
      let Y = A?.opaque;
      queueMicrotask(() => K(q, {
        opaque: Y
      }));
    }
  }
  KY4.exports = AY4;
});

// Register to shared state
__$.qY4 = qY4;
