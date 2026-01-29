// Module: SsA
// Dependencies: H8, n1A, $HA, qV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var SsA = v(bM8 => {
  Object.defineProperty(bM8, "__esModule", {
    value: !0
  });
  var fvA = __$.H8(),
    jmq = __$.n1A(),
    Mmq = __$.$HA(),
    hM8 = __$.qV();
  function Pmq(A, K) {
    let {
      fingerprint: q,
      span: Y,
      breadcrumbs: z,
      sdkProcessingMetadata: w
    } = K;
    if (fmq(A, K), Y) vmq(A, Y);
    Emq(A, q), Nmq(A, z), Tmq(A, w);
  }
  function Vmq(A, K) {
    let {
      extra: q,
      tags: Y,
      user: z,
      contexts: w,
      level: H,
      sdkProcessingMetadata: J,
      breadcrumbs: O,
      fingerprint: X,
      eventProcessors: $,
      attachments: _,
      propagationContext: G,
      transactionName: Z,
      span: W
    } = K;
    if (_HA(A, "extra", q), _HA(A, "tags", Y), _HA(A, "user", z), _HA(A, "contexts", w), _HA(A, "sdkProcessingMetadata", J), H) A.level = H;
    if (Z) A.transactionName = Z;
    if (W) A.span = W;
    if (O.length) A.breadcrumbs = [...A.breadcrumbs, ...O];
    if (X.length) A.fingerprint = [...A.fingerprint, ...X];
    if ($.length) A.eventProcessors = [...A.eventProcessors, ...$];
    if (_.length) A.attachments = [...A.attachments, ..._];
    A.propagationContext = {
      ...A.propagationContext,
      ...G
    };
  }
  function _HA(A, K, q) {
    if (q && Object.keys(q).length) {
      A[K] = {
        ...A[K]
      };
      for (let Y in q) if (Object.prototype.hasOwnProperty.call(q, Y)) A[K][Y] = q[Y];
    }
  }
  function fmq(A, K) {
    let {
        extra: q,
        tags: Y,
        user: z,
        contexts: w,
        level: H,
        transactionName: J
      } = K,
      O = fvA.dropUndefinedKeys(q);
    if (O && Object.keys(O).length) A.extra = {
      ...O,
      ...A.extra
    };
    let X = fvA.dropUndefinedKeys(Y);
    if (X && Object.keys(X).length) A.tags = {
      ...X,
      ...A.tags
    };
    let $ = fvA.dropUndefinedKeys(z);
    if ($ && Object.keys($).length) A.user = {
      ...$,
      ...A.user
    };
    let _ = fvA.dropUndefinedKeys(w);
    if (_ && Object.keys(_).length) A.contexts = {
      ..._,
      ...A.contexts
    };
    if (H) A.level = H;
    if (J) A.transaction = J;
  }
  function Nmq(A, K) {
    let q = [...(A.breadcrumbs || []), ...K];
    A.breadcrumbs = q.length ? q : void 0;
  }
  function Tmq(A, K) {
    A.sdkProcessingMetadata = {
      ...A.sdkProcessingMetadata,
      ...K
    };
  }
  function vmq(A, K) {
    A.contexts = {
      trace: hM8.spanToTraceContext(K),
      ...A.contexts
    };
    let q = Mmq.getRootSpan(K);
    if (q) {
      A.sdkProcessingMetadata = {
        dynamicSamplingContext: jmq.getDynamicSamplingContextFromSpan(K),
        ...A.sdkProcessingMetadata
      };
      let Y = hM8.spanToJSON(q).description;
      if (Y) A.tags = {
        transaction: Y,
        ...A.tags
      };
    }
  }
  function Emq(A, K) {
    if (A.fingerprint = A.fingerprint ? fvA.arrayify(A.fingerprint) : [], K) A.fingerprint = A.fingerprint.concat(K);
    if (A.fingerprint && !A.fingerprint.length) delete A.fingerprint;
  }
  bM8.applyScopeDataToEvent = Pmq;
  bM8.mergeAndOverwriteScopeData = _HA;
  bM8.mergeScopeData = Vmq;
});

// Register to shared state
__$.SsA = SsA;
