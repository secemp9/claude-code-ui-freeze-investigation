// Module: e8K
// Dependencies: vy6, tM1, Ty6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e8K = v(GQA => {
  Object.defineProperty(GQA, "__esModule", {
    value: !0
  });
  GQA.FetchHTTPClient = GQA.Context = GQA.Analytics = void 0;
  var nW2 = __$.vy6();
  Object.defineProperty(GQA, "Analytics", {
    enumerable: !0,
    get: function () {
      return nW2.Analytics;
    }
  });
  var rW2 = __$.tM1();
  Object.defineProperty(GQA, "Context", {
    enumerable: !0,
    get: function () {
      return rW2.Context;
    }
  });
  var oW2 = __$.Ty6();
  Object.defineProperty(GQA, "FetchHTTPClient", {
    enumerable: !0,
    get: function () {
      return oW2.FetchHTTPClient;
    }
  });
  var aW2 = __$.vy6();
  GQA.default = aW2.Analytics;
});

// Register to shared state
__$.e8K = e8K;
