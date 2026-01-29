// Module: R8K
// Dependencies: It, tM1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R8K = v(C8K => {
  Object.defineProperty(C8K, "__esModule", {
    value: !0
  });
  C8K.dispatchAndEmit = void 0;
  var kW2 = __$.It(),
    CW2 = __$.tM1(),
    LW2 = A => K => {
      let q = K.failedDelivery();
      return q ? A(q.reason, K) : A(void 0, K);
    },
    RW2 = async (A, K, q, Y) => {
      try {
        let z = new CW2.Context(A),
          w = await (0, kW2.dispatch)(z, K, q, {
            ...(Y ? {
              callback: LW2(Y)
            } : {})
          }),
          H = w.failedDelivery();
        if (H) q.emit("error", {
          code: "delivery_failure",
          reason: H.reason,
          ctx: w
        });else q.emit(A.type, w);
      } catch (z) {
        q.emit("error", {
          code: "unknown",
          reason: z
        });
      }
    };
  C8K.dispatchAndEmit = RW2;
});

// Register to shared state
__$.R8K = R8K;
