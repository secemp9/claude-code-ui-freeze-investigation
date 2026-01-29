// Module: Vd1
// Dependencies: yb, UE, Li, wJA, qO, ZJ, j5, QR

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Vd1 = k(() => {
  __$.yb();
  __$.UE();
  __$.Li();
  __$.wJA = class wJA extends __$.qO {
    retrieve(A, K = {}, q) {
      let {
        betas: Y
      } = K ?? {};
      return this._client.get(__$.ZJ`/v1/models/${A}`, {
        ...q,
        headers: __$.j5([{
          ...(Y?.toString() != null ? {
            "anthropic-beta": Y?.toString()
          } : void 0)
        }, q?.headers])
      });
    }
    list(A = {}, K) {
      let {
        betas: q,
        ...Y
      } = A ?? {};
      return this._client.getAPIList("/v1/models", __$.QR, {
        query: Y,
        ...K,
        headers: __$.j5([{
          ...(q?.toString() != null ? {
            "anthropic-beta": q?.toString()
          } : void 0)
        }, K?.headers])
      });
    }
  };
});

// Register to shared state
__$.Vd1 = Vd1;
