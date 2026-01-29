// Module: xRA
// Dependencies: j9, _2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xRA = v((b6w, S94) => {
  var {
      addAbortListener: Np3
    } = __$.j9(),
    {
      RequestAbortedError: Tp3
    } = __$._2(),
    L0A = Symbol("kListener"),
    Px = Symbol("kSignal");
  function y94(A) {
    if (A.abort) A.abort(A[Px]?.reason);else A.reason = A[Px]?.reason ?? new Tp3();
    I94(A);
  }
  function vp3(A, K) {
    if (A.reason = null, A[Px] = null, A[L0A] = null, !K) return;
    if (K.aborted) {
      y94(A);
      return;
    }
    A[Px] = K, A[L0A] = () => {
      y94(A);
    }, Np3(A[Px], A[L0A]);
  }
  function I94(A) {
    if (!A[Px]) return;
    if ("removeEventListener" in A[Px]) A[Px].removeEventListener("abort", A[L0A]);else A[Px].removeListener("abort", A[L0A]);
    A[Px] = null, A[L0A] = null;
  }
  S94.exports = {
    addSignal: vp3,
    removeSignal: I94
  };
});

// Register to shared state
__$.xRA = xRA;
