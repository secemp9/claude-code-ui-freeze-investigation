// Module: kQ7
// Dependencies: P9, RK, NE6, BgA, MD1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kQ7 = v(vQ7 => {
  Object.defineProperty(vQ7, "__esModule", {
    value: !0
  });
  vQ7.getNodeHttpConfigurationFromEnvironment = void 0;
  var r42 = CA("fs"),
    o42 = CA("path"),
    RB = __$.P9(),
    PD1 = __$.RK(),
    a42 = __$.NE6(),
    s42 = __$.BgA(),
    t42 = __$.MD1();
  function e42(A) {
    let K = (0, RB.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${A}_HEADERS`),
      q = (0, RB.getStringFromEnv)("OTEL_EXPORTER_OTLP_HEADERS"),
      Y = (0, RB.parseKeyPairsIntoRecord)(K),
      z = (0, RB.parseKeyPairsIntoRecord)(q);
    if (Object.keys(Y).length === 0 && Object.keys(z).length === 0) return;
    return Object.assign({}, (0, RB.parseKeyPairsIntoRecord)(q), (0, RB.parseKeyPairsIntoRecord)(K));
  }
  function A72(A) {
    try {
      return new URL(A).toString();
    } catch {
      PD1.diag.warn(`Configuration: Could not parse environment-provided export URL: '${A}', falling back to undefined`);
      return;
    }
  }
  function K72(A, K) {
    try {
      new URL(A);
    } catch {
      PD1.diag.warn(`Configuration: Could not parse environment-provided export URL: '${A}', falling back to undefined`);
      return;
    }
    if (!A.endsWith("/")) A = A + "/";
    A += K;
    try {
      new URL(A);
    } catch {
      PD1.diag.warn(`Configuration: Provided URL appended with '${K}' is not a valid URL, using 'undefined' instead of '${A}'`);
      return;
    }
    return A;
  }
  function q72(A) {
    let K = (0, RB.getStringFromEnv)("OTEL_EXPORTER_OTLP_ENDPOINT");
    if (K === void 0) return;
    return K72(K, A);
  }
  function Y72(A) {
    let K = (0, RB.getStringFromEnv)(`OTEL_EXPORTER_OTLP_${A}_ENDPOINT`);
    if (K === void 0) return;
    return A72(K);
  }
  function TE6(A, K, q) {
    let Y = (0, RB.getStringFromEnv)(A),
      z = (0, RB.getStringFromEnv)(K),
      w = Y ?? z;
    if (w != null) try {
      return r42.readFileSync(o42.resolve(process.cwd(), w));
    } catch {
      PD1.diag.warn(q);
      return;
    } else return;
  }
  function z72(A) {
    return TE6(`OTEL_EXPORTER_OTLP_${A}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function w72(A) {
    return TE6(`OTEL_EXPORTER_OTLP_${A}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function H72(A) {
    return TE6(`OTEL_EXPORTER_OTLP_${A}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function J72(A, K) {
    return {
      ...(0, a42.getSharedConfigurationFromEnvironment)(A),
      url: Y72(A) ?? q72(K),
      headers: (0, s42.wrapStaticHeadersInFunction)(e42(A)),
      agentFactory: (0, t42.httpAgentFactoryFromOptions)({
        keepAlive: !0,
        ca: H72(A),
        cert: z72(A),
        key: w72(A)
      })
    };
  }
  vQ7.getNodeHttpConfigurationFromEnvironment = J72;
});

// Register to shared state
__$.kQ7 = kQ7;
