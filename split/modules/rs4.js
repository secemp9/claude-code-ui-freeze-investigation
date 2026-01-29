// Module: rs4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rs4 = v(is4 => {
  Object.defineProperty(is4, "__esModule", {
    value: !0
  });
  is4.IAMAuth = void 0;
  class ls4 {
    constructor(A, K) {
      this.selector = A, this.token = K, this.selector = A, this.token = K;
    }
    getRequestHeaders() {
      return {
        "x-goog-iam-authority-selector": this.selector,
        "x-goog-iam-authorization-token": this.token
      };
    }
  }
  is4.IAMAuth = ls4;
});

// Register to shared state
__$.rs4 = rs4;
