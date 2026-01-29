// Module: Br
// Dependencies: z96, Y96, h91, WY, xr, q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Br = v(FD9 => {
  var uD9 = __$.z96(),
    BD9 = __$.Y96(),
    mD9 = __$.h91(),
    ur = __$.WY(),
    d91 = __$.xr(),
    gD9 = __$.q$();
  function iIA(A, K) {
    let q = ur.isScalar(K) ? K.value : K;
    for (let Y of A) if (ur.isPair(Y)) {
      if (Y.key === K || Y.key === q) return Y;
      if (ur.isScalar(Y.key) && Y.key.value === q) return Y;
    }
    return;
  }
  class EI4 extends mD9.Collection {
    static get tagName() {
      return "tag:yaml.org,2002:map";
    }
    constructor(A) {
      super(ur.MAP, A);
      this.items = [];
    }
    static from(A, K, q) {
      let {
          keepUndefined: Y,
          replacer: z
        } = q,
        w = new this(A),
        H = (J, O) => {
          if (typeof z === "function") O = z.call(K, J, O);else if (Array.isArray(z) && !z.includes(J)) return;
          if (O !== void 0 || Y) w.items.push(d91.createPair(J, O, q));
        };
      if (K instanceof Map) for (let [J, O] of K) H(J, O);else if (K && typeof K === "object") for (let J of Object.keys(K)) H(J, K[J]);
      if (typeof A.sortMapEntries === "function") w.items.sort(A.sortMapEntries);
      return w;
    }
    add(A, K) {
      let q;
      if (ur.isPair(A)) q = A;else if (!A || typeof A !== "object" || !("key" in A)) q = new d91.Pair(A, A?.value);else q = new d91.Pair(A.key, A.value);
      let Y = iIA(this.items, q.key),
        z = this.schema?.sortMapEntries;
      if (Y) {
        if (!K) throw Error(`Key ${q.key} already set`);
        if (ur.isScalar(Y.value) && gD9.isScalarValue(q.value)) Y.value.value = q.value;else Y.value = q.value;
      } else if (z) {
        let w = this.items.findIndex(H => z(q, H) < 0);
        if (w === -1) this.items.push(q);else this.items.splice(w, 0, q);
      } else this.items.push(q);
    }
    delete(A) {
      let K = iIA(this.items, A);
      if (!K) return !1;
      return this.items.splice(this.items.indexOf(K), 1).length > 0;
    }
    get(A, K) {
      let Y = iIA(this.items, A)?.value;
      return (!K && ur.isScalar(Y) ? Y.value : Y) ?? void 0;
    }
    has(A) {
      return !!iIA(this.items, A);
    }
    set(A, K) {
      this.add(new d91.Pair(A, K), !0);
    }
    toJSON(A, K, q) {
      let Y = q ? new q() : K?.mapAsMap ? new Map() : {};
      if (K?.onCreate) K.onCreate(Y);
      for (let z of this.items) BD9.addPairToJSMap(K, Y, z);
      return Y;
    }
    toString(A, K, q) {
      if (!A) return JSON.stringify(this);
      for (let Y of this.items) if (!ur.isPair(Y)) throw Error(`Map items must all be pairs; found ${JSON.stringify(Y)} instead`);
      if (!A.allNullValues && this.hasAllNullValues(!1)) A = Object.assign({}, A, {
        allNullValues: !0
      });
      return uD9.stringifyCollection(this, A, {
        blockItemPrefix: "",
        flowChars: {
          start: "{",
          end: "}"
        },
        itemIndent: A.indent || "",
        onChompKeep: q,
        onComment: K
      });
    }
  }
  FD9.YAMLMap = EI4;
  FD9.findPair = iIA;
});

// Register to shared state
__$.Br = Br;
