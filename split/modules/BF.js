// Module: BF
// Dependencies: ix8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BF = v(Y05 => {
  var A05 = __$.ix8();
  function K05(A) {
    return A;
  }
  var nx8 = A => K => async q => {
      if (!A05.HttpRequest.isInstance(q.request)) return K(q);
      let {
          request: Y
        } = q,
        {
          handlerProtocol: z = ""
        } = A.requestHandler.metadata || {};
      if (z.indexOf("h2") >= 0 && !Y.headers[":authority"]) delete Y.headers.host, Y.headers[":authority"] = Y.hostname + (Y.port ? ":" + Y.port : "");else if (!Y.headers.host) {
        let w = Y.hostname;
        if (Y.port != null) w += `:${Y.port}`;
        Y.headers.host = w;
      }
      return K(q);
    },
    rx8 = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: !0
    },
    q05 = A => ({
      applyToStack: K => {
        K.add(nx8(A), rx8);
      }
    });
  Y05.getHostHeaderPlugin = q05;
  Y05.hostHeaderMiddleware = nx8;
  Y05.hostHeaderMiddlewareOptions = rx8;
  Y05.resolveHostHeaderConfig = K05;
});

// Register to shared state
__$.BF = BF;
