// Module: mu1
// Dependencies: Bu1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mu1 = v((uD8, NsA) => {
  Object.defineProperty(uD8, "__esModule", {
    value: !0
  });
  var mRq = __$.Bu1();
  function gRq() {
    return !mRq.isBrowserBundle() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]";
  }
  function fsA(A, K) {
    return A.require(K);
  }
  function FRq(A) {
    let K;
    try {
      K = fsA(NsA, A);
    } catch (q) {}
    try {
      let {
        cwd: q
      } = fsA(NsA, "process");
      K = fsA(NsA, `${q()}/node_modules/${A}`);
    } catch (q) {}
    return K;
  }
  uD8.dynamicRequire = fsA;
  uD8.isNodeEnv = gRq;
  uD8.loadModule = FRq;
});

// Register to shared state
__$.mu1 = mu1;
