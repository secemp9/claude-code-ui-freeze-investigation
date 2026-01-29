// Module: lI4
// Dependencies: q$, _$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lI4 = v(DM9 => {
  var _M9 = __$.q$(),
    M96 = __$._$A(),
    GM9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
      resolve: A => A.slice(-3).toLowerCase() === "nan" ? NaN : A[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: M96.stringifyNumber
    },
    ZM9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
      resolve: A => parseFloat(A.replace(/_/g, "")),
      stringify(A) {
        let K = Number(A.value);
        return isFinite(K) ? K.toExponential() : M96.stringifyNumber(A);
      }
    },
    WM9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
      resolve(A) {
        let K = new _M9.Scalar(parseFloat(A.replace(/_/g, ""))),
          q = A.indexOf(".");
        if (q !== -1) {
          let Y = A.substring(q + 1).replace(/_/g, "");
          if (Y[Y.length - 1] === "0") K.minFractionDigits = Y.length;
        }
        return K;
      },
      stringify: M96.stringifyNumber
    };
  DM9.float = WM9;
  DM9.floatExp = ZM9;
  DM9.floatNaN = GM9;
});

// Register to shared state
__$.lI4 = lI4;
