// Module: TK1
// Dependencies: MJ, _2, j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var TK1 = v((R6w, J94) => {
  var k0A = CA("node:assert"),
    {
      kRetryHandlerDefaultRetry: z94
    } = __$.MJ(),
    {
      RequestRetryError: SRA
    } = __$._2(),
    {
      isDisturbed: w94,
      parseHeaders: qp3,
      parseRangeHeader: H94,
      wrapRequestBody: Yp3
    } = __$.j9();
  function zp3(A) {
    let K = Date.now();
    return new Date(A).getTime() - K;
  }
  class M86 {
    constructor(A, K) {
      let {
          retryOptions: q,
          ...Y
        } = A,
        {
          retry: z,
          maxRetries: w,
          maxTimeout: H,
          minTimeout: J,
          timeoutFactor: O,
          methods: X,
          errorCodes: $,
          retryAfter: _,
          statusCodes: G
        } = q ?? {};
      this.dispatch = K.dispatch, this.handler = K.handler, this.opts = {
        ...Y,
        body: Yp3(A.body)
      }, this.abort = null, this.aborted = !1, this.retryOpts = {
        retry: z ?? M86[z94],
        retryAfter: _ ?? !0,
        maxTimeout: H ?? 30000,
        minTimeout: J ?? 500,
        timeoutFactor: O ?? 2,
        maxRetries: w ?? 5,
        methods: X ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"],
        statusCodes: G ?? [500, 502, 503, 504, 429],
        errorCodes: $ ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE", "UND_ERR_SOCKET"]
      }, this.retryCount = 0, this.retryCountCheckpoint = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect(Z => {
        if (this.aborted = !0, this.abort) this.abort(Z);else this.reason = Z;
      });
    }
    onRequestSent() {
      if (this.handler.onRequestSent) this.handler.onRequestSent();
    }
    onUpgrade(A, K, q) {
      if (this.handler.onUpgrade) this.handler.onUpgrade(A, K, q);
    }
    onConnect(A) {
      if (this.aborted) A(this.reason);else this.abort = A;
    }
    onBodySent(A) {
      if (this.handler.onBodySent) return this.handler.onBodySent(A);
    }
    static [z94](A, {
      state: K,
      opts: q
    }, Y) {
      let {
          statusCode: z,
          code: w,
          headers: H
        } = A,
        {
          method: J,
          retryOptions: O
        } = q,
        {
          maxRetries: X,
          minTimeout: $,
          maxTimeout: _,
          timeoutFactor: G,
          statusCodes: Z,
          errorCodes: W,
          methods: D
        } = O,
        {
          counter: j
        } = K;
      if (w && w !== "UND_ERR_REQ_RETRY" && !W.includes(w)) {
        Y(A);
        return;
      }
      if (Array.isArray(D) && !D.includes(J)) {
        Y(A);
        return;
      }
      if (z != null && Array.isArray(Z) && !Z.includes(z)) {
        Y(A);
        return;
      }
      if (j > X) {
        Y(A);
        return;
      }
      let M = H?.["retry-after"];
      if (M) M = Number(M), M = Number.isNaN(M) ? zp3(M) : M * 1000;
      let P = M > 0 ? Math.min(M, _) : Math.min($ * G ** (j - 1), _);
      setTimeout(() => Y(null), P);
    }
    onHeaders(A, K, q, Y) {
      let z = qp3(K);
      if (this.retryCount += 1, A >= 300) if (this.retryOpts.statusCodes.includes(A) === !1) return this.handler.onHeaders(A, K, q, Y);else return this.abort(new SRA("Request failed", A, {
        headers: z,
        data: {
          count: this.retryCount
        }
      })), !1;
      if (this.resume != null) {
        if (this.resume = null, A !== 206 && (this.start > 0 || A !== 200)) return this.abort(new SRA("server does not support the range header and the payload was partially consumed", A, {
          headers: z,
          data: {
            count: this.retryCount
          }
        })), !1;
        let H = H94(z["content-range"]);
        if (!H) return this.abort(new SRA("Content-Range mismatch", A, {
          headers: z,
          data: {
            count: this.retryCount
          }
        })), !1;
        if (this.etag != null && this.etag !== z.etag) return this.abort(new SRA("ETag mismatch", A, {
          headers: z,
          data: {
            count: this.retryCount
          }
        })), !1;
        let {
          start: J,
          size: O,
          end: X = O - 1
        } = H;
        return k0A(this.start === J, "content-range mismatch"), k0A(this.end == null || this.end === X, "content-range mismatch"), this.resume = q, !0;
      }
      if (this.end == null) {
        if (A === 206) {
          let H = H94(z["content-range"]);
          if (H == null) return this.handler.onHeaders(A, K, q, Y);
          let {
            start: J,
            size: O,
            end: X = O - 1
          } = H;
          k0A(J != null && Number.isFinite(J), "content-range mismatch"), k0A(X != null && Number.isFinite(X), "invalid content-length"), this.start = J, this.end = X;
        }
        if (this.end == null) {
          let H = z["content-length"];
          this.end = H != null ? Number(H) - 1 : null;
        }
        if (k0A(Number.isFinite(this.start)), k0A(this.end == null || Number.isFinite(this.end), "invalid content-length"), this.resume = q, this.etag = z.etag != null ? z.etag : null, this.etag != null && this.etag.startsWith("W/")) this.etag = null;
        return this.handler.onHeaders(A, K, q, Y);
      }
      let w = new SRA("Request failed", A, {
        headers: z,
        data: {
          count: this.retryCount
        }
      });
      return this.abort(w), !1;
    }
    onData(A) {
      return this.start += A.length, this.handler.onData(A);
    }
    onComplete(A) {
      return this.retryCount = 0, this.handler.onComplete(A);
    }
    onError(A) {
      if (this.aborted || w94(this.opts.body)) return this.handler.onError(A);
      if (this.retryCount - this.retryCountCheckpoint > 0) this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint);else this.retryCount += 1;
      this.retryOpts.retry(A, {
        state: {
          counter: this.retryCount
        },
        opts: {
          retryOptions: this.retryOpts,
          ...this.opts
        }
      }, K.bind(this));
      function K(q) {
        if (q != null || this.aborted || w94(this.opts.body)) return this.handler.onError(q);
        if (this.start !== 0) {
          let Y = {
            range: `bytes=${this.start}-${this.end ?? ""}`
          };
          if (this.etag != null) Y["if-match"] = this.etag;
          this.opts = {
            ...this.opts,
            headers: {
              ...this.opts.headers,
              ...Y
            }
          };
        }
        try {
          this.retryCountCheckpoint = this.retryCount, this.dispatch(this.opts, this);
        } catch (Y) {
          this.handler.onError(Y);
        }
      }
    }
  }
  J94.exports = M86;
});

// Register to shared state
__$.TK1 = TK1;
