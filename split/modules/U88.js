// Module: U88
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U88 = v(F88 => {
  Object.defineProperty(F88, "__esModule", {
    value: !0
  });
  F88.TestTools = F88.Immediate = void 0;
  var w7q = 1,
    ZS1,
    NoA = {};
  function g88(A) {
    if (A in NoA) return delete NoA[A], !0;
    return !1;
  }
  F88.Immediate = {
    setImmediate: function (A) {
      var K = w7q++;
      if (NoA[K] = !0, !ZS1) ZS1 = Promise.resolve();
      return ZS1.then(function () {
        return g88(K) && A();
      }), K;
    },
    clearImmediate: function (A) {
      g88(A);
    }
  };
  F88.TestTools = {
    pending: function () {
      return Object.keys(NoA).length;
    }
  };
});

// Register to shared state
__$.U88 = U88;
