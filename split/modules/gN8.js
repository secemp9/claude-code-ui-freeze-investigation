// Module: gN8
// Dependencies: pN, vHA, ftA, vtA, EHA, A6A, kHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gN8 = v(mN8 => {
  Object.defineProperty(mN8, "__esModule", {
    value: !0
  });
  var Qnq = __$.pN(),
    Unq = __$.vHA(),
    pnq = __$.ftA(),
    dnq = __$.vtA(),
    cnq = __$.EHA(),
    lnq = __$.A6A(),
    inq = __$.kHA(),
    BN8 = {},
    nnq = A => {
      let K = dnq.getVisibilityWatcher(),
        q = cnq.initMetric("LCP"),
        Y,
        z = H => {
          let J = H[H.length - 1];
          if (J) {
            let O = Math.max(J.startTime - pnq.getActivationStart(), 0);
            if (O < K.firstHiddenTime) q.value = O, q.entries = [J], Y();
          }
        },
        w = lnq.observe("largest-contentful-paint", z);
      if (w) {
        Y = Unq.bindReporter(A, q);
        let H = () => {
          if (!BN8[q.id]) z(w.takeRecords()), w.disconnect(), BN8[q.id] = !0, Y(!0);
        };
        return ["keydown", "click"].forEach(J => {
          if (Qnq.WINDOW.document) addEventListener(J, H, {
            once: !0,
            capture: !0
          });
        }), inq.onHidden(H, !0), H;
      }
      return;
    };
  mN8.onLCP = nnq;
});

// Register to shared state
__$.gN8 = gN8;
