// Module: hK1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hK1 = v((n6w, nY4) => {
  nY4.exports = class {
    #A;
    constructor(K) {
      if (typeof K !== "object" || K === null) throw TypeError("handler must be an object");
      this.#A = K;
    }
    onConnect(...K) {
      return this.#A.onConnect?.(...K);
    }
    onError(...K) {
      return this.#A.onError?.(...K);
    }
    onUpgrade(...K) {
      return this.#A.onUpgrade?.(...K);
    }
    onResponseStarted(...K) {
      return this.#A.onResponseStarted?.(...K);
    }
    onHeaders(...K) {
      return this.#A.onHeaders?.(...K);
    }
    onData(...K) {
      return this.#A.onData?.(...K);
    }
    onComplete(...K) {
      return this.#A.onComplete?.(...K);
    }
    onBodySent(...K) {
      return this.#A.onBodySent?.(...K);
    }
  };
});

// Register to shared state
__$.hK1 = hK1;
