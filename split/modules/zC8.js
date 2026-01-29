// Module: zC8
// Dependencies: sq, H8, ovA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zC8 = v(YC8 => {
  Object.defineProperty(YC8, "__esModule", {
    value: !0
  });
  var $F = __$.sq(),
    vb = __$.H8(),
    KeA = __$.ovA(),
    sk8 = "HttpClient",
    B65 = (A = {}) => {
      let K = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...A
      };
      return {
        name: sk8,
        setupOnce() {},
        setup(q) {
          l65(q, K), i65(q, K);
        }
      };
    },
    tk8 = $F.defineIntegration(B65),
    m65 = $F.convertIntegrationFnToClass(sk8, tk8);
  function g65(A, K, q, Y) {
    if (AC8(A, q.status, q.url)) {
      let z = n65(K, Y),
        w,
        H,
        J,
        O;
      if (qC8()) [{
        headers: w,
        cookies: J
      }, {
        headers: H,
        cookies: O
      }] = [{
        cookieHeader: "Cookie",
        obj: z
      }, {
        cookieHeader: "Set-Cookie",
        obj: q
      }].map(({
        cookieHeader: $,
        obj: _
      }) => {
        let G = U65(_.headers),
          Z;
        try {
          let W = G[$] || G[$.toLowerCase()] || void 0;
          if (W) Z = ek8(W);
        } catch (W) {
          KeA.DEBUG_BUILD && vb.logger.log(`Could not extract cookies from header ${$}`);
        }
        return {
          headers: G,
          cookies: Z
        };
      });
      let X = KC8({
        url: z.url,
        method: z.method,
        status: q.status,
        requestHeaders: w,
        responseHeaders: H,
        requestCookies: J,
        responseCookies: O
      });
      $F.captureEvent(X);
    }
  }
  function F65(A, K, q, Y) {
    if (AC8(A, K.status, K.responseURL)) {
      let z, w, H;
      if (qC8()) {
        try {
          let O = K.getResponseHeader("Set-Cookie") || K.getResponseHeader("set-cookie") || void 0;
          if (O) w = ek8(O);
        } catch (O) {
          KeA.DEBUG_BUILD && vb.logger.log("Could not extract cookies from response headers");
        }
        try {
          H = p65(K);
        } catch (O) {
          KeA.DEBUG_BUILD && vb.logger.log("Could not extract headers from response");
        }
        z = Y;
      }
      let J = KC8({
        url: K.responseURL,
        method: q,
        status: K.status,
        requestHeaders: z,
        responseHeaders: H,
        responseCookies: w
      });
      $F.captureEvent(J);
    }
  }
  function Q65(A) {
    if (A) {
      let K = A["Content-Length"] || A["content-length"];
      if (K) return parseInt(K, 10);
    }
    return;
  }
  function ek8(A) {
    return A.split("; ").reduce((K, q) => {
      let [Y, z] = q.split("=");
      return K[Y] = z, K;
    }, {});
  }
  function U65(A) {
    let K = {};
    return A.forEach((q, Y) => {
      K[Y] = q;
    }), K;
  }
  function p65(A) {
    let K = A.getAllResponseHeaders();
    if (!K) return {};
    return K.split(`\r
`).reduce((q, Y) => {
      let [z, w] = Y.split(": ");
      return q[z] = w, q;
    }, {});
  }
  function d65(A, K) {
    return A.some(q => {
      if (typeof q === "string") return K.includes(q);
      return q.test(K);
    });
  }
  function c65(A, K) {
    return A.some(q => {
      if (typeof q === "number") return q === K;
      return K >= q[0] && K <= q[1];
    });
  }
  function l65(A, K) {
    if (!vb.supportsNativeFetch()) return;
    vb.addFetchInstrumentationHandler(q => {
      if ($F.getClient() !== A) return;
      let {
          response: Y,
          args: z
        } = q,
        [w, H] = z;
      if (!Y) return;
      g65(K, w, Y, H);
    });
  }
  function i65(A, K) {
    if (!("XMLHttpRequest" in vb.GLOBAL_OBJ)) return;
    vb.addXhrInstrumentationHandler(q => {
      if ($F.getClient() !== A) return;
      let Y = q.xhr,
        z = Y[vb.SENTRY_XHR_DATA_KEY];
      if (!z) return;
      let {
        method: w,
        request_headers: H
      } = z;
      try {
        F65(K, Y, w, H);
      } catch (J) {
        KeA.DEBUG_BUILD && vb.logger.warn("Error while extracting response event form XHR response", J);
      }
    });
  }
  function AC8(A, K, q) {
    return c65(A.failedRequestStatusCodes, K) && d65(A.failedRequestTargets, q) && !$F.isSentryRequestUrl(q, $F.getClient());
  }
  function KC8(A) {
    let K = `HTTP Client Error with status code: ${A.status}`,
      q = {
        message: K,
        exception: {
          values: [{
            type: "Error",
            value: K
          }]
        },
        request: {
          url: A.url,
          method: A.method,
          headers: A.requestHeaders,
          cookies: A.requestCookies
        },
        contexts: {
          response: {
            status_code: A.status,
            headers: A.responseHeaders,
            cookies: A.responseCookies,
            body_size: Q65(A.responseHeaders)
          }
        }
      };
    return vb.addExceptionMechanism(q, {
      type: "http.client",
      handled: !1
    }), q;
  }
  function n65(A, K) {
    if (!K && A instanceof Request) return A;
    if (A instanceof Request && A.bodyUsed) return A;
    return new Request(A, K);
  }
  function qC8() {
    let A = $F.getClient();
    return A ? Boolean(A.getOptions().sendDefaultPii) : !1;
  }
  YC8.HttpClient = m65;
  YC8.httpClientIntegration = tk8;
});

// Register to shared state
__$.zC8 = zC8;
