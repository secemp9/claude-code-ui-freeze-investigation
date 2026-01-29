// Module: Hu8
// Dependencies: tx8, Yu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hu8 = v(zu8 => {
  Object.defineProperty(zu8, "__esModule", {
    value: !0
  });
  zu8.recursionDetectionMiddleware = void 0;
  var m05 = __$.tx8(),
    g05 = __$.Yu8(),
    zl1 = "X-Amzn-Trace-Id",
    F05 = "AWS_LAMBDA_FUNCTION_NAME",
    Q05 = "_X_AMZN_TRACE_ID",
    U05 = () => A => async K => {
      let {
        request: q
      } = K;
      if (!g05.HttpRequest.isInstance(q)) return A(K);
      let Y = Object.keys(q.headers ?? {}).find($ => $.toLowerCase() === zl1.toLowerCase()) ?? zl1;
      if (q.headers.hasOwnProperty(Y)) return A(K);
      let z = process.env[F05],
        w = process.env[Q05],
        O = (await m05.InvokeStore.getInstanceAsync())?.getXRayTraceId() ?? w,
        X = $ => typeof $ === "string" && $.length > 0;
      if (X(z) && X(O)) q.headers[zl1] = O;
      return A({
        ...K,
        request: q
      });
    };
  zu8.recursionDetectionMiddleware = U05;
});

// Register to shared state
__$.Hu8 = Hu8;
