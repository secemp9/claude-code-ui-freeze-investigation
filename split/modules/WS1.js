// Module: WS1
// Dependencies: PoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WS1 = v(i88 => {
  Object.defineProperty(i88, "__esModule", {
    value: !0
  });
  i88.Scheduler = void 0;
  var W7q = __$.PoA(),
    D7q = function () {
      function A(K, q) {
        if (q === void 0) q = A.now;
        this.schedulerActionCtor = K, this.now = q;
      }
      return A.prototype.schedule = function (K, q, Y) {
        if (q === void 0) q = 0;
        return new this.schedulerActionCtor(this, K).schedule(Y, q);
      }, A.now = W7q.dateTimestampProvider.now, A;
    }();
  i88.Scheduler = D7q;
});

// Register to shared state
__$.WS1 = WS1;
