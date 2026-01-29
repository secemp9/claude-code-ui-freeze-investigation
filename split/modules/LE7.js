// Module: LE7
// Dependencies: DB

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LE7 = v((Z_H, CE7) => {
  var ggY = __$.DB();
  class kE7 extends ggY {
    constructor(A, K) {
      super(A);
      this.onItemPop = K.onItemPop;
    }
    _getOverriddenMethods(A, K) {
      return {
        pop() {
          A.onItemPop(this.current), K.pop.call(this);
        },
        popAllUpToHtmlElement() {
          for (let q = this.stackTop; q > 0; q--) A.onItemPop(this.items[q]);
          K.popAllUpToHtmlElement.call(this);
        },
        remove(q) {
          A.onItemPop(this.current), K.remove.call(this, q);
        }
      };
    }
  }
  CE7.exports = kE7;
});

// Register to shared state
__$.LE7 = LE7;
