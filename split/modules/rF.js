// Module: rF
// Dependencies: LU8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rF = v(sE5 => {
  var oE5 = __$.LU8(),
    RU8 = "content-length";
  function yU8(A) {
    return K => async q => {
      let Y = q.request;
      if (oE5.HttpRequest.isInstance(Y)) {
        let {
          body: z,
          headers: w
        } = Y;
        if (z && Object.keys(w).map(H => H.toLowerCase()).indexOf(RU8) === -1) try {
          let H = A(z);
          Y.headers = {
            ...Y.headers,
            [RU8]: String(H)
          };
        } catch (H) {}
      }
      return K({
        ...q,
        request: Y
      });
    };
  }
  var IU8 = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: !0
    },
    aE5 = A => ({
      applyToStack: K => {
        K.add(yU8(A.bodyLengthChecker), IU8);
      }
    });
  sE5.contentLengthMiddleware = yU8;
  sE5.contentLengthMiddlewareOptions = IU8;
  sE5.getContentLengthPlugin = aE5;
});

// Register to shared state
__$.rF = rF;
