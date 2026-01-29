// Module: R24
// Dependencies: MJ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var R24 = v((A8w, L24) => {
  var {
    kConnected: v24,
    kSize: E24
  } = __$.MJ();
  class k24 {
    constructor(A) {
      this.value = A;
    }
    deref() {
      return this.value[v24] === 0 && this.value[E24] === 0 ? void 0 : this.value;
    }
  }
  class C24 {
    constructor(A) {
      this.finalizer = A;
    }
    register(A, K) {
      if (A.on) A.on("disconnect", () => {
        if (A[v24] === 0 && A[E24] === 0) this.finalizer(K);
      });
    }
    unregister(A) {}
  }
  L24.exports = function () {
    if (process.env.NODE_V8_COVERAGE && process.version.startsWith("v18")) return process._rawDebug("Using compatibility WeakRef and FinalizationRegistry"), {
      WeakRef: k24,
      FinalizationRegistry: C24
    };
    return {
      WeakRef,
      FinalizationRegistry
    };
  };
});

// Register to shared state
__$.R24 = R24;
