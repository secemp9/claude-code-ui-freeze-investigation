// Module: LHA
// Dependencies: H8, wV, vN8, CN8, uN8, gN8, A6A, QN8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var LHA = v(oN8 => {
  Object.defineProperty(oN8, "__esModule", {
    value: !0
  });
  var UN8 = __$.H8(),
    Krq = __$.wV(),
    qrq = __$.vN8(),
    Yrq = __$.CN8(),
    zrq = __$.uN8(),
    wrq = __$.gN8(),
    Hrq = __$.A6A(),
    Jrq = __$.QN8(),
    mvA = {},
    ktA = {},
    pN8,
    dN8,
    cN8,
    lN8,
    iN8;
  function Orq(A, K = !1) {
    return gvA("cls", A, Wrq, pN8, K);
  }
  function Xrq(A, K = !1) {
    return gvA("lcp", A, jrq, cN8, K);
  }
  function $rq(A) {
    return gvA("ttfb", A, Mrq, lN8);
  }
  function _rq(A) {
    return gvA("fid", A, Drq, dN8);
  }
  function Grq(A) {
    return gvA("inp", A, Prq, iN8);
  }
  function Zrq(A, K) {
    if (nN8(A, K), !ktA[A]) Vrq(A), ktA[A] = !0;
    return rN8(A, K);
  }
  function CHA(A, K) {
    let q = mvA[A];
    if (!q || !q.length) return;
    for (let Y of q) try {
      Y(K);
    } catch (z) {
      Krq.DEBUG_BUILD && UN8.logger.error(`Error while triggering instrumentation handler.
Type: ${A}
Name: ${UN8.getFunctionName(Y)}
Error:`, z);
    }
  }
  function Wrq() {
    return qrq.onCLS(A => {
      CHA("cls", {
        metric: A
      }), pN8 = A;
    }, {
      reportAllChanges: !0
    });
  }
  function Drq() {
    return Yrq.onFID(A => {
      CHA("fid", {
        metric: A
      }), dN8 = A;
    });
  }
  function jrq() {
    return wrq.onLCP(A => {
      CHA("lcp", {
        metric: A
      }), cN8 = A;
    });
  }
  function Mrq() {
    return Jrq.onTTFB(A => {
      CHA("ttfb", {
        metric: A
      }), lN8 = A;
    });
  }
  function Prq() {
    return zrq.onINP(A => {
      CHA("inp", {
        metric: A
      }), iN8 = A;
    });
  }
  function gvA(A, K, q, Y, z = !1) {
    nN8(A, K);
    let w;
    if (!ktA[A]) w = q(), ktA[A] = !0;
    if (Y) K({
      metric: Y
    });
    return rN8(A, K, z ? w : void 0);
  }
  function Vrq(A) {
    let K = {};
    if (A === "event") K.durationThreshold = 0;
    Hrq.observe(A, q => {
      CHA(A, {
        entries: q
      });
    }, K);
  }
  function nN8(A, K) {
    mvA[A] = mvA[A] || [], mvA[A].push(K);
  }
  function rN8(A, K, q) {
    return () => {
      if (q) q();
      let Y = mvA[A];
      if (!Y) return;
      let z = Y.indexOf(K);
      if (z !== -1) Y.splice(z, 1);
    };
  }
  oN8.addClsInstrumentationHandler = Orq;
  oN8.addFidInstrumentationHandler = _rq;
  oN8.addInpInstrumentationHandler = Grq;
  oN8.addLcpInstrumentationHandler = Xrq;
  oN8.addPerformanceInstrumentationHandler = Zrq;
  oN8.addTtfbInstrumentationHandler = $rq;
});

// Register to shared state
__$.LHA = LHA;
