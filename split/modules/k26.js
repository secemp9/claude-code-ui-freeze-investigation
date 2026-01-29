// Module: k26
// Dependencies: $m4, Pm4, Rm4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var k26 = v((oPw, um4) => {
  var {
      defineProperty: D21,
      getOwnPropertyDescriptor: _I9,
      getOwnPropertyNames: GI9
    } = Object,
    ZI9 = Object.prototype.hasOwnProperty,
    Yu = (A, K) => D21(A, "name", {
      value: K,
      configurable: !0
    }),
    WI9 = (A, K) => {
      for (var q in K) D21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    DI9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of GI9(K)) if (!ZI9.call(A, z) && z !== q) D21(A, z, {
          get: () => K[z],
          enumerable: !(Y = _I9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    jI9 = A => DI9(D21({}, "__esModule", {
      value: !0
    }), A),
    Im4 = {};
  WI9(Im4, {
    FetchHttpHandler: () => PI9,
    keepAliveSupport: () => W21,
    streamCollector: () => fI9
  });
  um4.exports = jI9(Im4);
  var ym4 = __$.$m4(),
    MI9 = __$.Pm4();
  function E26(A, K) {
    return new Request(A, K);
  }
  Yu(E26, "createRequest");
  function Sm4(A = 0) {
    return new Promise((K, q) => {
      if (A) setTimeout(() => {
        let Y = Error(`Request did not complete within ${A} ms`);
        Y.name = "TimeoutError", q(Y);
      }, A);
    });
  }
  Yu(Sm4, "requestTimeout");
  var W21 = {
      supported: void 0
    },
    PI9 = class A {
      static {
        Yu(this, "FetchHttpHandler");
      }
      static create(K) {
        if (typeof K?.handle === "function") return K;
        return new A(K);
      }
      constructor(K) {
        if (typeof K === "function") this.configProvider = K().then(q => q || {});else this.config = K ?? {}, this.configProvider = Promise.resolve(this.config);
        if (W21.supported === void 0) W21.supported = Boolean(typeof Request < "u" && "keepalive" in E26("https://[::1]"));
      }
      destroy() {}
      async handle(K, {
        abortSignal: q
      } = {}) {
        if (!this.config) this.config = await this.configProvider;
        let Y = this.config.requestTimeout,
          z = this.config.keepAlive === !0,
          w = this.config.credentials;
        if (q?.aborted) {
          let M = Error("Request aborted");
          return M.name = "AbortError", Promise.reject(M);
        }
        let H = K.path,
          J = (0, MI9.buildQueryString)(K.query || {});
        if (J) H += `?${J}`;
        if (K.fragment) H += `#${K.fragment}`;
        let O = "";
        if (K.username != null || K.password != null) {
          let M = K.username ?? "",
            P = K.password ?? "";
          O = `${M}:${P}@`;
        }
        let {
            port: X,
            method: $
          } = K,
          _ = `${K.protocol}//${O}${K.hostname}${X ? `:${X}` : ""}${H}`,
          G = $ === "GET" || $ === "HEAD" ? void 0 : K.body,
          Z = {
            body: G,
            headers: new Headers(K.headers),
            method: $,
            credentials: w
          };
        if (this.config?.cache) Z.cache = this.config.cache;
        if (G) Z.duplex = "half";
        if (typeof AbortController < "u") Z.signal = q;
        if (W21.supported) Z.keepalive = z;
        if (typeof this.config.requestInit === "function") Object.assign(Z, this.config.requestInit(K));
        let W = Yu(() => {}, "removeSignalEventListener"),
          D = E26(_, Z),
          j = [fetch(D).then(M => {
            let P = M.headers,
              f = {};
            for (let T of P.entries()) f[T[0]] = T[1];
            if (M.body == null) return M.blob().then(T => ({
              response: new ym4.HttpResponse({
                headers: f,
                reason: M.statusText,
                statusCode: M.status,
                body: T
              })
            }));
            return {
              response: new ym4.HttpResponse({
                headers: f,
                reason: M.statusText,
                statusCode: M.status,
                body: M.body
              })
            };
          }), Sm4(Y)];
        if (q) j.push(new Promise((M, P) => {
          let f = Yu(() => {
            let N = Error("Request aborted");
            N.name = "AbortError", P(N);
          }, "onAbort");
          if (typeof q.addEventListener === "function") {
            let N = q;
            N.addEventListener("abort", f, {
              once: !0
            }), W = Yu(() => N.removeEventListener("abort", f), "removeSignalEventListener");
          } else q.onabort = f;
        }));
        return Promise.race(j).finally(W);
      }
      updateHttpClientConfig(K, q) {
        this.config = void 0, this.configProvider = this.configProvider.then(Y => {
          return Y[K] = q, Y;
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    },
    VI9 = __$.Rm4(),
    fI9 = Yu(async A => {
      if (typeof Blob === "function" && A instanceof Blob || A.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await A.arrayBuffer());
        return hm4(A);
      }
      return bm4(A);
    }, "streamCollector");
  async function hm4(A) {
    let K = await xm4(A),
      q = (0, VI9.fromBase64)(K);
    return new Uint8Array(q);
  }
  Yu(hm4, "collectBlob");
  async function bm4(A) {
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
  Yu(bm4, "collectStream");
  function xm4(A) {
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
  Yu(xm4, "readToBase64");
});

// Register to shared state
__$.k26 = k26;
