// Module: nu1
// Dependencies: Xb, SE, xR

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var nu1 = v(fj8 => {
  Object.defineProperty(fj8, "__esModule", {
    value: !0
  });
  var WIq = __$.Xb(),
    DIq = __$.SE(),
    jIq = __$.xR(),
    MIq = "baggage",
    iu1 = "sentry-",
    Pj8 = /^sentry-/,
    Vj8 = 8192;
  function PIq(A) {
    if (!DIq.isString(A) && !Array.isArray(A)) return;
    let K = {};
    if (Array.isArray(A)) K = A.reduce((Y, z) => {
      let w = Mj8(z);
      for (let H of Object.keys(w)) Y[H] = w[H];
      return Y;
    }, {});else {
      if (!A) return;
      K = Mj8(A);
    }
    let q = Object.entries(K).reduce((Y, [z, w]) => {
      if (z.match(Pj8)) {
        let H = z.slice(iu1.length);
        Y[H] = w;
      }
      return Y;
    }, {});
    if (Object.keys(q).length > 0) return q;else return;
  }
  function VIq(A) {
    if (!A) return;
    let K = Object.entries(A).reduce((q, [Y, z]) => {
      if (z) q[`${iu1}${Y}`] = z;
      return q;
    }, {});
    return fIq(K);
  }
  function Mj8(A) {
    return A.split(",").map(K => K.split("=").map(q => decodeURIComponent(q.trim()))).reduce((K, [q, Y]) => {
      return K[q] = Y, K;
    }, {});
  }
  function fIq(A) {
    if (Object.keys(A).length === 0) return;
    return Object.entries(A).reduce((K, [q, Y], z) => {
      let w = `${encodeURIComponent(q)}=${encodeURIComponent(Y)}`,
        H = z === 0 ? w : `${K},${w}`;
      if (H.length > Vj8) return WIq.DEBUG_BUILD && jIq.logger.warn(`Not adding key: ${q} with val: ${Y} to baggage header due to exceeding baggage size limits.`), K;else return H;
    }, "");
  }
  fj8.BAGGAGE_HEADER_NAME = MIq;
  fj8.MAX_BAGGAGE_STRING_LENGTH = Vj8;
  fj8.SENTRY_BAGGAGE_KEY_PREFIX = iu1;
  fj8.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = Pj8;
  fj8.baggageHeaderToDynamicSamplingContext = PIq;
  fj8.dynamicSamplingContextToSentryBaggageHeader = VIq;
});

// Register to shared state
__$.nu1 = nu1;
