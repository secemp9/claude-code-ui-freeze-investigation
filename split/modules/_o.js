// Module: _o
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _o = v($o => {
  var sy = $o && $o.__classPrivateFieldGet || function (A, K, q, Y) {
      if (q === "a" && !Y) throw TypeError("Private accessor was defined without a getter");
      if (typeof K === "function" ? A !== K || !Y : !K.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return q === "m" ? Y : q === "a" ? Y.call(A) : Y ? Y.value : K.get(A);
    },
    j_A,
    ZU,
    uH6,
    BH6;
  Object.defineProperty($o, "__esModule", {
    value: !0
  });
  $o.LRUCache = void 0;
  $o.snakeToCamel = To4;
  $o.originalOrCamelOptions = Bs9;
  function To4(A) {
    return A.replace(/([_][^_])/g, K => K.slice(1).toUpperCase());
  }
  function Bs9(A) {
    function K(q) {
      var Y;
      let z = A || {};
      return (Y = z[q]) !== null && Y !== void 0 ? Y : z[To4(q)];
    }
    return {
      get: K
    };
  }
  class vo4 {
    constructor(A) {
      j_A.add(this), ZU.set(this, new Map()), this.capacity = A.capacity, this.maxAge = A.maxAge;
    }
    set(A, K) {
      sy(this, j_A, "m", uH6).call(this, A, K), sy(this, j_A, "m", BH6).call(this);
    }
    get(A) {
      let K = sy(this, ZU, "f").get(A);
      if (!K) return;
      return sy(this, j_A, "m", uH6).call(this, A, K.value), sy(this, j_A, "m", BH6).call(this), K.value;
    }
  }
  $o.LRUCache = vo4;
  ZU = new WeakMap(), j_A = new WeakSet(), uH6 = function (K, q) {
    sy(this, ZU, "f").delete(K), sy(this, ZU, "f").set(K, {
      value: q,
      lastAccessed: Date.now()
    });
  }, BH6 = function () {
    let K = this.maxAge ? Date.now() - this.maxAge : 0,
      q = sy(this, ZU, "f").entries().next();
    while (!q.done && (sy(this, ZU, "f").size > this.capacity || q.value[1].lastAccessed < K)) sy(this, ZU, "f").delete(q.value[0]), q = sy(this, ZU, "f").entries().next();
  };
});

// Register to shared state
__$._o = _o;
