// Module: $94
// Dependencies: YRA, TK1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $94 = v((y6w, X94) => {
  var wp3 = __$.YRA(),
    Hp3 = __$.TK1();
  class O94 extends wp3 {
    #A = null;
    #K = null;
    constructor(A, K = {}) {
      super(K);
      this.#A = A, this.#K = K;
    }
    dispatch(A, K) {
      let q = new Hp3({
        ...A,
        retryOptions: this.#K
      }, {
        dispatch: this.#A.dispatch.bind(this.#A),
        handler: K
      });
      return this.#A.dispatch(A, q);
    }
    close() {
      return this.#A.close();
    }
    destroy() {
      return this.#A.destroy();
    }
  }
  X94.exports = O94;
});

// Register to shared state
__$.$94 = $94;
