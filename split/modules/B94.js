// Module: B94
// Dependencies: _2, j9, v86, xRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var B94 = v((x6w, u94) => {
  var Ep3 = CA("node:assert"),
    {
      finished: kp3,
      PassThrough: Cp3
    } = CA("node:stream"),
    {
      InvalidArgumentError: R0A,
      InvalidReturnValueError: Lp3
    } = __$._2(),
    Vy = __$.j9(),
    {
      getResolveErrorBodyCallback: Rp3
    } = __$.v86(),
    {
      AsyncResource: yp3
    } = CA("node:async_hooks"),
    {
      addSignal: Ip3,
      removeSignal: h94
    } = __$.xRA();
  class b94 extends yp3 {
    constructor(A, K, q) {
      if (!A || typeof A !== "object") throw new R0A("invalid opts");
      let {
        signal: Y,
        method: z,
        opaque: w,
        body: H,
        onInfo: J,
        responseHeaders: O,
        throwOnError: X
      } = A;
      try {
        if (typeof q !== "function") throw new R0A("invalid callback");
        if (typeof K !== "function") throw new R0A("invalid factory");
        if (Y && typeof Y.on !== "function" && typeof Y.addEventListener !== "function") throw new R0A("signal must be an EventEmitter or EventTarget");
        if (z === "CONNECT") throw new R0A("invalid method");
        if (J && typeof J !== "function") throw new R0A("invalid onInfo callback");
        super("UNDICI_STREAM");
      } catch ($) {
        if (Vy.isStream(H)) Vy.destroy(H.on("error", Vy.nop), $);
        throw $;
      }
      if (this.responseHeaders = O || null, this.opaque = w || null, this.factory = K, this.callback = q, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = H, this.onInfo = J || null, this.throwOnError = X || !1, Vy.isStream(H)) H.on("error", $ => {
        this.onError($);
      });
      Ip3(this, Y);
    }
    onConnect(A, K) {
      if (this.reason) {
        A(this.reason);
        return;
      }
      Ep3(this.callback), this.abort = A, this.context = K;
    }
    onHeaders(A, K, q, Y) {
      let {
          factory: z,
          opaque: w,
          context: H,
          callback: J,
          responseHeaders: O
        } = this,
        X = O === "raw" ? Vy.parseRawHeaders(K) : Vy.parseHeaders(K);
      if (A < 200) {
        if (this.onInfo) this.onInfo({
          statusCode: A,
          headers: X
        });
        return;
      }
      this.factory = null;
      let $;
      if (this.throwOnError && A >= 400) {
        let Z = (O === "raw" ? Vy.parseHeaders(K) : X)["content-type"];
        $ = new Cp3(), this.callback = null, this.runInAsyncScope(Rp3, null, {
          callback: J,
          body: $,
          contentType: Z,
          statusCode: A,
          statusMessage: Y,
          headers: X
        });
      } else {
        if (z === null) return;
        if ($ = this.runInAsyncScope(z, null, {
          statusCode: A,
          headers: X,
          opaque: w,
          context: H
        }), !$ || typeof $.write !== "function" || typeof $.end !== "function" || typeof $.on !== "function") throw new Lp3("expected Writable");
        kp3($, {
          readable: !1
        }, G => {
          let {
            callback: Z,
            res: W,
            opaque: D,
            trailers: j,
            abort: M
          } = this;
          if (this.res = null, G || !W.readable) Vy.destroy(W, G);
          if (this.callback = null, this.runInAsyncScope(Z, null, G || null, {
            opaque: D,
            trailers: j
          }), G) M();
        });
      }
      return $.on("drain", q), this.res = $, ($.writableNeedDrain !== void 0 ? $.writableNeedDrain : $._writableState?.needDrain) !== !0;
    }
    onData(A) {
      let {
        res: K
      } = this;
      return K ? K.write(A) : !0;
    }
    onComplete(A) {
      let {
        res: K
      } = this;
      if (h94(this), !K) return;
      this.trailers = Vy.parseHeaders(A), K.end();
    }
    onError(A) {
      let {
        res: K,
        callback: q,
        opaque: Y,
        body: z
      } = this;
      if (h94(this), this.factory = null, K) this.res = null, Vy.destroy(K, A);else if (q) this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(q, null, A, {
          opaque: Y
        });
      });
      if (z) this.body = null, Vy.destroy(z, A);
    }
  }
  function x94(A, K, q) {
    if (q === void 0) return new Promise((Y, z) => {
      x94.call(this, A, K, (w, H) => {
        return w ? z(w) : Y(H);
      });
    });
    try {
      this.dispatch(A, new b94(A, K, q));
    } catch (Y) {
      if (typeof q !== "function") throw Y;
      let z = A?.opaque;
      queueMicrotask(() => q(Y, {
        opaque: z
      }));
    }
  }
  u94.exports = x94;
});

// Register to shared state
__$.B94 = B94;
