// Module: Dy7
// Dependencies: wDA, amA, fN6, wL, wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dy7 = v((fDH, Wy7) => {
  var Gy7 = __$.wDA(),
    mrY = __$.amA(),
    grY = __$.fN6(),
    wgA = __$.wL(),
    {
      isHandledError: FrY
    } = __$.wS();
  Wy7.exports = QrY;
  function QrY(A, K) {
    if (!K.resolve.external) return Promise.resolve();
    try {
      let q = qT6(A.schema, A.$refs._root$Ref.path + "#", A.$refs, K);
      return Promise.all(q);
    } catch (q) {
      return Promise.reject(q);
    }
  }
  function qT6(A, K, q, Y, z) {
    z = z || new Set();
    let w = [];
    if (A && typeof A === "object" && !ArrayBuffer.isView(A) && !z.has(A)) if (z.add(A), Gy7.isExternal$Ref(A)) w.push(Zy7(A, K, q, Y));else for (let H of Object.keys(A)) {
      let J = mrY.join(K, H),
        O = A[H];
      if (Gy7.isExternal$Ref(O)) w.push(Zy7(O, J, q, Y));else w = w.concat(qT6(O, J, q, Y, z));
    }
    return w;
  }
  async function Zy7(A, K, q, Y) {
    let z = wgA.resolve(K, A.$ref),
      w = wgA.stripHash(z);
    if (A = q._$refs[w], A) return Promise.resolve(A.value);
    try {
      let H = await grY(z, q, Y),
        J = qT6(H, w + "#", q, Y);
      return Promise.all(J);
    } catch (H) {
      if (!Y.continueOnError || !FrY(H)) throw H;
      if (q._$refs[w]) H.source = decodeURI(wgA.stripHash(K)), H.path = wgA.safePointerToPath(wgA.getHash(K));
      return [];
    }
  }
});

// Register to shared state
__$.Dy7 = Dy7;
