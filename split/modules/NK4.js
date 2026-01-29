// Module: NK4
// Dependencies: u71

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NK4 = v((n1w, fK4) => {
  var {
    wellknownHeaderNames: PK4,
    headerNameLowerCasedRecord: Tu3
  } = __$.u71();
  class K0A {
    value = null;
    left = null;
    middle = null;
    right = null;
    code;
    constructor(A, K, q) {
      if (q === void 0 || q >= A.length) throw TypeError("Unreachable");
      if ((this.code = A.charCodeAt(q)) > 127) throw TypeError("key must be ascii string");
      if (A.length !== ++q) this.middle = new K0A(A, K, q);else this.value = K;
    }
    add(A, K) {
      let q = A.length;
      if (q === 0) throw TypeError("Unreachable");
      let Y = 0,
        z = this;
      while (!0) {
        let w = A.charCodeAt(Y);
        if (w > 127) throw TypeError("key must be ascii string");
        if (z.code === w) {
          if (q === ++Y) {
            z.value = K;
            break;
          } else if (z.middle !== null) z = z.middle;else {
            z.middle = new K0A(A, K, Y);
            break;
          }
        } else if (z.code < w) {
          if (z.left !== null) z = z.left;else {
            z.left = new K0A(A, K, Y);
            break;
          }
        } else if (z.right !== null) z = z.right;else {
          z.right = new K0A(A, K, Y);
          break;
        }
      }
    }
    search(A) {
      let K = A.length,
        q = 0,
        Y = this;
      while (Y !== null && q < K) {
        let z = A[q];
        if (z <= 90 && z >= 65) z |= 32;
        while (Y !== null) {
          if (z === Y.code) {
            if (K === ++q) return Y;
            Y = Y.middle;
            break;
          }
          Y = Y.code < z ? Y.left : Y.right;
        }
      }
      return null;
    }
  }
  class Y66 {
    node = null;
    insert(A, K) {
      if (this.node === null) this.node = new K0A(A, K, 0);else this.node.add(A, K);
    }
    lookup(A) {
      return this.node?.search(A)?.value ?? null;
    }
  }
  var VK4 = new Y66();
  for (let A = 0; A < PK4.length; ++A) {
    let K = Tu3[PK4[A]];
    VK4.insert(K, K);
  }
  fK4.exports = {
    TernarySearchTree: Y66,
    tree: VK4
  };
});

// Register to shared state
__$.NK4 = NK4;
