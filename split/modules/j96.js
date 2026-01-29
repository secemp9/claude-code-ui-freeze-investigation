// Module: j96
// Dependencies: WY, Sr, Br, mr, a91

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var j96 = v(wM9 => {
  var gI4 = __$.WY(),
    D96 = __$.Sr(),
    oIA = __$.Br(),
    YM9 = __$.mr(),
    FI4 = __$.a91();
  class K7A extends YM9.YAMLSeq {
    constructor() {
      super();
      this.add = oIA.YAMLMap.prototype.add.bind(this), this.delete = oIA.YAMLMap.prototype.delete.bind(this), this.get = oIA.YAMLMap.prototype.get.bind(this), this.has = oIA.YAMLMap.prototype.has.bind(this), this.set = oIA.YAMLMap.prototype.set.bind(this), this.tag = K7A.tag;
    }
    toJSON(A, K) {
      if (!K) return super.toJSON(A);
      let q = new Map();
      if (K?.onCreate) K.onCreate(q);
      for (let Y of this.items) {
        let z, w;
        if (gI4.isPair(Y)) z = D96.toJS(Y.key, "", K), w = D96.toJS(Y.value, z, K);else z = D96.toJS(Y, "", K);
        if (q.has(z)) throw Error("Ordered maps must not include duplicate keys");
        q.set(z, w);
      }
      return q;
    }
    static from(A, K, q) {
      let Y = FI4.createPairs(A, K, q),
        z = new this();
      return z.items = Y.items, z;
    }
  }
  K7A.tag = "tag:yaml.org,2002:omap";
  var zM9 = {
    collection: "seq",
    identify: A => A instanceof Map,
    nodeClass: K7A,
    default: !1,
    tag: "tag:yaml.org,2002:omap",
    resolve(A, K) {
      let q = FI4.resolvePairs(A, K),
        Y = [];
      for (let {
        key: z
      } of q.items) if (gI4.isScalar(z)) if (Y.includes(z.value)) K(`Ordered maps must not include duplicate keys: ${z.value}`);else Y.push(z.value);
      return Object.assign(new K7A(), q);
    },
    createNode: (A, K, q) => K7A.from(A, K, q)
  };
  wM9.YAMLOMap = K7A;
  wM9.omap = zM9;
});

// Register to shared state
__$.j96 = j96;
