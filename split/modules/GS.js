// Module: GS
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GS = v(Cb7 => {
  Object.defineProperty(Cb7, "__esModule", {
    value: !0
  });
  Cb7.equalsCaseInsensitive = Cb7.binarySearchUB = Cb7.setEquals = Cb7.FlatMap = Cb7.isPromiseAllSettledRejectionResult = Cb7.PromiseAllSettled = Cb7.callWithTimeout = Cb7.TimeoutError = Cb7.instrumentationScopeId = Cb7.hashAttributes = Cb7.isNotNullish = void 0;
  function YeY(A) {
    return A !== void 0 && A !== null;
  }
  Cb7.isNotNullish = YeY;
  function zeY(A) {
    let K = Object.keys(A);
    if (K.length === 0) return "";
    return K = K.sort(), JSON.stringify(K.map(q => [q, A[q]]));
  }
  Cb7.hashAttributes = zeY;
  function weY(A) {
    return `${A.name}:${A.version ?? ""}:${A.schemaUrl ?? ""}`;
  }
  Cb7.instrumentationScopeId = weY;
  class lW1 extends Error {
    constructor(A) {
      super(A);
      Object.setPrototypeOf(this, lW1.prototype);
    }
  }
  Cb7.TimeoutError = lW1;
  function HeY(A, K) {
    let q,
      Y = new Promise(function (w, H) {
        q = setTimeout(function () {
          H(new lW1("Operation timed out."));
        }, K);
      });
    return Promise.race([A, Y]).then(z => {
      return clearTimeout(q), z;
    }, z => {
      throw clearTimeout(q), z;
    });
  }
  Cb7.callWithTimeout = HeY;
  async function JeY(A) {
    return Promise.all(A.map(async K => {
      try {
        return {
          status: "fulfilled",
          value: await K
        };
      } catch (q) {
        return {
          status: "rejected",
          reason: q
        };
      }
    }));
  }
  Cb7.PromiseAllSettled = JeY;
  function OeY(A) {
    return A.status === "rejected";
  }
  Cb7.isPromiseAllSettledRejectionResult = OeY;
  function XeY(A, K) {
    let q = [];
    return A.forEach(Y => {
      q.push(...K(Y));
    }), q;
  }
  Cb7.FlatMap = XeY;
  function $eY(A, K) {
    if (A.size !== K.size) return !1;
    for (let q of A) if (!K.has(q)) return !1;
    return !0;
  }
  Cb7.setEquals = $eY;
  function _eY(A, K) {
    let q = 0,
      Y = A.length - 1,
      z = A.length;
    while (Y >= q) {
      let w = q + Math.trunc((Y - q) / 2);
      if (A[w] < K) q = w + 1;else z = w, Y = w - 1;
    }
    return z;
  }
  Cb7.binarySearchUB = _eY;
  function GeY(A, K) {
    return A.toLowerCase() === K.toLowerCase();
  }
  Cb7.equalsCaseInsensitive = GeY;
});

// Register to shared state
__$.GS = GS;
