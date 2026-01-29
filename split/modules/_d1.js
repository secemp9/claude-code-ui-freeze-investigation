// Module: _d1
// Dependencies: UE, Ii, qO, j5

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _d1 = k(() => {
  __$.UE();
  __$.Ii = class Ii extends __$.qO {
    create(A, K) {
      let {
        betas: q,
        ...Y
      } = A;
      return this._client.post("/v1/complete", {
        body: Y,
        timeout: this._client._options.timeout ?? 600000,
        ...K,
        headers: __$.j5([{
          ...(q?.toString() != null ? {
            "anthropic-beta": q?.toString()
          } : void 0)
        }, K?.headers]),
        stream: A.stream ?? !1
      });
    }
  };
});

// Register to shared state
__$._d1 = _d1;
