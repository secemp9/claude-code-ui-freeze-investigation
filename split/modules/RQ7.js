// Module: RQ7
// Dependencies: BgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RQ7 = v(CQ7 => {
  Object.defineProperty(CQ7, "__esModule", {
    value: !0
  });
  CQ7.convertLegacyHeaders = void 0;
  var O72 = __$.BgA();
  function X72(A) {
    if (typeof A.headers === "function") return A.headers;
    return (0, O72.wrapStaticHeadersInFunction)(A.headers);
  }
  CQ7.convertLegacyHeaders = X72;
});

// Register to shared state
__$.RQ7 = RQ7;
