// Module: DJ7
// Dependencies: DW6, BW6, Q01

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DJ7 = k(() => {
  __$.DW6();
  __$.BW6 = class BW6 extends TransformStream {
    constructor({
      onError: A,
      onRetry: K,
      onComment: q
    } = {}) {
      let Y;
      super({
        start(z) {
          Y = __$.Q01({
            onEvent: w => {
              z.enqueue(w);
            },
            onError(w) {
              A === "terminate" ? z.error(w) : typeof A == "function" && A(w);
            },
            onRetry: K,
            onComment: q
          });
        },
        transform(z) {
          Y.feed(z);
        }
      });
    }
  };
});

// Register to shared state
__$.DJ7 = DJ7;
