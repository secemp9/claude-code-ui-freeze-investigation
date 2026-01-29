// Module: T86
// Dependencies: _2, j9, on

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var T86 = v((I6w, f94) => {
  var D94 = CA("node:assert"),
    {
      Readable: Jp3
    } = CA("node:stream"),
    {
      RequestAbortedError: j94,
      NotSupportedError: Op3,
      InvalidArgumentError: Xp3,
      AbortError: P86
    } = __$._2(),
    M94 = __$.j9(),
    {
      ReadableStreamFrom: $p3
    } = __$.j9(),
    WT = Symbol("kConsume"),
    hRA = Symbol("kReading"),
    un = Symbol("kBody"),
    _94 = Symbol("kAbort"),
    P94 = Symbol("kContentType"),
    G94 = Symbol("kContentLength"),
    _p3 = () => {};
  class V94 extends Jp3 {
    constructor({
      resume: A,
      abort: K,
      contentType: q = "",
      contentLength: Y,
      highWaterMark: z = 65536
    }) {
      super({
        autoDestroy: !0,
        read: A,
        highWaterMark: z
      });
      this._readableState.dataEmitted = !1, this[_94] = K, this[WT] = null, this[un] = null, this[P94] = q, this[G94] = Y, this[hRA] = !1;
    }
    destroy(A) {
      if (!A && !this._readableState.endEmitted) A = new j94();
      if (A) this[_94]();
      return super.destroy(A);
    }
    _destroy(A, K) {
      if (!this[hRA]) setImmediate(() => {
        K(A);
      });else K(A);
    }
    on(A, ...K) {
      if (A === "data" || A === "readable") this[hRA] = !0;
      return super.on(A, ...K);
    }
    addListener(A, ...K) {
      return this.on(A, ...K);
    }
    off(A, ...K) {
      let q = super.off(A, ...K);
      if (A === "data" || A === "readable") this[hRA] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0;
      return q;
    }
    removeListener(A, ...K) {
      return this.off(A, ...K);
    }
    push(A) {
      if (this[WT] && A !== null) return f86(this[WT], A), this[hRA] ? super.push(A) : !0;
      return super.push(A);
    }
    async text() {
      return bRA(this, "text");
    }
    async json() {
      return bRA(this, "json");
    }
    async blob() {
      return bRA(this, "blob");
    }
    async bytes() {
      return bRA(this, "bytes");
    }
    async arrayBuffer() {
      return bRA(this, "arrayBuffer");
    }
    async formData() {
      throw new Op3();
    }
    get bodyUsed() {
      return M94.isDisturbed(this);
    }
    get body() {
      if (!this[un]) {
        if (this[un] = $p3(this), this[WT]) this[un].getReader(), D94(this[un].locked);
      }
      return this[un];
    }
    async dump(A) {
      let K = Number.isFinite(A?.limit) ? A.limit : 131072,
        q = A?.signal;
      if (q != null && (typeof q !== "object" || !("aborted" in q))) throw new Xp3("signal must be an AbortSignal");
      if (q?.throwIfAborted(), this._readableState.closeEmitted) return null;
      return await new Promise((Y, z) => {
        if (this[G94] > K) this.destroy(new P86());
        let w = () => {
          this.destroy(q.reason ?? new P86());
        };
        q?.addEventListener("abort", w), this.on("close", function () {
          if (q?.removeEventListener("abort", w), q?.aborted) z(q.reason ?? new P86());else Y(null);
        }).on("error", _p3).on("data", function (H) {
          if (K -= H.length, K <= 0) this.destroy();
        }).resume();
      });
    }
  }
  function Gp3(A) {
    return A[un] && A[un].locked === !0 || A[WT];
  }
  function Zp3(A) {
    return M94.isDisturbed(A) || Gp3(A);
  }
  async function bRA(A, K) {
    return D94(!A[WT]), new Promise((q, Y) => {
      if (Zp3(A)) {
        let z = A._readableState;
        if (z.destroyed && z.closeEmitted === !1) A.on("error", w => {
          Y(w);
        }).on("close", () => {
          Y(TypeError("unusable"));
        });else Y(z.errored ?? TypeError("unusable"));
      } else queueMicrotask(() => {
        A[WT] = {
          type: K,
          stream: A,
          resolve: q,
          reject: Y,
          length: 0,
          body: []
        }, A.on("error", function (z) {
          N86(this[WT], z);
        }).on("close", function () {
          if (this[WT].body !== null) N86(this[WT], new j94());
        }), Wp3(A[WT]);
      });
    });
  }
  function Wp3(A) {
    if (A.body === null) return;
    let {
      _readableState: K
    } = A.stream;
    if (K.bufferIndex) {
      let q = K.bufferIndex,
        Y = K.buffer.length;
      for (let z = q; z < Y; z++) f86(A, K.buffer[z]);
    } else for (let q of K.buffer) f86(A, q);
    if (K.endEmitted) W94(this[WT]);else A.stream.on("end", function () {
      W94(this[WT]);
    });
    A.stream.resume();
    while (A.stream.read() != null);
  }
  function V86(A, K) {
    if (A.length === 0 || K === 0) return "";
    let q = A.length === 1 ? A[0] : Buffer.concat(A, K),
      Y = q.length,
      z = Y > 2 && q[0] === 239 && q[1] === 187 && q[2] === 191 ? 3 : 0;
    return q.utf8Slice(z, Y);
  }
  function Z94(A, K) {
    if (A.length === 0 || K === 0) return new Uint8Array(0);
    if (A.length === 1) return new Uint8Array(A[0]);
    let q = new Uint8Array(Buffer.allocUnsafeSlow(K).buffer),
      Y = 0;
    for (let z = 0; z < A.length; ++z) {
      let w = A[z];
      q.set(w, Y), Y += w.length;
    }
    return q;
  }
  function W94(A) {
    let {
      type: K,
      body: q,
      resolve: Y,
      stream: z,
      length: w
    } = A;
    try {
      if (K === "text") Y(V86(q, w));else if (K === "json") Y(JSON.parse(V86(q, w)));else if (K === "arrayBuffer") Y(Z94(q, w).buffer);else if (K === "blob") Y(new Blob(q, {
        type: z[P94]
      }));else if (K === "bytes") Y(Z94(q, w));
      N86(A);
    } catch (H) {
      z.destroy(H);
    }
  }
  function f86(A, K) {
    A.length += K.length, A.body.push(K);
  }
  function N86(A, K) {
    if (A.body === null) return;
    if (K) A.reject(K);else A.resolve();
    A.type = null, A.stream = null, A.resolve = null, A.reject = null, A.length = 0, A.body = null;
  }
  f94.exports = {
    Readable: V94,
    chunksDecode: V86
  };
});

// Register to shared state
__$.T86 = T86;
