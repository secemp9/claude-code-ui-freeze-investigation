// Module: dX
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dX = v(lP5 => {
  class YOA extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(A, K = !0) {
      let q,
        Y = !0;
      if (typeof K === "boolean") q = void 0, Y = K;else if (K != null && typeof K === "object") q = K.logger, Y = K.tryNextLink ?? !0;
      super(A);
      this.tryNextLink = Y, Object.setPrototypeOf(this, YOA.prototype), q?.debug?.(`@smithy/property-provider ${Y ? "->" : "(!)"} ${A}`);
    }
    static from(A, K = !0) {
      return Object.assign(new this(A.message, K), A);
    }
  }
  class ri1 extends YOA {
    name = "CredentialsProviderError";
    constructor(A, K = !0) {
      super(A, K);
      Object.setPrototypeOf(this, ri1.prototype);
    }
  }
  class oi1 extends YOA {
    name = "TokenProviderError";
    constructor(A, K = !0) {
      super(A, K);
      Object.setPrototypeOf(this, oi1.prototype);
    }
  }
  var pP5 = (...A) => async () => {
      if (A.length === 0) throw new YOA("No providers in chain");
      let K;
      for (let q of A) try {
        return await q();
      } catch (Y) {
        if (K = Y, Y?.tryNextLink) continue;
        throw Y;
      }
      throw K;
    },
    dP5 = A => () => Promise.resolve(A),
    cP5 = (A, K, q) => {
      let Y,
        z,
        w,
        H = !1,
        J = async () => {
          if (!z) z = A();
          try {
            Y = await z, w = !0, H = !1;
          } finally {
            z = void 0;
          }
          return Y;
        };
      if (K === void 0) return async O => {
        if (!w || O?.forceRefresh) Y = await J();
        return Y;
      };
      return async O => {
        if (!w || O?.forceRefresh) Y = await J();
        if (H) return Y;
        if (q && !q(Y)) return H = !0, Y;
        if (K(Y)) return await J(), Y;
        return Y;
      };
    };
  lP5.CredentialsProviderError = ri1;
  lP5.ProviderError = YOA;
  lP5.TokenProviderError = oi1;
  lP5.chain = pP5;
  lP5.fromStatic = dP5;
  lP5.memoize = cP5;
});

// Register to shared state
__$.dX = dX;
