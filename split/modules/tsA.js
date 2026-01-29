// Module: tsA
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tsA = v(kP8 => {
  Object.defineProperty(kP8, "__esModule", {
    value: !0
  });
  var bB1 = __$.H8(),
    iFq = "7";
  function EP8(A) {
    let K = A.protocol ? `${A.protocol}:` : "",
      q = A.port ? `:${A.port}` : "";
    return `${K}//${A.host}${q}${A.path ? `/${A.path}` : ""}/api/`;
  }
  function nFq(A) {
    return `${EP8(A)}${A.projectId}/envelope/`;
  }
  function rFq(A, K) {
    return bB1.urlEncode({
      sentry_key: A.publicKey,
      sentry_version: iFq,
      ...(K && {
        sentry_client: `${K.name}/${K.version}`
      })
    });
  }
  function oFq(A, K = {}) {
    let q = typeof K === "string" ? K : K.tunnel,
      Y = typeof K === "string" || !K._metadata ? void 0 : K._metadata.sdk;
    return q ? q : `${nFq(A)}?${rFq(A, Y)}`;
  }
  function aFq(A, K) {
    let q = bB1.makeDsn(A);
    if (!q) return "";
    let Y = `${EP8(q)}embed/error-page/`,
      z = `dsn=${bB1.dsnToString(q)}`;
    for (let w in K) {
      if (w === "dsn") continue;
      if (w === "onClose") continue;
      if (w === "user") {
        let H = K.user;
        if (!H) continue;
        if (H.name) z += `&name=${encodeURIComponent(H.name)}`;
        if (H.email) z += `&email=${encodeURIComponent(H.email)}`;
      } else z += `&${encodeURIComponent(w)}=${encodeURIComponent(K[w])}`;
    }
    return `${Y}?${z}`;
  }
  kP8.getEnvelopeEndpointWithUrlEncodedAuth = oFq;
  kP8.getReportDialogEndpoint = aFq;
});

// Register to shared state
__$.tsA = tsA;
