// Module: wRA
// Dependencies: j9, _2, V66

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wRA = v((A6w, zq4) => {
  var RB3 = CA("node:net"),
    Aq4 = CA("node:assert"),
    Yq4 = __$.j9(),
    {
      InvalidArgumentError: yB3,
      ConnectTimeoutError: IB3
    } = __$._2(),
    p71 = __$.V66();
  function Kq4() {}
  var f66, N66;
  if (global.FinalizationRegistry && !(process.env.NODE_V8_COVERAGE || process.env.UNDICI_NO_FG)) N66 = class {
    constructor(K) {
      this._maxCachedSessions = K, this._sessionCache = new Map(), this._sessionRegistry = new global.FinalizationRegistry(q => {
        if (this._sessionCache.size < this._maxCachedSessions) return;
        let Y = this._sessionCache.get(q);
        if (Y !== void 0 && Y.deref() === void 0) this._sessionCache.delete(q);
      });
    }
    get(K) {
      let q = this._sessionCache.get(K);
      return q ? q.deref() : null;
    }
    set(K, q) {
      if (this._maxCachedSessions === 0) return;
      this._sessionCache.set(K, new WeakRef(q)), this._sessionRegistry.register(q, K);
    }
  };else N66 = class {
    constructor(K) {
      this._maxCachedSessions = K, this._sessionCache = new Map();
    }
    get(K) {
      return this._sessionCache.get(K);
    }
    set(K, q) {
      if (this._maxCachedSessions === 0) return;
      if (this._sessionCache.size >= this._maxCachedSessions) {
        let {
          value: Y
        } = this._sessionCache.keys().next();
        this._sessionCache.delete(Y);
      }
      this._sessionCache.set(K, q);
    }
  };
  function SB3({
    allowH2: A,
    maxCachedSessions: K,
    socketPath: q,
    timeout: Y,
    session: z,
    ...w
  }) {
    if (K != null && (!Number.isInteger(K) || K < 0)) throw new yB3("maxCachedSessions must be a positive integer or zero");
    let H = {
        path: q,
        ...w
      },
      J = new N66(K == null ? 100 : K);
    return Y = Y == null ? 1e4 : Y, A = A != null ? A : !1, function ({
      hostname: X,
      host: $,
      protocol: _,
      port: G,
      servername: Z,
      localAddress: W,
      httpSocket: D
    }, j) {
      let M;
      if (_ === "https:") {
        if (!f66) f66 = CA("node:tls");
        Z = Z || H.servername || Yq4.getServerName($) || null;
        let f = Z || X;
        Aq4(f);
        let N = z || J.get(f) || null;
        G = G || 443, M = f66.connect({
          highWaterMark: 16384,
          ...H,
          servername: Z,
          session: N,
          localAddress: W,
          ALPNProtocols: A ? ["http/1.1", "h2"] : ["http/1.1"],
          socket: D,
          port: G,
          host: X
        }), M.on("session", function (T) {
          J.set(f, T);
        });
      } else Aq4(!D, "httpSocket can only be sent on TLS update"), G = G || 80, M = RB3.connect({
        highWaterMark: 65536,
        ...H,
        localAddress: W,
        port: G,
        host: X
      });
      if (H.keepAlive == null || H.keepAlive) {
        let f = H.keepAliveInitialDelay === void 0 ? 60000 : H.keepAliveInitialDelay;
        M.setKeepAlive(!0, f);
      }
      let P = hB3(new WeakRef(M), {
        timeout: Y,
        hostname: X,
        port: G
      });
      return M.setNoDelay(!0).once(_ === "https:" ? "secureConnect" : "connect", function () {
        if (queueMicrotask(P), j) {
          let f = j;
          j = null, f(null, this);
        }
      }).on("error", function (f) {
        if (queueMicrotask(P), j) {
          let N = j;
          j = null, N(f);
        }
      }), M;
    };
  }
  var hB3 = process.platform === "win32" ? (A, K) => {
    if (!K.timeout) return Kq4;
    let q = null,
      Y = null,
      z = p71.setFastTimeout(() => {
        q = setImmediate(() => {
          Y = setImmediate(() => qq4(A.deref(), K));
        });
      }, K.timeout);
    return () => {
      p71.clearFastTimeout(z), clearImmediate(q), clearImmediate(Y);
    };
  } : (A, K) => {
    if (!K.timeout) return Kq4;
    let q = null,
      Y = p71.setFastTimeout(() => {
        q = setImmediate(() => {
          qq4(A.deref(), K);
        });
      }, K.timeout);
    return () => {
      p71.clearFastTimeout(Y), clearImmediate(q);
    };
  };
  function qq4(A, K) {
    if (A == null) return;
    let q = "Connect Timeout Error";
    if (Array.isArray(A.autoSelectFamilyAttemptedAddresses)) q += ` (attempted addresses: ${A.autoSelectFamilyAttemptedAddresses.join(", ")},`;else q += ` (attempted address: ${K.hostname}:${K.port},`;
    q += ` timeout: ${K.timeout}ms)`, Yq4.destroy(A, new IB3(q));
  }
  zq4.exports = SB3;
});

// Register to shared state
__$.wRA = wRA;
