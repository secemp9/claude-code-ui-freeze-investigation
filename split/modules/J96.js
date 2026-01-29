// Module: J96
// Dependencies: q$, _$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var J96 = v(Vj9 => {
  var Dj9 = __$.q$(),
    H96 = __$._$A(),
    jj9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
      resolve: A => A.slice(-3).toLowerCase() === "nan" ? NaN : A[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: H96.stringifyNumber
    },
    Mj9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: A => parseFloat(A),
      stringify(A) {
        let K = Number(A.value);
        return isFinite(K) ? K.toExponential() : H96.stringifyNumber(A);
      }
    },
    Pj9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
      resolve(A) {
        let K = new Dj9.Scalar(parseFloat(A)),
          q = A.indexOf(".");
        if (q !== -1 && A[A.length - 1] === "0") K.minFractionDigits = A.length - q - 1;
        return K;
      },
      stringify: H96.stringifyNumber
    };
  Vj9.float = Pj9;
  Vj9.floatExp = Mj9;
  Vj9.floatNaN = jj9;
});

// Register to shared state
__$.J96 = J96;
