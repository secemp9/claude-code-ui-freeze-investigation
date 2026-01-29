// Module: Ck8
// Dependencies: sq, H8, ovA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ck8 = v(kk8 => {
  Object.defineProperty(kk8, "__esModule", {
    value: !0
  });
  var Tk8 = __$.sq(),
    Mi = __$.H8(),
    O65 = __$.ovA(),
    vk8 = "ExtraErrorData",
    X65 = (A = {}) => {
      let K = A.depth || 3,
        q = A.captureErrorCause || !1;
      return {
        name: vk8,
        setupOnce() {},
        processEvent(Y, z) {
          return _65(Y, z, K, q);
        }
      };
    },
    Ek8 = Tk8.defineIntegration(X65),
    $65 = Tk8.convertIntegrationFnToClass(vk8, Ek8);
  function _65(A, K = {}, q, Y) {
    if (!K.originalException || !Mi.isError(K.originalException)) return A;
    let z = K.originalException.name || K.originalException.constructor.name,
      w = G65(K.originalException, Y);
    if (w) {
      let H = {
          ...A.contexts
        },
        J = Mi.normalize(w, q);
      if (Mi.isPlainObject(J)) Mi.addNonEnumerableProperty(J, "__sentry_skip_normalization__", !0), H[z] = J;
      return {
        ...A,
        contexts: H
      };
    }
    return A;
  }
  function G65(A, K) {
    try {
      let q = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
        Y = {};
      for (let z of Object.keys(A)) {
        if (q.indexOf(z) !== -1) continue;
        let w = A[z];
        Y[z] = Mi.isError(w) ? w.toString() : w;
      }
      if (K && A.cause !== void 0) Y.cause = Mi.isError(A.cause) ? A.cause.toString() : A.cause;
      if (typeof A.toJSON === "function") {
        let z = A.toJSON();
        for (let w of Object.keys(z)) {
          let H = z[w];
          Y[w] = Mi.isError(H) ? H.toString() : H;
        }
      }
      return Y;
    } catch (q) {
      O65.DEBUG_BUILD && Mi.logger.error("Unable to extract extra data from the Error object:", q);
    }
    return null;
  }
  kk8.ExtraErrorData = $65;
  kk8.extraErrorDataIntegration = Ek8;
});

// Register to shared state
__$.Ck8 = Ck8;
