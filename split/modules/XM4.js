// Module: XM4
// Dependencies: RK

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XM4 = v(JM4 => {
  Object.defineProperty(JM4, "__esModule", {
    value: !0
  });
  JM4.isAttributeValue = JM4.isAttributeKey = JM4.sanitizeAttributes = void 0;
  var YM4 = __$.RK();
  function Hq9(A) {
    let K = {};
    if (typeof A !== "object" || A == null) return K;
    for (let q in A) {
      if (!Object.prototype.hasOwnProperty.call(A, q)) continue;
      if (!zM4(q)) {
        YM4.diag.warn(`Invalid attribute key: ${q}`);
        continue;
      }
      let Y = A[q];
      if (!wM4(Y)) {
        YM4.diag.warn(`Invalid attribute value set for key: ${q}`);
        continue;
      }
      if (Array.isArray(Y)) K[q] = Y.slice();else K[q] = Y;
    }
    return K;
  }
  JM4.sanitizeAttributes = Hq9;
  function zM4(A) {
    return typeof A === "string" && A !== "";
  }
  JM4.isAttributeKey = zM4;
  function wM4(A) {
    if (A == null) return !0;
    if (Array.isArray(A)) return Jq9(A);
    return HM4(typeof A);
  }
  JM4.isAttributeValue = wM4;
  function Jq9(A) {
    let K;
    for (let q of A) {
      if (q == null) continue;
      let Y = typeof q;
      if (Y === K) continue;
      if (!K) {
        if (HM4(Y)) {
          K = Y;
          continue;
        }
        return !1;
      }
      return !1;
    }
    return !0;
  }
  function HM4(A) {
    switch (A) {
      case "number":
      case "boolean":
      case "string":
        return !0;
    }
    return !1;
  }
});

// Register to shared state
__$.XM4 = XM4;
