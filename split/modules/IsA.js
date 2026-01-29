// Module: IsA
// Dependencies: H8, OHA, MvA, hsA, SsA, qV

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var IsA = v(EM8 => {
  Object.defineProperty(EM8, "__esModule", {
    value: !0
  });
  var UN = __$.H8(),
    tuq = __$.OHA(),
    fM8 = __$.MvA(),
    GB1 = __$.hsA(),
    _B1 = __$.SsA(),
    euq = __$.qV();
  function ABq(A, K, q, Y, z, w) {
    let {
        normalizeDepth: H = 3,
        normalizeMaxBreadth: J = 1000
      } = A,
      O = {
        ...K,
        event_id: K.event_id || q.event_id || UN.uuid4(),
        timestamp: K.timestamp || UN.dateTimestampInSeconds()
      },
      X = q.integrations || A.integrations.map(j => j.name);
    if (KBq(O, A), qBq(O, X), K.type === void 0) TM8(O, A.stackParser);
    let $ = zBq(Y, q.captureContext);
    if (q.mechanism) UN.addExceptionMechanism(O, q.mechanism);
    let _ = z && z.getEventProcessors ? z.getEventProcessors() : [],
      G = GB1.getGlobalScope().getScopeData();
    if (w) {
      let j = w.getScopeData();
      _B1.mergeScopeData(G, j);
    }
    if ($) {
      let j = $.getScopeData();
      _B1.mergeScopeData(G, j);
    }
    let Z = [...(q.attachments || []), ...G.attachments];
    if (Z.length) q.attachments = Z;
    _B1.applyScopeDataToEvent(O, G);
    let W = [..._, ...fM8.getGlobalEventProcessors(), ...G.eventProcessors];
    return fM8.notifyEventProcessors(W, O, q).then(j => {
      if (j) vM8(j);
      if (typeof H === "number" && H > 0) return YBq(j, H, J);
      return j;
    });
  }
  function KBq(A, K) {
    let {
      environment: q,
      release: Y,
      dist: z,
      maxValueLength: w = 250
    } = K;
    if (!("environment" in A)) A.environment = "environment" in K ? q : tuq.DEFAULT_ENVIRONMENT;
    if (A.release === void 0 && Y !== void 0) A.release = Y;
    if (A.dist === void 0 && z !== void 0) A.dist = z;
    if (A.message) A.message = UN.truncate(A.message, w);
    let H = A.exception && A.exception.values && A.exception.values[0];
    if (H && H.value) H.value = UN.truncate(H.value, w);
    let J = A.request;
    if (J && J.url) J.url = UN.truncate(J.url, w);
  }
  var NM8 = new WeakMap();
  function TM8(A, K) {
    let q = UN.GLOBAL_OBJ._sentryDebugIds;
    if (!q) return;
    let Y,
      z = NM8.get(K);
    if (z) Y = z;else Y = new Map(), NM8.set(K, Y);
    let w = Object.keys(q).reduce((H, J) => {
      let O,
        X = Y.get(J);
      if (X) O = X;else O = K(J), Y.set(J, O);
      for (let $ = O.length - 1; $ >= 0; $--) {
        let _ = O[$];
        if (_.filename) {
          H[_.filename] = q[J];
          break;
        }
      }
      return H;
    }, {});
    try {
      A.exception.values.forEach(H => {
        H.stacktrace.frames.forEach(J => {
          if (J.filename) J.debug_id = w[J.filename];
        });
      });
    } catch (H) {}
  }
  function vM8(A) {
    let K = {};
    try {
      A.exception.values.forEach(Y => {
        Y.stacktrace.frames.forEach(z => {
          if (z.debug_id) {
            if (z.abs_path) K[z.abs_path] = z.debug_id;else if (z.filename) K[z.filename] = z.debug_id;
            delete z.debug_id;
          }
        });
      });
    } catch (Y) {}
    if (Object.keys(K).length === 0) return;
    A.debug_meta = A.debug_meta || {}, A.debug_meta.images = A.debug_meta.images || [];
    let q = A.debug_meta.images;
    Object.keys(K).forEach(Y => {
      q.push({
        type: "sourcemap",
        code_file: Y,
        debug_id: K[Y]
      });
    });
  }
  function qBq(A, K) {
    if (K.length > 0) A.sdk = A.sdk || {}, A.sdk.integrations = [...(A.sdk.integrations || []), ...K];
  }
  function YBq(A, K, q) {
    if (!A) return null;
    let Y = {
      ...A,
      ...(A.breadcrumbs && {
        breadcrumbs: A.breadcrumbs.map(z => ({
          ...z,
          ...(z.data && {
            data: UN.normalize(z.data, K, q)
          })
        }))
      }),
      ...(A.user && {
        user: UN.normalize(A.user, K, q)
      }),
      ...(A.contexts && {
        contexts: UN.normalize(A.contexts, K, q)
      }),
      ...(A.extra && {
        extra: UN.normalize(A.extra, K, q)
      })
    };
    if (A.contexts && A.contexts.trace && Y.contexts) {
      if (Y.contexts.trace = A.contexts.trace, A.contexts.trace.data) Y.contexts.trace.data = UN.normalize(A.contexts.trace.data, K, q);
    }
    if (A.spans) Y.spans = A.spans.map(z => {
      let w = euq.spanToJSON(z).data;
      if (w) z.data = UN.normalize(w, K, q);
      return z;
    });
    return Y;
  }
  function zBq(A, K) {
    if (!K) return A;
    let q = A ? A.clone() : new GB1.Scope();
    return q.update(K), q;
  }
  function wBq(A) {
    if (!A) return;
    if (HBq(A)) return {
      captureContext: A
    };
    if (OBq(A)) return {
      captureContext: A
    };
    return A;
  }
  function HBq(A) {
    return A instanceof GB1.Scope || typeof A === "function";
  }
  var JBq = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
  function OBq(A) {
    return Object.keys(A).some(K => JBq.includes(K));
  }
  EM8.applyDebugIds = TM8;
  EM8.applyDebugMeta = vM8;
  EM8.parseEventHintOrCaptureContext = wBq;
  EM8.prepareEvent = ABq;
});

// Register to shared state
__$.IsA = IsA;
