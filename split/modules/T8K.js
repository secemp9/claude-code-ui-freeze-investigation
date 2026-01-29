// Module: T8K
// Dependencies: It, P8K

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var T8K = v(f8K => {
  Object.defineProperty(f8K, "__esModule", {
    value: !0
  });
  f8K.NodeEventFactory = void 0;
  var TW2 = __$.It(),
    vW2 = __$.P8K();
  class V8K extends TW2.EventFactory {
    constructor() {
      super({
        createMessageId: vW2.createMessageId
      });
    }
  }
  f8K.NodeEventFactory = V8K;
});

// Register to shared state
__$.T8K = T8K;
