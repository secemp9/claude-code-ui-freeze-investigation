// Module: Ty6
// Dependencies: p8K, d8K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ty6 = v(l8K => {
  Object.defineProperty(l8K, "__esModule", {
    value: !0
  });
  l8K.FetchHTTPClient = void 0;
  var gW2 = __$.p8K(),
    FW2 = __$.d8K();
  class c8K {
    constructor(A) {
      this._fetch = A ?? FW2.fetch;
    }
    async makeRequest(A) {
      let [K, q] = (0, gW2.abortSignalAfterTimeout)(A.httpRequestTimeout),
        Y = {
          url: A.url,
          method: A.method,
          headers: A.headers,
          body: JSON.stringify(A.data),
          signal: K
        };
      return this._fetch(A.url, Y).finally(() => clearTimeout(q));
    }
  }
  l8K.FetchHTTPClient = c8K;
});

// Register to shared state
__$.Ty6 = Ty6;
