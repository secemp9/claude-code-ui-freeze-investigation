// Module: rr7
// Dependencies: P9, xFA, sp, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rr7 = v(ir7 => {
  Object.defineProperty(ir7, "__esModule", {
    value: !0
  });
  ir7.getOtlpGrpcConfigurationFromEnv = void 0;
  var pr7 = __$.P9(),
    BFA = __$.xFA(),
    nO2 = __$.sp(),
    rO2 = CA("fs"),
    oO2 = CA("path"),
    cr7 = __$.RK();
  function HL6(A, K) {
    if (A != null && A !== "") return A;
    if (K != null && K !== "") return K;
    return;
  }
  function aO2(A) {
    let K = process.env[`OTEL_EXPORTER_OTLP_${A}_HEADERS`]?.trim(),
      q = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(),
      Y = (0, pr7.parseKeyPairsIntoRecord)(K),
      z = (0, pr7.parseKeyPairsIntoRecord)(q);
    if (Object.keys(Y).length === 0 && Object.keys(z).length === 0) return;
    let w = Object.assign({}, z, Y),
      H = (0, BFA.createEmptyMetadata)();
    for (let [J, O] of Object.entries(w)) H.set(J, O);
    return H;
  }
  function sO2(A) {
    let K = aO2(A);
    if (K == null) return;
    return () => K;
  }
  function tO2(A) {
    let K = process.env[`OTEL_EXPORTER_OTLP_${A}_ENDPOINT`]?.trim(),
      q = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
    return HL6(K, q);
  }
  function eO2(A) {
    let K = process.env[`OTEL_EXPORTER_OTLP_${A}_INSECURE`]?.toLowerCase().trim(),
      q = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
    return HL6(K, q) === "true";
  }
  function JL6(A, K, q) {
    let Y = process.env[A]?.trim(),
      z = process.env[K]?.trim(),
      w = HL6(Y, z);
    if (w != null) try {
      return rO2.readFileSync(oO2.resolve(process.cwd(), w));
    } catch {
      cr7.diag.warn(q);
      return;
    } else return;
  }
  function A02(A) {
    return JL6(`OTEL_EXPORTER_OTLP_${A}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function K02(A) {
    return JL6(`OTEL_EXPORTER_OTLP_${A}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function dr7(A) {
    return JL6(`OTEL_EXPORTER_OTLP_${A}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function lr7(A) {
    let K = K02(A),
      q = A02(A),
      Y = dr7(A),
      z = K != null && q != null;
    if (Y != null && !z) return cr7.diag.warn("Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate"), (0, BFA.createSslCredentials)(dr7(A));
    return (0, BFA.createSslCredentials)(Y, K, q);
  }
  function q02(A) {
    if (eO2(A)) return (0, BFA.createInsecureCredentials)();
    return lr7(A);
  }
  function Y02(A) {
    return {
      ...(0, nO2.getSharedConfigurationFromEnvironment)(A),
      metadata: sO2(A),
      url: tO2(A),
      credentials: K => {
        if (K.startsWith("http://")) return () => {
          return (0, BFA.createInsecureCredentials)();
        };else if (K.startsWith("https://")) return () => {
          return lr7(A);
        };
        return () => {
          return q02(A);
        };
      }
    };
  }
  ir7.getOtlpGrpcConfigurationFromEnv = Y02;
});

// Register to shared state
__$.rr7 = rr7;
