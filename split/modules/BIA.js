// Module: BIA
// Dependencies: WY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BIA = v(BZ9 => {
  var H_ = __$.WY(),
    UV = Symbol("break visit"),
    sy4 = Symbol("skip children"),
    Qx = Symbol("remove node");
  function L91(A, K) {
    let q = ty4(K);
    if (H_.isDocument(A)) {
      if (w$A(null, A.contents, q, Object.freeze([A])) === Qx) A.contents = null;
    } else w$A(null, A, q, Object.freeze([]));
  }
  L91.BREAK = UV;
  L91.SKIP = sy4;
  L91.REMOVE = Qx;
  function w$A(A, K, q, Y) {
    let z = ey4(A, K, q, Y);
    if (H_.isNode(z) || H_.isPair(z)) return AI4(A, Y, z), w$A(A, z, q, Y);
    if (typeof z !== "symbol") {
      if (H_.isCollection(K)) {
        Y = Object.freeze(Y.concat(K));
        for (let w = 0; w < K.items.length; ++w) {
          let H = w$A(w, K.items[w], q, Y);
          if (typeof H === "number") w = H - 1;else if (H === UV) return UV;else if (H === Qx) K.items.splice(w, 1), w -= 1;
        }
      } else if (H_.isPair(K)) {
        Y = Object.freeze(Y.concat(K));
        let w = w$A("key", K.key, q, Y);
        if (w === UV) return UV;else if (w === Qx) K.key = null;
        let H = w$A("value", K.value, q, Y);
        if (H === UV) return UV;else if (H === Qx) K.value = null;
      }
    }
    return z;
  }
  async function R91(A, K) {
    let q = ty4(K);
    if (H_.isDocument(A)) {
      if ((await H$A(null, A.contents, q, Object.freeze([A]))) === Qx) A.contents = null;
    } else await H$A(null, A, q, Object.freeze([]));
  }
  R91.BREAK = UV;
  R91.SKIP = sy4;
  R91.REMOVE = Qx;
  async function H$A(A, K, q, Y) {
    let z = await ey4(A, K, q, Y);
    if (H_.isNode(z) || H_.isPair(z)) return AI4(A, Y, z), H$A(A, z, q, Y);
    if (typeof z !== "symbol") {
      if (H_.isCollection(K)) {
        Y = Object.freeze(Y.concat(K));
        for (let w = 0; w < K.items.length; ++w) {
          let H = await H$A(w, K.items[w], q, Y);
          if (typeof H === "number") w = H - 1;else if (H === UV) return UV;else if (H === Qx) K.items.splice(w, 1), w -= 1;
        }
      } else if (H_.isPair(K)) {
        Y = Object.freeze(Y.concat(K));
        let w = await H$A("key", K.key, q, Y);
        if (w === UV) return UV;else if (w === Qx) K.key = null;
        let H = await H$A("value", K.value, q, Y);
        if (H === UV) return UV;else if (H === Qx) K.value = null;
      }
    }
    return z;
  }
  function ty4(A) {
    if (typeof A === "object" && (A.Collection || A.Node || A.Value)) return Object.assign({
      Alias: A.Node,
      Map: A.Node,
      Scalar: A.Node,
      Seq: A.Node
    }, A.Value && {
      Map: A.Value,
      Scalar: A.Value,
      Seq: A.Value
    }, A.Collection && {
      Map: A.Collection,
      Seq: A.Collection
    }, A);
    return A;
  }
  function ey4(A, K, q, Y) {
    if (typeof q === "function") return q(A, K, Y);
    if (H_.isMap(K)) return q.Map?.(A, K, Y);
    if (H_.isSeq(K)) return q.Seq?.(A, K, Y);
    if (H_.isPair(K)) return q.Pair?.(A, K, Y);
    if (H_.isScalar(K)) return q.Scalar?.(A, K, Y);
    if (H_.isAlias(K)) return q.Alias?.(A, K, Y);
    return;
  }
  function AI4(A, K, q) {
    let Y = K[K.length - 1];
    if (H_.isCollection(Y)) Y.items[A] = q;else if (H_.isPair(Y)) {
      if (A === "key") Y.key = q;else Y.value = q;
    } else if (H_.isDocument(Y)) Y.contents = q;else {
      let z = H_.isAlias(Y) ? "alias" : "scalar";
      throw Error(`Cannot replace node with ${z} parent`);
    }
  }
  BZ9.visit = L91;
  BZ9.visitAsync = R91;
});

// Register to shared state
__$.BIA = BIA;
