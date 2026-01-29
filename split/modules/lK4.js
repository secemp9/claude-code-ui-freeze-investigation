// Module: lK4
// Dependencies: _2, j9, Y0A, u71

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lK4 = v((a1w, cK4) => {
  var {
      InvalidArgumentError: OO,
      NotSupportedError: _B3
    } = __$._2(),
    XQ = CA("node:assert"),
    {
      isValidHTTPToken: pK4,
      isValidHeaderValue: QK4,
      isStream: GB3,
      destroy: ZB3,
      isBuffer: WB3,
      isFormDataLike: DB3,
      isIterable: jB3,
      isBlobLike: MB3,
      buildURL: PB3,
      validateHandler: VB3,
      getServerName: fB3,
      normalizedMethodRecords: NB3
    } = __$.j9(),
    {
      channels: Ox
    } = __$.Y0A(),
    {
      headerNameLowerCasedRecord: UK4
    } = __$.u71(),
    TB3 = /[^\u0021-\u00ff]/,
    Pk = Symbol("handler");
  class dK4 {
    constructor(A, {
      path: K,
      method: q,
      body: Y,
      headers: z,
      query: w,
      idempotent: H,
      blocking: J,
      upgrade: O,
      headersTimeout: X,
      bodyTimeout: $,
      reset: _,
      throwOnError: G,
      expectContinue: Z,
      servername: W
    }, D) {
      if (typeof K !== "string") throw new OO("path must be a string");else if (K[0] !== "/" && !(K.startsWith("http://") || K.startsWith("https://")) && q !== "CONNECT") throw new OO("path must be an absolute URL or start with a slash");else if (TB3.test(K)) throw new OO("invalid request path");
      if (typeof q !== "string") throw new OO("method must be a string");else if (NB3[q] === void 0 && !pK4(q)) throw new OO("invalid request method");
      if (O && typeof O !== "string") throw new OO("upgrade must be a string");
      if (X != null && (!Number.isFinite(X) || X < 0)) throw new OO("invalid headersTimeout");
      if ($ != null && (!Number.isFinite($) || $ < 0)) throw new OO("invalid bodyTimeout");
      if (_ != null && typeof _ !== "boolean") throw new OO("invalid reset");
      if (Z != null && typeof Z !== "boolean") throw new OO("invalid expectContinue");
      if (this.headersTimeout = X, this.bodyTimeout = $, this.throwOnError = G === !0, this.method = q, this.abort = null, Y == null) this.body = null;else if (GB3(Y)) {
        this.body = Y;
        let j = this.body._readableState;
        if (!j || !j.autoDestroy) this.endHandler = function () {
          ZB3(this);
        }, this.body.on("end", this.endHandler);
        this.errorHandler = M => {
          if (this.abort) this.abort(M);else this.error = M;
        }, this.body.on("error", this.errorHandler);
      } else if (WB3(Y)) this.body = Y.byteLength ? Y : null;else if (ArrayBuffer.isView(Y)) this.body = Y.buffer.byteLength ? Buffer.from(Y.buffer, Y.byteOffset, Y.byteLength) : null;else if (Y instanceof ArrayBuffer) this.body = Y.byteLength ? Buffer.from(Y) : null;else if (typeof Y === "string") this.body = Y.length ? Buffer.from(Y) : null;else if (DB3(Y) || jB3(Y) || MB3(Y)) this.body = Y;else throw new OO("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
      if (this.completed = !1, this.aborted = !1, this.upgrade = O || null, this.path = w ? PB3(K, w) : K, this.origin = A, this.idempotent = H == null ? q === "HEAD" || q === "GET" : H, this.blocking = J == null ? !1 : J, this.reset = _ == null ? null : _, this.host = null, this.contentLength = null, this.contentType = null, this.headers = [], this.expectContinue = Z != null ? Z : !1, Array.isArray(z)) {
        if (z.length % 2 !== 0) throw new OO("headers array must be even");
        for (let j = 0; j < z.length; j += 2) Q71(this, z[j], z[j + 1]);
      } else if (z && typeof z === "object") {
        if (z[Symbol.iterator]) for (let j of z) {
          if (!Array.isArray(j) || j.length !== 2) throw new OO("headers must be in key-value pair format");
          Q71(this, j[0], j[1]);
        } else {
          let j = Object.keys(z);
          for (let M = 0; M < j.length; ++M) Q71(this, j[M], z[j[M]]);
        }
      } else if (z != null) throw new OO("headers must be an object or an array");
      if (VB3(D, q, O), this.servername = W || fB3(this.host), this[Pk] = D, Ox.create.hasSubscribers) Ox.create.publish({
        request: this
      });
    }
    onBodySent(A) {
      if (this[Pk].onBodySent) try {
        return this[Pk].onBodySent(A);
      } catch (K) {
        this.abort(K);
      }
    }
    onRequestSent() {
      if (Ox.bodySent.hasSubscribers) Ox.bodySent.publish({
        request: this
      });
      if (this[Pk].onRequestSent) try {
        return this[Pk].onRequestSent();
      } catch (A) {
        this.abort(A);
      }
    }
    onConnect(A) {
      if (XQ(!this.aborted), XQ(!this.completed), this.error) A(this.error);else return this.abort = A, this[Pk].onConnect(A);
    }
    onResponseStarted() {
      return this[Pk].onResponseStarted?.();
    }
    onHeaders(A, K, q, Y) {
      if (XQ(!this.aborted), XQ(!this.completed), Ox.headers.hasSubscribers) Ox.headers.publish({
        request: this,
        response: {
          statusCode: A,
          headers: K,
          statusText: Y
        }
      });
      try {
        return this[Pk].onHeaders(A, K, q, Y);
      } catch (z) {
        this.abort(z);
      }
    }
    onData(A) {
      XQ(!this.aborted), XQ(!this.completed);
      try {
        return this[Pk].onData(A);
      } catch (K) {
        return this.abort(K), !1;
      }
    }
    onUpgrade(A, K, q) {
      return XQ(!this.aborted), XQ(!this.completed), this[Pk].onUpgrade(A, K, q);
    }
    onComplete(A) {
      if (this.onFinally(), XQ(!this.aborted), this.completed = !0, Ox.trailers.hasSubscribers) Ox.trailers.publish({
        request: this,
        trailers: A
      });
      try {
        return this[Pk].onComplete(A);
      } catch (K) {
        this.onError(K);
      }
    }
    onError(A) {
      if (this.onFinally(), Ox.error.hasSubscribers) Ox.error.publish({
        request: this,
        error: A
      });
      if (this.aborted) return;
      return this.aborted = !0, this[Pk].onError(A);
    }
    onFinally() {
      if (this.errorHandler) this.body.off("error", this.errorHandler), this.errorHandler = null;
      if (this.endHandler) this.body.off("end", this.endHandler), this.endHandler = null;
    }
    addHeader(A, K) {
      return Q71(this, A, K), this;
    }
  }
  function Q71(A, K, q) {
    if (q && typeof q === "object" && !Array.isArray(q)) throw new OO(`invalid ${K} header`);else if (q === void 0) return;
    let Y = UK4[K];
    if (Y === void 0) {
      if (Y = K.toLowerCase(), UK4[Y] === void 0 && !pK4(Y)) throw new OO("invalid header key");
    }
    if (Array.isArray(q)) {
      let z = [];
      for (let w = 0; w < q.length; w++) if (typeof q[w] === "string") {
        if (!QK4(q[w])) throw new OO(`invalid ${K} header`);
        z.push(q[w]);
      } else if (q[w] === null) z.push("");else if (typeof q[w] === "object") throw new OO(`invalid ${K} header`);else z.push(`${q[w]}`);
      q = z;
    } else if (typeof q === "string") {
      if (!QK4(q)) throw new OO(`invalid ${K} header`);
    } else if (q === null) q = "";else q = `${q}`;
    if (A.host === null && Y === "host") {
      if (typeof q !== "string") throw new OO("invalid host header");
      A.host = q;
    } else if (A.contentLength === null && Y === "content-length") {
      if (A.contentLength = parseInt(q, 10), !Number.isFinite(A.contentLength)) throw new OO("invalid content-length header");
    } else if (A.contentType === null && Y === "content-type") A.contentType = q, A.headers.push(K, q);else if (Y === "transfer-encoding" || Y === "keep-alive" || Y === "upgrade") throw new OO(`invalid ${Y} header`);else if (Y === "connection") {
      let z = typeof q === "string" ? q.toLowerCase() : null;
      if (z !== "close" && z !== "keep-alive") throw new OO("invalid connection header");
      if (z === "close") A.reset = !0;
    } else if (Y === "expect") throw new _B3("expect header not supported");else A.headers.push(K, q);
  }
  cK4.exports = dK4;
});

// Register to shared state
__$.lK4 = lK4;
