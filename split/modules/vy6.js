// Module: vy6
// Dependencies: It, c6K, My6, D8K, T8K, R8K, h8K, tM1, g8K, Ty6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vy6 = v(s8K => {
  Object.defineProperty(s8K, "__esModule", {
    value: !0
  });
  s8K.Analytics = void 0;
  var n8K = __$.It(),
    QW2 = __$.c6K(),
    UW2 = __$.My6(),
    pW2 = __$.D8K(),
    dW2 = __$.T8K(),
    cW2 = __$.R8K(),
    lW2 = __$.h8K(),
    r8K = __$.tM1(),
    iW2 = __$.g8K(),
    o8K = __$.Ty6();
  class a8K extends lW2.NodeEmitter {
    constructor(A) {
      super();
      this._isClosed = !1, this._pendingEvents = 0, this._isFlushing = !1, (0, QW2.validateSettings)(A), this._eventFactory = new dW2.NodeEventFactory(), this._queue = new iW2.NodeEventQueue();
      let K = A.flushInterval ?? 1e4;
      this._closeAndFlushDefaultTimeout = K * 1.25;
      let {
        plugin: q,
        publisher: Y
      } = (0, pW2.createConfiguredNodePlugin)({
        writeKey: A.writeKey,
        host: A.host,
        path: A.path,
        maxRetries: A.maxRetries ?? 3,
        flushAt: A.flushAt ?? A.maxEventsInBatch ?? 15,
        httpRequestTimeout: A.httpRequestTimeout,
        disable: A.disable,
        flushInterval: K,
        httpClient: typeof A.httpClient === "function" ? new o8K.FetchHTTPClient(A.httpClient) : A.httpClient ?? new o8K.FetchHTTPClient()
      }, this);
      this._publisher = Y, this.ready = this.register(q).then(() => {
        return;
      }), this.emit("initialize", A), (0, n8K.bindAll)(this);
    }
    get VERSION() {
      return UW2.version;
    }
    closeAndFlush({
      timeout: A = this._closeAndFlushDefaultTimeout
    } = {}) {
      return this.flush({
        timeout: A,
        close: !0
      });
    }
    async flush({
      timeout: A,
      close: K = !1
    } = {}) {
      if (this._isFlushing) {
        console.warn("Overlapping flush calls detected. Please wait for the previous flush to finish before calling .flush again");
        return;
      } else this._isFlushing = !0;
      if (K) this._isClosed = !0;
      this._publisher.flush(this._pendingEvents);
      let q = new Promise(Y => {
        if (!this._pendingEvents) Y();else this.once("drained", () => {
          Y();
        });
      }).finally(() => {
        this._isFlushing = !1;
      });
      return A ? (0, n8K.pTimeout)(q, A).catch(() => {
        return;
      }) : q;
    }
    _dispatch(A, K) {
      if (this._isClosed) {
        this.emit("call_after_close", A);
        return;
      }
      this._pendingEvents++, (0, cW2.dispatchAndEmit)(A, this._queue, this, K).catch(q => q).finally(() => {
        if (this._pendingEvents--, !this._pendingEvents) this.emit("drained");
      });
    }
    alias({
      userId: A,
      previousId: K,
      context: q,
      timestamp: Y,
      integrations: z
    }, w) {
      let H = this._eventFactory.alias(A, K, {
        context: q,
        integrations: z,
        timestamp: Y
      });
      this._dispatch(H, w);
    }
    group({
      timestamp: A,
      groupId: K,
      userId: q,
      anonymousId: Y,
      traits: z = {},
      context: w,
      integrations: H
    }, J) {
      let O = this._eventFactory.group(K, z, {
        context: w,
        anonymousId: Y,
        userId: q,
        timestamp: A,
        integrations: H
      });
      this._dispatch(O, J);
    }
    identify({
      userId: A,
      anonymousId: K,
      traits: q = {},
      context: Y,
      timestamp: z,
      integrations: w
    }, H) {
      let J = this._eventFactory.identify(A, q, {
        context: Y,
        anonymousId: K,
        userId: A,
        timestamp: z,
        integrations: w
      });
      this._dispatch(J, H);
    }
    page({
      userId: A,
      anonymousId: K,
      category: q,
      name: Y,
      properties: z,
      context: w,
      timestamp: H,
      integrations: J
    }, O) {
      let X = this._eventFactory.page(q ?? null, Y ?? null, z, {
        context: w,
        anonymousId: K,
        userId: A,
        timestamp: H,
        integrations: J
      });
      this._dispatch(X, O);
    }
    screen({
      userId: A,
      anonymousId: K,
      category: q,
      name: Y,
      properties: z,
      context: w,
      timestamp: H,
      integrations: J
    }, O) {
      let X = this._eventFactory.screen(q ?? null, Y ?? null, z, {
        context: w,
        anonymousId: K,
        userId: A,
        timestamp: H,
        integrations: J
      });
      this._dispatch(X, O);
    }
    track({
      userId: A,
      anonymousId: K,
      event: q,
      properties: Y,
      context: z,
      timestamp: w,
      integrations: H
    }, J) {
      let O = this._eventFactory.track(q, Y, {
        context: z,
        userId: A,
        anonymousId: K,
        timestamp: w,
        integrations: H
      });
      this._dispatch(O, J);
    }
    register(...A) {
      return this._queue.criticalTasks.run(async () => {
        let K = r8K.Context.system(),
          q = A.map(Y => this._queue.register(K, Y, this));
        await Promise.all(q), this.emit("register", A.map(Y => Y.name));
      });
    }
    async deregister(...A) {
      let K = r8K.Context.system(),
        q = A.map(Y => {
          let z = this._queue.plugins.find(w => w.name === Y);
          if (z) return this._queue.deregister(K, z, this);else K.log("warn", `plugin ${Y} not found`);
        });
      await Promise.all(q), this.emit("deregister", A);
    }
  }
  s8K.Analytics = a8K;
});

// Register to shared state
__$.vy6 = vy6;
