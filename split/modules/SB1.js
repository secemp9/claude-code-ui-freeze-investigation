// Module: SB1
// Dependencies: H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SB1 = v(NP8 => {
  Object.defineProperty(NP8, "__esModule", {
    value: !0
  });
  var VHA = __$.H8();
  function gFq(A, K) {
    if (!K) return A;
    return A.sdk = A.sdk || {}, A.sdk.name = A.sdk.name || K.name, A.sdk.version = A.sdk.version || K.version, A.sdk.integrations = [...(A.sdk.integrations || []), ...(K.integrations || [])], A.sdk.packages = [...(A.sdk.packages || []), ...(K.packages || [])], A;
  }
  function FFq(A, K, q, Y) {
    let z = VHA.getSdkMetadataForEnvelopeHeader(q),
      w = {
        sent_at: new Date().toISOString(),
        ...(z && {
          sdk: z
        }),
        ...(!!Y && K && {
          dsn: VHA.dsnToString(K)
        })
      },
      H = "aggregates" in A ? [{
        type: "sessions"
      }, A] : [{
        type: "session"
      }, A.toJSON()];
    return VHA.createEnvelope(w, [H]);
  }
  function QFq(A, K, q, Y) {
    let z = VHA.getSdkMetadataForEnvelopeHeader(q),
      w = A.type && A.type !== "replay_event" ? A.type : "event";
    gFq(A, q && q.sdk);
    let H = VHA.createEventEnvelopeHeaders(A, z, Y, K);
    delete A.sdkProcessingMetadata;
    let J = [{
      type: w
    }, A];
    return VHA.createEnvelope(H, [J]);
  }
  NP8.createEventEnvelope = QFq;
  NP8.createSessionEnvelope = FFq;
});

// Register to shared state
__$.SB1 = SB1;
