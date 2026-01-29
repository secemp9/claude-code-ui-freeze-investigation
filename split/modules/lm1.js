// Module: lm1
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lm1 = v(sE8 => {
  Object.defineProperty(sE8, "__esModule", {
    value: !0
  });
  var OV = __$.sq(),
    iE8 = __$.H8();
  function lE8(A) {
    return A && A.statusCode !== void 0;
  }
  function A15(A) {
    return A && A.error !== void 0;
  }
  function K15(A) {
    OV.captureException(A, {
      mechanism: {
        type: "hapi",
        handled: !1,
        data: {
          function: "hapiErrorPlugin"
        }
      }
    });
  }
  var nE8 = {
      name: "SentryHapiErrorPlugin",
      version: OV.SDK_VERSION,
      register: async function (A) {
        A.events.on("request", (q, Y) => {
          let z = OV.getActiveTransaction();
          if (A15(Y)) K15(Y.error);
          if (z) z.setStatus("internal_error"), z.end();
        });
      }
    },
    rE8 = {
      name: "SentryHapiTracingPlugin",
      version: OV.SDK_VERSION,
      register: async function (A) {
        let K = A;
        K.ext("onPreHandler", (q, Y) => {
          let z = OV.continueTrace({
            sentryTrace: q.headers["sentry-trace"] || void 0,
            baggage: q.headers.baggage || void 0
          }, w => {
            return OV.startTransaction({
              ...w,
              op: "hapi.request",
              name: q.route.path,
              description: `${q.route.method} ${q.path}`
            });
          });
          return OV.getCurrentScope().setSpan(z), Y.continue;
        }), K.ext("onPreResponse", (q, Y) => {
          let z = OV.getActiveTransaction();
          if (q.response && lE8(q.response) && z) {
            let w = q.response;
            w.header("sentry-trace", OV.spanToTraceHeader(z));
            let H = iE8.dynamicSamplingContextToSentryBaggageHeader(OV.getDynamicSamplingContextFromSpan(z));
            if (H) w.header("baggage", H);
          }
          return Y.continue;
        }), K.ext("onPostHandler", (q, Y) => {
          let z = OV.getActiveTransaction();
          if (z) {
            if (q.response && lE8(q.response)) OV.setHttpStatus(z, q.response.statusCode);
            z.end();
          }
          return Y.continue;
        });
      }
    },
    oE8 = "Hapi",
    q15 = (A = {}) => {
      let K = A.server;
      return {
        name: oE8,
        setupOnce() {
          if (!K) return;
          iE8.fill(K, "start", q => {
            return async function () {
              return await this.register(rE8), await this.register(nE8), q.apply(this);
            };
          });
        }
      };
    },
    aE8 = OV.defineIntegration(q15),
    Y15 = OV.convertIntegrationFnToClass(oE8, aE8);
  sE8.Hapi = Y15;
  sE8.hapiErrorPlugin = nE8;
  sE8.hapiIntegration = aE8;
  sE8.hapiTracingPlugin = rE8;
});

// Register to shared state
__$.lm1 = lm1;
