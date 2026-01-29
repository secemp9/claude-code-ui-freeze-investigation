// Module: GK1
// Dependencies: j9, MJ, _2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GK1 = v((M6w, t54) => {
  var jx = __$.j9(),
    {
      kBodyUsed: MRA
    } = __$.MJ(),
    e66 = CA("node:assert"),
    {
      InvalidArgumentError: XQ3
    } = __$._2(),
    $Q3 = CA("node:events"),
    _Q3 = [300, 301, 302, 303, 307, 308],
    o54 = Symbol("body");
  class t66 {
    constructor(A) {
      this[o54] = A, this[MRA] = !1;
    }
    async *[Symbol.asyncIterator]() {
      e66(!this[MRA], "disturbed"), this[MRA] = !0, yield* this[o54];
    }
  }
  class s54 {
    constructor(A, K, q, Y) {
      if (K != null && (!Number.isInteger(K) || K < 0)) throw new XQ3("maxRedirections must be a positive number");
      if (jx.validateHandler(Y, q.method, q.upgrade), this.dispatch = A, this.location = null, this.abort = null, this.opts = {
        ...q,
        maxRedirections: 0
      }, this.maxRedirections = K, this.handler = Y, this.history = [], this.redirectionLimitReached = !1, jx.isStream(this.opts.body)) {
        if (jx.bodyLength(this.opts.body) === 0) this.opts.body.on("data", function () {
          e66(!1);
        });
        if (typeof this.opts.body.readableDidRead !== "boolean") this.opts.body[MRA] = !1, $Q3.prototype.on.call(this.opts.body, "data", function () {
          this[MRA] = !0;
        });
      } else if (this.opts.body && typeof this.opts.body.pipeTo === "function") this.opts.body = new t66(this.opts.body);else if (this.opts.body && typeof this.opts.body !== "string" && !ArrayBuffer.isView(this.opts.body) && jx.isIterable(this.opts.body)) this.opts.body = new t66(this.opts.body);
    }
    onConnect(A) {
      this.abort = A, this.handler.onConnect(A, {
        history: this.history
      });
    }
    onUpgrade(A, K, q) {
      this.handler.onUpgrade(A, K, q);
    }
    onError(A) {
      this.handler.onError(A);
    }
    onHeaders(A, K, q, Y) {
      if (this.location = this.history.length >= this.maxRedirections || jx.isDisturbed(this.opts.body) ? null : GQ3(A, K), this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections) {
        if (this.request) this.request.abort(Error("max redirects"));
        this.redirectionLimitReached = !0, this.abort(Error("max redirects"));
        return;
      }
      if (this.opts.origin) this.history.push(new URL(this.opts.path, this.opts.origin));
      if (!this.location) return this.handler.onHeaders(A, K, q, Y);
      let {
          origin: z,
          pathname: w,
          search: H
        } = jx.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))),
        J = H ? `${w}${H}` : w;
      if (this.opts.headers = ZQ3(this.opts.headers, A === 303, this.opts.origin !== z), this.opts.path = J, this.opts.origin = z, this.opts.maxRedirections = 0, this.opts.query = null, A === 303 && this.opts.method !== "HEAD") this.opts.method = "GET", this.opts.body = null;
    }
    onData(A) {
      if (this.location) ;else return this.handler.onData(A);
    }
    onComplete(A) {
      if (this.location) this.location = null, this.abort = null, this.dispatch(this.opts, this);else this.handler.onComplete(A);
    }
    onBodySent(A) {
      if (this.handler.onBodySent) this.handler.onBodySent(A);
    }
  }
  function GQ3(A, K) {
    if (_Q3.indexOf(A) === -1) return null;
    for (let q = 0; q < K.length; q += 2) if (K[q].length === 8 && jx.headerNameToString(K[q]) === "location") return K[q + 1];
  }
  function a54(A, K, q) {
    if (A.length === 4) return jx.headerNameToString(A) === "host";
    if (K && jx.headerNameToString(A).startsWith("content-")) return !0;
    if (q && (A.length === 13 || A.length === 6 || A.length === 19)) {
      let Y = jx.headerNameToString(A);
      return Y === "authorization" || Y === "cookie" || Y === "proxy-authorization";
    }
    return !1;
  }
  function ZQ3(A, K, q) {
    let Y = [];
    if (Array.isArray(A)) {
      for (let z = 0; z < A.length; z += 2) if (!a54(A[z], K, q)) Y.push(A[z], A[z + 1]);
    } else if (A && typeof A === "object") {
      for (let z of Object.keys(A)) if (!a54(z, K, q)) Y.push(z, A[z]);
    } else e66(A == null, "headers must be an object or an array");
    return Y;
  }
  t54.exports = s54;
});

// Register to shared state
__$.GK1 = GK1;
