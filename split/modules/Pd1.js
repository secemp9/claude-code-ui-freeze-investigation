// Module: Pd1
// Dependencies: Iy8, Md1, rp1, aN, qO, kkA, Sy8, TA1, EkA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pd1 = k(() => {
  __$.Iy8();
  __$.Md1();
  __$.Md1();
  __$.rp1();
  __$.aN = class aN extends __$.qO {
    constructor() {
      super(...arguments);
      this.batches = new __$.kkA(this._client);
    }
    create(A, K) {
      if (A.model in __$.Sy8) console.warn(`The model '${A.model}' is deprecated and will reach end-of-life on ${__$.Sy8[A.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
      let q = this._client._options.timeout;
      if (!A.stream && q == null) {
        let Y = __$.TA1[A.model] ?? void 0;
        q = this._client.calculateNonstreamingTimeout(A.max_tokens, Y);
      }
      return this._client.post("/v1/messages", {
        body: A,
        timeout: q ?? 600000,
        ...K,
        stream: A.stream ?? !1
      });
    }
    stream(A, K) {
      return __$.EkA.createMessage(this, A, K);
    }
    countTokens(A, K) {
      return this._client.post("/v1/messages/count_tokens", {
        body: A,
        ...K
      });
    }
  };
  __$.Sy8 = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
    "claude-3-sonnet-20240229": "July 21st, 2025",
    "claude-3-opus-20240229": "January 5th, 2026",
    "claude-2.1": "July 21st, 2025",
    "claude-2.0": "July 21st, 2025",
    "claude-3-7-sonnet-latest": "February 19th, 2026",
    "claude-3-7-sonnet-20250219": "February 19th, 2026"
  };
  __$.aN.Batches = __$.kkA;
});

// Register to shared state
__$.Pd1 = Pd1;
