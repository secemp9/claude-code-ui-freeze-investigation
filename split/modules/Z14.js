// Module: Z14
// Dependencies: J14

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z14 = v(tM3 => {
  var O14 = __$.J14();
  function aM3(A) {
    let {
        signer: K,
        signer: q
      } = A,
      Y = Object.assign(A, {
        eventSigner: K,
        messageSigner: q
      }),
      z = Y.eventStreamPayloadHandlerProvider(Y);
    return Object.assign(Y, {
      eventStreamPayloadHandler: z
    });
  }
  var X14 = A => (K, q) => async Y => {
      let {
        request: z
      } = Y;
      if (!O14.HttpRequest.isInstance(z)) return K(Y);
      return A.eventStreamPayloadHandler.handle(K, Y, q);
    },
    $14 = {
      tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
      name: "eventStreamHandlingMiddleware",
      relation: "after",
      toMiddleware: "awsAuthMiddleware",
      override: !0
    },
    _14 = A => async K => {
      let {
        request: q
      } = K;
      if (!O14.HttpRequest.isInstance(q)) return A(K);
      return q.headers = {
        ...q.headers,
        "content-type": "application/vnd.amazon.eventstream",
        "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS"
      }, A({
        ...K,
        request: q
      });
    },
    G14 = {
      step: "build",
      tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
      name: "eventStreamHeaderMiddleware",
      override: !0
    },
    sM3 = A => ({
      applyToStack: K => {
        K.addRelativeTo(X14(A), $14), K.add(_14, G14);
      }
    });
  tM3.eventStreamHandlingMiddleware = X14;
  tM3.eventStreamHandlingMiddlewareOptions = $14;
  tM3.eventStreamHeaderMiddleware = _14;
  tM3.eventStreamHeaderMiddlewareOptions = G14;
  tM3.getEventStreamPlugin = sM3;
  tM3.resolveEventStreamConfig = aM3;
});

// Register to shared state
__$.Z14 = Z14;
