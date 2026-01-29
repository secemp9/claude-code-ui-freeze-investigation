// Module: X8K
// Dependencies: It, o6K, sjA, K8K, z8K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X8K = v(J8K => {
  Object.defineProperty(J8K, "__esModule", {
    value: !0
  });
  J8K.Publisher = void 0;
  var JW2 = __$.It(),
    OW2 = __$.o6K(),
    XW2 = __$.sjA(),
    $W2 = __$.K8K(),
    _W2 = __$.z8K();
  function GW2(A) {
    return new Promise(K => setTimeout(K, A));
  }
  function _QA() {}
  class H8K {
    constructor({
      host: A,
      path: K,
      maxRetries: q,
      flushAt: Y,
      flushInterval: z,
      writeKey: w,
      httpRequestTimeout: H,
      httpClient: J,
      disable: O
    }, X) {
      this._emitter = X, this._maxRetries = q, this._flushAt = Math.max(Y, 1), this._flushInterval = z, this._auth = (0, _W2.b64encode)(`${w}:`), this._url = (0, OW2.tryCreateFormattedUrl)(A ?? "https://api.segment.io", K ?? "/v1/batch"), this._httpRequestTimeout = H ?? 1e4, this._disable = Boolean(O), this._httpClient = J;
    }
    createBatch() {
      this.pendingFlushTimeout && clearTimeout(this.pendingFlushTimeout);
      let A = new $W2.ContextBatch(this._flushAt);
      return this._batch = A, this.pendingFlushTimeout = setTimeout(() => {
        if (A === this._batch) this._batch = void 0;
        if (this.pendingFlushTimeout = void 0, A.length) this.send(A).catch(_QA);
      }, this._flushInterval), A;
    }
    clearBatch() {
      this.pendingFlushTimeout && clearTimeout(this.pendingFlushTimeout), this._batch = void 0;
    }
    flush(A) {
      if (!A) return;
      if (this._flushPendingItemsCount = A, !this._batch) return;
      if (this._batch.length === A) this.send(this._batch).catch(_QA), this.clearBatch();
    }
    enqueue(A) {
      let K = this._batch ?? this.createBatch(),
        {
          promise: q,
          resolve: Y
        } = (0, XW2.createDeferred)(),
        z = {
          context: A,
          resolver: Y
        };
      if (K.tryAdd(z).success) {
        let O = K.length === this._flushPendingItemsCount;
        if (K.length === this._flushAt || O) this.send(K).catch(_QA), this.clearBatch();
        return q;
      }
      if (K.length) this.send(K).catch(_QA), this.clearBatch();
      let H = this.createBatch(),
        J = H.tryAdd(z);
      if (J.success) {
        if (H.length === this._flushPendingItemsCount) this.send(H).catch(_QA), this.clearBatch();
        return q;
      } else return A.setFailedDelivery({
        reason: Error(J.message)
      }), Promise.resolve(A);
    }
    async send(A) {
      if (this._flushPendingItemsCount) this._flushPendingItemsCount -= A.length;
      let K = A.getEvents(),
        q = this._maxRetries + 1,
        Y = 0;
      while (Y < q) {
        Y++;
        let z;
        try {
          if (this._disable) return A.resolveEvents();
          let w = {
            url: this._url,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${this._auth}`,
              "User-Agent": "analytics-node-next/latest"
            },
            data: {
              batch: K,
              sentAt: new Date()
            },
            httpRequestTimeout: this._httpRequestTimeout
          };
          this._emitter.emit("http_request", {
            body: w.data,
            method: w.method,
            url: w.url,
            headers: w.headers
          });
          let H = await this._httpClient.makeRequest(w);
          if (H.status >= 200 && H.status < 300) {
            A.resolveEvents();
            return;
          } else if (H.status === 400) {
            w8K(A, Error(`[${H.status}] ${H.statusText}`));
            return;
          } else z = Error(`[${H.status}] ${H.statusText}`);
        } catch (w) {
          z = w;
        }
        if (Y === q) {
          w8K(A, z);
          return;
        }
        await GW2((0, JW2.backoff)({
          attempt: Y,
          minTimeout: 25,
          maxTimeout: 1000
        }));
      }
    }
  }
  J8K.Publisher = H8K;
  function w8K(A, K) {
    A.getContexts().forEach(q => q.setFailedDelivery({
      reason: K
    })), A.resolveEvents();
  }
});

// Register to shared state
__$.X8K = X8K;
