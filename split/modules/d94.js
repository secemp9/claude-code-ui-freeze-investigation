// Module: d94
// Dependencies: _2, j9, xRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var d94 = v((u6w, p94) => {
  var {
      Readable: g94,
      Duplex: Sp3,
      PassThrough: hp3
    } = CA("node:stream"),
    {
      InvalidArgumentError: uRA,
      InvalidReturnValueError: bp3,
      RequestAbortedError: C86
    } = __$._2(),
    vk = __$.j9(),
    {
      AsyncResource: xp3
    } = CA("node:async_hooks"),
    {
      addSignal: up3,
      removeSignal: Bp3
    } = __$.xRA(),
    m94 = CA("node:assert"),
    y0A = Symbol("resume");
  class F94 extends g94 {
    constructor() {
      super({
        autoDestroy: !0
      });
      this[y0A] = null;
    }
    _read() {
      let {
        [y0A]: A
      } = this;
      if (A) this[y0A] = null, A();
    }
    _destroy(A, K) {
      this._read(), K(A);
    }
  }
  class Q94 extends g94 {
    constructor(A) {
      super({
        autoDestroy: !0
      });
      this[y0A] = A;
    }
    _read() {
      this[y0A]();
    }
    _destroy(A, K) {
      if (!A && !this._readableState.endEmitted) A = new C86();
      K(A);
    }
  }
  class U94 extends xp3 {
    constructor(A, K) {
      if (!A || typeof A !== "object") throw new uRA("invalid opts");
      if (typeof K !== "function") throw new uRA("invalid handler");
      let {
        signal: q,
        method: Y,
        opaque: z,
        onInfo: w,
        responseHeaders: H
      } = A;
      if (q && typeof q.on !== "function" && typeof q.addEventListener !== "function") throw new uRA("signal must be an EventEmitter or EventTarget");
      if (Y === "CONNECT") throw new uRA("invalid method");
      if (w && typeof w !== "function") throw new uRA("invalid onInfo callback");
      super("UNDICI_PIPELINE");
      this.opaque = z || null, this.responseHeaders = H || null, this.handler = K, this.abort = null, this.context = null, this.onInfo = w || null, this.req = new F94().on("error", vk.nop), this.ret = new Sp3({
        readableObjectMode: A.objectMode,
        autoDestroy: !0,
        read: () => {
          let {
            body: J
          } = this;
          if (J?.resume) J.resume();
        },
        write: (J, O, X) => {
          let {
            req: $
          } = this;
          if ($.push(J, O) || $._readableState.destroyed) X();else $[y0A] = X;
        },
        destroy: (J, O) => {
          let {
            body: X,
            req: $,
            res: _,
            ret: G,
            abort: Z
          } = this;
          if (!J && !G._readableState.endEmitted) J = new C86();
          if (Z && J) Z();
          vk.destroy(X, J), vk.destroy($, J), vk.destroy(_, J), Bp3(this), O(J);
        }
      }).on("prefinish", () => {
        let {
          req: J
        } = this;
        J.push(null);
      }), this.res = null, up3(this, q);
    }
    onConnect(A, K) {
      let {
        ret: q,
        res: Y
      } = this;
      if (this.reason) {
        A(this.reason);
        return;
      }
      m94(!Y, "pipeline cannot be retried"), m94(!q.destroyed), this.abort = A, this.context = K;
    }
    onHeaders(A, K, q) {
      let {
        opaque: Y,
        handler: z,
        context: w
      } = this;
      if (A < 200) {
        if (this.onInfo) {
          let J = this.responseHeaders === "raw" ? vk.parseRawHeaders(K) : vk.parseHeaders(K);
          this.onInfo({
            statusCode: A,
            headers: J
          });
        }
        return;
      }
      this.res = new Q94(q);
      let H;
      try {
        this.handler = null;
        let J = this.responseHeaders === "raw" ? vk.parseRawHeaders(K) : vk.parseHeaders(K);
        H = this.runInAsyncScope(z, null, {
          statusCode: A,
          headers: J,
          opaque: Y,
          body: this.res,
          context: w
        });
      } catch (J) {
        throw this.res.on("error", vk.nop), J;
      }
      if (!H || typeof H.on !== "function") throw new bp3("expected Readable");
      H.on("data", J => {
        let {
          ret: O,
          body: X
        } = this;
        if (!O.push(J) && X.pause) X.pause();
      }).on("error", J => {
        let {
          ret: O
        } = this;
        vk.destroy(O, J);
      }).on("end", () => {
        let {
          ret: J
        } = this;
        J.push(null);
      }).on("close", () => {
        let {
          ret: J
        } = this;
        if (!J._readableState.ended) vk.destroy(J, new C86());
      }), this.body = H;
    }
    onData(A) {
      let {
        res: K
      } = this;
      return K.push(A);
    }
    onComplete(A) {
      let {
        res: K
      } = this;
      K.push(null);
    }
    onError(A) {
      let {
        ret: K
      } = this;
      this.handler = null, vk.destroy(K, A);
    }
  }
  function mp3(A, K) {
    try {
      let q = new U94(A, K);
      return this.dispatch({
        ...A,
        body: q.req
      }, q), q.ret;
    } catch (q) {
      return new hp3().destroy(q);
    }
  }
  p94.exports = mp3;
});

// Register to shared state
__$.d94 = d94;
