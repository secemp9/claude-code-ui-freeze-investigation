// Module: WD1
// Dependencies: P9, xg7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WD1 = v(Fg7 => {
  Object.defineProperty(Fg7, "__esModule", {
    value: !0
  });
  Fg7.getOtlpEncoder = Fg7.encodeAsString = Fg7.encodeAsLongBits = Fg7.toLongBits = Fg7.hrTimeToNanos = void 0;
  var i62 = __$.P9(),
    HE6 = __$.xg7();
  function JE6(A) {
    let K = BigInt(1e9);
    return BigInt(Math.trunc(A[0])) * K + BigInt(Math.trunc(A[1]));
  }
  Fg7.hrTimeToNanos = JE6;
  function Bg7(A) {
    let K = Number(BigInt.asUintN(32, A)),
      q = Number(BigInt.asUintN(32, A >> BigInt(32)));
    return {
      low: K,
      high: q
    };
  }
  Fg7.toLongBits = Bg7;
  function OE6(A) {
    let K = JE6(A);
    return Bg7(K);
  }
  Fg7.encodeAsLongBits = OE6;
  function mg7(A) {
    return JE6(A).toString();
  }
  Fg7.encodeAsString = mg7;
  var n62 = typeof BigInt < "u" ? mg7 : i62.hrTimeToNanoseconds;
  function ug7(A) {
    return A;
  }
  function gg7(A) {
    if (A === void 0) return;
    return (0, HE6.hexToBinary)(A);
  }
  var r62 = {
    encodeHrTime: OE6,
    encodeSpanContext: HE6.hexToBinary,
    encodeOptionalSpanContext: gg7
  };
  function o62(A) {
    if (A === void 0) return r62;
    let K = A.useLongBits ?? !0,
      q = A.useHex ?? !1;
    return {
      encodeHrTime: K ? OE6 : n62,
      encodeSpanContext: q ? ug7 : HE6.hexToBinary,
      encodeOptionalSpanContext: q ? ug7 : gg7
    };
  }
  Fg7.getOtlpEncoder = o62;
});

// Register to shared state
__$.WD1 = WD1;
