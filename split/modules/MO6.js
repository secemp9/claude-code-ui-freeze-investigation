// Module: MO6
// Dependencies: WO6, it4, yhA, D1Y, Mu, rV, lt4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MO6 = k(() => {
  __$.WO6();
  __$.it4();
  __$.yhA();
  __$.D1Y = new __$.Mu();
  __$.rV = class rV extends Error {
    constructor(A, K = {}) {
      super(A);
      this.name = "RestError", this.code = K.code, this.statusCode = K.statusCode, Object.defineProperty(this, "request", {
        value: K.request,
        enumerable: !1
      }), Object.defineProperty(this, "response", {
        value: K.response,
        enumerable: !1
      }), Object.defineProperty(this, __$.lt4, {
        value: () => {
          return `RestError: ${this.message} 
 ${__$.D1Y.sanitize(Object.assign(Object.assign({}, this), {
            request: this.request,
            response: this.response
          }))}`;
        },
        enumerable: !1
      }), Object.setPrototypeOf(this, __$.rV.prototype);
    }
  };
  __$.rV.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
  __$.rV.PARSE_ERROR = "PARSE_ERROR";
});

// Register to shared state
__$.MO6 = MO6;
