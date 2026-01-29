// Module: Oo4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oo4 = v(Jo4 => {
  Object.defineProperty(Jo4, "__esModule", {
    value: !0
  });
  Jo4.validate = Ts9;
  function Ts9(A) {
    let K = [{
      invalid: "uri",
      expected: "url"
    }, {
      invalid: "json",
      expected: "data"
    }, {
      invalid: "qs",
      expected: "params"
    }];
    for (let q of K) if (A[q.invalid]) {
      let Y = `'${q.invalid}' is not a valid configuration option. Please use '${q.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
      throw Error(Y);
    }
  }
});

// Register to shared state
__$.Oo4 = Oo4;
