// Module: R94
// Dependencies: T86, _2, j9, v86

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R94 = v((h6w, k86) => {
  var Mp3 = CA("node:assert"),
    {
      Readable: Pp3
    } = __$.T86(),
    {
      InvalidArgumentError: C0A,
      RequestAbortedError: C94
    } = __$._2(),
    DT = __$.j9(),
    {
      getResolveErrorBodyCallback: Vp3
    } = __$.v86(),
    {
      AsyncResource: fp3
    } = CA("node:async_hooks");
  class E86 extends fp3 {
    constructor(A, K) {
      if (!A || typeof A !== "object") throw new C0A("invalid opts");
      let {
        signal: q,
        method: Y,
        opaque: z,
        body: w,
        onInfo: H,
        responseHeaders: J,
        throwOnError: O,
        highWaterMark: X
      } = A;
      try {
        if (typeof K !== "function") throw new C0A("invalid callback");
        if (X && (typeof X !== "number" || X < 0)) throw new C0A("invalid highWaterMark");
        if (q && typeof q.on !== "function" && typeof q.addEventListener !== "function") throw new C0A("signal must be an EventEmitter or EventTarget");
        if (Y === "CONNECT") throw new C0A("invalid method");
        if (H && typeof H !== "function") throw new C0A("invalid onInfo callback");
        super("UNDICI_REQUEST");
      } catch ($) {
        if (DT.isStream(w)) DT.destroy(w.on("error", DT.nop), $);
        throw $;
      }
      if (this.method = Y, this.responseHeaders = J || null, this.opaque = z || null, this.callback = K, this.res = null, this.abort = null, this.body = w, this.trailers = {}, this.context = null, this.onInfo = H || null, this.throwOnError = O, this.highWaterMark = X, this.signal = q, this.reason = null, this.removeAbortListener = null, DT.isStream(w)) w.on("error", $ => {
        this.onError($);
      });
      if (this.signal) if (this.signal.aborted) this.reason = this.signal.reason ?? new C94();else this.removeAbortListener = DT.addAbortListener(this.signal, () => {
        if (this.reason = this.signal.reason ?? new C94(), this.res) DT.destroy(this.res.on("error", DT.nop), this.reason);else if (this.abort) this.abort(this.reason);
        if (this.removeAbortListener) this.res?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null;
      });
    }
    onConnect(A, K) {
      if (this.reason) {
        A(this.reason);
        return;
      }
      Mp3(this.callback), this.abort = A, this.context = K;
    }
    onHeaders(A, K, q, Y) {
      let {
          callback: z,
          opaque: w,
          abort: H,
          context: J,
          responseHeaders: O,
          highWaterMark: X
        } = this,
        $ = O === "raw" ? DT.parseRawHeaders(K) : DT.parseHeaders(K);
      if (A < 200) {
        if (this.onInfo) this.onInfo({
          statusCode: A,
          headers: $
        });
        return;
      }
      let _ = O === "raw" ? DT.parseHeaders(K) : $,
        G = _["content-type"],
        Z = _["content-length"],
        W = new Pp3({
          resume: q,
          abort: H,
          contentType: G,
          contentLength: this.method !== "HEAD" && Z ? Number(Z) : null,
          highWaterMark: X
        });
      if (this.removeAbortListener) W.on("close", this.removeAbortListener);
      if (this.callback = null, this.res = W, z !== null) if (this.throwOnError && A >= 400) this.runInAsyncScope(Vp3, null, {
        callback: z,
        body: W,
        contentType: G,
        statusCode: A,
        statusMessage: Y,
        headers: $
      });else this.runInAsyncScope(z, null, null, {
        statusCode: A,
        headers: $,
        trailers: this.trailers,
        opaque: w,
        body: W,
        context: J
      });
    }
    onData(A) {
      return this.res.push(A);
    }
    onComplete(A) {
      DT.parseHeaders(A, this.trailers), this.res.push(null);
    }
    onError(A) {
      let {
        res: K,
        callback: q,
        body: Y,
        opaque: z
      } = this;
      if (q) this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(q, null, A, {
          opaque: z
        });
      });
      if (K) this.res = null, queueMicrotask(() => {
        DT.destroy(K, A);
      });
      if (Y) this.body = null, DT.destroy(Y, A);
      if (this.removeAbortListener) K?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null;
    }
  }
  function L94(A, K) {
    if (K === void 0) return new Promise((q, Y) => {
      L94.call(this, A, (z, w) => {
        return z ? Y(z) : q(w);
      });
    });
    try {
      this.dispatch(A, new E86(A, K));
    } catch (q) {
      if (typeof K !== "function") throw q;
      let Y = A?.opaque;
      queueMicrotask(() => K(q, {
        opaque: Y
      }));
    }
  }
  k86.exports = L94;
  k86.exports.RequestHandler = E86;
});

// Register to shared state
__$.R94 = R94;
