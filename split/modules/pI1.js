// Module: pI1
// Dependencies: Ow, o18, q68, X68, uN, UI1, r18, K68, O68, i1
//   ... and 4 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pI1 = k(() => {
  __$.Ow();
  __$.o18();
  __$.q68();
  __$.X68();
  __$.uN();
  __$.UI1 = {
    http: __$.r18,
    xhr: __$.K68,
    fetch: __$.O68
  };
  __$.i1.forEach(__$.UI1, (A, K) => {
    if (A) {
      try {
        Object.defineProperty(A, "name", {
          value: K
        });
      } catch (q) {}
      Object.defineProperty(A, "adapterName", {
        value: K
      });
    }
  });
  __$._oA = {
    getAdapter: A => {
      A = __$.i1.isArray(A) ? A : [A];
      let {
          length: K
        } = A,
        q,
        Y,
        z = {};
      for (let w = 0; w < K; w++) {
        q = A[w];
        let H;
        if (Y = q, !__$.x8q(q)) {
          if (Y = __$.UI1[(H = String(q)).toLowerCase()], Y === void 0) throw new __$.a4(`Unknown adapter '${H}'`);
        }
        if (Y) break;
        z[H || "#" + w] = Y;
      }
      if (!Y) {
        let w = Object.entries(z).map(([J, O]) => `adapter ${J} ` + (O === !1 ? "is not supported by the environment" : "is not available in the build")),
          H = K ? w.length > 1 ? `since :
` + w.map(__$.$68).join(`
`) : " " + __$.$68(w[0]) : "as no adapter specified";
        throw new __$.a4("There is no suitable adapter to dispatch the request " + H, "ERR_NOT_SUPPORT");
      }
      return Y;
    },
    adapters: __$.UI1
  };
});

// Register to shared state
__$.pI1 = pI1;
