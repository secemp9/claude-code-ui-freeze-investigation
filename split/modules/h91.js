// Module: h91
// Dependencies: FIA, WY, I91

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var h91 = v(RW9 => {
  var CW9 = __$.FIA(),
    Ux = __$.WY(),
    LW9 = __$.I91();
  function a36(A, K, q) {
    let Y = q;
    for (let z = K.length - 1; z >= 0; --z) {
      let w = K[z];
      if (typeof w === "number" && Number.isInteger(w) && w >= 0) {
        let H = [];
        H[w] = Y, Y = H;
      } else Y = new Map([[w, Y]]);
    }
    return CW9.createNode(Y, void 0, {
      aliasDuplicateObjects: !1,
      keepUndefined: !1,
      onAnchor: () => {
        throw Error("This should not happen, please report a bug.");
      },
      schema: A,
      sourceObjects: new Map()
    });
  }
  var $I4 = A => A == null || typeof A === "object" && !!A[Symbol.iterator]().next().done;
  class _I4 extends LW9.NodeBase {
    constructor(A, K) {
      super(A);
      Object.defineProperty(this, "schema", {
        value: K,
        configurable: !0,
        enumerable: !1,
        writable: !0
      });
    }
    clone(A) {
      let K = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (A) K.schema = A;
      if (K.items = K.items.map(q => Ux.isNode(q) || Ux.isPair(q) ? q.clone(A) : q), this.range) K.range = this.range.slice();
      return K;
    }
    addIn(A, K) {
      if ($I4(A)) this.add(K);else {
        let [q, ...Y] = A,
          z = this.get(q, !0);
        if (Ux.isCollection(z)) z.addIn(Y, K);else if (z === void 0 && this.schema) this.set(q, a36(this.schema, Y, K));else throw Error(`Expected YAML collection at ${q}. Remaining path: ${Y}`);
      }
    }
    deleteIn(A) {
      let [K, ...q] = A;
      if (q.length === 0) return this.delete(K);
      let Y = this.get(K, !0);
      if (Ux.isCollection(Y)) return Y.deleteIn(q);else throw Error(`Expected YAML collection at ${K}. Remaining path: ${q}`);
    }
    getIn(A, K) {
      let [q, ...Y] = A,
        z = this.get(q, !0);
      if (Y.length === 0) return !K && Ux.isScalar(z) ? z.value : z;else return Ux.isCollection(z) ? z.getIn(Y, K) : void 0;
    }
    hasAllNullValues(A) {
      return this.items.every(K => {
        if (!Ux.isPair(K)) return !1;
        let q = K.value;
        return q == null || A && Ux.isScalar(q) && q.value == null && !q.commentBefore && !q.comment && !q.tag;
      });
    }
    hasIn(A) {
      let [K, ...q] = A;
      if (q.length === 0) return this.has(K);
      let Y = this.get(K, !0);
      return Ux.isCollection(Y) ? Y.hasIn(q) : !1;
    }
    setIn(A, K) {
      let [q, ...Y] = A;
      if (Y.length === 0) this.set(q, K);else {
        let z = this.get(q, !0);
        if (Ux.isCollection(z)) z.setIn(Y, K);else if (z === void 0 && this.schema) this.set(q, a36(this.schema, Y, K));else throw Error(`Expected YAML collection at ${q}. Remaining path: ${Y}`);
      }
    }
  }
  RW9.Collection = _I4;
  RW9.collectionFromPath = a36;
  RW9.isEmptyPath = $I4;
});

// Register to shared state
__$.h91 = h91;
