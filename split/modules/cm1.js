// Module: cm1
// Dependencies: H8, sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cm1 = v(gE8 => {
  var {
    _optionalChain: BE8
  } = __$.H8();
  Object.defineProperty(gE8, "__esModule", {
    value: !0
  });
  var hHA = __$.sq(),
    mE8 = __$.H8();
  function bA5(A = {}) {
    return function ({
      path: K,
      type: q,
      next: Y,
      rawInput: z
    }) {
      let w = BE8([hHA.getClient, "call", X => X(), "optionalAccess", X => X.getOptions, "call", X => X()]),
        H = hHA.getCurrentScope().getTransaction();
      if (H) {
        H.updateName(`trpc/${K}`), H.setAttribute(hHA.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"), H.op = "rpc.server";
        let X = {
          procedure_type: q
        };
        if (A.attachRpcInput !== void 0 ? A.attachRpcInput : BE8([w, "optionalAccess", $ => $.sendDefaultPii])) X.input = mE8.normalize(z);
        H.setContext("trpc", X);
      }
      function J(X) {
        if (!X.ok) hHA.captureException(X.error, {
          mechanism: {
            handled: !1,
            data: {
              function: "trpcMiddleware"
            }
          }
        });
      }
      let O;
      try {
        O = Y();
      } catch (X) {
        throw hHA.captureException(X, {
          mechanism: {
            handled: !1,
            data: {
              function: "trpcMiddleware"
            }
          }
        }), X;
      }
      if (mE8.isThenable(O)) Promise.resolve(O).then(X => {
        J(X);
      }, X => {
        hHA.captureException(X, {
          mechanism: {
            handled: !1,
            data: {
              function: "trpcMiddleware"
            }
          }
        });
      });else J(O);
      return O;
    };
  }
  gE8.trpcMiddleware = bA5;
});

// Register to shared state
__$.cm1 = cm1;
