// Module: Jd1
// Dependencies: rp1, UE, sp1, Ty8, zd1, Hd1, Ey8, S6A, qO, MkA
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jd1 = k(() => {
  __$.rp1();
  __$.UE();
  __$.sp1();
  __$.Ty8();
  __$.zd1();
  __$.Hd1();
  __$.Hd1();
  __$.zd1();
  __$.Ey8 = {
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
  __$.S6A = class S6A extends __$.qO {
    constructor() {
      super(...arguments);
      this.batches = new __$.MkA(this._client);
    }
    create(A, K) {
      let {
        betas: q,
        ...Y
      } = A;
      if (Y.model in __$.Ey8) console.warn(`The model '${Y.model}' is deprecated and will reach end-of-life on ${__$.Ey8[Y.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
      let z = this._client._options.timeout;
      if (!Y.stream && z == null) {
        let w = __$.TA1[Y.model] ?? void 0;
        z = this._client.calculateNonstreamingTimeout(Y.max_tokens, w);
      }
      return this._client.post("/v1/messages?beta=true", {
        body: Y,
        timeout: z ?? 600000,
        ...K,
        headers: __$.j5([{
          ...(q?.toString() != null ? {
            "anthropic-beta": q?.toString()
          } : void 0)
        }, K?.headers]),
        stream: A.stream ?? !1
      });
    }
    parse(A, K) {
      return K = {
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(A.betas ?? []), "structured-outputs-2025-09-17"].toString()
        }, K?.headers])
      }, this.create(A, K).then(q => __$.ap1(q, A));
    }
    stream(A, K) {
      return __$.ZkA.createMessage(this, A, K);
    }
    countTokens(A, K) {
      let {
        betas: q,
        ...Y
      } = A;
      return this._client.post("/v1/messages/count_tokens?beta=true", {
        body: Y,
        ...K,
        headers: __$.j5([{
          "anthropic-beta": [...(q ?? []), "token-counting-2024-11-01"].toString()
        }, K?.headers])
      });
    }
    toolRunner(A, K) {
      return new __$.jkA(this._client, A, K);
    }
  };
  __$.S6A.Batches = __$.MkA;
  __$.S6A.BetaToolRunner = __$.jkA;
});

// Register to shared state
__$.Jd1 = Jd1;
