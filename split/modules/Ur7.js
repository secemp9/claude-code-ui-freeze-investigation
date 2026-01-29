// Module: Ur7
// Dependencies: EB, xFA, RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ur7 = v(Fr7 => {
  Object.defineProperty(Fr7, "__esModule", {
    value: !0
  });
  Fr7.getOtlpGrpcDefaultConfiguration = Fr7.mergeOtlpGrpcConfigurationWithDefaults = Fr7.validateAndNormalizeUrl = void 0;
  var mr7 = __$.EB(),
    uFA = __$.xFA(),
    pO2 = CA("url"),
    ur7 = __$.RK();
  function gr7(A) {
    if (A = A.trim(), !A.match(/^([\w]{1,8}):\/\//)) A = `https://${A}`;
    let q = new pO2.URL(A);
    if (q.protocol === "unix:") return A;
    if (q.pathname && q.pathname !== "/") ur7.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
    if (q.protocol !== "" && !q.protocol?.match(/^(http)s?:$/)) ur7.diag.warn("URL protocol should be http(s)://. Using http://.");
    return q.host;
  }
  Fr7.validateAndNormalizeUrl = gr7;
  function Br7(A, K) {
    for (let [q, Y] of Object.entries(K.getMap())) if (A.get(q).length < 1) A.set(q, Y);
  }
  function dO2(A, K, q) {
    let Y = A.url ?? K.url ?? q.url;
    return {
      ...(0, mr7.mergeOtlpSharedConfigurationWithDefaults)(A, K, q),
      metadata: () => {
        let z = q.metadata();
        return Br7(z, A.metadata?.().clone() ?? (0, uFA.createEmptyMetadata)()), Br7(z, K.metadata?.() ?? (0, uFA.createEmptyMetadata)()), z;
      },
      url: gr7(Y),
      credentials: A.credentials ?? K.credentials?.(Y) ?? q.credentials(Y),
      userAgent: A.userAgent
    };
  }
  Fr7.mergeOtlpGrpcConfigurationWithDefaults = dO2;
  function cO2() {
    return {
      ...(0, mr7.getSharedConfigurationDefaults)(),
      metadata: () => (0, uFA.createEmptyMetadata)(),
      url: "http://localhost:4317",
      credentials: A => {
        if (A.startsWith("http://")) return () => (0, uFA.createInsecureCredentials)();else return () => (0, uFA.createSslCredentials)();
      }
    };
  }
  Fr7.getOtlpGrpcDefaultConfiguration = cO2;
});

// Register to shared state
__$.Ur7 = Ur7;
