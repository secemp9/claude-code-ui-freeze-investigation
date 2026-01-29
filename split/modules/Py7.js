// Module: Py7
// Dependencies: wDA, amA, wL

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Py7 = v((NDH, My7) => {
  var UZ1 = __$.wDA(),
    HgA = __$.amA(),
    YT6 = __$.wL();
  My7.exports = UrY;
  function UrY(A, K) {
    let q = [];
    zT6(A, "schema", A.$refs._root$Ref.path + "#", "#", 0, q, A.$refs, K), prY(q);
  }
  function zT6(A, K, q, Y, z, w, H, J) {
    let O = K === null ? A : A[K];
    if (O && typeof O === "object" && !ArrayBuffer.isView(O)) if (UZ1.isAllowed$Ref(O)) jy7(A, K, q, Y, z, w, H, J);else {
      let X = Object.keys(O).sort(($, _) => {
        if ($ === "definitions") return -1;else if (_ === "definitions") return 1;else return $.length - _.length;
      });
      for (let $ of X) {
        let _ = HgA.join(q, $),
          G = HgA.join(Y, $),
          Z = O[$];
        if (UZ1.isAllowed$Ref(Z)) jy7(O, $, q, G, z, w, H, J);else zT6(O, $, _, G, z, w, H, J);
      }
    }
  }
  function jy7(A, K, q, Y, z, w, H, J) {
    let O = K === null ? A : A[K],
      X = YT6.resolve(q, O.$ref),
      $ = H._resolve(X, Y, J);
    if ($ === null) return;
    let _ = HgA.parse(Y).length,
      G = YT6.stripHash($.path),
      Z = YT6.getHash($.path),
      W = G !== H._root$Ref.path,
      D = UZ1.isExtended$Ref(O);
    z += $.indirections;
    let j = drY(w, A, K);
    if (j) if (_ < j.depth || z < j.indirections) crY(w, j);else return;
    if (w.push({
      $ref: O,
      parent: A,
      key: K,
      pathFromRoot: Y,
      depth: _,
      file: G,
      hash: Z,
      value: $.value,
      circular: $.circular,
      extended: D,
      external: W,
      indirections: z
    }), !j) zT6($.value, null, $.path, Y, z + 1, w, H, J);
  }
  function prY(A) {
    A.sort((z, w) => {
      if (z.file !== w.file) return z.file < w.file ? -1 : 1;else if (z.hash !== w.hash) return z.hash < w.hash ? -1 : 1;else if (z.circular !== w.circular) return z.circular ? -1 : 1;else if (z.extended !== w.extended) return z.extended ? 1 : -1;else if (z.indirections !== w.indirections) return z.indirections - w.indirections;else if (z.depth !== w.depth) return z.depth - w.depth;else {
        let H = z.pathFromRoot.lastIndexOf("/definitions"),
          J = w.pathFromRoot.lastIndexOf("/definitions");
        if (H !== J) return J - H;else return z.pathFromRoot.length - w.pathFromRoot.length;
      }
    });
    let K, q, Y;
    for (let z of A) if (!z.external) z.$ref.$ref = z.hash;else if (z.file === K && z.hash === q) z.$ref.$ref = Y;else if (z.file === K && z.hash.indexOf(q + "/") === 0) z.$ref.$ref = HgA.join(Y, HgA.parse(z.hash.replace(q, "#")));else if (K = z.file, q = z.hash, Y = z.pathFromRoot, z.$ref = z.parent[z.key] = UZ1.dereference(z.$ref, z.value), z.circular) z.$ref.$ref = z.pathFromRoot;
  }
  function drY(A, K, q) {
    for (let Y = 0; Y < A.length; Y++) {
      let z = A[Y];
      if (z.parent === K && z.key === q) return z;
    }
  }
  function crY(A, K) {
    let q = A.indexOf(K);
    A.splice(q, 1);
  }
});

// Register to shared state
__$.Py7 = Py7;
