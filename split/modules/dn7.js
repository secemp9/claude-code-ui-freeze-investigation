// Module: dn7
// Dependencies: jS, r5A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dn7 = v(pn7 => {
  Object.defineProperty(pn7, "__esModule", {
    value: !0
  });
  pn7.setup = OJ2;
  var HJ2 = __$.jS(),
    JJ2 = __$.r5A();
  class Un7 {
    constructor(A, K, q) {
      this.listener = K, this.hasReturnedResult = !1, this.endpoints = [];
      let Y;
      if (A.authority === "") Y = "/" + A.path;else Y = A.path;
      this.endpoints = [{
        addresses: [{
          path: Y
        }]
      }];
    }
    updateResolution() {
      if (!this.hasReturnedResult) this.hasReturnedResult = !0, process.nextTick(this.listener, (0, JJ2.statusOrFromValue)(this.endpoints), {}, null, "");
    }
    destroy() {
      this.hasReturnedResult = !1;
    }
    static getDefaultAuthority(A) {
      return "localhost";
    }
  }
  function OJ2() {
    (0, HJ2.registerResolver)("unix", Un7);
  }
});

// Register to shared state
__$.dn7 = dn7;
