// Module: Rz4
// Dependencies: tK1, kz4, j9, SZ, QRA, u0A, kn, pRA, ZT

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rz4 = v(($8w, Lz4) => {
  var {
      kConstruct: Ji3
    } = __$.tK1(),
    {
      urlEquals: Oi3,
      getFieldValues: G46
    } = __$.kz4(),
    {
      kEnumerableProperty: n8A,
      isDisturbed: Xi3
    } = __$.j9(),
    {
      webidl: dK
    } = __$.SZ(),
    {
      Response: $i3,
      cloneResponse: _i3,
      fromInnerResponse: Gi3
    } = __$.QRA(),
    {
      Request: VQ,
      fromInnerRequest: Zi3
    } = __$.u0A(),
    {
      kState: fy
    } = __$.kn(),
    {
      fetching: Wi3
    } = __$.pRA(),
    {
      urlIsHttpHttpsScheme: eK1,
      createDeferredPromise: g0A,
      readAllBytes: Di3
    } = __$.ZT(),
    Z46 = CA("node:assert");
  class Nx {
    #A;
    constructor() {
      if (arguments[0] !== Ji3) dK.illegalConstructor();
      dK.util.markAsUncloneable(this), this.#A = arguments[1];
    }
    async match(A, K = {}) {
      dK.brandCheck(this, Nx);
      let q = "Cache.match";
      dK.argumentLengthCheck(arguments, 1, q), A = dK.converters.RequestInfo(A, q, "request"), K = dK.converters.CacheQueryOptions(K, q, "options");
      let Y = this.#Y(A, K, 1);
      if (Y.length === 0) return;
      return Y[0];
    }
    async matchAll(A = void 0, K = {}) {
      dK.brandCheck(this, Nx);
      let q = "Cache.matchAll";
      if (A !== void 0) A = dK.converters.RequestInfo(A, q, "request");
      return K = dK.converters.CacheQueryOptions(K, q, "options"), this.#Y(A, K);
    }
    async add(A) {
      dK.brandCheck(this, Nx);
      let K = "Cache.add";
      dK.argumentLengthCheck(arguments, 1, K), A = dK.converters.RequestInfo(A, K, "request");
      let q = [A];
      return await this.addAll(q);
    }
    async addAll(A) {
      dK.brandCheck(this, Nx);
      let K = "Cache.addAll";
      dK.argumentLengthCheck(arguments, 1, K);
      let q = [],
        Y = [];
      for (let _ of A) {
        if (_ === void 0) throw dK.errors.conversionFailed({
          prefix: K,
          argument: "Argument 1",
          types: ["undefined is not allowed"]
        });
        if (_ = dK.converters.RequestInfo(_), typeof _ === "string") continue;
        let G = _[fy];
        if (!eK1(G.url) || G.method !== "GET") throw dK.errors.exception({
          header: K,
          message: "Expected http/s scheme when method is not GET."
        });
      }
      let z = [];
      for (let _ of A) {
        let G = new VQ(_)[fy];
        if (!eK1(G.url)) throw dK.errors.exception({
          header: K,
          message: "Expected http/s scheme."
        });
        G.initiator = "fetch", G.destination = "subresource", Y.push(G);
        let Z = g0A();
        z.push(Wi3({
          request: G,
          processResponse(W) {
            if (W.type === "error" || W.status === 206 || W.status < 200 || W.status > 299) Z.reject(dK.errors.exception({
              header: "Cache.addAll",
              message: "Received an invalid status code or the request failed."
            }));else if (W.headersList.contains("vary")) {
              let D = G46(W.headersList.get("vary"));
              for (let j of D) if (j === "*") {
                Z.reject(dK.errors.exception({
                  header: "Cache.addAll",
                  message: "invalid vary field value"
                }));
                for (let M of z) M.abort();
                return;
              }
            }
          },
          processResponseEndOfBody(W) {
            if (W.aborted) {
              Z.reject(new DOMException("aborted", "AbortError"));
              return;
            }
            Z.resolve(W);
          }
        })), q.push(Z.promise);
      }
      let H = await Promise.all(q),
        J = [],
        O = 0;
      for (let _ of H) {
        let G = {
          type: "put",
          request: Y[O],
          response: _
        };
        J.push(G), O++;
      }
      let X = g0A(),
        $ = null;
      try {
        this.#K(J);
      } catch (_) {
        $ = _;
      }
      return queueMicrotask(() => {
        if ($ === null) X.resolve(void 0);else X.reject($);
      }), X.promise;
    }
    async put(A, K) {
      dK.brandCheck(this, Nx);
      let q = "Cache.put";
      dK.argumentLengthCheck(arguments, 2, q), A = dK.converters.RequestInfo(A, q, "request"), K = dK.converters.Response(K, q, "response");
      let Y = null;
      if (A instanceof VQ) Y = A[fy];else Y = new VQ(A)[fy];
      if (!eK1(Y.url) || Y.method !== "GET") throw dK.errors.exception({
        header: q,
        message: "Expected an http/s scheme when method is not GET"
      });
      let z = K[fy];
      if (z.status === 206) throw dK.errors.exception({
        header: q,
        message: "Got 206 status"
      });
      if (z.headersList.contains("vary")) {
        let G = G46(z.headersList.get("vary"));
        for (let Z of G) if (Z === "*") throw dK.errors.exception({
          header: q,
          message: "Got * vary field value"
        });
      }
      if (z.body && (Xi3(z.body.stream) || z.body.stream.locked)) throw dK.errors.exception({
        header: q,
        message: "Response body is locked or disturbed"
      });
      let w = _i3(z),
        H = g0A();
      if (z.body != null) {
        let Z = z.body.stream.getReader();
        Di3(Z).then(H.resolve, H.reject);
      } else H.resolve(void 0);
      let J = [],
        O = {
          type: "put",
          request: Y,
          response: w
        };
      J.push(O);
      let X = await H.promise;
      if (w.body != null) w.body.source = X;
      let $ = g0A(),
        _ = null;
      try {
        this.#K(J);
      } catch (G) {
        _ = G;
      }
      return queueMicrotask(() => {
        if (_ === null) $.resolve();else $.reject(_);
      }), $.promise;
    }
    async delete(A, K = {}) {
      dK.brandCheck(this, Nx);
      let q = "Cache.delete";
      dK.argumentLengthCheck(arguments, 1, q), A = dK.converters.RequestInfo(A, q, "request"), K = dK.converters.CacheQueryOptions(K, q, "options");
      let Y = null;
      if (A instanceof VQ) {
        if (Y = A[fy], Y.method !== "GET" && !K.ignoreMethod) return !1;
      } else Z46(typeof A === "string"), Y = new VQ(A)[fy];
      let z = [],
        w = {
          type: "delete",
          request: Y,
          options: K
        };
      z.push(w);
      let H = g0A(),
        J = null,
        O;
      try {
        O = this.#K(z);
      } catch (X) {
        J = X;
      }
      return queueMicrotask(() => {
        if (J === null) H.resolve(!!O?.length);else H.reject(J);
      }), H.promise;
    }
    async keys(A = void 0, K = {}) {
      dK.brandCheck(this, Nx);
      let q = "Cache.keys";
      if (A !== void 0) A = dK.converters.RequestInfo(A, q, "request");
      K = dK.converters.CacheQueryOptions(K, q, "options");
      let Y = null;
      if (A !== void 0) {
        if (A instanceof VQ) {
          if (Y = A[fy], Y.method !== "GET" && !K.ignoreMethod) return [];
        } else if (typeof A === "string") Y = new VQ(A)[fy];
      }
      let z = g0A(),
        w = [];
      if (A === void 0) for (let H of this.#A) w.push(H[0]);else {
        let H = this.#q(Y, K);
        for (let J of H) w.push(J[0]);
      }
      return queueMicrotask(() => {
        let H = [];
        for (let J of w) {
          let O = Zi3(J, new AbortController().signal, "immutable");
          H.push(O);
        }
        z.resolve(Object.freeze(H));
      }), z.promise;
    }
    #K(A) {
      let K = this.#A,
        q = [...K],
        Y = [],
        z = [];
      try {
        for (let w of A) {
          if (w.type !== "delete" && w.type !== "put") throw dK.errors.exception({
            header: "Cache.#batchCacheOperations",
            message: 'operation type does not match "delete" or "put"'
          });
          if (w.type === "delete" && w.response != null) throw dK.errors.exception({
            header: "Cache.#batchCacheOperations",
            message: "delete operation should not have an associated response"
          });
          if (this.#q(w.request, w.options, Y).length) throw new DOMException("???", "InvalidStateError");
          let H;
          if (w.type === "delete") {
            if (H = this.#q(w.request, w.options), H.length === 0) return [];
            for (let J of H) {
              let O = K.indexOf(J);
              Z46(O !== -1), K.splice(O, 1);
            }
          } else if (w.type === "put") {
            if (w.response == null) throw dK.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "put operation should have an associated response"
            });
            let J = w.request;
            if (!eK1(J.url)) throw dK.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "expected http or https scheme"
            });
            if (J.method !== "GET") throw dK.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "not get method"
            });
            if (w.options != null) throw dK.errors.exception({
              header: "Cache.#batchCacheOperations",
              message: "options must not be defined"
            });
            H = this.#q(w.request);
            for (let O of H) {
              let X = K.indexOf(O);
              Z46(X !== -1), K.splice(X, 1);
            }
            K.push([w.request, w.response]), Y.push([w.request, w.response]);
          }
          z.push([w.request, w.response]);
        }
        return z;
      } catch (w) {
        throw this.#A.length = 0, this.#A = q, w;
      }
    }
    #q(A, K, q) {
      let Y = [],
        z = q ?? this.#A;
      for (let w of z) {
        let [H, J] = w;
        if (this.#z(A, H, J, K)) Y.push(w);
      }
      return Y;
    }
    #z(A, K, q = null, Y) {
      let z = new URL(A.url),
        w = new URL(K.url);
      if (Y?.ignoreSearch) w.search = "", z.search = "";
      if (!Oi3(z, w, !0)) return !1;
      if (q == null || Y?.ignoreVary || !q.headersList.contains("vary")) return !0;
      let H = G46(q.headersList.get("vary"));
      for (let J of H) {
        if (J === "*") return !1;
        let O = K.headersList.get(J),
          X = A.headersList.get(J);
        if (O !== X) return !1;
      }
      return !0;
    }
    #Y(A, K, q = 1 / 0) {
      let Y = null;
      if (A !== void 0) {
        if (A instanceof VQ) {
          if (Y = A[fy], Y.method !== "GET" && !K.ignoreMethod) return [];
        } else if (typeof A === "string") Y = new VQ(A)[fy];
      }
      let z = [];
      if (A === void 0) for (let H of this.#A) z.push(H[1]);else {
        let H = this.#q(Y, K);
        for (let J of H) z.push(J[1]);
      }
      let w = [];
      for (let H of z) {
        let J = Gi3(H, "immutable");
        if (w.push(J.clone()), w.length >= q) break;
      }
      return Object.freeze(w);
    }
  }
  Object.defineProperties(Nx.prototype, {
    [Symbol.toStringTag]: {
      value: "Cache",
      configurable: !0
    },
    match: n8A,
    matchAll: n8A,
    add: n8A,
    addAll: n8A,
    put: n8A,
    delete: n8A,
    keys: n8A
  });
  var Cz4 = [{
    key: "ignoreSearch",
    converter: dK.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "ignoreMethod",
    converter: dK.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "ignoreVary",
    converter: dK.converters.boolean,
    defaultValue: () => !1
  }];
  dK.converters.CacheQueryOptions = dK.dictionaryConverter(Cz4);
  dK.converters.MultiCacheQueryOptions = dK.dictionaryConverter([...Cz4, {
    key: "cacheName",
    converter: dK.converters.DOMString
  }]);
  dK.converters.Response = dK.interfaceConverter($i3);
  dK.converters["sequence<RequestInfo>"] = dK.sequenceConverter(dK.converters.RequestInfo);
  Lz4.exports = {
    Cache: Nx
  };
});

// Register to shared state
__$.Rz4 = Rz4;
