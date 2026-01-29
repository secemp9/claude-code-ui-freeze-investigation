// Module: ntA
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ntA = v(jE8 => {
  Object.defineProperty(jE8, "__esModule", {
    value: !0
  });
  var feq = CA("http"),
    Neq = CA("url"),
    GE8 = __$.sq(),
    IHA = __$.H8(),
    ZE8 = "Spotlight",
    Teq = (A = {}) => {
      let K = {
        sidecarUrl: A.sidecarUrl || "http://localhost:8969/stream"
      };
      return {
        name: ZE8,
        setupOnce() {},
        setup(q) {
          if (typeof process === "object" && process.env) IHA.logger.warn("[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?");
          Eeq(q, K);
        }
      };
    },
    WE8 = GE8.defineIntegration(Teq),
    veq = GE8.convertIntegrationFnToClass(ZE8, WE8);
  function Eeq(A, K) {
    let q = keq(K.sidecarUrl);
    if (!q) return;
    let Y = 0;
    if (typeof A.on !== "function") {
      IHA.logger.warn("[Spotlight] Cannot connect to spotlight due to missing method on SDK client (`client.on`)");
      return;
    }
    A.on("beforeEnvelope", z => {
      if (Y > 3) {
        IHA.logger.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests");
        return;
      }
      let w = IHA.serializeEnvelope(z),
        J = DE8()({
          method: "POST",
          path: q.pathname,
          hostname: q.hostname,
          port: q.port,
          headers: {
            "Content-Type": "application/x-sentry-envelope"
          }
        }, O => {
          O.on("data", () => {}), O.on("end", () => {}), O.setEncoding("utf8");
        });
      J.on("error", () => {
        Y++, IHA.logger.warn("[Spotlight] Failed to send envelope to Spotlight Sidecar");
      }), J.write(w), J.end();
    });
  }
  function keq(A) {
    try {
      return new Neq.URL(`${A}`);
    } catch (K) {
      IHA.logger.warn(`[Spotlight] Invalid sidecar URL: ${A}`);
      return;
    }
  }
  function DE8() {
    let {
      request: A
    } = feq;
    if (Ceq(A)) return A.__sentry_original__;
    return A;
  }
  function Ceq(A) {
    return "__sentry_original__" in A;
  }
  jE8.Spotlight = veq;
  jE8.getNativeHttpRequest = DE8;
  jE8.spotlightIntegration = WE8;
});

// Register to shared state
__$.ntA = ntA;
