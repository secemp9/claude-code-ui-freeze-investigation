// Module: qB8
// Dependencies: Sl1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qB8 = v(AB8 => {
  Object.defineProperty(AB8, "__esModule", {
    value: !0
  });
  AB8.createBufferedReadable = void 0;
  AB8.createBufferedReadableStream = su8;
  AB8.merge = tu8;
  AB8.flush = H61;
  AB8.sizeOf = aJA;
  AB8.modeOf = eu8;
  var r$5 = __$.Sl1();
  function su8(A, K, q) {
    let Y = A.getReader(),
      z = !1,
      w = 0,
      H = ["", new r$5.ByteArrayCollector(X => new Uint8Array(X))],
      J = -1,
      O = async X => {
        let {
            value: $,
            done: _
          } = await Y.read(),
          G = $;
        if (_) {
          if (J !== -1) {
            let Z = H61(H, J);
            if (aJA(Z) > 0) X.enqueue(Z);
          }
          X.close();
        } else {
          let Z = eu8(G, !1);
          if (J !== Z) {
            if (J >= 0) X.enqueue(H61(H, J));
            J = Z;
          }
          if (J === -1) {
            X.enqueue(G);
            return;
          }
          let W = aJA(G);
          w += W;
          let D = aJA(H[J]);
          if (W >= K && D === 0) X.enqueue(G);else {
            let j = tu8(H, J, G);
            if (!z && w > K * 2) z = !0, q?.warn(`@smithy/util-stream - stream chunk size ${W} is below threshold of ${K}, automatically buffering.`);
            if (j >= K) X.enqueue(H61(H, J));else await O(X);
          }
        }
      };
    return new ReadableStream({
      pull: O
    });
  }
  AB8.createBufferedReadable = su8;
  function tu8(A, K, q) {
    switch (K) {
      case 0:
        return A[0] += q, aJA(A[0]);
      case 1:
      case 2:
        return A[K].push(q), aJA(A[K]);
    }
  }
  function H61(A, K) {
    switch (K) {
      case 0:
        let q = A[0];
        return A[0] = "", q;
      case 1:
      case 2:
        return A[K].flush();
    }
    throw Error(`@smithy/util-stream - invalid index ${K} given to flush()`);
  }
  function aJA(A) {
    return A?.byteLength ?? A?.length ?? 0;
  }
  function eu8(A, K = !0) {
    if (K && typeof Buffer < "u" && A instanceof Buffer) return 2;
    if (A instanceof Uint8Array) return 1;
    if (typeof A === "string") return 0;
    return -1;
  }
});

// Register to shared state
__$.qB8 = qB8;
