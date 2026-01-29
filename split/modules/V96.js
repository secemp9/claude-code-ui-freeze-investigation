// Module: V96
// Dependencies: WY, xr, Br

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V96 = v(yM9 => {
  var AY1 = __$.WY(),
    t91 = __$.xr(),
    e91 = __$.Br();
  class q7A extends e91.YAMLMap {
    constructor(A) {
      super(A);
      this.tag = q7A.tag;
    }
    add(A) {
      let K;
      if (AY1.isPair(A)) K = A;else if (A && typeof A === "object" && "key" in A && "value" in A && A.value === null) K = new t91.Pair(A.key, null);else K = new t91.Pair(A, null);
      if (!e91.findPair(this.items, K.key)) this.items.push(K);
    }
    get(A, K) {
      let q = e91.findPair(this.items, A);
      return !K && AY1.isPair(q) ? AY1.isScalar(q.key) ? q.key.value : q.key : q;
    }
    set(A, K) {
      if (typeof K !== "boolean") throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof K}`);
      let q = e91.findPair(this.items, A);
      if (q && !K) this.items.splice(this.items.indexOf(q), 1);else if (!q && K) this.items.push(new t91.Pair(A));
    }
    toJSON(A, K) {
      return super.toJSON(A, K, Set);
    }
    toString(A, K, q) {
      if (!A) return JSON.stringify(this);
      if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, A, {
        allNullValues: !0
      }), K, q);else throw Error("Set items must all have null values");
    }
    static from(A, K, q) {
      let {
          replacer: Y
        } = q,
        z = new this(A);
      if (K && Symbol.iterator in Object(K)) for (let w of K) {
        if (typeof Y === "function") w = Y.call(K, w, w);
        z.items.push(t91.createPair(w, null, q));
      }
      return z;
    }
  }
  q7A.tag = "tag:yaml.org,2002:set";
  var RM9 = {
    collection: "map",
    identify: A => A instanceof Set,
    nodeClass: q7A,
    default: !1,
    tag: "tag:yaml.org,2002:set",
    createNode: (A, K, q) => q7A.from(A, K, q),
    resolve(A, K) {
      if (AY1.isMap(A)) {
        if (A.hasAllNullValues(!0)) return Object.assign(new q7A(), A);else K("Set items must all have null values");
      } else K("Expected a mapping for this tag");
      return A;
    }
  };
  yM9.YAMLSet = q7A;
  yM9.set = RM9;
});

// Register to shared state
__$.V96 = V96;
