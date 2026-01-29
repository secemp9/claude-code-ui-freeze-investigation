// Module: vN8
// Dependencies: vHA, EHA, A6A, kHA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var vN8 = v(TN8 => {
  Object.defineProperty(TN8, "__esModule", {
    value: !0
  });
  var Xnq = __$.vHA(),
    $nq = __$.EHA(),
    _nq = __$.A6A(),
    Gnq = __$.kHA(),
    Znq = (A, K = {}) => {
      let q = $nq.initMetric("CLS", 0),
        Y,
        z = 0,
        w = [],
        H = O => {
          O.forEach(X => {
            if (!X.hadRecentInput) {
              let $ = w[0],
                _ = w[w.length - 1];
              if (z && w.length !== 0 && X.startTime - _.startTime < 1000 && X.startTime - $.startTime < 5000) z += X.value, w.push(X);else z = X.value, w = [X];
              if (z > q.value) {
                if (q.value = z, q.entries = w, Y) Y();
              }
            }
          });
        },
        J = _nq.observe("layout-shift", H);
      if (J) {
        Y = Xnq.bindReporter(A, q, K.reportAllChanges);
        let O = () => {
          H(J.takeRecords()), Y(!0);
        };
        return Gnq.onHidden(O), O;
      }
      return;
    };
  TN8.onCLS = Znq;
});

// Register to shared state
__$.vN8 = vN8;
