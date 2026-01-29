// Module: y64
// Dependencies: SA6, j64, C64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var y64 = v(af3 => {
  var L64 = __$.SA6(),
    df3 = __$.j64(),
    cf3 = __$.C64();
  function R64(A, K) {
    return new Request(A, K);
  }
  function lf3(A = 0) {
    return new Promise((K, q) => {
      if (A) setTimeout(() => {
        let Y = Error(`Request did not complete within ${A} ms`);
        Y.name = "TimeoutError", q(Y);
      }, A);
    });
  }
  var e41 = {
    supported: void 0
  };
  class gA6 {
    config;
    configProvider;
    static create(A) {
      if (typeof A?.handle === "function") return A;
      return new gA6(A);
    }
    constructor(A) {
      if (typeof A === "function") this.configProvider = A().then(K => K || {});else this.config = A ?? {}, this.configProvider = Promise.resolve(this.config);
      if (e41.supported === void 0) e41.supported = Boolean(typeof Request < "u" && "keepalive" in R64("https://[::1]"));
    }
    destroy() {}
    async handle(A, {
      abortSignal: K,
      requestTimeout: q
    } = {}) {
      if (!this.config) this.config = await this.configProvider;
      let Y = q ?? this.config.requestTimeout,
        z = this.config.keepAlive === !0,
        w = this.config.credentials;
      if (K?.aborted) {
        let M = Error("Request aborted");
        return M.name = "AbortError", Promise.reject(M);
      }
      let H = A.path,
        J = df3.buildQueryString(A.query || {});
      if (J) H += `?${J}`;
      if (A.fragment) H += `#${A.fragment}`;
      let O = "";
      if (A.username != null || A.password != null) {
        let M = A.username ?? "",
          P = A.password ?? "";
        O = `${M}:${P}@`;
      }
      let {
          port: X,
          method: $
        } = A,
        _ = `${A.protocol}//${O}${A.hostname}${X ? `:${X}` : ""}${H}`,
        G = $ === "GET" || $ === "HEAD" ? void 0 : A.body,
        Z = {
          body: G,
          headers: new Headers(A.headers),
          method: $,
          credentials: w
        };
      if (this.config?.cache) Z.cache = this.config.cache;
      if (G) Z.duplex = "half";
      if (typeof AbortController < "u") Z.signal = K;
      if (e41.supported) Z.keepalive = z;
      if (typeof this.config.requestInit === "function") Object.assign(Z, this.config.requestInit(A));
      let W = () => {},
        D = R64(_, Z),
        j = [fetch(D).then(M => {
          let P = M.headers,
            f = {};
          for (let T of P.entries()) f[T[0]] = T[1];
          if (M.body == null) return M.blob().then(T => ({
            response: new L64.HttpResponse({
              headers: f,
              reason: M.statusText,
              statusCode: M.status,
              body: T
            })
          }));
          return {
            response: new L64.HttpResponse({
              headers: f,
              reason: M.statusText,
              statusCode: M.status,
              body: M.body
            })
          };
        }), lf3(Y)];
      if (K) j.push(new Promise((M, P) => {
        let f = () => {
          let N = Error("Request aborted");
          N.name = "AbortError", P(N);
        };
        if (typeof K.addEventListener === "function") {
          let N = K;
          N.addEventListener("abort", f, {
            once: !0
          }), W = () => N.removeEventListener("abort", f);
        } else K.onabort = f;
      }));
      return Promise.race(j).finally(W);
    }
    updateHttpClientConfig(A, K) {
      this.config = void 0, this.configProvider = this.configProvider.then(q => {
        return q[A] = K, q;
      });
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  var if3 = async A => {
    if (typeof Blob === "function" && A instanceof Blob || A.constructor?.name === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await A.arrayBuffer());
      return nf3(A);
    }
    return rf3(A);
  };
  async function nf3(A) {
    let K = await of3(A),
      q = cf3.fromBase64(K);
    return new Uint8Array(q);
  }
  async function rf3(A) {
    let K = [],
      q = A.getReader(),
      Y = !1,
      z = 0;
    while (!Y) {
      let {
        done: J,
        value: O
      } = await q.read();
      if (O) K.push(O), z += O.length;
      Y = J;
    }
    let w = new Uint8Array(z),
      H = 0;
    for (let J of K) w.set(J, H), H += J.length;
    return w;
  }
  function of3(A) {
    return new Promise((K, q) => {
      let Y = new FileReader();
      Y.onloadend = () => {
        if (Y.readyState !== 2) return q(Error("Reader aborted too early"));
        let z = Y.result ?? "",
          w = z.indexOf(","),
          H = w > -1 ? w + 1 : z.length;
        K(z.substring(H));
      }, Y.onabort = () => q(Error("Read aborted")), Y.onerror = () => q(Y.error), Y.readAsDataURL(A);
    });
  }
  af3.FetchHttpHandler = gA6;
  af3.keepAliveSupport = e41;
  af3.streamCollector = if3;
});

// Register to shared state
__$.y64 = y64;
