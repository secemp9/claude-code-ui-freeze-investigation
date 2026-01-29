// Module: ZQ7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZQ7 = v(_Q7 => {
  Object.defineProperty(_Q7, "__esModule", {
    value: !0
  });
  _Q7.createRetryingTransport = void 0;
  var x42 = 5,
    u42 = 1000,
    B42 = 5000,
    m42 = 1.5,
    XQ7 = 0.2;
  function g42() {
    return Math.random() * (2 * XQ7) - XQ7;
  }
  class $Q7 {
    _transport;
    constructor(A) {
      this._transport = A;
    }
    retry(A, K, q) {
      return new Promise((Y, z) => {
        setTimeout(() => {
          this._transport.send(A, K).then(Y, z);
        }, q);
      });
    }
    async send(A, K) {
      let q = Date.now() + K,
        Y = await this._transport.send(A, K),
        z = x42,
        w = u42;
      while (Y.status === "retryable" && z > 0) {
        z--;
        let H = Math.max(Math.min(w, B42) + g42(), 0);
        w = w * m42;
        let J = Y.retryInMillis ?? H,
          O = q - Date.now();
        if (J > O) return Y;
        Y = await this.retry(A, O, J);
      }
      return Y;
    }
    shutdown() {
      return this._transport.shutdown();
    }
  }
  function F42(A) {
    return new $Q7(A.transport);
  }
  _Q7.createRetryingTransport = F42;
});

// Register to shared state
__$.ZQ7 = ZQ7;
