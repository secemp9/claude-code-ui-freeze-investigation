// Module: Nk8
// Dependencies: sq, H8, ovA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Nk8 = v(fk8 => {
  Object.defineProperty(fk8, "__esModule", {
    value: !0
  });
  var Wk8 = __$.sq(),
    e15 = __$.H8(),
    A65 = __$.ovA(),
    Dk8 = "Dedupe",
    K65 = () => {
      let A;
      return {
        name: Dk8,
        setupOnce() {},
        processEvent(K) {
          if (K.type) return K;
          try {
            if (Mk8(K, A)) return A65.DEBUG_BUILD && e15.logger.warn("Event dropped due to being a duplicate of previously captured event."), null;
          } catch (q) {}
          return A = K;
        }
      };
    },
    jk8 = Wk8.defineIntegration(K65),
    q65 = Wk8.convertIntegrationFnToClass(Dk8, jk8);
  function Mk8(A, K) {
    if (!K) return !1;
    if (Y65(A, K)) return !0;
    if (z65(A, K)) return !0;
    return !1;
  }
  function Y65(A, K) {
    let q = A.message,
      Y = K.message;
    if (!q && !Y) return !1;
    if (q && !Y || !q && Y) return !1;
    if (q !== Y) return !1;
    if (!Vk8(A, K)) return !1;
    if (!Pk8(A, K)) return !1;
    return !0;
  }
  function z65(A, K) {
    let q = Gk8(K),
      Y = Gk8(A);
    if (!q || !Y) return !1;
    if (q.type !== Y.type || q.value !== Y.value) return !1;
    if (!Vk8(A, K)) return !1;
    if (!Pk8(A, K)) return !1;
    return !0;
  }
  function Pk8(A, K) {
    let q = Zk8(A),
      Y = Zk8(K);
    if (!q && !Y) return !0;
    if (q && !Y || !q && Y) return !1;
    if (q = q, Y = Y, Y.length !== q.length) return !1;
    for (let z = 0; z < Y.length; z++) {
      let w = Y[z],
        H = q[z];
      if (w.filename !== H.filename || w.lineno !== H.lineno || w.colno !== H.colno || w.function !== H.function) return !1;
    }
    return !0;
  }
  function Vk8(A, K) {
    let q = A.fingerprint,
      Y = K.fingerprint;
    if (!q && !Y) return !0;
    if (q && !Y || !q && Y) return !1;
    q = q, Y = Y;
    try {
      return q.join("") === Y.join("");
    } catch (z) {
      return !1;
    }
  }
  function Gk8(A) {
    return A.exception && A.exception.values && A.exception.values[0];
  }
  function Zk8(A) {
    let K = A.exception;
    if (K) try {
      return K.values[0].stacktrace.frames;
    } catch (q) {
      return;
    }
    return;
  }
  fk8.Dedupe = q65;
  fk8._shouldDropEvent = Mk8;
  fk8.dedupeIntegration = jk8;
});

// Register to shared state
__$.Nk8 = Nk8;
