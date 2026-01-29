// Module: Iz4
// Dependencies: tK1, Rz4, SZ, j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iz4 = v((_8w, yz4) => {
  var {
      kConstruct: lRA
    } = __$.tK1(),
    {
      Cache: Aq1
    } = __$.Rz4(),
    {
      webidl: CD
    } = __$.SZ(),
    {
      kEnumerableProperty: iRA
    } = __$.j9();
  class gn {
    #A = new Map();
    constructor() {
      if (arguments[0] !== lRA) CD.illegalConstructor();
      CD.util.markAsUncloneable(this);
    }
    async match(A, K = {}) {
      if (CD.brandCheck(this, gn), CD.argumentLengthCheck(arguments, 1, "CacheStorage.match"), A = CD.converters.RequestInfo(A), K = CD.converters.MultiCacheQueryOptions(K), K.cacheName != null) {
        if (this.#A.has(K.cacheName)) {
          let q = this.#A.get(K.cacheName);
          return await new Aq1(lRA, q).match(A, K);
        }
      } else for (let q of this.#A.values()) {
        let z = await new Aq1(lRA, q).match(A, K);
        if (z !== void 0) return z;
      }
    }
    async has(A) {
      CD.brandCheck(this, gn);
      let K = "CacheStorage.has";
      return CD.argumentLengthCheck(arguments, 1, K), A = CD.converters.DOMString(A, K, "cacheName"), this.#A.has(A);
    }
    async open(A) {
      CD.brandCheck(this, gn);
      let K = "CacheStorage.open";
      if (CD.argumentLengthCheck(arguments, 1, K), A = CD.converters.DOMString(A, K, "cacheName"), this.#A.has(A)) {
        let Y = this.#A.get(A);
        return new Aq1(lRA, Y);
      }
      let q = [];
      return this.#A.set(A, q), new Aq1(lRA, q);
    }
    async delete(A) {
      CD.brandCheck(this, gn);
      let K = "CacheStorage.delete";
      return CD.argumentLengthCheck(arguments, 1, K), A = CD.converters.DOMString(A, K, "cacheName"), this.#A.delete(A);
    }
    async keys() {
      return CD.brandCheck(this, gn), [...this.#A.keys()];
    }
  }
  Object.defineProperties(gn.prototype, {
    [Symbol.toStringTag]: {
      value: "CacheStorage",
      configurable: !0
    },
    match: iRA,
    has: iRA,
    open: iRA,
    delete: iRA,
    keys: iRA
  });
  yz4.exports = {
    CacheStorage: gn
  };
});

// Register to shared state
__$.Iz4 = Iz4;
