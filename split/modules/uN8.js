// Module: uN8
// Dependencies: vHA, EHA, A6A, kHA, yN8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uN8 = v(xN8 => {
  Object.defineProperty(xN8, "__esModule", {
    value: !0
  });
  var bnq = __$.vHA(),
    xnq = __$.EHA(),
    unq = __$.A6A(),
    Bnq = __$.kHA(),
    hN8 = __$.yN8(),
    bN8 = () => {
      return hN8.getInteractionCount();
    },
    IN8 = 10,
    YF = [],
    Gm1 = {},
    SN8 = A => {
      let K = YF[YF.length - 1],
        q = Gm1[A.interactionId];
      if (q || YF.length < IN8 || A.duration > K.latency) {
        if (q) q.entries.push(A), q.latency = Math.max(q.latency, A.duration);else {
          let Y = {
            id: A.interactionId,
            latency: A.duration,
            entries: [A]
          };
          Gm1[Y.id] = Y, YF.push(Y);
        }
        YF.sort((Y, z) => z.latency - Y.latency), YF.splice(IN8).forEach(Y => {
          delete Gm1[Y.id];
        });
      }
    },
    mnq = () => {
      let A = Math.min(YF.length - 1, Math.floor(bN8() / 50));
      return YF[A];
    },
    gnq = (A, K) => {
      K = K || {}, hN8.initInteractionCountPolyfill();
      let q = xnq.initMetric("INP"),
        Y,
        z = H => {
          H.forEach(O => {
            if (O.interactionId) SN8(O);
            if (O.entryType === "first-input") {
              if (!YF.some($ => {
                return $.entries.some(_ => {
                  return O.duration === _.duration && O.startTime === _.startTime;
                });
              })) SN8(O);
            }
          });
          let J = mnq();
          if (J && J.latency !== q.value) q.value = J.latency, q.entries = J.entries, Y();
        },
        w = unq.observe("event", z, {
          durationThreshold: K.durationThreshold || 40
        });
      if (Y = bnq.bindReporter(A, q, K.reportAllChanges), w) w.observe({
        type: "first-input",
        buffered: !0
      }), Bnq.onHidden(() => {
        if (z(w.takeRecords()), q.value < 0 && bN8() > 0) q.value = 0, q.entries = [];
        Y(!0);
      });
    };
  xN8.onINP = gnq;
});

// Register to shared state
__$.uN8 = uN8;
