// Module: cj8
// Dependencies: SE, HvA, $vA, hE

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cj8 = v(dj8 => {
  Object.defineProperty(dj8, "__esModule", {
    value: !0
  });
  var su1 = __$.SE(),
    Uj8 = __$.HvA(),
    fSq = __$.$vA(),
    NSq = __$.hE();
  function tu1(A, K) {
    return A(K.stack || "", 1);
  }
  function pj8(A, K) {
    let q = {
        type: K.name || K.constructor.name,
        value: K.message
      },
      Y = tu1(A, K);
    if (Y.length) q.stacktrace = {
      frames: Y
    };
    return q;
  }
  function TSq(A) {
    if ("name" in A && typeof A.name === "string") {
      let K = `'${A.name}' captured as exception`;
      if ("message" in A && typeof A.message === "string") K += ` with message '${A.message}'`;
      return K;
    } else if ("message" in A && typeof A.message === "string") return A.message;else return `Object captured as exception with keys: ${NSq.extractExceptionKeysForMessage(A)}`;
  }
  function vSq(A, K, q, Y) {
    let z = typeof A === "function" ? A().getClient() : A,
      w = q,
      J = Y && Y.data && Y.data.mechanism || {
        handled: !0,
        type: "generic"
      },
      O;
    if (!su1.isError(q)) {
      if (su1.isPlainObject(q)) {
        let $ = z && z.getOptions().normalizeDepth;
        O = {
          ["__serialized__"]: fSq.normalizeToSize(q, $)
        };
        let _ = TSq(q);
        w = Y && Y.syntheticException || Error(_), w.message = _;
      } else w = Y && Y.syntheticException || Error(q), w.message = q;
      J.synthetic = !0;
    }
    let X = {
      exception: {
        values: [pj8(K, w)]
      }
    };
    if (O) X.extra = O;
    return Uj8.addExceptionTypeValue(X, void 0, void 0), Uj8.addExceptionMechanism(X, J), {
      ...X,
      event_id: Y && Y.event_id
    };
  }
  function ESq(A, K, q = "info", Y, z) {
    let w = {
      event_id: Y && Y.event_id,
      level: q
    };
    if (z && Y && Y.syntheticException) {
      let H = tu1(A, Y.syntheticException);
      if (H.length) w.exception = {
        values: [{
          value: K,
          stacktrace: {
            frames: H
          }
        }]
      };
    }
    if (su1.isParameterizedString(K)) {
      let {
        __sentry_template_string__: H,
        __sentry_template_values__: J
      } = K;
      return w.logentry = {
        message: H,
        params: J
      }, w;
    }
    return w.message = K, w;
  }
  dj8.eventFromMessage = ESq;
  dj8.eventFromUnknownInput = vSq;
  dj8.exceptionFromError = pj8;
  dj8.parseStackFrames = tu1;
});

// Register to shared state
__$.cj8 = cj8;
