// Module: mr
// Dependencies: FIA, z96, h91, WY, q$, Sr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mr = v(sD9 => {
  var iD9 = __$.FIA(),
    nD9 = __$.z96(),
    rD9 = __$.h91(),
    l91 = __$.WY(),
    oD9 = __$.q$(),
    aD9 = __$.Sr();
  class CI4 extends rD9.Collection {
    static get tagName() {
      return "tag:yaml.org,2002:seq";
    }
    constructor(A) {
      super(l91.SEQ, A);
      this.items = [];
    }
    add(A) {
      this.items.push(A);
    }
    delete(A) {
      let K = c91(A);
      if (typeof K !== "number") return !1;
      return this.items.splice(K, 1).length > 0;
    }
    get(A, K) {
      let q = c91(A);
      if (typeof q !== "number") return;
      let Y = this.items[q];
      return !K && l91.isScalar(Y) ? Y.value : Y;
    }
    has(A) {
      let K = c91(A);
      return typeof K === "number" && K < this.items.length;
    }
    set(A, K) {
      let q = c91(A);
      if (typeof q !== "number") throw Error(`Expected a valid index, not ${A}.`);
      let Y = this.items[q];
      if (l91.isScalar(Y) && oD9.isScalarValue(K)) Y.value = K;else this.items[q] = K;
    }
    toJSON(A, K) {
      let q = [];
      if (K?.onCreate) K.onCreate(q);
      let Y = 0;
      for (let z of this.items) q.push(aD9.toJS(z, String(Y++), K));
      return q;
    }
    toString(A, K, q) {
      if (!A) return JSON.stringify(this);
      return nD9.stringifyCollection(this, A, {
        blockItemPrefix: "- ",
        flowChars: {
          start: "[",
          end: "]"
        },
        itemIndent: (A.indent || "") + "  ",
        onChompKeep: q,
        onComment: K
      });
    }
    static from(A, K, q) {
      let {
          replacer: Y
        } = q,
        z = new this(A);
      if (K && Symbol.iterator in Object(K)) {
        let w = 0;
        for (let H of K) {
          if (typeof Y === "function") {
            let J = K instanceof Set ? H : String(w++);
            H = Y.call(K, J, H);
          }
          z.items.push(iD9.createNode(H, void 0, q));
        }
      }
      return z;
    }
  }
  function c91(A) {
    let K = l91.isScalar(A) ? A.value : A;
    if (K && typeof K === "string") K = Number(K);
    return typeof K === "number" && Number.isInteger(K) && K >= 0 ? K : null;
  }
  sD9.YAMLSeq = CI4;
});

// Register to shared state
__$.mr = mr;
