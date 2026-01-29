// Module: gIA
// Dependencies: y91, BIA, WY, I91, Sr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gIA = v(_W9 => {
  var JW9 = __$.y91(),
    OW9 = __$.BIA(),
    J$A = __$.WY(),
    XW9 = __$.I91(),
    $W9 = __$.Sr();
  class OI4 extends XW9.NodeBase {
    constructor(A) {
      super(J$A.ALIAS);
      this.source = A, Object.defineProperty(this, "tag", {
        set() {
          throw Error("Alias nodes cannot have tags");
        }
      });
    }
    resolve(A, K) {
      let q;
      if (K?.aliasResolveCache) q = K.aliasResolveCache;else if (q = [], OW9.visit(A, {
        Node: (z, w) => {
          if (J$A.isAlias(w) || J$A.hasAnchor(w)) q.push(w);
        }
      }), K) K.aliasResolveCache = q;
      let Y = void 0;
      for (let z of q) {
        if (z === this) break;
        if (z.anchor === this.source) Y = z;
      }
      return Y;
    }
    toJSON(A, K) {
      if (!K) return {
        source: this.source
      };
      let {
          anchors: q,
          doc: Y,
          maxAliasCount: z
        } = K,
        w = this.resolve(Y, K);
      if (!w) {
        let J = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw ReferenceError(J);
      }
      let H = q.get(w);
      if (!H) $W9.toJS(w, null, K), H = q.get(w);
      if (!H || H.res === void 0) throw ReferenceError("This should not happen: Alias anchor was not resolved?");
      if (z >= 0) {
        if (H.count += 1, H.aliasCount === 0) H.aliasCount = S91(Y, w, q);
        if (H.count * H.aliasCount > z) throw ReferenceError("Excessive alias count indicates a resource exhaustion attack");
      }
      return H.res;
    }
    toString(A, K, q) {
      let Y = `*${this.source}`;
      if (A) {
        if (JW9.anchorIsValid(this.source), A.options.verifyAliasOrder && !A.anchors.has(this.source)) {
          let z = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw Error(z);
        }
        if (A.implicitKey) return `${Y} `;
      }
      return Y;
    }
  }
  function S91(A, K, q) {
    if (J$A.isAlias(K)) {
      let Y = K.resolve(A),
        z = q && Y && q.get(Y);
      return z ? z.count * z.aliasCount : 0;
    } else if (J$A.isCollection(K)) {
      let Y = 0;
      for (let z of K.items) {
        let w = S91(A, z, q);
        if (w > Y) Y = w;
      }
      return Y;
    } else if (J$A.isPair(K)) {
      let Y = S91(A, K.key, q),
        z = S91(A, K.value, q);
      return Math.max(Y, z);
    }
    return 1;
  }
  _W9.Alias = OI4;
});

// Register to shared state
__$.gIA = gIA;
