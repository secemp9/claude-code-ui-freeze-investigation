// Module: au1
// Dependencies: Xu1, $vA, hE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var au1 = v(Lj8 => {
  Object.defineProperty(Lj8, "__esModule", {
    value: !0
  });
  var uIq = __$.Xu1(),
    BIq = __$.$vA(),
    kj8 = __$.hE();
  function mIq(A, K = []) {
    return [A, K];
  }
  function gIq(A, K) {
    let [q, Y] = A;
    return [q, [...Y, K]];
  }
  function Cj8(A, K) {
    let q = A[1];
    for (let Y of q) {
      let z = Y[0].type;
      if (K(Y, z)) return !0;
    }
    return !1;
  }
  function FIq(A, K) {
    return Cj8(A, (q, Y) => K.includes(Y));
  }
  function ou1(A, K) {
    return (K || new TextEncoder()).encode(A);
  }
  function QIq(A, K) {
    let [q, Y] = A,
      z = JSON.stringify(q);
    function w(H) {
      if (typeof z === "string") z = typeof H === "string" ? z + H : [ou1(z, K), H];else z.push(typeof H === "string" ? ou1(H, K) : H);
    }
    for (let H of Y) {
      let [J, O] = H;
      if (w(`
${JSON.stringify(J)}
`), typeof O === "string" || O instanceof Uint8Array) w(O);else {
        let X;
        try {
          X = JSON.stringify(O);
        } catch ($) {
          X = JSON.stringify(BIq.normalize(O));
        }
        w(X);
      }
    }
    return typeof z === "string" ? z : UIq(z);
  }
  function UIq(A) {
    let K = A.reduce((z, w) => z + w.length, 0),
      q = new Uint8Array(K),
      Y = 0;
    for (let z of A) q.set(z, Y), Y += z.length;
    return q;
  }
  function pIq(A, K, q) {
    let Y = typeof A === "string" ? K.encode(A) : A;
    function z(O) {
      let X = Y.subarray(0, O);
      return Y = Y.subarray(O + 1), X;
    }
    function w() {
      let O = Y.indexOf(10);
      if (O < 0) O = Y.length;
      return JSON.parse(q.decode(z(O)));
    }
    let H = w(),
      J = [];
    while (Y.length) {
      let O = w(),
        X = typeof O.length === "number" ? O.length : void 0;
      J.push([O, X ? z(X) : w()]);
    }
    return [H, J];
  }
  function dIq(A, K) {
    let q = typeof A.data === "string" ? ou1(A.data, K) : A.data;
    return [kj8.dropUndefinedKeys({
      type: "attachment",
      length: q.length,
      filename: A.filename,
      content_type: A.contentType,
      attachment_type: A.attachmentType
    }), q];
  }
  var cIq = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
  };
  function lIq(A) {
    return cIq[A];
  }
  function iIq(A) {
    if (!A || !A.sdk) return;
    let {
      name: K,
      version: q
    } = A.sdk;
    return {
      name: K,
      version: q
    };
  }
  function nIq(A, K, q, Y) {
    let z = A.sdkProcessingMetadata && A.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: A.event_id,
      sent_at: new Date().toISOString(),
      ...(K && {
        sdk: K
      }),
      ...(!!q && Y && {
        dsn: uIq.dsnToString(Y)
      }),
      ...(z && {
        trace: kj8.dropUndefinedKeys({
          ...z
        })
      })
    };
  }
  Lj8.addItemToEnvelope = gIq;
  Lj8.createAttachmentEnvelopeItem = dIq;
  Lj8.createEnvelope = mIq;
  Lj8.createEventEnvelopeHeaders = nIq;
  Lj8.envelopeContainsItemType = FIq;
  Lj8.envelopeItemTypeToDataCategory = lIq;
  Lj8.forEachEnvelopeItem = Cj8;
  Lj8.getSdkMetadataForEnvelopeHeader = iIq;
  Lj8.parseEnvelope = pIq;
  Lj8.serializeEnvelope = QIq;
});

// Register to shared state
__$.au1 = au1;
