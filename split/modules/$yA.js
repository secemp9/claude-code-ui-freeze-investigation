// Module: $yA
// Dependencies: e0A, xH4, n46, Cq1, bH4, uH4, r4w, XyA, Ty, V
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $yA = k(() => {
  __$.e0A = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date, __$.xH4 = new Set(), __$.n46 = typeof process === "object" && !!process ? process : {}, __$.Cq1 = globalThis.AbortController, __$.bH4 = globalThis.AbortSignal;
  if (typeof __$.Cq1 > "u") {
    __$.bH4 = class {
      onabort;
      _onabort = [];
      reason;
      aborted = !1;
      addEventListener(Y, z) {
        this._onabort.push(z);
      }
    }, __$.Cq1 = class {
      constructor() {
        K();
      }
      signal = new __$.bH4();
      abort(Y) {
        if (this.signal.aborted) return;
        this.signal.reason = Y, this.signal.aborted = !0;
        for (let z of this.signal._onabort) z(Y);
        this.signal.onabort?.(Y);
      }
    };
    let A = __$.n46.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
      K = () => {
        if (!A) return;
        A = !1, __$.uH4("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", K);
      };
  }
  __$.r4w = Symbol("type");
  __$.XyA = class XyA extends Array {
    constructor(A) {
      super(A);
      this.fill(0);
    }
  };
  __$.Ty = class Ty {
    #A;
    #K;
    #q;
    #z;
    #Y;
    #J;
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #w;
    #X;
    #$;
    #O;
    #H;
    #G;
    #D;
    #j;
    #Z;
    #f;
    #W;
    #N;
    #V;
    #P;
    #T;
    #E;
    #M;
    static unsafeExposeInternals(A) {
      return {
        starts: A.#V,
        ttls: A.#P,
        sizes: A.#N,
        keyMap: A.#$,
        keyList: A.#O,
        valList: A.#H,
        next: A.#G,
        prev: A.#D,
        get head() {
          return A.#j;
        },
        get tail() {
          return A.#Z;
        },
        free: A.#f,
        isBackgroundFetch: K => A.#_(K),
        backgroundFetch: (K, q, Y, z) => A.#x(K, q, Y, z),
        moveToTail: K => A.#S(K),
        indexes: K => A.#k(K),
        rindexes: K => A.#C(K),
        isStale: K => A.#v(K)
      };
    }
    get max() {
      return this.#A;
    }
    get maxSize() {
      return this.#K;
    }
    get calculatedSize() {
      return this.#X;
    }
    get size() {
      return this.#w;
    }
    get fetchMethod() {
      return this.#Y;
    }
    get memoMethod() {
      return this.#J;
    }
    get dispose() {
      return this.#q;
    }
    get disposeAfter() {
      return this.#z;
    }
    constructor(A) {
      let {
        max: K = 0,
        ttl: q,
        ttlResolution: Y = 1,
        ttlAutopurge: z,
        updateAgeOnGet: w,
        updateAgeOnHas: H,
        allowStale: J,
        dispose: O,
        disposeAfter: X,
        noDisposeOnSet: $,
        noUpdateTTL: _,
        maxSize: G = 0,
        maxEntrySize: Z = 0,
        sizeCalculation: W,
        fetchMethod: D,
        memoMethod: j,
        noDeleteOnFetchRejection: M,
        noDeleteOnStaleGet: P,
        allowStaleOnFetchRejection: f,
        allowStaleOnFetchAbort: N,
        ignoreFetchAbort: T
      } = A;
      if (K !== 0 && !__$.rn(K)) throw TypeError("max option must be a nonnegative integer");
      let C = K ? __$.BH4(K) : Array;
      if (!C) throw Error("invalid max value: " + K);
      if (this.#A = K, this.#K = G, this.maxEntrySize = Z || this.#K, this.sizeCalculation = W, this.sizeCalculation) {
        if (!this.#K && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation !== "function") throw TypeError("sizeCalculation set to non-function");
      }
      if (j !== void 0 && typeof j !== "function") throw TypeError("memoMethod must be a function if defined");
      if (this.#J = j, D !== void 0 && typeof D !== "function") throw TypeError("fetchMethod must be a function if specified");
      if (this.#Y = D, this.#E = !!D, this.#$ = new Map(), this.#O = Array(K).fill(void 0), this.#H = Array(K).fill(void 0), this.#G = new C(K), this.#D = new C(K), this.#j = 0, this.#Z = 0, this.#f = __$.AXA.create(K), this.#w = 0, this.#X = 0, typeof O === "function") this.#q = O;
      if (typeof X === "function") this.#z = X, this.#W = [];else this.#z = void 0, this.#W = void 0;
      if (this.#T = !!this.#q, this.#M = !!this.#z, this.noDisposeOnSet = !!$, this.noUpdateTTL = !!_, this.noDeleteOnFetchRejection = !!M, this.allowStaleOnFetchRejection = !!f, this.allowStaleOnFetchAbort = !!N, this.ignoreFetchAbort = !!T, this.maxEntrySize !== 0) {
        if (this.#K !== 0) {
          if (!__$.rn(this.#K)) throw TypeError("maxSize must be a positive integer if specified");
        }
        if (!__$.rn(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
        this.#U();
      }
      if (this.allowStale = !!J, this.noDeleteOnStaleGet = !!P, this.updateAgeOnGet = !!w, this.updateAgeOnHas = !!H, this.ttlResolution = __$.rn(Y) || Y === 0 ? Y : 1, this.ttlAutopurge = !!z, this.ttl = q || 0, this.ttl) {
        if (!__$.rn(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
        this.#u();
      }
      if (this.#A === 0 && this.ttl === 0 && this.#K === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.#A && !this.#K) {
        if (__$.qa3("LRU_CACHE_UNBOUNDED")) __$.xH4.add("LRU_CACHE_UNBOUNDED"), __$.uH4("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", __$.Ty);
      }
    }
    getRemainingTTL(A) {
      return this.#$.has(A) ? 1 / 0 : 0;
    }
    #u() {
      let A = new __$.XyA(this.#A),
        K = new __$.XyA(this.#A);
      this.#P = A, this.#V = K, this.#B = (z, w, H = __$.e0A.now()) => {
        if (K[z] = w !== 0 ? H : 0, A[z] = w, w !== 0 && this.ttlAutopurge) {
          let J = setTimeout(() => {
            if (this.#v(z)) this.#L(this.#O[z], "expire");
          }, w + 1);
          if (J.unref) J.unref();
        }
      }, this.#y = z => {
        K[z] = A[z] !== 0 ? __$.e0A.now() : 0;
      }, this.#R = (z, w) => {
        if (A[w]) {
          let H = A[w],
            J = K[w];
          if (!H || !J) return;
          z.ttl = H, z.start = J, z.now = q || Y();
          let O = z.now - J;
          z.remainingTTL = H - O;
        }
      };
      let q = 0,
        Y = () => {
          let z = __$.e0A.now();
          if (this.ttlResolution > 0) {
            q = z;
            let w = setTimeout(() => q = 0, this.ttlResolution);
            if (w.unref) w.unref();
          }
          return z;
        };
      this.getRemainingTTL = z => {
        let w = this.#$.get(z);
        if (w === void 0) return 0;
        let H = A[w],
          J = K[w];
        if (!H || !J) return 1 / 0;
        let O = (q || Y()) - J;
        return H - O;
      }, this.#v = z => {
        let w = K[z],
          H = A[z];
        return !!H && !!w && (q || Y()) - w > H;
      };
    }
    #y = () => {};
    #R = () => {};
    #B = () => {};
    #v = () => !1;
    #U() {
      let A = new __$.XyA(this.#A);
      this.#X = 0, this.#N = A, this.#I = K => {
        this.#X -= A[K], A[K] = 0;
      }, this.#m = (K, q, Y, z) => {
        if (this.#_(q)) return 0;
        if (!__$.rn(Y)) if (z) {
          if (typeof z !== "function") throw TypeError("sizeCalculation must be a function");
          if (Y = z(q, K), !__$.rn(Y)) throw TypeError("sizeCalculation return invalid (expect positive integer)");
        } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return Y;
      }, this.#h = (K, q, Y) => {
        if (A[K] = q, this.#K) {
          let z = this.#K - A[K];
          while (this.#X > z) this.#b(!0);
        }
        if (this.#X += A[K], Y) Y.entrySize = q, Y.totalCalculatedSize = this.#X;
      };
    }
    #I = A => {};
    #h = (A, K, q) => {};
    #m = (A, K, q, Y) => {
      if (q || Y) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    };
    *#k({
      allowStale: A = this.allowStale
    } = {}) {
      if (this.#w) for (let K = this.#Z;;) {
        if (!this.#g(K)) break;
        if (A || !this.#v(K)) yield K;
        if (K === this.#j) break;else K = this.#D[K];
      }
    }
    *#C({
      allowStale: A = this.allowStale
    } = {}) {
      if (this.#w) for (let K = this.#j;;) {
        if (!this.#g(K)) break;
        if (A || !this.#v(K)) yield K;
        if (K === this.#Z) break;else K = this.#G[K];
      }
    }
    #g(A) {
      return A !== void 0 && this.#$.get(this.#O[A]) === A;
    }
    *entries() {
      for (let A of this.#k()) if (this.#H[A] !== void 0 && this.#O[A] !== void 0 && !this.#_(this.#H[A])) yield [this.#O[A], this.#H[A]];
    }
    *rentries() {
      for (let A of this.#C()) if (this.#H[A] !== void 0 && this.#O[A] !== void 0 && !this.#_(this.#H[A])) yield [this.#O[A], this.#H[A]];
    }
    *keys() {
      for (let A of this.#k()) {
        let K = this.#O[A];
        if (K !== void 0 && !this.#_(this.#H[A])) yield K;
      }
    }
    *rkeys() {
      for (let A of this.#C()) {
        let K = this.#O[A];
        if (K !== void 0 && !this.#_(this.#H[A])) yield K;
      }
    }
    *values() {
      for (let A of this.#k()) if (this.#H[A] !== void 0 && !this.#_(this.#H[A])) yield this.#H[A];
    }
    *rvalues() {
      for (let A of this.#C()) if (this.#H[A] !== void 0 && !this.#_(this.#H[A])) yield this.#H[A];
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(A, K = {}) {
      for (let q of this.#k()) {
        let Y = this.#H[q],
          z = this.#_(Y) ? Y.__staleWhileFetching : Y;
        if (z === void 0) continue;
        if (A(z, this.#O[q], this)) return this.get(this.#O[q], K);
      }
    }
    forEach(A, K = this) {
      for (let q of this.#k()) {
        let Y = this.#H[q],
          z = this.#_(Y) ? Y.__staleWhileFetching : Y;
        if (z === void 0) continue;
        A.call(K, z, this.#O[q], this);
      }
    }
    rforEach(A, K = this) {
      for (let q of this.#C()) {
        let Y = this.#H[q],
          z = this.#_(Y) ? Y.__staleWhileFetching : Y;
        if (z === void 0) continue;
        A.call(K, z, this.#O[q], this);
      }
    }
    purgeStale() {
      let A = !1;
      for (let K of this.#C({
        allowStale: !0
      })) if (this.#v(K)) this.#L(this.#O[K], "expire"), A = !0;
      return A;
    }
    info(A) {
      let K = this.#$.get(A);
      if (K === void 0) return;
      let q = this.#H[K],
        Y = this.#_(q) ? q.__staleWhileFetching : q;
      if (Y === void 0) return;
      let z = {
        value: Y
      };
      if (this.#P && this.#V) {
        let w = this.#P[K],
          H = this.#V[K];
        if (w && H) {
          let J = w - (__$.e0A.now() - H);
          z.ttl = J, z.start = Date.now();
        }
      }
      if (this.#N) z.size = this.#N[K];
      return z;
    }
    dump() {
      let A = [];
      for (let K of this.#k({
        allowStale: !0
      })) {
        let q = this.#O[K],
          Y = this.#H[K],
          z = this.#_(Y) ? Y.__staleWhileFetching : Y;
        if (z === void 0 || q === void 0) continue;
        let w = {
          value: z
        };
        if (this.#P && this.#V) {
          w.ttl = this.#P[K];
          let H = __$.e0A.now() - this.#V[K];
          w.start = Math.floor(Date.now() - H);
        }
        if (this.#N) w.size = this.#N[K];
        A.unshift([q, w]);
      }
      return A;
    }
    load(A) {
      this.clear();
      for (let [K, q] of A) {
        if (q.start) {
          let Y = Date.now() - q.start;
          q.start = __$.e0A.now() - Y;
        }
        this.set(K, q.value, q);
      }
    }
    set(A, K, q = {}) {
      if (K === void 0) return this.delete(A), this;
      let {
          ttl: Y = this.ttl,
          start: z,
          noDisposeOnSet: w = this.noDisposeOnSet,
          sizeCalculation: H = this.sizeCalculation,
          status: J
        } = q,
        {
          noUpdateTTL: O = this.noUpdateTTL
        } = q,
        X = this.#m(A, K, q.size || 0, H);
      if (this.maxEntrySize && X > this.maxEntrySize) {
        if (J) J.set = "miss", J.maxEntrySizeExceeded = !0;
        return this.#L(A, "set"), this;
      }
      let $ = this.#w === 0 ? void 0 : this.#$.get(A);
      if ($ === void 0) {
        if ($ = this.#w === 0 ? this.#Z : this.#f.length !== 0 ? this.#f.pop() : this.#w === this.#A ? this.#b(!1) : this.#w, this.#O[$] = A, this.#H[$] = K, this.#$.set(A, $), this.#G[this.#Z] = $, this.#D[$] = this.#Z, this.#Z = $, this.#w++, this.#h($, X, J), J) J.set = "add";
        O = !1;
      } else {
        this.#S($);
        let _ = this.#H[$];
        if (K !== _) {
          if (this.#E && this.#_(_)) {
            _.__abortController.abort(Error("replaced"));
            let {
              __staleWhileFetching: G
            } = _;
            if (G !== void 0 && !w) {
              if (this.#T) this.#q?.(G, A, "set");
              if (this.#M) this.#W?.push([G, A, "set"]);
            }
          } else if (!w) {
            if (this.#T) this.#q?.(_, A, "set");
            if (this.#M) this.#W?.push([_, A, "set"]);
          }
          if (this.#I($), this.#h($, X, J), this.#H[$] = K, J) {
            J.set = "replace";
            let G = _ && this.#_(_) ? _.__staleWhileFetching : _;
            if (G !== void 0) J.oldValue = G;
          }
        } else if (J) J.set = "update";
      }
      if (Y !== 0 && !this.#P) this.#u();
      if (this.#P) {
        if (!O) this.#B($, Y, z);
        if (J) this.#R(J, $);
      }
      if (!w && this.#M && this.#W) {
        let _ = this.#W,
          G;
        while (G = _?.shift()) this.#z?.(...G);
      }
      return this;
    }
    pop() {
      try {
        while (this.#w) {
          let A = this.#H[this.#j];
          if (this.#b(!0), this.#_(A)) {
            if (A.__staleWhileFetching) return A.__staleWhileFetching;
          } else if (A !== void 0) return A;
        }
      } finally {
        if (this.#M && this.#W) {
          let A = this.#W,
            K;
          while (K = A?.shift()) this.#z?.(...K);
        }
      }
    }
    #b(A) {
      let K = this.#j,
        q = this.#O[K],
        Y = this.#H[K];
      if (this.#E && this.#_(Y)) Y.__abortController.abort(Error("evicted"));else if (this.#T || this.#M) {
        if (this.#T) this.#q?.(Y, q, "evict");
        if (this.#M) this.#W?.push([Y, q, "evict"]);
      }
      if (this.#I(K), A) this.#O[K] = void 0, this.#H[K] = void 0, this.#f.push(K);
      if (this.#w === 1) this.#j = this.#Z = 0, this.#f.length = 0;else this.#j = this.#G[K];
      return this.#$.delete(q), this.#w--, K;
    }
    has(A, K = {}) {
      let {
          updateAgeOnHas: q = this.updateAgeOnHas,
          status: Y
        } = K,
        z = this.#$.get(A);
      if (z !== void 0) {
        let w = this.#H[z];
        if (this.#_(w) && w.__staleWhileFetching === void 0) return !1;
        if (!this.#v(z)) {
          if (q) this.#y(z);
          if (Y) Y.has = "hit", this.#R(Y, z);
          return !0;
        } else if (Y) Y.has = "stale", this.#R(Y, z);
      } else if (Y) Y.has = "miss";
      return !1;
    }
    peek(A, K = {}) {
      let {
          allowStale: q = this.allowStale
        } = K,
        Y = this.#$.get(A);
      if (Y === void 0 || !q && this.#v(Y)) return;
      let z = this.#H[Y];
      return this.#_(z) ? z.__staleWhileFetching : z;
    }
    #x(A, K, q, Y) {
      let z = K === void 0 ? void 0 : this.#H[K];
      if (this.#_(z)) return z;
      let w = new __$.Cq1(),
        {
          signal: H
        } = q;
      H?.addEventListener("abort", () => w.abort(H.reason), {
        signal: w.signal
      });
      let J = {
          signal: w.signal,
          options: q,
          context: Y
        },
        O = (W, D = !1) => {
          let {
              aborted: j
            } = w.signal,
            M = q.ignoreFetchAbort && W !== void 0;
          if (q.status) if (j && !D) {
            if (q.status.fetchAborted = !0, q.status.fetchError = w.signal.reason, M) q.status.fetchAbortIgnored = !0;
          } else q.status.fetchResolved = !0;
          if (j && !M && !D) return $(w.signal.reason);
          let P = G;
          if (this.#H[K] === G) if (W === void 0) {
            if (P.__staleWhileFetching) this.#H[K] = P.__staleWhileFetching;else this.#L(A, "fetch");
          } else {
            if (q.status) q.status.fetchUpdated = !0;
            this.set(A, W, J.options);
          }
          return W;
        },
        X = W => {
          if (q.status) q.status.fetchRejected = !0, q.status.fetchError = W;
          return $(W);
        },
        $ = W => {
          let {
              aborted: D
            } = w.signal,
            j = D && q.allowStaleOnFetchAbort,
            M = j || q.allowStaleOnFetchRejection,
            P = M || q.noDeleteOnFetchRejection,
            f = G;
          if (this.#H[K] === G) {
            if (!P || f.__staleWhileFetching === void 0) this.#L(A, "fetch");else if (!j) this.#H[K] = f.__staleWhileFetching;
          }
          if (M) {
            if (q.status && f.__staleWhileFetching !== void 0) q.status.returnedStale = !0;
            return f.__staleWhileFetching;
          } else if (f.__returned === f) throw W;
        },
        _ = (W, D) => {
          let j = this.#Y?.(A, z, J);
          if (j && j instanceof Promise) j.then(M => W(M === void 0 ? void 0 : M), D);
          w.signal.addEventListener("abort", () => {
            if (!q.ignoreFetchAbort || q.allowStaleOnFetchAbort) {
              if (W(void 0), q.allowStaleOnFetchAbort) W = M => O(M, !0);
            }
          });
        };
      if (q.status) q.status.fetchDispatched = !0;
      let G = new Promise(_).then(O, X),
        Z = Object.assign(G, {
          __abortController: w,
          __staleWhileFetching: z,
          __returned: void 0
        });
      if (K === void 0) this.set(A, Z, {
        ...J.options,
        status: void 0
      }), K = this.#$.get(A);else this.#H[K] = Z;
      return Z;
    }
    #_(A) {
      if (!this.#E) return !1;
      let K = A;
      return !!K && K instanceof Promise && K.hasOwnProperty("__staleWhileFetching") && K.__abortController instanceof __$.Cq1;
    }
    async fetch(A, K = {}) {
      let {
        allowStale: q = this.allowStale,
        updateAgeOnGet: Y = this.updateAgeOnGet,
        noDeleteOnStaleGet: z = this.noDeleteOnStaleGet,
        ttl: w = this.ttl,
        noDisposeOnSet: H = this.noDisposeOnSet,
        size: J = 0,
        sizeCalculation: O = this.sizeCalculation,
        noUpdateTTL: X = this.noUpdateTTL,
        noDeleteOnFetchRejection: $ = this.noDeleteOnFetchRejection,
        allowStaleOnFetchRejection: _ = this.allowStaleOnFetchRejection,
        ignoreFetchAbort: G = this.ignoreFetchAbort,
        allowStaleOnFetchAbort: Z = this.allowStaleOnFetchAbort,
        context: W,
        forceRefresh: D = !1,
        status: j,
        signal: M
      } = K;
      if (!this.#E) {
        if (j) j.fetch = "get";
        return this.get(A, {
          allowStale: q,
          updateAgeOnGet: Y,
          noDeleteOnStaleGet: z,
          status: j
        });
      }
      let P = {
          allowStale: q,
          updateAgeOnGet: Y,
          noDeleteOnStaleGet: z,
          ttl: w,
          noDisposeOnSet: H,
          size: J,
          sizeCalculation: O,
          noUpdateTTL: X,
          noDeleteOnFetchRejection: $,
          allowStaleOnFetchRejection: _,
          allowStaleOnFetchAbort: Z,
          ignoreFetchAbort: G,
          status: j,
          signal: M
        },
        f = this.#$.get(A);
      if (f === void 0) {
        if (j) j.fetch = "miss";
        let N = this.#x(A, f, P, W);
        return N.__returned = N;
      } else {
        let N = this.#H[f];
        if (this.#_(N)) {
          let y = q && N.__staleWhileFetching !== void 0;
          if (j) {
            if (j.fetch = "inflight", y) j.returnedStale = !0;
          }
          return y ? N.__staleWhileFetching : N.__returned = N;
        }
        let T = this.#v(f);
        if (!D && !T) {
          if (j) j.fetch = "hit";
          if (this.#S(f), Y) this.#y(f);
          if (j) this.#R(j, f);
          return N;
        }
        let C = this.#x(A, f, P, W),
          x = C.__staleWhileFetching !== void 0 && q;
        if (j) {
          if (j.fetch = T ? "stale" : "refresh", x && T) j.returnedStale = !0;
        }
        return x ? C.__staleWhileFetching : C.__returned = C;
      }
    }
    async forceFetch(A, K = {}) {
      let q = await this.fetch(A, K);
      if (q === void 0) throw Error("fetch() returned undefined");
      return q;
    }
    memo(A, K = {}) {
      let q = this.#J;
      if (!q) throw Error("no memoMethod provided to constructor");
      let {
          context: Y,
          forceRefresh: z,
          ...w
        } = K,
        H = this.get(A, w);
      if (!z && H !== void 0) return H;
      let J = q(A, H, {
        options: w,
        context: Y
      });
      return this.set(A, J, w), J;
    }
    get(A, K = {}) {
      let {
          allowStale: q = this.allowStale,
          updateAgeOnGet: Y = this.updateAgeOnGet,
          noDeleteOnStaleGet: z = this.noDeleteOnStaleGet,
          status: w
        } = K,
        H = this.#$.get(A);
      if (H !== void 0) {
        let J = this.#H[H],
          O = this.#_(J);
        if (w) this.#R(w, H);
        if (this.#v(H)) {
          if (w) w.get = "stale";
          if (!O) {
            if (!z) this.#L(A, "expire");
            if (w && q) w.returnedStale = !0;
            return q ? J : void 0;
          } else {
            if (w && q && J.__staleWhileFetching !== void 0) w.returnedStale = !0;
            return q ? J.__staleWhileFetching : void 0;
          }
        } else {
          if (w) w.get = "hit";
          if (O) return J.__staleWhileFetching;
          if (this.#S(H), Y) this.#y(H);
          return J;
        }
      } else if (w) w.get = "miss";
    }
    #F(A, K) {
      this.#D[K] = A, this.#G[A] = K;
    }
    #S(A) {
      if (A !== this.#Z) {
        if (A === this.#j) this.#j = this.#G[A];else this.#F(this.#D[A], this.#G[A]);
        this.#F(this.#Z, A), this.#Z = A;
      }
    }
    delete(A) {
      return this.#L(A, "delete");
    }
    #L(A, K) {
      let q = !1;
      if (this.#w !== 0) {
        let Y = this.#$.get(A);
        if (Y !== void 0) if (q = !0, this.#w === 1) this.#Q(K);else {
          this.#I(Y);
          let z = this.#H[Y];
          if (this.#_(z)) z.__abortController.abort(Error("deleted"));else if (this.#T || this.#M) {
            if (this.#T) this.#q?.(z, A, K);
            if (this.#M) this.#W?.push([z, A, K]);
          }
          if (this.#$.delete(A), this.#O[Y] = void 0, this.#H[Y] = void 0, Y === this.#Z) this.#Z = this.#D[Y];else if (Y === this.#j) this.#j = this.#G[Y];else {
            let w = this.#D[Y];
            this.#G[w] = this.#G[Y];
            let H = this.#G[Y];
            this.#D[H] = this.#D[Y];
          }
          this.#w--, this.#f.push(Y);
        }
      }
      if (this.#M && this.#W?.length) {
        let Y = this.#W,
          z;
        while (z = Y?.shift()) this.#z?.(...z);
      }
      return q;
    }
    clear() {
      return this.#Q("delete");
    }
    #Q(A) {
      for (let K of this.#C({
        allowStale: !0
      })) {
        let q = this.#H[K];
        if (this.#_(q)) q.__abortController.abort(Error("deleted"));else {
          let Y = this.#O[K];
          if (this.#T) this.#q?.(q, Y, A);
          if (this.#M) this.#W?.push([q, Y, A]);
        }
      }
      if (this.#$.clear(), this.#H.fill(void 0), this.#O.fill(void 0), this.#P && this.#V) this.#P.fill(0), this.#V.fill(0);
      if (this.#N) this.#N.fill(0);
      if (this.#j = 0, this.#Z = 0, this.#f.length = 0, this.#X = 0, this.#w = 0, this.#M && this.#W) {
        let K = this.#W,
          q;
        while (q = K?.shift()) this.#z?.(...q);
      }
    }
  };
});

// Register to shared state
__$.$yA = $yA;
