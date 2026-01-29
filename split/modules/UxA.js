// Module: UxA
// Dependencies: eU

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UxA = v((zow, PO1) => {
  var {
      EMPTY_BUFFER: HwY
    } = __$.eU(),
    qG6 = Buffer[Symbol.species];
  function JwY(A, K) {
    if (A.length === 0) return HwY;
    if (A.length === 1) return A[0];
    let q = Buffer.allocUnsafe(K),
      Y = 0;
    for (let z = 0; z < A.length; z++) {
      let w = A[z];
      q.set(w, Y), Y += w.length;
    }
    if (Y < K) return new qG6(q.buffer, q.byteOffset, Y);
    return q;
  }
  function b37(A, K, q, Y, z) {
    for (let w = 0; w < z; w++) q[Y + w] = A[w] ^ K[w & 3];
  }
  function x37(A, K) {
    for (let q = 0; q < A.length; q++) A[q] ^= K[q & 3];
  }
  function OwY(A) {
    if (A.length === A.buffer.byteLength) return A.buffer;
    return A.buffer.slice(A.byteOffset, A.byteOffset + A.length);
  }
  function YG6(A) {
    if (YG6.readOnly = !0, Buffer.isBuffer(A)) return A;
    let K;
    if (A instanceof ArrayBuffer) K = new qG6(A);else if (ArrayBuffer.isView(A)) K = new qG6(A.buffer, A.byteOffset, A.byteLength);else K = Buffer.from(A), YG6.readOnly = !1;
    return K;
  }
  PO1.exports = {
    concat: JwY,
    mask: b37,
    toArrayBuffer: OwY,
    toBuffer: YG6,
    unmask: x37
  };
  if (!process.env.WS_NO_BUFFER_UTIL) try {
    let A = (() => {
      throw new Error("Cannot require module " + "bufferutil");
    })();
    PO1.exports.mask = function (K, q, Y, z, w) {
      if (w < 48) b37(K, q, Y, z, w);else A.mask(K, q, Y, z, w);
    }, PO1.exports.unmask = function (K, q) {
      if (K.length < 32) x37(K, q);else A.unmask(K, q);
    };
  } catch (A) {}
});

// Register to shared state
__$.UxA = UxA;
