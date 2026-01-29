// Module: R96
// Dependencies: WY, X$A, $$A, nIA, JS4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R96 = v(_P9 => {
  var C96 = __$.WY(),
    JP9 = __$.X$A(),
    OP9 = __$.$$A(),
    XP9 = __$.nIA(),
    YY1 = __$.JS4(),
    $P9 = (A, K) => A.key < K.key ? -1 : A.key > K.key ? 1 : 0;
  class L96 {
    constructor({
      compat: A,
      customTags: K,
      merge: q,
      resolveKnownTags: Y,
      schema: z,
      sortMapEntries: w,
      toStringDefaults: H
    }) {
      this.compat = Array.isArray(A) ? YY1.getTags(A, "compat") : A ? YY1.getTags(null, A) : null, this.name = typeof z === "string" && z || "core", this.knownTags = Y ? YY1.coreKnownTags : {}, this.tags = YY1.getTags(K, this.name, q), this.toStringOptions = H ?? null, Object.defineProperty(this, C96.MAP, {
        value: JP9.map
      }), Object.defineProperty(this, C96.SCALAR, {
        value: XP9.string
      }), Object.defineProperty(this, C96.SEQ, {
        value: OP9.seq
      }), this.sortMapEntries = typeof w === "function" ? w : w === !0 ? $P9 : null;
    }
    clone() {
      let A = Object.create(L96.prototype, Object.getOwnPropertyDescriptors(this));
      return A.tags = this.tags.slice(), A;
    }
  }
  _P9.Schema = L96;
});

// Register to shared state
__$.R96 = R96;
