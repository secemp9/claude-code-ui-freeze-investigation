// Module: vy7
// Dependencies: wDA, amA, hs, wL

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vy7 = v((TDH, Ty7) => {
  var wT6 = __$.wDA(),
    Vy7 = __$.amA(),
    {
      ono: lrY
    } = __$.hs(),
    irY = __$.wL();
  Ty7.exports = nrY;
  function nrY(A, K) {
    let q = HT6(A.schema, A.$refs._root$Ref.path, "#", new Set(), new Set(), new Map(), A.$refs, K);
    A.$refs.circular = q.circular, A.schema = q.value;
  }
  function HT6(A, K, q, Y, z, w, H, J) {
    let O,
      X = {
        value: A,
        circular: !1
      },
      $ = J.dereference.excludedPathMatcher;
    if (J.dereference.circular === "ignore" || !z.has(A)) {
      if (A && typeof A === "object" && !ArrayBuffer.isView(A) && !$(q)) {
        if (Y.add(A), z.add(A), wT6.isAllowed$Ref(A, J)) O = fy7(A, K, q, Y, z, w, H, J), X.circular = O.circular, X.value = O.value;else for (let _ of Object.keys(A)) {
          let G = Vy7.join(K, _),
            Z = Vy7.join(q, _);
          if ($(Z)) continue;
          let W = A[_],
            D = !1;
          if (wT6.isAllowed$Ref(W, J)) {
            if (O = fy7(W, G, Z, Y, z, w, H, J), D = O.circular, A[_] !== O.value) A[_] = O.value;
          } else if (!Y.has(W)) {
            if (O = HT6(W, G, Z, Y, z, w, H, J), D = O.circular, A[_] !== O.value) A[_] = O.value;
          } else D = Ny7(G, H, J);
          X.circular = X.circular || D;
        }
        Y.delete(A);
      }
    }
    return X;
  }
  function fy7(A, K, q, Y, z, w, H, J) {
    let O = irY.resolve(K, A.$ref),
      X = w.get(O);
    if (X) {
      let D = Object.keys(A);
      if (D.length > 1) {
        let j = {};
        for (let M of D) if (M !== "$ref" && !(M in X.value)) j[M] = A[M];
        return {
          circular: X.circular,
          value: Object.assign({}, X.value, j)
        };
      }
      return X;
    }
    let $ = H._resolve(O, K, J);
    if ($ === null) return {
      circular: !1,
      value: null
    };
    let _ = $.circular,
      G = _ || Y.has($.value);
    G && Ny7(K, H, J);
    let Z = wT6.dereference(A, $.value);
    if (!G) {
      let D = HT6(Z, $.path, q, Y, z, w, H, J);
      G = D.circular, Z = D.value;
    }
    if (G && !_ && J.dereference.circular === "ignore") Z = A;
    if (_) Z.$ref = q;
    let W = {
      circular: G,
      value: Z
    };
    if (Object.keys(A).length === 1) w.set(O, W);
    return W;
  }
  function Ny7(A, K, q) {
    if (K.circular = !0, !q.dereference.circular) throw lrY.reference(`Circular $ref pointer found at ${A}`);
    return !0;
  }
});

// Register to shared state
__$.vy7 = vy7;
