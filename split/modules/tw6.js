// Module: tw6
// Dependencies: Cz1, Rz1, Li4, Ri4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tw6 = v(un9 => {
  var cV = __$.Cz1(),
    jw = __$.Rz1(),
    bn9 = __$.Li4(),
    yi4 = jw.newObjectInRealm,
    KX = jw.implSymbol,
    Ii4 = jw.ctorRegistrySymbol;
  un9.is = A => {
    return jw.isObject(A) && jw.hasOwn(A, KX) && A[KX] instanceof wo.implementation;
  };
  un9.isImpl = A => {
    return jw.isObject(A) && A instanceof wo.implementation;
  };
  un9.convert = (A, K, {
    context: q = "The provided value"
  } = {}) => {
    if (un9.is(K)) return jw.implForWrapper(K);
    throw new A.TypeError(`${q} is not of type 'URLSearchParams'.`);
  };
  un9.createDefaultIterator = (A, K, q) => {
    let z = A[Ii4]["URLSearchParams Iterator"],
      w = Object.create(z);
    return Object.defineProperty(w, jw.iterInternalSymbol, {
      value: {
        target: K,
        kind: q,
        index: 0
      },
      configurable: !0
    }), w;
  };
  function Si4(A, K) {
    let q;
    if (K !== void 0) q = K.prototype;
    if (!jw.isObject(q)) q = A[Ii4].URLSearchParams.prototype;
    return Object.create(q);
  }
  un9.create = (A, K, q) => {
    let Y = Si4(A);
    return un9.setup(Y, A, K, q);
  };
  un9.createImpl = (A, K, q) => {
    let Y = un9.create(A, K, q);
    return jw.implForWrapper(Y);
  };
  un9._internalSetup = (A, K) => {};
  un9.setup = (A, K, q = [], Y = {}) => {
    if (Y.wrapper = A, un9._internalSetup(A, K), Object.defineProperty(A, KX, {
      value: new wo.implementation(K, q, Y),
      configurable: !0
    }), A[KX][jw.wrapperSymbol] = A, wo.init) wo.init(A[KX]);
    return A;
  };
  un9.new = (A, K) => {
    let q = Si4(A, K);
    if (un9._internalSetup(q, A), Object.defineProperty(q, KX, {
      value: Object.create(wo.implementation.prototype),
      configurable: !0
    }), q[KX][jw.wrapperSymbol] = q, wo.init) wo.init(q[KX]);
    return q[KX];
  };
  var xn9 = new Set(["Window", "Worker"]);
  un9.install = (A, K) => {
    if (!K.some(z => xn9.has(z))) return;
    let q = jw.initCtorRegistry(A);
    class Y {
      constructor() {
        let z = [];
        {
          let w = arguments[0];
          if (w !== void 0) {
            if (jw.isObject(w)) {
              if (w[Symbol.iterator] !== void 0) {
                if (!jw.isObject(w)) throw new A.TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.");else {
                  let H = [],
                    J = w;
                  for (let O of J) {
                    if (!jw.isObject(O)) throw new A.TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.");else {
                      let X = [],
                        $ = O;
                      for (let _ of $) _ = cV.USVString(_, {
                        context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element",
                        globals: A
                      }), X.push(_);
                      O = X;
                    }
                    H.push(O);
                  }
                  w = H;
                }
              } else if (!jw.isObject(w)) throw new A.TypeError("Failed to construct 'URLSearchParams': parameter 1 record is not an object.");else {
                let H = Object.create(null);
                for (let J of Reflect.ownKeys(w)) {
                  let O = Object.getOwnPropertyDescriptor(w, J);
                  if (O && O.enumerable) {
                    let X = J;
                    X = cV.USVString(X, {
                      context: "Failed to construct 'URLSearchParams': parameter 1 record's key",
                      globals: A
                    });
                    let $ = w[J];
                    $ = cV.USVString($, {
                      context: "Failed to construct 'URLSearchParams': parameter 1 record's value",
                      globals: A
                    }), H[X] = $;
                  }
                }
                w = H;
              }
            } else w = cV.USVString(w, {
              context: "Failed to construct 'URLSearchParams': parameter 1",
              globals: A
            });
          } else w = "";
          z.push(w);
        }
        return un9.setup(Object.create(new.target.prototype), A, z);
      }
      append(z, w) {
        let H = this !== null && this !== void 0 ? this : A;
        if (!un9.is(H)) throw new A.TypeError("'append' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 2) throw new A.TypeError(`Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`);
        let J = [];
        {
          let O = arguments[0];
          O = cV.USVString(O, {
            context: "Failed to execute 'append' on 'URLSearchParams': parameter 1",
            globals: A
          }), J.push(O);
        }
        {
          let O = arguments[1];
          O = cV.USVString(O, {
            context: "Failed to execute 'append' on 'URLSearchParams': parameter 2",
            globals: A
          }), J.push(O);
        }
        return jw.tryWrapperForImpl(H[KX].append(...J));
      }
      delete(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!un9.is(w)) throw new A.TypeError("'delete' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
        let H = [];
        {
          let J = arguments[0];
          J = cV.USVString(J, {
            context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1",
            globals: A
          }), H.push(J);
        }
        {
          let J = arguments[1];
          if (J !== void 0) J = cV.USVString(J, {
            context: "Failed to execute 'delete' on 'URLSearchParams': parameter 2",
            globals: A
          });
          H.push(J);
        }
        return jw.tryWrapperForImpl(w[KX].delete(...H));
      }
      get(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!un9.is(w)) throw new A.TypeError("'get' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
        let H = [];
        {
          let J = arguments[0];
          J = cV.USVString(J, {
            context: "Failed to execute 'get' on 'URLSearchParams': parameter 1",
            globals: A
          }), H.push(J);
        }
        return w[KX].get(...H);
      }
      getAll(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!un9.is(w)) throw new A.TypeError("'getAll' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
        let H = [];
        {
          let J = arguments[0];
          J = cV.USVString(J, {
            context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1",
            globals: A
          }), H.push(J);
        }
        return jw.tryWrapperForImpl(w[KX].getAll(...H));
      }
      has(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!un9.is(w)) throw new A.TypeError("'has' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
        let H = [];
        {
          let J = arguments[0];
          J = cV.USVString(J, {
            context: "Failed to execute 'has' on 'URLSearchParams': parameter 1",
            globals: A
          }), H.push(J);
        }
        {
          let J = arguments[1];
          if (J !== void 0) J = cV.USVString(J, {
            context: "Failed to execute 'has' on 'URLSearchParams': parameter 2",
            globals: A
          });
          H.push(J);
        }
        return w[KX].has(...H);
      }
      set(z, w) {
        let H = this !== null && this !== void 0 ? this : A;
        if (!un9.is(H)) throw new A.TypeError("'set' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 2) throw new A.TypeError(`Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`);
        let J = [];
        {
          let O = arguments[0];
          O = cV.USVString(O, {
            context: "Failed to execute 'set' on 'URLSearchParams': parameter 1",
            globals: A
          }), J.push(O);
        }
        {
          let O = arguments[1];
          O = cV.USVString(O, {
            context: "Failed to execute 'set' on 'URLSearchParams': parameter 2",
            globals: A
          }), J.push(O);
        }
        return jw.tryWrapperForImpl(H[KX].set(...J));
      }
      sort() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!un9.is(z)) throw new A.TypeError("'sort' called on an object that is not a valid instance of URLSearchParams.");
        return jw.tryWrapperForImpl(z[KX].sort());
      }
      toString() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!un9.is(z)) throw new A.TypeError("'toString' called on an object that is not a valid instance of URLSearchParams.");
        return z[KX].toString();
      }
      keys() {
        if (!un9.is(this)) throw new A.TypeError("'keys' called on an object that is not a valid instance of URLSearchParams.");
        return un9.createDefaultIterator(A, this, "key");
      }
      values() {
        if (!un9.is(this)) throw new A.TypeError("'values' called on an object that is not a valid instance of URLSearchParams.");
        return un9.createDefaultIterator(A, this, "value");
      }
      entries() {
        if (!un9.is(this)) throw new A.TypeError("'entries' called on an object that is not a valid instance of URLSearchParams.");
        return un9.createDefaultIterator(A, this, "key+value");
      }
      forEach(z) {
        if (!un9.is(this)) throw new A.TypeError("'forEach' called on an object that is not a valid instance of URLSearchParams.");
        if (arguments.length < 1) throw new A.TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
        z = bn9.convert(A, z, {
          context: "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1"
        });
        let w = arguments[1],
          H = Array.from(this[KX]),
          J = 0;
        while (J < H.length) {
          let [O, X] = H[J].map(jw.tryWrapperForImpl);
          z.call(w, X, O, this), H = Array.from(this[KX]), J++;
        }
      }
      get size() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!un9.is(z)) throw new A.TypeError("'get size' called on an object that is not a valid instance of URLSearchParams.");
        return z[KX].size;
      }
    }
    Object.defineProperties(Y.prototype, {
      append: {
        enumerable: !0
      },
      delete: {
        enumerable: !0
      },
      get: {
        enumerable: !0
      },
      getAll: {
        enumerable: !0
      },
      has: {
        enumerable: !0
      },
      set: {
        enumerable: !0
      },
      sort: {
        enumerable: !0
      },
      toString: {
        enumerable: !0
      },
      keys: {
        enumerable: !0
      },
      values: {
        enumerable: !0
      },
      entries: {
        enumerable: !0
      },
      forEach: {
        enumerable: !0
      },
      size: {
        enumerable: !0
      },
      [Symbol.toStringTag]: {
        value: "URLSearchParams",
        configurable: !0
      },
      [Symbol.iterator]: {
        value: Y.prototype.entries,
        configurable: !0,
        writable: !0
      }
    }), q.URLSearchParams = Y, q["URLSearchParams Iterator"] = Object.create(q["%IteratorPrototype%"], {
      [Symbol.toStringTag]: {
        configurable: !0,
        value: "URLSearchParams Iterator"
      }
    }), jw.define(q["URLSearchParams Iterator"], {
      next() {
        let z = this && this[jw.iterInternalSymbol];
        if (!z) throw new A.TypeError("next() called on a value that is not a URLSearchParams iterator object");
        let {
            target: w,
            kind: H,
            index: J
          } = z,
          O = Array.from(w[KX]),
          X = O.length;
        if (J >= X) return yi4(A, {
          value: void 0,
          done: !0
        });
        let $ = O[J];
        return z.index = J + 1, yi4(A, jw.iteratorResult($.map(jw.tryWrapperForImpl), H));
      }
    }), Object.defineProperty(A, "URLSearchParams", {
      configurable: !0,
      writable: !0,
      value: Y
    });
  };
  var wo = __$.Ri4();
});

// Register to shared state
__$.tw6 = tw6;
